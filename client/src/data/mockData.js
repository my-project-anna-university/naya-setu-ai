/**
 * Realistic Indian Legal and Scheme Data for NyayaSetu
 * Covers laws, acts, schemes, legal aid authorities, and news.
 */

export const INDIAN_STATES = [
  "Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chhattisgarh",
  "Goa", "Gujarat", "Haryana", "Himachal Pradesh", "Jharkhand",
  "Karnataka", "Kerala", "Madhya Pradesh", "Maharashtra", "Manipur",
  "Meghalaya", "Mizoram", "Nagaland", "Odisha", "Punjab",
  "Rajasthan", "Sikkim", "Tamil Nadu", "Telangana", "Tripura",
  "Uttar Pradesh", "Uttarakhand", "West Bengal", "Delhi (NCT)", "Jammu and Kashmir",
  "Ladakh", "Puducherry", "Chandigarh"
];

export const SCHEMES_DATA = [
  {
    id: "pm-jay",
    name: "Ayushman Bharat - Pradhan Mantri Jan Arogya Yojana (PM-JAY)",
    ministry: "Ministry of Health and Family Welfare",
    category: "Healthcare",
    targetGroup: "Low-income families, BPL, vulnerable households",
    summary: "World's largest government-funded healthcare assurance scheme providing financial protection of up to ₹5 Lakh per family per year for secondary and tertiary care hospitalization.",
    benefits: [
      "Cashless and paperless access to healthcare services at empaneled hospitals across India",
      "Coverage of up to ₹5,00,000 per family per year on a family floater basis",
      "Covers 3 days of pre-hospitalization and 15 days of post-hospitalization expenses including diagnostic tests and medicines",
      "No restriction on family size, age, or gender",
      "Pre-existing conditions covered from day one"
    ],
    eligibilityCriteria: {
      minAge: 0,
      maxAge: 100,
      maxIncome: 250000,
      gender: "All",
      applicableStates: ["All States"],
      targetCategories: ["BPL", "Rural Poor", "Urban Workers", "General Low Income"]
    },
    eligibilityText: "Households identified via Socio-Economic Caste Census (SECC 2011) data based on occupational deprivation criteria for rural and urban areas, or holding active Antyodaya Anna Yojana (AAY) cards.",
    requiredDocuments: [
      "Aadhaar Card or Valid Government Photo ID",
      "Ration Card or Family Identification Document",
      "Income Certificate / BPL Certificate (if applicable)",
      "Mobile number linked to Aadhaar"
    ],
    applicationProcess: [
      "Check name on the official Ayushman Bharat beneficiary portal (mera.pmjay.gov.in) or call helpline 14555",
      "Visit any empaneled Public or Private Hospital with Aadhaar Card and Ration Card",
      "Meet the 'Pradhan Mantri Arogya Mitra' at the hospital helpdesk",
      "Undergo biometric authentication and receive Ayushman Golden Card"
    ],
    officialLink: "https://pmjay.gov.in",
    helpline: "14555 / 1800-111-565"
  },
  {
    id: "nalsa-free-legal-aid",
    name: "NALSA Free Legal Aid & Advice Scheme",
    ministry: "National Legal Services Authority (NALSA) & Ministry of Law and Justice",
    category: "Legal Justice",
    targetGroup: "Women, Children, SC/ST, Custody Persons, Low Income",
    summary: "Guaranteed under Article 39A of the Constitution and Legal Services Authorities Act 1987, providing completely free legal representation, advocate services, court fee payments, and counseling.",
    benefits: [
      "Payment of court fees, process fees, and all other legal charges incurred in court",
      "Provision of free experienced defense advocate / legal counsel in any court (from Magistrate to Supreme Court)",
      "Free drafting of legal appeals, petitions, counter-affidavits, and legal notices",
      "Free certified copies of judgments, orders, and case proceedings"
    ],
    eligibilityCriteria: {
      minAge: 0,
      maxAge: 100,
      maxIncome: 300000,
      gender: "All",
      applicableStates: ["All States"],
      targetCategories: ["Women", "Children", "SC/ST", "Custody/Prisoners", "Disabled", "Disaster Victims", "Low Income"]
    },
    eligibilityText: "Women and children automatically eligible regardless of income (Sec 12(c)). Members of SC/ST, victims of trafficking, disabled persons, and individuals with annual income below ₹3,00,000 (varies slightly by state up to ₹5,00,000 in Supreme Court).",
    requiredDocuments: [
      "Identity Proof (Aadhaar, Voter ID, or Ration Card)",
      "Income Affidavit or Income Certificate (exempt for Women, Children, SC/ST, and Persons in Custody)",
      "Copies of summons, notices, FIR, or legal dispute documents"
    ],
    applicationProcess: [
      "Visit the nearest District Legal Services Authority (DLSA) office located in the District Court complex",
      "Or apply online at nalsa.gov.in portal",
      "Or call National Legal Aid Toll-Free Helpline 15100",
      "Legal Services Counsel will verify documents and appoint an advocate within 3 to 7 working days"
    ],
    officialLink: "https://nalsa.gov.in",
    helpline: "15100 (National Legal Helpline)"
  },
  {
    id: "pm-kisan",
    name: "PM-KISAN (Pradhan Mantri Kisan Samman Nidhi)",
    ministry: "Ministry of Agriculture and Farmers Welfare",
    category: "Agriculture & Farmers",
    targetGroup: "Small and Marginal Landholding Farmers",
    summary: "Direct income support of ₹6,000 per year in three equal 4-monthly installments of ₹2,000 directly transferred into the Aadhaar-seeded bank accounts of all landholder farmer families.",
    benefits: [
      "Guaranteed ₹6,000 per year direct benefit transfer (DBT)",
      "Credited directly to farmer's Aadhaar-linked bank account in 3 cycles (April-July, August-November, December-March)",
      "Helps meet financial needs in procuring agricultural inputs like seeds, fertilizers, and equipment"
    ],
    eligibilityCriteria: {
      minAge: 18,
      maxAge: 100,
      maxIncome: 500000,
      gender: "All",
      applicableStates: ["All States"],
      targetCategories: ["Farmers", "Rural Workers"]
    },
    eligibilityText: "All landholding farmer families having cultivable landholding in their names. Exclusions apply to institutional landholders, income tax payees, constitutional post holders, and retired pensioners drawing ₹10,000+ monthly.",
    requiredDocuments: [
      "Aadhaar Card",
      "Land Record Documents (Khatauni / Jamabandi / RoR showing land ownership)",
      "Active Bank Account Passbook seeded with Aadhaar",
      "Mobile number linked to Aadhaar for e-KYC"
    ],
    applicationProcess: [
      "Visit pmkisan.gov.in and click on 'New Farmer Registration'",
      "Enter Aadhaar Number and select Rural / Urban Farmer",
      "Fill in land details, survey number, and bank account information",
      "Complete e-KYC via Aadhaar OTP or biometric at nearest Common Service Center (CSC)"
    ],
    officialLink: "https://pmkisan.gov.in",
    helpline: "155261 / 011-24300606"
  },
  {
    id: "pm-awas-yojana",
    name: "Pradhan Mantri Awas Yojana - Urban & Gramin (PMAY)",
    ministry: "Ministry of Housing and Urban Affairs & Ministry of Rural Development",
    category: "Housing",
    targetGroup: "EWS, LIG, Homeless, Kutcha House Dwellers",
    summary: "Affordable housing mission ensuring 'Housing for All' with financial assistance up to ₹1.2 - ₹2.67 Lakh for building or purchasing pucca houses with basic amenities like water, sanitation, and electricity.",
    benefits: [
      "Subsidy of ₹1.20 Lakh in plains and ₹1.30 Lakh in hilly/difficult areas for PMAY-Gramin",
      "Interest subsidy up to ₹2.67 Lakh under Credit Linked Subsidy Scheme (CLSS) for urban homebuyers",
      "Mandatory joint or female ownership of the house to promote women empowerment"
    ],
    eligibilityCriteria: {
      minAge: 21,
      maxAge: 70,
      maxIncome: 600000,
      gender: "All",
      applicableStates: ["All States"],
      targetCategories: ["EWS", "LIG", "BPL", "Rural Poor"]
    },
    eligibilityText: "Beneficiary family must not own a pucca house anywhere in India. Annual household income up to ₹3 Lakh for EWS, up to ₹6 Lakh for LIG.",
    requiredDocuments: [
      "Aadhaar Card of all family members",
      "Affidavit of not owning any pucca house in India",
      "Income Certificate / Salary Slip / ITR",
      "Bank Account details",
      "Property purchase agreement or land title"
    ],
    applicationProcess: [
      "Apply through Gram Panchayat / Block Development Office for PMAY-Gramin",
      "Or apply via pmaymis.gov.in or Common Service Center (CSC) for PMAY-Urban",
      "Assessment by municipal corporation / local authority",
      "Direct benefit disbursement in stages linked to construction geo-tagging"
    ],
    officialLink: "https://pmaymis.gov.in",
    helpline: "011-23063285 / 1800-11-6163"
  },
  {
    id: "sukanya-samriddhi",
    name: "Sukanya Samriddhi Yojana (SSY)",
    ministry: "Ministry of Finance",
    category: "Women & Child",
    targetGroup: "Girl child below 10 years of age",
    summary: "High-interest government backed small savings scheme under 'Beti Bachao Beti Padhao' initiative offering attractive returns (8.2% p.a.) and Triple Tax Exemption (EEE) under Section 80C.",
    benefits: [
      "Government-guaranteed high interest rate (currently 8.2% per annum compounded yearly)",
      "Full tax deduction up to ₹1.5 Lakh under Section 80C, with interest and maturity proceeds completely tax-free",
      "Partial withdrawal allowed for higher education once the girl reaches 18 years or clears 10th standard",
      "Matures on completion of 21 years from account opening or upon girl's marriage after age 18"
    ],
    eligibilityCriteria: {
      minAge: 0,
      maxAge: 10,
      maxIncome: 10000000,
      gender: "Female",
      applicableStates: ["All States"],
      targetCategories: ["Children", "Women", "General"]
    },
    eligibilityText: "Account can be opened by biological parents or legal guardians for a girl child from her birth up to the age of 10 years. Maximum of 2 girl children per family (3 in case of twins/triplets).",
    requiredDocuments: [
      "Birth Certificate of the girl child",
      "Identity Proof of guardian/parent (Aadhaar / PAN Card)",
      "Address Proof of guardian/parent",
      "Passport size photograph of child and parent"
    ],
    applicationProcess: [
      "Obtain SSY account opening form from any Post Office or authorized commercial bank branch",
      "Submit completed form with child's birth certificate and KYC documents",
      "Deposit initial minimum amount of ₹250 (up to ₹1,50,000 per financial year)",
      "Receive passbook for record keeping"
    ],
    officialLink: "https://www.indiapost.gov.in",
    helpline: "1800-266-6868"
  },
  {
    id: "pm-mudra-yojana",
    name: "Pradhan Mantri MUDRA Yojana (PMMY)",
    ministry: "Ministry of Finance",
    category: "Business & Self Employment",
    targetGroup: "Micro entrepreneurs, shopkeepers, artisans, startups",
    summary: "Collateral-free business loans up to ₹20 Lakh under Shishu (up to ₹50,000), Kishore (₹50,000 to ₹5 Lakh), and Tarun (₹5 Lakh to ₹20 Lakh) categories for non-farm micro enterprises.",
    benefits: [
      "No collateral or third-party guarantee required for loan processing",
      "Nominal interest rates with repayment tenure up to 5-7 years",
      "MUDRA RuPay Debit Card provided for working capital overdraft limit",
      "Zero processing fees for Shishu and Kishore loan categories"
    ],
    eligibilityCriteria: {
      minAge: 18,
      maxAge: 65,
      maxIncome: 10000000,
      gender: "All",
      applicableStates: ["All States"],
      targetCategories: ["Entrepreneurs", "Artisans", "Shopkeepers", "MSME"]
    },
    eligibilityText: "Any Indian citizen who has a viable business plan for a non-farm sector income generating activity such as manufacturing, processing, trading or service sector.",
    requiredDocuments: [
      "Proof of Identity (Aadhaar / Voter ID / PAN)",
      "Proof of Business Address and establishment license / Udyam Registration",
      "Business proposal and projected balance sheet",
      "Bank statement of last 6 months"
    ],
    applicationProcess: [
      "Prepare business proposal with required machinery/equipment quotes",
      "Apply online via UdyamiMitra portal (udyamimitra.in) or visit any commercial bank, RRB, or NBFC",
      "Fill Loan Application Form under Shishu, Kishore or Tarun category",
      "Upon sanction, loan amount is disbursed directly to business vendor or account"
    ],
    officialLink: "https://www.mudra.org.in",
    helpline: "1800-180-1111"
  }
];

