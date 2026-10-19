/**
 * Curated Indian Legal News & Judicial Reforms Updates
 */

export const legalNewsUpdates = [
  {
    id: 'news-1',
    title: 'Implementation of New Criminal Laws: Bharatiya Nyaya Sanhita, BNSS, and BSA',
    date: '2024-07-01',
    category: 'Criminal Law Reform',
    summary: 'The trio of criminal laws replacing the IPC, CrPC, and Indian Evidence Act came into effect nationwide, introducing Zero FIR statutory status, electronic summons, timeline caps for trials, and community service provisions.',
    source: 'Ministry of Home Affairs / Gazette of India',
    impact: 'Citizens can now lodge Zero FIR at any police station without territorial disputes, forensic examination is mandatory for heinous offences, and victims have statutory rights to progress updates within 90 days.',
    readTime: '4 min',
  },
  {
    id: 'news-2',
    title: 'Supreme Court Mandates Uniform Guidelines for Maintenance in Matrimonial Disputes',
    date: '2024-05-18',
    category: 'Family Law',
    summary: 'Reiterating the landmark Rajnesh v. Neha precedent, the Supreme Court ruled that maintenance orders must date back to the day of filing the application and mandatory affidavits of disclosure of assets and liabilities are strictly enforceable.',
    source: 'Supreme Court of India',
    impact: 'Eliminates procedural delays and income suppression tactics by earning spouses in maintenance litigation under Section 125 CrPC and Domestic Violence Act.',
    readTime: '3 min',
  },
  {
    id: 'news-3',
    title: 'Central Consumer Protection Authority (CCPA) Cracks Down on Dark Patterns in E-Commerce',
    date: '2024-04-12',
    category: 'Consumer Protection',
    summary: 'CCPA notified stringent penalties on online shopping platforms engaging in dark patterns such as false urgency, basket sneaking, forced continuity, and disguised advertisements.',
    source: 'Ministry of Consumer Affairs',
    impact: 'Consumers can claim compensation against e-commerce websites adding unauthorized fees, deceptive countdown timers, or pre-selected addon products during checkout.',
    readTime: '3 min',
  },
  {
    id: 'news-4',
    title: 'Digital Personal Data Protection (DPDP) Act Rules and Citizen Consent Framework',
    date: '2024-03-22',
    category: 'Cyber & Privacy Law',
    summary: 'Government finalizes implementation roadmap for the DPDP Act 2023, prescribing duties for Data Fiduciaries, absolute right to data erasure, and penalties up to ₹250 Crores for data breaches.',
    source: 'Ministry of Electronics & Information Technology',
    impact: 'Citizens have full statutory ownership of their personal digital records and right to withdraw consent from telecom, banking, and social apps.',
    readTime: '5 min',
  },
  {
    id: 'news-5',
    title: 'e-Courts Phase III Approved: Paperless Virtual Courts & AI Translation of Judgments',
    date: '2024-02-15',
    category: 'Judicial Tech',
    summary: 'Cabinet approved ₹7,210 Crore budget for e-Courts Project Phase III to revolutionize digital filing, cloud infrastructure, smart courts, and regional language translation of Supreme Court and High Court judgments.',
    source: 'Department of Justice',
    impact: 'Enables citizens in rural and remote regions to participate in court hearings via Tele-Law and access certified vernacular judgments free of cost.',
    readTime: '4 min',
  },
  {
    id: 'news-6',
    title: 'RERA Overrules Builder Agreements: Statutory Compensation Overrides Delay Clauses',
    date: '2024-01-29',
    category: 'Property Law',
    summary: 'Courts have firmly held that one-sided developer agreements with 1-2 year builder grace periods are nullified by RERA statutory completion dates.',
    source: 'National Consumer Disputes Redressal Commission',
    impact: 'Homebuyers are entitled to monthly delay compensation at SBI MCLR + 2% regardless of unfair boilerplate terms in builder-buyer contracts.',
    readTime: '3 min',
  },
];

/**
 * @desc    Get latest legal updates, judgments, and statutory amendments
 * @route   GET /api/news/updates
 * @access  Public
 */
export const getLegalNews = async (req, res, next) => {
  try {
    const { category, search } = req.query;

    let results = [...legalNewsUpdates];

    if (category) {
      results = results.filter((n) => n.category.toLowerCase().includes(category.toLowerCase()));
    }

    if (search) {
      const term = search.toLowerCase();
      results = results.filter(
        (n) =>
          n.title.toLowerCase().includes(term) ||
          n.summary.toLowerCase().includes(term) ||
          n.impact.toLowerCase().includes(term)
      );
    }

    return res.status(200).json({
      success: true,
      count: results.length,
      updates: results,
    });
  } catch (error) {
    next(error);
  }
};

export default {
  getLegalNews,
};
