const fs = require("fs");
const sgMail = require('@sendgrid/mail');

const setting = {
    token: "",
    mail_to: '',
    mail_from: '', // Use the email address or domain you verified above
    subject: 'Sending with Twilio SendGrid is Fun',
    text: 'and easy to do anywhere, even with Node.js',
    html: fs.readFileSync(__dirname+"/email-templates/paste-templates/digest.html").toString(),
}

sgMail.setApiKey(setting.token);

(async () => {
    try {
        await sgMail.send({
            to: setting.mail_to,
            from: setting.mail_from,
            subject: setting.subject,
            text: setting.text,
            html: setting.html
        });
        console.log("message successly sent")
    } catch (error) {
        console.error(error);

        if (error.response) {
            console.error(error.response.body)
        }
    }
})();
