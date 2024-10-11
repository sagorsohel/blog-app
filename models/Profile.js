// user, tittle,bio,avatar,posts,bookmarks, links

const { Schema, model } = require("mongoose");

const userSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,

    ref: "User",
  },
  title: {
    type: String,
    trim: true,
  },
  bio: {
    type: String,

    maxLength: 500,
  },
  links: {
    website: String,
    github: String,
    twitter: String,
    instagram: String,
  },
  posts: [
    {
      type: Schema.Types.ObjectId,
      ref: "Post",
    },
  ],
  bookmarks: [
    {
      type: Schema.Types.ObjectId,
      ref: "Post",
    },
  ],
},{
    timestamps: true,
  
});

const Profile=model('Profile',userSchema)
module.exports = Profile;