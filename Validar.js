let nodemailer = require("nodemailer");

let transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    auth: {
        user: "Your email",
        pass: "Your passworld"
    }
});


transporter.sendMail({
    from: "Your name<Your Email again>",
    to: "destiny",
    subject: "Nodemail",
    text: "Hello world",
}).then(message =>{
    console.log(message)
}).catch(err =>{
    console.log(err)
})