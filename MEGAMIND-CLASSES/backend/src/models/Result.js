import mongoose from 'mongoose';

const resultSchema = new mongoose.Schema(
  {
    student: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Student',
      required: [true, 'Student reference is required'],
    },
    course: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Course',
      required: [true, 'Course reference is required'],
    },
    examName: {
      type: String,
      required: [true, 'Exam name is required'],
      trim: true,
      maxlength: [100, 'Exam name cannot exceed 100 characters'],
    },
    marksObtained: {
      type: Number,
      required: [true, 'Marks obtained is required'],
      min: [0, 'Marks obtained cannot be negative'],
    },
    totalMarks: {
      type: Number,
      required: [true, 'Total marks is required'],
      min: [1, 'Total marks must be at least 1'],
    },
    percentage: {
      type: Number,
      min: [0, 'Percentage cannot be negative'],
      max: [100, 'Percentage cannot exceed 100'],
    },
    grade: {
      type: String,
      enum: ['A+', 'A', 'B+', 'B', 'C+', 'C', 'D', 'F'],
      default: 'F',
    },
    remarks: {
      type: String,
      trim: true,
      maxlength: [1000, 'Remarks cannot exceed 1000 characters'],
    },
  },
  {
    timestamps: true,
  },
);

resultSchema.pre('validate', function calculatePercentage(next) {
  if (this.totalMarks && this.marksObtained !== undefined) {
    this.percentage = Number(((this.marksObtained / this.totalMarks) * 100).toFixed(2));
  }
  next();
});

resultSchema.index({ student: 1, course: 1, examName: 1 }, { unique: true });
resultSchema.index({ course: 1, examName: 1 });

export const Result = mongoose.model('Result', resultSchema);
export default Result;
