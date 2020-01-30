const nodeMailer = require('nodemailer');
const mailGun = require('nodemailer-mailgun-transport');

const auth = {
    auth: {
        api_key: '56330b281a505e51bd3803fba0345c3f-074fa10c-8bbb4314',
        domain: 'sandbox3c71bc40529e4e8abd44a4119b749445.mailgun.org'
    }
}

const transporter = nodeMailer.createTransport(mailGun(auth))

const sendMail = (email, subject, text) => {
    const mailOptions = {
        from: email,
        to: 'acardnicolas91@gmail.com',
        subject: subject,
        text: text
    }
    
    transporter.sendMail(mailOptions, (err, data) => {
        if(err){
            console.log('My error' + err);
        }else{
            console.log('Message sent');
        }
    });
};

module.exports = sendMail;