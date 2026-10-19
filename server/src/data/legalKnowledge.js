/**
 * Comprehensive Indian Legal Knowledge Base for NyayaSetu
 * Covers 8 major legal domains with statutory citations, fundamental rights,
 * citizen remedies, actionable guidance, and national emergency helplines.
 */

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
 */
export function queryKnowledgeBase(queryText, requestedCategory = null) {
  const rawQuery = (queryText || '').trim();
  const query = rawQuery.toLowerCase();
  
  // Category vocabulary weights
  const categoryKeywords = {
    consumer: ['mrp', 'refund', 'defective', 'consumer', 'seller', 'flipkart', 'amazon', 'warranty', 'guarantee', 'shopkeeper', 'service charge', 'expiry', 'counterfeit', 'adulterated', 'edaakhil', 'ncdrc', 'unfair trade', 'replacement', 'product liability', 'overcharging', 'flight refund', 'hotel refund'],
    labor: ['salary', 'wage', 'wages', 'boss', 'pf', 'provident fund', 'gratuity', 'overtime', 'terminated', 'termination', 'fired', 'notice period', 'retrenchment', 'labour', 'labor', 'unpaid', 'withheld', 'experience letter', 'relieving letter', 'bonus', 'workplace', 'layoff', 'severance', 'employee', 'employer'],
    property: ['property', 'land', 'flat', 'apartment', 'builder', 'rera', 'ancestral', 'possession', 'tenant', 'landlord', 'rent', 'deposit', 'eviction', 'inheritance', 'deed', 'patta', 'khata', 'registry', 'encumbrance', 'delay in possession', 'encroachment', 'will', 'gift deed'],
    family: ['divorce', 'husband', 'wife', 'marriage', 'custody', 'child custody', 'alimony', 'maintenance', 'stridhan', 'domestic violence', 'in-laws', 'cruelty', '498a', 'special marriage act', 'hindu marriage', 'restitution', 'visitation rights', 'desertion'],
    criminal: ['fir', 'zero fir', 'police', 'arrest', 'bail', 'anticipatory bail', 'jail', 'theft', 'assault', 'beating', 'threat', 'intimidation', 'bribe', 'corruption', 'complaint', 'warrant', 'cognizable', 'bns', 'bnss', 'ipc', 'crpc', 'panchnama', 'seizure', 'traffic stop', 'challan'],
    constitutional: ['rti', 'right to information', 'fundamental right', 'constitution', 'writ', 'habeas corpus', 'mandamus', 'article 21', 'article 14', 'article 19', 'freedom of speech', 'privacy', 'tender', 'public fund', 'pio', 'information commission', 'fundamental duties'],
    women: ['harassment', 'posh', 'sexual harassment', 'workplace harassment', 'maternity', 'maternity leave', 'dowry', 'women', 'female', 'girl', 'stalking', 'eve teasing', 'night arrest', 'internal committee', 'section 498a', 'protection officer'],
    cyber: ['cyber', 'fraud', 'scam', 'otp', 'upi', 'hacked', 'fake', 'blackmail', 'online money', 'phishing', 'bank fraud', 'mule account', '1930', 'cybercrime.gov.in', 'deepfake', 'loan app', 'sextortion', 'morphed', 'data privacy', 'identity theft', 'credit card fraud']
  };

  // 1. Calculate domain relevance scores across all 8 domains
  const domainScores = {};
  Object.keys(legalKnowledgeBase).forEach((cat) => {
    let score = 0;
    const keywords = categoryKeywords[cat] || [];
    keywords.forEach((kw) => {
      if (query.includes(kw)) {
        score += kw.length > 5 ? 3 : 2;
      }
    });
    if (requestedCategory && requestedCategory.toLowerCase() === cat) {
      score += 5;
    }
    domainScores[cat] = score;
  });

  // Sort categories by relevance
  const sortedCategories = Object.keys(domainScores).sort((a, b) => domainScores[b] - domainScores[a]);
  const primaryCat = domainScores[sortedCategories[0]] > 0 ? sortedCategories[0] : (requestedCategory || 'consumer');
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
        if (haystack.includes(token)) rScore += 2;
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

  // Special statutory overrides based on explicit query contexts
  if (query.includes('police') || query.includes('arrest') || query.includes('phone')) {
    lawsSet.add('Section 173 & Section 105, Bharatiya Nagarik Suraksha Sanhita (BNSS), 2023');
    lawsSet.add('Article 21, Constitution of India (Right to Privacy & Personal Liberty)');
  }
  if (query.includes('upi') || query.includes('cyber') || query.includes('fraud') || query.includes('bank')) {
    lawsSet.add('Section 66D, Information Technology Act, 2000 (Cheating by Impersonation)');
    lawsSet.add('RBI Customer Protection Circular: Zero Liability for Unauthorized Electronic Transactions');
  }
  if (query.includes('salary') || query.includes('fired') || query.includes('terminate')) {
    lawsSet.add('Section 25F, Industrial Disputes Act, 1947 & Code on Wages, 2019');
  }
  if (query.includes('landlord') || query.includes('rent') || query.includes('evict')) {
    lawsSet.add('Model Tenancy Act, 2021 & Section 108, Transfer of Property Act, 1882');
  }
  if (query.includes('consumer') || query.includes('defective') || query.includes('refund')) {
    lawsSet.add('Consumer Protection Act, 2019 (Section 2(47) Unfair Trade Practice & Section 35)');
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

  // 5. Structure a comprehensive, professional citizen legal advisory
  const fullAnswer = `### ⚖️ Statutory Legal Analysis: ${primaryDomain.category}

**Core Issue Addressed:** "${rawQuery}"

---

#### 1. Applicable Laws & Statutory Provisions
${applicableLaws.map((law) => `* **${law}**`).join('\n')}

#### 2. Your Enforceable Rights Under Indian Law
* **Primary Right:** **${bestRight.title}**
* **Statutory Ground:** ${bestRight.summary}
${secondaryRight ? `* **Related Protection:** **${secondaryRight.title}** — ${secondaryRight.summary}` : ''}
* **Constitutional Guarantee:** Under **Article 39A of the Constitution of India**, every citizen has the fundamental right to equal justice and free legal aid. No individual can be deprived of legal remedies due to economic or procedural barriers.

#### 3. Step-by-Step Action Plan & Remedies
${actions.map((step, idx) => `${idx + 1}. ${step}`).join('\n')}

#### 4. Official Dispute Redressal Portals & Helplines
${primaryDomain.helplines.map((h) => `* 📞 **${h}**`).join('\n')}

---
💡 *Need a formal draft? You can generate an official RTI Application, Consumer Notice, or Police Complaint in 1-click using the **NyayaSetu Document Drafter**.*`;

  return {
    category: primaryCat,
    categoryTitle: primaryDomain.category,
    summary: `${bestRight.title}: ${bestRight.summary}`,
    keyRights: primaryDomain.rights.map((r) => `${r.title}: ${r.summary}`),
    applicableLaws,
    recommendedActions: actions,
    helplines: primaryDomain.helplines,
    sourceRef: primaryDomain.governingAct,
    fullAnswer,
  };
}

export default legalKnowledgeBase;
