import mongoose from 'mongoose';

const adminSchema = new mongoose.Schema(
  {
    fullName: {
      type: String,
      required: [true, 'Admin full name is required'],
      trim: true,
      minlength: [2, 'Full name must be at least 2 characters'],
      maxlength: [100, 'Full name cannot exceed 100 characters'],
    },
    email: {
      type: String,
      required: [true, 'Admin email is required'],
      unique: true,
      lowercase: true,
      trim: true,
      match: [/^\S+@\S+\.\S+$/, 'Please provide a valid email address'],
    },
    password: {
      type: String,
      required: [true, 'Password is required'],
      minlength: [8, 'Password must be at least 8 characters'],
      select: false,
    },
    role: {
      type: String,
      enum: ['super_admin', 'admin', 'manager'],
      default: 'admin',
    },
    profileImage: {
      type: String,
      default: '',
    },
    phone: {
      type: String,
      trim: true,
      match: [/^\+?[0-9\s-]{7,15}$/, 'Please provide a valid phone number'],
    },
    lastLogin: {
      type: Date,
      default: null,
    },
    isActive: {
      type: Boolean,
      default: true,
    },
  },
  {
    timestamps: true,
  },
);

adminSchema.index({ email: 1 });
adminSchema.index({ isActive: 1, role: 1 });

export const Admin = mongoose.model('Admin', adminSchema);
export default Admin;
