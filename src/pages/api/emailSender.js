const nodemailer = require("nodemailer")

export default async function(request, response) {

  var transporter = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: "aa7c959b6f61f8",
      pass: "25117d82eb528d"
    }
  });
  try {
    let info = await transporter.sendMail({
      from: '"Fred Foo 👻" <mocen12111@veb34.com>', // sender address
      to: "marciobwfilho98@gmail.com, jairosoareslima@gamil.com", // list of receivers
      subject: "Hello my friend✔", // Subject line
      text: "E ai Rapaziada", // plain text body
      html: "<b>Hello world?</b>", // html body
    });

    console.log("Message sent: %s", info.messageId);
  
    console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
  }
  catch(e) {
    console.log(e)
  }
}