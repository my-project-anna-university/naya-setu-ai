/**
 * Realistic Indian Legal Document Templates Generator
 * Formats standard legal notices, RTI applications, consumer complaints,
 * police complaints, and sworn affidavits in accordance with statutory requirements.
 */

export const templateDefinitions = [
  {
    type: 'rti',
    title: 'RTI Application Form (Under Section 6(1) of RTI Act, 2005)',
    description: 'Application to Central/State Public Information Officer requesting certified copies of government records, inspection of works, or file movement status.',
    requiredFields: [
      'applicantName',
      'applicantAddress',
      'applicantPhone',
      'publicAuthorityName',
      'pioAddress',
      'informationSought',
      'timePeriod',
      'paymentMode',
    ],
  },
  {
    type: 'notice',
    title: 'Formal Legal Notice (Demand / Breach / Recovery / Defamation)',
    description: 'Statutory demand notice served through an advocate or directly giving 15/30 days to rectify default prior to initiating civil or criminal litigation.',
    requiredFields: [
      'senderName',
      'senderAddress',
      'recipientName',
      'recipientAddress',
      'matterSubject',
      'factsOfCase',
      'demandOrRelief',
      'noticePeriodDays',
    ],
  },
  {
    type: 'complaint',
    title: 'Consumer Complaint Petition (Consumer Protection Act, 2019)',
    description: 'Formal complaint petition for submission before the District Consumer Disputes Redressal Commission for defective products or deficient services.',
    requiredFields: [
      'complainantName',
      'complainantAddress',
      'oppositePartyName',
      'oppositePartyAddress',
      'transactionDate',
      'transactionAmount',
      'productOrServiceDetails',
      'groundsOfDeficiency',
      'compensationClaimed',
    ],
  },
  {
    type: 'affidavit',
    title: 'General Sworn Legal Affidavit (With Standard Verification)',
    description: 'Solemn affirmation under oath before an Oath Commissioner / Notary Public for name change, address declaration, or financial undertaking.',
    requiredFields: [
      'deponentName',
      'fatherOrHusbandName',
      'deponentAge',
      'deponentAddress',
      'declarationStatements',
      'purposeOfAffidavit',
    ],
  },
];

/**
 * Generates an RTI application formatted under Section 6(1) of the RTI Act, 2005.
 */
export function generateRtiApplication(data) {
  const {
    applicantName = '[Applicant Name]',
    applicantAddress = '[Applicant Postal Address]',
    applicantPhone = '[Applicant Phone Number]',
    applicantEmail = '[Applicant Email Address]',
    publicAuthorityName = '[Concerned Ministry / Department / Public Authority]',
    pioAddress = '[Office of the Central/State Public Information Officer]',
    informationSought = '[Detailed point-wise list of information sought]',
    timePeriod = '[Specified duration/financial year]',
    paymentMode = 'Indian Postal Order / Demand Draft / Online Payment of ₹10',
    feeReferenceNo = 'IPO/Ref No. ___________ dated ___________',
    isBpl = false,
    bplCardNo = '',
    date = new Date().toLocaleDateString('en-IN', { day: '2-digit', month: 'long', year: 'numeric' }),
  } = data;

  return `
APPLICATION FOR SEEKING INFORMATION UNDER SECTION 6(1) OF
THE RIGHT TO INFORMATION ACT, 2005

To,
The Public Information Officer (PIO) / CPIO,
${publicAuthorityName},
${pioAddress}

1. Full Name of the Applicant: ${applicantName}
2. Complete Postal Address: ${applicantAddress}
3. Contact Details: Phone: ${applicantPhone} | Email: ${applicantEmail}
4. Citizenship: Citizen of India

5. Particulars of Information Required:
   (a) Subject Matter: Information concerning ${timePeriod}
   (b) Specific Details of Information Sought:
${Array.isArray(informationSought) ? informationSought.map((item, idx) => `       ${idx + 1}. ${item}`).join('\n') : `       ${informationSought}`}
   (c) Format Required: Certified hard copies / inspection of records as permissible.

6. Application Fee Details:
   ${isBpl ? `Applicant belongs to Below Poverty Line (BPL) category. BPL Card No: ${bplCardNo}. Hence, exempt from fee payment under Section 7(5).` : `An application fee of ₹10/- has been remitted via ${paymentMode} bearing reference: ${feeReferenceNo}.`}

7. Declaration:
   I hereby state that I am a citizen of India and the information sought does not fall within the exemptions prescribed under Section 8 or 9 of the RTI Act, 2005.

Place: ${applicantAddress.split(',').pop()?.trim() || 'India'}
Date: ${date}

____________________________
Signature of Applicant
(${applicantName})
`;
}

