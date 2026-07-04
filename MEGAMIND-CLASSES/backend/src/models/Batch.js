import mongoose from 'mongoose';

const batchSchema = new mongoose.Schema(
  {
    batchName: {
      type: String,
      required: [true, 'Batch name is required'],
      trim: true,
      maxlength: [100, 'Batch name cannot exceed 100 characters'],
    },
    course: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Course',
      required: [true, 'Course reference is required'],
    },
    teacher: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Admin',
      required: [true, 'Teacher reference is required'],
    },
    maximumStudents: {
      type: Number,
      default: 20,
      min: [1, 'Maximum students must be at least 1'],
    },
    currentStudents: {
      type: Number,
      default: 0,
      min: [0, 'Current students cannot be negative'],
      validate: {
        validator(value) {
          return value <= this.maximumStudents;
        },
        message: 'Current students cannot exceed maximum students',
      },
    },
    startDate: {
      type: Date,
      required: [true, 'Start date is required'],
    },
    endDate: {
      type: Date,
      required: [true, 'End date is required'],
    },
    timing: {
      type: String,
      trim: true,
      maxlength: [50, 'Timing cannot exceed 50 characters'],
    },
    classroom: {
      type: String,
      trim: true,
      maxlength: [50, 'Classroom cannot exceed 50 characters'],
    },
    status: {
      type: String,
      enum: ['scheduled', 'ongoing', 'completed', 'cancelled'],
      default: 'scheduled',
    },
  },
  {
    timestamps: true,
  },
);

batchSchema.index({ course: 1, status: 1, startDate: 1 });
batchSchema.index({ teacher: 1, status: 1 });
batchSchema.index({ batchName: 1 });

export const Batch = mongoose.model('Batch', batchSchema);
export default Batch;
