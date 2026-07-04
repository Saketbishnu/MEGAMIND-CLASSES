import mongoose from 'mongoose';

const gallerySchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, 'Gallery title is required'],
      trim: true,
      maxlength: [150, 'Title cannot exceed 150 characters'],
    },
    category: {
      type: String,
      required: [true, 'Gallery category is required'],
      enum: ['events', 'classroom', 'achievements', 'campus', 'other'],
      default: 'other',
    },
    imageUrl: {
      type: String,
      required: [true, 'Image URL is required'],
      trim: true,
    },
    uploadedBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Admin',
      required: [true, 'Uploader reference is required'],
    },
    uploadedAt: {
      type: Date,
      default: Date.now,
    },
  },
  {
    timestamps: true,
  },
);

gallerySchema.index({ category: 1, uploadedAt: -1 });
gallerySchema.index({ uploadedBy: 1 });

export const Gallery = mongoose.model('Gallery', gallerySchema);
export default Gallery;