/**
 * Generates a formal Legal Notice.
 */
export function generateLegalNotice(data) {
  const {
    senderName = '[Client / Sender Name]',
    senderAddress = '[Sender Full Residential/Office Address]',
    senderPhone = '[Sender Phone]',
    recipientName = '[Opposite Party Name / Managing Director]',
    recipientAddress = '[Recipient Office/Residential Address]',
    matterSubject = '[Subject: Notice for recovery / deficiency / breach of contract]',
    factsOfCase = '[Statement of facts, chronology of events, transactions]',
    demandOrRelief = '[Specific action demanded, monetary refund, replacement or compliance]',
    noticePeriodDays = '15',
    date = new Date().toLocaleDateString('en-IN', { day: '2-digit', month: 'long', year: 'numeric' }),
  } = data;

  return `
REGISTERED A.D. / SPEED POST / LEGAL NOTICE

Date: ${date}

To,
${recipientName},
${recipientAddress}

SUBJECT: LEGAL NOTICE FOR ${matterSubject.toUpperCase()}

Sir / Madam,

Under instructions and on behalf of my client / the undersigned, ${senderName}, residing at ${senderAddress}, I/we hereby serve you with this formal Legal Notice:

1. That my client had entered into transaction/dealing with you wherein you agreed and undertook to provide specific goods/services/covenants in accordance with mutual terms.

2. Chronology of Facts:
${Array.isArray(factsOfCase) ? factsOfCase.map((f, idx) => `   (${String.fromCharCode(97 + idx)}) ${f}`).join('\n') : `   ${factsOfCase}`}

3. That despite repeated reminders, emails, and verbal requests made by my client, you have willfully defaulted in discharging your contractual and statutory obligations, causing immense financial hardship, mental agony, and distress.

4. DEMAND & RELIEF:
   You are hereby called upon to comply with the following demands within ${noticePeriodDays} days from the receipt of this legal notice:
   ${demandOrRelief}

5. Please take notice that if you fail to comply with the aforementioned demands within the stipulated period of ${noticePeriodDays} days, my client shall be constrained to initiate appropriate Civil and/or Criminal proceedings against you before the competent Court of Law / Tribunal at your sole risk, cost, and consequence.

A copy of this legal notice is retained in our records for future judicial reference.

Yours faithfully,

____________________________
${senderName}
Contact: ${senderPhone}
Address: ${senderAddress}
`;
}

/**
 * Generates a Consumer Complaint petition under Section 35 of the Consumer Protection Act, 2019.
 */
export function generateConsumerComplaint(data) {
  const {
    districtCommission = '[District Consumer Disputes Redressal Commission, City/District]',
    complainantName = '[Complainant Full Name]',
    complainantAddress = '[Complainant Address]',
    oppositePartyName = '[Opposite Party / Company Name]',
    oppositePartyAddress = '[Opposite Party Address]',
    transactionDate = '[Date of Purchase / Service Contract]',
    transactionAmount = '[Invoice Value in INR]',
    productOrServiceDetails = '[Description of Product / Service]',
    groundsOfDeficiency = '[Specific defects, unfair trade practices, misleading assertions]',
    compensationClaimed = '[Refund amount + interest + damages for mental agony + litigation expenses]',
    date = new Date().toLocaleDateString('en-IN', { day: '2-digit', month: 'long', year: 'numeric' }),
  } = data;

  return `
BEFORE THE HON’BLE DISTRICT CONSUMER DISPUTES REDRESSAL COMMISSION AT ${districtCommission.toUpperCase()}

CONSUMER COMPLAINT NO. ________ / 2026

IN THE MATTER OF:
${complainantName},
Residing at: ${complainantAddress}
                                              ...COMPLAINANT
VERSUS

${oppositePartyName},
Having registered address at: ${oppositePartyAddress}
                                              ...OPPOSITE PARTY

COMPLAINT UNDER SECTION 35 OF THE CONSUMER PROTECTION ACT, 2019
FOR DEFICIENCY OF SERVICE AND UNFAIR TRADE PRACTICE

MOST RESPECTFULLY SHOWETH:

1. That the Complainant is a consumer within the definition of Section 2(7) of the Consumer Protection Act, 2019, having purchased/availed ${productOrServiceDetails} from the Opposite Party against valid consideration of ₹${transactionAmount} paid on ${transactionDate}.

2. Facts of the Dispute:
${groundsOfDeficiency}

3. Cause of Action:
   The cause of action arose on ${transactionDate} and subsequently when the Opposite Party failed/refused to rectify the defect or honor legitimate refund requests despite service of notice.

4. Territorial & Pecuniary Jurisdiction:
   The Complainant resides within the territorial limits of this Hon'ble Commission. Furthermore, the aggregate value of goods/services and compensation claimed does not exceed ₹50,00,000/- (Rupees Fifty Lakhs), hence this Hon'ble Commission has full pecuniary jurisdiction under Section 34 of the Act.

5. PRAYER:
   In light of the facts and circumstances stated herein, it is most respectfully prayed that this Hon'ble Commission may graciously be pleased to:
   (a) Direct the Opposite Party to refund the sum of ₹${transactionAmount}/- along with interest @ 18% p.a.
   (b) Direct the Opposite Party to pay a sum of ${compensationClaimed} towards mental harassment and physical inconvenience.
   (c) Award litigation costs of ₹25,000/- in favor of the Complainant.
   (d) Pass any other order deemed fit in the interest of justice.

Place: ${complainantAddress.split(',').pop()?.trim() || 'India'}
Date: ${date}

____________________________
COMPLAINANT
(${complainantName})

VERIFICATION:
I, the Complainant above-named, do hereby verify that the contents of paragraphs 1 to 5 are true and correct to my personal knowledge and belief, and no material fact has been concealed therefrom.
Verified at ___________ on this ${date}.

____________________________
DEPONENT / COMPLAINANT
`;
}

