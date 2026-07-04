import mongoose from 'mongoose';

const studentSchema = new mongoose.Schema(
  {
    admissionNumber: {
      type: String,
      required: [true, 'Admission number is required'],
      unique: true,
      trim: true,
      uppercase: true,
    },
    firstName: {
      type: String,
      required: [true, 'First name is required'],
      trim: true,
      maxlength: [50, 'First name cannot exceed 50 characters'],
    },
    lastName: {
      type: String,
      required: [true, 'Last name is required'],
      trim: true,
      maxlength: [50, 'Last name cannot exceed 50 characters'],
    },
    gender: {
      type: String,
      enum: ['male', 'female', 'other', 'prefer_not_to_say'],
      default: 'prefer_not_to_say',
    },
    dateOfBirth: {
      type: Date,
      default: null,
    },
    class: {
      type: String,
      trim: true,
      maxlength: [50, 'Class value cannot exceed 50 characters'],
    },
    course: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Course',
      default: null,
    },
    batch: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Batch',
      default: null,
    },
    schoolName: {
      type: String,
      trim: true,
      maxlength: [150, 'School name cannot exceed 150 characters'],
    },
    fatherName: {
      type: String,
      trim: true,
      maxlength: [100, 'Father name cannot exceed 100 characters'],
    },
    motherName: {
      type: String,
      trim: true,
      maxlength: [100, 'Mother name cannot exceed 100 characters'],
    },
    parentPhone: {
      type: String,
      trim: true,
      match: [/^\+?[0-9\s-]{7,15}$/, 'Please provide a valid parent phone number'],
    },
    studentPhone: {
      type: String,
      trim: true,
      match: [/^\+?[0-9\s-]{7,15}$/, 'Please provide a valid student phone number'],
    },
    email: {
      type: String,
      trim: true,
      lowercase: true,
      sparse: true,
      match: [/^\S+@\S+\.\S+$/, 'Please provide a valid email address'],
    },
    address: {
      type: String,
      trim: true,
      maxlength: [250, 'Address cannot exceed 250 characters'],
    },
    city: {
      type: String,
      trim: true,
      maxlength: [100, 'City cannot exceed 100 characters'],
    },
    state: {
      type: String,
      trim: true,
      maxlength: [100, 'State cannot exceed 100 characters'],
    },
    pincode: {
      type: String,
      trim: true,
      match: [/^[0-9]{4,8}$/, 'Please provide a valid pincode'],
    },
    profileImage: {
      type: String,
      default: '',
    },
    admissionDate: {
      type: Date,
      default: Date.now,
    },
    status: {
      type: String,
      enum: ['active', 'inactive', 'graduated', 'dropped', 'pending'],
      default: 'pending',
    },
  },
  {
    timestamps: true,
  },
);

studentSchema.virtual('fullName').get(function getFullName() {
  return `${this.firstName} ${this.lastName}`.trim();
});

studentSchema.index({ admissionNumber: 1 });
studentSchema.index({ course: 1, batch: 1, status: 1 });
studentSchema.index({ email: 1 }, { sparse: true });
studentSchema.index({ city: 1, state: 1 });

studentSchema.set('toJSON', { virtuals: true });
studentSchema.set('toObject', { virtuals: true });

export const Student = mongoose.model('Student', studentSchema);
export default Student;