export const RIGHTS_CATEGORIES_DATA = [
  {
    id: "consumer-rights",
    name: "Consumer Rights",
    icon: "FaShoppingCart",
    tagline: "Consumer Protection Act, 2019",
    description: "Protection against unfair trade practices, misleading advertisements, defective products, and deficient services with 3-tier grievance redressal forums.",
    lawsGoverning: [
      "Consumer Protection Act, 2019",
      "Consumer Protection (E-Commerce) Rules, 2020",
      "Legal Metrology Act, 2009",
      "Bureau of Indian Standards (BIS) Act, 2016"
    ],
    sections: [
      {
        title: "Six Fundamental Consumer Rights (Section 2(9))",
        content: "Under the Consumer Protection Act 2019, every Indian buyer possesses six inviolable statutory rights: Right to Safety against hazardous goods; Right to Information regarding quality, quantity, potency, purity, standard and price; Right to Choose goods/services at competitive prices; Right to be Heard in appropriate forums; Right to Seek Redressal against unfair trade practices; and Right to Consumer Education.",
        penalty: "Fines up to ₹10 Lakhs and imprisonment up to 2 years for misleading advertisements by CCPA."
      },
      {
        title: "Three-Tier Consumer Dispute Commissions",
        content: "District Consumer Disputes Redressal Commission (DCDRC) handles claims up to ₹50 Lakhs (can file where complainant resides). State Commission handles claims between ₹50 Lakhs and ₹2 Crores. National Commission (NCDRC) in New Delhi hears claims exceeding ₹2 Crores.",
        penalty: "Failure to comply with Commission orders attracts imprisonment between 1 month and 3 years, or fine of ₹25,000 to ₹1 Lakh."
      },
      {
        title: "Product Liability for Manufacturers & Sellers",
        content: "A manufacturer, service provider or seller is liable to compensate a consumer for harm, injury, or property damage caused by a defective product or deficient service without having to prove negligence.",
        penalty: "Strict civil damages plus product recall mandated by Central Consumer Protection Authority (CCPA)."
      },
      {
        title: "E-Commerce Consumer Rights",
        content: "Online platforms (Amazon, Flipkart, Swiggy, etc.) must display country of origin, expiry dates, return/refund policies, and appoint an Indian grievance officer who must acknowledge complaints within 48 hours and resolve within 1 month.",
        penalty: "Cancellation charges cannot be arbitrary if seller didn't incur cost."
      }
    ],
    faqs: [
      {
        q: "Can a restaurant compel me to pay a service charge?",
        a: "No! The CCPA issued clear guidelines stating service charge is purely voluntary. Demanding mandatory service charge violates the Consumer Protection Act. You can demand its removal or lodge a complaint via the National Consumer Helpline (1915)."
      },
      {
        q: "Can a retailer charge above Maximum Retail Price (MRP)?",
        a: "Charging even 1 paisa above the printed MRP is illegal under the Legal Metrology Act 2009. Violators face fines up to ₹25,000 for the first offense and ₹50,000 or jail for subsequent offenses."
      },
      {
        q: "What is the limitation period to file a consumer complaint?",
        a: "A complaint must be filed within 2 years from the date on which the cause of action (defect, denial of service, unfair practice) arose."
      }
    ],
    relatedSchemes: ["nalsa-free-legal-aid"]
  },
  {
    id: "labor-rights",
    name: "Labor & Employment Rights",
    icon: "FaHardHat",
    tagline: "Code on Wages, Industrial Relations, POSH",
    description: "Legal entitlements of formal and informal workers, minimum wages, overtime compensation, severance pay, gratuity, and safety regulations.",
    lawsGoverning: [
      "Code on Wages, 2019",
      "Industrial Disputes Act, 1947",
      "Payment of Gratuity Act, 1972",
      "Employees' Provident Funds and Miscellaneous Provisions Act, 1952",
      "Maternity Benefit Amendment Act, 2017"
    ],
    sections: [
      {
        title: "Right to Timely & Minimum Wages",
        content: "Every employee in both organized and unorganized sectors is entitled to minimum floor wages notified by Central/State governments. Wages must be paid by the 7th or 10th of every month. Deductions without legal sanction are unlawful.",
        penalty: "Non-payment of minimum wages attracts fine up to ₹50,000, repeat offenders face imprisonment up to 3 months."
      },
      {
        title: "Working Hours, Overtime & Rest Intervals",
        content: "Standard working hours cannot exceed 8 to 9 hours a day or 48 hours a week. Any work beyond this must be compensated at double the normal rate of wages (overtime pay). Employees are entitled to at least one paid weekly day of rest.",
        penalty: "Mandatory double-rate calculation."
      },
      {
        title: "Maternity Benefits for Working Women",
        content: "Female employees with 80 days of service in the preceding 12 months are entitled to 26 weeks of fully paid maternity leave for the first two surviving children. Employers with 50+ employees must provide crèche facilities.",
        penalty: "Imprisonment of employer up to 1 year and fine up to ₹5,000."
      },
      {
        title: "Gratuity & Termination Notice",
        content: "Gratuity is payable on termination of employment after continuous service of not less than 5 years (except in case of death or disablement) at the rate of 15 days' wages for every completed year of service, capped at ₹20 Lakhs.",
        penalty: "Simple interest at 10% p.a. for delayed gratuity payment."
      }
    ],
    faqs: [
      {
        q: "Can an employer terminate me without notice or severance pay?",
        a: "No. Under the Industrial Disputes Act, workmen with over 1 year of continuous service must be given 30 days written notice or wages in lieu, plus retrenchment compensation equal to 15 days' average pay for every year of service."
      },
      {
        q: "Is an employer allowed to withhold my salary or experience letter?",
        a: "Withholding earned salary or standard relieving/experience letter without lawful inquiry or arbitration constitutes an unfair labor practice and breach of contract. A legal notice can be served through labor commissioner."
      }
    ],
    relatedSchemes: ["nalsa-free-legal-aid", "pm-mudra-yojana"]
  },
  {
    id: "criminal-law",
    name: "Criminal Law & Arrest Rights",
    icon: "FaGavel",
    tagline: "Bharatiya Nyaya Sanhita (BNS) & BNSS",
    description: "Crucial rights during police stops, FIR registration, arrest safeguards under D.K. Basu guidelines, bailable offenses, and anticipatory bail.",
    lawsGoverning: [
      "Bharatiya Nyaya Sanhita, 2023 (BNS)",
      "Bharatiya Nagarik Suraksha Sanhita, 2023 (BNSS)",
      "Bharatiya Sakshya Adhiniyam, 2023 (BSA)",
      "Constitution of India (Articles 20, 21, 22)"
    ],
    sections: [
      {
        title: "Right to Know Grounds of Arrest & Legal Representation",
        content: "Under Article 22(1) and Section 47 of BNSS (Section 50 CrPC), every arrested person has the right to be immediately informed of the exact grounds of arrest and whether the offense is bailable. You have the right to consult and be defended by a legal practitioner of your choice.",
        penalty: "Arrest without communicating grounds makes detention illegal."
      },
      {
        title: "24-Hour Magistrate Production Mandate",
        content: "Under Article 22(2) and Section 58 BNSS, an arrested person must be produced before the nearest Judicial Magistrate within 24 hours of arrest (excluding travel time). Detention beyond 24 hours without magistrate's remand is unconstitutional.",
        penalty: "Illegal confinement punishable under BNS Section 127."
      },
      {
        title: "Special Protections for Women during Arrest",
        content: "No woman can be arrested before sunrise and after sunset, except in exceptional circumstances with prior written permission of a Judicial Magistrate. Arrest and body search of a woman can ONLY be conducted by a female police officer with strict decency.",
        penalty: "Departmental inquiry and criminal action against violating officers."
      },
      {
        title: "Zero FIR & Mandatory Registration",
        content: "A Zero FIR can be lodged at ANY police station regardless of jurisdiction where the incident occurred. Police cannot refuse to register an FIR for a cognizable offense; refusing to do so is a punishable offense under Section 199 BNS (Section 166A IPC).",
        penalty: "Imprisonment of police officer up to 2 years for refusing FIR."
      }
    ],
    faqs: [
      {
        q: "What are the D.K. Basu guidelines on arrest?",
        a: "Police officers conducting arrest must wear clear name tags, prepare an arrest memo signed by at least one witness/relative, inform a chosen friend/relative within 8-12 hours, and get the arrested person medically examined every 48 hours."
      },
      {
        q: "Can police inspect my phone without a warrant?",
        a: "No. Unless seized in a formal investigation under proper seizure memo (Panchnama) with written requisition citing specific offense, police cannot arbitrarily unlock or read your private chats/photos on the road."
      }
    ],
    relatedSchemes: ["nalsa-free-legal-aid"]
  },
  {
    id: "constitutional-rights",
    name: "Constitutional & Fundamental Rights",
    icon: "FaBalanceScale",
    tagline: "Part III, Articles 12 to 35",
    description: "Fundamental rights guaranteed to all persons and citizens of India, enforceable directly in High Courts and the Supreme Court of India.",
    lawsGoverning: [
      "Constitution of India, 1950",
      "Protection of Human Rights Act, 1993",
      "Right to Information (RTI) Act, 2005"
    ],
    sections: [
      {
        title: "Right to Equality (Articles 14 to 18)",
        content: "Equality before the law and equal protection of laws within India. Prohibition of discrimination on grounds of religion, race, caste, sex or place of birth. Abolition of untouchability (Article 17) and titles.",
        penalty: "State actions violating equality are struck down as ultra vires."
      },
      {
        title: "Right to Freedom of Speech & Expression (Article 19)",
        content: "Guarantees freedom of speech and expression, freedom to assemble peacefully without arms, form associations or unions, move freely throughout India, reside anywhere, and practice any trade or profession, subject to reasonable restrictions.",
        penalty: "Unreasonable censorship or arbitrary suppression declared unconstitutional."
      },
      {
        title: "Right to Life & Personal Liberty (Article 21)",
        content: "No person shall be deprived of life or personal liberty except according to procedure established by law. Expansively interpreted by Supreme Court to include Right to Privacy (Puttaswamy judgment), Right to Clean Environment, Right to Health, Right to Speedy Trial, and Right to Dignity.",
        penalty: "Writ of Habeas Corpus to free unlawfully detained persons."
      },
      {
        title: "Right to Constitutional Remedies (Article 32 & 226)",
        content: "Dr. B.R. Ambedkar termed Article 32 the 'Heart and Soul' of the Constitution. Gives citizens direct access to Supreme Court (Article 32) and High Courts (Article 226) for enforcement of rights through Writs: Habeas Corpus, Mandamus, Prohibition, Quo Warranto, and Certiorari.",
        penalty: "Binding sovereign orders upon public officials."
      }
    ],
    faqs: [
      {
        q: "What is an RTI application and who can file it?",
        a: "Any citizen of India can file an RTI under Section 6(1) of RTI Act 2005 to seek records, documents, or data from any public authority for a nominal fee of ₹10. Information must be provided within 30 days (48 hours if related to life or liberty)."
      },
      {
        q: "What happens if a Public Information Officer (PIO) denies RTI without cause?",
        a: "The Information Commission can levy a penalty of ₹250 per day up to ₹25,000 on the PIO and recommend disciplinary action."
      }
    ],
    relatedSchemes: ["nalsa-free-legal-aid"]
  },
  {
    id: "women-rights",
    name: "Women's Legal Rights & Safety",
    icon: "FaFemale",
    tagline: "DV Act 2005, POSH Act 2013, Equal Remuneration",
    description: "Protection against domestic violence, workplace sexual harassment, dowry harassment, equal inheritance rights, and 24x7 crisis helplines.",
    lawsGoverning: [
      "Protection of Women from Domestic Violence Act, 2005 (PWDVA)",
      "Sexual Harassment of Women at Workplace (POSH) Act, 2013",
      "Dowry Prohibition Act, 1961",
      "Maternity Benefit Act, 1961",
      "Hindu Succession (Amendment) Act, 2005 (Coparcenary Rights)"
    ],
    sections: [
      {
        title: "Protection from Domestic Violence (PWDVA 2005)",
        content: "Covers physical, emotional, verbal, sexual, and economic abuse. An aggrieved woman has the right to reside in the shared household (cannot be evicted), right to protection orders, monetary relief, custody orders, and free legal/medical aid.",
        penalty: "Breach of protection order is punishable with imprisonment up to 1 year and fine up to ₹20,000."
      },
      {
        title: "Workplace Sexual Harassment (POSH Act 2013)",
        content: "Mandates every organization with 10+ employees to constitute an Internal Complaints Committee (ICC) headed by a senior woman. Complaints can be filed within 3 months. Inquiries must complete in 90 days. For informal/domestic workers, Local Committees (LC) exist in every district.",
        penalty: "Non-compliance attracts fine of ₹50,000 and cancellation of business license on repeated default."
      },
      {
        title: "Right to Equal Coparcenary Property Rights",
        content: "In Vineeta Sharma v. Rakesh Sharma (2020), the Supreme Court ruled that daughters have equal coparcenary birthrights in ancestral Hindu Undivided Family (HUF) property, identical to sons, regardless of whether the father was alive when the 2005 amendment took effect.",
        penalty: "Illegal exclusion can be challenged through civil partition suit."
      },
      {
        title: "Strict Ban on Dowry (Dowry Prohibition Act & BNS Sec 85/86)",
        content: "Giving, taking, or abetting dowry is illegal. Subjecting a woman to cruelty for dowry demands is a non-bailable offense carrying rigorous imprisonment from 3 years to life.",
        penalty: "Imprisonment minimum 5 years for giving/taking dowry; Section 85 BNS imprisonment up to 3 years."
      }
    ],
    faqs: [
      {
        q: "What is Women Helpline number in India?",
        a: "Dial 181 for National Women Helpline (domestic violence, distress, shelter). Dial 1091 for Women Police Helpline. Dial 112 for All-in-One Emergency Response Support System (ERSS)."
      },
      {
        q: "Can an unmarried or divorced daughter claim maintenance?",
        a: "Yes, under Section 144 of BNSS (Section 125 CrPC) and Hindu Adoptions and Maintenance Act, dependent daughters unable to maintain themselves are entitled to maintenance from parents or former spouse."
      }
    ],
    relatedSchemes: ["sukanya-samriddhi", "nalsa-free-legal-aid"]
  },
  {
    id: "property-rights",
    name: "Property & Succession Rights",
    icon: "FaHome",
    tagline: "Transfer of Property Act, RERA 2016",
    description: "Land registry, tenant rights against unlawful eviction, Real Estate Regulatory Authority (RERA) remedies against builders, and inheritance wills.",
    lawsGoverning: [
      "Real Estate (Regulation and Development) Act, 2016 (RERA)",
      "Transfer of Property Act, 1882",
      "Registration Act, 1908",
      "Model Tenancy Act / State Rent Control Acts",
      "Indian Succession Act, 1925"
    ],
    sections: [
      {
        title: "RERA Homebuyer Protections (RERA Act 2016)",
        content: "Builders cannot take more than 10% advance without registered agreement. Promoters must deposit 70% of collections into an escrow account. Delayed possession entitles homebuyers to full refund with interest or monthly interest compensation at SBI MCLR + 2%.",
        penalty: "Imprisonment of builder up to 3 years or 10% project cost fine for non-compliance."
      },
      {
        title: "Protection Against Unlawful Tenant Eviction",
        content: "Landlords cannot arbitrarily evict tenants or cut essential utility connections (water, power) without due legal process and court/rent tribunal eviction decree. Security deposit is capped at maximum 2 months for residential properties under Model Tenancy guidelines.",
        penalty: "Landlord liable to pay compensation up to double the rent for unlawful dispossession."
      },
      {
        title: "Ancestral vs Self-Acquired Property Rules",
        content: "Self-acquired property can be willed or gifted freely by owner to anyone. Ancestral property (inherited up to 4 generations undivided) belongs to coparceners by birth and cannot be sold without legal necessity or consent.",
        penalty: "Unauthorized sale of coparcenary share can be set aside by court."
      }
    ],
    faqs: [
      {
        q: "Is registration of a property sale deed compulsory?",
        a: "Yes. Under Section 17 of Registration Act 1908, transfer of immovable property worth above ₹100 is legally invalid without mandatory stamp duty payment and registration before the Sub-Registrar."
      },
      {
        q: "What should I do if a builder delays flat handover by years?",
        a: "File a complaint before your State RERA Authority online. You can demand immediate refund with interest or monthly delay interest until physical possession with Occupancy Certificate (OC)."
      }
    ],
    relatedSchemes: ["pm-awas-yojana", "nalsa-free-legal-aid"]
  },
  {
    id: "cyber-law",
    name: "Cyber Crime & Digital Rights",
    icon: "FaLaptopCode",
    tagline: "Information Technology Act 2000, DPDP Act 2023",
    description: "Protection against online financial frauds, identity theft, cyberstalking, non-consensual image sharing, and digital data privacy rights.",
    lawsGoverning: [
      "Information Technology Act, 2000 (Amended 2008)",
      "Digital Personal Data Protection Act, 2023 (DPDP)",
      "Bharatiya Nyaya Sanhita, 2023 (Sections on Cheating & Forgery)"
    ],
    sections: [
      {
        title: "Financial Fraud & National Helpline 1930",
        content: "If money is siphoned off through UPI fraud, phishing, OTP scams or unauthorized bank transactions, reporting within the 'Golden Hour' (first 2-3 hours) on helpline 1930 or cybercrime.gov.in triggers immediate lien marking and freezing of funds in mule bank accounts.",
        penalty: "Cheating by personation using computer resource punishable with 3 years jail and ₹1 Lakh fine (Sec 66D IT Act)."
      },
      {
        title: "Cyberstalking & Obscene Material Sharing",
        content: "Capturing, publishing or transmitting images of private area without consent is strictly prohibited under Section 66E IT Act. Publishing sexually explicit conduct electronically attracts up to 5 years imprisonment under Section 67A.",
        penalty: "Non-bailable offenses with severe fines and confiscation of digital hardware."
      },
      {
        title: "Digital Personal Data Protection Act, 2023",
        content: "Data Fiduciaries must obtain clear, verifiable consent before processing personal data. Citizens have the right to access summary of personal data, right to correction and erasure, and right to grievance redressal.",
        penalty: "Penalties up to ₹250 Crores on companies for failure to prevent data breaches."
      }
    ],
    faqs: [
      {
        q: "What is the official government portal to report cyber fraud?",
        a: "The official National Cyber Crime Reporting Portal is https://cybercrime.gov.in and emergency helpline is 1930."
      },
      {
        q: "Are banks liable to refund money lost in unauthorized digital transactions?",
        a: "Yes! As per RBI circular DBR.No.Leg.BC.78/09.07.005/2017-18, if zero liability is established and the customer notifies the bank within 3 working days of unauthorized transaction, the bank must reverse the lost amount within 10 days."
      }
    ],
    relatedSchemes: ["nalsa-free-legal-aid"]
  },
  {
    id: "family-law",
    name: "Family & Matrimonial Law",
    icon: "FaUsers",
    tagline: "Marriage, Divorce, Child Custody & Maintenance",
    description: "Legal grounds for divorce, mutual consent proceedings, child custody determination based on child's welfare, and parent maintenance rights.",
    lawsGoverning: [
      "Hindu Marriage Act, 1955 / Special Marriage Act, 1954",
      "Maintenance and Welfare of Parents and Senior Citizens Act, 2007",
      "Guardians and Wards Act, 1890",
      "Bharatiya Nagarik Suraksha Sanhita (BNSS Sec 144 - Maintenance)"
    ],
    sections: [
      {
        title: "Divorce by Mutual Consent (Section 13B HMA)",
        content: "Spouses living separately for 1 year or more can jointly petition for divorce by mutual consent. The statutory 6-month cooling off period can be waived by the Supreme Court or Family Courts under Article 142 if marriage is irretrievably broken.",
        penalty: "Mutual terms legally binding once decree granted."
      },
      {
        title: "Child Custody: Welfare of Child Paramount",
        content: "Indian courts prioritize the paramount welfare of the minor child over proprietary rights of parents. Mothers are generally given custody of children under 5 years unless proven unfit, while visitation and shared parenting rights are granted to the other parent.",
        penalty: "Custody orders subject to alteration if welfare compromised."
      },
      {
        title: "Parents & Senior Citizens Maintenance Act",
        content: "Senior citizens unable to maintain themselves can file a summary claim against children or legal heirs before the Maintenance Tribunal. Tribunal can order monthly maintenance up to ₹10,000, and gift deeds executed by elderly in favor of negligent children can be declared void.",
        penalty: "Abandoning senior citizens punishable with imprisonment up to 3 months or fine."
      }
    ],
    faqs: [
      {
        q: "Can a wife claim maintenance if she is earning?",
        a: "Yes, if her income is insufficient to maintain the same standard of living she enjoyed in the matrimonial home, court can award interim maintenance under Section 24 of Hindu Marriage Act."
      },
      {
        q: "How long does a mutual consent divorce take?",
        a: "Typically 6 to 18 months, though court can expedite hearings and waive the 6-month statutory waiting period upon joint application demonstrating reconciliation is impossible."
      }
    ],
    relatedSchemes: ["nalsa-free-legal-aid"]
  }
];

