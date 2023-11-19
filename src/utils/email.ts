import nodemailer from 'nodemailer'

const {EMAIL, PASSWORD} = process.env

export const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
        user: EMAIL,
        pass: PASSWORD
    }
})


transporter.verify().then(() => {
    console.log('a')
})
