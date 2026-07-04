import mongoose from 'mongoose';

const attendanceSchema = new mongoose.Schema(
  {
    student: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Student',
      required: [true, 'Student reference is required'],
    },
    batch: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Batch',
      required: [true, 'Batch reference is required'],
    },
    date: {
      type: Date,
      required: [true, 'Attendance date is required'],
    },
    status: {
      type: String,
      enum: ['Present', 'Absent', 'Late', 'Leave'],
      required: [true, 'Attendance status is required'],
    },
  },
  {
    timestamps: true,
  },
);

attendanceSchema.index({ student: 1, batch: 1, date: 1 }, { unique: true });
attendanceSchema.index({ batch: 1, date: 1, status: 1 });

export const Attendance = mongoose.model('Attendance', attendanceSchema);
export default Attendance;
