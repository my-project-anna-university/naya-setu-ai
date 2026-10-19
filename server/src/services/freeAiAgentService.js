/**
 * Universal Free AI Agent Service for NyayaSetu
 * 
 * Enables true generative reasoning and deep context understanding by connecting
 * to 100% FREE AI Agent providers:
 * 1. Groq Cloud (Llama 3.3 70B Versatile & DeepSeek R1 - 100% Free Tier, zero credit card)
 * 2. Google Gemini (Gemini 1.5 Flash - 100% Free Tier, 1500 requests/day)
 * 3. OpenRouter (Free Model Router: deepseek-r1:free, llama-3.3-70b:free)
 * 4. Local Ollama (http://localhost:11434 - 100% Local, Offline & Free)
 */

const SYSTEM_PROMPT = `You are "Nyaya AI Counsel", an expert senior advocate and legal scholar specialized in the Indian Legal System.
You provide deep, context-aware, highly empathetic, and legally precise counsel to Indian citizens.

CRITICAL INSTRUCTIONS UNDER INDIAN LAW:
1. Applicable Criminal Laws: As of 1 July 2024, the Indian Penal Code (IPC) and CrPC have been replaced by the Bharatiya Nyaya Sanhita, 2023 (BNS) and Bharatiya Nagarik Suraksha Sanhita, 2023 (BNSS). Always cite the current BNS/BNSS sections first, noting corresponding IPC/CrPC sections in parentheses for historical reference.
2. Exact Analysis of Facts: Carefully parse names, dates, timestamps, speeds, blood alcohol concentrations (BAC), insurance status, and relationships in the user's prompt. Never ignore facts.
3. Statutory Citations: Cite exact Acts and Sections (e.g. Section 138 NI Act, Section 105/106(2) BNS, Section 166/185 MV Act, Section 66D IT Act, Consumer Protection Act 2019, Model Tenancy Act 2021).
4. Landmark Precedents: Reference binding Supreme Court precedents where applicable (e.g., Pranay Sethi / Sarla Verma for MACT multipliers, Swaran Singh for "Pay and Recover", Lalita Kumari for mandatory FIR, D.K. Basu for arrest safeguards).
5. Tone: Authoritative, compassionate, and structured.

FORMAT YOUR RESPONSE IN VALID JSON MATCHING THIS SCHEMA EXACTLY:
{
  "category": "consumer|labor|property|family|criminal|constitutional|women|cyber",
  "categoryTitle": "Specific Legal Sub-Domain Title",
  "summary": "2-3 sentence core legal verdict directly resolving the dispute",
  "keyRights": ["Enforceable Right 1", "Enforceable Right 2", "Enforceable Right 3"],
  "applicableLaws": ["Specific Act and Section Citation 1", "Citation 2", "Citation 3"],
  "recommendedActions": ["Step 1", "Step 2", "Step 3", "Step 4"],
  "helplines": ["Official Helpline 1", "Helpline 2"],
  "sourceRef": "Primary Statutory Section / Landmark Judgment",
  "fullAnswer": "Complete, comprehensive legal advisory formatted in rich Markdown with headers, bold text, bullet points, and step-by-step action roadmap"
}`;

/**
 * Call Groq Cloud API (100% Free Tier - Llama 3.3 70B / DeepSeek R1)
 */
async function callGroqApi(prompt, apiKey) {
  const endpoint = 'https://api.groq.com/openai/v1/chat/completions';
  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), 12000);

  const response = await fetch(endpoint, {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${apiKey}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      model: 'llama-3.3-70b-versatile',
      messages: [
        { role: 'system', content: SYSTEM_PROMPT },
        { role: 'user', content: prompt }
      ],
      response_format: { type: 'json_object' },
      temperature: 0.2,
      max_tokens: 2500
    }),
    signal: controller.signal
  });

  clearTimeout(timeoutId);

  if (!response.ok) {
    const errText = await response.text();
    throw new Error(`Groq API returned ${response.status}: ${errText.slice(0, 100)}`);
  }

  const data = await response.json();
  const rawContent = data.choices?.[0]?.message?.content;
  return {
    rawContent,
    modelName: 'Meta Llama 3.3 70B (via Free Groq AI Agent)'
  };
}

