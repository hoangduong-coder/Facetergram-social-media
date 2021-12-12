const mongoose = require('mongoose')
const uniqueValidator = require('mongoose-unique-validator')

const UserSchema = new mongoose.Schema (
  {
    username: {
      type: String,
      required: true,
      min: 5,
      max: 30,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      max: 50,
      unique: true,
    },
    password: {
      type: String,
      required: true,
      min: 6,
    },
    avatar: {
      type: String,
      default: '',
    },
    coverPicture: {
      type: String,
      default: '',
    },
    followers: {
      type: Array,
      default: [],
    },
    following: {
      type: Array,
      default: [],
    },
    isAdmin: {
      type: Boolean,
      default: false,
    },
    desc: {
        type: String,
        max: 100,
    },
    hometown: {
        type: String,
        max: 50,
    },
    reside: {
        type: String,
        max: 50,
    },
    gender: {
        type: Number,
        enum: [1,2,3,4]
    },
    relationship: {
        type: Number,
        enum: [1,2,3,4]
    }
  },
  {timestamps: true}
)

UserSchema.plugin(uniqueValidator)
module.exports = mongoose.model('User', UserSchema);
