import React, { useState, useMemo } from 'react';
import {
  FaFileContract,
  FaDownload,
  FaCopy,
  FaPrint,
  FaCheck,
  FaBookmark,
  FaEdit,
  FaEye,
  FaUndo,
  FaInfoCircle
} from 'react-icons/fa';
import Badge from '../components/common/Badge';
import { DOCUMENT_TEMPLATES } from '../data/mockData';
import { useAuth } from '../context/AuthContext';
import toast from 'react-hot-toast';

export const DocumentGenerator = () => {
  const { user, saveGeneratedDocument } = useAuth();

  const [selectedDocId, setSelectedDocId] = useState('rti');
  const [formData, setFormData] = useState({
    // Default initial values for instant realistic preview
    applicantName: user?.fullName || 'Aarav Sharma',
    applicantAddress: 'House No. 42, Sector 14, Rohini, New Delhi - 110085',
    applicantPhone: '+91 98765 43210',
    publicAuthority: 'Municipal Corporation of Delhi (MCD), West Zone',
    informationSought: '1. Please provide the certified sanction order and budgeted expenditure for the road repair work of Sector 14 Main Road.\n2. Please furnish the contractor name, contract amount, and stipulated completion date.\n3. Certified copy of the daily site inspection register from Jan 2026 to date.',
    periodOfInfo: 'January 2026 to Present',
    feeDetails: 'IPO (Indian Postal Order) of ₹10',

    // Consumer fields
    complainantName: user?.fullName || 'Aarav Sharma',
    complainantAddress: 'House No. 42, Sector 14, Rohini, New Delhi - 110085',
    oppositePartyName: 'TechGizmo India Retailers Pvt Ltd',
    oppositePartyAddress: 'Plot 12, Okhla Industrial Area Phase-III, New Delhi - 110020',
    purchaseDate: '2026-08-15',
    invoiceNumber: 'INV/2026/89412',
    amountPaid: '45999',
    defectDetails: 'The laptop stopped booting within 10 days of delivery. Authorized service center refused repair citing baseless damage claim without inspection report.',
    reliefDemanded: 'Full refund of ₹45,999 along with 18% p.a. interest and ₹15,000 towards mental agony and litigation expenses.',
    noticeDays: '15',

    // Legal notice
    senderName: user?.fullName || 'Aarav Sharma',
    senderAddress: 'House No. 42, Sector 14, Rohini, New Delhi - 110085',
    recipientName: 'Vikas Mehra',
    recipientAddress: 'Flat 304, Green Valley Apartments, Noida, Uttar Pradesh - 201301',
    subjectLine: 'STATUTORY LEGAL DEMAND NOTICE FOR RECOVERY OF OUTSTANDING SUM OF ₹1,50,000',
    disputeSummary: 'That you approached my client for a friendly loan of ₹1,50,000 in December 2025 promising repayment within 3 months. Despite multiple reminders and bank transfer confirmation dated 12/12/2025, you have failed and neglected to repay.',
    demandSummary: 'You are hereby called upon to pay the entire outstanding sum of ₹1,50,000 along with interest @ 12% p.a. within 15 days of receipt of this notice.',
    complianceDays: '15',

    // Police Complaint
    guardianName: 'Late Shri Ramesh Sharma',
    policeStation: 'Station House Officer (SHO), Police Station Rohini North, Delhi',
    incidentDateTime: '2026-10-18T19:30',
    incidentLocation: 'Sector 14 Market complex near ATM booth, Rohini, Delhi',
    accusedDetails: 'Two unknown individuals riding a black motorcycle without registration plate, aged approx 25-30 years.',
    incidentDescription: 'While walking back from the grocery market, two individuals on a black motorcycle intercepted me from behind, forcibly snatched my mobile phone (Samsung Galaxy S24, IMEI: 358921...) and sped away towards Ring Road.',
    witnesses: 'Shopkeeper Ramesh Verma (Verma Sweets, Mob: 98112XXXXX)',

    // Affidavit
    deponentName: user?.fullName || 'Aarav Sharma',
    deponentAge: '32',
    relationName: 'Shri Ramesh Sharma',
    deponentAddress: 'House No. 42, Sector 14, Rohini, New Delhi - 110085',
    purpose: 'Declaration of True Residential Address and Name Verification',
    statement1: 'That I am a permanent and bona-fide citizen of India residing peacefully at the aforementioned address.',
    statement2: 'That my name spelled as "Aarav Sharma" in my Aadhaar card and "Arav Sharma" in my educational degree belong to one and the same person, i.e., myself.',
    statement3: 'That this affidavit is executed for submission to the concerned passport authority / government office as legal proof of identity and record.'
  });

  const [copied, setCopied] = useState(false);
  const [activeView, setActiveView] = useState('form'); // 'form' or 'preview'

  const currentTemplate = useMemo(() => {
    return DOCUMENT_TEMPLATES.find((t) => t.id === selectedDocId) || DOCUMENT_TEMPLATES[0];
  }, [selectedDocId]);

  const handleInputChange = (fieldName, value) => {
    setFormData((prev) => ({
      ...prev,
      [fieldName]: value
    }));
  };

  // Generate Formal Legal Document Text
  const generatedText = useMemo(() => {
    const today = new Date().toLocaleDateString('en-IN', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    });

    switch (selectedDocId) {
      case 'rti':
        return `FORM 'A'
[See Rule 3(1)]
APPLICATION FOR OBTAINING INFORMATION UNDER SECTION 6(1) OF THE RIGHT TO INFORMATION ACT, 2005

Dated: ${today}

To,
The Public Information Officer (PIO),
${formData.publicAuthority || '[Name of Public Authority / Department]'}

1. Full Name of the Applicant: ${formData.applicantName || '[Your Name]'}
2. Address for Correspondence: ${formData.applicantAddress || '[Your Address]'}
3. Contact Details: Phone: ${formData.applicantPhone || '[Your Mobile]'}

4. Particulars of Information Required:
(a) Subject matter of Information:
${formData.informationSought || '[State your specific questions here]'}

(b) The period to which information relates:
${formData.periodOfInfo || '[Specify timeframe]'}

(c) Description of information required:
Certified copies of all relevant file notings, sanction orders, bills, and communications.

5. Application Fee:
The prescribed fee of ₹10 (Rupees Ten only) is paid through: ${formData.feeDetails || 'Indian Postal Order / Court Fee Stamp'}.

6. Citizenship Declaration:
I hereby declare that I am a citizen of India and eligible to seek information under the RTI Act, 2005.

Place: New Delhi
Date: ${today}

________________________
(Signature of the Applicant)
${formData.applicantName || 'Applicant'}`;

      case 'consumer-complaint':
        return `LEGAL NOTICE UNDER SECTION 35 / 38 OF THE CONSUMER PROTECTION ACT, 2019

Dated: ${today}

BY SPEED POST WITH A/D / REGISTERED EMAIL

To,
The Managing Director / Grievance Officer,
${formData.oppositePartyName || '[Opposite Party / Merchant Name]'}
Address: ${formData.oppositePartyAddress || '[Merchant Registered Address]'}

Subject: Legal Notice for Deficiency in Service and Unfair Trade Practice regarding Invoice No: ${formData.invoiceNumber || '[Invoice No]'}

Sir / Madam,

Under instructions and on behalf of my client / the undersigned, ${formData.complainantName || '[Your Name]'}, residing at ${formData.complainantAddress || '[Your Address]'}, I hereby serve upon you this Statutory Legal Notice:

1. That on ${formData.purchaseDate || '[Date]'}, the undersigned availed / purchased your product / services against Invoice/Order No. ${formData.invoiceNumber || '[Inv No]'} for a total paid consideration of ₹${formData.amountPaid || '0'}/-.

2. That the said product/service suffered from serious defects and deficiency in service, particulars of which are as follows:
${formData.defectDetails || '[Defect Description]'}

3. That despite multiple written grievances and communications, your company has failed and neglected to rectify the defect or refund the amount, which constitutes gross 'Deficiency in Service' and 'Unfair Trade Practice' as defined under the Consumer Protection Act, 2019.

4. YOU ARE HEREBY CALLED UPON to comply with the following demands within ${formData.noticeDays || '15'} days of receipt of this notice:
${formData.reliefDemanded || '[Relief Demanded]'}

Failure to comply with the above terms shall constrain the undersigned to institute appropriate proceedings before the competent District Consumer Disputes Redressal Commission (DCDRC) holding your company liable for heavy compensation, punitive damages, and litigation expenses.

Yours faithfully,

________________________
${formData.complainantName || 'Complainant'}`;

      case 'legal-notice':
        return `LEGAL DEMAND NOTICE
(UNDER INSTRUCTIONS & PURSUANT TO RELEVANT STATUTES)

Dated: ${today}

TO,
${formData.recipientName || '[Recipient Name]'}
${formData.recipientAddress || '[Recipient Address]'}

SUBJECT: ${formData.subjectLine || 'LEGAL NOTICE'}

Sir / Madam,

Under instructions and authority from the Sender, ${formData.senderName || '[Sender Name]'}, residing at ${formData.senderAddress || '[Sender Address]'}, this Legal Notice is hereby issued:

1. Factual Background:
${formData.disputeSummary || '[State facts of the dispute clearly]'}

2. Violation of Legal Rights:
Your failure, breach, and omission have caused immense pecuniary loss, mental agony, and disruption to the Sender, violating statutory and civil obligations.

3. Demand for Compliance:
${formData.demandSummary || '[State your demands]'}

YOU ARE ACCORDINGLY CALLED UPON to satisfy and perform the aforesaid requirements within a period of ${formData.complianceDays || '15'} (Fifteen) days from the date of receipt of this notice.

Should you fail to comply, please take notice that the Sender shall initiate appropriate civil and criminal proceedings before the competent Court of Law entirely at your own risk, cost, and legal consequences.

A copy of this Legal Notice is retained in records for future legal presentation.

Yours sincerely,

________________________
${formData.senderName || 'Sender / Advocate'}`;

      case 'police-complaint':
        return `COMPLAINT LETTER FOR REGISTRATION OF FIR
(UNDER SECTION 173 OF THE BHARATIYA NAGARIK SURAKSHA SANHITA, 2023)

Dated: ${today}

To,
The Station House Officer (SHO),
${formData.policeStation || '[Police Station Name & District]'}

Subject: Formal Written Complaint for Lodging of FIR for Cognizable Offense

Respected Sir / Madam,

I, ${formData.complainantName || '[Name]'}, S/o / D/o / W/o ${formData.guardianName || '[Guardian Name]'}, residing at ${formData.complainantAddress || '[Your Address]'}, submit this formal complaint as follows:

1. Date and Time of Incident: ${formData.incidentDateTime ? new Date(formData.incidentDateTime).toLocaleString('en-IN') : '[Date & Time]'}
2. Exact Location of Occurrence: ${formData.incidentLocation || '[Location]'}
3. Details of Accused Persons: ${formData.accusedDetails || '[Names or Physical Description]'}

4. Statement of Facts:
${formData.incidentDescription || '[Chronological statement of events]'}

5. Eye-Witnesses / Evidence:
${formData.witnesses || 'Relevant nearby shopkeepers and CCTV camera installations.'}

In view of the above-stated facts revealing the commission of cognizable offenses under the Bharatiya Nyaya Sanhita (BNS), it is most respectfully prayed that an FIR be registered forthwith under Section 173 BNSS, investigation be initiated, and the offenders brought to justice.

Kindly provide a certified copy of the registered FIR free of cost as mandated by law.

Yours faithfully,

________________________
(Complainant Signature)
Name: ${formData.complainantName || '[Name]'}
Phone: ${formData.applicantPhone || '[Phone]'}`;

      case 'affidavit':
        return `AFFIDAVIT
(TO BE ATTESTED BEFORE NOTARY PUBLIC / OATH COMMISSIONER)

I, ${formData.deponentName || '[Your Full Name]'}, aged about ${formData.deponentAge || '30'} years, Son/Daughter/Spouse of ${formData.relationName || '[Father/Spouse Name]'}, permanent resident of ${formData.deponentAddress || '[Full Address]'}, do hereby solemnly affirm and state on oath as under:

1. That I am a law-abiding citizen of India, competent to swear this affidavit.

2. Purpose: ${formData.purpose || '[State purpose]'}

3. ${formData.statement1 || 'That I state that...'}

4. ${formData.statement2 || 'That I further state that...'}

${formData.statement3 ? `5. ${formData.statement3}` : ''}

DEPONENT

VERIFICATION:
Verified at New Delhi on this ${today}, that the contents of paragraphs 1 to ${formData.statement3 ? '5' : '4'} of the above affidavit are true and correct to the best of my personal knowledge and belief. No part of it is false and nothing material has been concealed therefrom.

DEPONENT

ATTESTATION / NOTARY PUBLIC:
Solemnly affirmed before me on this day.`;

      default:
        return 'Select a document template to generate text.';
    }
  }, [selectedDocId, formData]);

  const handleCopy = () => {
    navigator.clipboard.writeText(generatedText);
    setCopied(true);
    toast.success('Document copied to clipboard!');
    setTimeout(() => setCopied(false), 2000);
  };

  const handlePrint = () => {
    window.print();
  };

  const handleDownloadTxt = () => {
    const element = document.createElement('a');
    const file = new Blob([generatedText], { type: 'text/plain;charset=utf-8' });
    element.href = URL.createObjectURL(file);
    element.download = `NyayaSetu_${selectedDocId}_${Date.now()}.txt`;
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
    toast.success('Document downloaded as TXT file');
  };

  const handleSaveToProfile = () => {
    if (!user) {
      toast.error('Please log in to save documents to your citizen profile.');
      return;
    }
    saveGeneratedDocument({
      type: currentTemplate.name,
      title: `${currentTemplate.name} (${formData.applicantName || formData.complainantName || formData.senderName})`,
      content: generatedText,
    });
    toast.success('Document saved to your profile!');
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
      {/* Page Header */}
      <div className="mb-8">
        <Badge variant="saffron" size="lg" className="mb-3">
          Automated Legal Drafting
        </Badge>
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900">
              Citizen Legal Document Generator
            </h1>
            <p className="mt-2 text-slate-600 max-w-2xl text-sm sm:text-base">
              Generate legally compliant RTI applications, consumer notices, police complaints, and sworn affidavits in seconds. Formatted to Indian court and statutory requirements.
            </p>
          </div>
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={handleSaveToProfile}
              className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-primary-50 text-primary-800 hover:bg-primary-100 font-bold text-xs border border-primary-200 transition-colors"
            >
              <FaBookmark className="w-3.5 h-3.5" />
              <span>Save to Profile</span>
            </button>
          </div>
        </div>
      </div>

      {/* Document Type Selector Bar */}
      <div className="flex items-center gap-2 overflow-x-auto pb-3 scrollbar-none mb-6">
        {DOCUMENT_TEMPLATES.map((tmpl) => (
          <button
            key={tmpl.id}
            type="button"
            onClick={() => {
              setSelectedDocId(tmpl.id);
            }}
            className={`shrink-0 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all flex items-center gap-2 ${
              selectedDocId === tmpl.id
                ? 'bg-primary-800 text-white shadow-md'
                : 'bg-white text-slate-700 border border-slate-200 hover:border-primary-300 hover:bg-slate-50'
            }`}
          >
            <FaFileContract className="w-3.5 h-3.5" />
            <span>{tmpl.name}</span>
          </button>
        ))}
      </div>

      {/* Mobile View Toggle */}
      <div className="lg:hidden flex items-center justify-center p-1 bg-slate-200/80 rounded-xl mb-6">
        <button
          type="button"
          onClick={() => setActiveView('form')}
          className={`flex-1 py-2 text-xs font-bold rounded-lg transition-all ${
            activeView === 'form' ? 'bg-white text-primary-800 shadow-sm' : 'text-slate-600'
          }`}
        >
          Form Inputs
        </button>
        <button
          type="button"
          onClick={() => setActiveView('preview')}
          className={`flex-1 py-2 text-xs font-bold rounded-lg transition-all ${
            activeView === 'preview' ? 'bg-white text-primary-800 shadow-sm' : 'text-slate-600'
          }`}
        >
          Legal Preview
        </button>
      </div>

      {/* Main Grid: Form on Left, Real-time Document Preview on Right */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Dynamic Form Editor */}
        <div
          className={`lg:col-span-5 bg-white rounded-3xl border border-slate-200 p-6 sm:p-8 shadow-sm space-y-5 ${
            activeView === 'form' ? 'block' : 'hidden lg:block'
          }`}
        >
          <div>
            <h3 className="text-lg font-bold text-slate-900">{currentTemplate.name}</h3>
            <p className="text-xs text-slate-500 mt-1">{currentTemplate.description}</p>
          </div>

          <div className="space-y-4 pt-2">
            {currentTemplate.fields.map((field) => (
              <div key={field.name}>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  {field.label} {field.required && <span className="text-red-500">*</span>}
                </label>
                {field.type === 'textarea' ? (
                  <textarea
                    rows={field.name === 'informationSought' || field.name === 'incidentDescription' ? 4 : 3}
                    value={formData[field.name] || ''}
                    placeholder={field.placeholder || ''}
                    onChange={(e) => handleInputChange(field.name, e.target.value)}
                    className="w-full rounded-xl border border-slate-200 p-3 text-xs sm:text-sm text-slate-800 focus:outline-none focus:border-primary-500 focus:ring-2 focus:ring-primary-100"
                  />
                ) : field.type === 'select' ? (
                  <select
                    value={formData[field.name] || ''}
                    onChange={(e) => handleInputChange(field.name, e.target.value)}
                    className="w-full rounded-xl border border-slate-200 p-3 text-xs sm:text-sm text-slate-800 focus:outline-none focus:border-primary-500"
                  >
                    {field.options?.map((opt, oIdx) => (
                      <option key={oIdx} value={opt}>
                        {opt}
                      </option>
                    ))}
                  </select>
                ) : (
                  <input
                    type={field.type}
                    value={formData[field.name] || ''}
                    placeholder={field.placeholder || ''}
                    onChange={(e) => handleInputChange(field.name, e.target.value)}
                    className="w-full rounded-xl border border-slate-200 p-3 text-xs sm:text-sm text-slate-800 focus:outline-none focus:border-primary-500 focus:ring-2 focus:ring-primary-100"
                  />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Live Document Preview Panel */}
        <div
          className={`lg:col-span-7 bg-white rounded-3xl border border-slate-200 shadow-md overflow-hidden ${
            activeView === 'preview' ? 'block' : 'hidden lg:block'
          }`}
        >
          {/* Action Toolbar */}
          <div className="bg-slate-900 text-white p-4 px-6 flex flex-wrap items-center justify-between gap-3">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-xs font-bold uppercase tracking-wider text-slate-200">
                Official Court / Statutory Draft Preview
              </span>
            </div>
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={handleCopy}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-xs font-semibold text-white transition-colors"
              >
                {copied ? <FaCheck className="w-3 h-3 text-emerald-400" /> : <FaCopy className="w-3 h-3" />}
                <span>{copied ? 'Copied' : 'Copy'}</span>
              </button>
              <button
                type="button"
                onClick={handlePrint}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-xs font-semibold text-white transition-colors"
              >
                <FaPrint className="w-3 h-3" />
                <span>Print</span>
              </button>
              <button
                type="button"
                onClick={handleDownloadTxt}
                className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-secondary-500 hover:bg-secondary-600 text-xs font-bold text-white transition-all shadow"
              >
                <FaDownload className="w-3 h-3" />
                <span>Download TXT</span>
              </button>
            </div>
          </div>

          {/* Document Content Paper */}
          <div className="p-8 sm:p-12 font-serif text-slate-900 bg-slate-50/30 min-h-[600px] leading-relaxed text-xs sm:text-sm select-text border-t border-slate-100 whitespace-pre-wrap">
            {generatedText}
          </div>

          {/* Legal Instruction Footnote */}
          <div className="p-4 bg-slate-100 border-t border-slate-200 text-[11px] text-slate-500 flex items-start gap-2">
            <FaInfoCircle className="w-4 h-4 text-primary-800 shrink-0 mt-0.5" />
            <span>
              Instructions: Print this document on standard A4 legal paper. Attach applicable postal orders (for RTI) or non-judicial stamp paper (for affidavits). Retain speed post tracking receipts for proof of delivery.
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DocumentGenerator;
