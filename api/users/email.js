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
  to: 'richardvillatoro@hotmail.com',
  subject: 'testing',
  text: 'Account successfully created!'
}

transporter.sendMail(mailOptions, function (err, success) {
  if (err) {
    console.log(err)
  } else {
    console.log('email sent sucessfully!')
  }
})