/**
 * Generates a sworn Legal Affidavit with Indian standard verification format.
 */
export function generateAffidavit(data) {
  const {
    deponentName = '[Deponent Name]',
    fatherOrHusbandName = '[Father’s / Husband’s Name]',
    deponentAge = '[Age]',
    deponentAddress = '[Complete Address]',
    declarationStatements = [
      'That I am a permanent citizen and resident of India residing at the above-mentioned address.',
      'That I am making this affidavit bona fide to declare relevant facts before the concerned authority.',
    ],
    purposeOfAffidavit = 'General Declaration / Documentation Proof',
    date = new Date().toLocaleDateString('en-IN', { day: '2-digit', month: 'long', year: 'numeric' }),
  } = data;

  const statementsArray = Array.isArray(declarationStatements)
    ? declarationStatements
    : [declarationStatements];

  return `
AFFIDAVIT

I, ${deponentName}, son/daughter/wife of ${fatherOrHusbandName}, aged about ${deponentAge} years, residing at ${deponentAddress}, do hereby solemnly affirm and state on oath as under:

1. That I am the deponent herein and am fully conversant with the facts deposed hereunder.

${statementsArray.map((stmt, idx) => `${idx + 2}. ${stmt}`).join('\n\n')}

${statementsArray.length + 2}. That this affidavit is executed for the purpose of ${purposeOfAffidavit} and may be submitted before any relevant Government / Judicial authority.

DEPONENT
(${deponentName})

VERIFICATION:
Verified at ___________ on this day of ${date}, that the contents of the above affidavit are true and correct to the best of my personal knowledge and belief. No part of it is false and nothing material has been concealed or misrepresented.

DEPONENT
(${deponentName})

Solemnly affirmed and signed before me on this day by the deponent who is personally identified by _______________.

[OATH COMMISSIONER / NOTARY PUBLIC]
`;
}

/**
 * Master dispatcher for document generation.
 */
export function generateDocumentContent(type, data) {
  switch (type.toLowerCase()) {
    case 'rti':
      return {
        title: `RTI Application - ${data.publicAuthorityName || 'Public Authority'}`,
        content: generateRtiApplication(data),
      };
    case 'notice':
      return {
        title: `Legal Notice - ${data.matterSubject || 'Demand Notice'}`,
        content: generateLegalNotice(data),
      };
    case 'complaint':
      return {
        title: `Consumer Complaint - ${data.oppositePartyName || 'Consumer Forum'}`,
        content: generateConsumerComplaint(data),
      };
    case 'affidavit':
      return {
        title: `Affidavit - ${data.deponentName || 'Declaration'}`,
        content: generateAffidavit(data),
      };
    default:
      throw new Error(`Unsupported document template type: ${type}`);
  }
}

export default {
  templateDefinitions,
  generateRtiApplication,
  generateLegalNotice,
  generateConsumerComplaint,
  generateAffidavit,
  generateDocumentContent,
};
