import nodemailer from 'nodemailer'
import { config } from '../../config/default.js'

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: config.nodemailer.email,
    pass: config.nodemailer.password
  },
  tls: {
    rejectUnauthorized: false
  }
})

const mailOptions = {
  from: 'richard.andre.herrera@gmail.com',
  to: 'pasantiaciancoders@gmail.com',
  subject: 'testing',
  text: 'Correo de ejemplo'
}

transporter.sendMail(mailOptions, function (err, success) {
  if (err) {
    console.log(err)
  } else {
    console.log('email sent sucessfully!')
  }
})