export const LEGAL_AID_CENTERS = [
  {
    id: "dlsa-delhi-central",
    name: "Central District Legal Services Authority (DLSA Delhi)",
    type: "DLSA",
    state: "Delhi (NCT)",
    city: "New Delhi",
    address: "Room No. 287, Tis Hazari Courts Complex, Delhi - 110054",
    phone: "011-23968052 / 15100",
    email: "central-dlsa@nic.in",
    services: ["Free Defense Advocates", "Pre-Litigation Mediation", "Lok Adalat Hearings", "Legal Literacy Camps", "Victim Compensation Assistance"],
    timings: "Monday - Saturday: 10:00 AM - 5:00 PM (Closed 2nd Saturday & Sunday)",
    latitude: 28.6672,
    longitude: 77.2173
  },
  {
    id: "dlsa-mumbai-city",
    name: "Mumbai City District Legal Services Authority",
    type: "DLSA",
    state: "Maharashtra",
    city: "Mumbai",
    address: "City Civil & Sessions Court, Old Secretariat Building, Fort, Mumbai - 400032",
    phone: "022-22676722 / 15100",
    email: "dlsa.mumbaicity@mah.gov.in",
    services: ["Free Legal Aid Panel", "Matrimonial Counseling", "Bail Application Assistance for Under-trials", "Consumer Redressal Filing"],
    timings: "Monday - Saturday: 10:30 AM - 5:30 PM",
    latitude: 18.9298,
    longitude: 72.8315
  },
  {
    id: "dlsa-bengaluru-urban",
    name: "Bengaluru Urban District Legal Services Authority",
    type: "DLSA",
    state: "Karnataka",
    city: "Bengaluru",
    address: "City Civil Court Complex, KG Road, Bengaluru - 560009",
    phone: "080-22211796 / 15100",
    email: "dlsa-bangalore@karnataka.gov.in",
    services: ["Permanent Lok Adalat", "Labor Dispute Counseling", "Free Legal Representation in High Court & Civil Court", "Senior Citizen Aid"],
    timings: "Monday - Saturday: 10:00 AM - 5:00 PM",
    latitude: 12.9778,
    longitude: 77.5855
  },
  {
    id: "dlsa-chennai",
    name: "Chennai District Legal Services Authority",
    type: "DLSA",
    state: "Tamil Nadu",
    city: "Chennai",
    address: "High Court Campus, North Fort Road, George Town, Chennai - 600104",
    phone: "044-25342441 / 15100",
    email: "dlsa-chennai@tn.gov.in",
    services: ["Free Criminal Defense", "Domestic Violence Legal Helpdesk", "Disability Rights Assistance", "Prison Legal Clinic"],
    timings: "Monday - Saturday: 10:00 AM - 5:00 PM",
    latitude: 13.0878,
    longitude: 80.2885
  },
  {
    id: "dlsa-kolkata",
    name: "Kolkata District Legal Services Authority",
    type: "DLSA",
    state: "West Bengal",
    city: "Kolkata",
    address: "Bankshall Court, 2 & 3 Bankshall Street, BBD Bagh, Kolkata - 700001",
    phone: "033-22485501 / 15100",
    email: "kolkata.dlsa@wb.gov.in",
    services: ["Legal Consultation for Women & Children", "Lok Adalat Settlement", "Motor Accident Claim Free Defense", "RTI Drafting Support"],
    timings: "Monday - Saturday: 10:00 AM - 5:00 PM",
    latitude: 22.5714,
    longitude: 88.3484
  },
  {
    id: "tlsc-varanasi",
    name: "Varanasi Taluk Legal Services Committee (TLSC)",
    type: "TLSC",
    state: "Uttar Pradesh",
    city: "Varanasi",
    address: "Civil Court Campus, Kachehri, Varanasi - 221002",
    phone: "0542-2503212 / 15100",
    email: "tlsc.varanasi@up.gov.in",
    services: ["Rural Legal Clinics", "Farmer Land Dispute Mediation", "Free Bail Applications", "Pension and Social Welfare Claims"],
    timings: "Monday - Saturday: 9:30 AM - 4:30 PM",
    latitude: 25.3356,
    longitude: 82.9904
  },
  {
    id: "ngo-human-rights-jaipur",
    name: "Rajasthan Legal Aid & Human Rights Foundation",
    type: "NGO",
    state: "Rajasthan",
    city: "Jaipur",
    address: "Plot 42, Near High Court Bench, Jyoti Nagar, Jaipur - 302005",
    phone: "0141-2740981",
    email: "contact@rajlegalaid.org",
    services: ["POSH Act Workplace Inquiries", "Caste Atrocity (SC/ST Act) Free Legal Help", "Child Labor Rescue Legal Aid"],
    timings: "Monday - Friday: 9:00 AM - 6:00 PM",
    latitude: 26.8920,
    longitude: 75.8050
  },
  {
    id: "dlsa-hyderabad",
    name: "Hyderabad District Legal Services Authority",
    type: "DLSA",
    state: "Telangana",
    city: "Hyderabad",
    address: "City Civil Court Complex, Purani Haveli, Hyderabad - 500002",
    phone: "040-24522933 / 15100",
    email: "dlsa-hyd@telangana.gov.in",
    services: ["Free Advocate Assignment", "Alternative Dispute Resolution (ADR)", "Under-trial Prisoner Representation", "Cyber Crime Legal Advice"],
    timings: "Monday - Saturday: 10:00 AM - 5:00 PM",
    latitude: 17.3688,
    longitude: 78.4831
  }
];

