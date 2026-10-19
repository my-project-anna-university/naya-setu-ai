import { queryKnowledgeBase } from '../data/legalKnowledge.js';

/**
 * AI Legal Assistant helper using Google Gemini API with fallback to Indian Legal Knowledge Base.
 */
export async function getLegalAiResponse(question, category = null, language = 'en') {
  const apiKey = process.env.GEMINI_API_KEY;

  // Fallback engine if no Gemini API key configured
  const localKnowledge = queryKnowledgeBase(question, category);

  if (!apiKey || apiKey.trim() === '') {
    return {
      ...localKnowledge,
      isAiGenerated: false,
      aiModel: 'NyayaSetu Knowledge Engine (Offline/Rule-based)',
    };
  }

  // If Gemini API Key exists, query Gemini 1.5 Flash
  try {
    const prompt = `You are NyayaSetu AI, an expert Indian legal rights assistant.
Analyze this legal question from an Indian citizen:
Question: "${question}"
Category hint: "${category || 'general'}"
Preferred Language: "${language}"

Provide a structured, empathetic, legally accurate response based strictly on Indian law (e.g. Consumer Protection Act 2019, IT Act 2000, IPC/BNS, CrPC/BNSS, RERA, Constitution of India, etc.).

Format your output in valid JSON matching this schema:
{
  "category": "consumer|labor|property|family|criminal|constitutional|women|cyber",
  "summary": "1-2 sentence core legal answer",
  "keyRights": ["Right 1 description", "Right 2 description"],
  "applicableLaws": ["Specific Act and Section numbers"],
  "recommendedActions": ["Immediate Step 1", "Step 2", "Step 3"],
  "helplines": ["National or state official helpline phone numbers/websites"],
  "sourceRef": "Statutory reference citation",
  "fullAnswer": "Detailed markdown explanation with headers and practical guidance"
}`;

    const endpoint = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${apiKey}`;
    
    // Set a 7-second timeout for rapid responsiveness
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 7000);

    const response = await fetch(endpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        contents: [
          {
            parts: [{ text: prompt }],
          },
        ],
        generationConfig: {
          temperature: 0.2,
          maxOutputTokens: 1500,
          responseMimeType: 'application/json',
        },
      }),
      signal: controller.signal,
    });

    clearTimeout(timeoutId);

    if (!response.ok) {
      console.warn(`[AI Helper] Gemini API returned status ${response.status}. Using knowledge base fallback.`);
      return {
        ...localKnowledge,
        isAiGenerated: false,
        aiModel: 'NyayaSetu Knowledge Engine (Fallback)',
      };
    }

    const data = await response.json();
    const responseText = data?.candidates?.[0]?.content?.parts?.[0]?.text;

    if (!responseText) {
      return {
        ...localKnowledge,
        isAiGenerated: false,
        aiModel: 'NyayaSetu Knowledge Engine (Fallback)',
      };
    }

    try {
      const parsed = JSON.parse(responseText);
      return {
        category: parsed.category || localKnowledge.category,
        summary: parsed.summary || localKnowledge.summary,
        keyRights: parsed.keyRights?.length ? parsed.keyRights : localKnowledge.keyRights,
        applicableLaws: parsed.applicableLaws?.length ? parsed.applicableLaws : localKnowledge.applicableLaws,
        recommendedActions: parsed.recommendedActions?.length ? parsed.recommendedActions : localKnowledge.recommendedActions,
        helplines: parsed.helplines?.length ? parsed.helplines : localKnowledge.helplines,
        sourceRef: parsed.sourceRef || localKnowledge.sourceRef,
        fullAnswer: parsed.fullAnswer || localKnowledge.fullAnswer,
        isAiGenerated: true,
        aiModel: 'Google Gemini 1.5 Flash',
      };
    } catch {
      // If parsing failed, return text wrapped in answer
      return {
        ...localKnowledge,
        fullAnswer: responseText,
        isAiGenerated: true,
        aiModel: 'Google Gemini 1.5 Flash (Raw)',
      };
    }
  } catch (err) {
    console.warn(`[AI Helper] Error contacting Gemini API: ${err.message}. Using offline knowledge base.`);
    return {
      ...localKnowledge,
      isAiGenerated: false,
      aiModel: 'NyayaSetu Knowledge Engine (Fallback on Network Error)',
    };
  }
}

export default getLegalAiResponse;
