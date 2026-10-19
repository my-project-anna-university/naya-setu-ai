/**
 * Comprehensive Dataset of 27 Real Indian Government Schemes
 * Complete with eligibility criteria, financial assistance, required documents,
 * application steps, and official portal URLs.
 */

export const governmentSchemesData = [
  {
    name: 'Pradhan Mantri Kisan Samman Nidhi (PM-KISAN)',
    category: 'Agriculture',
    ministry: 'Ministry of Agriculture & Farmers Welfare',
    description: 'Direct income support initiative providing financial assistance to all landholding farmer families across the country to meet domestic and farming needs.',
    benefits: '₹6,000 per year paid in three equal four-monthly installments of ₹2,000 directly into the bank accounts of eligible farmers through Direct Benefit Transfer (DBT).',
    financialAssistance: '₹6,000 / year',
    eligibility: {
      age: { min: 18, max: 100 },
      income: { max: 500000 },
      category: ['All', 'Farmer', 'General', 'OBC', 'SC', 'ST'],
      state: ['All India'],
      gender: ['All', 'Male', 'Female'],
      occupations: ['Farmer', 'Small Farmer', 'Marginal Farmer'],
    },
    applicationProcess: '1. Visit pmkisan.gov.in and click "New Farmer Registration".\n2. Enter Aadhaar number, state, and mobile number with OTP verification.\n3. Fill in land ownership details, survey number, and bank account.\n4. Submit for verification by local Patwari / District Nodal Officer.',
    requiredDocuments: ['Aadhaar Card', 'Land Ownership Records (Khasra/Khatauni/7/12)', 'Bank Account Passbook', 'Active Mobile Number'],
    website: 'https://pmkisan.gov.in',
    portalUrl: 'https://pmkisan.gov.in',
    status: 'active',
    tags: ['farmer', 'agriculture', 'dbt', 'cash transfer', 'rural'],
  },
  {
    name: 'Ayushman Bharat - PM Jan Arogya Yojana (AB-PMJAY)',
    category: 'Healthcare',
    ministry: 'Ministry of Health and Family Welfare',
    description: 'The world’s largest public health assurance scheme providing secondary and tertiary care hospitalization cover to vulnerable families listed in SECC 2011.',
    benefits: 'Cashless and paperless inpatient health insurance cover of up to ₹5,00,000 per family per year at empaneled public and private hospitals across India.',
    financialAssistance: '₹5,00,000 / family / year',
    eligibility: {
      age: { min: 0, max: 120 },
      income: { max: 300000 },
      category: ['All', 'BPL', 'EWS', 'SC', 'ST', 'OBC'],
      state: ['All India'],
      gender: ['All'],
      occupations: ['Laborer', 'Worker', 'Marginal', 'Unorganized Worker'],
    },
    applicationProcess: '1. Visit beneficiary.nha.gov.in or nearest Common Service Centre (CSC).\n2. Search eligibility using Ration Card number, Aadhaar, or PM-JAY family ID.\n3. Complete biometric e-KYC to generate instant Ayushman Card.\n4. Show the Ayushman Card at any empaneled hospital helpdesk (Ayushman Mitra).',
    requiredDocuments: ['Aadhaar Card', 'Ration Card', 'SECC Letter / Proof of Family Identity', 'Mobile Number'],
    website: 'https://pmjay.gov.in',
    portalUrl: 'https://beneficiary.nha.gov.in',
    status: 'active',
    tags: ['health', 'hospitalization', 'insurance', 'medical', 'cashless'],
  },
  {
    name: 'Pradhan Mantri Awas Yojana - Urban (PMAY-U)',
    category: 'Housing',
    ministry: 'Ministry of Housing and Urban Affairs',
    description: 'Affordable pucca housing for urban poor, Economically Weaker Sections (EWS), and Low Income Groups (LIG) living in statutory towns.',
    benefits: 'Interest subsidy up to 6.5% on home loans under Credit Linked Subsidy Scheme (CLSS), or direct central assistance up to ₹1.5 to ₹2.67 Lakhs for house construction.',
    financialAssistance: 'Up to ₹2,67,000 subsidy',
    eligibility: {
      age: { min: 21, max: 70 },
      income: { max: 1800000 },
      category: ['EWS', 'LIG', 'MIG', 'SC', 'ST', 'Women'],
      state: ['All India'],
      gender: ['All', 'Female'],
      occupations: ['All'],
    },
    applicationProcess: '1. Check eligibility on pmaymis.gov.in.\n2. Choose "Citizen Assessment" and verify Aadhaar.\n3. Input personal, income, present residential, and bank details.\n4. Track approval status and receive subsidy directly credited to home loan account.',
    requiredDocuments: ['Aadhaar Card', 'Income Certificate / Salary Slips', 'Affidavit stating non-ownership of pucca house', 'Bank Passbook'],
    website: 'https://pmaymis.gov.in',
    portalUrl: 'https://pmaymis.gov.in',
    status: 'active',
    tags: ['housing', 'urban', 'home loan', 'subsidy', 'pucca house'],
  },
  {
    name: 'Pradhan Mantri Mudra Yojana (PMMY)',
    category: 'Financial Inclusion & Business',
    ministry: 'Ministry of Finance',
    description: 'Collateral-free micro loans to non-corporate, non-farm small and micro enterprises across Shishu, Kishore, and Tarun tiers.',
    benefits: 'Loans up to ₹10 Lakhs (and up to ₹20 Lakhs under Tarun Plus) without collateral or third-party guarantee at affordable interest rates.',
    financialAssistance: 'Shishu (up to ₹50K), Kishore (₹50K-₹5L), Tarun (₹5L-₹10L)',
    eligibility: {
      age: { min: 18, max: 65 },
      income: { max: null },
      category: ['All', 'Artisan', 'Trader', 'Manufacturer', 'Self-Employed'],
      state: ['All India'],
      gender: ['All'],
      occupations: ['Self-Employed', 'Shopkeeper', 'Small Business Owner', 'Artisan'],
    },
    applicationProcess: '1. Apply through udyamimitra.in or directly approach any commercial bank, NBFC, or RRB.\n2. Fill MUDRA loan application form matching your business category.\n3. Provide business plan, quotations for machinery/inventory, and identity proofs.\n4. Receive MUDRA RuPay Card for working capital withdrawals.',
    requiredDocuments: ['Aadhaar Card', 'PAN Card', 'Proof of Business Address', 'Quotation / Project Report', '6-Month Bank Statement'],
    website: 'https://www.mudra.org.in',
    portalUrl: 'https://www.udyamimitra.in',
    status: 'active',
    tags: ['business loan', 'startup', 'msme', 'collateral-free', 'self-employed'],
  },
  {
    name: 'Sukanya Samriddhi Yojana (SSY)',
    category: 'Women & Girl Child',
    ministry: 'Ministry of Finance & Ministry of Women and Child Development',
    description: 'Government-backed savings scheme for the girl child under "Beti Bachao Beti Padhao" offering high tax-free compound interest for education and marriage.',
    benefits: 'High sovereign-guaranteed interest rate (around 8.2% p.a.), tax exemption under Section 80C, and tax-free maturity after 21 years.',
    financialAssistance: 'High interest savings (Minimum ₹250 to Maximum ₹1,50,000 / year)',
    eligibility: {
      age: { min: 0, max: 10 },
      income: { max: null },
      category: ['All'],
      state: ['All India'],
      gender: ['Female'],
      occupations: ['Student', 'Child'],
    },
    applicationProcess: '1. Visit any Post Office branch or authorized commercial bank.\n2. Fill Sukanya Samriddhi Account Opening Form.\n3. Submit girl child birth certificate and guardian KYC documents.\n4. Deposit initial amount (minimum ₹250) and collect passbook.',
    requiredDocuments: ['Birth Certificate of Girl Child', 'Identity Proof of Guardian (Aadhaar/PAN)', 'Address Proof', 'Passport Photos'],
    website: 'https://www.indiapost.gov.in',
    portalUrl: 'https://www.indiapost.gov.in',
    status: 'active',
    tags: ['girl child', 'savings', 'tax exemption', 'education', 'marriage'],
  },
  {
    name: 'Atal Pension Yojana (APY)',
    category: 'Social Welfare & Pension',
    ministry: 'Ministry of Finance / PFRDA',
    description: 'Universal pension scheme primarily targeted at unorganized sector workers ensuring guaranteed monthly income during old age.',
    benefits: 'Guaranteed fixed monthly pension ranging from ₹1,000 to ₹5,000 per month starting from age 60 until death, followed by lifetime pension to spouse and corpus return to nominee.',
    financialAssistance: '₹1,000 to ₹5,000 guaranteed monthly pension',
    eligibility: {
      age: { min: 18, max: 40 },
      income: { max: null },
      category: ['All', 'Unorganized Worker', 'Self-Employed'],
      state: ['All India'],
      gender: ['All'],
      occupations: ['Unorganized Worker', 'Laborer', 'Daily Wage Worker', 'Driver', 'Maid'],
    },
    applicationProcess: '1. Approach the bank where you hold your savings account.\n2. Fill APY registration form specifying chosen pension amount (₹1,000 to ₹5,000).\n3. Enable auto-debit consent for monthly/quarterly contribution based on your entry age.\n4. Receive PRAN (Permanent Retirement Account Number) card.',
    requiredDocuments: ['Savings Bank Account Passbook', 'Aadhaar Card', 'Mobile Number'],
    website: 'https://www.npscra.nsdl.co.in',
    portalUrl: 'https://enps.nsdl.com',
    status: 'active',
    tags: ['pension', 'old age', 'unorganized sector', 'retirement', 'guaranteed'],
  },
  {
    name: 'Stand-Up India Scheme',
    category: 'Financial Inclusion & Entrepreneurship',
    ministry: 'Ministry of Finance / SIDBI',
    description: 'Promotes entrepreneurship among SC, ST, and Women borrowers for setting up greenfield enterprises in manufacturing, services, or trading sector.',
    benefits: 'Bank composite loans between ₹10 Lakhs and ₹1 Crore covering 75% to 85% of project cost with low margin money requirement and handholding support.',
    financialAssistance: '₹10 Lakhs to ₹1 Crore loan',
    eligibility: {
      age: { min: 18, max: 70 },
      income: { max: null },
      category: ['SC', 'ST', 'Women'],
      state: ['All India'],
      gender: ['Female', 'All for SC/ST'],
      occupations: ['Entrepreneur', 'Business Owner'],
    },
    applicationProcess: '1. Register on standupmitra.in portal.\n2. Fill online application specifying greenfield project details.\n3. Connect with Lead District Manager or chosen partner bank.\n4. Complete appraisal and documentation for loan disbursement.',
    requiredDocuments: ['Identity & Caste Certificate (for SC/ST)', 'Business Project Report', 'PAN & Aadhaar', 'Lease or Title of Business Premises'],
    website: 'https://www.standupmitra.in',
    portalUrl: 'https://www.standupmitra.in',
    status: 'active',
    tags: ['sc st', 'women entrepreneur', 'business loan', 'greenfield', 'sidbi'],
  },
  {
    name: 'PM Vishwakarma Scheme',
    category: 'Artisans & Craftsmen',
    ministry: 'Ministry of Micro, Small and Medium Enterprises',
    description: 'Holistic scheme to empower traditional artisans and craftspeople working with their hands and tools across 18 traditional family trades.',
    benefits: 'PM Vishwakarma Certificate & ID card, skill training with ₹500/day stipend, ₹15,000 toolkit incentive, and collateral-free enterprise credit up to ₹3 Lakhs at concessional 5% interest.',
    financialAssistance: '₹15,000 toolkit grant + up to ₹3,00,000 low-interest loan',
    eligibility: {
      age: { min: 18, max: 70 },
      income: { max: null },
      category: ['Artisan', 'Craftsman', 'Carpenter', 'Blacksmith', 'Potter', 'Sculptor', 'Cobbler', 'Tailor'],
      state: ['All India'],
      gender: ['All'],
      occupations: ['Artisan', 'Craftsman', 'Carpenter', 'Weaver', 'Barber', 'Washerman'],
    },
    applicationProcess: '1. Visit nearest Common Service Centre (CSC) with Aadhaar and mobile.\n2. Complete biometric authentication and trade registration on pmvishwakarma.gov.in.\n3. Three-stage verification by Gram Panchayat / Urban Local Body.\n4. Attend 5-7 days basic skill training and receive toolkit voucher.',
    requiredDocuments: ['Aadhaar Card', 'Mobile linked to Aadhaar', 'Bank Account details', 'Ration Card'],
    website: 'https://pmvishwakarma.gov.in',
    portalUrl: 'https://pmvishwakarma.gov.in',
    status: 'active',
    tags: ['artisan', 'vishwakarma', 'craftsman', 'toolkit', 'skill training'],
  },
  {
    name: 'Pradhan Mantri Kaushal Vikas Yojana (PMKVY / Skill India)',
    category: 'Education & Skill',
    ministry: 'Ministry of Skill Development and Entrepreneurship',
    description: 'Flagship skill certification scheme encouraging youth to take up industry-relevant skill training for enhanced livelihood opportunities.',
    benefits: '100% government-funded short-term skill training, assessment and certification recognized across industries, soft skills, placement assistance, and monetary reward on completion.',
    financialAssistance: 'Free training + ₹8,000 average monetary incentive & certificate',
    eligibility: {
      age: { min: 15, max: 45 },
      income: { max: null },
      category: ['All', 'Youth', 'Student', 'Jobseeker'],
      state: ['All India'],
      gender: ['All'],
      occupations: ['Student', 'Unemployed', 'School Dropout'],
    },
    applicationProcess: '1. Register online on skillindia.gov.in or pmkvyofficial.org.\n2. Search authorized Training Centres near your location.\n3. Choose preferred sector and job role (e.g., IT, Electronics, Healthcare, Automotive).\n4. Complete training curriculum and appear for National Skill Qualification Framework (NSQF) assessment.',
    requiredDocuments: ['Aadhaar Card', 'Bank Account Details', 'Educational Qualification Certificates', 'Passport Photos'],
    website: 'https://www.pmkvyofficial.org',
    portalUrl: 'https://www.skillindia.gov.in',
    status: 'active',
    tags: ['skill development', 'youth employment', 'vocational training', 'free course'],
  },
  {
    name: 'Startup India Seed Fund Scheme (SISFS)',
    category: 'Innovation & Startup',
    ministry: 'Department for Promotion of Industry and Internal Trade (DPIIT)',
    description: 'Provides financial assistance to early-stage DPIIT-recognized startups for proof of concept, prototype development, product trials, and market entry.',
    benefits: 'Grants up to ₹20 Lakhs for validation of Proof of Concept / Prototype, and up to ₹50 Lakhs for commercialization through debt or convertible debentures.',
    financialAssistance: 'Grants up to ₹20 Lakhs & debt up to ₹50 Lakhs',
    eligibility: {
      age: { min: 18, max: 100 },
      income: { max: null },
      category: ['Entrepreneur', 'Startup Founder'],
      state: ['All India'],
      gender: ['All'],
      occupations: ['Startup Founder', 'Innovator'],
    },
    applicationProcess: '1. Register company and obtain DPIIT recognition on startupindia.gov.in.\n2. Log in to seedfund.startupindia.gov.in.\n3. Select up to 3 authorized incubators and submit business proposal & pitch deck.\n4. Incubator Seed Management Committee evaluates presentation and sanctions funds.',
    requiredDocuments: ['DPIIT Recognition Number', 'Incorporation Certificate', 'Pitch Deck / Project Proposal', 'Founder Identity & PAN Proofs'],
    website: 'https://seedfund.startupindia.gov.in',
    portalUrl: 'https://www.startupindia.gov.in',
    status: 'active',
    tags: ['startup', 'seed funding', 'dpiit', 'grants', 'technology'],
  },
  {
    name: 'Pradhan Mantri Jan Dhan Yojana (PMJDY)',
    category: 'Financial Inclusion',
    ministry: 'Ministry of Finance',
    description: 'National mission for comprehensive financial inclusion ensuring universal access to banking facilities with zero minimum balance requirement.',
    benefits: 'Basic Savings Bank Deposit (BSBD) account with zero balance, free RuPay debit card with ₹2 Lakh accidental insurance cover, and overdraft facility up to ₹10,000.',
    financialAssistance: 'Zero balance account + ₹10,000 overdraft + ₹2L accident cover',
    eligibility: {
      age: { min: 10, max: 100 },
      income: { max: null },
      category: ['All'],
      state: ['All India'],
      gender: ['All'],
      occupations: ['All'],
    },
    applicationProcess: '1. Visit any bank branch or Bank Mitra (Customer Service Point).\n2. Fill PMJDY account opening form.\n3. Submit Aadhaar number for biometric e-KYC.\n4. Instantly receive passbook and RuPay debit card.',
    requiredDocuments: ['Aadhaar Card (or Voter ID / Driving License / NREGA card if Aadhaar unavailable)'],
    website: 'https://pmjdy.gov.in',
    portalUrl: 'https://pmjdy.gov.in',
    status: 'active',
    tags: ['banking', 'zero balance', 'financial inclusion', 'rupay', 'insurance'],
  },
  {
    name: 'Pradhan Mantri Ujjwala Yojana (PMUY 2.0)',
    category: 'Social Welfare & Energy',
    ministry: 'Ministry of Petroleum and Natural Gas',
    description: 'Provides clean cooking fuel (LPG) connections to women from below poverty line and deprived rural households to safeguard health from indoor smoke.',
    benefits: 'Free deposit-free LPG connection, first refill cylinder free of cost, free gas stove, and targeted subsidy of ₹300 per cylinder on subsequent refills via DBT.',
    financialAssistance: 'Free gas connection + stove + ₹300 subsidy per refill',
    eligibility: {
      age: { min: 18, max: 100 },
      income: { max: 250000 },
      category: ['BPL', 'SC', 'ST', 'Pradhan Mantri Awas beneficiary', 'Antyodaya Anna Yojana'],
      state: ['All India'],
      gender: ['Female'],
      occupations: ['Homemaker', 'Rural Citizen'],
    },
    applicationProcess: '1. Apply online at pmuy.gov.in or visit nearest LPG distributor (Indane, Bharatgas, HP).\n2. Submit Ujjwala application form with family ration card.\n3. Complete biometric e-KYC of female applicant.\n4. Gas cylinder, regulator, and stove delivered to household.',
    requiredDocuments: ['Aadhaar of applicant & adult family members', 'Ration Card showing family composition', 'Bank Account Passbook (linked with Aadhaar)'],
    website: 'https://www.pmuy.gov.in',
    portalUrl: 'https://www.pmuy.gov.in',
    status: 'active',
    tags: ['lpg', 'cooking gas', 'women health', 'clean energy', 'subsidy'],
  },
  {
    name: 'Jal Jeevan Mission (Har Ghar Jal)',
    category: 'Water & Sanitation',
    ministry: 'Ministry of Jal Shakti',
    description: 'Universal coverage providing safe and adequate drinking water through individual Functional Household Tap Connections (FHTC) to every rural household.',
    benefits: '55 liters per capita per day potable drinking water supplied directly through household pipeline tap connections.',
    financialAssistance: '100% government-funded household tap infrastructure',
    eligibility: {
      age: { min: 0, max: 120 },
      income: { max: null },
      category: ['All', 'Rural Resident'],
      state: ['All India'],
      gender: ['All'],
      occupations: ['All'],
    },
    applicationProcess: '1. Implemented collectively through Village Water & Sanitation Committees (VWSC) and Gram Panchayats.\n2. Households can track water quality and progress on ejalshakti.gov.in.\n3. Contact Gram Panchayat Secretary for pipeline connection disputes.',
    requiredDocuments: ['Proof of Rural Residence', 'Aadhaar Card'],
    website: 'https://jaljeevanmission.gov.in',
    portalUrl: 'https://ejalshakti.gov.in/jjmreport/JJMIndia.aspx',
    status: 'active',
    tags: ['water', 'tap connection', 'rural', 'clean water', 'sanitation'],
  },
  {
    name: 'Pradhan Mantri Garib Kalyan Anna Yojana (PMGKAY)',
    category: 'Food Security',
    ministry: 'Ministry of Consumer Affairs, Food and Public Distribution',
    description: 'National food security programme providing free food grains to over 80 crore Antyodaya Anna Yojana (AAY) and Priority Householders (PHH).',
    benefits: '5 kg of free food grains (wheat/rice) per person per month to Priority households and 35 kg per family per month to Antyodaya families.',
    financialAssistance: 'Free monthly food grains (100% subsidized by Central Govt)',
    eligibility: {
      age: { min: 0, max: 120 },
      income: { max: 200000 },
      category: ['BPL', 'AAY', 'PHH', 'SC', 'ST'],
      state: ['All India'],
      gender: ['All'],
      occupations: ['Daily Wage Worker', 'Migrant Worker', 'Marginal'],
    },
    applicationProcess: '1. Obtain eligible Ration Card from State Food & Civil Supplies Department.\n2. Visit any Fair Price Shop (ration shop) across India under "One Nation One Ration Card".\n3. Authenticate using Aadhaar biometric POS machine.\n4. Collect entitled free grain ration.',
    requiredDocuments: ['NFSA Ration Card', 'Aadhaar Card of family members'],
    website: 'https://dfpd.gov.in',
    portalUrl: 'https://nfsa.gov.in',
    status: 'active',
    tags: ['food security', 'ration', 'wheat', 'rice', 'onorc', 'free food'],
  },
  {
    name: 'National Scholarship Portal (Pre-Matric & Post-Matric Scholarships)',
    category: 'Education & Scholarship',
    ministry: 'Ministry of Electronics and Information Technology / Ministry of Social Justice',
    description: 'Single unified portal for central and state government scholarship schemes for minority, SC, ST, OBC, and meritorious students.',
    benefits: 'Direct financial assistance covering tuition fees, maintenance allowance, and book grants directly into students’ bank accounts.',
    financialAssistance: '₹2,500 to ₹50,000 / year depending on course level',
    eligibility: {
      age: { min: 6, max: 35 },
      income: { max: 250000 },
      category: ['SC', 'ST', 'OBC', 'Minority', 'EWS', 'Student'],
      state: ['All India'],
      gender: ['All'],
      occupations: ['Student'],
    },
    applicationProcess: '1. Register at scholarships.gov.in using Aadhaar.\n2. Complete One-Time Registration (OTR).\n3. Fill course details, past academic performance, and upload certificates.\n4. Forward to School/College Nodal Officer for online verification.',
    requiredDocuments: ['Aadhaar Card', 'Caste Certificate', 'Income Certificate', 'Previous Year Marksheet', 'College Fee Receipt & Bank Passbook'],
    website: 'https://scholarships.gov.in',
    portalUrl: 'https://scholarships.gov.in',
    status: 'active',
    tags: ['scholarship', 'education', 'students', 'sc st obc', 'tuition fee'],
  },
  {
    name: 'Mahatma Gandhi National Rural Employment Guarantee Act (MGNREGA)',
    category: 'Employment & Rural Livelihood',
    ministry: 'Ministry of Rural Development',
    description: 'World’s largest social safety net guaranteeing at least 100 days of wage employment in a financial year to every rural household whose adult members volunteer for unskilled manual work.',
    benefits: 'Guaranteed 100 days statutory wage employment per household per year with wages credited via DBT within 15 days, and unemployment allowance if work is not provided within 15 days.',
    financialAssistance: 'Statutory daily wage (₹230 - ₹374 / day depending on state)',
    eligibility: {
      age: { min: 18, max: 70 },
      income: { max: null },
      category: ['Rural Household', 'All'],
      state: ['All India'],
      gender: ['All'],
      occupations: ['Rural Worker', 'Unskilled Labor', 'Agricultural Worker'],
    },
    applicationProcess: '1. Apply for Job Card at local Gram Panchayat office (verbally or in writing).\n2. Gram Panchayat verifies residence and issues Job Card within 15 days.\n3. Submit written request for work specifying preferred dates.\n4. Work allotted within 5 km radius of applicant’s residence.',
    requiredDocuments: ['Aadhaar Card', 'Ration Card', 'Bank/Post Office Passbook', 'Passport Photo'],
    website: 'https://nrega.nic.in',
    portalUrl: 'https://nrega.nic.in',
    status: 'active',
    tags: ['employment', 'rural job', '100 days guarantee', 'mgnrega', 'unskilled labor'],
  },
  {
    name: 'Pradhan Mantri Matru Vandana Yojana (PMMVY)',
    category: 'Maternal Health & Child Welfare',
    ministry: 'Ministry of Women and Child Development',
    description: 'Maternity benefit cash incentive scheme to compensate for wage loss and encourage healthy nutrition and institutional delivery for pregnant women and lactating mothers.',
    benefits: 'Cash incentive of ₹5,000 for the first child (in two installments) and ₹6,000 for the second child if it is a girl child, deposited directly via DBT.',
    financialAssistance: '₹5,000 to ₹6,000 direct cash benefit',
    eligibility: {
      age: { min: 19, max: 45 },
      income: { max: 800000 },
      category: ['Pregnant Women', 'Lactating Mothers'],
      state: ['All India'],
      gender: ['Female'],
      occupations: ['Homemaker', 'Informal Worker'],
    },
    applicationProcess: '1. Register at local Anganwadi Centre (AWC) or authorized Government Health Facility within 570 days of Last Menstrual Period (LMP).\n2. Alternatively apply online on pmmvy.wcd.gov.in.\n3. Complete mandatory ante-natal check-up (ANC) and child birth registration.\n4. Cash incentives transferred directly to Aadhaar-seeded bank account.',
    requiredDocuments: ['Mother & Child Protection (MCP) Card', 'Aadhaar Card of Mother and Husband', 'Aadhaar-linked Bank Account details'],
    website: 'https://pmmvy.wcd.gov.in',
    portalUrl: 'https://pmmvy.wcd.gov.in',
    status: 'active',
    tags: ['maternity benefit', 'pregnant women', 'nutrition', 'dbt', 'cash incentive'],
  },
  {
    name: 'Pradhan Mantri Suraksha Bima Yojana (PMSBY)',
    category: 'Insurance & Social Security',
    ministry: 'Ministry of Finance',
    description: 'Accident insurance scheme offering accidental death and disability cover at an extremely affordable premium of just ₹20 per year.',
    benefits: '₹2,00,000 payout in case of accidental death or permanent total disability, and ₹1,00,000 for permanent partial disability.',
    financialAssistance: '₹2,00,000 accidental cover for ₹20/year premium',
    eligibility: {
      age: { min: 18, max: 70 },
      income: { max: null },
      category: ['All'],
      state: ['All India'],
      gender: ['All'],
      occupations: ['All'],
    },
    applicationProcess: '1. Enable auto-debit consent with your savings bank account branch or net banking portal.\n2. Submit one-page PMSBY consent form.\n3. ₹20 is auto-debited annually on or before 31st May.',
    requiredDocuments: ['Savings Bank Account', 'Aadhaar Card', 'Nominee Details'],
    website: 'https://www.jansuraksha.gov.in',
    portalUrl: 'https://www.jansuraksha.gov.in',
    status: 'active',
    tags: ['accident insurance', 'affordable', 'jansuraksha', 'micro-insurance'],
  },
  {
    name: 'Pradhan Mantri Jeevan Jyoti Bima Yojana (PMJJBY)',
    category: 'Insurance & Social Security',
    ministry: 'Ministry of Finance',
    description: 'Renewable life insurance cover offering term life assurance for death due to any cause at a modest annual premium of ₹436 per year.',
    benefits: '₹2,00,000 life insurance sum assured payable to nominee upon death of the subscriber due to any reason.',
    financialAssistance: '₹2,00,000 life cover for ₹436/year premium',
    eligibility: {
      age: { min: 18, max: 50 },
      income: { max: null },
      category: ['All'],
      state: ['All India'],
      gender: ['All'],
      occupations: ['All'],
    },
    applicationProcess: '1. Visit your savings account bank or post office.\n2. Fill enrollment form with declaration of good health.\n3. Enable auto-debit of ₹436 annual premium.\n4. Policy auto-renews every year on 1st June.',
    requiredDocuments: ['Bank Passbook', 'Aadhaar Card', 'Nominee Name & Relationship Details'],
    website: 'https://www.jansuraksha.gov.in',
    portalUrl: 'https://www.jansuraksha.gov.in',
    status: 'active',
    tags: ['life insurance', 'term insurance', 'jansuraksha', 'nominee payout'],
  },
  {
    name: 'Deendayal Antyodaya Yojana - NRLM (DAY-NRLM)',
    category: 'Livelihoods & Self Help Groups',
    ministry: 'Ministry of Rural Development',
    description: 'Empowers rural poor women by organizing them into Self-Help Groups (SHGs), fostering community institutions, and facilitating bank microcredit.',
    benefits: 'Revolving Fund of ₹15,000-₹30,000 and Community Investment Fund up to ₹1,50,000 per SHG, plus interest subvention lowering bank loan interest to 7% (and 4% on prompt repayment).',
    financialAssistance: 'Revolving funds + low-interest bank loans up to ₹20 Lakhs per SHG',
    eligibility: {
      age: { min: 18, max: 65 },
      income: { max: 300000 },
      category: ['Women', 'BPL', 'Rural Resident'],
      state: ['All India'],
      gender: ['Female'],
      occupations: ['Self-Help Group Member', 'Artisan', 'Rural Entrepreneur'],
    },
    applicationProcess: '1. Join or form a women Self-Help Group (10-20 members) facilitated by village Community Resource Person (CRP).\n2. Open group savings bank account.\n3. Follow Panchasutra (regular meetings, savings, internal lending, timely repayment, book-keeping).\n4. Apply for bank linkage credit through local block development office.',
    requiredDocuments: ['SHG Resolution Letter', 'Members KYC (Aadhaar & Photos)', 'SHG Bank Passbook'],
    website: 'https://aajeevika.gov.in',
    portalUrl: 'https://nrlm.gov.in',
    status: 'active',
    tags: ['shg', 'women empowerment', 'self-help groups', 'microcredit', 'rural livelihood'],
  },
  {
    name: 'PM Street Vendor’s AtmaNirbhar Nidhi (PM SVANidhi)',
    category: 'Urban Livelihoods & Microcredit',
    ministry: 'Ministry of Housing and Urban Affairs',
    description: 'Special micro-credit facility providing affordable working capital loans to urban street vendors to resume livelihoods impacted by economic shocks.',
    benefits: 'First tranche loan up to ₹10,000 (1-year tenure), second tranche up to ₹20,000, and third tranche up to ₹50,000 with 7% interest subsidy and cashback on digital transactions up to ₹1,200/year.',
    financialAssistance: 'Loans of ₹10K, ₹20K, and ₹50K + 7% interest subsidy',
    eligibility: {
      age: { min: 18, max: 70 },
      income: { max: null },
      category: ['Street Vendor', 'Hawker', 'Thelawala'],
      state: ['All India'],
      gender: ['All'],
      occupations: ['Street Vendor', 'Hawker', 'Cart Vendor'],
    },
    applicationProcess: '1. Check Vending Certificate / ID card issued by Urban Local Body (ULB) or Letter of Recommendation (LoR).\n2. Apply online at pmsvanidhi.mohua.gov.in or through Banking Correspondent.\n3. Select preferred lending institution.\n4. Loan disbursed directly into vendor bank account within 10-15 days.',
    requiredDocuments: ['Aadhaar Card', 'Vending Certificate / Identity Card / LoR from ULB', 'Bank Account details'],
    website: 'https://pmsvanidhi.mohua.gov.in',
    portalUrl: 'https://pmsvanidhi.mohua.gov.in',
    status: 'active',
    tags: ['street vendor', 'micro loan', 'working capital', 'urban', 'svanidhi'],
  },
  {
    name: 'National Social Assistance Programme (NSAP) - IGNOAPS (Old Age Pension)',
    category: 'Social Welfare & Senior Citizens',
    ministry: 'Ministry of Rural Development',
    description: 'Non-contributory welfare pension providing monthly financial support to destitute senior citizens belonging to Below Poverty Line (BPL) households.',
    benefits: 'Monthly pension of ₹200-₹500 from Central Government, augmented up to ₹1,000 - ₹2,500/month by various state government top-ups.',
    financialAssistance: '₹1,000 to ₹2,500 / month',
    eligibility: {
      age: { min: 60, max: 120 },
      income: { max: 150000 },
      category: ['BPL', 'Senior Citizen'],
      state: ['All India'],
      gender: ['All'],
      occupations: ['Retired', 'Elderly', 'Destitute'],
    },
    applicationProcess: '1. Submit application to Block Development Office (BDO) in rural areas or Sub-Divisional Magistrate (SDM) / Municipality in urban areas.\n2. Attach proof of BPL category and age proof.\n3. Gram Sabha / Municipal verification conducts field check.\n4. Pension transferred directly to bank or post office account.',
    requiredDocuments: ['BPL Ration Card / SECC inclusion', 'Aadhaar Card / Age Proof', 'Bank Passbook', 'Passport Photo'],
    website: 'https://nsap.nic.in',
    portalUrl: 'https://nsap.nic.in',
    status: 'active',
    tags: ['senior citizen', 'old age pension', 'bpl', 'social security', 'nsap'],
  },
  {
    name: 'Credit Guarantee Fund Trust for Micro & Small Enterprises (CGTMSE)',
    category: 'MSME & Industry',
    ministry: 'Ministry of MSME & SIDBI',
    description: 'Enables collateral-free credit flow to Micro and Small Enterprises by providing credit guarantee covers to member lending institutions.',
    benefits: 'Credit guarantee coverage up to 85% for loans up to ₹5 Crores without requiring third-party collateral or mortgage.',
    financialAssistance: 'Collateral-free credit guarantee up to ₹5 Crores',
    eligibility: {
      age: { min: 18, max: 75 },
      income: { max: null },
      category: ['MSME', 'Small Business', 'Manufacturing', 'Services'],
      state: ['All India'],
      gender: ['All'],
      occupations: ['Manufacturer', 'Service Provider', 'Business Owner'],
    },
    applicationProcess: '1. Prepare project proposal and obtain Udyam Registration (udyamregistration.gov.in).\n2. Approach participating bank / financial institution.\n3. Lender evaluates business viability and sanctions loan under CGTMSE cover.',
    requiredDocuments: ['Udyam Registration Certificate', 'Detailed Project Report (DPR)', 'Audited Financials / ITR for 2-3 years', 'KYC Documents'],
    website: 'https://www.cgtmse.in',
    portalUrl: 'https://www.cgtmse.in',
    status: 'active',
    tags: ['msme loan', 'collateral-free', 'credit guarantee', 'sidbi', 'business expansion'],
  },
  {
    name: 'PM Surya Ghar: Muft Bijli Yojana (Solar Rooftop Scheme)',
    category: 'Renewable Energy & Utilities',
    ministry: 'Ministry of New and Renewable Energy',
    description: 'Pioneering rooftop solar initiative providing heavy capital subsidies to households to generate free solar power and earn by feeding surplus electricity to the grid.',
    benefits: 'Subsidy of ₹30,000 for 1 kW system, ₹60,000 for 2 kW system, and ₹78,000 for 3 kW or higher systems, ensuring up to 300 units of free electricity every month.',
    financialAssistance: 'Direct capital subsidy up to ₹78,000',
    eligibility: {
      age: { min: 18, max: 100 },
      income: { max: null },
      category: ['All', 'Homeowner'],
      state: ['All India'],
      gender: ['All'],
      occupations: ['All'],
    },
    applicationProcess: '1. Register at pmsuryaghar.gov.in by choosing State, Electricity Distribution Company (DISCOM), and Consumer Account Number.\n2. Apply for Rooftop Solar and receive feasibility approval from DISCOM.\n3. Install plant through DISCOM-registered solar vendor.\n4. Apply for net meter; DISCOM inspects and generates commissioning certificate; subsidy credited to bank within 30 days.',
    requiredDocuments: ['Electricity Bill of recent month', 'Aadhaar Card', 'Rooftop ownership proof', 'Cancelled Cheque / Bank Passbook'],
    website: 'https://pmsuryaghar.gov.in',
    portalUrl: 'https://pmsuryaghar.gov.in',
    status: 'active',
    tags: ['solar power', 'rooftop solar', 'free electricity', 'renewable energy', 'subsidy'],
  },
  {
    name: 'Poshan Abhiyaan (National Nutrition Mission)',
    category: 'Child & Maternal Welfare',
    ministry: 'Ministry of Women and Child Development',
    description: 'National mission aimed at reducing stunting, under-nutrition, anemia among young children, adolescent girls, and women.',
    benefits: 'Growth monitoring, supplementary nutrition through Take-Home Rations (THR) and hot cooked meals at Anganwadi Centres, and health awareness campaigns.',
    financialAssistance: 'Free nutritional food & health care monitoring',
    eligibility: {
      age: { min: 0, max: 6 },
      income: { max: null },
      category: ['Children', 'Lactating Mothers', 'Adolescent Girls'],
      state: ['All India'],
      gender: ['All'],
      occupations: ['Child', 'Mother'],
    },
    applicationProcess: '1. Enroll mother and child at nearest village Anganwadi Centre.\n2. Anganwadi worker enters records into Poshan Tracker application.\n3. Collect supplementary nutritional meals on monthly distribution days.',
    requiredDocuments: ['Aadhaar Card of Mother', 'MCP Card / Birth Proof of Child'],
    website: 'https://poshanabhiyaan.gov.in',
    portalUrl: 'https://poshantracker.in',
    status: 'active',
    tags: ['nutrition', 'anganwadi', 'children', 'poshan', 'mother health'],
  },
  {
    name: 'Beti Bachao Beti Padhao (BBBP)',
    category: 'Women & Child Protection',
    ministry: 'Ministry of Women and Child Development',
    description: 'National social campaign aimed at addressing declining Child Sex Ratio (CSR) and promoting the education and welfare of girl children.',
    benefits: 'Special educational incentives, district-level merit awards for girls passing 10th/12th grades, access to Kasturba Gandhi Balika Vidyalayas, and protection against female feticide.',
    financialAssistance: 'Educational grants & welfare incentives',
    eligibility: {
      age: { min: 0, max: 25 },
      income: { max: null },
      category: ['Girl Child', 'Student', 'All'],
      state: ['All India'],
      gender: ['Female'],
      occupations: ['Student', 'Child'],
    },
    applicationProcess: '1. Coordinated across District Collectorates and Women & Child Development departments.\n2. Eligible students can apply through their respective government schools or District Social Welfare offices.',
    requiredDocuments: ['Birth Certificate', 'School Enrollment Certificate', 'Aadhaar Card of Parent & Child'],
    website: 'https://wcd.nic.in/bbbp-schemes',
    portalUrl: 'https://wcd.nic.in',
    status: 'active',
    tags: ['girl child', 'education', 'women safety', 'gender equality', 'schooling'],
  },
];

