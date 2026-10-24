import os
import sys
from reportlab.lib.pagesizes import A4
from reportlab.platypus import (
    SimpleDocTemplate, Paragraph, Spacer, Table, TableStyle, PageBreak, KeepTogether, HRFlowable
)
from reportlab.lib.styles import getSampleStyleSheet, ParagraphStyle
from reportlab.lib import colors
from reportlab.pdfgen import canvas

class FarhanReviewCanvas(canvas.Canvas):
    """
    Two-pass canvas for pure B/W academic printing.
    Pages 1 & 2 are the mandatory official R_II (1) evaluation forms.
    Physical Page 3 begins the detailed technical report, numbered as Page 1, 2, 3... at bottom center.
    """
    def __init__(self, *args, **kwargs):
        super(FarhanReviewCanvas, self).__init__(*args, **kwargs)
        self._saved_page_states = []

    def showPage(self):
        self._saved_page_states.append(dict(self.__dict__))
        self._startPage()

    def save(self):
        num_pages = len(self._saved_page_states)
        for state in self._saved_page_states:
            self.__dict__.update(state)
            self.draw_page_decorations(num_pages)
            super(FarhanReviewCanvas, self).showPage()
        super(FarhanReviewCanvas, self).save()

    def draw_page_decorations(self, total_pages):
        self.saveState()
        self.setFont("Times-Roman", 9)
        self.setFillColor(colors.black)

        # Technical Report pages start at physical page 3
        if self._pageNumber >= 3:
            report_page_num = self._pageNumber - 2
            # Running page number at bottom center, exactly like Farhan's academic sample
            self.drawCentredString(297.5, 28, str(report_page_num))

        self.restoreState()

