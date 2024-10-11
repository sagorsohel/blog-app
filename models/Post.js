// title,body,author ,tags ,thumbnail,readTime,likes,disLikes,comments
const { Schema, model, models } = require("mongoose");
// const User = require("./User");
// const Comment = require("./Comment");
const postSchema = new Schema({
  title: { type: String, required: true, trim: true, maxlength: 100 },
  body: { type: String, required: true },
  author: { type: Schema.Types.ObjectId, required: true, ref: 'User' },
  tags: { type: [String], required: true },
  thumbnail: { type: String, required: true },
  readTime: { type: Number, required: true },
  likes: [Schema.Types.ObjectId],
  dislikes: [Schema.Types.ObjectId],
  comments: [{ type: Schema.Types.ObjectId, ref: 'Comment' }],
});
const post = model("post", postSchema);
module.exports = post;
