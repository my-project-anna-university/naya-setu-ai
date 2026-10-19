import React, { useState, useEffect, useRef } from 'react';
import { useSearchParams } from 'react-router-dom';
import api from '../services/api';
import {
  FaPaperPlane,
  FaRobot,
  FaUser,
  FaTrashAlt,
  FaBalanceScale,
  FaGavel,
  FaLightbulb,
  FaInfoCircle,
  FaShieldAlt,
  FaCopy,
  FaCheck
} from 'react-icons/fa';
import Badge from '../components/common/Badge';
import toast from 'react-hot-toast';
import { AI_SUGGESTED_QUESTIONS, RIGHTS_CATEGORIES_DATA } from '../data/mockData';
import { matchLegalScenario } from '../data/legalScenarios';
import { analyzeCitizenCase } from '../data/legalReasoningEngine';

// Markdown formatters for bot message bubbles
const renderInlineFormatting = (text) => {
  if (!text) return null;
  const parts = [];
  let remaining = text;
  let key = 0;

  while (remaining.length > 0) {
    const linkMatch = remaining.match(/^(.*?)\[(.*?)\]\((.*?)\)(.*)$/);
    const codeMatch = remaining.match(/^(.*?)`([^`]+)`(.*)$/);
    const boldMatch = remaining.match(/^(.*?)\*\*(.+?)\*\*(.*)$/);
    const italicMatch = remaining.match(/^(.*?)\*(.+?)\*(.*)$/);

    const matches = [
      linkMatch ? { type: 'link', pos: linkMatch[1].length, m: linkMatch } : null,
      codeMatch ? { type: 'code', pos: codeMatch[1].length, m: codeMatch } : null,
      boldMatch ? { type: 'bold', pos: boldMatch[1].length, m: boldMatch } : null,
      italicMatch ? { type: 'italic', pos: italicMatch[1].length, m: italicMatch } : null,
    ].filter(Boolean).sort((a, b) => a.pos - b.pos);

    if (matches.length > 0) {
      const earliest = matches[0];
      const m = earliest.m;
      if (m[1]) parts.push(<span key={key++}>{m[1]}</span>);

      if (earliest.type === 'link') {
        parts.push(
          <a
            key={key++}
            href={m[3]}
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary-700 underline font-semibold hover:text-secondary-600 transition-colors inline-flex items-center gap-0.5"
          >
            {m[2]}
          </a>
        );
        remaining = m[4];
      } else if (earliest.type === 'code') {
        parts.push(
          <code key={key++} className="bg-slate-100 text-slate-800 text-[11px] sm:text-xs px-1.5 py-0.5 rounded font-mono border border-slate-200">
            {m[2]}
          </code>
        );
        remaining = m[3];
      } else if (earliest.type === 'bold') {
        parts.push(<strong key={key++} className="font-semibold text-slate-900">{m[2]}</strong>);
        remaining = m[3];
      } else if (earliest.type === 'italic') {
        parts.push(<em key={key++} className="italic text-slate-700">{m[2]}</em>);
        remaining = m[3];
      }
    } else {
      parts.push(<span key={key++}>{remaining}</span>);
      break;
    }
  }

  return parts;
};

const renderMessageLine = (line, idx, isBot) => {
  const trimmed = line.trim();
  if (!trimmed) return null;

  if (trimmed === '---') {
    return <hr key={idx} className="my-2.5 border-slate-200" />;
  }

  if (trimmed.startsWith('> ')) {
    const quoteText = trimmed.replace(/^>\s*(\[!NOTE\]\s*|\[!WARNING\]\s*|\[!TIP\]\s*)?/, '');
    return (
      <div key={idx} className="my-2 p-2.5 bg-blue-50/80 border-l-4 border-primary-600 rounded-r text-xs text-slate-700 leading-relaxed shadow-xs">
        {renderInlineFormatting(quoteText)}
      </div>
    );
  }

  if (trimmed.startsWith('### ')) {
    return (
      <h3 key={idx} className={`font-bold mt-2.5 mb-1 text-base ${isBot ? 'text-primary-800' : 'text-white'}`}>
        {trimmed.replace('### ', '')}
      </h3>
    );
  }

  if (trimmed.startsWith('#### ')) {
    return (
      <h4 key={idx} className={`font-semibold mt-2 mb-0.5 text-sm ${isBot ? 'text-slate-800' : 'text-slate-100'}`}>
        {trimmed.replace('#### ', '')}
      </h4>
    );
  }

  if (trimmed.startsWith('* ') || trimmed.startsWith('- ')) {
    const content = trimmed.substring(2);
    return (
      <div key={idx} className="flex items-start gap-2 pl-2 text-xs sm:text-sm my-0.5">
        <span className={`font-bold shrink-0 mt-0.5 ${isBot ? 'text-secondary-500' : 'text-amber-300'}`}>•</span>
        <span className="flex-1">{isBot ? renderInlineFormatting(content) : content}</span>
      </div>
    );
  }

  const numMatch = trimmed.match(/^(\d+)\.\s+(.*)$/);
  if (numMatch) {
    return (
      <div key={idx} className="flex items-start gap-2 pl-2 text-xs sm:text-sm my-0.5">
        <span className={`font-bold shrink-0 mt-0.5 ${isBot ? 'text-primary-700' : 'text-amber-300'}`}>{numMatch[1]}.</span>
        <span className="flex-1">{isBot ? renderInlineFormatting(numMatch[2]) : numMatch[2]}</span>
      </div>
    );
  }

  return (
    <p key={idx} className="text-xs sm:text-sm my-1 leading-relaxed">
      {isBot ? renderInlineFormatting(trimmed) : trimmed}
    </p>
  );
};

export const LegalChatbot = () => {
  const [searchParams] = useSearchParams();
  const initialQuery = searchParams.get('q') || '';

  const [messages, setMessages] = useState([
    {
      id: 'welcome-1',
      sender: 'bot',
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      text: "Namaste! I am Nyaya AI, your personal legal companion for Indian law. I can explain your statutory rights under Bharatiya Nyaya Sanhita (BNS), Consumer Protection Act 2019, Labor laws, Women's rights, and help you find free legal aid. How can I assist you today?",
      category: 'General',
      citations: ['Constitution of India (Article 39A)', 'Legal Services Authorities Act 1987']
    }
  ]);

  const [inputMessage, setInputMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const [activeCategory, setActiveCategory] = useState('All');
  const [copiedId, setCopiedId] = useState(null);
  const chatContainerRef = useRef(null);

  const categories = [
    'All',
    'Consumer Rights',
    'Labor Law',
    'Property & Rent',
    'Family Law',
    'Criminal & FIR',
    'Constitutional',
    "Women's Safety",
    'Cyber Crime'
  ];

  const categoryPresets = {
    'Consumer Rights': 'How do I file a consumer complaint for a defective product?',
    'Labor Law': 'What is the law regarding unpaid salary and wrongful termination?',
    'Property & Rent': 'Can my landlord evict me without notice or disconnect electricity?',
    'Family Law': 'What are the legal procedures and timeframes for mutual consent divorce?',
    'Criminal & FIR': 'What are my rights if stopped or arrested by the police?',
    'Constitutional': 'How can I file an RTI application to check road construction funds?',
    "Women's Safety": 'What legal remedies exist under the Domestic Violence Act 2005?',
    'Cyber Crime': 'How to report UPI bank fraud and freeze money in the Golden Hour?'
  };

  const scrollToBottom = () => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTo({
        top: chatContainerRef.current.scrollHeight,
        behavior: 'smooth'
      });
    }
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, loading]);

  // Handle incoming query parameter from homepage
  useEffect(() => {
    if (initialQuery && initialQuery.trim() !== '') {
      handleSendMessage(initialQuery.trim());
    }
  }, [initialQuery]);

  const getKnowledgeResponse = (query, cat) => {
    const qLower = (query || '').toLowerCase().trim();
    const tokens = qLower.replace(/[^a-z0-9\s]/g, ' ').split(/\s+/).filter(Boolean);
    const wordCount = tokens.length;

    // PRIORITY 1: AUTONOMOUS DEDUCTIVE LEGAL REASONING ENGINE
    const reasoned = analyzeCitizenCase(query, query);
    if (reasoned) {
      return {
        text: reasoned.fullAnswer,
        citations: reasoned.applicableLaws || []
      };
    }

    // PRIORITY 2: PRE-INDEXED LEGAL SCENARIOS
    const scenario = matchLegalScenario(query, query);
    if (scenario) {
      return {
        text: scenario.fullAnswer,
        citations: scenario.applicableLaws || []
      };
    }

    // 1. GREETING INTENT
    const greetings = ['hi', 'hello', 'hey', 'namaste', 'namaskar', 'pranam', 'vanakkam', 'adab'];
    const hasLegalKeyword = tokens.some((t) =>
      ['bank', 'cheque', 'upi', 'otp', 'police', 'builder', 'salary', 'landlord', 'tenant', 'fraud', 'debited', 'fir', 'notice', 'slap', 'mrp', 'helpline'].includes(t)
    );
    if (tokens.some((t) => greetings.includes(t)) && wordCount <= 3 && !hasLegalKeyword) {
      return {
        text: `### 🙏 Namaste! I am NyayaSetu AI\n\n` +
          `I am your personal **Indian Citizen Legal Rights & Welfare Advisor**. I can help you understand your legal protections, check welfare scheme eligibility, and provide actionable dispute resolution steps under Indian law.\n\n` +
          `---\n\n` +
          `#### ⚖️ What you can ask me:\n` +
          `* 🛒 **Consumer Rights:** Defective products, unfair trade practices, refund delays.\n` +
          `* 💼 **Workplace & Labor:** Unpaid salary, wrongful termination, PF/Gratuity dues.\n` +
          `* 🏠 **Tenancy & Landlord:** Illegal eviction, security deposit refusal, power/water cuts.\n` +
          `* 💻 **Cyber Frauds:** UPI banking scams, 1930 Golden Hour freeze, loan app harassment.\n` +
          `* 🚓 **Police & Criminal Law:** Zero FIR rights, arrest safeguards, bail procedures.\n` +
          `* 📜 **RTI Applications:** Accessing municipal tenders and public project records.\n\n` +
          `💡 *Try asking: "My landlord locked me out without notice" or "Employer withheld my 2 months salary".*`,
        citations: ['Constitution of India (Article 39A)']
      };
    }

    // 2. CAPABILITY INTENT
    const capabilityKeywords = ['what can you do', 'what do you do', 'who are you', 'how can you help', 'what are your features', 'about you', 'what is nyayasetu'];
    if (!hasLegalKeyword && wordCount <= 6 && (capabilityKeywords.some((p) => qLower.includes(p)) || (wordCount <= 2 && tokens.includes('help')))) {
      return {
        text: `### ⚖️ About NyayaSetu AI & Citizen Advisory\n\n` +
          `**NyayaSetu** (*"Bridge to Justice"*) is an AI-powered legal advisory engine designed for Indian citizens.\n\n` +
          `---\n\n` +
          `#### Key Capabilities:\n` +
          `1. **Statutory Legal Advisory:** Accurate analysis under Consumer Protection Act 2019, Code on Wages, Model Tenancy Act, BNSS/BNS 2023, and IT Act 2000.\n` +
          `2. **Government Schemes Matching:** Instant eligibility checking for 25+ central & state welfare programs (PM-Kisan, Ayushman Bharat, PMAY).\n` +
          `3. **1-Click Legal Document Drafter:** Ready-to-use templates for RTI applications, legal notices, and police complaints.\n` +
          `4. **Free Legal Aid (Article 39A):** Direct connections to District Legal Services Authorities (DLSA) for free advocate representation.\n\n` +
          `💡 *Type any legal query in plain English or Hinglish to receive actionable guidance!*`,
        citations: ['Constitution of India (Article 39A)', 'Legal Services Authorities Act 1987']
      };
    }

    // 3. GRATITUDE INTENT
    if (['thank you', 'thanks', 'dhanyawad', 'shukriya', 'bye', 'goodbye'].some((p) => qLower.includes(p)) && wordCount <= 4) {
      return {
        text: `### 🙏 You're Very Welcome!\n\n` +
          `Knowing your statutory rights is your greatest protection as a citizen. If you need to generate a formal notice or check government welfare schemes, NyayaSetu is always here for you.\n\n` +
          `*Stay empowered and know your rights! ⚖️*`,
        citations: []
      };
    }

    // 4. DOMAIN MATCHING
    let bestCategory = RIGHTS_CATEGORIES_DATA[0];
    let bestSection = bestCategory.sections[0];
    let highestScore = 0;

    RIGHTS_CATEGORIES_DATA.forEach((category) => {
      category.sections.forEach((sec) => {
        let score = 0;
        const corpus = `${category.name} ${category.lawsGoverning.join(' ')} ${sec.title} ${sec.content} ${sec.penalty || ''}`.toLowerCase();

        tokens.forEach((tok) => {
          if (corpus.includes(tok)) score += tok.length > 4 ? 3 : 2;
        });

        if (qLower.includes('salary') && category.id.includes('labor')) score += 12;
        if (qLower.includes('police') && category.id.includes('criminal')) score += 12;
        if (qLower.includes('phone') && (corpus.includes('privacy') || category.id.includes('criminal'))) score += 12;
        if (qLower.includes('landlord') && (corpus.includes('tenant') || corpus.includes('rent') || category.id.includes('property'))) score += 12;
        if (qLower.includes('cyber') || qLower.includes('upi') || qLower.includes('scam') || qLower.includes('otp')) {
          if (category.id.includes('cyber') || corpus.includes('cyber')) score += 15;
        }
        if (qLower.includes('fir') && corpus.includes('fir')) score += 15;

        if (score > highestScore) {
          highestScore = score;
          bestCategory = category;
          bestSection = sec;
        }
      });
    });

    // If zero score on legal keywords and no category selected:
    if (highestScore === 0) {
      return {
        text: `### ⚖️ NyayaSetu Citizen Legal Inquiry\n\n` +
          `I analyzed your query: *"${query}"*.\n\n` +
          `To give you the exact Indian legal provisions and action steps, please let me know what legal area your dispute involves:\n\n` +
          `* 🛒 **Consumer / Purchase:** Defective product, refused refund, misleading charges.\n` +
          `* 💼 **Workplace / Employment:** Unpaid wages, wrongful termination, PF/Gratuity disputes.\n` +
          `* 🏠 **Tenancy / Property:** Landlord lockout, utility cut, deposit dispute, builder delay.\n` +
          `* 💻 **Cyber / Financial Fraud:** Unauthorized UPI debit, loan app extortion, fake accounts.\n` +
          `* 🚓 **Police / Criminal Law:** FIR refusal, Zero FIR, arrest rights, bail.\n\n` +
          `Reply with a brief description and I will cite the exact Indian laws and remedies!`,
        citations: ['Constitution of India (Article 39A)']
      };
    }

    const applicableLaws = bestCategory.lawsGoverning || [];
    const text = `### ⚖️ Legal Advisory: ${bestCategory.name}\n\n` +
      `Under Indian law, citizens are protected under the provisions of the **${applicableLaws[0] || 'applicable statute'}**.\n\n` +
      `---\n\n` +
      `#### 1. Your Statutory Right\n` +
      `* **${bestSection.title}:** ${bestSection.content}\n` +
      (bestSection.penalty ? `* **Legal Penalty on Violator:** ${bestSection.penalty}\n` : '') +
      `* **Constitutional Guarantee:** Under **Article 39A of the Constitution of India**, every citizen has the fundamental right to equal justice and free legal aid.\n\n` +
      `#### 2. Recommended Action Steps\n` +
      `1. **Gather Evidence:** Maintain written communication, invoices, timestamps, emails, and transaction receipts.\n` +
      `2. **Statutory Demand Notice:** Issue a formal 15-day legal notice giving the opposite party opportunity to rectify.\n` +
      `3. **Approaching Legal Forum:** If unrectified, approach the competent statutory authority or your local District Legal Services Authority (DLSA) under Article 39A.\n\n` +
      `--- \n` +
      `💡 *You can generate an official document or notice in 1-click in the **NyayaSetu Document Generator**.*`;

    return {
      text,
      citations: applicableLaws
    };
  };

  const handleSendMessage = async (textToSend) => {
    const text = textToSend || inputMessage;
    if (!text.trim() || loading) return;

    const userMessage = {
      id: 'usr-' + Date.now(),
      sender: 'user',
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      text: text.trim(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputMessage('');
    setLoading(true);

    try {
      let botResponseData;
      try {
        const response = await api.post('/legal/query', {
          question: text.trim(),
          query: text.trim(),
          category: activeCategory !== 'All' ? activeCategory.toLowerCase() : undefined
        });
        const d = response.data;
        botResponseData = {
          text: d.fullAnswer || d.answer || d.response || d.summary || d.message,
          citations: d.applicableLaws || d.citations || d.laws || [],
          category: d.categoryTitle || d.category,
          liveLegalLinks: d.liveLegalLinks || [],
          verifiedSources: d.verifiedSources || [],
          legalDatabaseStatus: d.legalDatabaseStatus || null,
        };
      } catch (err) {
        console.warn('Backend API query error, using local fallback:', err);
        // Fallback to high-quality legal knowledge response
        const fallback = getKnowledgeResponse(text.trim(), activeCategory);
        botResponseData = fallback;
      }

      const botMessage = {
        id: 'bot-' + Date.now(),
        sender: 'bot',
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        text: botResponseData.text,
        citations: botResponseData.citations || [],
        liveLegalLinks: botResponseData.liveLegalLinks || [],
        verifiedSources: botResponseData.verifiedSources || [],
        legalDatabaseStatus: botResponseData.legalDatabaseStatus || null,
      };

      setMessages((prev) => [...prev, botMessage]);
    } catch (error) {
      toast.error('Could not get response. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleCategoryClick = (category) => {
    setActiveCategory(category);
    if (categoryPresets[category]) {
      setInputMessage(categoryPresets[category]);
    }
  };

  const handleCopyText = (id, text) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    toast.success('Copied to clipboard!');
    setTimeout(() => setCopiedId(null), 2000);
  };

  const handleClearChat = () => {
    setMessages([
      {
        id: 'welcome-reset',
        sender: 'bot',
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        text: 'Chat history cleared. What legal question would you like to explore now?',
        citations: ['Legal Services Authorities Act 1987']
      }
    ]);
    toast.success('Chat history cleared');
  };

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Page Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 border-b border-slate-200 pb-5">
        <div>
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-secondary-500 to-primary-800 text-white flex items-center justify-center text-xl shadow-md">
              <FaRobot />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-slate-900 flex items-center gap-2">
                Nyaya AI Legal Assistant
                <span className="text-xs bg-emerald-100 text-emerald-800 px-2 py-0.5 rounded-full font-semibold border border-emerald-300">
                  Online
                </span>
              </h1>
              <p className="text-xs text-slate-500">
                Verified Indian law answers under BNS, BNSS, Consumer Act, and Supreme Court rulings
              </p>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={handleClearChat}
            className="flex items-center gap-1.5 px-3 py-2 text-xs font-semibold text-slate-600 hover:text-red-600 hover:bg-red-50 rounded-lg border border-slate-200 transition-colors"
          >
            <FaTrashAlt className="w-3 h-3" />
            <span>Clear Chat</span>
          </button>
        </div>
      </div>

      {/* Category Quick Select Chips */}
      <div className="mb-4">
        <p className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">
          Filter by Legal Domain:
        </p>
        <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => handleCategoryClick(cat)}
              className={`shrink-0 px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all ${
                activeCategory === cat
                  ? 'bg-primary-800 text-white shadow-sm'
                  : 'bg-white text-slate-700 border border-slate-200 hover:border-primary-400 hover:bg-slate-50'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Main Chat Container */}
      <div className="bg-white rounded-2xl border border-slate-200 shadow-sm flex flex-col h-[650px] overflow-hidden">
        {/* Messages List Area */}
        <div ref={chatContainerRef} className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-6 bg-slate-50/50">
          {messages.map((msg) => {
            const isBot = msg.sender === 'bot';
            return (
              <div
                key={msg.id}
                className={`flex gap-3 max-w-3xl ${isBot ? 'mr-auto' : 'ml-auto flex-row-reverse'}`}
              >
                {/* Avatar */}
                <div
                  className={`w-9 h-9 rounded-xl shrink-0 flex items-center justify-center text-sm shadow-sm ${
                    isBot
                      ? 'bg-primary-800 text-white'
                      : 'bg-secondary-500 text-white'
                  }`}
                >
                  {isBot ? <FaRobot className="w-4 h-4" /> : <FaUser className="w-4 h-4" />}
                </div>

                {/* Message Bubble */}
                <div className="space-y-1.5 flex-1">
                  <div className={`flex items-center gap-2 text-xs text-slate-400 ${isBot ? '' : 'justify-end'}`}>
                    <span className="font-semibold text-slate-600">{isBot ? 'Nyaya AI Counsel' : 'You'}</span>
                    <span>•</span>
                    <span>{msg.timestamp}</span>
                  </div>

                  <div
                    className={`p-4 rounded-2xl text-sm leading-relaxed ${
                      isBot
                        ? 'bg-white text-slate-800 border border-slate-200/90 shadow-sm'
                        : 'bg-primary-800 text-white shadow-md'
                    }`}
                  >
                    {/* Ground-Truth Legal Database Verification Badge */}
                    {isBot && (msg.legalDatabaseStatus || (msg.liveLegalLinks && msg.liveLegalLinks.length > 0)) && (
                      <div className="mb-2.5 inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-emerald-50 text-emerald-800 border border-emerald-200">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                        <FaShieldAlt className="w-3 h-3 text-emerald-600" />
                        <span>{msg.legalDatabaseStatus || 'Verified via Indian Kanoon & Official Statutes'}</span>
                      </div>
                    )}

                    {/* Render message text with structured markdown formatting */}
                    <div className="space-y-1">
                      {msg.text.split('\n').map((line, lIdx) => renderMessageLine(line, lIdx, isBot))}
                    </div>

                    {/* Live Legal Database Links */}
                    {isBot && msg.liveLegalLinks && msg.liveLegalLinks.length > 0 && (
                      <div className="mt-3.5 pt-3 border-t border-slate-100">
                        <div className="text-[11px] font-bold text-slate-500 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                          <FaGavel className="w-3 h-3 text-secondary-600" />
                          <span>Direct Ground-Truth Sources (Zero Assumptions):</span>
                        </div>
                        <div className="flex flex-wrap gap-1.5">
                          {msg.liveLegalLinks.map((link, lIdx) => (
                            <a
                              key={lIdx}
                              href={link.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-1 text-[11px] bg-slate-50 hover:bg-emerald-50 text-slate-700 hover:text-emerald-800 px-2.5 py-1 rounded border border-slate-200 hover:border-emerald-300 transition-colors font-medium"
                              title={link.benchCitation || link.title}
                            >
                              <FaBalanceScale className="w-2.5 h-2.5 text-secondary-500 shrink-0" />
                              <span className="truncate max-w-[240px]">{link.title}</span>
                              <span className="text-[10px] text-slate-400">↗</span>
                            </a>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Legal Citations & References if available */}
                    {isBot && msg.citations && msg.citations.length > 0 && !msg.text.includes('### 🙏') && (
                      <div className="mt-4 pt-3 border-t border-slate-100 flex flex-wrap items-center gap-1.5">
                        <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider flex items-center gap-1">
                          <FaBalanceScale className="w-3 h-3 text-secondary-500" />
                          Statutory References:
                        </span>
                        {msg.citations.map((cite, cIdx) => (
                          <span
                            key={cIdx}
                            className="text-[11px] bg-slate-100 text-slate-700 px-2 py-0.5 rounded border border-slate-200"
                          >
                            {cite}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Message action buttons */}
                  {isBot && (
                    <div className="flex items-center gap-3 text-xs text-slate-400 pt-0.5 pl-1">
                      <button
                        type="button"
                        onClick={() => handleCopyText(msg.id, msg.text)}
                        className="hover:text-primary-800 flex items-center gap-1 transition-colors"
                      >
                        {copiedId === msg.id ? (
                          <>
                            <FaCheck className="w-3 h-3 text-emerald-600" />
                            <span className="text-emerald-600">Copied</span>
                          </>
                        ) : (
                          <>
                            <FaCopy className="w-3 h-3" />
                            <span>Copy Answer</span>
                          </>
                        )}
                      </button>
                    </div>
                  )}
                </div>
              </div>
            );
          })}

          {/* Typing Indicator */}
          {loading && (
            <div className="flex gap-3 mr-auto max-w-xl">
              <div className="w-9 h-9 rounded-xl bg-primary-800 text-white shrink-0 flex items-center justify-center text-sm shadow-sm">
                <FaRobot className="w-4 h-4 animate-pulse" />
              </div>
              <div className="bg-white border border-slate-200 rounded-2xl p-4 shadow-sm flex items-center gap-2">
                <span className="text-xs text-slate-500 font-medium">Nyaya AI is researching Indian legal codes...</span>
                <div className="flex gap-1">
                  <div className="w-2 h-2 rounded-full bg-primary-600 animate-bounce" style={{ animationDelay: '0ms' }} />
                  <div className="w-2 h-2 rounded-full bg-primary-600 animate-bounce" style={{ animationDelay: '150ms' }} />
                  <div className="w-2 h-2 rounded-full bg-primary-600 animate-bounce" style={{ animationDelay: '300ms' }} />
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Suggested Starter Questions Bar */}
        <div className="bg-slate-100/70 border-t border-slate-200 p-2 sm:px-4 flex items-center gap-2 overflow-x-auto scrollbar-none text-xs">
          <span className="text-slate-500 font-bold shrink-0 flex items-center gap-1">
            <FaLightbulb className="w-3 h-3 text-secondary-500" />
            Quick prompt:
          </span>
          {AI_SUGGESTED_QUESTIONS.slice(0, 4).map((q, idx) => (
            <button
              key={idx}
              type="button"
              onClick={() => handleSendMessage(q)}
              className="shrink-0 bg-white hover:bg-slate-50 text-slate-700 px-3 py-1 rounded-full border border-slate-200 transition-colors truncate max-w-xs"
            >
              {q}
            </button>
          ))}
        </div>

        {/* Input Bar */}
        <div className="p-4 bg-white border-t border-slate-200">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSendMessage();
            }}
            className="flex items-center gap-3"
          >
            <input
              type="text"
              value={inputMessage}
              onChange={(e) => setInputMessage(e.target.value)}
              placeholder="Ask about FIR, bail, unpaid salary, RTI, tenant dispute, cyber fraud..."
              className="flex-1 rounded-xl border border-slate-300 py-3 px-4 text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:border-primary-500 focus:ring-4 focus:ring-primary-100 transition-all"
            />
            <button
              type="submit"
              disabled={loading || !inputMessage.trim()}
              className="px-5 py-3 rounded-xl bg-primary-800 hover:bg-primary-900 disabled:opacity-50 text-white font-bold text-sm flex items-center gap-2 transition-all shadow-md shrink-0"
            >
              <span>Send</span>
              <FaPaperPlane className="w-3.5 h-3.5" />
            </button>
          </form>
          <div className="mt-2 text-center">
            <p className="text-[11px] text-slate-400">
              ⚖️ Nyaya AI provides legal education and statutory references under Indian Acts, not formal advocate representation.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LegalChatbot;