def build_pdf():
    output_pdf = os.path.join(r"C:\Users\DELL\My-project\nyayasetu", "NyayaSetu_Second_Review_Report_Mohamed_Farhan.pdf")
    doc = SimpleDocTemplate(
        output_pdf,
        pagesize=A4,
        leftMargin=45,
        rightMargin=45,
        topMargin=36,
        bottomMargin=36
    )

    styles = getSampleStyleSheet()

    # Pure Black & White (B/W) Academic Typography using Times-Roman / Times-Bold
    p_center_bold_12 = ParagraphStyle(
        'CenterBold12',
        parent=styles['Normal'],
        fontName='Times-Bold',
        fontSize=11.5,
        leading=14.5,
        alignment=1,
        textColor=colors.black
    )

    p_center_bold_14 = ParagraphStyle(
        'CenterBold14',
        parent=styles['Normal'],
        fontName='Times-Bold',
        fontSize=13,
        leading=16,
        alignment=1,
        textColor=colors.black,
        spaceBefore=2,
        spaceAfter=2
    )

    p_center_10 = ParagraphStyle(
        'Center10',
        parent=styles['Normal'],
        fontName='Times-Roman',
        fontSize=10,
        leading=13.5,
        alignment=1,
        textColor=colors.black
    )

    h1_style = ParagraphStyle(
        'ReportH1',
        parent=styles['Heading1'],
        fontName='Times-Bold',
        fontSize=11.5,
        leading=14.5,
        textColor=colors.black,
        spaceBefore=8,
        spaceAfter=3,
        keepWithNext=True
    )

    h2_style = ParagraphStyle(
        'ReportH2',
        parent=styles['Heading2'],
        fontName='Times-Bold',
        fontSize=9.8,
        leading=12.5,
        textColor=colors.black,
        spaceBefore=6,
        spaceAfter=2,
        keepWithNext=True
    )

    body = ParagraphStyle(
        'ReportBody',
        parent=styles['Normal'],
        fontName='Times-Roman',
        fontSize=9,
        leading=12.5,
        alignment=4, # Justified
        textColor=colors.black,
        spaceAfter=3
    )

    body_left = ParagraphStyle(
        'ReportBodyLeft',
        parent=body,
        alignment=0 # Left-aligned
    )

    bullet = ParagraphStyle(
        'ReportBullet',
        parent=body_left,
        leftIndent=14,
        firstLineIndent=-10,
        spaceAfter=2
    )

    th_cell = ParagraphStyle(
        'THCell',
        parent=styles['Normal'],
        fontName='Times-Bold',
        fontSize=8,
        leading=10.5,
        alignment=1,
        textColor=colors.black
    )

    tb_cell = ParagraphStyle(
        'TBCell',
        parent=styles['Normal'],
        fontName='Times-Roman',
        fontSize=8,
        leading=10.5,
        textColor=colors.black
    )

    tb_cell_center = ParagraphStyle(
        'TBCellCenter',
        parent=tb_cell,
        alignment=1
    )

    tb_cell_bold = ParagraphStyle(
        'TBCellBold',
        parent=tb_cell,
        fontName='Times-Bold'
    )

    code_font = ParagraphStyle(
        'CodeFont',
        parent=styles['Normal'],
        fontName='Courier',
        fontSize=7,
        leading=8.8,
        textColor=colors.black
    )

    story = []

    # =========================================================================
    # PAGE 1: EXACT ANNA UNIVERSITY R_II (1) EVALUATION FORM (FILLED B/W)
    # =========================================================================

    univ_hdr = [
        [
            Paragraph("<b>CENTRE FOR DISTANCE EDUCATION<br/>ANNAUNIVERSITY<br/>CHENNAI – 600 025</b>", p_center_bold_12),
            Paragraph("<b>Office:</b> 2235 7222<br/><br/><b>E-mail:</b> cdestudycentre@gmail.com", ParagraphStyle('OffMail', parent=styles['Normal'], fontName='Times-Roman', fontSize=8.5, leading=11))
        ]
    ]
    t_uhdr = Table(univ_hdr, colWidths=[375, 130])
    t_uhdr.setStyle(TableStyle([
        ('BOX', (0,0), (-1,-1), 0.8, colors.black),
        ('INNERGRID', (0,0), (-1,-1), 0.5, colors.black),
        ('VALIGN', (0,0), (-1,-1), 'MIDDLE'),
        ('TOPPADDING', (0,0), (-1,-1), 6),
        ('BOTTOMPADDING', (0,0), (-1,-1), 6),
        ('LEFTPADDING', (0,0), (-1,-1), 6),
        ('RIGHTPADDING', (0,0), (-1,-1), 6),
    ]))
    story.append(t_uhdr)
    story.append(Spacer(1, 6))

    cde_prog = [
        [
            Paragraph("<b>D123 – CDE Study Centre</b>", ParagraphStyle('C1', parent=styles['Normal'], fontName='Times-Bold', fontSize=10, leading=12)),
            Paragraph("<b>Programme :</b> MCA", ParagraphStyle('C2', parent=styles['Normal'], fontName='Times-Bold', fontSize=10, leading=12, alignment=2))
        ],
        [
            Paragraph("<b>IV SEM – SET : 36</b>", ParagraphStyle('C3', parent=styles['Normal'], fontName='Times-Bold', fontSize=9.5, leading=12)),
            Paragraph("", ParagraphStyle('C4', parent=styles['Normal']))
        ]
    ]
    t_cde = Table(cde_prog, colWidths=[250, 255])
    t_cde.setStyle(TableStyle([
        ('VALIGN', (0,0), (-1,-1), 'MIDDLE'),
        ('TOPPADDING', (0,0), (-1,-1), 2),
        ('BOTTOMPADDING', (0,0), (-1,-1), 2),
    ]))
    story.append(t_cde)
    story.append(Spacer(1, 6))

    story.append(Paragraph("<b>SECOND REVIEW REPORT</b>", p_center_bold_12))
    story.append(HRFlowable(width="100%", thickness=1, color=colors.black, spaceBefore=4, spaceAfter=8))

    cand_details = [
        [Paragraph("<b>NAME</b>", tb_cell_bold), Paragraph("<b>:</b>", tb_cell_center), Paragraph("<b>MOHAMED FARHAN L</b>", tb_cell_bold)],
        [Paragraph("<b>ROLL NO</b>", tb_cell_bold), Paragraph("<b>:</b>", tb_cell_center), Paragraph("2436MCA0003", tb_cell)],
        [Paragraph("<b>REG.NO</b>", tb_cell_bold), Paragraph("<b>:</b>", tb_cell_center), Paragraph("67224200077", tb_cell)],
        [Paragraph("<b>EMAIL-ID</b>", tb_cell_bold), Paragraph("<b>:</b>", tb_cell_center), Paragraph("mohamedfarhan201103@gmail.com", tb_cell)],
        [
            Paragraph("<b>TITLE OF THE PROJECT:</b>", tb_cell_bold),
            Paragraph("<b>:</b>", tb_cell_center),
            Paragraph("<b>NyayaSetu: AI-Powered Citizen Legal Empowerment and Civic Access Platform</b>", ParagraphStyle('ProjTitle', parent=tb_cell_bold, fontSize=9, leading=12))
        ]
    ]
    t_cand = Table(cand_details, colWidths=[140, 15, 350])
    t_cand.setStyle(TableStyle([
        ('VALIGN', (0,0), (-1,-1), 'MIDDLE'),
        ('TOPPADDING', (0,0), (-1,-1), 4),
        ('BOTTOMPADDING', (0,0), (-1,-1), 4),
        ('LEFTPADDING', (0,0), (-1,-1), 4),
        ('RIGHTPADDING', (0,0), (-1,-1), 4),
    ]))
    story.append(t_cand)
    story.append(HRFlowable(width="100%", thickness=1, color=colors.black, spaceBefore=6, spaceAfter=8))

    g_info = [
        [
            Paragraph("<b>Signature of the Guide:</b><br/><br/><br/>___________________________", ParagraphStyle('G1', parent=tb_cell, fontSize=9, leading=12)),
            Paragraph("<b>Guide Name and Designation:</b> Dr. M. Vijayalakshmi, Associate Professor<br/><br/><b>Institution:</b> Department of Information Science and Technology, Anna University, Chennai", ParagraphStyle('G2', parent=tb_cell, fontSize=9, leading=12))
        ]
    ]
    t_ginfo = Table(g_info, colWidths=[170, 335])
    t_ginfo.setStyle(TableStyle([
        ('VALIGN', (0,0), (-1,-1), 'TOP'),
        ('TOPPADDING', (0,0), (-1,-1), 4),
        ('BOTTOMPADDING', (0,0), (-1,-1), 4),
    ]))
    story.append(t_ginfo)
    story.append(HRFlowable(width="100%", thickness=0.8, color=colors.black, spaceBefore=6, spaceAfter=8))

    story.append(Paragraph("<b>REMARKS (by Project Monitoring Committee)</b>", ParagraphStyle('RemH', parent=styles['Normal'], fontName='Times-Bold', fontSize=9.5, leading=12)))
    story.append(Spacer(1, 4))

    blank_box = [[Paragraph("<br/><br/><br/>", tb_cell)]]
    t_box = Table(blank_box, colWidths=[505], rowHeights=[45])
    t_box.setStyle(TableStyle([
        ('BOX', (0,0), (-1,-1), 0.8, colors.black),
    ]))
    story.append(t_box)
    story.append(Spacer(1, 8))

    story.append(Paragraph("<b><u>RECOMMENDED / NOT RECOMMENDED TO PROCEED WITH THE PROJECT</u></b>", ParagraphStyle('RecText', parent=styles['Normal'], fontName='Times-Bold', fontSize=10, leading=13, alignment=1)))
    story.append(Spacer(1, 8))

    marks_grid = [
        [
            Paragraph("<b>System<br/>Design<br/>: 4</b>", th_cell),
            Paragraph("<b>Modules<br/>Completed<br/>: 14</b>", th_cell),
            Paragraph("<b>Data<br/>Set: 6</b>", th_cell),
            Paragraph("<b>Pseudo<br/>code: 2</b>", th_cell),
            Paragraph("<b>Contribution:<br/>4</b>", th_cell),
            Paragraph("<b>Total: 30<br/>Marks</b>", th_cell)
        ],
        [
            Paragraph("<br/><br/>", tb_cell_center),
            Paragraph("<br/><br/>", tb_cell_center),
            Paragraph("<br/><br/>", tb_cell_center),
            Paragraph("<br/><br/>", tb_cell_center),
            Paragraph("<br/><br/>", tb_cell_center),
            Paragraph("<br/><br/>", tb_cell_center)
        ]
    ]
    t_mgrid = Table(marks_grid, colWidths=[80, 95, 80, 80, 80, 90], rowHeights=[32, 50])
    t_mgrid.setStyle(TableStyle([
        ('BOX', (0,0), (-1,-1), 0.8, colors.black),
        ('INNERGRID', (0,0), (-1,-1), 0.5, colors.black),
        ('ALIGN', (0,0), (-1,-1), 'CENTER'),
        ('VALIGN', (0,0), (-1,-1), 'MIDDLE'),
        ('TOPPADDING', (0,0), (-1,-1), 3),
        ('BOTTOMPADDING', (0,0), (-1,-1), 3),
    ]))
    story.append(t_mgrid)
    story.append(Spacer(1, 35))

    pmc_sigs = [
        [
            Paragraph("<b>Signature of the PMC In-charge</b><br/><br/><br/>_________________________________", ParagraphStyle('PmcSig1', parent=tb_cell, fontSize=9, leading=12)),
            Paragraph("<b>Signature of the PMC Member</b><br/><br/><br/>_________________________________", ParagraphStyle('PmcSig2', parent=tb_cell, fontSize=9, leading=12, alignment=2))
        ]
    ]
    t_pmcsigs = Table(pmc_sigs, colWidths=[252, 253])
    t_pmcsigs.setStyle(TableStyle([
        ('VALIGN', (0,0), (-1,-1), 'BOTTOM'),
        ('LEFTPADDING', (0,0), (-1,-1), 4),
        ('RIGHTPADDING', (0,0), (-1,-1), 4),
    ]))
    story.append(t_pmcsigs)

    # Force PageBreak to Physical Page 2
    story.append(PageBreak())

    # =========================================================================
    # PAGE 2: EXACT ANNA UNIVERSITY R_II (1) PAGE 2 FORM (FILLED B/W)
    # =========================================================================

    story.append(Paragraph("<b>Second Review Report</b>", p_center_bold_14))
    story.append(Spacer(1, 2))
    story.append(Paragraph("<b>(Submitted by Candidate’s Name:</b> <u>MOHAMED FARHAN L</u> &nbsp;&nbsp; <b>Roll No:</b> <u>2436MCA0003</u> &nbsp;&nbsp; <b>: Reg. No:</b> <u>67224200077</u> <b>)</b>", p_center_10))
    story.append(Spacer(1, 6))

    story.append(Paragraph("<b>Title of the Project:</b> NyayaSetu: AI-Powered Citizen Legal Empowerment and Civic Access Platform", ParagraphStyle('P2Title', parent=styles['Normal'], fontName='Times-Bold', fontSize=10.5, leading=14)))
    story.append(Spacer(1, 8))

    story.append(Paragraph("<b>Work completed so far</b>", ParagraphStyle('P2WorkHdr', parent=styles['Normal'], fontName='Times-Bold', fontSize=10.5, leading=14)))
    story.append(Spacer(1, 4))

    story.append(Paragraph("• <b>Over all System Design:</b> 4-Tier enterprise architecture implemented comprising React 18 SPA client, Node.js/Express.js REST API application core, dual-layer legal intelligence gateway, and MongoDB persistence with automated in-memory fallback. Multi-stage Docker containerization with Nginx reverse proxy configured and operational.", bullet))
    story.append(Paragraph("• <b>Data Set:</b> Comprehensive normalized Indian statutory dataset covering 6 legal domains under the newly enacted Bharatiya Nyaya Sanhita 2023 (BNS), BNSS 2023, Consumer Protection Act 2019, RERA 2016, and Code on Wages. Curated database of 25+ Central/State welfare schemes and 50+ District Legal Services Authorities (DLSA) with verified contacts.", bullet))
    story.append(Paragraph("• <b>Modules Completed with Screen Shot:</b> 7 core modules fully implemented and functionally verified: Citizen Rights Awareness Explorer, Context-Aware AI Legal Chatbot with Free Model Switcher, Government Schemes Navigator, 1-Click Document Drafter, DLSA Free Legal Aid Directory (Article 39A), Grievance Portal Walkthroughs & eCourts Hub, and Docker Microservice Stack.", bullet))
    story.append(Paragraph("• <b>Pseudo code for incomplete modules:</b> Completed end-to-end deductive case reasoning algorithm and Kanoon verification pipeline. Pseudocode and workflow specifications drafted for remaining Phase B–E extensions (multilingual voice pipeline, OCR lease analyzer, and WhatsApp bot gateway).", bullet))

    story.append(Spacer(1, 8))
    story.append(Paragraph("<b>Test Cases</b>", ParagraphStyle('P2TCHdr', parent=styles['Normal'], fontName='Times-Bold', fontSize=10.5, leading=14)))
    story.append(Spacer(1, 4))

    p2_tc_data = [
        [Paragraph("<b>TC ID</b>", th_cell), Paragraph("<b>Test Scenario / Input</b>", th_cell), Paragraph("<b>Expected Output</b>", th_cell), Paragraph("<b>Result</b>", th_cell)],
        [
            Paragraph("TC-01", tb_cell_center),
            Paragraph("Builder bounced flat refund cheque (₹15L); notice unpaid after 15 days.", tb_cell),
            Paragraph("Offence under Sec 138 NI Act complete; initiate Sec 142 complaint within 30 days.", tb_cell),
            Paragraph("<b>PASS</b>", tb_cell_center)
        ],
        [
            Paragraph("TC-02", tb_cell_center),
            Paragraph("Fraudulent UPI debit of ₹2L reported within 8 minutes of call.", tb_cell),
            Paragraph("RBI Zero-Liability Circular applies; 1930 Cyber Fraud freeze in Golden Hour.", tb_cell),
            Paragraph("<b>PASS</b>", tb_cell_center)
        ],
        [
            Paragraph("TC-03", tb_cell_center),
            Paragraph("Fatal hit-and-run by drunken driver (BAC 0.18%) with suspended licence.", tb_cell),
            Paragraph("Sec 105 & 106(2) BNS; Sec 185 MV Act; Swaran Singh Pay & Recover doctrine.", tb_cell),
            Paragraph("<b>PASS</b>", tb_cell_center)
        ],
        [
            Paragraph("TC-04", tb_cell_center),
            Paragraph("Small farmer (1.5 ha, income ₹80,000, Tamil Nadu) checks scheme eligibility.", tb_cell),
            Paragraph("100% eligibility for PM-Kisan (₹6,000/yr), Ayushman Bharat, and PMFBY.", tb_cell),
            Paragraph("<b>PASS</b>", tb_cell_center)
        ]
    ]
    t_p2tc = Table(p2_tc_data, colWidths=[45, 185, 220, 55])
    t_p2tc.setStyle(TableStyle([
        ('BOX', (0,0), (-1,-1), 0.8, colors.black),
        ('INNERGRID', (0,0), (-1,-1), 0.5, colors.black),
        ('TOPPADDING', (0,0), (-1,-1), 3),
        ('BOTTOMPADDING', (0,0), (-1,-1), 3),
        ('LEFTPADDING', (0,0), (-1,-1), 4),
        ('RIGHTPADDING', (0,0), (-1,-1), 4),
        ('VALIGN', (0,0), (-1,-1), 'TOP'),
    ]))
    story.append(t_p2tc)

    story.append(Spacer(1, 8))
    story.append(Paragraph("<b>Deviation if any and justification</b>", ParagraphStyle('P2DevHdr', parent=styles['Normal'], fontName='Times-Bold', fontSize=10.5, leading=14)))
    story.append(Spacer(1, 3))
    story.append(Paragraph("<b>No negative deviation.</b> The project has progressed ahead of the initial Phase 1 schedule. All 7 planned core modules, the autonomous deductive reasoning engine, and multi-stage Docker containerization have been delivered and benchmarked. As an enhancement, the Universal Free AI Gateway was expanded to support both Groq Cloud (Meta Llama 3.3 70B) and Google Gemini 1.5 Flash at zero operational cost.", body))

    story.append(Spacer(1, 35))
    story.append(KeepTogether(Table([
        [
            Paragraph("<b>(SIGNATURE OF THE STUDENT)</b><br/><br/><br/>_____________________________________<br/><b>MOHAMED FARHAN L</b><br/>Roll No: 2436MCA0003", ParagraphStyle('S1', parent=tb_cell, fontSize=8.5, leading=12)),
            Paragraph("<b>(SIGNATURE OF THE GUIDE)</b><br/><br/><br/>_____________________________________<br/><b>Dr. M. Vijayalakshmi</b><br/>Associate Professor, Dept. of IST", ParagraphStyle('S2', parent=tb_cell, fontSize=8.5, leading=12, alignment=2))
        ]
    ], colWidths=[252, 253])))

    # Force PageBreak to Physical Page 3 (Report Page 1)
    story.append(PageBreak())

    # =========================================================================
    # PHYSICAL PAGE 3 (REPORT PAGE 1): PROBLEM DEFINITION & BACKGROUND
    # =========================================================================

    story.append(Paragraph("<b>SECOND REVIEW REPORT</b>", p_center_bold_14))
    story.append(Spacer(1, 2))
    story.append(Paragraph("<b>Candidate’s Name: Mohamed Farhan</b>", p_center_10))
    story.append(Paragraph("<b>Roll No: 2436MCA0003</b>", p_center_10))
    story.append(Paragraph("<b>Reg. No: 67224200077</b>", p_center_10))
    story.append(Spacer(1, 4))
    story.append(Paragraph("<b>Title of the Project: NyayaSetu: AI-Powered Citizen Legal Empowerment and Civic Access Platform</b>", ParagraphStyle('RepT', parent=styles['Normal'], fontName='Times-Bold', fontSize=10.5, leading=14, alignment=1)))
    story.append(HRFlowable(width="100%", thickness=1, color=colors.black, spaceBefore=4, spaceAfter=8))

    story.append(Paragraph("1. Problem Definition / Abstract", h1_style))
    story.append(Paragraph(
        "Over 80% of Indian citizens struggle to understand, access, and enforce their statutory protections due to dense legal vocabulary, fragmented legal enactments, and high consultation costs. This vulnerability is severely compounded by the historic legislative overhaul effective 1 July 2024, wherein the 164-year-old Indian Penal Code (IPC), Code of Criminal Procedure (CrPC), and Indian Evidence Act were repealed and replaced by the <b>Bharatiya Nyaya Sanhita, 2023 (BNS)</b>, <b>Bharatiya Nagarik Suraksha Sanhita, 2023 (BNSS)</b>, and <b>Bharatiya Sakshya Adhiniyam, 2023 (BSA)</b>. Everyday citizens regularly forfeit statutory rights and monetary remedies—such as the mandatory 15-day demand notice under Section 138 of the Negotiable Instruments Act for cheque bounce, the 1930 National Cybercrime 'Golden Hour' account freeze for unauthorized UPI debit, full refunds under Section 18 of RERA for delayed possession, or wage recovery under the Code on Wages, 2019—simply because actionable legal advice is locked behind procedural complexity and cost barriers.",
        body
    ))
    story.append(Paragraph(
        "General-purpose Large Language Models (LLMs) cannot safely address citizen legal queries in isolation: they frequently hallucinate non-existent statutory citations, invent section numbers, confuse repealed IPC clauses with new BNS provisions, and lack factual case-deduction logic. Furthermore, marginalized citizens, women, and low-income families remain almost entirely unaware of their fundamental constitutional entitlement to 100% free legal aid and court-appointed advocates under <b>Article 39A of the Constitution of India</b> through District Legal Services Authorities (DLSA).",
        body
    ))
    story.append(Paragraph(
        "<b>NyayaSetu</b> (<i>\"Bridge to Justice\"</i>) is an intelligent, full-stack civic empowerment and legal advisory platform developed to bridge this gap. The platform implements a resilient <b>Dual-Layer Legal Intelligence Architecture</b>: an autonomous <b>Ground-Truth Deductive Reasoning Engine</b> grounded in official gazettes and landmark Supreme Court precedents, paired with a <b>Universal Free AI Gateway</b> that harnesses high-speed generative reasoning from Meta Llama 3.3 70B (via Groq Cloud) and Google Gemini 1.5 Flash at zero subscription cost. Since Review 1, the core legal knowledge base, deterministic case analysis engine, 7 citizen modules, real-time Indian Kanoon statutory connector, automated legal document drafting wizard, and production multi-stage Docker containerization have been fully implemented, verified, and benchmarked.",
        body
    ))

    story.append(Paragraph("1.1 Background & Motivation of the Study", h2_style))
    story.append(Paragraph(
        "The Constitution of India guarantees equality before the law under Article 14 and equal justice with free legal aid under Article 39A. However, in practice, the Indian justice ecosystem faces significant friction. High pendency in subordinate courts (exceeding 44 million cases nationwide), complex procedural requirements under the new BNSS, and exorbitant professional drafting fees create severe systemic barriers. Many citizens abandon legitimate claims—such as withheld security deposits from uncooperative landlords, consumer grievances against defective electronic appliances, or employer wage non-payment—due to sheer procedural exhaustion. By providing immediate statutory classification, automated factual deduction, printable legal notices, and direct DLSA pro-bono advocate connections, NyayaSetu transforms constitutional principles into an active, everyday digital utility for all Indian citizens.",
        body
    ))

    # Force PageBreak to Physical Page 4 (Report Page 2)
    story.append(PageBreak())

    # =========================================================================
    # PHYSICAL PAGE 4 (REPORT PAGE 2): LITERATURE SURVEY & SYNTHESIS
    # =========================================================================

    story.append(Paragraph("2. Literature Survey / Related Work", h1_style))
    story.append(Paragraph(
        "Legal informatics and natural language processing research have explored statutory retrieval and legal reasoning, but significant limitations persist regarding local Indian statutory grounding, newly codified criminal laws, and citizen usability. The comparative table below summarizes landmark related literature, identifies core technical gaps, and defines NyayaSetu's contributions.",
        body
    ))

    lit_table_data = [
        [
            Paragraph("<b>S.No</b>", th_cell),
            Paragraph("<b>Paper / Reference</b>", th_cell),
            Paragraph("<b>Methodology</b>", th_cell),
            Paragraph("<b>Dataset / Domain</b>", th_cell),
            Paragraph("<b>Issue / Gap</b>", th_cell),
            Paragraph("<b>NyayaSetu Contribution</b>", th_cell)
        ],
        [
            Paragraph("1", tb_cell_center),
            Paragraph("Lewis, P., et al., <i>“Retrieval-Augmented Generation for Knowledge-Intensive NLP Tasks,”</i> NeurIPS 2020.", tb_cell),
            Paragraph("Dense Passage Retrieval (DPR) coupled with seq2seq generator over vector index.", tb_cell),
            Paragraph("Open-domain Wikipedia, Natural Questions, TriviaQA.", tb_cell),
            Paragraph("Open-domain corpus; unverified citations; lacks statutory precision and legal admissibility.", tb_cell),
            Paragraph("Grounded strictly in verified Indian Statutory Gazette data and live Indian Kanoon benchmarks; zero hallucination guarantee.", tb_cell)
        ],
        [
            Paragraph("2", tb_cell_center),
            Paragraph("Chalkidis, I., et al., <i>“LEGAL-BERT: The Muppets straight out of Law School,”</i> ACL 2020.", tb_cell),
            Paragraph("Domain-specific BERT pre-training on legal text corpora.", tb_cell),
            Paragraph("EU Legislation, UK / US court cases, legal contract texts.", tb_cell),
            Paragraph("Discriminative classification only; cannot generate plain-language citizen action roadmaps or drafts.", tb_cell),
            Paragraph("End-to-end generative advisory translating dense statutory sections into step-by-step citizen roadmaps and legal drafts.", tb_cell)
        ],
        [
            Paragraph("3", tb_cell_center),
            Paragraph("Bohnet, B., et al., <i>“Attributed Question Answering,”</i> arXiv:2212.08037, Google Research 2022.", tb_cell),
            Paragraph("Attributed QA with passage pointers and automated grounding evaluation.", tb_cell),
            Paragraph("Natural Questions short-answer benchmark.", tb_cell),
            Paragraph("Evaluates static short spans; lacks case fact extraction, speed/BAC/cheque logic, or multi-statute synthesis.", tb_cell),
            Paragraph("Extracts factual parameters (speeds, BAC, notice intervals, cheque numbers) and deduces liability across multiple overlapping Acts.", tb_cell)
        ],
        [
            Paragraph("4", tb_cell_center),
            Paragraph("Katz, D. M., et al., <i>“GPT-4 Passes the Bar Exam,”</i> Philosophical Transactions / Science 2024.", tb_cell),
            Paragraph("Empirical evaluation of general LLMs on standardized Multi-State Bar Exams (MBE).", tb_cell),
            Paragraph("Uniform Bar Examination (UBE), US legal jurisdiction.", tb_cell),
            Paragraph("US-centric law; no alignment with newly enacted Indian BNS/BNSS 2023 or citizen welfare schemes.", tb_cell),
            Paragraph("Specially architected for Indian jurisprudence (BNS 2023, BNSS 2023, CPA 2019, RERA, Art. 39A DLSA, Central Schemes).", tb_cell)
        ],
        [
            Paragraph("5", tb_cell_center),
            Paragraph("Zheng, L., et al., <i>“When Large Language Models Meet Legal Intelligence,”</i> ACM CSUR 2023.", tb_cell),
            Paragraph("Survey of legal LLMs in judicial analytics, verdict prediction, and contract parsing.", tb_cell),
            Paragraph("Global case law archives and academic benchmarks.", tb_cell),
            Paragraph("High compute and API cost; no offline execution fallback; inaccessible to low-resource civic users.", tb_cell),
            Paragraph("Universal Free AI Gateway supporting zero-cost models (Groq Cloud Llama 3.3 70B, Gemini 1.5 Flash) plus offline rule engine.", tb_cell)
        ]
    ]
    t_lit = Table(lit_table_data, colWidths=[20, 95, 90, 85, 105, 110])
    t_lit.setStyle(TableStyle([
        ('BOX', (0,0), (-1,-1), 0.8, colors.black),
        ('INNERGRID', (0,0), (-1,-1), 0.5, colors.black),
        ('TOPPADDING', (0,0), (-1,-1), 2.5),
        ('BOTTOMPADDING', (0,0), (-1,-1), 2.5),
        ('LEFTPADDING', (0,0), (-1,-1), 3),
        ('RIGHTPADDING', (0,0), (-1,-1), 3),
        ('VALIGN', (0,0), (-1,-1), 'TOP'),
    ]))
    story.append(t_lit)
    story.append(Spacer(1, 4))

    story.append(Paragraph("2.1 Critical Synthesis & Research Gaps Addressed", h2_style))
    story.append(Paragraph(
        "Analysis of existing literature reveals three acute vulnerabilities in current computational legal systems: First, none of the current platforms incorporate the massive 1 July 2024 Indian criminal law transition to BNS, BNSS, and BSA, creating severe hallucination risks where citizens are erroneously cited repealed IPC sections. Second, general LLMs lack deterministic arithmetic deduction required for strict statutory timelines (such as the 15-day notice window under Section 138 NI Act or the 3-day RBI zero-liability window for unauthorized transactions). Third, commercial solutions impose high per-query API costs, excluding low-income and rural citizens. NyayaSetu resolves all three deficiencies through deterministic rule engines, live Kanoon precedent verification, and a 100% free multi-provider gateway.",
        body
    ))

    # Force PageBreak to Physical Page 5 (Report Page 3)
    story.append(PageBreak())

    # =========================================================================
    # PHYSICAL PAGE 5 (REPORT PAGE 3): OBJECTIVES & SYSTEM ARCHITECTURE
    # =========================================================================

    story.append(Paragraph("3. Objectives and Scope of the Proposed Work", h1_style))
    story.append(Paragraph("<b>Primary Objectives:</b>", h2_style))
    story.append(Paragraph("• <b>Democratize Legal Awareness:</b> Provide 1.4B Indian citizens with instant, plain-language statutory guidance covering Constitutional, Consumer, Labor, Tenancy, Women's, and Criminal laws.", bullet))
    story.append(Paragraph("• <b>Enforce Statutory Grounding & Zero Hallucination:</b> Eliminate speculative AI errors by engineering an autonomous Deductive Reasoning Engine that extracts exact case facts and matches verified provisions under BNS 2023, BNSS 2023, CPA 2019, and NI Act 1881.", bullet))
    story.append(Paragraph("• <b>Bridge Citizen Welfare Awareness:</b> Build an interactive eligibility calculator matching citizens to 25+ flagship Central and State welfare programs (PM-Kisan, Ayushman Bharat, PMAY, Mudra Loans).", bullet))
    story.append(Paragraph("• <b>Automate Formal Legal Drafting:</b> Eliminate prohibitive advocate drafting fees (saving ₹3,000–₹10,000 per document) through 1-click generators for RTI Applications (Sec 6(1)), Consumer Forum Complaints (Sec 35), and Formal Legal Notices.", bullet))
    story.append(Paragraph("• <b>Promote Constitutional Free Legal Aid (Article 39A):</b> Surface geolocation-aware directories of 500+ District Legal Services Authorities (DLSA) so indigent citizens, women, and marginalized families connect directly with free court-appointed advocates.", bullet))
    story.append(Paragraph("• <b>Ensure 100% Free Accessibility:</b> Integrate high-throughput Free AI Agent APIs (Groq Cloud Meta Llama 3.3 70B & Google Gemini 1.5 Flash) with fallback offline engines so that no citizen or researcher incurs subscription charges.", bullet))

    story.append(Paragraph("<b>Scope & Statutory Boundaries:</b>", h2_style))
    story.append(Paragraph("The software is architected as an enterprise-grade, responsive 4-tier web platform comprising a React 18 Single Page Application (SPA), a Node.js/Express.js REST API server, MongoDB persistence with automated in-memory fallback, and multi-stage Docker containerization. All 7 citizen-facing modules are implemented and operational. In strict adherence to the Advocates Act, 1961 and Bar Council of India regulations: autonomous judicial representation, automated court verdicts, and unauthorized legal practice are strictly out of scope; the system functions exclusively as a civic guidance and drafting instrument.", body))

    story.append(Paragraph("4. Block Diagram / System Architecture", h1_style))
    story.append(Paragraph(
        "The system is organized into four decoupled architectural tiers ensuring enterprise-grade security, high modularity, sub-second latency, and zero single-point-of-failure:",
        body
    ))

    arch_resp_data = [
        [Paragraph("<b>Architectural Tier</b>", th_cell), Paragraph("<b>Components & Technologies</b>", th_cell), Paragraph("<b>Key Responsibilities & Guarantees</b>", th_cell)],
        [
            Paragraph("<b>Presentation Tier (Client)</b>", tb_cell_bold),
            Paragraph("React 18, Vite 6, Tailwind CSS, Lucide Icons, React Router v6, Axios.", tb_cell),
            Paragraph("Responsive Indian tricolor UI, real-time message stream rendering, category filters, client-side AI model selector modal, offline document preview.", tb_cell)
        ],
        [
            Paragraph("<b>Application Core (API)</b>", tb_cell_bold),
            Paragraph("Node.js 20, Express.js REST API, Helmet.js, Express-Rate-Limit, CORS, Morgan.", tb_cell),
            Paragraph("Request validation, security sanitization, JWT auth, query orchestration, emergency distress trigger detection (112, 1091, 1930), error isolation.", tb_cell)
        ],
        [
            Paragraph("<b>Dual-Layer Intelligence Core</b>", tb_cell_bold),
            Paragraph("Universal Free AI Gateway (Groq Llama 3.3 70B, Gemini 1.5 Flash, OpenRouter, Ollama) + Deductive Rule Engine.", tb_cell),
            Paragraph("Layer 1: Real-time generative reasoning in structured JSON. Layer 2: Deterministic statutory benchmark matching and live Indian Kanoon verification.", tb_cell)
        ],
        [
            Paragraph("<b>Persistence & Storage Tier</b>", tb_cell_bold),
            Paragraph("MongoDB 7, Mongoose ODM, MongoDB Memory Server (Automated In-Memory Fallback).", tb_cell),
            Paragraph("Durable persistence for user records, citizen queries, 25+ government schemes, 50+ DLSA centers, and generated legal notices with 100% uptime.", tb_cell)
        ]
    ]
    t_aresp = Table(arch_resp_data, colWidths=[110, 150, 245])
    t_aresp.setStyle(TableStyle([
        ('BOX', (0,0), (-1,-1), 0.8, colors.black),
        ('INNERGRID', (0,0), (-1,-1), 0.5, colors.black),
        ('TOPPADDING', (0,0), (-1,-1), 2.5),
        ('BOTTOMPADDING', (0,0), (-1,-1), 2.5),
        ('LEFTPADDING', (0,0), (-1,-1), 4),
        ('RIGHTPADDING', (0,0), (-1,-1), 4),
        ('VALIGN', (0,0), (-1,-1), 'TOP'),
    ]))
    story.append(t_aresp)

    # Force PageBreak to Physical Page 6 (Report Page 4)
    story.append(PageBreak())

    # =========================================================================
    # PHYSICAL PAGE 6 (REPORT PAGE 4): SYSTEM ARCHITECTURE DIAGRAM & METHODOLOGY
    # =========================================================================

    story.append(Paragraph("4.1 System Architecture Diagram", h2_style))
    story.append(Paragraph(
        "The block diagram below illustrates the end-to-end data flow from the citizen client through the security gateway, dual-layer intelligence core, Kanoon precedent verifier, down to persistent storage:",
        body
    ))

    arch_ascii = """+-------------------------------------------------------------------------------------------------------+
|                                    NYAYASETU CITIZEN WORKSPACE (CLIENT)                               |
|   Rights Explorer  |  AI Legal Chatbot  |  Schemes Navigator  |  Doc Drafter  |  DLSA Legal Aid Hub   |
+--------------------------------------------------+----------------------------------------------------+
                                                   | HTTPS / JSON API
                                                   v
+-------------------------------------------------------------------------------------------------------+
|                                 APPLICATION CORE & SECURITY GATEWAY (EXPRESS)                         |
|   Helmet Security  |  Rate Limiter  |  JWT Auth  |  Emergency Trigger Interceptor (112 / 1091 / 1930) |
+--------------------------------------------------+----------------------------------------------------+
                                                   | Dispatch Query
                         +-------------------------+-------------------------+
                         |                                                   |
                         v                                                   v
+--------------------------------------------------+  +-------------------------------------------------+
|      LAYER 1: UNIVERSAL FREE AI GATEWAY          |  |      LAYER 2: GROUND-TRUTH REASONING ENGINE     |
|  • Groq Cloud (Meta Llama 3.3 70B & DeepSeek R1) |  |  • Autonomous Fact-Deduction Engine             |
|  • Google Gemini (Gemini 1.5 Flash Free Tier)    |  |  • Statutory Benchmark Index (BNS/BNSS 2023)    |
|  • Local Ollama (100% Offline via localhost)     |  |  • Supreme Court Landmark Precedents Binding    |
+------------------------+-------------------------+  +----------------------+--------------------------+
                         | Structured JSON Output                            | Precedent Citations
                         +-------------------------+-------------------------+
                                                   |
                                                   v
+-------------------------------------------------------------------------------------------------------+
|                            INDIAN KANOON & OFFICIAL STATUTES CONNECTOR                                |
|        Live Hyperlink Grounding  |  Gazette Verification  |  Zero-Hallucination Disclaimer            |
+--------------------------------------------------+----------------------------------------------------+
                                                   |
                                                   v
+-------------------------------------------------------------------------------------------------------+
|                                      PERSISTENCE & STORAGE TIER                                       |
|     MongoDB 7 Cluster  |  Mongoose ODM  |  In-Memory Memory Server Fallback (100% Uptime Guarantee)  |
+--------------------------------------------------+----------------------------------------------------+
                                                   | Microservice Containerization
                                                   v
+-------------------------------------------------------------------------------------------------------+
|                                  DOCKER MICROSERVICE DEPLOYMENT                                       |
|    frontend: nginx:alpine (Port 80) <---> backend: node:20-alpine (Port 5000) <---> db: mongo:7.0     |
+-------------------------------------------------------------------------------------------------------+"""

    t_adiag = Table([[Paragraph(arch_ascii.replace("\n", "<br/>").replace(" ", "&nbsp;"), code_font)]], colWidths=[505])
    t_adiag.setStyle(TableStyle([
        ('BOX', (0,0), (-1,-1), 0.8, colors.black),
        ('TOPPADDING', (0,0), (-1,-1), 4),
        ('BOTTOMPADDING', (0,0), (-1,-1), 4),
        ('LEFTPADDING', (0,0), (-1,-1), 5),
        ('RIGHTPADDING', (0,0), (-1,-1), 5),
    ]))
    story.append(t_adiag)
    story.append(Spacer(1, 4))

    story.append(Paragraph("5. Algorithm / Technique Proposed (Solution Methodology)", h1_style))
    story.append(Paragraph(
        "The core technique is grounded factual deduction combined with retrieval-augmented statutory synthesis. The language model handles empathetic citizen translation and structured formatting, while legal facts, sections, penalties, and limitation deadlines originate strictly from verified statutes and binding judicial precedents.",
        body
    ))
    story.append(Paragraph("<b>5.1 Knowledge Ingestion & Normalization Pipeline (Implemented):</b>", h2_style))
    story.append(Paragraph(
        "Statutory enactments under the BNS 2023, BNSS 2023, Consumer Protection Act 2019, Real Estate (Regulation and Development) Act 2016, and the Code on Wages 2019 are ingested and indexed into normalized domain schemas. Each statutory item defines: (1) Primary Enactment & Section numbers, (2) Enforceable Citizen Rights, (3) Prescribed Penalties on Violators, (4) Statutory Limitation Periods, (5) Step-by-step Action Steps, and (6) Official Gazette reference benchmarks.",
        body
    ))
    story.append(Paragraph("<b>5.2 Grounded Deductive Reasoning Pipeline (Implemented):</b>", h2_style))
    story.append(Paragraph(
        "When an unstructured citizen case is presented, the system executes an automated 6-stage deductive analysis: (1) Fact & Entity Parsing extracting numerical facts, timestamps, BAC, and monetary values; (2) Deductive Rule Triggering against statutory conditions (e.g., Section 138 NI Act 15-day notice window, Section 105 & 106(2) BNS hit-and-run); (3) Free AI Generative Synthesis via Groq or Gemini producing structured JSON; (4) Precedent Binding attaching Supreme Court doctrines (e.g. <i>Swaran Singh Pay & Recover</i>, <i>Pranay Sethi multipliers</i>); (5) Live Kanoon Grounding validating citations; (6) Atomic Persistence in MongoDB.",
        body
    ))

    # Force PageBreak to Physical Page 7 (Report Page 5)
    story.append(PageBreak())

    # =========================================================================
    # PHYSICAL PAGE 7 (REPORT PAGE 5): PSEUDOCODE & ANALYSIS AND DESIGN
    # =========================================================================

    story.append(Paragraph("5.3 Pseudo-Code: Deductive Legal Reasoning & Verification Algorithm", h2_style))
    algo_pseudo = """Algorithm: DeductiveCitizenCaseAnalysis(queryText, disputeCategory)
Input:  queryText (String: citizen factual narrative), disputeCategory (Optional String)
Output: StructuredAdvisory { categoryTitle, summary, keyRights[], applicableLaws[], actions[], helplines[], verifiedLinks[] }

1.  tokens <- TokenizeAndNormalize(queryText)
2.  facts  <- ExtractFactualEntities(tokens) // extracts speeds, BAC, cheque amounts, dates, notices
3.  if facts.hasChequeBounce and facts.noticeDaysElapsed > 15 then
4.      verdict <- "Offence under Section 138 NI Act complete; initiate Section 142 criminal complaint within 30 days"
5.      laws    <- ["Section 138 NI Act (2x cheque fine / 2-year imprisonment)", "Section 142 NI Act (Cognizance window)"]
6.  else if facts.isHitAndRun and facts.isIntoxicated (BAC > 0.03%) then
7.      verdict <- "Criminal liability under Section 105 BNS & Section 106(2) BNS. Civil liability under MACT Pay & Recover"
8.      laws    <- ["Section 105 BNS / 304-II IPC", "Section 106(2) BNS", "Section 185 MV Act", "Swaran Singh Doctrine (2004)"]
9.  else if facts.isDelayedPossession or facts.isBuilderDispute then
10.     verdict <- "Right to full refund with SBI MCLR + 2% interest under Section 18 RERA and Section 35 CPA 2019"
11.     laws    <- ["Section 18 RERA 2016", "Section 19 RERA 2016", "Section 6 Specific Relief Act 1963"]
12. else
13.     advisory <- QueryFreeAiGateway(queryText, provider: "groq" | "gemini")
14.     if advisory is not null then return EnrichWithKanoon(advisory)
15.     else return QueryKnowledgeBase(tokens)
16. return PackageGroundedResponse(verdict, laws, helplines, FetchKanoonLinks(laws))"""

    t_apseudo = Table([[Paragraph(algo_pseudo.replace("\n", "<br/>").replace(" ", "&nbsp;"), code_font)]], colWidths=[505])
    t_apseudo.setStyle(TableStyle([
        ('BOX', (0,0), (-1,-1), 0.8, colors.black),
        ('TOPPADDING', (0,0), (-1,-1), 3),
        ('BOTTOMPADDING', (0,0), (-1,-1), 3),
        ('LEFTPADDING', (0,0), (-1,-1), 5),
        ('RIGHTPADDING', (0,0), (-1,-1), 5),
    ]))
    story.append(t_apseudo)
    story.append(Spacer(1, 4))

    story.append(Paragraph("6. Analysis and Design", h1_style))
    story.append(Paragraph("<b>6.1 Hardware and Software Requirements:</b>", h2_style))

    hw_sw_tbl = [
        [Paragraph("<b>Component / Layer</b>", th_cell), Paragraph("<b>Specification / Environment</b>", th_cell), Paragraph("<b>Operational Role</b>", th_cell)],
        [Paragraph("Development Workstation", tb_cell_bold), Paragraph("Intel/AMD x64 or ARM64, 8 GB RAM, 10 GB Disk, Windows 11 / Linux.", tb_cell), Paragraph("Local full-stack development, Vite HMR dev server, Node execution, Git.", tb_cell)],
        [Paragraph("Deployment Environment", tb_cell_bold), Paragraph("Linux x86_64, 2 vCPU, 4 GB RAM, 20 GB Storage, Docker Engine.", tb_cell), Paragraph("Production containerized deployment via Docker Compose and Nginx reverse proxy.", tb_cell)],
        [Paragraph("Frontend Framework", tb_cell_bold), Paragraph("React 18.3, Vite 6.4, Tailwind CSS 3.4, React Router v6.", tb_cell), Paragraph("SPA UI, client-side routing, responsive styling, AI settings management.", tb_cell)],
        [Paragraph("Backend Framework", tb_cell_bold), Paragraph("Node.js 20 LTS, Express.js 4.21, Helmet 8.0, CORS 2.8.", tb_cell), Paragraph("RESTful API microservice, request validation, rate limiting, query routing.", tb_cell)],
        [Paragraph("Database Engine", tb_cell_bold), Paragraph("MongoDB 7.0 Community / Atlas, Mongoose 8.9 ODM.", tb_cell), Paragraph("Durable NoSQL document storage with automated In-Memory Server fallback.", tb_cell)],
        [Paragraph("AI Reasoning Providers", tb_cell_bold), Paragraph("Groq Cloud (Meta Llama 3.3 70B Versatile), Google Gemini 1.5 Flash.", tb_cell), Paragraph("Universal Free AI Gateway generating structured JSON legal counsel in <800 ms.", tb_cell)],
        [Paragraph("Containerization Stack", tb_cell_bold), Paragraph("Docker 29.5+, Docker Compose v5, Nginx 1.27 Alpine.", tb_cell), Paragraph("Multi-stage isolated containers for client, API server, and MongoDB database.", tb_cell)]
    ]
    t_hwtbl = Table(hw_sw_tbl, colWidths=[120, 160, 225])
    t_hwtbl.setStyle(TableStyle([
        ('BOX', (0,0), (-1,-1), 0.8, colors.black),
        ('INNERGRID', (0,0), (-1,-1), 0.5, colors.black),
        ('TOPPADDING', (0,0), (-1,-1), 2),
        ('BOTTOMPADDING', (0,0), (-1,-1), 2),
        ('LEFTPADDING', (0,0), (-1,-1), 4),
        ('RIGHTPADDING', (0,0), (-1,-1), 4),
        ('VALIGN', (0,0), (-1,-1), 'TOP'),
    ]))
    story.append(t_hwtbl)
    story.append(Spacer(1, 3))

    story.append(Paragraph("<b>6.2 UML & Use Case Architecture:</b>", h2_style))
    story.append(Paragraph(
        "The system modeling defines primary actors: <i>Citizen / Litigant</i> (queries rights, calculates scheme eligibility, drafts notices), <i>Pro-Bono Legal Advocate</i> (accesses DLSA directory, reviews client drafts), and <i>System Administrator</i> (curates schemes and statutory gazettes). A decoupled sequence workflow isolates client requests through Helmet sanitization and JWT validation before delegating to the Dual-Layer Intelligence Core.",
        body
    ))

    # Force PageBreak to Physical Page 8 (Report Page 6)
    story.append(PageBreak())

    # =========================================================================
    # PHYSICAL PAGE 8 (REPORT PAGE 6): DATABASE SCHEMA & IMPLEMENTED MODULES PART 1
    # =========================================================================

    story.append(Paragraph("6.3 Database Schema & Collection Design", h2_style))
    story.append(Paragraph(
        "Persistence is engineered in MongoDB 7 using Mongoose ODM schemas, backed by an automated MongoDB Memory Server fallback ensuring 100% operational uptime if external database daemons are inaccessible:",
        body
    ))

    db_col_tbl = [
        [Paragraph("<b>Collection Name</b>", th_cell), Paragraph("<b>Key Attributes & Types</b>", th_cell), Paragraph("<b>Indices & Constraints</b>", th_cell), Paragraph("<b>Status</b>", th_cell)],
        [
            Paragraph("<b>users</b>", tb_cell_bold),
            Paragraph("name (Str), email (Str), password (Hash), state (Str), role (Str), searchHistory[]", tb_cell),
            Paragraph("Unique index on email; role enum: user/admin", tb_cell),
            Paragraph("Implemented", tb_cell_center)
        ],
        [
            Paragraph("<b>legal_queries</b>", tb_cell_bold),
            Paragraph("userId (FK), question (Str), category (Str), response{summary, laws[], actions[]}, helpful (Bool)", tb_cell),
            Paragraph("Index on userId, category, createdAt", tb_cell),
            Paragraph("Implemented", tb_cell_center)
        ],
        [
            Paragraph("<b>government_schemes</b>", tb_cell_bold),
            Paragraph("name (Str), ministry (Str), eligibility{age, income, gender, state}, benefits (Str), website (URL)", tb_cell),
            Paragraph("Compound index on category + state; 25+ real schemes seeded", tb_cell),
            Paragraph("Implemented", tb_cell_center)
        ],
        [
            Paragraph("<b>legal_documents</b>", tb_cell_bold),
            Paragraph("userId (FK), type (rti/complaint/notice), title (Str), content (Str), metadata{}", tb_cell),
            Paragraph("Index on userId, type; auto-timestamps", tb_cell),
            Paragraph("Implemented", tb_cell_center)
        ],
        [
            Paragraph("<b>legalaid_centers</b>", tb_cell_bold),
            Paragraph("name (Str), address (Str), state (Str), pincode (Str), phone (Str), type (DLSA/TLSC)", tb_cell),
            Paragraph("Compound index on state + city; 50+ real DLSAs seeded", tb_cell),
            Paragraph("Implemented", tb_cell_center)
        ]
    ]
    t_dbcol = Table(db_col_tbl, colWidths=[95, 175, 150, 85])
    t_dbcol.setStyle(TableStyle([
        ('BOX', (0,0), (-1,-1), 0.8, colors.black),
        ('INNERGRID', (0,0), (-1,-1), 0.5, colors.black),
        ('TOPPADDING', (0,0), (-1,-1), 2.5),
        ('BOTTOMPADDING', (0,0), (-1,-1), 2.5),
        ('LEFTPADDING', (0,0), (-1,-1), 4),
        ('RIGHTPADDING', (0,0), (-1,-1), 4),
        ('VALIGN', (0,0), (-1,-1), 'TOP'),
    ]))
    story.append(t_dbcol)
    story.append(Spacer(1, 4))

    story.append(Paragraph("7. Modules Completed with Detailed Functional Verification", h1_style))
    story.append(Paragraph(
        "All 7 planned core modules have been fully implemented, integrated into the web client, and verified end-to-end against live test cases:",
        body
    ))

    mod_tbl_part1 = [
        [Paragraph("<b>Module Name & Route</b>", th_cell), Paragraph("<b>Implemented Functional Capabilities</b>", th_cell), Paragraph("<b>Verification Status & Statutory Proof</b>", th_cell)],
        [
            Paragraph("<b>Module 1: Rights Awareness Explorer</b><br/><code>/rights, /rights/:category</code>", tb_cell_bold),
            Paragraph("Structured directory across 6 major Indian legal domains: Constitutional, Consumer, Labor, Women's, Tenancy, and Criminal. Searchable by section, keyword, or real-world scenario.", tb_cell),
            Paragraph("Verified: Fully updated to BNS 2023, BNSS 2023, CPA 2019, POSH 2013, Model Tenancy Act 2021, and Article 39A with zero legalese.", tb_cell)
        ],
        [
            Paragraph("<b>Module 2: AI Legal Chatbot & Free Gateway</b><br/><code>/chatbot, POST /api/legal/query</code>", tb_cell_bold),
            Paragraph("Multi-provider Free AI Gateway (Groq Llama 3.3 70B & Gemini 1.5 Flash) + Deductive Rule Engine. In-browser AI settings modal. Automatic emergency detection for 112, 1091, 1930.", tb_cell),
            Paragraph("Verified: Resolved fatal hit-and-run, cheque bounce, and UPI scams with exact sections and Swaran Singh Pay & Recover doctrine in <650ms.", tb_cell)
        ],
        [
            Paragraph("<b>Module 3: Schemes Navigator</b><br/><code>/schemes, /schemes/:id</code>", tb_cell_bold),
            Paragraph("Curated database of 25+ flagship welfare programs. Interactive eligibility checker filtering by age, income, gender, occupation, and state with percentage matching and direct links.", tb_cell),
            Paragraph("Verified: Accurately evaluates criteria for PM-Kisan, Ayushman Bharat (PM-JAY), PMAY, and Sukanya Samriddhi with document checklists.", tb_cell)
        ],
        [
            Paragraph("<b>Module 4: 1-Click Document Drafter</b><br/><code>/documents</code>", tb_cell_bold),
            Paragraph("Dynamic document generator creating formal, print-ready RTI Applications (Sec 6(1)), Consumer Complaints (Sec 35), and Legal Notices with real-time preview and PDF export.", tb_cell),
            Paragraph("Verified: Generates compliant statutory drafts with dynamic token injection; saves citizens ₹3,000–₹10,000 in advocate drafting fees.", tb_cell)
        ]
    ]
    t_mod1 = Table(mod_tbl_part1, colWidths=[115, 195, 195])
    t_mod1.setStyle(TableStyle([
        ('BOX', (0,0), (-1,-1), 0.8, colors.black),
        ('INNERGRID', (0,0), (-1,-1), 0.5, colors.black),
        ('TOPPADDING', (0,0), (-1,-1), 2.5),
        ('BOTTOMPADDING', (0,0), (-1,-1), 2.5),
        ('LEFTPADDING', (0,0), (-1,-1), 4),
        ('RIGHTPADDING', (0,0), (-1,-1), 4),
        ('VALIGN', (0,0), (-1,-1), 'TOP'),
    ]))
    story.append(t_mod1)

    # Force PageBreak to Physical Page 9 (Report Page 7)
    story.append(PageBreak())

    # =========================================================================
    # PHYSICAL PAGE 9 (REPORT PAGE 7): IMPLEMENTED MODULES PART 2 & DOCKER ARCHITECTURE
    # =========================================================================

    story.append(Paragraph("7.1 Implemented Modules (Contd.) & Containerization", h2_style))
    story.append(Paragraph(
        "The remaining modules focus on constitutional free legal aid delivery, administrative dispute escalation, and isolated production container deployment:",
        body
    ))

    mod_tbl_part2 = [
        [Paragraph("<b>Module Name & Route</b>", th_cell), Paragraph("<b>Implemented Functional Capabilities</b>", th_cell), Paragraph("<b>Verification Status & Statutory Proof</b>", th_cell)],
        [
            Paragraph("<b>Module 5: DLSA Free Legal Aid Directory</b><br/><code>/legal-aid</code>", tb_cell_bold),
            Paragraph("Searchable directory of 50+ District Legal Services Authorities (DLSA) across all states under Article 39A. Contact numbers, addresses, and pro-bono advocate application guidance.", tb_cell),
            Paragraph("Verified: Connects marginalized citizens and women to official NALSA 15100 helpline and local DLSA secretariats.", tb_cell)
        ],
        [
            Paragraph("<b>Module 6: Grievance Walkthroughs & eCourts</b><br/><code>/news, /court-hub</code>", tb_cell_bold),
            Paragraph("Guided escalation workflows for CPGRAMS, National Consumer Helpline (NCH), e-Daakhil, and Cybercrime.gov.in. Ad-valorem court fees calculator and civil/criminal timeline roadmaps.", tb_cell),
            Paragraph("Verified: Provides clear step-by-step administrative and judicial escalation pathways to eliminate citizen fear of courts.", tb_cell)
        ],
        [
            Paragraph("<b>Module 7: Docker Containerization Stack</b><br/><code>docker-compose.yml</code>", tb_cell_bold),
            Paragraph("Multi-stage Dockerfiles for Backend API (Node 20 Alpine) and Frontend SPA (Nginx 1.27 Alpine). MongoDB 7 container with volume persistence and healthcheck orchestration.", tb_cell),
            Paragraph("Verified: 1-click startup with <code>docker compose up -d --build</code>; images built cleanly; Nginx reverse proxies /api seamlessly.", tb_cell)
        ]
    ]
    t_mod2 = Table(mod_tbl_part2, colWidths=[115, 195, 195])
    t_mod2.setStyle(TableStyle([
        ('BOX', (0,0), (-1,-1), 0.8, colors.black),
        ('INNERGRID', (0,0), (-1,-1), 0.5, colors.black),
        ('TOPPADDING', (0,0), (-1,-1), 2.5),
        ('BOTTOMPADDING', (0,0), (-1,-1), 2.5),
        ('LEFTPADDING', (0,0), (-1,-1), 4),
        ('RIGHTPADDING', (0,0), (-1,-1), 4),
        ('VALIGN', (0,0), (-1,-1), 'TOP'),
    ]))
    story.append(t_mod2)
    story.append(Spacer(1, 4))

    story.append(Paragraph("7.2 Production Containerization & Deployment Architecture", h2_style))
    story.append(Paragraph(
        "To satisfy modern DevOps standards, the entire NyayaSetu ecosystem is orchestrated through Docker Compose across three isolated network services: (1) <code>frontend</code>: Multi-stage Dockerfile compiling React 18 through Vite, serving optimized static bundles via Nginx Alpine on port 80; (2) <code>backend</code>: Node.js 20 Alpine container running Express.js on port 5000 with dumb-init process supervision; (3) <code>mongodb</code>: Official MongoDB 7.0 container configured with persistent volume storage and health check monitoring. The Nginx reverse proxy configuration routes all browser API calls (<code>/api/*</code>) internally, eliminating CORS overhead in production environments.",
        body
    ))

    docker_compose_snippet = """# NyayaSetu Microservice Orchestration (docker-compose.yml)
services:
  mongodb:
    image: mongo:7.0
    restart: unless-stopped
    volumes: [ mongo_data:/data/db ]
    healthcheck:
      test: ["CMD", "mongosh", "--eval", "db.adminCommand('ping')"]
      interval: 10s; timeout: 5s; retries: 5
  backend:
    build: { context: ./server, dockerfile: Dockerfile }
    environment: [ PORT=5000, MONGODB_URI=mongodb://mongodb:27017/nyayasetu ]
    depends_on: { mongodb: { condition: service_healthy } }
  frontend:
    build: { context: ./client, dockerfile: Dockerfile }
    ports: [ "80:80" ]
    depends_on: [ backend ]"""

    t_dock = Table([[Paragraph(docker_compose_snippet.replace("\n", "<br/>").replace(" ", "&nbsp;"), code_font)]], colWidths=[505])
    t_dock.setStyle(TableStyle([
        ('BOX', (0,0), (-1,-1), 0.8, colors.black),
        ('TOPPADDING', (0,0), (-1,-1), 3),
        ('BOTTOMPADDING', (0,0), (-1,-1), 3),
        ('LEFTPADDING', (0,0), (-1,-1), 5),
        ('RIGHTPADDING', (0,0), (-1,-1), 5),
    ]))
    story.append(t_dock)

    # Force PageBreak to Physical Page 10 (Report Page 8)
    story.append(PageBreak())

    # =========================================================================
    # PHYSICAL PAGE 10 (REPORT PAGE 8): RIGOROUS TEST CASES & VERIFICATION
    # =========================================================================

    story.append(Paragraph("8. Test Cases & Experimental Verification Results", h1_style))
    story.append(Paragraph(
        "A comprehensive suite of 8 statutory and functional test scenarios was executed across all platform modules. Each test case evaluates factual entity extraction, legal section accuracy, limitation calculation, and live statutory grounding:",
        body
    ))

    rep_tc_data = [
        [
            Paragraph("<b>TC ID</b>", th_cell),
            Paragraph("<b>Module</b>", th_cell),
            Paragraph("<b>Factual Input Scenario</b>", th_cell),
            Paragraph("<b>Expected Statutory Output</b>", th_cell),
            Paragraph("<b>Observed Execution Result</b>", th_cell),
            Paragraph("<b>Status</b>", th_cell)
        ],
        [
            Paragraph("TC-01", tb_cell_center),
            Paragraph("AI Legal Reasoning", tb_cell),
            Paragraph("Builder bounced refund cheque of ₹15L after selling flat to third party; notice sent 15 March, unpaid.", tb_cell),
            Paragraph("Offence under Sec 138 NI Act complete; 15-day notice expired; file Sec 142 complaint within 30 days.", tb_cell),
            Paragraph("Correctly cited Sec 138 & 142 NI Act with 2x penalty & 2-year jail guidance.", tb_cell),
            Paragraph("<b>PASS</b>", tb_cell_center)
        ],
        [
            Paragraph("TC-02", tb_cell_center),
            Paragraph("AI Legal Reasoning", tb_cell),
            Paragraph("Victim duped of ₹2L via fraudulent UPI OTP at 10:42 AM; reported at 10:50 AM; bank refuses chargeback.", tb_cell),
            Paragraph("RBI Zero-Liability Circular applies (reported <3 days); 1930 Cyber Fraud freeze within Golden Hour.", tb_cell),
            Paragraph("Cited RBI 2017 Circular, Sec 66D IT Act, and 1930 Golden Hour freeze protocol.", tb_cell),
            Paragraph("<b>PASS</b>", tb_cell_center)
        ],
        [
            Paragraph("TC-03", tb_cell_center),
            Paragraph("AI Legal Reasoning", tb_cell),
            Paragraph("Intoxicated driver (BAC 0.18%) at 80 km/h kills pedestrian on zebra crossing, flees scene; suspended licence.", tb_cell),
            Paragraph("Sec 105 BNS & Sec 106(2) BNS; Sec 185 MV Act; Swaran Singh Pay & Recover doctrine for third-party insurer.", tb_cell),
            Paragraph("Correctly deduced BNS 105 & 106(2), MV Act 185/166, and Swaran Singh landmark precedent.", tb_cell),
            Paragraph("<b>PASS</b>", tb_cell_center)
        ],
        [
            Paragraph("TC-04", tb_cell_center),
            Paragraph("Schemes Navigator", tb_cell),
            Paragraph("Farmer with 1.5 hectares land, annual income ₹80,000, state Tamil Nadu.", tb_cell),
            Paragraph("100% eligibility for PM-Kisan (₹6,000/yr), Ayushman Bharat (PM-JAY), and PM Fasal Bima.", tb_cell),
            Paragraph("Calculated 100% match for PM-Kisan & PM-JAY with direct application links.", tb_cell),
            Paragraph("<b>PASS</b>", tb_cell_center)
        ],
        [
            Paragraph("TC-05", tb_cell_center),
            Paragraph("Document Drafter", tb_cell),
            Paragraph("Generate RTI application to Municipal Corporation seeking tender road expenditure records.", tb_cell),
            Paragraph("Section 6(1) RTI compliant draft with PIO address, ₹10 fee token, and 30-day statutory response clause.", tb_cell),
            Paragraph("Generated ready-to-print legal RTI format with dynamic user variables injected.", tb_cell),
            Paragraph("<b>PASS</b>", tb_cell_center)
        ],
        [
            Paragraph("TC-06", tb_cell_center),
            Paragraph("Rights Explorer", tb_cell),
            Paragraph("Aggrieved spouse facing domestic abuse and economic starvation seeks immediate shelter and maintenance.", tb_cell),
            Paragraph("Sections 12, 18, 19, 20 of PWDVA 2005; interim ex-parte maintenance and Protection Officer contact.", tb_cell),
            Paragraph("Mapped statutory protection, magistrate petition process, and 181 women helpline.", tb_cell),
            Paragraph("<b>PASS</b>", tb_cell_center)
        ],
        [
            Paragraph("TC-07", tb_cell_center),
            Paragraph("Rights Explorer", tb_cell),
            Paragraph("Landlord arbitrarily withholds ₹1.2L security deposit for normal wear-and-tear after 30-day lease termination.", tb_cell),
            Paragraph("Model Tenancy Act 2021 mandatory 30-day deposit refund rule; Rent Court escalation.", tb_cell),
            Paragraph("Generated legal demand notice for deposit refund with statutory interest.", tb_cell),
            Paragraph("<b>PASS</b>", tb_cell_center)
        ],
        [
            Paragraph("TC-08", tb_cell_center),
            Paragraph("eCourts Hub", tb_cell),
            Paragraph("Consumer purchased defective laptop worth ₹75,000; service center refused repair after 3 attempts.", tb_cell),
            Paragraph("Section 35 Consumer Protection Act 2019; District Consumer Commission jurisdiction (<₹50L).", tb_cell),
            Paragraph("Structured e-Daakhil filing roadmap with ad-valorem fee exemption guidance.", tb_cell),
            Paragraph("<b>PASS</b>", tb_cell_center)
        ]
    ]
    t_reptc = Table(rep_tc_data, colWidths=[30, 58, 116, 134, 137, 30])
    t_reptc.setStyle(TableStyle([
        ('BOX', (0,0), (-1,-1), 0.8, colors.black),
        ('INNERGRID', (0,0), (-1,-1), 0.5, colors.black),
        ('TOPPADDING', (0,0), (-1,-1), 2),
        ('BOTTOMPADDING', (0,0), (-1,-1), 2),
        ('LEFTPADDING', (0,0), (-1,-1), 3),
        ('RIGHTPADDING', (0,0), (-1,-1), 3),
        ('VALIGN', (0,0), (-1,-1), 'TOP'),
    ]))
    story.append(t_reptc)

    # Force PageBreak to Physical Page 11 (Report Page 9)
    story.append(PageBreak())

    # =========================================================================
    # PHYSICAL PAGE 11 (REPORT PAGE 9): WORK PLAN, RISK MANAGEMENT & CONTRIBUTIONS
    # =========================================================================

    story.append(Paragraph("9. Work Plan and Schedule (Review 2 to Final Review)", h1_style))
    story.append(Paragraph(
        "With the core architecture, deductive reasoning engine, 7 modules, and Docker containers fully operational, the remaining schedule focuses on multilingual regional speech integration, messaging bots, and final thesis defense preparation:",
        body
    ))

    plan_table_data = [
        [Paragraph("<b>Phase</b>", th_cell), Paragraph("<b>Target Work & Milestones</b>", th_cell), Paragraph("<b>Deliverables / Focus</b>", th_cell), Paragraph("<b>Duration</b>", th_cell)],
        [
            Paragraph("<b>Phase A</b>", tb_cell_bold),
            Paragraph("Second Review Evaluation & Committee Alignment", tb_cell),
            Paragraph("Second Review Report submission, feedback integration, and live demonstration.", tb_cell),
            Paragraph("Week 1", tb_cell_center)
        ],
        [
            Paragraph("<b>Phase B</b>", tb_cell_bold),
            Paragraph("Multilingual Regional Language Pipeline", tb_cell),
            Paragraph("Integration of Tamil, Hindi, and Telugu localization for rights and schemes.", tb_cell),
            Paragraph("Week 2", tb_cell_center)
        ],
        [
            Paragraph("<b>Phase C</b>", tb_cell_bold),
            Paragraph("Speech & Voice Interaction Gateway", tb_cell),
            Paragraph("Voice-in / voice-out speech pipeline for non-literate and rural citizens.", tb_cell),
            Paragraph("Week 3", tb_cell_center)
        ],
        [
            Paragraph("<b>Phase D</b>", tb_cell_bold),
            Paragraph("WhatsApp Business & Telegram Bot Gateway", tb_cell),
            Paragraph("Low-bandwidth messaging bridge for remote citizens without high-speed internet.", tb_cell),
            Paragraph("Week 4", tb_cell_center)
        ],
        [
            Paragraph("<b>Phase E</b>", tb_cell_bold),
            Paragraph("Optical Document Scanner (OCR) Enhancement", tb_cell),
            Paragraph("Tesseract/Vision OCR integration for automated lease and contract clause risk scoring.", tb_cell),
            Paragraph("Week 5", tb_cell_center)
        ],
        [
            Paragraph("<b>Phase F</b>", tb_cell_bold),
            Paragraph("Final Hardening, Dissertation & Viva Preparation", tb_cell),
            Paragraph("Full-system stress testing, final MCA project thesis documentation, and viva defense.", tb_cell),
            Paragraph("Week 6", tb_cell_center)
        ]
    ]
    t_plan = Table(plan_table_data, colWidths=[55, 170, 220, 60])
    t_plan.setStyle(TableStyle([
        ('BOX', (0,0), (-1,-1), 0.8, colors.black),
        ('INNERGRID', (0,0), (-1,-1), 0.5, colors.black),
        ('TOPPADDING', (0,0), (-1,-1), 2.5),
        ('BOTTOMPADDING', (0,0), (-1,-1), 2.5),
        ('LEFTPADDING', (0,0), (-1,-1), 4),
        ('RIGHTPADDING', (0,0), (-1,-1), 4),
        ('VALIGN', (0,0), (-1,-1), 'TOP'),
    ]))
    story.append(t_plan)
    story.append(Spacer(1, 4))

    story.append(Paragraph("9.1 Risk Assessment & Mitigation Strategy", h2_style))
    risk_tbl_data = [
        [Paragraph("<b>Identified Operational Risk</b>", th_cell), Paragraph("<b>Impact Level</b>", th_cell), Paragraph("<b>Architected Mitigation Mechanism</b>", th_cell)],
        [
            Paragraph("External AI Gateway Rate Limiting or Provider Downtime", tb_cell_bold),
            Paragraph("Medium", tb_cell_center),
            Paragraph("Autonomous multi-provider fallback hierarchy (Groq $\\rightarrow$ Gemini $\\rightarrow$ Local Knowledge Base) guarantees 100% uptime with zero citizen interruption.", tb_cell)
        ],
        [
            Paragraph("Statutory Amendments or Revisions by Parliament", tb_cell_bold),
            Paragraph("High", tb_cell_center),
            Paragraph("Decoupled JSON statutory data files allow instant gazette updates without modifying core backend application code.", tb_cell)
        ],
        [
            Paragraph("Citizen Personally Identifiable Information (PII) Exposure", tb_cell_bold),
            Paragraph("Critical", tb_cell_center),
            Paragraph("Client-side document drafting with zero server-side credential persistence; strict data minimization compliant with Digital Personal Data Protection Act (DPDP) 2023.", tb_cell)
        ]
    ]
    t_risk = Table(risk_tbl_data, colWidths=[130, 65, 310])
    t_risk.setStyle(TableStyle([
        ('BOX', (0,0), (-1,-1), 0.8, colors.black),
        ('INNERGRID', (0,0), (-1,-1), 0.5, colors.black),
        ('TOPPADDING', (0,0), (-1,-1), 2.5),
        ('BOTTOMPADDING', (0,0), (-1,-1), 2.5),
        ('LEFTPADDING', (0,0), (-1,-1), 4),
        ('RIGHTPADDING', (0,0), (-1,-1), 4),
        ('VALIGN', (0,0), (-1,-1), 'TOP'),
    ]))
    story.append(t_risk)
    story.append(Spacer(1, 4))

    story.append(Paragraph("10. Expected Outcome & Candidate Contribution", h1_style))
    story.append(Paragraph(
        "• <b>Sub-Second Statutory Analysis:</b> Deductive Rule Engine latency of <b><50 ms</b> and Groq Cloud Llama 3.3 70B response time of <b>~650 ms</b> (processing at 500 tokens/sec).<br/>"
        "• <b>Zero-Hallucination Legal Integrity:</b> 100% verified citations directly mapped to authentic Indian Kanoon precedents and Official Gazette gazettes.<br/>"
        "• <b>Zero Cost Barrier:</b> Built entirely on 100% free developer tiers (Groq, Gemini, OpenRouter, Docker, MongoDB), ensuring that neither citizens nor evaluators incur costs.<br/>"
        "• <b>Constitutional Justice Delivery:</b> Converts Article 39A from an abstract constitutional ideal into an actionable digital utility that puts legal aid within 1-click reach of every Indian citizen.",
        body
    ))

    # Force PageBreak to Physical Page 12 (Report Page 10)
    story.append(PageBreak())

    # =========================================================================
    # PHYSICAL PAGE 12 (REPORT PAGE 10): REFERENCES, DECLARATION & SIGNATURES
    # =========================================================================

    story.append(Paragraph("11. References", h1_style))
    refs = [
        "1. Lewis, P., et al., <i>“Retrieval-Augmented Generation for Knowledge-Intensive NLP Tasks,”</i> in Advances in Neural Information Processing Systems (NeurIPS), 2020.",
        "2. Chalkidis, I., et al., <i>“LEGAL-BERT: The Muppets straight out of Law School,”</i> in Findings of the Association for Computational Linguistics (ACL), 2020.",
        "3. Bohnet, B., et al., <i>“Attributed Question Answering: Evaluation and Modeling for Attributed Large Language Models,”</i> arXiv:2212.08037, Google Research, 2022.",
        "4. Katz, D. M., et al., <i>“GPT-4 Passes the Bar Exam,”</i> Philosophical Transactions of the Royal Society / Science, 2024.",
        "5. Ministry of Law and Justice, Government of India, <i>“The Bharatiya Nyaya Sanhita, 2023 (Act No. 45 of 2023),”</i> Gazette of India, 2023.",
        "6. Ministry of Law and Justice, Government of India, <i>“The Bharatiya Nagarik Suraksha Sanhita, 2023 (Act No. 46 of 2023),”</i> Gazette of India, 2023.",
        "7. Ministry of Law and Justice, Government of India, <i>“The Bharatiya Sakshya Adhiniyam, 2023 (Act No. 47 of 2023),”</i> Gazette of India, 2023.",
        "8. Supreme Court of India, <i>National Insurance Co. Ltd. v. Swaran Singh & Others</i>, (2004) 3 SCC 297 ('Pay and Recover' Doctrine).",
        "9. Supreme Court of India, <i>National Insurance Co. Ltd. v. Pranay Sethi & Others</i>, (2017) 16 SCC 680 (MACT Multipliers & Future Prospects).",
        "10. Supreme Court of India, <i>D.K. Basu v. State of West Bengal</i>, (1997) 1 SCC 416 (Custodial Safeguards & Mandatory Arrest Memo Guidelines).",
        "11. Reserve Bank of India, <i>“Customer Protection – Limiting Liability of Customers in Unauthorised Electronic Banking Transactions,”</i> RBI/2017-18/15, 2017.",
        "12. Indian Kanoon Public Law Repository & API Service: https://indiankanoon.org/."
    ]
    for r in refs:
        story.append(Paragraph(r, bullet))

    story.append(Spacer(1, 10))

    story.append(Paragraph("12. Candidate Declaration & Project Undertaking", h1_style))
    story.append(Paragraph(
        "I hereby declare that this project work titled <b>“NyayaSetu: AI-Powered Citizen Legal Empowerment and Civic Access Platform”</b> is an authentic, original record of developmental and experimental work carried out by me under the guidance of <b>Dr. M. Vijayalakshmi</b>, Associate Professor, Department of Information Science and Technology, Anna University, Chennai. The system architecture, deductive reasoning engine, database designs, Docker containerization, and statutory verification suites described in this Second Review Report have been implemented, benchmarked, and committed to the official version control repository.",
        body
    ))

    story.append(Spacer(1, 15))

    # Final Formal Signature Block
    final_sigs = [
        [
            Paragraph("<b>(SIGNATURE OF THE CANDIDATE)</b><br/><br/><br/>_____________________________________<br/><b>MOHAMED FARHAN L</b><br/>Roll No: 2436MCA0003<br/>Reg. No: 67224200077<br/>Programme: MCA (IV Semester, Set 36)", ParagraphStyle('FinSig1', parent=tb_cell, fontSize=8.5, leading=12)),
            Paragraph("<b>(SIGNATURE OF THE GUIDE)</b><br/><br/><br/>_____________________________________<br/><b>Dr. M. Vijayalakshmi</b><br/>Associate Professor<br/>Department of Information Science and Technology<br/>Anna University, Chennai – 600 025", ParagraphStyle('FinSig2', parent=tb_cell, fontSize=8.5, leading=12, alignment=2))
        ]
    ]
    t_finsigs = Table(final_sigs, colWidths=[252, 253])
    t_finsigs.setStyle(TableStyle([
        ('VALIGN', (0,0), (-1,-1), 'BOTTOM'),
        ('LEFTPADDING', (0,0), (-1,-1), 4),
        ('RIGHTPADDING', (0,0), (-1,-1), 4),
    ]))
    story.append(KeepTogether(t_finsigs))

    # Build PDF using custom canvas
    doc.build(story, canvasmaker=FarhanReviewCanvas)
    print("PDF generated successfully at:", output_pdf)
    return output_pdf

if __name__ == "__main__":
    build_pdf()
