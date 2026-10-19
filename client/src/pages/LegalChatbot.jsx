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
import { AI_SUGGESTED_QUESTIONS } from '../data/mockData';

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
  const messagesEndRef = useRef(null);

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
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
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
    const qLower = query.toLowerCase();

    if (qLower.includes('phone') && (qLower.includes('police') || qLower.includes('check') || qLower.includes('search'))) {
      return {
        text: `Under Indian law and the guidelines affirmed by the Supreme Court, police officers **cannot arbitrarily seize or inspect your personal mobile phone** during traffic stops or routine questioning.\n\n### Key Protections:\n1. **Article 21 Right to Privacy:** Your digital device holds confidential personal data, chats, and medical records protected under fundamental rights (K.S. Puttaswamy judgment).\n2. **Statutory Search Requisition:** Under Section 105 of the Bharatiya Nagarik Suraksha Sanhita (BNSS) (formerly Section 100/102 CrPC), any device search requires an investigation order or a clear seizure memo (Panchnama) signed by independent witnesses.\n3. **What You Can Do:** Politely ask the officer: *"Under which registered FIR or written order are you requesting my device?"* You are not legally obligated to share your biometric unlock or screen password unless ordered by a competent magistrate.`,
        citations: ['Article 21, Constitution of India', 'Section 105 BNSS 2023', 'K.S. Puttaswamy (2017) 10 SCC 1']
      };
    }

    if (qLower.includes('fir') || qLower.includes('zero fir') || qLower.includes('police complaint')) {
      return {
        text: `Under **Section 173 of the Bharatiya Nagarik Suraksha Sanhita, 2023 (BNSS)** (formerly Section 154 CrPC), police are legally bound to register an FIR for any cognizable offense.\n\n### Essential Rights:\n- **Zero FIR:** You can file a Zero FIR at ANY police station in India, irrespective of jurisdiction where the incident occurred. The police station is mandated to register it and transfer it to the concerned police station.\n- **Free Copy:** You have the statutory right to receive a certified copy of the FIR **free of charge** immediately.\n- **Refusal is a Crime:** If a police officer refuses to lodge an FIR for cognizable crimes (theft, assault, harassment), they can be prosecuted under **Section 199 BNS** (Section 166A IPC) carrying up to 2 years imprisonment.\n- **Remedy:** If the local police station refuses, send the written complaint via registered post to the Superintendent of Police (SP / DCP) under Section 173(4) BNSS.`,
        citations: ['Section 173, Bharatiya Nagarik Suraksha Sanhita 2023', 'Lalita Kumari v. Govt of UP (2014) 2 SCC 1', 'Section 199 BNS']
      };
    }

    if (qLower.includes('landlord') || qLower.includes('rent') || qLower.includes('deposit') || qLower.includes('tenant')) {
      return {
        text: `Under Indian Tenancy Laws and the **Model Tenancy Act**:\n\n1. **Unlawful Eviction:** A landlord cannot physically lock you out, throw your belongings, or cut essential utility supplies (electricity, water). Such actions are illegal without a formal eviction order from the Rent Authority or Civil Court.\n2. **Security Deposit Deductions:** The landlord cannot arbitrarily forfeit security deposits. Normal wear and tear cannot be deducted. Any deduction for damages requires itemized repair invoices.\n3. **Notice Period:** Landlords must typically serve a minimum 30-day prior written notice before seeking vacation of the premises or rent revision.\n4. **Remedy:** You can file an injunction petition before the Rent Control Court or send a formal Legal Notice demanding refund of deposit within 15 days.`,
        citations: ['Model Tenancy Act 2021', 'State Rent Control Acts', 'Section 108 Transfer of Property Act 1882']
      };
    }

    if (qLower.includes('salary') || qLower.includes('employer') || qLower.includes('firing') || qLower.includes('unpaid') || qLower.includes('resignation')) {
      return {
        text: `Under the **Code on Wages, 2019** and the **Payment of Wages Act**:\n\n- **Timely Payment:** Employers must disburse wages by the 7th or 10th of every month. Withholding earned wages without statutory sanction is illegal.\n- **Experience & Relieving Letter:** An employer has no legal right to withhold your relieving letter, experience certificate, or PF dues once the agreed notice period or salary in lieu is fulfilled.\n- **Termination Notice:** Sudden termination without notice pay or inquiry violates Section 25F of the Industrial Disputes Act.\n- **Actionable Steps:**\n  1. Send a formal demand email with chronology of dues.\n  2. Issue a statutory Legal Notice giving 15 days compliance.\n  3. Lodge a formal complaint before the Assistant Labor Commissioner (ALC).`,
        citations: ['Code on Wages 2019', 'Industrial Disputes Act 1947', 'Payment of Gratuity Act 1972']
      };
    }

    if (qLower.includes('cyber') || qLower.includes('upi') || qLower.includes('fraud') || qLower.includes('scam') || qLower.includes('phishing')) {
      return {
        text: `If you have lost money to a digital fraud (UPI, credit card, net banking), take immediate action within the **"Golden Hour"** (first 2-3 hours):\n\n### Immediate Steps:\n1. **Call 1930:** The National Cyber Crime Reporting Helpline connects immediately to bank grievance nodal officers to freeze transactions before money leaves mule accounts.\n2. **File at cybercrime.gov.in:** Lodge a formal cyber complaint and note the acknowledgement number.\n3. **Bank Zero Liability:** Under RBI Circular (DBR.No.Leg.BC.78/09.07.005/2017-18), if you notify your bank within 3 working days of an unauthorized transaction with zero customer negligence, you are entitled to **100% full reversal within 10 days**.\n4. **Block Accounts:** Instantly block your SIM/cards via your bank mobile app.`,
        citations: ['Information Technology Act 2000 (Section 66D)', 'RBI Customer Protection Circular 2017', 'National Cyber Crime Portal (cybercrime.gov.in)']
      };
    }

    if (qLower.includes('rti') || qLower.includes('right to information')) {
      return {
        text: `Under the **Right to Information (RTI) Act, 2005**, any citizen of India can seek documents and public records from government departments.\n\n### Step-by-Step Guide:\n- **Fee:** Nominal fee of ₹10 (Exempt for Below Poverty Line BPL card holders).\n- **Timeline:** The Public Information Officer (PIO) must furnish information within **30 days** (within **48 hours** if information concerns life or personal liberty).\n- **How to File:**\n  - For Central Ministries: Visit **rtionline.gov.in**\n  - For State Bodies: Physical application or State RTI portals.\n- **Penalty on Officers:** If PIO refuses or delays without reasonable cause, the Information Commission can penalize the officer ₹250/day up to ₹25,000.`,
        citations: ['Section 6(1) & Section 7(1), RTI Act 2005', 'Central Information Commission Guidelines']
      };
    }

    // Default intelligent Indian legal advisory response
    return {
      text: `Thank you for your question regarding **${query}**.\n\n### Applicable Legal Framework:\nUnder Indian jurisprudence, disputes of this nature are addressed by relevant statutory provisions. If this relates to consumer deficiency, you can approach the District Consumer Forum under the Consumer Protection Act 2019. If it pertains to criminal offenses or illegal intimidation, remedies exist under the Bharatiya Nyaya Sanhita (BNS) and Section 173 BNSS for police complaints.\n\n### Recommended Actions:\n1. **Gather Evidence:** Maintain written communication, invoices, timestamps, and payment receipts.\n2. **Send a Written Demand:** Issue a formal 15-day notice specifying your grievance and relief sought.\n3. **Access Free Legal Aid:** If you need an advocate to represent you, you can access free counsel via your nearest District Legal Services Authority (DLSA) under Article 39A.\n\nWould you like me to draft a specific Legal Notice or RTI application for this matter?`,
      citations: ['Constitution of India (Article 39A)', 'Bharatiya Nagarik Suraksha Sanhita (BNSS 2023)']
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
        citations: botResponseData.citations || []
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
        <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-6 bg-slate-50/50">
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
                    {/* Render message text with simple markdown support */}
                    <div className="whitespace-pre-line space-y-2">
                      {msg.text.split('\n\n').map((paragraph, pIdx) => {
                        // Check if paragraph is heading
                        if (paragraph.startsWith('### ')) {
                          return (
                            <h4 key={pIdx} className={`font-bold mt-3 text-base ${isBot ? 'text-primary-800' : 'text-white'}`}>
                              {paragraph.replace('### ', '')}
                            </h4>
                          );
                        }
                        return <p key={pIdx}>{paragraph}</p>;
                      })}
                    </div>

                    {/* Legal Citations & References if available */}
                    {isBot && msg.citations && msg.citations.length > 0 && (
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

          <div ref={messagesEndRef} />
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
