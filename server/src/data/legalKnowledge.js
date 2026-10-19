/**
 * Comprehensive Indian Legal Knowledge Base for NyayaSetu
 * Covers 8 major legal domains with statutory citations, fundamental rights,
 * citizen remedies, actionable guidance, and national emergency helplines.
 */

import { matchLegalScenario } from './legalScenarios.js';

export const legalCategories = [
  {
    id: 'consumer',
    title: 'Consumer Rights & Protection',
    icon: 'ShoppingBag',
    description: 'Protection against unfair trade practices, defective goods, deficient services, and e-commerce frauds.',
    laws: ['Consumer Protection Act, 2019', 'Consumer Protection (E-Commerce) Rules, 2020'],
  },
  {
    id: 'labor',
    title: 'Labor & Employment Rights',
    icon: 'Briefcase',
    description: 'Fair wages, termination disputes, provident fund, gratuity, overtime pay, and workplace safety.',
    laws: ['Industrial Disputes Act, 1947', 'Payment of Wages Act, 1936', 'Code on Wages, 2019', 'Employees’ Provident Funds Act, 1952'],
  },
  {
    id: 'property',
    title: 'Property & Real Estate Law',
    icon: 'Home',
    description: 'Real estate disputes, builder delays, inheritance, ancestral property rights, mutation, and tenancy.',
    laws: ['Real Estate (Regulation and Development) Act, 2016 (RERA)', 'Transfer of Property Act, 1882', 'Hindu Succession Amendment Act, 2005'],
  },
  {
    id: 'family',
    title: 'Family & Matrimonial Law',
    icon: 'Users',
    description: 'Marriage registration, mutual and contested divorce, alimony, maintenance, child custody, and domestic disputes.',
    laws: ['Hindu Marriage Act, 1955', 'Special Marriage Act, 1954', 'Protection of Women from Domestic Violence Act, 2005', 'Section 125 CrPC'],
  },
  {
    id: 'criminal',
    title: 'Criminal Law & Police Procedures',
    icon: 'ShieldAlert',
    description: 'Filing an FIR, Zero FIR, rights upon arrest, bail procedures, cognizable vs non-cognizable offences.',
    laws: ['Bharatiya Nyaya Sanhita, 2023 (BNS)', 'Indian Penal Code, 1860', 'Bharatiya Nagarik Suraksha Sanhita, 2023 / CrPC 1973'],
  },
  {
    id: 'constitutional',
    title: 'Constitutional Rights & Remedies',
    icon: 'Scale',
    description: 'Fundamental rights guaranteed by the Constitution of India, Right to Information (RTI), and writ petitions.',
    laws: ['Constitution of India (Articles 14 to 32)', 'Right to Information Act, 2005'],
  },
  {
    id: 'women',
    title: 'Women’s Rights & Safety',
    icon: 'HeartHandshake',
    description: 'Protection against domestic violence, dowry harassment, workplace sexual harassment (POSH), and maternity benefits.',
    laws: ['Protection of Women from Domestic Violence Act, 2005', 'POSH Act, 2013', 'Dowry Prohibition Act, 1961', 'Maternity Benefit Act, 2017'],
  },
  {
    id: 'cyber',
    title: 'Cyber Crime & Digital Safety',
    icon: 'Laptop',
    description: 'Financial online fraud, UPI scams, identity theft, hacking, cyberstalking, and digital personal data privacy.',
    laws: ['Information Technology Act, 2000 (Amended 2008)', 'Digital Personal Data Protection Act, 2023'],
  },
];

