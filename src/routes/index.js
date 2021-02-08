require('dotenv').config()
const router = require('express').Router()
const path = require('path')
const nodemailer = require('nodemailer')

//gmail authentication
const transport = {
    host: 'smtp.gmail.com',
    port: 465,
    secure: true, //use TLS
    auth: {
        user: process.env.SMTP_TO_EMAIL,
        pass: process.env.SMTP_TO_PASSWORD,
    },
}

const transporter = nodemailer.createTransport(transport)

transporter.verify((error, success) => {
    if (error) {
        console.info(error)
    } else {
        console.info('Ready to send email.')
    }
})

router.get('/', (req, res, next) => {
    res.status(200).json({ msg: 'working...' })
})

router.post('/', async (req, res, next) => {
    console.info('req.body', req.body)

    const { from, to, subject, name, phone, message } = req.body

    const text = `
        from: 
        ${name}
    
        contact details
        email: ${from}
        phone: ${phone}

        message: 
        ${message}`;


    const mail = {
        from: from,
        to: to,
        subject: subject,
        text: text,
    }

    transporter.sendMail(mail, (err, data) => {
        if (err) {
            console.info(err)
            res.json({ status: 'fail' })
        } else {
            console.info(data)
            res.json({ status: 'success' })
        }
    })
})

router.use('/api', (req, res) => {
    res.set('Content-Type', 'application/json')
    res.send('{ "message": "Hello from Custom Server" }')
})

// router.use('*', (req, res) => {
//     res.sendFile(path.resolve(__dirname, '.', 'index.html'))
// })

module.exports = router
