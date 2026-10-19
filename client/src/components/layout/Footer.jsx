import React from 'react';
import { Link } from 'react-router-dom';
import {
  FaPhoneAlt,
  FaShieldAlt,
  FaEnvelope,
  FaBalanceScale,
  FaTwitter,
  FaLinkedin,
  FaYoutube,
  FaHeart
} from 'react-icons/fa';

export const Footer = () => {
  return (
    <footer className="bg-primary-900 text-slate-300 border-t border-primary-800">
      {/* Essential National Helplines Bar */}
      <div className="bg-primary-950 border-b border-primary-800/80 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-between gap-4 text-xs">
            <div className="flex items-center gap-2 text-secondary-400 font-bold uppercase tracking-wider">
              <FaPhoneAlt className="w-3.5 h-3.5 animate-pulse" />
              <span>National Citizen Emergency & Legal Helplines:</span>
            </div>
            <div className="flex flex-wrap items-center gap-4 sm:gap-6 text-slate-300">
              <div>
                <span className="text-slate-400">National Legal Aid (NALSA): </span>
                <a href="tel:15100" className="font-bold text-white hover:text-secondary-400 transition-colors">15100</a>
              </div>
              <div>
                <span className="text-slate-400">Cyber Crime Helpline: </span>
                <a href="tel:1930" className="font-bold text-white hover:text-secondary-400 transition-colors">1930</a>
              </div>
              <div>
                <span className="text-slate-400">Women in Distress: </span>
                <a href="tel:181" className="font-bold text-white hover:text-secondary-400 transition-colors">181</a>
              </div>
              <div>
                <span className="text-slate-400">National Consumer Helpline: </span>
                <a href="tel:1915" className="font-bold text-white hover:text-secondary-400 transition-colors">1915</a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Links */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-10">
          
          {/* Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-white text-xl">
                ⚖️
              </div>
              <div>
                <span className="text-2xl font-black text-white">Nyaya<span className="text-secondary-400">Setu</span></span>
                <p className="text-xs text-slate-400">न्यायसेतु • सेतु न्याय और नागरिक का</p>
              </div>
            </div>
            <p className="text-sm text-slate-300 leading-relaxed max-w-sm">
              An AI-powered public interest technology initiative bridging Indian citizens with their statutory rights, government welfare schemes, free legal aid, and automated legal drafting.
            </p>
            <div className="flex items-center gap-3 pt-2">
              <a href="https://twitter.com" target="_blank" rel="noreferrer" className="w-9 h-9 rounded-lg bg-primary-800 hover:bg-secondary-500 text-white flex items-center justify-center transition-colors">
                <FaTwitter className="w-4 h-4" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="w-9 h-9 rounded-lg bg-primary-800 hover:bg-secondary-500 text-white flex items-center justify-center transition-colors">
                <FaLinkedin className="w-4 h-4" />
              </a>
              <a href="https://youtube.com" target="_blank" rel="noreferrer" className="w-9 h-9 rounded-lg bg-primary-800 hover:bg-secondary-500 text-white flex items-center justify-center transition-colors">
                <FaYoutube className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Access */}
          <div>
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4 border-l-2 border-secondary-500 pl-2">
              Platform
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link to="/chatbot" className="hover:text-white transition-colors">AI Nyaya Bot</Link>
              </li>
              <li>
                <Link to="/schemes" className="hover:text-white transition-colors">Government Schemes</Link>
              </li>
              <li>
                <Link to="/rights" className="hover:text-white transition-colors">Know Your Rights</Link>
              </li>
              <li>
                <Link to="/documents" className="hover:text-white transition-colors">Document Generator</Link>
              </li>
              <li>
                <Link to="/legal-aid" className="hover:text-white transition-colors">Legal Aid Directory</Link>
              </li>
              <li>
                <Link to="/news" className="hover:text-white transition-colors">Legal News & Bulletins</Link>
              </li>
            </ul>
          </div>

          {/* Citizen Legal Rights */}
          <div>
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4 border-l-2 border-accent-400 pl-2">
              Rights Hub
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link to="/rights/consumer-rights" className="hover:text-white transition-colors">Consumer Protection</Link>
              </li>
              <li>
                <Link to="/rights/criminal-law" className="hover:text-white transition-colors">Arrest & FIR Rights</Link>
              </li>
              <li>
                <Link to="/rights/women-rights" className="hover:text-white transition-colors">Women Safety & POSH</Link>
              </li>
              <li>
                <Link to="/rights/cyber-law" className="hover:text-white transition-colors">Cyber Fraud & IT Act</Link>
              </li>
              <li>
                <Link to="/rights/labor-rights" className="hover:text-white transition-colors">Labor & Minimum Wages</Link>
              </li>
              <li>
                <Link to="/rights/property-rights" className="hover:text-white transition-colors">RERA & Tenancy Rights</Link>
              </li>
            </ul>
          </div>

          {/* Government & Transparency */}
          <div>
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4 border-l-2 border-primary-400 pl-2">
              Citizen Support
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <span className="text-slate-400 block text-xs">National Legal Authority</span>
                <a href="https://nalsa.gov.in" target="_blank" rel="noreferrer" className="text-white hover:underline text-xs">nalsa.gov.in</a>
              </li>
              <li className="pt-2">
                <span className="text-slate-400 block text-xs">Cyber Reporting Portal</span>
                <a href="https://cybercrime.gov.in" target="_blank" rel="noreferrer" className="text-white hover:underline text-xs">cybercrime.gov.in</a>
              </li>
              <li className="pt-2">
                <span className="text-slate-400 block text-xs">Consumer Grievance</span>
                <a href="https://consumerhelpline.gov.in" target="_blank" rel="noreferrer" className="text-white hover:underline text-xs">consumerhelpline.gov.in</a>
              </li>
              <li className="pt-3">
                <Link to="/profile" className="inline-flex items-center gap-1.5 text-secondary-400 hover:text-secondary-300 font-semibold text-xs">
                  <FaShieldAlt className="w-3 h-3" /> Citizen Grievance Desk
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Disclaimer Note */}
        <div className="mt-12 pt-8 border-t border-primary-800 text-xs text-slate-400 leading-relaxed bg-primary-950/40 p-4 rounded-xl border">
          <p className="font-semibold text-slate-300 mb-1">⚖️ Legal Information & Public Interest Disclaimer:</p>
          NyayaSetu is an educational legal awareness and citizen empowerment platform. The information, AI answers, and generated documents are for informational guidance and do not constitute formal legal representation or an advocate-client relationship. For formal litigation or criminal defense, citizens are encouraged to consult certified advocates or access free legal aid counsel through your local District Legal Services Authority (DLSA).
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 pt-6 border-t border-primary-800/60 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div className="flex items-center gap-1.5">
            <span>Made with</span>
            <FaHeart className="w-3.5 h-3.5 text-red-500 fill-current" />
            <span>for the citizens of India • न्याय सबके लिए</span>
          </div>
          <div className="flex items-center gap-6">
            <span>© {new Date().getFullYear()} NyayaSetu. Open Knowledge Platform.</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
