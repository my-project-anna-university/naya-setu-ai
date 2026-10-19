/**
 * Comprehensive Indian Citizen Legal Scenarios Knowledge Engine
 * Covers real-world citizen encounters (Traffic police, mobile phone searches,
 * landlord lockouts, security deposit, unpaid salary, cyber fraud, etc.)
 * with direct legal verdicts, statutory section citations, and actionable remedies.
 */

export const legalScenarios = [
  // =========================================================================
  // SCENARIO 1: TRAFFIC POLICE STOP, KEY SEIZURE & PHYSICAL VIOLENCE
  // =========================================================================
  {
    id: 'traffic_key_seizure_or_slap',
    category: 'criminal',
    categoryTitle: 'Traffic Law & Police Misconduct',
    matcher: (q) => {
      const hasTraffic = q.includes('traffic') || q.includes('car') || q.includes('bike') || q.includes('vehicle') || q.includes('road') || q.includes('challan') || q.includes('drive') || q.includes('driver');
      const hasPolice = q.includes('police') || q.includes('cop') || q.includes('officer') || q.includes('constable') || q.includes('mamat');
      const hasAction = q.includes('key') || q.includes('keys') || q.includes('slap') || q.includes('hit') || q.includes('beat') || q.includes('snatch') || q.includes('tyre') || q.includes('puncture') || q.includes('abuse');
      return (hasTraffic || hasPolice) && (
        (q.includes('key') && (q.includes('seize') || q.includes('snatch') || q.includes('take') || q.includes('pull') || hasPolice)) ||
        (q.includes('slap') || q.includes('hit') || q.includes('beat')) ||
        (hasTraffic && hasAction)
      );
    },
    directAnswer: 'No, absolutely not. Under Indian law, a traffic police officer or constable has no legal authority to snatch or seize your vehicle keys from the ignition, deflate tyres, or physically assault (slap) you on the road under any circumstances.',
    applicableLaws: [
      'Section 130 & Section 132, Motor Vehicles Act, 1988 (Duty to produce documents on request)',
      'Rule 139, Central Motor Vehicles Rules, 1989 (Digital documents on DigiLocker / mParivahan are legally valid)',
      'Section 115, Bharatiya Nyaya Sanhita, 2023 / Section 323 IPC (Voluntarily causing hurt)',
      'Section 199, Bharatiya Nyaya Sanhita, 2023 / Section 166A IPC (Public servant disobeying direction under law)',
      'Section 351, Bharatiya Nyaya Sanhita, 2023 / Section 506 IPC (Criminal intimidation)',
      'Section 29, Police Act, 1861 (Penalties for neglect of duty or unwarranted personal violence by police)',
      'Article 21, Constitution of India (Fundamental Right to Life, Dignity & Bodily Security)'
    ],
    keyRights: [
      'No officer can snatch keys from the ignition or deflate tyres (MoRTH Circulars & High Court directives)',
      'Only Assistant Sub-Inspector (ASI) or Sub-Inspector (SI) and above can issue spot traffic challans (Constables cannot fine)',
      'Citizens have the right to show digital documents on DigiLocker or mParivahan without physical confiscation',
      'Citizens have the lawful right to video record police interactions in public spaces without obstructing duty'
    ],
    actions: [
      'Remain calm and do not retaliate physically. Politely state: "Officer, under Section 130 of the Motor Vehicles Act and MoRTH rules, snatching vehicle keys or physical force is unlawful."',
      'Note down the officer’s name, designation, buckle/belt badge number, traffic police chowki, and police vehicle registration number.',
      'Dial 112 (National Emergency) or 103 (Traffic Police Control Room) immediately from the spot to record the incident on the official police dispatch log.',
      'Submit a formal written complaint with video/audio evidence to the Deputy Commissioner of Police (DCP / ACP - Traffic) and the State Police Complaints Authority (SPCA).',
      'File an FIR at the local police station or submit a private criminal complaint before the Judicial Magistrate under Section 223 BNSS (Section 200 CrPC) for criminal assault by a public servant.'
    ],
    helplines: [
      'National Emergency Helpline: 112',
      'Traffic Police Control Room: 103 (Metro cities)',
      'National Human Rights Commission (NHRC): 14433',
      'NALSA Free Legal Aid Helpline: 15100'
    ],
    fullAnswer: `### ⚖️ Legal Advisory: Traffic Police Encounters & Citizen Rights

**Direct Legal Answer:** **No, absolutely not.** Under Indian law, a police or traffic police officer has **no legal authority** to snatch or seize your vehicle keys from the ignition, deflate your tyres, or physically assault (slap) you on the road under any circumstances.

---

#### 1. Detailed Legal Analysis of Your Scenario

* **Issue 1: Snatching Car or Bike Keys from the Ignition**
  Under **Section 130 of the Motor Vehicles Act, 1988**, a driver is only required to produce valid documents (Driving Licence, Registration Certificate, Insurance, and PUC) upon demand by an authorized police officer in uniform. No section of the Motor Vehicles Act or Central Motor Vehicles Rules empowers an officer to snatch ignition keys or deflate tyres. Both the **Ministry of Road Transport & Highways (MoRTH)** and multiple High Courts have explicitly held that seizing keys from moving or stopped vehicles is unlawful and endangers road safety.

* **Issue 2: Physical Assault / Slapping by a Police Officer**
  Using physical violence, slapping, or verbal abuse on the road is a criminal offence under the **Bharatiya Nyaya Sanhita, 2023 (BNS)**:
  * **Section 115 BNS (Section 323 IPC):** Voluntarily causing hurt (punishable with imprisonment up to 1 year or fine).
  * **Section 199 BNS (Section 166A IPC):** Public servant disobeying direction under law with intent to cause injury.
  * **Section 351 BNS (Section 506 IPC):** Criminal intimidation.
  * **Section 29, Police Act, 1861:** Penalties for neglect of duty or unwarranted personal violence towards any person.
  * **Article 21 of the Constitution:** Gross violation of the fundamental right to bodily autonomy and dignity.

* **Issue 3: Who Has the Authority to Issue a Challan?**
  Only a traffic police officer of the rank of **Assistant Sub-Inspector (ASI) or Sub-Inspector (SI)** and above (wearing one or more stars) has the legal authority to issue a compoundable spot traffic challan. **Constables and Home Guards are only authorized to manage traffic flow or record violations**—they cannot demand spot cash fines or seize documents.

---

#### 2. Applicable Indian Laws & Statutory Provisions
* **Section 130 & Section 132, Motor Vehicles Act, 1988** (Duty to produce driving licence and stop vehicle on request)
* **Rule 139, Central Motor Vehicles Rules, 1989** (Digital documents on DigiLocker / mParivahan are legally valid physical substitutes)
* **Section 115 & Section 199, Bharatiya Nyaya Sanhita, 2023 (BNS)** (Criminal punishment for hurt and public servant misconduct)
* **Section 29, Police Act, 1861** (Punishment for unwarranted physical violence by police on duty)
* **Article 21, Constitution of India** (Fundamental Right to Life, Dignity & Bodily Security)

---

#### 3. Your Enforceable Rights as a Citizen During a Traffic Stop
* **Right to Identify the Officer:** You have the legal right to ask the officer for their name, buckle/belt number, and identity card. If they are not wearing a visible name tag, you can note down their vehicle registration number.
* **Right to Digital Documents:** Under MoRTH circulars, presenting valid digital documents on **DigiLocker** or **mParivahan** is 100% legally recognized. Police cannot insist on physical papers.
* **Right to Record Video in Public:** Citizens have the right to record police officers discharging official duties in a public space, provided you do not physically obstruct traffic or their lawful duty.
* **Right to an Official E-Challan Receipt:** Never hand over cash without receiving an instant printed or digital government e-challan receipt.

---

#### 4. Step-by-Step Remedies & Immediate Action Plan
1. **Remain Calm & Do Not Retaliate Physically:** Politely state: *"Officer, as per Section 130 of the Motor Vehicles Act and MoRTH directives, snatching vehicle keys or physical force is illegal."*
2. **Collect Evidence:** Immediately note down the officer's name tag, buckle/badge number, police station/traffic chowki name, and date/time/location. If safe, record video or audio.
3. **Emergency Call:** Dial **112** (National Emergency) or **103** (Traffic Control Room) from the spot to report police physical aggression or illegal key seizure.
4. **Lodge Formal Complaint:** Submit a written complaint with attached evidence to the **DCP/ACP (Traffic)** of your city and file an online complaint with the **State Police Complaints Authority (SPCA)**.
5. **Criminal Prosecution:** File an FIR at the local police station or a private criminal complaint before the Judicial Magistrate under **Section 223 BNSS (Section 200 CrPC)** against the officer for criminal assault.

---

#### 5. Official Dispute Redressal Helplines & Authorities
* 📞 **National Emergency Number:** 112
* 📞 **Traffic Police Control Room:** 103 (Metro cities)
* 📞 **National Human Rights Commission (NHRC):** 14433
* 📞 **NALSA Free Legal Aid Helpline:** 15100

---
💡 *Need to lodge a formal complaint against police misconduct? You can generate an official Police Misconduct Complaint letter in 1-click using the **NyayaSetu Document Drafter**.*`
  },

  // =========================================================================
  // SCENARIO 2: POLICE REFUSAL TO FILE FIR & ZERO FIR
  // =========================================================================
  {
    id: 'police_refusal_fir',
    category: 'criminal',
    categoryTitle: 'Criminal Law & Police Procedures',
    matcher: (q) => {
      const hasPolice = q.includes('police') || q.includes('station') || q.includes('sho') || q.includes('chowki') || q.includes('cop');
      const hasRefusal = q.includes('refuse') || q.includes('not registering') || q.includes('wont take') || q.includes('denied') || q.includes('reject') || q.includes('not taking') || q.includes('wont file');
      const hasFIR = q.includes('fir') || q.includes('complaint') || q.includes('report') || q.includes('case');
      return hasRefusal && (hasFIR || (hasPolice && (q.includes('fir') || q.includes('complaint'))));
    },
    directAnswer: 'It is strictly illegal for police to refuse to register an FIR for a cognizable offence. Under Section 173 BNSS and the Supreme Court Lalita Kumari judgment, registration of an FIR is mandatory, and refusal by an SHO is punishable with imprisonment up to 2 years.',
    applicableLaws: [
      'Section 173, Bharatiya Nagarik Suraksha Sanhita, 2023 / Section 154 CrPC (Mandatory registration of FIR)',
      'Section 173(1) BNSS (Statutory right to file a Zero FIR irrespective of territorial jurisdiction)',
      'Section 199, Bharatiya Nyaya Sanhita, 2023 / Section 166A(c) IPC (Rigorous imprisonment up to 2 years for officer refusing FIR)',
      'Section 173(3) BNSS / Section 154(3) CrPC (Direct written complaint to Superintendent of Police)',
      'Section 175(3) BNSS / Section 156(3) CrPC (Magistrate order directing police to investigate)'
    ],
    keyRights: [
      'Mandatory FIR registration for any cognizable offence (theft, assault, cybercrime, robbery, harassment)',
      'Right to Zero FIR: Any police station must register the complaint and transfer it to the jurisdictional station',
      'Right to receive a free, signed copy of the FIR immediately upon registration'
    ],
    actions: [
      'Submit written complaint in duplicate and demand a stamped receiving acknowledgment with Daily Diary (DD) number.',
      'If the SHO refuses, send the written complaint by Registered Post / Speed Post to the Superintendent of Police (SP / DCP) under Section 173(3) BNSS.',
      'If no action within 15 days, file an application before the Judicial Magistrate under Section 175(3) BNSS (Section 156(3) CrPC) seeking an order directing the police to register FIR and investigate.',
      'Mention Section 199 BNS to the officer: police officers refusing cognizable FIRs face up to 2 years imprisonment.'
    ],
    helplines: [
      'National Emergency Helpline: 112',
      'Police Complaints Authority (SPCA)',
      'NALSA Free Legal Aid: 15100'
    ],
    fullAnswer: `### ⚖️ Legal Advisory: Police Refusal to File FIR & Zero FIR Remedies

**Direct Legal Answer:** **It is strictly illegal for police to refuse to register an FIR for a cognizable offence.** Under the Supreme Court Constitution Bench ruling in *Lalita Kumari v. Govt of UP (2014)* and Section 173 BNSS, registration of an FIR is mandatory, and an officer refusing to do so is liable for criminal prosecution.

---

#### 1. Detailed Legal Analysis of Your Scenario

* **Mandatory Registration of FIR (Lalita Kumari Ruling)**
  The Supreme Court ruled that whenever information discloses the commission of a cognizable offence (such as theft, robbery, fraud, physical assault, or cybercrime), the police officer **has no discretion to conduct preliminary inquiries or refuse registration**. The FIR must be registered immediately.

* **Concept of "Zero FIR" (Section 173(1) BNSS)**
  Police stations often turn citizens away citing "not our jurisdiction / border area". This is illegal. Under the **Zero FIR protocol** (now codified in **Section 173(1) BNSS**), **any police station in India is obligated to register the FIR** under number "0" and immediately transfer the case files to the competent jurisdictional police station.

* **Punishment on Police Officers Refusing FIRs**
  Under **Section 199 of the Bharatiya Nyaya Sanhita, 2023 (Section 166A(c) IPC)**, any police officer who fails or refuses to record any information given to them regarding a cognizable offence shall be punished with **rigorous imprisonment for a term between 6 months to 2 years, plus a fine**.

---

#### 2. Applicable Indian Laws & Statutory Provisions
* **Section 173, Bharatiya Nagarik Suraksha Sanhita, 2023 (BNSS)** (Information in cognizable cases & Zero FIR)
* **Section 199, Bharatiya Nyaya Sanhita, 2023 (BNS)** (Criminal punishment on public servants refusing lawful duty)
* **Supreme Court Constitution Bench Judgment:** *Lalita Kumari v. Govt of UP (2014)*

---

#### 3. Step-by-Step Remedies: If Police Refuse Your FIR
1. **Demand Acknowledgment:** Submit your complaint in writing in duplicate. Insist on a stamped acknowledgment copy with the **Daily Diary (DD) / General Diary (GD) number**.
2. **Escalate to Superintendent of Police (SP / DCP):** Under **Section 173(3) BNSS**, send your written complaint along with the refusal details to the district Superintendent of Police (SP) or DCP by Registered Post with Acknowledgment Due.
3. **Approach the Judicial Magistrate:** If the police still fail to investigate, file an application under **Section 175(3) BNSS (formerly Section 156(3) CrPC)** before the Judicial Magistrate. The Magistrate will order the police to immediately register the FIR and report progress to the court.
4. **Complaint Against the Officer:** File a formal disciplinary complaint against the Station House Officer (SHO) before the **State Police Complaints Authority (SPCA)**.

---

#### 4. Official Helplines
* 📞 **National Emergency Number:** 112
* 📞 **NHRC Citizen Grievance:** 14433
* 📞 **NALSA Free Legal Aid Helpline:** 15100`
  },

  // =========================================================================
  // SCENARIO 3: POLICE PHONE SEARCH & DIGITAL PRIVACY
  // =========================================================================
  {
    id: 'police_phone_search',
    category: 'criminal',
    categoryTitle: 'Police Powers & Digital Privacy Rights',
    matcher: (q) => {
      const hasPolice = q.includes('police') || q.includes('cop') || q.includes('officer');
      const hasPhone = q.includes('phone') || q.includes('mobile') || q.includes('whatsapp') || q.includes('gallery') || q.includes('chat') || q.includes('device');
      const hasSearchAction = q.includes('search') || q.includes('check') || q.includes('unlock') || q.includes('browse') || q.includes('look into') || q.includes('open') || q.includes('read') || q.includes('see');
      return hasPolice && hasPhone && hasSearchAction && !q.includes('stolen') && !q.includes('theft') && !q.includes('lost') && !q.includes('refuse');
    },
    directAnswer: 'No. Police officers cannot randomly stop citizens on the road or checkposts and compel them to unlock, search, or browse their smartphones or private WhatsApp chats without a valid search warrant or direct recorded nexus to an ongoing criminal investigation.',
    applicableLaws: [
      'Article 20(3), Constitution of India (Protection Against Compelled Self-Incrimination)',
      'Article 21, Constitution of India (Fundamental Right to Privacy - Justice K.S. Puttaswamy v. Union of India, 2017)',
      'Section 105, Bharatiya Nagarik Suraksha Sanhita, 2023 / Section 100 CrPC (Search procedure & seizure memo)',
      'Section 43 & 66, Information Technology Act, 2000 (Unauthorized access to computer systems)'
    ],
    keyRights: [
      'Right against arbitrary digital search without a written warrant or formal Section 94 CrPC / Section 97 BNSS summons',
      'Right to refuse unlocking your private device during a routine traffic stop or roadside checking',
      'Right to demand independent witnesses (Panchas) and a seizure memo if phone is confiscated'
    ],
    actions: [
      'Politely inquire: "Officer, are you conducting a search under a specific registered FIR or warrant? Please state the grounds."',
      'State your constitutional right: "My smartphone contains privileged personal and banking data protected under Article 21 and Supreme Court privacy guidelines."',
      'If the officer forcibly seizes the device, demand a written Seizure Memo (Panchnama) signed by two independent witnesses as mandated by Section 105 BNSS.',
      'Report illegal mobile searches to the Commissioner of Police / State Police Complaints Authority.'
    ],
    helplines: [
      'National Emergency Helpline: 112',
      'NHRC Human Rights Violation: 14433',
      'NALSA Free Legal Aid: 15100'
    ],
    fullAnswer: `### ⚖️ Legal Advisory: Police Mobile Phone Searches & Digital Privacy

**Direct Legal Answer:** **No.** Police officers cannot randomly stop citizens on the road or at checkposts and compel them to unlock, search, or browse their smartphones or private WhatsApp chats without a valid search warrant or direct recorded nexus to an ongoing criminal FIR.

---

#### 1. Detailed Legal Analysis of Your Scenario

* **Constitutional Protection Against Random Digital Searches**
  In the landmark 9-judge Constitution Bench ruling in **Justice K.S. Puttaswamy v. Union of India (2017)**, the Supreme Court ruled that privacy is a Fundamental Right under **Article 21**. A smartphone is an intimate digital extension of a citizen's life containing financial data, personal communications, and biometric credentials. Random roadside checking of phones is unconstitutional.

* **Right Against Self-Incrimination (Article 20(3))**
  Under **Article 20(3) of the Constitution**, no person can be compelled to be a witness against themselves. Forcing a citizen to divulge passcodes or unlock biometric authentication without a judicial order violates this core constitutional guarantee.

* **Statutory Procedure for Seizure (Section 105 BNSS)**
  For police to legally seize an electronic device, they must comply with **Section 105 of the Bharatiya Nagarik Suraksha Sanhita, 2023 (BNSS)**:
  1. The search must be connected to a registered cognizable crime.
  2. The process must be recorded, preferably through audio-video electronic means.
  3. A formal **Seizure Memo (Panchnama)** must be prepared and signed by two independent witnesses, and a copy handed over to you immediately.

---

#### 2. Applicable Indian Laws & Statutory Provisions
* **Article 20(3) & Article 21, Constitution of India** (Protection against self-incrimination & right to privacy)
* **Section 105, Bharatiya Nagarik Suraksha Sanhita, 2023 (BNSS)** (Recorded search and electronic seizure protocol)
* **Section 43 & Section 66, Information Technology Act, 2000** (Unauthorized access and privacy violation)

---

#### 3. Step-by-Step Action Plan & Remedies
1. **Politely Inquire:** Ask calmly: *"Officer, under what registered FIR or statutory search order are you requesting access to my phone?"*
2. **Refuse Arbitrary Unlocking:** State politely: *"Under Supreme Court privacy rulings, I am not required to unlock my private communications during a routine check."*
3. **Insist on Seizure Memo:** If the officer insists on seizing the device, do not resist physically. Demand an official written **Seizure Memo (Panchnama)** signed by independent witnesses on the spot.
4. **Escalate to Authorities:** File a formal written complaint for unlawful search with the **Police Commissioner / Superintendent of Police (SP)** and the **State Police Complaints Authority (SPCA)**.

---

#### 4. Official Helplines & Redressal
* 📞 **National Emergency Number:** 112
* 📞 **National Human Rights Commission (NHRC):** 14433
* 📞 **NALSA Free Legal Aid:** 15100`
  },

  // =========================================================================
  // SCENARIO 4: UNLAWFUL TENANCY LOCKOUT & UTILITY DISCONNECTION
  // =========================================================================
  {
    id: 'landlord_lockout_or_utility_cut',
    category: 'property',
    categoryTitle: 'Property & Tenancy Law',
    matcher: (q) => {
      const hasLandlord = q.includes('landlord') || q.includes('owner') || q.includes('house owner') || q.includes('pg owner');
      const hasAction = q.includes('lock') || q.includes('locked out') || q.includes('cut electricity') || q.includes('disconnect water') || q.includes('cut power') || q.includes('throw out') || q.includes('thrown out') || q.includes('throw luggage') || q.includes('evict without notice');
      return hasLandlord && hasAction;
    },
    directAnswer: 'No. A landlord has no legal authority to forcefully lock out a tenant, throw their belongings out, or disconnect essential utilities (electricity and water), even if rent is overdue. Eviction requires due process through a court or rent tribunal decree.',
    applicableLaws: [
      'Section 108, Transfer of Property Act, 1882 (Right to peaceful enjoyment & essential utilities)',
      'Model Tenancy Act, 2021 (Strict prohibition on landlord disconnecting essential supplies)',
      'Section 6, Specific Relief Act, 1963 (Summary suit for immediate restoration of possession within 6 months)',
      'Section 329, Bharatiya Nyaya Sanhita, 2023 / Section 441 IPC (Criminal trespass by landlord)'
    ],
    keyRights: [
      'Landlord cannot cut electricity, water supply, or elevator access under any circumstances',
      'Landlord cannot enter premises without prior 24-hour written notice',
      'Tenant cannot be evicted by physical force without a valid decree from Rent Authority / Civil Court'
    ],
    actions: [
      'Dial 112 immediately to report illegal lockout or criminal trespass. Police will mandate restoration of access.',
      'File an urgent petition under Section 6 of the Specific Relief Act, 1963 before the Civil Court for restoration of possession.',
      'File a complaint before the Rent Authority / Rent Court under the Model Tenancy Act for heavy monetary compensation against the landlord.',
      'Send a formal legal notice demanding restoration of utilities and compensation for harassment.'
    ],
    helplines: [
      'National Emergency Helpline: 112',
      'National Consumer Helpline: 1915',
      'NALSA Free Legal Aid: 15100'
    ],
    fullAnswer: `### ⚖️ Legal Advisory: Unlawful Landlord Lockout & Utility Disconnection

**Direct Legal Answer:** **No.** Under Indian law, a landlord has **no legal right** to forcefully lock out a tenant, throw their belongings onto the street, or cut off essential utilities (electricity and water), even if rent is overdue or notice has expired.

---

#### 1. Detailed Legal Analysis of Your Scenario

* **Prohibition on Forceful Dispossession**
  Under Indian tenancy jurisprudence affirmed repeatedly by the Supreme Court (*Midnapore Zamindary Co. v. Naresh Narayan Roy*), **even a trespasser or overstaying tenant cannot be dispossessed by force without due process of law**. The landlord must file an eviction petition before the Rent Court or Civil Judge. Self-help evictions are completely illegal.

* **Strict Ban on Disconnecting Essential Supplies**
  Under the **Model Tenancy Act, 2021** and state Rent Control legislations, a landlord cannot withhold or disconnect essential supplies (drinking water, electricity, passage, or sewage) on any ground whatsoever, including non-payment of rent. If disconnected, the Rent Authority can impose heavy financial penalties on the landlord.

* **Criminal Trespass by Landlord (Section 329 BNS)**
  If a landlord enters the leased premises without permission, changes the locks, or removes tenant property, they commit **Criminal Trespass (Section 329 BNS / Section 441 IPC)** and **Theft / Criminal Misappropriation (Section 303 / 314 BNS)**.

---

#### 2. Applicable Indian Laws & Statutory Provisions
* **Model Tenancy Act, 2021** (Protection of tenant rights and restriction on utility disconnection)
* **Section 108(c), Transfer of Property Act, 1882** (Covenant for quiet enjoyment of the premises)
* **Section 6, Specific Relief Act, 1963** (Suit by person dispossessed of immovable property within 6 months)
* **Section 329, Bharatiya Nyaya Sanhita, 2023 (BNS)** (Criminal trespass)

---

#### 3. Step-by-Step Remedies & Immediate Action Plan
1. **Call 112 Immediately:** Report that your landlord is attempting an illegal lockout or cutting off basic utilities. The police PCR will arrive and require the landlord to restore entry pending due process.
2. **Issue an Immediate Legal Demand Notice:** Send a registered notice through an advocate or via the **NyayaSetu Document Drafter** demanding immediate restoration of utilities within 24 hours.
3. **Approach the Rent Authority / Rent Court:** File an urgent petition under the state Tenancy Act for restoration of utilities and imposition of damages.
4. **File Under Section 6 Specific Relief Act:** If locked out, file a summary suit before the Civil Court within 6 months. The court will order immediate restoration of possession without examining underlying ownership disputes.

---

#### 4. Official Helplines
* 📞 **National Emergency Number:** 112
* 📞 **National Consumer Helpline:** 1915
* 📞 **NALSA Free Legal Aid:** 15100`
  },

  // =========================================================================
  // SCENARIO 5: UNPAID SALARY & WITHHELD RELIEVING LETTER
  // =========================================================================
  {
    id: 'employer_unpaid_salary_or_relieving_letter',
    category: 'labor',
    categoryTitle: 'Labor & Employment Rights',
    matcher: (q) => {
      const hasSalary = q.includes('salary') || q.includes('wages') || q.includes('fnf') || q.includes('full and final') || q.includes('relieving letter') || q.includes('experience letter') || q.includes('experience certificate');
      const hasDispute = q.includes('employer') || q.includes('company') || q.includes('boss') || q.includes('hr') || q.includes('withheld') || q.includes('not paying') || q.includes('refuse') || q.includes('resigned') || q.includes('resignation');
      return hasSalary && hasDispute;
    },
    directAnswer: 'An employer cannot legally withhold earned wages, Full & Final settlement, or mandatory relieving/experience letters upon resignation. Withholding relieving certificates is an illegal restraint of employment under Section 27 of the Contract Act.',
    applicableLaws: [
      'Code on Wages, 2019 (Sections 15 & 17 - Mandatory payment of wages within 2 working days of resignation)',
      'Payment of Wages Act, 1936 (Prohibition of unauthorized deductions)',
      'Section 27, Indian Contract Act, 1872 (Agreements in restraint of lawful profession/trade are void)',
      'Industrial Disputes Act, 1947 (Section 33C - Recovery of money due from an employer)'
    ],
    keyRights: [
      'Wages must be disbursed within 2 working days of resignation/removal (Section 17 Code on Wages)',
      'Employer cannot hold back relieving letter or experience certificate as a blackmail or coercion tactic',
      'Gratuity is mandatory after 5 years continuous service and payable within 30 days of leaving'
    ],
    actions: [
      'Send a formal demand email to HR and payroll referencing Section 17 of the Code on Wages, 2019.',
      'Issue an official Advocate Legal Notice giving 15 days to disburse pending dues and release service documents.',
      'File an online wage grievance on the Ministry of Labour "Samadhan" / "Shram Suvidha" portal (shramsuvidha.gov.in).',
      'File a claim under Section 33C(2) of the Industrial Disputes Act before the regional Labour Court / Labour Commissioner.'
    ],
    helplines: [
      'Chief Labour Commissioner Grievance Desk: clc.gov.in',
      'EPFO Toll-Free Helpline: 1800 118 005',
      'Shram Suvidha Portal: shramsuvidha.gov.in',
      'NALSA Free Legal Aid: 15100'
    ],
    fullAnswer: `### ⚖️ Legal Advisory: Unpaid Salary & Withheld Relieving Letter

**Direct Legal Answer:** **An employer cannot legally withhold earned wages, Full & Final (F&F) settlement, or mandatory relieving/experience letters upon resignation.** Withholding relieving documents to prevent a worker from taking another job is an illegal restraint of trade under **Section 27 of the Indian Contract Act, 1872**.

---

#### 1. Detailed Legal Analysis of Your Scenario

* **Mandatory Statutory Wage Payment Timelines**
  Under **Section 17(2) of the Code on Wages, 2019**, when an employee resigns or is terminated, **all wages and dues must be paid within two working days** of the employee's last working day. Any arbitrary delay or deduction beyond statutory limits is punishable with fines and recovery proceedings.

* **Illegality of Withholding Relieving and Experience Certificates**
  Courts across India (including Delhi High Court and Bombay High Court) have consistently held that an employer **has no legal right to withhold relieving letters or service certificates** once the employee has resigned and served their notice period (or offered notice buyout as per contract). A company cannot use service certificates as a leverage mechanism to extract disputed amounts.

* **Recovery of Gratuity and Provident Fund**
  Under the **Payment of Gratuity Act, 1972**, gratuity is mandatory for employees who completed 5 years of service and must be paid within 30 days. Non-payment attracts mandatory simple interest. If PF was deducted from your salary but not deposited into EPFO, the directors are liable for criminal breach of trust.

---

#### 2. Applicable Indian Laws & Statutory Provisions
* **Code on Wages, 2019 (Sections 15 & 17)** (Statutory wage payment rules & 2-day settlement mandate)
* **Section 27, Indian Contract Act, 1872** (Agreements in restraint of trade/profession are void)
* **Payment of Wages Act, 1936 & Industrial Disputes Act, 1947 (Section 33C)** (Recovery of employment dues)
* **Payment of Gratuity Act, 1972 (Section 7)** (Time limit and interest on delayed gratuity)

---

#### 3. Step-by-Step Action Plan & Remedies
1. **Final Written Demand:** Send a formal email to HR, Finance, and Directors with a detailed breakdown of unpaid salary, days worked, and notice served. Cite **Section 17 Code on Wages, 2019**.
2. **Issue Formal Legal Notice:** If unresolved within 7 days, issue a formal 15-day Legal Notice through registered post or email using the **NyayaSetu Document Drafter**.
3. **Lodge Grievance with Labour Commissioner:** File an official complaint on the Ministry of Labour portal (**shramsuvidha.gov.in**) or approach the District Labour Conciliation Officer. The officer will summon management for a conciliation hearing.
4. **File Claim Under Section 33C(2):** File a recovery claim before the competent Labour Court for recovery of all unpaid dues with interest and damages.

---

#### 4. Official Helplines
* 📞 **Ministry of Labour Shram Suvidha Desk:** shramsuvidha.gov.in
* 📞 **EPFO Grievance Portal:** epfigms.gov.in
* 📞 **Chief Labour Commissioner Helpline:** 1800 118 005
* 📞 **NALSA Free Legal Aid:** 15100`
  },

  // =========================================================================
  // SCENARIO 6: CYBER UPI & FINANCIAL BANK FRAUD RECOVERY
  // =========================================================================
  {
    id: 'cyber_upi_banking_fraud',
    category: 'cyber',
    categoryTitle: 'Cyber Crime & Financial Fraud',
    matcher: (q) => {
      const hasUpi = q.includes('upi') || q.includes('gpay') || q.includes('phonepe') || q.includes('paytm') || q.includes('bank') || q.includes('account') || q.includes('otp') || q.includes('wallet') || q.includes('money');
      const hasFraud = q.includes('stolen') || q.includes('debited') || q.includes('withdrew') || q.includes('deducted') || q.includes('lost') || q.includes('scam') || q.includes('fraud') || q.includes('hacked') || q.includes('without otp') || q.includes('unauthorized') || q.includes('cheated');
      return hasUpi && hasFraud && !q.includes('loan app') && !q.includes('blackmail');
    },
    directAnswer: 'Act immediately within the "Golden Hour" (first 2-3 hours) by dialing 1930 or lodging a complaint at cybercrime.gov.in to freeze the money in transit across payment gateways. Under RBI Circulars, reporting unauthorized transactions within 72 hours grants Zero Customer Liability.',
    applicableLaws: [
      'Section 66D, Information Technology Act, 2000 (Cheating by personation using computer resource)',
      'RBI Customer Protection Circular DBR.No.Leg.BC.78/09.07.005/2017-18 (Zero Customer Liability for unauthorized electronic transactions)',
      'Section 318, Bharatiya Nyaya Sanhita, 2023 / Section 420 IPC (Cheating and dishonestly inducing delivery of property)',
      'National Cyber Financial Fraud Reporting & Management System (1930 Helpline Protocol)'
    ],
    keyRights: [
      'Golden Hour Protocol: Calling 1930 allows immediate freezing of recipient mule bank accounts before withdrawal',
      'Zero Customer Liability: Full refund from bank if third-party fraud is reported within 3 working days',
      'Right to Zero FIR at any cyber police station irrespective of where the cybercriminal is located'
    ],
    actions: [
      'Immediately dial 1930 (National Cyber Financial Fraud Helpline) and provide transaction UTR / bank reference number.',
      'Log into cybercrime.gov.in and register an official cyber financial complaint attaching transaction screenshots.',
      'Contact your bank immediately in writing within 72 hours to block cards/net banking and submit a formal dispute form under RBI Zero Liability rules.',
      'If the bank does not resolve or credit the amount within 30 days, escalate to the RBI Banking Ombudsman (cms.rbi.org.in).'
    ],
    helplines: [
      'National Cyber Financial Fraud Helpline: 1930',
      'National Cybercrime Reporting Portal: cybercrime.gov.in',
      'RBI Banking Ombudsman: cms.rbi.org.in',
      'National Emergency Helpline: 112'
    ],
    fullAnswer: `### ⚖️ Legal Advisory: Online UPI & Financial Bank Fraud Recovery Protocol

**Direct Legal Answer:** **Act immediately within the "Golden Hour" (first 2 to 3 hours).** Dial **1930** (National Cyber Financial Fraud Reporting System) or lodge a complaint at **cybercrime.gov.in** to freeze funds in transit across payment gateways. Under **RBI Customer Protection Guidelines**, reporting unauthorized transactions within 3 working days ensures **Zero Customer Liability**; your bank is obligated to reverse the loss.

---

#### 1. Detailed Legal Analysis of Your Scenario

* **The 1930 "Golden Hour" Freeze Protocol**
  When money is stolen via UPI, NetBanking, or card skimming, cybercriminals move it through layers of "mule accounts" before ATM withdrawal. Under the **Citizen Financial Cyber Fraud Reporting & Management System (CFCFRMS)** operated by the Ministry of Home Affairs and I4C:
  * Calling **1930** immediately triggers automatic transaction freeze holds on recipient intermediary accounts.
  * Over ₹1,200 Crores of stolen citizen funds have been frozen and recovered through this protocol.

* **RBI Zero Customer Liability Guidelines**
  Under **RBI Circular DBR.No.Leg.BC.78/09.07.005/2017-18**:
  * **Zero Liability:** If an unauthorized electronic transaction occurs due to third-party breach and the customer notifies the bank **within 3 working days**, the customer has **ZERO liability**.
  * **Limited Liability:** If reported between 4 to 7 working days, customer liability is capped at ₹5,000 to ₹10,000.
  * The bank must credit the disputed amount (shadow reversal) to the customer’s account within **10 working days**.

---

#### 2. Applicable Indian Laws & Statutory Provisions
* **Section 66D, Information Technology Act, 2000** (Cheating by impersonation through digital resources)
* **RBI Customer Protection Circular (2017)** (Mandatory zero customer liability timelines)
* **Section 318, Bharatiya Nyaya Sanhita, 2023 (BNS)** (Criminal cheating and fraud)

---

#### 3. Step-by-Step Action Plan: What to Do Right Now
1. **Dial 1930 Immediately:** State the debit timestamp, transaction UTR / reference number, sender bank, and recipient UPI handle.
2. **Lodge Official Cyber Complaint:** Visit **cybercrime.gov.in**, file an official complaint under "Financial Fraud", and save your **Acknowledgment Number**.
3. **Notify Bank in Writing Within 72 Hours:** Visit your bank branch or send an email to the Nodal Grievance Officer attaching the transaction statement and Cyber Acknowledgment. Explicitly request **Zero Liability protection under RBI Circular 2017**.
4. **Escalate to Banking Ombudsman:** If your bank fails to credit the amount within 30 days or rejects your claim arbitrarily, file a complaint on the **RBI CMS Portal (cms.rbi.org.in)**.

---

#### 4. Official Dispute Redressal Helplines
* 📞 **National Cyber Crime Helpline:** 1930
* 📞 **Portal:** cybercrime.gov.in
* 📞 **RBI Banking Ombudsman:** cms.rbi.org.in`
  },

  // =========================================================================
  // SCENARIO 7: OVERCHARGING ABOVE MRP & UNFAIR SERVICE CHARGES
  // =========================================================================
  {
    id: 'mrp_overcharging_restaurant_service_charge',
    category: 'consumer',
    categoryTitle: 'Consumer Rights & Legal Metrology',
    matcher: (q) => {
      const hasMrp = q.includes('mrp') || q.includes('service charge') || q.includes('cooling charge') || q.includes('water bottle price') || q.includes('charging above');
      const hasContext = q.includes('shop') || q.includes('shopkeeper') || q.includes('restaurant') || q.includes('hotel') || q.includes('bill') || q.includes('charge');
      return hasMrp && hasContext;
    },
    directAnswer: 'Charging even ₹1 above the Maximum Retail Price (MRP) for packaged goods is strictly illegal under Section 36 of the Legal Metrology Act, 2009. Adding a compulsory service charge in restaurant bills was declared an illegal unfair trade practice by the CCPA.',
    applicableLaws: [
      'Section 36, Legal Metrology Act, 2009 (Penalty for selling packaged commodities above MRP up to ₹1,00,000)',
      'Legal Metrology (Packaged Commodities) Rules, 2011 (Mandatory declaration of retail sale price inclusive of all taxes)',
      'Central Consumer Protection Authority (CCPA) Guidelines (July 4, 2022 - Prevention of Unfair Trade Practices and Protection of Consumer Rights Regarding Levying of Service Charge in Hotels/Restaurants)',
      'Section 2(47) & Section 35, Consumer Protection Act, 2019 (Unfair trade practice redressal)'
    ],
    keyRights: [
      'MRP is inclusive of all taxes; sellers cannot add cooling charges, refrigerator charges, or municipal cess',
      'Restaurant service charge is voluntary/discretionary; no restaurant can force it or make entry conditional upon paying it',
      'Right to full refund of excess amount plus damages through National Consumer Helpline or e-Daakhil'
    ],
    actions: [
      'Ask the shopkeeper/restaurant manager to remove the excess charge or service charge citing Legal Metrology Act & CCPA guidelines.',
      'If they refuse, retain the printed bill/receipt showing item price and MRP.',
      'Call 1915 or send SMS to 8800001915 (National Consumer Helpline) to register an instant complaint.',
      'File an online complaint with the District Legal Metrology Inspector or via e-Daakhil (edaakhil.nic.in) for statutory compensation.'
    ],
    helplines: [
      'National Consumer Helpline: 1915',
      'NCH SMS Grievance: 8800001915',
      'Web Portal: consumerhelpline.gov.in',
      'e-Daakhil Portal: edaakhil.nic.in'
    ],
    fullAnswer: `### ⚖️ Legal Advisory: Overcharging Above MRP & Restaurant Service Charges

**Direct Legal Answer:** **Charging even ₹1 above the Maximum Retail Price (MRP) for packaged goods is strictly illegal** under Section 36 of the Legal Metrology Act, 2009. Adding a compulsory service charge in restaurant bills was declared an illegal unfair trade practice by the Central Consumer Protection Authority (CCPA).

---

#### 1. Detailed Legal Analysis of Your Scenario

* **Overcharging Above MRP (Packaged Goods & Cooling Charges)**
  Under the **Legal Metrology (Packaged Commodities) Rules, 2011**, MRP is the maximum retail price inclusive of all taxes. Shopkeepers often charge ₹5–₹20 extra as "refrigeration / cooling charges" for cold drinks, water bottles, or ice creams. The Supreme Court and National Consumer Commission (NCDRC) have ruled that **cooling charges are completely illegal**. Under **Section 36 of the Legal Metrology Act, 2009**, offenders face a fine of ₹25,000 for the first offence, ₹50,000 for second, and up to ₹1,00,000 or imprisonment for subsequent offences.

* **Mandatory Restaurant Service Charges are Illegal**
  On July 4, 2022, the **Central Consumer Protection Authority (CCPA)** issued binding guidelines stating:
  1. No hotel or restaurant shall add service charge automatically or by default in the food bill.
  2. Service charge cannot be collected under any other name.
  3. No hotel or restaurant shall force a consumer to pay service charge or restrict entry/services based on refusal to pay.
  4. Service charges are strictly **voluntary and discretionary** at the customer's choice.

---

#### 2. Applicable Indian Laws & Statutory Provisions
* **Section 36, Legal Metrology Act, 2009** (Strict penalties for selling above MRP)
* **CCPA Guidelines on Service Charge (2022)** (Prohibition of service charges in hotels/restaurants)
* **Section 2(47), Consumer Protection Act, 2019** (Unfair trade practices definition & remedies)

---

#### 3. Step-by-Step Remedies & Action Plan
1. **Show the Law to the Manager:** State: *"Under Section 36 of Legal Metrology Act and CCPA guidelines, cooling charges and compulsory service charges are illegal. Please waive this amount."*
2. **Preserve the Bill:** If they refuse to waive, pay via card/UPI and preserve the printed tax invoice showing the itemized charge.
3. **Register on National Consumer Helpline (1915):** Dial **1915** or lodge an e-complaint on **consumerhelpline.gov.in** / WhatsApp **8800001915**. The CCPA actively penalizes reported establishments.
4. **File on e-Daakhil:** Submit a petition on **edaakhil.nic.in** before the District Consumer Commission for refund and mental harassment compensation (no advocate required).

---

#### 4. Official Helplines
* 📞 **National Consumer Helpline:** 1915
* 📞 **e-Daakhil Online Portal:** edaakhil.nic.in
* 📞 **National Legal Metrology Grievance Desk:** consumerhelpline.gov.in`
  },

  // =========================================================================
  // SCENARIO 8: DAUGHTER'S EQUAL COPARCENARY ANCESTRAL PROPERTY RIGHTS
  // =========================================================================
  {
    id: 'ancestral_property_daughter_rights',
    category: 'property',
    categoryTitle: 'Property & Inheritance Law',
    matcher: (q) => {
      const hasDaughter = q.includes('daughter') || q.includes('sister') || q.includes('female');
      const hasProperty = q.includes('ancestral property') || q.includes('father property') || q.includes('coparcener') || q.includes('partition') || q.includes('share in property');
      return hasDaughter && hasProperty;
    },
    directAnswer: 'Yes, daughters have equal birth rights in Hindu ancestral property, identical to sons. In Vineeta Sharma v. Rakesh Sharma (2020), the Supreme Court ruled that daughters are coparceners by birth with equal rights and liabilities, irrespective of whether the father was alive in 2005.',
    applicableLaws: [
      'Section 6, Hindu Succession (Amendment) Act, 2005 (Equal coparcenary rights for daughters by birth)',
      'Supreme Court Landmark Judgment: Vineeta Sharma v. Rakesh Sharma (2020) 9 SCC 1 (Retroactive coparcenary status)',
      'Section 8 & Section 15, Hindu Succession Act, 1956 (Rules of succession for male and female intestate property)'
    ],
    keyRights: [
      'Daughters have equal birth right as coparceners in ancestral property, identical to sons',
      'Father does NOT need to have been alive on September 9, 2005 for the daughter to claim her share',
      'A daughter can demand formal partition of ancestral property or challenge illegal sales made without her consent'
    ],
    actions: [
      'Obtain family genealogical tree certificate and ancestral revenue records (Patta, Khata, 7/12 extract).',
      'Issue a formal legal notice for partition through an advocate demanding demarcation of your equal coparcenary share.',
      'File a Civil Partition Suit before the competent Civil Court having jurisdiction over the property location.',
      'Seek interim injunction under Order 39 Rules 1 & 2 CPC restraining other family members from selling or mortgaging the property.'
    ],
    helplines: [
      'National Legal Services Authority (NALSA): 15100',
      'State Legal Services Authority (SLSA)',
      'Supreme Court Legal Services Committee: 011-23388313'
    ],
    fullAnswer: `### ⚖️ Legal Advisory: Daughter's Equal Coparcenary Rights in Ancestral Property

**Direct Legal Answer:** **Yes, absolutely.** Under Indian law, daughters have **equal birth rights in Hindu ancestral property, identical to sons.** In the landmark ruling *Vineeta Sharma v. Rakesh Sharma (2020)*, the Supreme Court held that a daughter is a coparcener by birth, irrespective of whether her father was alive on September 9, 2005.

---

#### 1. Detailed Legal Analysis of Your Scenario

* **The 2005 Amendment & Supreme Court Judgment**
  Prior to 2005, daughters were only members of the Hindu Joint Family, not coparceners with birthrights. The **Hindu Succession (Amendment) Act, 2005** substituted Section 6 to grant daughters equal coparcenary rights by birth. In August 2020, a 3-judge bench of the Supreme Court resolved conflicting judgments and conclusively ruled that:
  1. The coparcenary right is conferred **by birth**, not by succession upon the father's death.
  2. The father does **not** need to have been alive when the amendment took effect on September 9, 2005.
  3. Married daughters have the same equal share as unmarried daughters.

* **Ancestral vs. Self-Acquired Property Distinction**
  * **Ancestral Property:** Property inherited through three generations of male lineage without partition. Daughters have an absolute, unconditional birthright and can demand partition at any time.
  * **Self-Acquired Property:** Property bought by the father with his own earnings. The father has full testamentary freedom to bequeath it to anyone through a registered Will. If he dies intestate (without a Will), all children (sons and daughters) and the widow inherit equal Class-I shares under Section 8.

---

#### 2. Applicable Indian Laws & Statutory Provisions
* **Section 6, Hindu Succession (Amendment) Act, 2005** (Equal coparcenary rights for daughters)
* **Supreme Court Landmark Judgment:** *Vineeta Sharma v. Rakesh Sharma (2020)*
* **Order 39 Rules 1 & 2, Code of Civil Procedure (CPC), 1908** (Temporary injunction against third-party sale)

---

#### 3. Step-by-Step Action Plan & Remedies
1. **Gather Revenue Records:** Obtain the genealogical family tree certificate, RTC / Patta / Khata extracts, and previous sale deeds from the Sub-Registrar’s office.
2. **Issue a Formal Partition Demand Notice:** Issue a registered legal notice to all family members demanding demarcation and registered partition of your equal share.
3. **File Civil Partition Suit:** If brothers or relatives refuse, file a **Civil Suit for Partition and Separate Possession** before the Senior Civil Judge having territorial jurisdiction.
4. **Obtain Stay Order:** Move an application under Order 39 CPC for a temporary injunction restraining relatives from creating third-party rights, selling, or constructing on the land pending trial.

---

#### 4. Official Helplines
* 📞 **NALSA Free Legal Aid Helpline:** 15100
* 📞 **National Commission for Women (NCW):** 7827170170`
  }
];

/**
 * Matches a user query against specialized high-frequency Indian citizen legal scenarios.
 * Returns structured advisory if matched, or null if no scenario matches.
 */
export function matchLegalScenario(queryText, rawQuery) {
  const q = (queryText || '').toLowerCase();
  for (const scenario of legalScenarios) {
    if (scenario.matcher(q)) {
      return {
        category: scenario.category,
        categoryTitle: scenario.categoryTitle,
        summary: scenario.directAnswer,
        keyRights: scenario.keyRights,
        applicableLaws: scenario.applicableLaws,
        recommendedActions: scenario.actions,
        helplines: scenario.helplines,
        sourceRef: scenario.applicableLaws[0] || 'Indian Statutory Law',
        fullAnswer: scenario.fullAnswer,
        isScenarioMatched: true,
        scenarioId: scenario.id
      };
    }
  }
  return null;
}

export default legalScenarios;
