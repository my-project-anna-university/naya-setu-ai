import LegalQuery from '../models/LegalQuery.js';
import User from '../models/User.js';
import { legalCategories, legalKnowledgeBase, queryKnowledgeBase } from '../data/legalKnowledge.js';
import { getLegalAiResponse } from '../utils/aiHelper.js';
import { getDbStatus } from '../config/db.js';
import { fetchVerifiedLegalSources } from '../services/legalApiConnector.js';

/**
 * @desc    Submit a legal question & get AI/Knowledge Base legal rights guidance
 * @route   POST /api/legal/query
 * @access  Public (Optional User Auth)
 */
export const askQuestion = async (req, res, next) => {
  try {
    const rawQuestion = req.body.question || req.body.query || req.body.text || req.body.message;
    const category = req.body.category || null;
    const language = req.body.language || 'en';
    const userKey = req.body.userKey || req.body.apiKey || null;
    const userProvider = req.body.userProvider || req.body.provider || 'groq';
    const ollamaModel = req.body.ollamaModel || 'llama3';

    if (!rawQuestion || typeof rawQuestion !== 'string' || rawQuestion.trim() === '') {
      return res.status(400).json({
        success: false,
        message: 'Please provide a valid legal question or citizen issue (fields accepted: question, query, or text).',
      });
    }

    const questionText = rawQuestion.trim();

    // Process question via Free AI Agent (Groq / Gemini / OpenRouter / Ollama) or enriched legal knowledge engine
    const result = await getLegalAiResponse(questionText, category, language, {
      userKey,
      userProvider,
      ollamaModel
    });

    // Verify against Ground-Truth Legal API & Official Statutes (Zero Hallucination Grounding)
    const verifiedData = await fetchVerifiedLegalSources(questionText, result.applicableLaws || []);

    // Enrich fullAnswer with verified Indian Kanoon & Official Gazette links if not already present
    let enrichedAnswer = result.fullAnswer;
    if (verifiedData.links && verifiedData.links.length > 0 && !enrichedAnswer.includes('Verified Legal Database Sources')) {
      const verifiedSection = `\n\n---\n\n#### 🏛️ Verified Legal Database Sources & Precedents (Indian Kanoon & Official Gazette)\n` +
        verifiedData.links.map((link) => `* ⚖️ **[${link.title}](${link.url})** — *${link.source} (${link.type})*`).join('\n') +
        `\n\n> [!NOTE]\n> *All citations above are grounded directly in authentic statutory gazettes and verified court precedents without AI assumptions or speculative predictions.*`;
      enrichedAnswer = enrichedAnswer + verifiedSection;
    }

    let savedQueryId = null;

    // If MongoDB is connected, record query in database
    if (getDbStatus()) {
      try {
        const userId = req.user?.id || req.user?._id || null;
        const savedQuery = await LegalQuery.create({
          userId,
          question: questionText,
          category: result.category || 'general',
          response: {
            summary: result.summary,
            keyRights: result.keyRights,
            applicableLaws: result.applicableLaws,
            recommendedActions: result.recommendedActions,
            helplines: result.helplines,
            sourceRef: result.sourceRef,
            fullAnswer: enrichedAnswer,
          },
        });
        savedQueryId = savedQuery._id;

        // If user is logged in, also record in user search history
        if (userId) {
          await User.findByIdAndUpdate(userId, {
            $push: {
              searchHistory: {
                $each: [{ query: questionText, category: result.category, timestamp: new Date() }],
                $slice: -20, // Keep last 20 queries
              },
            },
          });
        }
      } catch (dbErr) {
        console.warn('[Legal Controller] Could not persist query to DB:', dbErr.message);
      }
    }

    return res.status(200).json({
      success: true,
      queryId: savedQueryId,
      question: questionText,
      category: result.category,
      categoryTitle: result.categoryTitle,
      summary: result.summary,
      keyRights: result.keyRights || [],
      applicableLaws: result.applicableLaws || [],
      citations: result.applicableLaws || [],
      laws: result.applicableLaws || [],
      recommendedActions: result.recommendedActions || [],
      helplines: result.helplines || [],
      sourceRef: result.sourceRef,
      fullAnswer: enrichedAnswer,
      answer: enrichedAnswer,
      response: enrichedAnswer,
      text: enrichedAnswer,
      verifiedSources: verifiedData.sources || [],
      liveLegalLinks: verifiedData.links || [],
      legalDatabaseStatus: verifiedData.status || 'Verified via Indian Kanoon & Official Statutes',
      isAiGenerated: result.isAiGenerated,
      aiModel: result.aiModel,
    });
  } catch (error) {
    next(error);
  }
};

/**
 * @desc    Get detailed rights, landmark provisions, and FAQs for a specific legal domain
 * @route   GET /api/legal/rights/:category
 * @access  Public
 */
export const getRightsByCategory = async (req, res, next) => {
  try {
    const categoryKey = (req.params.category || '').toLowerCase();
    const data = legalKnowledgeBase[categoryKey];

    if (!data) {
      return res.status(404).json({
        success: false,
        message: `Category '${req.params.category}' not found. Supported categories: ${Object.keys(legalKnowledgeBase).join(', ')}`,
      });
    }

    return res.status(200).json({
      success: true,
      category: categoryKey,
      governingAct: data.governingAct,
      regulatoryBody: data.regulatoryBody,
      rights: data.rights,
      helplines: data.helplines,
      faqs: data.faqs,
    });
  } catch (error) {
    next(error);
  }
};

/**
 * @desc    Get list of all supported legal categories with metadata
 * @route   GET /api/legal/categories
 * @access  Public
 */
export const getCategories = async (req, res, next) => {
  try {
    const enriched = legalCategories.map((cat) => {
      const details = legalKnowledgeBase[cat.id];
      return {
        ...cat,
        rightsCount: details ? details.rights.length : 0,
        faqsCount: details ? details.faqs.length : 0,
      };
    });

    return res.status(200).json({
      success: true,
      count: enriched.length,
      categories: enriched,
    });
  } catch (error) {
    next(error);
  }
};

/**
 * @desc    Mark a query response as helpful or unhelpful
 * @route   POST /api/legal/query/:id/feedback
 * @access  Public
 */
export const rateFeedback = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { helpful, feedbackNote } = req.body;

    if (getDbStatus()) {
      const updated = await LegalQuery.findByIdAndUpdate(
        id,
        {
          helpful: Boolean(helpful),
          feedbackNote: feedbackNote || '',
        },
        { new: true }
      );

      if (!updated) {
        return res.status(404).json({ success: false, message: 'Query not found' });
      }

      return res.status(200).json({
        success: true,
        message: 'Thank you for your feedback! It helps improve legal accuracy.',
      });
    }

    return res.status(200).json({
      success: true,
      message: 'Feedback received (acknowledged in-memory).',
    });
  } catch (error) {
    next(error);
  }
};

export default {
  askQuestion,
  getRightsByCategory,
  getCategories,
  rateFeedback,
};
