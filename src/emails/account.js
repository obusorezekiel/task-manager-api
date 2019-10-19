const sgMail = require('@sendgrid/mail')


sgMail.setApiKey(process.env.SENDGRID_API_KEY)


const sendWelcomeEmail = (email, name) => {

    sgMail.send({
        to: email,
        from: 'obusoru@gmail.com',
        subject: 'Thanks for joining in',
        text: `Wwlcome to the app, ${name}`
    })
}

const sendCancelationEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'obusoru@gmail.com',
        subject: 'Sorry to see you go',
        text: `Goodbye ${name}`
    })
}


module.exports = {
    sendWelcomeEmail,
    sendCancelationEmail
}