const { Schema, model } = require("mongoose");

const messageSchema = new Schema({
  message: {
    type: String,
    minLength: 1,
  },
  created_by: {
    type: Schema.Types.ObjectId,
    ref: 'User',
  }
},
{ timestamps: true },
);

const Message = model("Message", messageSchema);

module.exports = Message;
