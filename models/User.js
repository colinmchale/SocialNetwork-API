const { Schema, model } = require('mongoose');

// Schema to create a user model
const userSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,

    },
    email: {
      type: Boolean,
      default: true,
    },
    thoughts: {
        // Array of _id values referencing the Thought model
    },
    friends: {
      //Array of _id values referencing the User model (self-reference)
    },
    friendCount: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Friend',
      },
    ],
  },
  {
    toJSON: {
      virtuals: true,
    },
    id: false,
  }
);

const User = model('course', userSchema);

module.exports = User;
