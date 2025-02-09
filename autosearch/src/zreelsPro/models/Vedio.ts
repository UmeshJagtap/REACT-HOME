import mongoose, { Schema, model, models } from 'mongoose';

export const VIDEO_DIMENSIONS {
    height: 1920,
} as const;


export interface IVideo {
  _id?: mongoose.Types.ObjectId;
  title: string;
  description: string;
  vedioUrl: string;
  thumbnailUrl: string;
  controls?: boolean;
  transformation?: {
    height: number;
    width: number;
    quality?: number;
  }
}

const vedioSchema = new Schema<IVideo>({
    title: {type: String, required: true},
    description: {type: String, required: true},
    vedioUrl: {type: String, required: true},
    thumbnailUrl: {type: String, required: true},
    controls: {type: Boolean, default:true},
    transformation: {
        height: {type: Number, default: VIDEO_DIMENSIONS.height},
        width: {type: Number, default: VIDEO_DIMENSIONS.width},
        quality: {type: Number, min: 1, max: 100},
    },
},
    {timestamps: true}
);
