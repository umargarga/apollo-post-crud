import { Schema, model } from "mongoose";

const PostSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    },
    featureImage: {
        type: String,
        required: false
    }
}, { timestamps: true });

const Post = model('posts', PostSchema);

export default Post;