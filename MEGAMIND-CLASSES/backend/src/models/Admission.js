import mongoose from 'mongoose';

const admissionSchema = new mongoose.Schema(
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
    batch: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Batch',
      default: null,
    },
    submittedAt: {
      type: Date,
      default: Date.now,
    },
    status: {
      type: String,
      enum: ['submitted', 'approved', 'rejected', 'pending'],
      default: 'pending',
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

admissionSchema.index({ student: 1, status: 1 });
admissionSchema.index({ course: 1, batch: 1, submittedAt: -1 });

export const Admission = mongoose.model('Admission', admissionSchema);
export default Admission;
