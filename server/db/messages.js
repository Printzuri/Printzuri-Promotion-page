const mongoose = require("mongoose");
const validator = require("validator");
const waitingListSchema = new mongoose.Schema(
  {
    to: {
      type: String,
      required: true,
      trim: true,

      validate(value) {
        if (!validator.isEmail(value)) {
          throw new Error("invalid Email ");
        }
      },
    },
    recipientName: {
      type: String,
      required: true,
    },
    to: {
      type: String,
      required: true,
      trim: true,
      validate(value) {
        if (!validator.isEmail(value)) {
          throw new Error("invalid Email ");
        }
      },
    },
    subject: {
      type: String,
    },
    text: {
      type: String,
    },
    html: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

const WaitingList = mongoose.model("WaitingList", waitingListSchema);

module.exports = WaitingList;
