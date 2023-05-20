require("dotenv").config();
const express = require("express");
const { mongooseConnect } = require("../db/mongoose");
const { welcomeMail, sendEmail } = require("./email");
const validator = require("validator");
const app = express();

const PORT = 3000 || process.env.PORT;
const LIST = require("../db/waitinglist");
const WaitingList = require("../db/waitinglist");

app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(express.json());

app.post("/signup", async (req, res) => {
  const { email, fullname } = req.body;
  try {
    if (!validator.isEmail(email)) {
      return res.status(400).send({ message: "invalid mail" });
    }
    const existingMail = await WaitingList.findOne({ email });
    if (existingMail) {
      return res
        .status(200)
        .send({ message: "you are alredy in the waiting List " });
    }
    const sentMail = await welcomeMail(email, fullname);
    const list = await new LIST({
      email,
      fullname,
    });
    await list.save();
    res.status(200).send({ msg: "success", data: { sentMail }, list });
  } catch (err) {
    console.log("w node ma", err);

    res.send(err).status(500);
  }
});

app.post("/unsubcribed", async (req, res) => {
  const { email } = req.body;
  try {
    const subUser = await WaitingList.findOneAndUpdate(
      { email, subscribed: true },
      { subscribed: false }
    );
    if (!subUser) {
      res.send({ msg: "you are not subcribed" });
    }
    res.send({ msg: "you have been unsubscribed", subUser });
  } catch (e) {}
});

app.post("/sendmail", async (req, res) => {
  const { sender, to, subject, message } = req.body;
  const sentMail = await sendEmail(sender, to, subject, message);
  res.send(sentMail);
});

async function loadServer() {
  await mongooseConnect();

  app.listen(PORT, () => {
    console.log(`listening on port ${PORT}`);
  });
}

loadServer();
