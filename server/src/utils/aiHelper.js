import { queryKnowledgeBase } from '../data/legalKnowledge.js';
import { queryFreeAiAgent } from '../services/freeAiAgentService.js';

/**
 * AI Legal Assistant helper using Universal Free AI Agents (Groq, Gemini, OpenRouter, Ollama)
 * with graceful fallback to the Indian Legal Knowledge Base.
 */
export async function getLegalAiResponse(question, category = null, language = 'en', options = {}) {
  // 1. Query Universal Free AI Agent if any free provider key or local engine is configured
  try {
    const aiAgentResult = await queryFreeAiAgent(question, {
      category,
      language,
      ...options,
    });
    if (aiAgentResult) {
      return aiAgentResult;
    }
  } catch (err) {
    console.warn('[AI Helper] Free AI Agent execution error:', err.message);
  }

  // 2. Fallback to Ground-Truth Legal Knowledge & Reasoning Engine
  const localKnowledge = queryKnowledgeBase(question, category);
  return {
    ...localKnowledge,
    isAiGenerated: false,
    aiModel: 'NyayaSetu Knowledge Engine (Offline/Rule-based)',
  };
}

export default getLegalAiResponse;