export const LEGAL_NEWS = [
  {
    id: "bns-implementation-update",
    title: "New Criminal Laws BNS, BNSS & BSA Fully Operational Across Indian Courts",
    date: "October 15, 2026",
    category: "Criminal Justice",
    readTime: "4 min read",
    summary: "The Bharatiya Nyaya Sanhita (BNS), Bharatiya Nagarik Suraksha Sanhita (BNSS), and Bharatiya Sakshya Adhiniyam (BSA) have established mandatory digital evidence recording and Zero FIR nationwide.",
    content: "The Ministry of Home Affairs and State Law Departments report that electronic forensics, mandatory videography of search and seizure operations, and summons delivery via SMS and WhatsApp are now actively integrated in over 92% of police jurisdictions.",
    source: "Law & Justice Bureau of India",
    tags: ["BNS", "BNSS", "Digital Forensics", "Zero FIR"]
  },
  {
    id: "consumer-dark-patterns-guidelines",
    title: "CCPA Cracks Down on E-Commerce 'Dark Patterns' and Drip Pricing",
    date: "October 10, 2026",
    category: "Consumer Rights",
    readTime: "3 min read",
    summary: "The Central Consumer Protection Authority issued strict penalties against platforms engaging in deceptive web design, sneak-into-basket tactics, and forced recurring subscriptions.",
    content: "Under the Guidelines for Prevention and Regulation of Dark Patterns, misleading count-down timers and fake urgency alerts are classified as unfair trade practices subject to fines up to ₹20 Lakhs.",
    source: "Consumer Affairs Ministry",
    tags: ["E-Commerce", "Dark Patterns", "CCPA", "Consumer Court"]
  },
  {
    id: "sc-ruling-right-to-privacy-mobile",
    title: "Supreme Court Reiterates: Police Cannot Seize Personal Phones Without Written Memo",
    date: "October 02, 2026",
    category: "Constitutional Law",
    readTime: "5 min read",
    summary: "A three-judge bench held that indiscriminate inspection of phones and personal cloud drives during traffic stops or routine questioning violates Article 21 fundamental privacy rights.",
    content: "The court emphasized that digital devices carry intensely private correspondence, medical records, and biometric secrets. Clear warrants or specific recorded reasons under Section 105 BNSS are essential for device seizures.",
    source: "Supreme Court Reporter",
    tags: ["Supreme Court", "Article 21", "Privacy", "Digital Devices"]
  },
  {
    id: "nalsa-expands-tele-law",
    title: "NALSA Tele-Law Expands to 2.5 Lakh Gram Panchayats with AI Assistance",
    date: "September 28, 2026",
    category: "Legal Aid & Technology",
    readTime: "3 min read",
    summary: "Citizens in remote rural villages can now video-consult pro-bono lawyers from Common Service Centers (CSCs) in their native regional languages for pre-litigation advice.",
    content: "The Tele-Law initiative has successfully resolved over 60 Lakh disputes pre-litigation, significantly reducing pendency in district and taluk subordinate courts.",
    source: "NALSA Official Release",
    tags: ["Tele-Law", "Rural Access", "Free Legal Aid", "e-Courts"]
  },
  {
    id: "rera-possession-delay-compensation",
    title: "Supreme Court: Homebuyers Entitled to Full Refund Plus SBI MCLR + 2% for Delayed Possession",
    date: "September 18, 2026",
    category: "Property Law",
    readTime: "4 min read",
    summary: "Builders can no longer hide behind force majeure clauses for routine construction delays. Buyers have unfettered option to seek full refund or monthly interest.",
    content: "The ruling provides landmark relief to thousands of flat owners awaiting delivery of stalled residential projects across Delhi-NCR, Mumbai, and Bengaluru.",
    source: "Real Estate Appellate Tribunal",
    tags: ["RERA", "Real Estate", "Homebuyers", "Consumer Justice"]
  }
];

