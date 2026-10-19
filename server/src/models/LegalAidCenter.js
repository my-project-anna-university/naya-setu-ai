import mongoose from 'mongoose';

const legalAidCenterSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'Legal aid center name is required'],
      trim: true,
    },
    address: {
      type: String,
      required: [true, 'Address is required'],
      trim: true,
    },
    city: {
      type: String,
      required: [true, 'City is required'],
      trim: true,
      index: true,
    },
    state: {
      type: String,
      required: [true, 'State is required'],
      trim: true,
      index: true,
    },
    pincode: {
      type: String,
      trim: true,
      default: '',
    },
    phone: {
      type: String,
      trim: true,
      default: '',
    },
    email: {
      type: String,
      trim: true,
      default: '',
    },
    type: {
      type: String,
      enum: ['DLSA', 'TLSC', 'NGO', 'LawFirm'],
      default: 'DLSA',
    },
    coordinates: {
      lat: {
        type: Number,
        default: 0,
      },
      lng: {
        type: Number,
        default: 0,
      },
    },
    services: [
      {
        type: String,
      },
    ],
    timings: {
      type: String,
      default: '10:00 AM - 5:00 PM (Monday to Saturday)',
    },
    contactPerson: {
      type: String,
      default: '',
    },
    eligibilityNotes: {
      type: String,
      default: 'Free legal aid under Section 12 of Legal Services Authorities Act, 1987',
    },
  },
  {
    timestamps: true,
  }
);

legalAidCenterSchema.index({ state: 1, city: 1, type: 1 });
legalAidCenterSchema.index({ name: 'text', address: 'text', city: 'text' });

const LegalAidCenter = mongoose.model('LegalAidCenter', legalAidCenterSchema);
export default LegalAidCenter;
