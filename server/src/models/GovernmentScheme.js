import mongoose from 'mongoose';

const governmentSchemeSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'Scheme name is required'],
      unique: true,
      trim: true,
    },
    slug: {
      type: String,
      lowercase: true,
      trim: true,
      index: true,
    },
    description: {
      type: String,
      required: [true, 'Scheme description is required'],
    },
    eligibility: {
      age: {
        min: { type: Number, default: 0 },
        max: { type: Number, default: 120 },
      },
      income: {
        max: { type: Number, default: null }, // Null means no income cap
      },
      category: [{ type: String }], // E.g., 'All', 'SC', 'ST', 'OBC', 'General', 'Farmer', 'Women', 'Youth', 'Artisan'
      state: [{ type: String }], // 'All India' or specific states
      gender: [{ type: String }], // 'All', 'Female', 'Male', 'Transgender'
      occupations: [{ type: String }], // E.g., 'Farmer', 'Street Vendor', 'Artisan', 'Student', 'Unemployed'
    },
    benefits: {
      type: String,
      required: [true, 'Benefits description is required'],
    },
    financialAssistance: {
      type: String,
      default: '',
    },
    applicationProcess: {
      type: String,
      required: [true, 'Application process is required'],
    },
    requiredDocuments: [
      {
        type: String,
      },
    ],
    website: {
      type: String,
      trim: true,
      default: '',
    },
    portalUrl: {
      type: String,
      trim: true,
      default: '',
    },
    ministry: {
      type: String,
      required: [true, 'Ministry name is required'],
      trim: true,
    },
    status: {
      type: String,
      enum: ['active', 'inactive'],
      default: 'active',
    },
    category: {
      type: String,
      required: true,
      trim: true, // E.g., 'Agriculture', 'Healthcare', 'Housing', 'Financial Inclusion', 'Education & Skill', 'Social Welfare'
    },
    tags: [{ type: String }],
  },
  {
    timestamps: true,
  }
);

// Pre-save to auto-generate slug
governmentSchemeSchema.pre('save', function (next) {
  if (this.name && !this.slug) {
    this.slug = this.name
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/(^-|-$)+/g, '');
  }
  next();
});

governmentSchemeSchema.index({ name: 'text', description: 'text', category: 'text', ministry: 'text' });

const GovernmentScheme = mongoose.model('GovernmentScheme', governmentSchemeSchema);
export default GovernmentScheme;
