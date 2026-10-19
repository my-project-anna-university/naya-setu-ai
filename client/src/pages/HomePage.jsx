import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {
  FaBalanceScale,
  FaRobot,
  FaHandHoldingHeart,
  FaFileContract,
  FaMapMarkedAlt,
  FaBookOpen,
  FaSearch,
  FaArrowRight,
  FaCheckCircle,
  FaQuoteLeft,
  FaShieldAlt,
  FaUsers,
  FaLandmark
} from 'react-icons/fa';
import Card from '../components/common/Card';
import Badge from '../components/common/Badge';
import { AI_SUGGESTED_QUESTIONS } from '../data/mockData';

export const HomePage = () => {
  const [quickQuery, setQuickQuery] = useState('');
  const navigate = useNavigate();

  const handleQuickSearch = (e) => {
    e.preventDefault();
    if (quickQuery.trim()) {
      navigate(`/chatbot?q=${encodeURIComponent(quickQuery.trim())}`);
    }
  };

  const handleSampleQuestionClick = (q) => {
    navigate(`/chatbot?q=${encodeURIComponent(q)}`);
  };

  const features = [
    {
      title: 'AI Nyaya Bot',
      description: 'Get instant, plain-language answers to complex legal questions under BNS, CrPC, Labor, Consumer and Family laws.',
      icon: <FaRobot className="w-7 h-7 text-secondary-500" />,
      link: '/chatbot',
      color: 'saffron',
      badge: 'Multilingual AI',
    },
    {
      title: 'Citizen Schemes Finder',
      description: 'Check your eligibility across central & state welfare schemes like PM-JAY, PMAY, and Mudra in seconds.',
      icon: <FaHandHoldingHeart className="w-7 h-7 text-accent-600" />,
      link: '/schemes',
      color: 'green',
      badge: 'Direct Benefit Transfer',
    },
    {
      title: 'Know Your Rights Hub',
      description: 'Explore comprehensive, simplified explanations of your fundamental, consumer, worker, and women safety rights.',
      icon: <FaBookOpen className="w-7 h-7 text-primary-800" />,
      link: '/rights',
      color: 'navy',
      badge: 'Citizen Education',
    },
    {
      title: 'Legal Document Generator',
      description: 'Draft valid RTI applications, consumer dispute notices, police complaints, and sworn affidavits with step-by-step guidance.',
      icon: <FaFileContract className="w-7 h-7 text-secondary-500" />,
      link: '/documents',
      color: 'saffron',
      badge: 'Instant Download',
    },
    {
      title: 'Legal Aid & DLSA Directory',
      description: 'Locate free government legal defense counsel, Taluk committees, and Lok Adalats closest to your district.',
      icon: <FaMapMarkedAlt className="w-7 h-7 text-accent-600" />,
      link: '/legal-aid',
      color: 'green',
      badge: 'Article 39A Free Aid',
    },
    {
      title: 'Real-time Legal Bulletins',
      description: 'Stay informed with landmark Supreme Court judgments, new statutory enactments, and regulatory consumer updates.',
      icon: <FaLandmark className="w-7 h-7 text-primary-800" />,
      link: '/news',
      color: 'navy',
      badge: 'Verified Updates',
    },
  ];

  const steps = [
    {
      number: '01',
      title: 'Ask or Search Your Legal Problem',
      description: 'Describe your situation in simple English or Hinglish — whether it is a landlord dispute, unpaid salary, or FIR inquiry.',
    },
    {
      number: '02',
      title: 'Instant AI Guidance & Applicable Laws',
      description: 'NyayaSetu maps your issue to exact sections under Bharatiya Nyaya Sanhita, Consumer Protection Act, or relevant welfare schemes.',
    },
    {
      number: '03',
      title: 'Draft Documents or Connect to Free Aid',
      description: 'Generate ready-to-print legal notices, file RTIs, or instantly find your district court free legal aid counselor.',
    },
  ];

  const testimonials = [
    {
      name: 'Sunita Devi',
      location: 'Lucknow, Uttar Pradesh',
      role: 'Home Maker',
      text: 'When our local hospital refused Ayushman Bharat cashless surgery, NyayaSetu helped me understand patient grievance rules and drafted an immediate complaint. The surgery was cleared without extra fee!',
    },
    {
      name: 'Rohan Deshmukh',
      location: 'Pune, Maharashtra',
      role: 'Software Engineer',
      text: 'My previous employer withheld two months of my earned salary and relieving letter. The legal notice generator drafted a formal demand letter citing Section 18 of the Payment of Wages Act. They cleared it within 5 days.',
    },
    {
      name: 'Manjeet Singh',
      location: 'Ludhiana, Punjab',
      role: 'Small Business Owner',
      text: 'The RTI builder is phenomenal. I submitted an RTI for delayed municipal drainage construction in our industrial ward, and the department started the work within 3 weeks of receiving the application.',
    },
  ];

  return (
    <div className="space-y-16 lg:space-y-24 pb-16">
      {/* Hero Section */}
      <section className="relative hero-pattern text-white pt-16 pb-24 lg:pt-24 lg:pb-32 overflow-hidden">
        {/* Subtle decorative glowing blobs */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-secondary-500/10 blur-[100px] rounded-full pointer-events-none" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-accent-500/10 blur-[120px] rounded-full pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-xs font-semibold text-secondary-300 mb-6">
            <span className="w-2 h-2 rounded-full bg-secondary-400 animate-ping" />
            Empowering 140 Crore Indian Citizens with Accessible Justice
          </div>

          {/* Main Headline */}
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white max-w-4xl mx-auto leading-tight sm:leading-tight">
            Know Your Rights. Access Government Services.{' '}
            <span className="text-secondary-400 underline decoration-secondary-500/50 decoration-wavy decoration-2">
              Get Legal Help
            </span>{' '}
            — All in One Place.
          </h1>

          <p className="mt-6 text-base sm:text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed">
            NyayaSetu is India's sovereign AI legal companion. Get simplified legal guidance, discover welfare benefits, generate formal legal documents, and connect to free court advocates.
          </p>

          {/* Quick Legal Question Search Bar */}
          <div className="mt-10 max-w-3xl mx-auto">
            <form onSubmit={handleQuickSearch} className="relative flex items-center shadow-2xl rounded-2xl overflow-hidden bg-white p-2">
              <div className="pl-3 pr-2 text-slate-400">
                <FaSearch className="w-5 h-5 text-primary-700" />
              </div>
              <input
                type="text"
                value={quickQuery}
                onChange={(e) => setQuickQuery(e.target.value)}
                placeholder="Ask any legal question (e.g., Can police check my phone? How to file RTI?)"
                className="w-full py-3 px-2 text-slate-800 placeholder-slate-400 text-sm sm:text-base focus:outline-none"
              />
              <button
                type="submit"
                className="shrink-0 px-5 sm:px-7 py-3 rounded-xl bg-secondary-500 hover:bg-secondary-600 text-white font-bold text-sm sm:text-base flex items-center gap-2 transition-all shadow-md"
              >
                <span>Ask Nyaya AI</span>
                <FaArrowRight className="w-4 h-4" />
              </button>
            </form>

            {/* Quick suggested chips */}
            <div className="mt-4 flex flex-wrap items-center justify-center gap-2 text-xs">
              <span className="text-slate-300 font-medium">Popular queries:</span>
              {AI_SUGGESTED_QUESTIONS.slice(0, 3).map((q, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() => handleSampleQuestionClick(q)}
                  className="bg-white/10 hover:bg-white/20 text-slate-200 border border-white/20 rounded-full px-3 py-1 transition-colors text-[11px] truncate max-w-xs"
                >
                  {q}
                </button>
              ))}
            </div>
          </div>

          {/* Action CTAs */}
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <Link
              to="/schemes"
              className="px-6 py-3.5 rounded-xl bg-accent-600 hover:bg-accent-700 text-white font-bold text-sm sm:text-base flex items-center gap-2 shadow-lg shadow-accent-900/30 transition-all"
            >
              <FaHandHoldingHeart className="w-4 h-4" />
              <span>Explore 50+ Welfare Schemes</span>
            </Link>
            <Link
              to="/documents"
              className="px-6 py-3.5 rounded-xl bg-white/10 hover:bg-white/20 border border-white/20 text-white font-bold text-sm sm:text-base flex items-center gap-2 backdrop-blur transition-all"
            >
              <FaFileContract className="w-4 h-4" />
              <span>Draft a Legal Notice / RTI</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="-mt-12 sm:-mt-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
        <div className="bg-white rounded-2xl shadow-xl border border-slate-200/80 p-6 sm:p-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 text-center divide-y lg:divide-y-0 lg:divide-x divide-slate-100">
            <div className="p-2">
              <div className="text-3xl sm:text-4xl font-extrabold text-primary-800">1000+</div>
              <p className="text-xs sm:text-sm text-slate-600 mt-1 font-medium">Statutory Laws & Acts Covered</p>
              <span className="text-[11px] text-accent-600 font-semibold">BNS, BNSS, BSA & Acts</span>
            </div>
            <div className="p-2">
              <div className="text-3xl sm:text-4xl font-extrabold text-secondary-500">50+</div>
              <p className="text-xs sm:text-sm text-slate-600 mt-1 font-medium">Government Welfare Schemes</p>
              <span className="text-[11px] text-slate-400">Direct Eligibility Check</span>
            </div>
            <div className="p-2 pt-4 lg:pt-2">
              <div className="text-3xl sm:text-4xl font-extrabold text-accent-600">500+</div>
              <p className="text-xs sm:text-sm text-slate-600 mt-1 font-medium">Legal Aid Centers Listed</p>
              <span className="text-[11px] text-accent-600 font-semibold">Across all 36 States & UTs</span>
            </div>
            <div className="p-2 pt-4 lg:pt-2">
              <div className="text-3xl sm:text-4xl font-extrabold text-primary-800">100% Free</div>
              <p className="text-xs sm:text-sm text-slate-600 mt-1 font-medium">Article 39A Access</p>
              <span className="text-[11px] text-slate-400">Public Interest Tech</span>
            </div>
          </div>
        </div>
      </section>

      {/* Core Platform Features Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <Badge variant="saffron" size="lg" className="mb-3">
            Citizen First Legal Services
          </Badge>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900">
            Everything You Need to Understand and Enforce Your Rights
          </h2>
          <p className="text-slate-600 mt-3 text-base sm:text-lg">
            Complex Indian statutes simplified into straightforward tools for daily problems.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {features.map((feature, idx) => (
            <Link key={idx} to={feature.link} className="block group">
              <Card
                accent={feature.color}
                className="h-full flex flex-col justify-between hover:border-primary-400 group-hover:shadow-xl transition-all"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-14 h-14 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-center group-hover:scale-110 transition-transform">
                      {feature.icon}
                    </div>
                    <Badge variant={feature.color === 'saffron' ? 'saffron' : feature.color === 'green' ? 'green' : 'primary'}>
                      {feature.badge}
                    </Badge>
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 group-hover:text-primary-800 transition-colors">
                    {feature.title}
                  </h3>
                  <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center gap-2 text-sm font-bold text-primary-800 group-hover:text-secondary-600 transition-colors">
                  <span>Explore Service</span>
                  <FaArrowRight className="w-3.5 h-3.5 transform group-hover:translate-x-1 transition-transform" />
                </div>
              </Card>
            </Link>
          ))}
        </div>
      </section>

      {/* 3-Step Process: How NyayaSetu Works */}
      <section className="bg-slate-100/80 py-16 lg:py-24 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <Badge variant="primary" size="lg" className="mb-3">
              Simple 3-Step Process
            </Badge>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900">
              How NyayaSetu Solves Citizen Disputes
            </h2>
            <p className="text-slate-600 mt-3 text-base">
              Demystifying the justice system into actionable, verifiable steps.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
            {steps.map((step, idx) => (
              <div key={idx} className="bg-white rounded-2xl p-8 border border-slate-200/90 shadow-sm relative z-10 flex flex-col justify-between">
                <div>
                  <div className="text-4xl font-black text-secondary-500/20 mb-4">
                    {step.number}
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-3">{step.title}</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">{step.description}</p>
                </div>
                <div className="mt-6 flex items-center gap-2 text-accent-600 text-xs font-semibold">
                  <FaCheckCircle className="w-4 h-4" />
                  <span>Citizen Verified Protocol</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Real Citizen Testimonials */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <Badge variant="green" size="lg" className="mb-3">
            Real Stories
          </Badge>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900">
            Real Citizens. Real Justice.
          </h2>
          <p className="text-slate-600 mt-2 text-base">
            How NyayaSetu is making legal empowerment accessible to ordinary Indians.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {testimonials.map((t, idx) => (
            <Card key={idx} hoverEffect={false} className="flex flex-col justify-between bg-white border border-slate-200 p-6 sm:p-8">
              <div>
                <FaQuoteLeft className="w-7 h-7 text-secondary-400 mb-4" />
                <p className="text-slate-700 text-sm leading-relaxed italic mb-6">
                  "{t.text}"
                </p>
              </div>
              <div className="pt-4 border-t border-slate-100">
                <h4 className="font-bold text-slate-900 text-sm">{t.name}</h4>
                <p className="text-xs text-slate-500">{t.role} • {t.location}</p>
              </div>
            </Card>
          ))}
        </div>
      </section>

      {/* High-Impact Bottom CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-gradient-to-r from-primary-800 via-primary-900 to-slate-900 p-8 sm:p-14 text-white text-center shadow-2xl relative overflow-hidden">
          <div className="relative z-10 max-w-3xl mx-auto space-y-6">
            <div className="w-16 h-16 rounded-2xl bg-white/10 mx-auto flex items-center justify-center text-3xl">
              ⚖️
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight">
              Start Exploring Your Constitutional Rights Today
            </h2>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              Don't let lack of legal awareness hold you back. Access schemes, draft dispute notices, or converse with our AI Legal assistant without any fee.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
              <Link
                to="/chatbot"
                className="px-8 py-3.5 rounded-xl bg-secondary-500 hover:bg-secondary-600 text-white font-bold text-base transition-all shadow-lg"
              >
                Ask Nyaya AI Chatbot
              </Link>
              <Link
                to="/rights"
                className="px-8 py-3.5 rounded-xl bg-white/10 hover:bg-white/20 border border-white/20 text-white font-bold text-base transition-all"
              >
                Browse All Rights
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
