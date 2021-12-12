const mongoose = require('mongoose');

const PostSchema = new mongoose.Schema (
  {
      userId: {
          type: String,
          required: true,
      },
      status: {
          type: String,
          max: 1000,
      },
      img: {
          type: String
      },
      like: {
          type: Array,
          default: [],
      },
      dislike: {
          type: Array,
          default: [],
      },
      love: {
          type: Array,
          default: [],
      },
      funny: {
          type: Array,
          default: [],
      },
      disappointed: {
          type: Array,
          default: [],
      },
      angry: {
          type: Array,
          default: [],
      },
  },
  {timestamps: true}
);

module.exports = mongoose.model('Post', PostSchema);
