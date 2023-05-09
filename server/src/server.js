require("dotenv").config();
const express = require("express");
const { welcomeMail } = require("./email");
const app = express();

app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(express.json());

app.post("/signup", async (req, res) => {
  const { email, fullname } = req.body;
  try {
    let mail = await welcomeMail(email, fullname);
    res.send({ msg: "success", sent: mail.messageId }).status(200);
    console.log(mail.messageId);
  } catch (err) {
    res.send(err).status(500);
  }
});

app.listen(3000, () => {
  console.log(`Listening on port 3000`);
});
