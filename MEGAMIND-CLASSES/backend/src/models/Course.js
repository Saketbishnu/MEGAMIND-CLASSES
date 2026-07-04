import mongoose from 'mongoose';

const courseSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, 'Course title is required'],
      trim: true,
      maxlength: [150, 'Course title cannot exceed 150 characters'],
    },
    slug: {
      type: String,
      required: [true, 'Course slug is required'],
      unique: true,
      lowercase: true,
      trim: true,
      match: [/^[a-z0-9]+(?:-[a-z0-9]+)*$/, 'Please provide a valid slug'],
    },
    description: {
      type: String,
      trim: true,
      maxlength: [2000, 'Description cannot exceed 2000 characters'],
    },
    classLevel: {
      type: String,
      enum: ['Pre Foundation', 'Foundation', 'JEE Mains', 'JEE Advanced'],
      required: [true, 'Class level is required'],
    },
    category: {
      type: String,
      trim: true,
      maxlength: [100, 'Category cannot exceed 100 characters'],
    },
    duration: {
      type: String,
      trim: true,
      maxlength: [50, 'Duration cannot exceed 50 characters'],
    },
    fees: {
      type: Number,
      min: [0, 'Fees cannot be negative'],
      default: 0,
    },
    language: {
      type: String,
      trim: true,
      maxlength: [50, 'Language cannot exceed 50 characters'],
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

courseSchema.index({ slug: 1 });
courseSchema.index({ isActive: 1, classLevel: 1 });
courseSchema.index({ title: 'text', description: 'text' });

export const Course = mongoose.model('Course', courseSchema);
export default Course;
