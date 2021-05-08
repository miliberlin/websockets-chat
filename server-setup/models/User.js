const { Schema, model } = require("mongoose");

const userSchema = new Schema({
  username: {
    type: String,
    unique: true,
    required: true,
    minLength: 3,
    maxLength: 50,
  },
  password: {
    type: String,
    required: true,
    minLength: 8,
  },
  // avatar: {
  //   originalname: { type: String },
  //   path: {
  //     type: String,
  //     default:
  //       '<insert path/URL to image>',
  //   },
  //   cloudinaryId: { type: String },
  // },
  messages: [{ type: Schema.Types.ObjectId, ref: 'Message' }],
});

const User = model("User", userSchema);

module.exports = User;