/**
 * Call Google Gemini API (100% Free Tier - Gemini 1.5 Flash)
 */
async function callGeminiApi(prompt, apiKey) {
  const endpoint = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${apiKey}`;
  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), 12000);

  const response = await fetch(endpoint, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      systemInstruction: {
        parts: [{ text: SYSTEM_PROMPT }]
      },
      contents: [{ parts: [{ text: prompt }] }],
      generationConfig: {
        temperature: 0.2,
        maxOutputTokens: 2500,
        responseMimeType: 'application/json'
      }
    }),
    signal: controller.signal
  });

  clearTimeout(timeoutId);

  if (!response.ok) {
    const errText = await response.text();
    throw new Error(`Gemini API returned ${response.status}: ${errText.slice(0, 100)}`);
  }

  const data = await response.json();
  const rawContent = data.candidates?.[0]?.content?.parts?.[0]?.text;
  return {
    rawContent,
    modelName: 'Google Gemini 1.5 Flash (Free AI Agent)'
  };
}

/**
 * Call OpenRouter Free Models (DeepSeek R1 / Llama 3.3 Free)
 */
async function callOpenRouterApi(prompt, apiKey) {
  const endpoint = 'https://openrouter.ai/api/v1/chat/completions';
  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), 14000);

  const response = await fetch(endpoint, {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${apiKey}`,
      'Content-Type': 'application/json',
      'HTTP-Referer': 'https://nyayasetu.org',
      'X-Title': 'NyayaSetu AI'
    },
    body: JSON.stringify({
      model: 'meta-llama/llama-3.3-70b-instruct:free',
      messages: [
        { role: 'system', content: SYSTEM_PROMPT },
        { role: 'user', content: prompt }
      ],
      temperature: 0.2,
      max_tokens: 2500
    }),
    signal: controller.signal
  });

  clearTimeout(timeoutId);

  if (!response.ok) {
    const errText = await response.text();
    throw new Error(`OpenRouter API returned ${response.status}: ${errText.slice(0, 100)}`);
  }

  const data = await response.json();
  const rawContent = data.choices?.[0]?.message?.content;
  return {
    rawContent,
    modelName: 'OpenRouter Free AI Agent (Llama 3.3 70B / DeepSeek)'
  };
}

/**
 * Call Local Ollama (100% Offline & Free, zero key needed)
 */
async function callOllamaApi(prompt, host = 'http://localhost:11434', model = 'llama3') {
  const endpoint = `${host.replace(/\/$/, '')}/api/chat`;
  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), 15000);

  const response = await fetch(endpoint, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      model: model,
      messages: [
        { role: 'system', content: SYSTEM_PROMPT },
        { role: 'user', content: prompt }
      ],
      format: 'json',
      stream: false
    }),
    signal: controller.signal
  });

  clearTimeout(timeoutId);

  if (!response.ok) {
    throw new Error(`Ollama returned status ${response.status}`);
  }

  const data = await response.json();
  return {
    rawContent: data.message?.content,
    modelName: `Local Ollama (${model})`
  };
}

/**
 * Universal Dispatcher: Queries available Free AI Agent providers in priority order
 */