export const legalKnowledgeBase = {
  consumer: {
    category: 'Consumer Rights',
    governingAct: 'Consumer Protection Act, 2019 (replaced the 1986 Act)',
    regulatoryBody: 'Central Consumer Protection Authority (CCPA) and National Consumer Disputes Redressal Commission (NCDRC)',
    rights: [
      {
        title: 'Right to Safety',
        summary: 'Protection against goods and services that are hazardous to life and property.',
        applicableLaw: 'Section 2(9)(i), Consumer Protection Act, 2019',
        actionSteps: [
          'Preserve purchase invoice, warranty card, and product packaging.',
          'Issue formal written complaint to manufacturer / service provider.',
          'File complaint with the CCPA or District Consumer Commission.',
        ],
      },
      {
        title: 'Right to be Informed',
        summary: 'Right to be informed about quality, quantity, potency, purity, standard, and price of goods or services.',
        applicableLaw: 'Section 2(9)(ii), Consumer Protection Act, 2019',
        actionSteps: [
          'Verify MRP, manufacturing date, and expiry date.',
          'Report misleading advertisements or hidden charges to CCPA.',
        ],
      },
      {
        title: 'Right to Choose & Seek Redressal',
        summary: 'Assured access to a variety of goods at competitive prices and right to fair compensation against unfair trade practices.',
        applicableLaw: 'Section 2(9)(iii) & (v), Consumer Protection Act, 2019',
        actionSteps: [
          'Send a formal 15-day legal notice demanding refund or replacement.',
          'File an e-complaint on National Consumer Helpline (NCH) portal or call 1915.',
          'File case via online e-Daakhil portal (edaakhil.nic.in).',
        ],
      },
      {
        title: 'Jurisdiction of Consumer Commissions',
        summary: 'Pecuniary jurisdictions under Consumer Protection Act 2019 as revised:',
        applicableLaw: 'Sections 34, 47, and 58 of Consumer Protection Act, 2019',
        details: [
          'District Commission: Value of goods/services paid up to ₹50 Lakhs (revised).',
          'State Commission: Value of goods/services between ₹50 Lakhs to ₹2 Crores.',
          'National Commission (NCDRC): Value of goods/services exceeding ₹2 Crores.',
          'Complaints can now be filed where the complainant resides or works, not just where the seller is located.',
        ],
        actionSteps: [
          'Register on edaakhil.nic.in.',
          'Draft complaint petition detailing facts, deficiency, and relief sought.',
          'Pay standard nominal court fee online (free up to ₹5 Lakhs).',
        ],
      },
      {
        title: 'E-Commerce Rights & Return Policies',
        summary: 'E-commerce entities cannot impose cancellation charges after order confirmation unless similar charges apply to the seller.',
        applicableLaw: 'Consumer Protection (E-Commerce) Rules, 2020',
        actionSteps: [
          'Retain digital order receipts, tracking numbers, and delivery logs.',
          'File complaint with the platform’s Grievance Redressal Officer (mandatory response within 48 hours).',
          'Escalate to National Consumer Helpline app or portal.',
        ],
      },
    ],
    helplines: [
      'National Consumer Helpline: 1915 or SMS to 8800001915',
      'Web Portal: consumerhelpline.gov.in',
      'e-Daakhil Portal: edaakhil.nic.in',
    ],
    faqs: [
      {
        q: 'Can a seller charge above MRP for cold drinks or restaurant items?',
        a: 'Charging above MRP is illegal under Legal Metrology Act, 2009 for packaged commodities. However, dine-in restaurants may charge menu prices because they render a hospitality service (Federation of Hotels judgment).',
      },
      {
        q: 'Do I need an advocate to file a case in Consumer Court?',
        a: 'No. Any consumer can appear in person or represent their own case before the Consumer Forum without hiring a lawyer.',
      },
    ],
  },

  labor: {
    category: 'Labor & Employment Rights',
    governingAct: 'Industrial Disputes Act, 1947, Payment of Wages Act, 1936, Code on Wages, 2019',
    regulatoryBody: 'Ministry of Labour and Employment, Labour Commissioners, EPFO, and ESIC',
    rights: [
      {
        title: 'Right to Minimum Wages & Timely Payment',
        summary: 'Every worker has the statutory right to be paid at or above state-notified minimum wage rates, and wages must be disbursed before the 7th or 10th of each month.',
        applicableLaw: 'Minimum Wages Act, 1948 & Code on Wages, 2019',
        actionSteps: [
          'Check state minimum wage schedule for skilled/unskilled categories.',
          'Submit written request to employer HR/payroll department.',
          'File wage grievance before the regional Labour Commissioner.',
        ],
      },
      {
        title: 'Protection Against Arbitrary Termination',
        summary: 'Workmen who have completed 240 days of continuous service cannot be terminated without 30 days notice (or wages in lieu) and retrenchment compensation equal to 15 days average pay per completed year.',
        applicableLaw: 'Section 25F, Industrial Disputes Act, 1947',
        actionSteps: [
          'Demand formal termination letter citing reasons.',
          'Send legal notice challenging wrongful termination.',
          'File industrial dispute claim before the Labour Conciliation Officer.',
        ],
      },
      {
        title: 'Right to Provident Fund (EPF) and Gratuity',
        summary: 'Mandatory PF contribution (12% employee + 12% employer) for establishments with 20+ employees. Gratuity is mandatory after 5 years of continuous service (calculated as 15 days last drawn salary per year).',
        applicableLaw: 'EPF & MP Act, 1952 and Payment of Gratuity Act, 1972',
        actionSteps: [
          'Check PF balance through UAN on member.epfindia.gov.in.',
          'File grievance on EPFiGMS portal (epfigms.gov.in) if employer fails to deposit deductions.',
          'File Form I before Controlling Authority for unpaid gratuity.',
        ],
      },
      {
        title: 'Standard Working Hours & Overtime Compensation',
        summary: 'Working hours cannot exceed 9 hours per day or 48 hours per week without overtime pay, which must be paid at double the ordinary wage rate.',
        applicableLaw: 'Factories Act, 1948 & State Shops and Establishments Acts',
        actionSteps: [
          'Maintain contemporaneous logs of overtime hours worked.',
          'Demand overtime wages in writing with reference to Shops & Establishments Act.',
        ],
      },
    ],
    helplines: [
      'Shram Suvidha Portal: shramsuvidha.gov.in',
      'EPFO Toll-Free Helpline: 1800 118 005',
      'Chief Labour Commissioner Grievance Desk: clc.gov.in',
    ],
    faqs: [
      {
        q: 'Can an employer withhold salary or experience letter upon resignation?',
        a: 'No. An employer cannot legally withhold earned wages or basic relieving/experience certificates if the employee served notice or offered buyout as per contract. A legal notice can be issued immediately.',
      },
      {
        q: 'Are contract and gig workers entitled to legal protections?',
        a: 'Under the Social Security Code, 2020 and e-Shram initiative, unorganized and gig workers are entitled to national social security benefits and accidental insurance cover up to ₹2 Lakhs.',
      },
    ],
  },

  property: {
    category: 'Property & Real Estate Law',
    governingAct: 'Real Estate (Regulation and Development) Act, 2016 (RERA), Transfer of Property Act, 1882',
    regulatoryBody: 'State RERA Authorities, Sub-Registrar of Assurances, and Civil Courts',
    rights: [
      {
        title: 'Homebuyer Protection Against Project Delay (RERA)',
        summary: 'Promoters cannot demand more than 10% advance without signing registered agreement for sale. In case of project delays, buyers have the right to full refund with interest or monthly interest compensation till possession.',
        applicableLaw: 'Sections 18 & 19, Real Estate (Regulation & Development) Act, 2016',
        actionSteps: [
          'Verify project RERA registration number on state RERA website.',
          'Send formal legal notice to developer claiming interest or refund.',
          'File complaint online before State RERA Adjudicating Officer.',
        ],
      },
      {
        title: 'Daughter’s Equal Coparcenary Rights in Ancestral Property',
        summary: 'Daughters have equal birth rights as coparceners in Hindu ancestral property, identical to sons, irrespective of whether the father was alive in 2005 (Supreme Court ruling in Vineeta Sharma v. Rakesh Sharma, 2020).',
        applicableLaw: 'Section 6, Hindu Succession (Amendment) Act, 2005',
        actionSteps: [
          'Obtain family tree genealogical certificate and ancestral property revenue records (7/12 extract / Patta / Khata).',
          'Issue legal demand notice for partition of estate.',
          'File civil partition suit in the competent Civil Court.',
        ],
      },
      {
        title: 'Safeguards Against Illegal Dispossession & Adverse Possession',
        summary: 'A tenant or occupant cannot be evicted by force without due process of law. A landlord must follow statutory eviction grounds under state Rent Control Act.',
        applicableLaw: 'Section 6, Specific Relief Act, 1963',
        actionSteps: [
          'Immediately file a police complaint for criminal trespass (Section 441/447 IPC / Section 329 BNS).',
          'File petition under Section 6 of Specific Relief Act for immediate restoration of possession within 6 months.',
        ],
      },
      {
        title: 'Verification Requirements Before Buying Property',
        summary: 'Essential title due diligence to avoid land fraud and benami transactions.',
        applicableLaw: 'Registration Act, 1908 & Transfer of Property Act, 1882',
        actionSteps: [
          'Obtain Non-Encumbrance Certificate (EC) for the last 30 years from Sub-Registrar.',
          'Verify Khata/Patta mutation records and municipal tax paid receipts.',
          'Ensure publication of public notice in two newspapers prior to purchase.',
        ],
      },
    ],
    helplines: [
      'National Consumer Portal for Builder Grievances: consumerhelpline.gov.in',
      'State RERA Portals (e.g. Maharera: maharera.mahaonline.gov.in, UP-RERA: up-rera.in)',
    ],
    faqs: [
      {
        q: 'Can a father disinherit children from his self-acquired property?',
        a: 'Yes. In self-acquired property, a parent has absolute right to bequeath it to anyone by Will or gift deed. Children can only claim rights in coparcenary ancestral property passed down through three generations.',
      },
      {
        q: 'What is the remedy if builder alters sanctioned building plans without consent?',
        a: 'Under Section 14 of RERA, any structural addition or alteration requires prior written consent of at least two-thirds of all allottees. A complaint before RERA will halt unauthorized modifications.',
      },
    ],
  },

  family: {
    category: 'Family & Matrimonial Law',
    governingAct: 'Hindu Marriage Act, 1955, Special Marriage Act, 1954, Protection of Women from Domestic Violence Act, 2005',
    regulatoryBody: 'Family Courts, Protection Officers, and National Commission for Women (NCW)',
    rights: [
      {
        title: 'Right to Maintenance & Alimony',
        summary: 'Wives, minor children, and aged parents who are unable to maintain themselves are entitled to monthly maintenance from the earning spouse or son/daughter.',
        applicableLaw: 'Section 125 Code of Criminal Procedure, 1973 & Section 24/25 Hindu Marriage Act',
        actionSteps: [
          'File application under Section 125 CrPC in Family Court or Magistrate Court.',
          'Submit affidavit of assets and liabilities as mandated by Supreme Court in Rajnesh v. Neha (2020).',
          'Seek interim maintenance during the pendency of proceedings.',
        ],
      },
      {
        title: 'Mutual Consent Divorce Procedure',
        summary: 'Parties can file for mutual divorce if living separately for one year and unable to live together. Cooling-off period of 6 months can be waived by court (Amardeep Singh v. Harveen Kaur).',
        applicableLaw: 'Section 13B, Hindu Marriage Act, 1955 & Section 28, Special Marriage Act, 1954',
        actionSteps: [
          'Draft joint petition with agreed terms on alimony, child custody, and return of Stridhan.',
          'Appear for First Motion recording of statements.',
          'Apply for waiver of 6-month period if appropriate and complete Second Motion.',
        ],
      },
      {
        title: 'Protection from Domestic Violence and Right to Residence',
        summary: 'Protection against physical, sexual, emotional, verbal, and economic abuse. Right to reside in the shared household regardless of whether she holds legal title.',
        applicableLaw: 'Sections 12, 17, 18, 19, Protection of Women from Domestic Violence Act, 2005 (PWDVA)',
        actionSteps: [
          'Contact the nearest Protection Officer, police station, or One Stop Centre (Sakhi).',
          'File Form DIR (Domestic Incident Report) before Judicial Magistrate.',
          'Obtain interim protection order, residence order, and monetary relief.',
        ],
      },
      {
        title: 'Child Custody and Guardianship Principles',
        summary: 'Welfare of the child is paramount in deciding custody. Generally, children under 5 years stay with the mother unless strong contrary grounds exist.',
        applicableLaw: 'Guardians and Wards Act, 1890 & Section 6, Hindu Minority and Guardianship Act, 1956',
        actionSteps: [
          'File custody petition in Family Court having jurisdiction over the child’s ordinary residence.',
          'Request child visitation schedules during interim stages.',
        ],
      },
    ],
    helplines: [
      'National Emergency Helpline: 112',
      'Women in Distress Helpline: 181 / 1091',
      'National Commission for Women (NCW) Helpline: 7827170170',
    ],
    faqs: [
      {
        q: 'What belongs to Stridhan and can the husband’s family keep it?',
        a: 'Stridhan includes gifts, jewelry, property, and cash received by the woman before, at, or after marriage. She has absolute ownership; husband or in-laws holding it commit criminal breach of trust (Section 406 IPC).',
      },
      {
        q: 'Can a Hindu marriage be annulled without divorce?',
        a: 'Yes, if the marriage was void ab initio (e.g., bigamy or sapinda relationship) or voidable on grounds of fraud, force, or impotency under Section 12 of the Hindu Marriage Act.',
      },
    ],
  },

  criminal: {
    category: 'Criminal Law & Police Procedures',
    governingAct: 'Bharatiya Nyaya Sanhita 2023 (BNS) / IPC 1860, BNSS 2023 / CrPC 1973',
    regulatoryBody: 'State Police Departments, Judicial Magistrate Courts, and Sessions Courts',
    rights: [
      {
        title: 'Right to Register FIR and Concept of Zero FIR',
        summary: 'Police are legally mandated under Section 154 CrPC to register an FIR for cognizable offences (Lalita Kumari v. Govt of UP). If outside jurisdiction, a "Zero FIR" must be registered and transferred.',
        applicableLaw: 'Section 154 CrPC / Section 173 BNSS',
        actionSteps: [
          'Visit any police station; officer must record statement and provide free signed copy of FIR immediately.',
          'If Station House Officer (SHO) refuses, send written complaint to Superintendent of Police (SP) under Section 154(3).',
          'File private complaint before Magistrate under Section 156(3) CrPC.',
        ],
      },
      {
        title: 'Rights of an Arrested Person (D.K. Basu Guidelines)',
        summary: 'Right to know grounds of arrest, right to inform a friend/relative, right to free legal aid, right to medical examination every 48 hours, and mandatory production before Magistrate within 24 hours.',
        applicableLaw: 'Article 22 Constitution of India, Sections 41B, 41D, 50, 57 CrPC',
        actionSteps: [
          'Ensure the police officer wears visible identification name tag.',
          'Insist on preparation of Arrest Memo signed by at least one family member/witness.',
          'Exercise right to consult an advocate of choice during interrogation.',
        ],
      },
      {
        title: 'Bail Provisions: Bailable vs Non-Bailable Offences',
        summary: 'In bailable offences, bail is an absolute right upon furnishing surety. In non-bailable offences, bail is at judicial discretion. Anticipatory bail protects against anticipated arrest in false complaints.',
        applicableLaw: 'Sections 436, 437, 438 CrPC / Sections 478-482 BNSS',
        actionSteps: [
          'For bailable offences, apply directly to the police station officer or magistrate.',
          'For apprehension of arrest in non-bailable offence, file Section 438 Anticipatory Bail in Sessions Court or High Court.',
        ],
      },
      {
        title: 'Protection of Citizens Against Police Misconduct',
        summary: 'Police officers cannot use third-degree violence, unlawful detention, or demand bribes. Such actions violate Articles 20 and 21 of the Constitution.',
        applicableLaw: 'Section 166A IPC (Public servant disobeying law), Section 330/331 IPC, State Police Complaints Authorities',
        actionSteps: [
          'File a complaint with the State Police Complaints Authority (SPCA).',
          'Approach National Human Rights Commission (NHRC) at hrcnet.nic.in.',
          'File writ of Habeas Corpus under Article 226/32 if illegally detained.',
        ],
      },
    ],
    helplines: [
      'National Emergency Number: 112',
      'Police Control Room: 100',
      'National Human Rights Commission (NHRC): 14433',
    ],
    faqs: [
      {
        q: 'Can a person be arrested without a warrant?',
        a: 'Only for cognizable offences (serious offences like theft, rape, murder, grievous hurt) can police arrest without a warrant. For non-cognizable offences, a warrant from the Magistrate is strictly mandatory.',
      },
      {
        q: 'What is the time limit for police to produce an accused before a judge?',
        a: 'Within 24 hours of arrest, excluding travel time, as guaranteed under Article 22(2) of the Constitution and Section 57 CrPC.',
      },
    ],
  },

  constitutional: {
    category: 'Constitutional Rights & Remedies',
    governingAct: 'Constitution of India (1950), Right to Information Act, 2005',
    regulatoryBody: 'Supreme Court of India (Article 32), High Courts (Article 226), Central Information Commission',
    rights: [
      {
        title: 'Right to Equality (Articles 14, 15, 16)',
        summary: 'State shall not deny to any person equality before the law or equal protection of the laws. Prohibition of discrimination on grounds of religion, race, caste, sex, or place of birth.',
        applicableLaw: 'Articles 14, 15, 16, Constitution of India',
        actionSteps: [
          'Challenge arbitrary administrative orders violating equality.',
          'Approach High Court under Article 226 or Supreme Court under Article 32.',
        ],
      },
      {
        title: 'Right to Life & Personal Liberty (Article 21)',
        summary: 'No person shall be deprived of life or personal liberty except according to procedure established by law. Expansively interpreted by courts to include right to privacy (Puttaswamy judgment), clean environment, livelihood, and speedy trial.',
        applicableLaw: 'Article 21, Constitution of India',
        actionSteps: [
          'Invoke Article 21 against illegal surveillance, environmental degradation, or police brutality.',
          'File Public Interest Litigation (PIL) in High Court or Supreme Court.',
        ],
      },
      {
        title: 'Right to Information (RTI Act, 2005)',
        summary: 'Every citizen has the legal right to inspect public works, documents, and records of government departments, and obtain certified copies within 30 days.',
        applicableLaw: 'Sections 6 & 7, Right to Information Act, 2005',
        actionSteps: [
          'Submit RTI application along with ₹10 fee to Public Information Officer (PIO).',
          'PIO must respond within 30 days (48 hours if related to life and liberty).',
          'File First Appeal within 30 days if no response or incomplete info; Second Appeal to Information Commission.',
        ],
      },
      {
        title: 'Constitutional Writs for Enforcement of Rights',
        summary: 'Five types of prerogative writs available under Article 32 (Supreme Court) and Article 226 (High Court):',
        applicableLaw: 'Articles 32 and 226, Constitution of India',
        details: [
          'Habeas Corpus: To produce an unlawfully detained person before the court.',
          'Mandamus: To compel a public authority to perform a mandatory statutory duty.',
          'Prohibition: To prevent lower court/tribunal from exceeding its jurisdiction.',
          'Certiorari: To quash an illegal judicial or quasi-judicial order.',
          'Quo Warranto: To challenge the legal authority of a person holding a public office.',
        ],
        actionSteps: [
          'Consult a high court advocate or District Legal Services Authority (DLSA).',
          'Draft writ petition clearly stating violated fundamental rights.',
        ],
      },
    ],
    helplines: [
      'National Legal Services Authority (NALSA): 15100',
      'RTI Online Portal: rtionline.gov.in',
      'Supreme Court Legal Services Committee: 011-23388313',
    ],
    faqs: [
      {
        q: 'Can private companies be questioned under the RTI Act?',
        a: 'Generally no, unless they are substantially financed or controlled by the government, or if the information can be accessed by a public regulator under existing laws.',
      },
      {
        q: 'What is the fee for filing an RTI application?',
        a: 'Standard central fee is ₹10 (cash, IPO, demand draft, or online payment). BPL (Below Poverty Line) cardholders are exempt from all RTI application fees.',
      },
    ],
  },

  women: {
    category: 'Women’s Rights & Safety',
    governingAct: 'POSH Act 2013, PWDVA 2005, Dowry Prohibition Act 1961, Maternity Benefit Act 2017',
    regulatoryBody: 'Ministry of Women & Child Development, NCW, and State Women Commissions',
    rights: [
      {
        title: 'Prevention of Sexual Harassment at Workplace (POSH Act)',
        summary: 'Mandatory Internal Complaints Committee (ICC) in every establishment with 10+ employees. Protects against physical contact, demand for sexual favors, sexually colored remarks, and hostile work environments.',
        applicableLaw: 'Sexual Harassment of Women at Workplace Act, 2013',
        actionSteps: [
          'File written complaint to Internal Committee (IC) within 3 months of incident.',
          'IC must complete inquiry within 90 days and submit report to employer.',
          'Can also file complaint on SHe-Box online portal (shebox.wcd.gov.in).',
        ],
      },
      {
        title: 'Special Protections During Police Arrest for Women',
        summary: 'Women cannot be arrested between sunset and sunrise except under exceptional circumstances with prior permission of Judicial Magistrate. Arrest and body search must be carried out strictly by female police officers.',
        applicableLaw: 'Section 46(4) and Section 51(2), Code of Criminal Procedure, 1973',
        actionSteps: [
          'Politely demand the presence of a female police officer.',
          'Insist that examination take place during daytime hours.',
          'Report violations immediately to Magistrate during first remand production.',
        ],
      },
      {
        title: 'Maternity Benefit Rights (Paid Leave)',
        summary: '26 weeks of paid maternity leave for women working in establishments with 10+ employees (for up to 2 surviving children). Employers cannot terminate or alter conditions of service during maternity leave.',
        applicableLaw: 'Maternity Benefit (Amendment) Act, 2017',
        actionSteps: [
          'Give written notice to employer specifying date of absence with doctor certificate.',
          'File complaint with Inspector under Maternity Benefit Act if denied.',
        ],
      },
      {
        title: 'Dowry Harassment Protections (Section 498A & Dowry Prohibition)',
        summary: 'Giving, taking, or demanding dowry is punishable with imprisonment up to 5 years. Cruelty by husband or in-laws (mental or physical) is a cognizable offence under Section 498A IPC / Section 85 BNS.',
        applicableLaw: 'Dowry Prohibition Act, 1961 & Section 498A IPC / Section 85 BNS',
        actionSteps: [
          'Record dates, incidents, and messages preserving evidence.',
          'Approach Crime Against Women Cell (CAW) or local police station.',
          'Reach out to National Commission for Women (NCW) emergency helpline.',
        ],
      },
    ],
    helplines: [
      'Women Helpline (All India): 1091 / 181',
      'NCW Domestic Violence 24/7 Helpline: 7827170170',
      'SHe-Box Workplace Harassment: shebox.wcd.gov.in',
      'Childline / Minor Protection: 1098',
    ],
    faqs: [
      {
        q: 'Can a female victim record statement in private?',
        a: 'Yes, under Section 164(5A) CrPC, statement for sexual offences must be recorded by a female magistrate, preferably at the victim’s residence or place of choice without public presence.',
      },
      {
        q: 'Are women entitled to free legal aid irrespective of income?',
        a: 'Yes! Under Section 12(c) of the Legal Services Authorities Act 1987, all women and children are entitled to 100% free legal aid, regardless of their financial status.',
      },
    ],
  },

  cyber: {
    category: 'Cyber Crime & Digital Safety',
    governingAct: 'Information Technology Act, 2000 (Amended 2008), Digital Personal Data Protection Act, 2023',
    regulatoryBody: 'Indian Cybercrime Coordination Centre (I4C), CERT-In, and Cyber Police Stations',
    rights: [
      {
        title: 'Financial Online Fraud & The "Golden Hour" Protocol',
        summary: 'If money is fraudulently debited via UPI, net banking, or debit/credit card, reporting within the "Golden Hour" (first 2-3 hours) enables the National Cyber Crime Reporting Portal to freeze the money in intermediary payment gateways.',
        applicableLaw: 'Section 66D IT Act (cheating by personation) & Section 420 IPC',
        actionSteps: [
          'Immediately dial Cyber Financial Fraud Helpline: 1930.',
          'Lodge complaint at cybercrime.gov.in with bank transaction reference / UTR number.',
          'Immediately contact bank to block card/account and submit dispute form within 3 days for zero liability under RBI guidelines.',
        ],
      },
      {
        title: 'Identity Theft, Impersonation & Hacking',
        summary: 'Punishable with imprisonment up to 3 years and fine for identity theft, cloning SIM cards, or sending offensive/threatening messages through computer systems.',
        applicableLaw: 'Sections 43, 66, 66C, 66D, Information Technology Act, 2000',
        actionSteps: [
          'Take screenshots of fake profiles, URLs, chat logs, and emails.',
          'Report account impersonation to the respective social media intermediary grievance officer.',
          'File complaint with the local Cyber Crime Cell.',
        ],
      },
      {
        title: 'Non-Consensual Intimate Image Abuse & Cyberstalking',
        summary: 'Publishing or transmitting sexually explicit content or intrusive images without consent is punishable under Section 66E, 67, 67A IT Act and Section 354D IPC.',
        applicableLaw: 'Sections 66E & 67A IT Act, 2000',
        actionSteps: [
          'Do NOT delete evidence: save links, sender handles, message headers, and time stamps.',
          'File complaint under "Report Crime Related to Women/Child" anonymously on cybercrime.gov.in.',
          'Use StopNCII.org to generate digital hash to prevent distribution on major social networks.',
        ],
      },
      {
        title: 'RBI Zero Liability Guidelines for Unauthorized Banking Transactions',
        summary: 'If fraudulent transaction occurs due to bank deficiency or third-party breach where customer reports within 3 working days, customer has ZERO liability; bank must credit the amount within 10 working days.',
        applicableLaw: 'RBI Circular DBR.No.Leg.BC.78/09.07.005/2017-18',
        actionSteps: [
          'Notify bank in writing or through official banking app within 72 hours.',
          'Obtain acknowledgment / ticket number from bank.',
          'If bank does not resolve within 30 days, escalate to Banking Ombudsman at cms.rbi.org.in.',
        ],
      },
    ],
    helplines: [
      'National Cyber Crime Helpline: 1930',
      'National Cybercrime Reporting Portal: cybercrime.gov.in',
      'RBI Banking Ombudsman Portal: cms.rbi.org.in',
    ],
    faqs: [
      {
        q: 'What should I do if an unauthorized loan app is blackmailing me with morphed photos?',
        a: 'Do not pay ransom. Block contacts. Immediately file a complaint on cybercrime.gov.in under Cyber Blackmailing/Extortion, and report the app to Google Play Store / Apple App Store and RBI Sachet portal (sachet.rbi.org.in).',
      },
      {
        q: 'Can police refuse to file a cyber complaint because the criminal is in another state?',
        a: 'No. Cyber offences have trans-jurisdictional reach. Any police station is obligated to register the complaint or Zero FIR under Section 75 of the IT Act.',
      },
    ],
  },
};

