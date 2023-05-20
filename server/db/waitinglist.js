const mongoose = require("mongoose");
const validator = require("validator");
const waitingListSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      validate(value) {
        if (!validator.isEmail(value)) {
          throw new Error("invalid Email ");
        }
      },
    },
    fullname: {
      type: String,
      required: true,
    },
    subscribed: {
      type: Boolean,
      required: true,
      default: true,
    },
  },
  { timestamps: true }
);

const WaitingList = mongoose.model("WaitingList", waitingListSchema);

module.exports = WaitingList;