export const DOCUMENT_TEMPLATES = [
  {
    id: "rti",
    name: "RTI Application (Right to Information)",
    description: "File under Section 6(1) of RTI Act 2005 to obtain certified government records, fund expenditure, or service status.",
    fields: [
      { name: "applicantName", label: "Full Name of Applicant", type: "text", required: true },
      { name: "applicantAddress", label: "Postal Address with PIN Code", type: "textarea", required: true },
      { name: "applicantPhone", label: "Mobile Number", type: "tel", required: true },
      { name: "publicAuthority", label: "Name of Public Authority / Department", type: "text", placeholder: "e.g., Municipal Corporation of Delhi / PWD", required: true },
      { name: "informationSought", label: "Specific Information / Questions Sought", type: "textarea", placeholder: "1. Please provide certified copy of...\n2. What is the current status of file no...", required: true },
      { name: "periodOfInfo", label: "Period to which information relates", type: "text", placeholder: "e.g., April 2024 to March 2026", required: true },
      { name: "feeDetails", label: "RTI Application Fee Payment Mode", type: "select", options: ["IPO (Indian Postal Order) of ₹10", "Court Fee Stamp of ₹10", "Demand Draft / Banker's Cheque", "Cash receipt", "Exempt (BPL card holder)"], required: true }
    ]
  },
  {
    id: "consumer-complaint",
    name: "Consumer Complaint Notice",
    description: "Formal legal notice to vendor, manufacturer, or service provider before approaching District Consumer Commission.",
    fields: [
      { name: "complainantName", label: "Your Full Name", type: "text", required: true },
      { name: "complainantAddress", label: "Your Complete Address", type: "textarea", required: true },
      { name: "oppositePartyName", label: "Company / Shop / Provider Name", type: "text", required: true },
      { name: "oppositePartyAddress", label: "Registered Office Address of Company", type: "textarea", required: true },
      { name: "purchaseDate", label: "Date of Purchase / Transaction", type: "date", required: true },
      { name: "invoiceNumber", label: "Bill / Invoice / Order Number", type: "text", required: true },
      { name: "amountPaid", label: "Amount Paid (₹)", type: "number", required: true },
      { name: "defectDetails", label: "Details of Defect / Deficiency in Service", type: "textarea", required: true },
      { name: "reliefDemanded", label: "Relief Demanded (Refund / Replacement / Compensation)", type: "textarea", required: true },
      { name: "noticeDays", label: "Notice Response Period (Days)", type: "number", defaultValue: "15", required: true }
    ]
  },
  {
    id: "legal-notice",
    name: "General Legal Notice",
    description: "Standard statutory legal demand notice issued through an advocate or citizen for recovery of money, breach of contract, or trespass.",
    fields: [
      { name: "senderName", label: "Sender Name", type: "text", required: true },
      { name: "senderAddress", label: "Sender Address", type: "textarea", required: true },
      { name: "recipientName", label: "Recipient Name", type: "text", required: true },
      { name: "recipientAddress", label: "Recipient Address", type: "textarea", required: true },
      { name: "subjectLine", label: "Subject Line of Legal Notice", type: "text", placeholder: "e.g., Demand for Outstanding Payment of ₹...", required: true },
      { name: "disputeSummary", label: "Factual Chronology of Dispute", type: "textarea", required: true },
      { name: "demandSummary", label: "Specific Legal Demand / Redressal", type: "textarea", required: true },
      { name: "complianceDays", label: "Compliance Period (Days)", type: "number", defaultValue: "15", required: true }
    ]
  },
  {
    id: "police-complaint",
    name: "Police Complaint (Complaint Letter to SHO)",
    description: "Formal written complaint for lodging an FIR under Section 173 BNSS (Section 154 CrPC) for cognizable offenses.",
    fields: [
      { name: "complainantName", label: "Complainant Full Name", type: "text", required: true },
      { name: "guardianName", label: "Father's / Husband's / Mother's Name", type: "text", required: true },
      { name: "complainantAddress", label: "Complainant Address", type: "textarea", required: true },
      { name: "policeStation", label: "Name of Police Station & District", type: "text", placeholder: "e.g., Police Station Hauz Khas, South Delhi", required: true },
      { name: "incidentDateTime", label: "Date & Time of Incident", type: "datetime-local", required: true },
      { name: "incidentLocation", label: "Exact Location of Incident", type: "text", required: true },
      { name: "accusedDetails", label: "Name / Description of Accused Person(s)", type: "textarea", placeholder: "Known details or unknown persons description", required: true },
      { name: "incidentDescription", label: "Detailed Chronology of What Happened", type: "textarea", required: true },
      { name: "witnesses", label: "Witness Names and Contacts (if any)", type: "text" }
    ]
  },
  {
    id: "affidavit",
    name: "General Sworn Affidavit",
    description: "Self-declaration affidavit on non-judicial stamp paper attested by Notary Public or Oath Commissioner.",
    fields: [
      { name: "deponentName", label: "Deponent (Your) Full Name", type: "text", required: true },
      { name: "deponentAge", label: "Age in Years", type: "number", required: true },
      { name: "relationName", label: "Son/Daughter/Spouse of", type: "text", required: true },
      { name: "deponentAddress", label: "Permanent Residential Address", type: "textarea", required: true },
      { name: "purpose", label: "Purpose of Affidavit", type: "text", placeholder: "e.g., Name Change, Address Proof, Lost Certificate Declaration", required: true },
      { name: "statement1", label: "Affidavit Clause 1", type: "textarea", placeholder: "That I am a law abiding citizen of India residing at...", required: true },
      { name: "statement2", label: "Affidavit Clause 2", type: "textarea", placeholder: "That I declare and state that...", required: true },
      { name: "statement3", label: "Affidavit Clause 3", type: "textarea", placeholder: "That this affidavit is submitted for the purpose of...", required: false }
    ]
  }
];

export const AI_SUGGESTED_QUESTIONS = [
  "Can a traffic police officer seize my car keys or slap me on the road?",
  "What is the procedure to file an online Zero FIR for theft under BNS?",
  "How to get free legal counsel from DLSA if family income is low?",
  "Can a landlord deduct 100% of my security deposit without showing bills?",
  "What are the rights of an employee if company fires without notice pay?",
  "How can I report an online UPI financial fraud within the Golden Hour?",
  "What is the inheritance right of married daughters in ancestral property?",
  "How to file an RTI to know why my road repair is delayed?"
];
