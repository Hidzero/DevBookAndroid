import mongoose from "mongoose";

const postSchema = new mongoose.Schema(
    {
        id: mongoose.Schema.Types.ObjectId,
        owner: {
            type: String,
        },
        likedBy: {
            type: [String],
            default: []
        },
        commentadBy: {
            type: [String],
            default: []
        },
        urlToImage: {
            type: String
        },
        createdAt: {
            type: Date,
            default: new Date()
        }
    },
    {
        timestamps: true
    }
);

export default mongoose.model("post", postSchema);