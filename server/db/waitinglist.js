const mongoose = require("mongoose");

const waitingListSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
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
});

const WaitingList = mongoose.model("WaitingList", waitingListSchema);

module.exports = WaitingList;
