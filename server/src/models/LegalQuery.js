import mongoose from 'mongoose';

const legalQuerySchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      default: null,
    },
    question: {
      type: String,
      required: [true, 'Question is required'],
      trim: true,
      maxlength: [2000, 'Question cannot exceed 2000 characters'],
    },
    category: {
      type: String,
      required: [true, 'Category is required'],
      enum: [
        'consumer',
        'labor',
        'property',
        'family',
        'criminal',
        'constitutional',
        'women',
        'cyber',
        'general',
      ],
      default: 'general',
    },
    response: {
      summary: { type: String, default: '' },
      keyRights: [{ type: String }],
      applicableLaws: [{ type: String }],
      recommendedActions: [{ type: String }],
      helplines: [{ type: String }],
      sourceRef: { type: String, default: '' },
      fullAnswer: { type: String, default: '' },
    },
    helpful: {
      type: Boolean,
      default: null,
    },
    feedbackNote: {
      type: String,
      default: '',
    },
  },
  {
    timestamps: { createdAt: true, updatedAt: false },
  }
);

legalQuerySchema.index({ userId: 1, createdAt: -1 });
legalQuerySchema.index({ category: 1 });

const LegalQuery = mongoose.model('LegalQuery', legalQuerySchema);
export default LegalQuery;
