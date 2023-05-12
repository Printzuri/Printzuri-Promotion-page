require("dotenv").config();
const express = require("express");
const { mongooseConnect } = require("../db/mongoose");
const { welcomeMail } = require("./email");
const app = express();

const PORT = 3000 || process.env.PORT;
const LIST = require("../db/waitinglist");

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
    if (mail) {
      const list = await new LIST({
        email,
        fullname,
      });
      await list.save();
      res.send({ msg: "success", data: list }).status(200);
    }

    // console.log(mail);
  } catch (err) {
    res.send(err).status(500);
  }
});

app.post("/unsubcribed", async (req, res) => {});

async function loadServer() {
  await mongooseConnect();

  app.listen(PORT, () => {
    console.log(`listening on port ${PORT}`);
  });
}

loadServer();
