import mongoose from 'mongoose';

const legalDocumentSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      default: null,
    },
    type: {
      type: String,
      required: [true, 'Document type is required'],
      enum: ['rti', 'complaint', 'notice', 'affidavit'],
    },
    title: {
      type: String,
      required: [true, 'Document title is required'],
      trim: true,
    },
    content: {
      type: String,
      required: [true, 'Document content is required'],
    },
    metadata: {
      type: mongoose.Schema.Types.Mixed,
      default: {},
    },
    status: {
      type: String,
      enum: ['draft', 'completed', 'submitted'],
      default: 'draft',
    },
  },
  {
    timestamps: { createdAt: true, updatedAt: true },
  }
);

legalDocumentSchema.index({ userId: 1, type: 1 });

const LegalDocument = mongoose.model('LegalDocument', legalDocumentSchema);
export default LegalDocument;