/**
 * Calculates matching score and criteria breakdown for an individual user profile.
 */
export function calculateSchemeMatch(scheme, userProfile) {
  let score = 0;
  let maxPossible = 5;
  const matchedCriteria = [];
  const unmetCriteria = [];

  const {
    age = null,
    income = null,
    category = 'General',
    state = 'All India',
    gender = 'All',
    occupation = null,
  } = userProfile;

  // 1. Age check
  if (age !== null && age !== undefined) {
    const minAge = scheme.eligibility?.age?.min ?? 0;
    const maxAge = scheme.eligibility?.age?.max ?? 120;
    if (age >= minAge && age <= maxAge) {
      score += 1;
      matchedCriteria.push(`Age (${age} yrs) satisfies criteria [${minAge}-${maxAge} yrs]`);
    } else {
      unmetCriteria.push(`Age (${age} yrs) outside requirement [${minAge}-${maxAge} yrs]`);
    }
  } else {
    score += 0.8;
  }

  // 2. Income check
  const maxIncome = scheme.eligibility?.income?.max;
  if (maxIncome === null || maxIncome === undefined) {
    score += 1;
    matchedCriteria.push('No upper income cap');
  } else if (income !== null && income !== undefined) {
    if (Number(income) <= maxIncome) {
      score += 1;
      matchedCriteria.push(`Annual income ₹${income} is within limit of ₹${maxIncome}`);
    } else {
      unmetCriteria.push(`Income ₹${income} exceeds threshold of ₹${maxIncome}`);
    }
  } else {
    score += 0.7;
  }

  // 3. Gender check
  const eligibleGenders = scheme.eligibility?.gender || ['All'];
  if (
    eligibleGenders.includes('All') ||
    (gender && eligibleGenders.some(g => g.toLowerCase() === gender.toLowerCase()))
  ) {
    score += 1;
    matchedCriteria.push(`Gender requirement matched`);
  } else {
    unmetCriteria.push(`Gender must be one of: ${eligibleGenders.join(', ')}`);
  }

  // 4. Social Category check
  const eligibleCategories = scheme.eligibility?.category || ['All'];
  if (
    eligibleCategories.includes('All') ||
    (category && eligibleCategories.some(c => c.toLowerCase() === category.toLowerCase()))
  ) {
    score += 1;
    matchedCriteria.push(`Category criteria met`);
  } else {
    unmetCriteria.push(`Targeted category: ${eligibleCategories.join(', ')}`);
  }

  // 5. State check
  const eligibleStates = scheme.eligibility?.state || ['All India'];
  if (
    eligibleStates.includes('All India') ||
    (state && eligibleStates.some(s => s.toLowerCase() === state.toLowerCase()))
  ) {
    score += 1;
    matchedCriteria.push('Available in your state');
  } else {
    unmetCriteria.push(`Only available in: ${eligibleStates.join(', ')}`);
  }

  // Bonus for occupation match
  if (occupation && scheme.eligibility?.occupations) {
    maxPossible += 1;
    const occMatched = scheme.eligibility.occupations.some(
      o => o.toLowerCase() === occupation.toLowerCase() || o === 'All'
    );
    if (occMatched) {
      score += 1;
      matchedCriteria.push(`Occupation (${occupation}) matches target beneficiaries`);
    } else {
      unmetCriteria.push(`Target occupations: ${scheme.eligibility.occupations.join(', ')}`);
    }
  }

  const matchPercentage = Math.min(100, Math.round((score / maxPossible) * 100));

  return {
    matchPercentage,
    matchedCriteria,
    unmetCriteria,
    isEligible: matchPercentage >= 65,
  };
}

export default governmentSchemesData;
