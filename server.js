// const express = require("express")
// const router =express.Router()
// const cors =require("cors")
// const nodemiler = require ("nodemailer")


// const app = express()
// app.use(cors())
// app.use(express.json())
// app.use("/", router)
// app.listen(5000, ()=> console.log("Server Running"))


// const contactEmail = nodemiler.createTransport({
//     service: 'gmail',
//     auth: {
//         user: "mariamgamal4646@gmail.com",
//         pass: ""
//     },
// })


// contactEmail.verify((error) => {
//     if(error){
//         console.log(error)
//     }else {
//         console.log("Ready to Send")
//     }
// })


// router.post("/contact", (req, res) => {
//     const name = req.body.firstName + req.body.lastName;
//     const email = req.body.email;
//     const message = req.body.message;
//     const phone = req.body.phone;
//     const mail = {
//         from: name,
//         to: "mariamgamal4646@gmail.com",
//         subject: "Contact From Voice Over Portfolio",
//         html: `<p>Name:${name}</p>
//                 <p>email:${email}</p>
//                 <p>phone:${phone}</p>
//                 <pmessage:${message}</p>`
//     };
//     contactEmail.sendMail(mail, (error) => {
//         if (error){
//             res.json(error)
//         } else {
//             res.json({ code: 200, status: "Message Sent"})
//         }
//     })

// })







