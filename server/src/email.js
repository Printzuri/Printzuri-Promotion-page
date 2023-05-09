const nodemailer = require("nodemailer");

const transport = nodemailer.createTransport({
  host: "us2.smtp.mailhostbox.com",
  port: 587,
  secure: false, // true for 465, false for other ports
  auth: {
    user: "hello@printzuri.com", //   user
    pass: "4R5r$k#w5qwXyLK", //  password
  },
});

async function welcomeMail(receiver, name) {
  let mess = await transport.sendMail({
    from: "hello@printZuri.com", // sender address
    to: receiver, // list of receivers
    subject: "Thank you for joining our waiting list", // Subject line
    html: `Dear ${name},<br>
        Thank you for signing up for our waiting list for Printzuri. We're excited to see your interest in our product!
    
    We are currently working hard to develop and improve Printzuri to make it the best it can be. As soon as we have more information about the release date or updates on the product, we will keep you updated.
    
    In the meantime, please feel free to reach out to us if you have any questions or suggestions. We always appreciate hearing from our users and welcome any feedback you may have.
    
    Once again, thank you for your support and interest in our product. We look forward to having you as part of our community!
    
    Best regards, <br> Ayodeji <br> Printzuri
    
    
        `, // html body
  });

  return mess;
}

module.exports = {
  welcomeMail,
};
