import mongoose, { models, Schema } from "mongoose";

const podcastSchema = new Schema(
  {
    name: { type: String, required: true },
    description: { type: String, required: true },
    publishDate: { type: Date, default: Date.now },
    url: { type: String, required: true },
    duration: { type: Number, required: true },
    imageurl: { type: String, default: "default-image" },
    host: { type: String, required: true },
    guests: { type: [String], default: [] },
    tags: { type: [String], default: [] },
    categories: {
      type: [Number],
      default: [],
      enum: [
        'Desarrollo Personal', 
        'Inspiración y Testimonios',
        'Educación y Consejería',
        'Actividades y Comunidad',
        'Reflexión Bíblica',
        'Cultura y Tendencias'
      ], 
    },
    views: { type: Number, default: 0 },
  },
  { timestamps: true }
);

podcastSchema.statics.getPopularPodcasts = function(limit) {
  return this.find().sort({ views: -1 }).limit(limit).exec();
};

podcastSchema.statics.getRecentPodcasts = function(limit) {
  return this.find().sort({ publishDate: -1 }).limit(limit).exec();
};

const Podcast = models.Podcast || mongoose.model("Podcast", podcastSchema);
export default Podcast;