export async function queryFreeAiAgent(question, options = {}) {
  const { userKey, userProvider, ollamaModel = 'llama3' } = options;

  let result = null;

  // 1. Check if user passed a custom provider & key from UI
  if (userKey && userKey.trim()) {
    try {
      if (userProvider === 'groq') {
        result = await callGroqApi(question, userKey.trim());
      } else if (userProvider === 'openrouter') {
        result = await callOpenRouterApi(question, userKey.trim());
      } else {
        result = await callGeminiApi(question, userKey.trim());
      }
    } catch (err) {
      console.warn(`[Free AI Agent] User-specified provider (${userProvider}) error:`, err.message);
    }
  }

  // 2. Try Groq Cloud (Free Tier) from server .env
  if (!result && process.env.GROQ_API_KEY && process.env.GROQ_API_KEY.trim()) {
    try {
      result = await callGroqApi(question, process.env.GROQ_API_KEY.trim());
    } catch (err) {
      console.warn('[Free AI Agent] Groq free agent failed:', err.message);
    }
  }

  // 3. Try Google Gemini (Free Tier) from server .env
  if (!result && process.env.GEMINI_API_KEY && process.env.GEMINI_API_KEY.trim()) {
    try {
      result = await callGeminiApi(question, process.env.GEMINI_API_KEY.trim());
    } catch (err) {
      console.warn('[Free AI Agent] Gemini free agent failed:', err.message);
    }
  }

  // 4. Try OpenRouter (Free Tier) from server .env
  if (!result && process.env.OPENROUTER_API_KEY && process.env.OPENROUTER_API_KEY.trim()) {
    try {
      result = await callOpenRouterApi(question, process.env.OPENROUTER_API_KEY.trim());
    } catch (err) {
      console.warn('[Free AI Agent] OpenRouter free agent failed:', err.message);
    }
  }

  // 5. Try Local Ollama if configured
  if (!result && process.env.OLLAMA_ENABLED === 'true') {
    try {
      result = await callOllamaApi(question, process.env.OLLAMA_HOST || 'http://localhost:11434', ollamaModel);
    } catch (err) {
      console.warn('[Free AI Agent] Local Ollama not reachable:', err.message);
    }
  }

  if (!result || !result.rawContent) {
    return null; // Signals caller to use verified Knowledge Engine fallback
  }

  // Parse structured JSON output from LLM
  try {
    let cleanJson = result.rawContent.trim();
    // Strip markdown code fences if model wrapped response in ```json ... ```
    if (cleanJson.startsWith('```json')) {
      cleanJson = cleanJson.replace(/^```json\s*/, '').replace(/\s*```$/, '');
    } else if (cleanJson.startsWith('```')) {
      cleanJson = cleanJson.replace(/^```\s*/, '').replace(/\s*```$/, '');
    }

    const parsed = JSON.parse(cleanJson);
    return {
      category: parsed.category || 'general',
      categoryTitle: parsed.categoryTitle || 'Indian Statutory Legal Counsel',
      summary: parsed.summary,
      keyRights: parsed.keyRights || [],
      applicableLaws: parsed.applicableLaws || [],
      recommendedActions: parsed.recommendedActions || [],
      helplines: parsed.helplines || [],
      sourceRef: parsed.sourceRef || 'Indian Statutory Gazette',
      fullAnswer: parsed.fullAnswer || result.rawContent,
      isAiGenerated: true,
      aiModel: result.modelName
    };
  } catch (parseErr) {
    console.warn('[Free AI Agent] Failed to parse model JSON output:', parseErr.message);
    return {
      category: 'general',
      categoryTitle: 'Indian Statutory Legal Counsel',
      summary: 'Comprehensive legal advisory synthesized by Nyaya AI Agent.',
      keyRights: ['Right to Fair Legal Redressal under Article 39A of the Constitution of India'],
      applicableLaws: ['Bharatiya Nyaya Sanhita, 2023 & Relevant Statutory Enactments'],
      recommendedActions: ['Review the detailed legal advisory below and consult jurisdictional counsel.'],
      helplines: ['NALSA Free Legal Aid: 15100', 'National Emergency: 112'],
      sourceRef: 'Supreme Court & Indian Statutory Enactments',
      fullAnswer: result.rawContent,
      isAiGenerated: true,
      aiModel: result.modelName
    };
  }
}
