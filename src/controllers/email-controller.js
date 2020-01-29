const nodemailer = require('nodemailer');


module.exports = {
    
    async welcomeEmail(name, email) {
        try {
            //Refatorar esse código [Brener]
            const destinyEmail = email;
            const subjectEmail = "E-mail de Boas-Vindas do time da Orpheus!";
            const emailBody = `Olá ${name}, seja bem vindo ao Orpheus`;

            const emailOptions = {
                from: 'orpheus.software.org@gmail.com',
                to: destinyEmail,
                subject: subjectEmail,
                text: emailBody
            }

           const transporter = nodemailer.createTransport({
                host: "TODO",
                auth: {
                  user: "orpheus.software.org@gmail.com",
                  pass: "TODO"
                }
              });

            transporter.sendMail(emailOptions, function(error, info){
                if (error) {
                    //console.log(error);
                    console.warn(error);
                } else {
                  console.log('Email enviado para: ' + info.response);
                }
              });

    } catch (error) {
        console.warn(error);

        //return error;
        }
    }
}
