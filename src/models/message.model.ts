import { Schema, model } from 'mongoose';

const MessageSchema = new Schema({
    // Message metadata
    id: {type: String, immutable: true, required: true},
    guild: {type: String, immutable: true, required: true},
    channel: {type: String, immutable: true, required: true},
    author: {type: String, immutable: true, required: true},
    sentAt: {type: Date, immutable: true, required: true},
    interval: {type: Number, min: 0, default: 30, required: true},

    // Message content
    content: {type: String, immutable: true, required: false},
    attachment: {type: Array, immutable: true, required: false},
    everyone: {type: Boolean, immutable: true, required: false},
    roleMentions: {type: Array, immutable: true, required: false},
    userMentions: {type: Array, immutable: true, required: false}
});

export default model("message", MessageSchema);