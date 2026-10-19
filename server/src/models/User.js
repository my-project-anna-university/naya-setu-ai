import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';

const searchHistorySchema = new mongoose.Schema({
  query: {
    type: String,
    required: true,
    trim: true,
  },
  category: {
    type: String,
    default: 'general',
  },
  timestamp: {
    type: Date,
    default: Date.now,
  },
});

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'Name is required'],
      trim: true,
      minlength: [2, 'Name must be at least 2 characters long'],
      maxlength: [100, 'Name cannot exceed 100 characters'],
    },
    email: {
      type: String,
      required: [true, 'Email address is required'],
      unique: true,
      lowercase: true,
      trim: true,
      match: [/^\S+@\S+\.\S+$/, 'Please provide a valid email address'],
    },
    password: {
      type: String,
      required: [true, 'Password is required'],
      minlength: [6, 'Password must be at least 6 characters long'],
    },
    phone: {
      type: String,
      trim: true,
      default: '',
    },
    state: {
      type: String,
      trim: true,
      default: '',
    },
    language: {
      type: String,
      default: 'en',
      enum: ['en', 'hi', 'bn', 'te', 'mr', 'ta', 'ur', 'gu', 'kn', 'ml', 'pa'],
    },
    preferredLanguage: {
      type: String,
      default: 'hi',
    },
    role: {
      type: String,
      enum: ['user', 'admin'],
      default: 'user',
    },
    savedSchemes: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'GovernmentScheme',
      },
    ],
    searchHistory: [searchHistorySchema],
  },
  {
    timestamps: true,
  }
);

// Hash password before saving if modified
userSchema.pre('save', async function (next) {
  if (!this.isModified('password')) return next();
  try {
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
    next();
  } catch (error) {
    next(error);
  }
});

// Instance method to compare candidate password
userSchema.methods.comparePassword = async function (candidatePassword) {
  return bcrypt.compare(candidatePassword, this.password);
};

// Transform to JSON and strip password
userSchema.methods.toJSON = function () {
  const user = this.toObject();
  delete user.password;
  return user;
};

const User = mongoose.model('User', userSchema);
export default User;