/**
 * Advanced Semantic Legal Analysis & Statutory Matching Engine
 * Accurately analyzes citizen inquiries against Indian statutes, sections, and rights.
 * Handles conversational intents (greetings, capabilities, gratitude, clarifications)
 * and formats natural, empathetic, actionable legal advice under Indian law.
 */
export function queryKnowledgeBase(queryText, requestedCategory = null) {
  const rawQuery = (queryText || '').trim();
  const query = rawQuery.toLowerCase();
  
  // Clean tokens (remove punctuation)
  const tokens = query.replace(/[^a-z0-9\s]/g, ' ').split(/\s+/).filter(Boolean);
  const wordCount = tokens.length;

  // =========================================================================
  // INTENT 1: GREETINGS (hi, hello, namaste, good morning, etc.)
  // =========================================================================
  const greetingWords = ['hi', 'hello', 'hey', 'namaste', 'namaskar', 'pranam', 'vanakkam', 'adab', 'hola', 'greetings'];
  const hasGreetingWord = tokens.some((t) => greetingWords.includes(t));
  const isTimeGreeting = query.includes('good morning') || query.includes('good afternoon') || query.includes('good evening');
  const legalKeywordsPresent = tokens.some((t) =>
    ['fir', 'police', 'rent', 'landlord', 'salary', 'fraud', 'arrest', 'case', 'court', 'refund', 'money', 'scam', 'mrp', 'wage', 'tenant', 'bail', 'posh', 'rti', 'cheated'].includes(t)
  );

  const isGreeting = (wordCount <= 3 && (hasGreetingWord || isTimeGreeting)) ||
    (wordCount <= 5 && (hasGreetingWord || isTimeGreeting) && !legalKeywordsPresent);

  if (isGreeting) {
    const fullAnswer = `### 🙏 Namaste! I am NyayaSetu AI

I am your personal **Indian Citizen Legal Rights & Welfare Advisor**. I am here to assist you with plain-language explanations of Indian laws, your enforceable statutory rights, official dispute resolution procedures, and government schemes.

---

#### ⚖️ How I can assist you:
* 🛒 **Consumer Rights & E-Commerce:** Defective goods, refused refunds, hidden charges, misleading advertisements (*Consumer Protection Act, 2019 & e-Daakhil*).
* 💼 **Workplace & Employment:** Unpaid wages, illegal termination, withheld PF or Gratuity, notice period disputes (*Code on Wages 2019 & Industrial Disputes Act*).
* 🏠 **Tenancy & Property:** Unlawful eviction, builder delivery delays, security deposit withholding (*Model Tenancy Act & RERA 2016*).
* 💻 **Cyber Crime & Online Fraud:** UPI/banking scams, 1930 Golden Hour freeze, loan app extortion, cyberstalking (*IT Act 2000*).
* 🚓 **Police & Criminal Procedure:** Right to register FIR / Zero FIR, arrest safeguards (*D.K. Basu guidelines*), bail procedures (*BNSS 2023 & BNS 2023*).
* 👩 **Women's Rights & Protections:** Workplace harassment (*POSH Act*), domestic violence remedies, maternity benefit protections.
* 📜 **RTI & Citizen Inquiries:** Filing RTI requests to inspect public projects, government fund spending, and certified records.

---

💡 **You can ask me questions like:**
* *"My landlord disconnected electricity and locked me out without notice. What are my rights?"*
* *"Employer is withholding my 3 months salary after resignation. How can I recover it?"*
* *"Someone debited ₹30,000 via UPI fraudulently without OTP. What should I do right now?"*
* *"Can police stop me at night and force me to unlock my smartphone?"*

What legal or citizen issue would you like help with today?`;

    return {
      category: 'general',
      categoryTitle: 'NyayaSetu Citizen Legal Companion',
      summary: 'Namaste! NyayaSetu AI provides guidance on Indian statutory laws, citizen rights, government schemes, and dispute remedies.',
      keyRights: [
        'Right to Legal Awareness and Equal Justice under Article 39A of the Constitution of India',
        'Statutory Remedies across Consumer, Labor, Property, Criminal, Cyber, and Family Law',
      ],
      applicableLaws: ['Constitution of India (Article 39A - Equal Justice and Free Legal Aid)'],
      recommendedActions: [
        'Describe your legal dispute or question in simple plain English or Hinglish.',
        'Include key details (dates, financial transactions, agreements, actions taken).',
        'Use the Document Drafter for 1-click legal notices, RTI forms, or police complaints.',
      ],
      helplines: [
        'National Legal Services Authority (NALSA): 15100',
        'National Emergency Helpline: 112',
        'National Consumer Helpline: 1915',
        'National Cyber Crime Helpline: 1930',
      ],
      sourceRef: 'Constitution of India (Article 39A)',
      fullAnswer,
    };
  }

  // =========================================================================
  // INTENT 2: CAPABILITIES / HELP / IDENTITY / ABOUT
  // =========================================================================
  const capabilityPatterns = [
    'what can you do', 'what do you do', 'who are you', 'what are you',
    'how can you help', 'how do you work', 'what is this', 'what is nyayasetu',
    'what can i ask', 'what can i do', 'help me', 'help', 'features',
    'guide me', 'how to use', 'about you', 'tell me about yourself',
    'your capabilities', 'capabilities', 'what are your services',
    'what services', 'how to use this', 'can you help me'
  ];

  const isCapabilityQuery = capabilityPatterns.some((pattern) => query.includes(pattern)) ||
    (wordCount <= 2 && tokens.includes('help') && !legalKeywordsPresent);

  if (isCapabilityQuery) {
    const fullAnswer = `### ⚖️ About NyayaSetu AI & What I Can Do

**NyayaSetu** (*"Bridge to Justice"*) is an AI-powered legal advisory and citizen empowerment engine designed specifically for **Indian citizens**, bridging the gap between complex legal codes and everyday citizen problems.

---

#### 1. 📖 Statutory Legal Advisory
I analyze your legal issues against Indian statutory provisions and landmark judicial rulings:
* **Consumer Protection:** Defective products, unfair trade practices, warranty denial, e-commerce refund delays (**Consumer Protection Act, 2019**).
* **Labor & Employment:** Withheld wages, PF/Gratuity claims, unlawful termination, overtime pay (**Code on Wages, 2019 & Industrial Disputes Act, 1947**).
* **Tenancy & Real Estate:** Illegal eviction, security deposit withholding, RERA builder delays (**Model Tenancy Act & RERA, 2016**).
* **Police & Criminal Law:** FIR & Zero FIR rights, search/seizure rules, arrest guidelines (**BNSS 2023, BNS 2023 & D.K. Basu Guidelines**).
* **Cyber Crime & Digital Safety:** Online financial fraud, UPI recovery within the "Golden Hour", identity theft, RBI zero-liability rules (**IT Act, 2000**).
* **Women's Rights & Protections:** Workplace sexual harassment (**POSH Act, 2013**), domestic violence protection, maternity benefits (**Maternity Benefit Act, 2017**).
* **Constitutional Rights & RTI:** Fundamental rights enforcement (Articles 14–32), government transparency (**RTI Act, 2005**).

#### 2. 🏛️ Government Schemes Matching
Access criteria and instant eligibility checking for 25+ central and state schemes including **PM-Kisan, Ayushman Bharat (PM-JAY), PM Awas Yojana, Mudra Loans, and Sukanya Samriddhi**.

#### 3. 📄 1-Click Document Generator
Create formal, professionally formatted legal drafts instantly:
* **RTI Applications** to government departments and PIOs.
* **Statutory Legal Notices** for unpaid salaries or consumer grievances.
* **Formal Police Complaints** for theft, cyber fraud, or harassment.
* **Consumer Dispute Notices** before approaching District Commissions.

#### 4. 📍 Free Legal Aid (DLSA Connect)
Under **Article 39A of the Constitution** and the **Legal Services Authorities Act, 1987**, marginalized citizens, women, children, and low-income families are entitled to **100% free legal aid and advocate representation**.

---

💡 **Try asking a question right now:**
* *"A shopkeeper charged ₹15 above MRP for a cold beverage. Is that legal?"*
* *"What is the procedure if police refuse to register an FIR for mobile theft?"*
* *"Employer is refusing to provide my experience letter and relieving documents."*
* *"How can I file an RTI to inspect public road maintenance funds?"*`;

    return {
      category: 'general',
      categoryTitle: 'NyayaSetu Capabilities & Guidance',
      summary: 'NyayaSetu AI guides Indian citizens through statutory legal rights, government schemes, document drafting, and free legal aid.',
      keyRights: [
        'Article 39A, Constitution of India (Equal Justice and Free Legal Aid)',
        'Right to Information under RTI Act, 2005',
        'Right to Redressal under Consumer Protection Act, 2019 and relevant labor statutes',
      ],
      applicableLaws: [
        'Constitution of India (Articles 14, 21, 39A)',
        'Legal Services Authorities Act, 1987',
        'Consumer Protection Act, 2019',
        'Bharatiya Nyaya Sanhita, 2023 & BNSS, 2023',
        'Information Technology Act, 2000',
        'Real Estate (Regulation and Development) Act, 2016',
      ],
      recommendedActions: [
        'Type your specific legal dispute or concern in simple plain English.',
        'Explore welfare schemes using the Schemes Finder module.',
        'Generate official legal notices and RTI drafts in the Document Drafter.',
        'Find your local District Legal Services Authority (DLSA) for free representation.',
      ],
      helplines: [
        'National Legal Services Authority (NALSA): 15100',
        'National Consumer Helpline: 1915',
        'National Cyber Crime Helpline: 1930',
        'National Emergency Number: 112',
      ],
      sourceRef: 'Constitution of India (Article 39A)',
      fullAnswer,
    };
  }

  // =========================================================================
  // INTENT 3: GRATITUDE & FAREWELL
  // =========================================================================
  const gratitudePhrases = ['thank you', 'thanks', 'thank u', 'thx', 'dhanyawad', 'shukriya', 'thankyou', 'bye', 'goodbye', 'see you', 'cya'];
  const isGratitude = gratitudePhrases.some((p) => query.includes(p)) && wordCount <= 5;

  if (isGratitude) {
    const fullAnswer = `### 🙏 You're Very Welcome!

I'm glad I could assist you. In a constitutional democracy, **awareness of your legal rights is your greatest shield**.

---

#### Quick Next Steps:
* 📄 If you need a formal written draft, head over to the **Document Drafter** to generate a legal notice, RTI application, or complaint in 1-click.
* 🏛️ Check out the **Schemes Finder** to verify benefits and eligibility for central/state welfare programs.
* 📍 If you need a lawyer at zero cost, reach out to your local **District Legal Services Authority (DLSA)** or dial NALSA helpline **15100**.

Feel free to ask whenever you need legal guidance. *Stay empowered and know your rights! ⚖️*`;

    return {
      category: 'general',
      categoryTitle: 'NyayaSetu Citizen Legal Companion',
      summary: 'You are welcome! Feel free to reach out anytime for Indian legal guidance and citizen rights.',
      keyRights: ['Right to Equal Justice and Free Legal Aid (Article 39A)'],
      applicableLaws: ['Legal Services Authorities Act, 1987'],
      recommendedActions: [
        'Save any reference documents or statutory section citations provided.',
        'Use the Document Drafter if formal communication is required.',
        'Approach DLSA under Article 39A for free advocate representation.',
      ],
      helplines: ['NALSA Toll-Free Helpline: 15100', 'National Emergency: 112'],
      sourceRef: 'Legal Services Authorities Act, 1987',
      fullAnswer,
    };
  }

  // =========================================================================
  // INTENT 4: OUT-OF-SCOPE / NON-LEGAL QUERIES
  // =========================================================================
  const offTopicTriggers = [
    'bake a cake', 'recipe', 'python code', 'javascript code', 'write code',
    'tell me a joke', 'sing a song', 'cricket match', 'weather today',
    'movie review', 'solve math', 'calculate 2', 'who won the match'
  ];
  const isOffTopic = offTopicTriggers.some((t) => query.includes(t));

  if (isOffTopic) {
    const fullAnswer = `### ⚖️ NyayaSetu AI — Scope of Advisory

I am **NyayaSetu AI**, specialized exclusively in **Indian Law, citizen statutory rights, government welfare schemes, and dispute remedies**.

I am not equipped to handle general non-legal topics (such as coding, entertainment, or recipes), but I am here to help you resolve real-world legal and citizen problems:
* 🛒 **Consumer Disputes & Refunds:** Defective goods, warranty issues, e-commerce delivery delays.
* 💼 **Workplace & Labor Rights:** Unpaid wages, PF/Gratuity claims, unlawful termination.
* 🏠 **Tenancy & Landlord Issues:** Disconnection of utilities, illegal eviction, deposit disputes.
* 💻 **Cyber Crime & Financial Fraud:** Unauthorized UPI debit, online scams, cyberstalking.
* 🚓 **Police & Criminal Law:** FIR registration, Zero FIR, arrest safeguards, bail rules.
* 📜 **RTI Applications & Public Services:** Accessing government project records and public funds data.
* 🏛️ **Government Welfare Schemes:** Checking your eligibility for PM-Kisan, Ayushman Bharat, PMAY, etc.

Please feel free to describe any legal or citizen dispute you are facing!`;

    return {
      category: 'general',
      categoryTitle: 'NyayaSetu Legal Companion',
      summary: 'NyayaSetu AI is dedicated to Indian law, citizen statutory rights, and government schemes.',
      keyRights: ['Access to Justice and Legal Information (Article 39A)'],
      applicableLaws: ['Constitution of India (Article 39A)'],
      recommendedActions: [
        'Ask questions related to Indian law, consumer disputes, employment, property, or cyber fraud.',
        'Check government scheme eligibility in the Schemes Finder.',
        'Draft legal notices and RTI applications in the Document Drafter.',
      ],
      helplines: ['National Consumer Helpline: 1915', 'National Cyber Crime Helpline: 1930', 'NALSA: 15100'],
      sourceRef: 'Constitution of India',
      fullAnswer,
    };
  }

  // =========================================================================
  // INTENT 4.5: DEEP SCENARIO UNDERSTANDING & CITIZEN FACT ANALYSIS
  // =========================================================================
  const scenarioMatch = matchLegalScenario(query, rawQuery);
  if (scenarioMatch) {
    return scenarioMatch;
  }

  // =========================================================================
  // INTENT 5: SHORT / AMBIGUOUS SINGLE-TOPIC CLARIFICATIONS
  // =========================================================================
  if (wordCount <= 2 && !requestedCategory) {
    // 1. Tenancy / Rent
    if (tokens.some((t) => ['landlord', 'tenant', 'rent'].includes(t))) {
      return {
        category: 'property',
        categoryTitle: 'Property & Tenancy Law',
        summary: 'Tenancy guidance: Protection against arbitrary eviction, deposit withholding, and utility disconnection.',
        keyRights: [
          'Protection against arbitrary eviction (Model Tenancy Act & Section 108 Transfer of Property Act)',
          'Right to essential utilities (water, electricity) without disconnection',
        ],
        applicableLaws: ['Model Tenancy Act, 2021', 'Transfer of Property Act, 1882', 'Section 6, Specific Relief Act, 1963'],
        recommendedActions: ['Provide details of your rent agreement and current dispute.'],
        helplines: ['National Consumer Helpline: 1915', 'NALSA Free Legal Aid: 15100'],
        sourceRef: 'Model Tenancy Act, 2021',
        fullAnswer: `### 🏠 Tenancy & Landlord Advisory: Clarification

Are you experiencing a dispute with your landlord or tenant? Please let me know which of these situations you are facing:

1. **Illegal Eviction / Lockout:** Landlord threatening to evict you without 30 days notice or without a court order (*unlawful under Model Tenancy Act & Specific Relief Act*).
2. **Disconnection of Utilities:** Landlord cutting off electricity, water, or access (*actionable criminal trespass & civil violation*).
3. **Security Deposit Dispute:** Landlord refusing to return your security deposit after vacating (*recoverable through statutory demand notice & civil court/rent authority*).
4. **Arbitrary Rent Hike:** Unreasonable rent increase contrary to your registered rental agreement.

💡 **Please reply with a brief description of what happened, and I will cite the exact legal sections and step-by-step remedies under Indian law.**`,
      };
    }

    // 2. Police / FIR
    if (tokens.some((t) => ['police', 'fir', 'arrest', 'bail'].includes(t))) {
      return {
        category: 'criminal',
        categoryTitle: 'Criminal Law & Police Procedures',
        summary: 'Criminal & Police guidance: FIR registration, Zero FIR, D.K. Basu arrest safeguards, and bail rules.',
        keyRights: [
          'Right to register FIR / Zero FIR (Section 173 BNSS / Section 154 CrPC)',
          'Right to legal aid and medical examination upon arrest (Article 22 Constitution of India)',
        ],
        applicableLaws: ['Bharatiya Nagarik Suraksha Sanhita, 2023 (BNSS)', 'Bharatiya Nyaya Sanhita, 2023 (BNS)', 'Constitution of India (Articles 20, 21, 22)'],
        recommendedActions: ['Specify whether police refused an FIR, stopped you, or detained someone.'],
        helplines: ['National Emergency Number: 112', 'NALSA Free Legal Aid: 15100', 'NHRC Helpline: 14433'],
        sourceRef: 'Bharatiya Nagarik Suraksha Sanhita, 2023',
        fullAnswer: `### 🚓 Police & Criminal Law Advisory: Clarification

Are you seeking assistance regarding police procedures or criminal law? Please clarify your issue:

1. **Refusal to File FIR:** Station House Officer (SHO) refused to accept or register your complaint (*Zero FIR is mandatory under Section 173 BNSS*).
2. **Police Stop / Phone Search:** Questions regarding whether an officer can search your private smartphone without a warrant or search order (*protected under Article 20(3) and Puttaswamy privacy ruling*).
3. **Arrest or Detention:** Inquiring about bail eligibility, production before Magistrate within 24 hours, or the D.K. Basu arrest guidelines.
4. **Harassment or Corruption:** Filing a grievance with the State Police Complaints Authority (SPCA) or Vigilance Department.

💡 **Please describe your situation in a few sentences, and I will guide you through the exact legal steps.**`,
      };
    }

    // 3. Cyber / Fraud
    if (tokens.some((t) => ['cyber', 'fraud', 'scam', 'upi', 'hacked', 'bank'].includes(t))) {
      return {
        category: 'cyber',
        categoryTitle: 'Cyber Crime & Digital Safety',
        summary: 'Cyber fraud guidance: 1930 Golden Hour freeze, cybercrime.gov.in complaint, and RBI Zero Liability rules.',
        keyRights: [
          'Zero Liability for Unauthorized Electronic Banking Transactions (RBI Circular)',
          'Immediate transaction freezing under National Cyber Financial Fraud Reporting System',
        ],
        applicableLaws: ['Information Technology Act, 2000 (Section 66D)', 'RBI Customer Protection Circular (2017)'],
        recommendedActions: [
          'Dial 1930 immediately if the fraud happened within the last 2-3 hours.',
          'Notify your bank in writing within 72 hours for zero liability protection.',
        ],
        helplines: ['National Cyber Financial Fraud Helpline: 1930', 'Portal: cybercrime.gov.in', 'RBI Ombudsman: cms.rbi.org.in'],
        sourceRef: 'Information Technology Act, 2000',
        fullAnswer: `### 💻 Cyber & Financial Fraud Advisory: Immediate Action

If you have been targeted by online fraud or unauthorized bank deductions, act swiftly:

🚨 **Critical First Steps:**
1. **Golden Hour (First 2–3 Hours):** Immediately dial **1930** (National Cyber Financial Fraud Helpline) or report at **cybercrime.gov.in** with your transaction UTR / bank reference number to freeze funds in transit.
2. **Notify Bank within 72 Hours:** Under **RBI Customer Protection Guidelines**, reporting unauthorized transactions within 3 days ensures **Zero Customer Liability**; the bank must restore funds.
3. **Common Scams:** If you are dealing with fake loan app blackmail, APK malware, or morphed photos, do not pay ransom—preserve screenshots and lodge a complaint under Cyber Blackmailing.

💡 **Please describe what happened (e.g., amount debited, method used, platform), and I will provide the specific recovery protocol.**`,
      };
    }

    // 4. Labor / Salary
    if (tokens.some((t) => ['salary', 'wage', 'job', 'boss', 'fired', 'pf', 'gratuity'].includes(t))) {
      return {
        category: 'labor',
        categoryTitle: 'Labor & Employment Rights',
        summary: 'Workplace guidance: Recovery of unpaid salary, gratuity, PF, and protection against wrongful termination.',
        keyRights: [
          'Right to Timely Wages under Code on Wages, 2019',
          'Right to Relieving Letter and Gratuity under Payment of Gratuity Act, 1972',
        ],
        applicableLaws: ['Code on Wages, 2019', 'Industrial Disputes Act, 1947', 'Payment of Gratuity Act, 1972'],
        recommendedActions: ['Provide details of your designation, tenure, and pending dues.'],
        helplines: ['Shram Suvidha Portal: shramsuvidha.gov.in', 'EPFO Toll-Free: 1800 118 005'],
        sourceRef: 'Code on Wages, 2019',
        fullAnswer: `### 💼 Labor & Workplace Rights Advisory: Clarification

Are you experiencing an employment issue? Please let me know which matter applies to you:

1. **Unpaid Salary / Withheld Dues:** Employer has not paid salary or final Full & Final (F&F) settlement (*unlawful under Code on Wages, 2019*).
2. **Withheld Documents:** HR refusing to issue Relieving Letter or Experience Certificate upon resignation.
3. **Wrongful Termination:** Terminated without 30 days notice or retrenchment compensation (*violates Section 25F of Industrial Disputes Act*).
4. **PF / Gratuity Non-Deposit:** Employer deducted Provident Fund but did not deposit with EPFO, or denied gratuity after 5 years service.

💡 **Tell me a little more about your employment and the dispute, and I will cite the exact statutory remedies.**`,
      };
    }
  }

  // =========================================================================
  // INTENT 6: REAL LEGAL ANALYSIS ENGINE
  // =========================================================================

  // Category vocabulary weights
  const categoryKeywords = {
    consumer: [
      'mrp', 'refund', 'defective', 'consumer', 'seller', 'flipkart', 'amazon',
      'warranty', 'guarantee', 'shopkeeper', 'service charge', 'expiry',
      'counterfeit', 'adulterated', 'edaakhil', 'ncdrc', 'unfair trade',
      'replacement', 'product liability', 'overcharging', 'flight refund',
      'hotel refund', 'ecommerce', 'delivered wrong', 'broken product',
      'order cancelled', 'return rejected', 'zomato', 'swiggy'
    ],
    labor: [
      'salary', 'wage', 'wages', 'boss', 'pf', 'provident fund', 'gratuity',
      'overtime', 'terminated', 'termination', 'fired', 'notice period',
      'retrenchment', 'labour', 'labor', 'unpaid', 'withheld',
      'experience letter', 'relieving letter', 'bonus', 'workplace', 'layoff',
      'severance', 'employee', 'employer', 'resignation', 'hr refused',
      'working hours', 'full and final', 'fnf', 'contract labor'
    ],
    property: [
      'property', 'land', 'flat', 'apartment', 'builder', 'rera', 'ancestral',
      'possession', 'tenant', 'landlord', 'rent', 'deposit', 'eviction',
      'inheritance', 'deed', 'patta', 'khata', 'registry', 'encumbrance',
      'delay in possession', 'encroachment', 'will', 'gift deed', 'locked out',
      'cut electricity', 'water connection', 'agreement', 'security deposit',
      'coparcenary', 'mutation', 'sub registrar'
    ],
    family: [
      'divorce', 'husband', 'wife', 'marriage', 'custody', 'child custody',
      'alimony', 'maintenance', 'stridhan', 'domestic violence', 'in-laws',
      'cruelty', '498a', 'special marriage act', 'hindu marriage', 'restitution',
      'visitation rights', 'desertion', 'dowry', 'mutual consent'
    ],
    criminal: [
      'fir', 'zero fir', 'police', 'arrest', 'bail', 'anticipatory bail', 'jail',
      'theft', 'assault', 'beating', 'threat', 'intimidation', 'bribe',
      'corruption', 'complaint', 'warrant', 'cognizable', 'bns', 'bnss', 'ipc',
      'crpc', 'panchnama', 'seizure', 'traffic stop', 'challan', 'check phone',
      'search phone', 'handcuff', 'third degree', 'sho refused', 'lockup'
    ],
    constitutional: [
      'rti', 'right to information', 'fundamental right', 'constitution', 'writ',
      'habeas corpus', 'mandamus', 'article 21', 'article 14', 'article 19',
      'freedom of speech', 'privacy', 'tender', 'public fund', 'pio',
      'information commission', 'fundamental duties', 'equality', 'discrimination',
      'public authority', 'first appeal'
    ],
    women: [
      'harassment', 'posh', 'sexual harassment', 'workplace harassment',
      'maternity', 'maternity leave', 'dowry', 'women', 'female', 'girl',
      'stalking', 'eve teasing', 'night arrest', 'internal committee',
      'section 498a', 'protection officer', 'sakhi', 'shebox', 'pregnant'
    ],
    cyber: [
      'cyber', 'fraud', 'scam', 'otp', 'upi', 'hacked', 'fake', 'blackmail',
      'online money', 'phishing', 'bank fraud', 'mule account', '1930',
      'cybercrime.gov.in', 'deepfake', 'loan app', 'sextortion', 'morphed',
      'data privacy', 'identity theft', 'credit card fraud', 'crypto scam',
      'sim swap', 'stolen account', 'unauthorized transaction'
    ],
  };

  // 1. Calculate domain relevance scores across all 8 domains
  const domainScores = {};
  Object.keys(legalKnowledgeBase).forEach((cat) => {
    let score = 0;
    const keywords = categoryKeywords[cat] || [];
    keywords.forEach((kw) => {
      if (query.includes(kw)) {
        score += kw.length > 5 ? 4 : 2;
      }
    });
    if (requestedCategory && requestedCategory.toLowerCase() === cat) {
      score += 10;
    }
    domainScores[cat] = score;
  });

  // Sort categories by relevance
  const sortedCategories = Object.keys(domainScores).sort((a, b) => domainScores[b] - domainScores[a]);
  const highestScore = domainScores[sortedCategories[0]];

  // If NO domain keywords matched at all and no category was requested:
  if (highestScore === 0 && !requestedCategory) {
    const fullAnswer = `### ⚖️ NyayaSetu Citizen Legal Inquiry

I analyzed your query: *"${rawQuery}"*.

To provide you with the exact Indian statutory provisions, section numbers, and concrete dispute redressal remedies, could you please specify what type of citizen issue or legal dispute you are dealing with?

---

#### Common Legal Matters I Can Assist With:
* 🛒 **Consumer & E-Commerce:** Defective products, delayed refunds, misleading advertising, or overcharging above MRP (*Consumer Protection Act, 2019*).
* 💼 **Workplace & Employment:** Unpaid wages, wrongful dismissal, withheld PF, gratuity, or relieving documents (*Code on Wages, 2019*).
* 🏠 **Tenancy & Real Estate:** Landlord lockouts, utility disconnections, security deposit disputes, or RERA builder delays.
* 💻 **Cyber Crime & Digital Banking:** Unauthorized UPI debits, bank fraud, online loan app harassment, or identity theft.
* 🚓 **Police & Criminal Law:** Refusal to register an FIR, Zero FIR rights, rights upon arrest, or bail assistance (*BNSS 2023*).
* 📜 **RTI & Citizen Inquiries:** Inspecting government works, municipal tender files, or seeking certified public records (*RTI Act, 2005*).

Please reply with a brief description of what happened, and I will cite the exact applicable Indian laws, your enforceable rights, and remedies!`;

    return {
      category: 'general',
      categoryTitle: 'NyayaSetu Citizen Legal Companion',
      summary: 'Please provide more details about your legal dispute so NyayaSetu can cite the exact Indian statutes and remedies.',
      keyRights: ['Right to Legal Awareness and Equal Justice (Article 39A)'],
      applicableLaws: ['Constitution of India (Article 39A)'],
      recommendedActions: [
        'Clarify the specific subject (Consumer, Labor, Tenancy, Cyber, Police, RTI).',
        'State any important facts like dates, monetary loss, or party involved.',
      ],
      helplines: [
        'National Legal Services Authority (NALSA): 15100',
        'National Emergency Helpline: 112',
        'National Consumer Helpline: 1915',
        'National Cyber Crime Helpline: 1930',
      ],
      sourceRef: 'Constitution of India (Article 39A)',
      fullAnswer,
    };
  }

  const primaryCat = highestScore > 0 ? sortedCategories[0] : (requestedCategory || 'consumer');
  const primaryDomain = legalKnowledgeBase[primaryCat];

  // 2. Score individual rights across the primary domain and secondary domains
  let matchedRights = [];
  const queryTokens = query.split(/[^a-zA-Z0-9]+/).filter((t) => t.length > 3);

  [primaryCat, sortedCategories[1]].filter(Boolean).forEach((catKey) => {
    const dom = legalKnowledgeBase[catKey];
    if (!dom || !dom.rights) return;

    dom.rights.forEach((right) => {
      let rScore = 0;
      const haystack = `${right.title} ${right.summary} ${right.applicableLaw} ${(right.actionSteps || []).join(' ')} ${(right.details || []).join(' ')}`.toLowerCase();

      queryTokens.forEach((token) => {
        if (haystack.includes(token)) rScore += 3;
      });

      // Bonus for exact category match
      if (catKey === primaryCat) rScore += 1;

      matchedRights.push({ ...right, category: dom.category, categoryKey: catKey, governingAct: dom.governingAct, score: rScore });
    });
  });

  matchedRights.sort((a, b) => b.score - a.score);
  const bestRight = matchedRights[0] || primaryDomain.rights[0];
  const secondaryRight = matchedRights[1] && matchedRights[1].score > 0 ? matchedRights[1] : null;

  // 3. Aggregate all relevant statutory citations
  const lawsSet = new Set();
  lawsSet.add(primaryDomain.governingAct);
  if (bestRight.applicableLaw) lawsSet.add(bestRight.applicableLaw);
  if (secondaryRight && secondaryRight.applicableLaw) lawsSet.add(secondaryRight.applicableLaw);

  // Special statutory citations based on explicit query contexts
  if (query.includes('police') || query.includes('arrest') || query.includes('phone') || query.includes('stop')) {
    lawsSet.add('Section 173 & Section 105, Bharatiya Nagarik Suraksha Sanhita (BNSS), 2023');
    lawsSet.add('Article 20(3) & Article 21, Constitution of India (Protection Against Self-Incrimination & Privacy)');
  }
  if (query.includes('upi') || query.includes('cyber') || query.includes('fraud') || query.includes('bank')) {
    lawsSet.add('Section 66D, Information Technology Act, 2000 (Cheating by Impersonation)');
    lawsSet.add('RBI Customer Protection Circular (2017): Zero Liability for Unauthorized Electronic Transactions');
  }
  if (query.includes('salary') || query.includes('fired') || query.includes('terminate') || query.includes('wages')) {
    lawsSet.add('Section 25F, Industrial Disputes Act, 1947 & Code on Wages, 2019');
    lawsSet.add('Payment of Wages Act, 1936 (Mandatory timely disbursement)');
  }
  if (query.includes('landlord') || query.includes('rent') || query.includes('evict') || query.includes('locked')) {
    lawsSet.add('Model Tenancy Act, 2021 & Section 108, Transfer of Property Act, 1882');
    lawsSet.add('Section 6, Specific Relief Act, 1963 (Restoration of Unlawful Dispossession)');
  }
  if (query.includes('consumer') || query.includes('defective') || query.includes('refund') || query.includes('mrp')) {
    lawsSet.add('Consumer Protection Act, 2019 (Section 2(47) Unfair Trade Practice & Section 35)');
    lawsSet.add('Legal Metrology Act, 2009 (Prohibition on charging above MRP)');
  }

  const applicableLaws = Array.from(lawsSet).filter(Boolean);

  // 4. Action Steps & Remedies
  const actions = [
    ...(bestRight.actionSteps || []),
    ...(secondaryRight?.actionSteps ? secondaryRight.actionSteps.slice(0, 2) : []),
  ];
  if (actions.length === 0) {
    actions.push(
      'Preserve and organize all evidence (invoices, receipts, emails, WhatsApp chats, call recordings, and timestamps).',
      'Issue a formal written legal notice through registered post or email giving the opposite party 15 days to resolve the grievance.',
      'If not resolved, file an official complaint before the competent statutory forum or approach your nearest District Legal Services Authority (DLSA) for free legal aid.'
    );
  }

  // 5. Dynamic executive summary tailored to the specific dispute
  let executiveSummary = bestRight.summary;
  if (query.includes('landlord') && (query.includes('lock') || query.includes('evict') || query.includes('out'))) {
    executiveSummary = 'Under Indian law, a landlord cannot forcefully dispossess a tenant, lock them out, or disconnect basic utilities (water/power) without due process of law and a valid judicial eviction decree under the Model Tenancy Act.';
  } else if (query.includes('salary') && (query.includes('not pay') || query.includes('withheld') || query.includes('refuse'))) {
    executiveSummary = 'Under the Code on Wages, 2019 and Payment of Wages Act, 1936, an employer is legally obligated to disburse all earned wages and cannot arbitrarily withhold salary, bonus, or mandatory relieving documents upon resignation.';
  } else if ((query.includes('upi') || query.includes('fraud') || query.includes('cyber')) && query.includes('money')) {
    executiveSummary = 'Under Section 66D of the IT Act and RBI Circulars on Customer Protection, reporting unauthorized electronic debits within 3 days grants you zero customer liability, and calling 1930 within the Golden Hour freezes the funds trail.';
  } else if (query.includes('police') && (query.includes('phone') || query.includes('search'))) {
    executiveSummary = 'Under the landmark Supreme Court ruling in D.K. Basu and Section 105 of BNSS 2023, police officers cannot arbitrarily seize or browse a citizen’s private smartphone during a routine stop without a valid search warrant or nexus to a cognizable crime.';
  }

  // 6. Structure a comprehensive, natural citizen legal advisory
  const fullAnswer = `### ⚖️ Legal Advisory: ${primaryDomain.category}

${executiveSummary}

---

#### 1. Applicable Indian Laws & Statutory Provisions
${applicableLaws.map((law) => `* **${law}**`).join('\n')}

#### 2. Your Enforceable Citizen Rights
* **${bestRight.title}:** ${bestRight.summary}
${secondaryRight ? `* **${secondaryRight.title}:** ${secondaryRight.summary}` : ''}
* **Constitutional Guarantee:** Under **Article 39A of the Constitution of India**, every citizen has the fundamental right to equal justice and free legal aid. No individual can be deprived of legal remedies due to economic or procedural barriers.

#### 3. Step-by-Step Legal Remedies & Action Plan
${actions.map((step, idx) => `${idx + 1}. ${step}`).join('\n')}

#### 4. Official Dispute Redressal Helplines & Portals
${primaryDomain.helplines.map((h) => `* 📞 **${h}**`).join('\n')}

---
💡 *Need a formal draft? You can generate an official RTI Application, Consumer Notice, or Police Complaint in 1-click using the **NyayaSetu Document Drafter**.*`;

  return {
    category: primaryCat,
    categoryTitle: primaryDomain.category,
    summary: `${bestRight.title}: ${executiveSummary}`,
    keyRights: primaryDomain.rights.map((r) => `${r.title}: ${r.summary}`),
    applicableLaws,
    recommendedActions: actions,
    helplines: primaryDomain.helplines,
    sourceRef: primaryDomain.governingAct,
    fullAnswer,
  };
}

export default legalKnowledgeBase;
