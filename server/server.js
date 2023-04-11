require("dotenv").config();
const sgMail = require("@sendgrid/mail");
const sgClient = require("@sendgrid/client");
const express = require("express");
const app = express();

sgMail.setApiKey(process.env.SENDGRID_API_KEY);
sgClient.setApiKey(process.env.SENDGRID_API_KEY);
app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(express.json());

function randNum() {
  return Math.floor(Math.random() * 90000) + 10000;
}

async function addContact(firstName, lastName, email, confNum) {
  const customFieldID = await getCustomFieldID("conf_num");
  const data = {
    contacts: [
      {
        email: email,
        first_name: firstName,
        last_name: lastName,
        custom_fields: {},
      },
    ],
  };
  data.contacts[0].custom_fields[customFieldID] = confNum;
  const request = {
    url: `/v3/marketing/contacts`,
    method: "PUT",
    body: data,
  };
  return sgClient.request(request);
}

async function getCustomFieldID(customFieldName) {
  const request = {
    url: `/v3/marketing/field_definitions`,
    method: "GET",
  };
  const response = await sgClient.request(request);
  const allCustomFields = response[1].custom_fields;
  return allCustomFields.find((x) => x.name === customFieldName).id;
}

// Routes

app.post("/signup", async (req, res) => {
  const confNum = randNum();
  const params = new URLSearchParams({
    conf_num: confNum,
    email: req.body.email,
  });
  const confirmationURL =
    req.protocol + "://" + req.headers.host + "/confirm/?" + params;
  const msg = {
    to: req.body.email,
    from: "hello@printzuri.com", // Change to your verified sender
    subject: `Thank you for joining our waiting list`,
    html: `Dear ${req.body.firstname},<br>
    Thank you for signing up for our waiting list for Printzuri. We're excited to see your interest in our product!

We are currently working hard to develop and improve Printzuri to make it the best it can be. As soon as we have more information about the release date or updates on the product, we will keep you updated.

In the meantime, please feel free to reach out to us if you have any questions or suggestions. We always appreciate hearing from our users and welcome any feedback you may have.

Once again, thank you for your support and interest in our product. We look forward to having you as part of our community!

Best regards, <br> Ayodeji <br> Printzuri


    `,
  };
  await addContact(
    req.body.firstname,
    req.body.lastname,
    req.body.email,
    confNum
  );
  await sgMail.send(msg);
  res.send({ msg: "success" });
});

app.get("/confirm", async (req, res) => {
  try {
    const contact = await getContactByEmail(req.query.email);
    if (contact == null) throw `Contact not found.`;
    if (contact.custom_fields.conf_num == req.query.conf_num) {
      const listID = await getListID("Newsletter Subscribers");
      await addContactToList(req.query.email, listID);
    } else {
      throw "Confirmation number does not match";
    }
    res.render("message", {
      message:
        "You are now subscribed to our newsletter. We can't wait for you to hear from us!",
    });
  } catch (error) {
    console.error(error);
    res.render("message", {
      message:
        'Subscription was unsuccessful. Please <a href="/signup">try again.</a>',
    });
  }
});

app.listen(3000, () => {
  console.log(`Listening on port 3000`);
});
