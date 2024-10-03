// import React from 'react'
// import { useState } from 'react'
// import { Container, Row , Col, Form} from 'react-bootstrap'
// import { Send } from 'react-bootstrap-icons'
// const Contact = () => {
    
// const formInitialDetails ={
//     firstName: '',
//     lastName:'',
//     email:'',
//     phone:'',
//     message:''
// }

// const [formDetails, setFormDetails] = useState(formInitialDetails)
// const [buttonText, setButtonText] = useState("Send")
// const [status, setStatus] = useState({})


// const onFormUpdate = (category, value) => {

//   setFormDetails({
//     ...formDetails,
//     [category]: value
// })}

// const handleSubmit = async (e) =>{
// e.preventDefault()
// let response = await fetch("http://localhost:5000/contact", {
//   method: "POST",
//   headers: {
//     "Content-Type": "Application/json;charset=utf-8",
//   },
//   body: JSON.stringify(formDetails),
// })
// setButtonText("Send");
// let result = response.json();
// setFormDetails(formInitialDetails);
// if (result.code === 200) {
//   setStatus({ success: true, message: "message sent successfully"})
// } else {
//   setStatus({  success: false, message: "something went wrong, please try again later"})
// }








// }
//   return (
//    <>
//    <section className='contact' id='connect' >
//     <Container>
//       <Row className='align-items-center'>
//         <Col  md={6}>
//         <img src="" alt='.'/>
//         </Col>
//         <Col md={6}>
//         <h3>Get In Touch</h3>
//         <Form onSubmit={handleSubmit}>
//           <row>
//             <Col ms={6} className='px-1'>
//             <input type='text' class="form-control" value={formDetails.firstName}  placeholder='First Name'
//             onChange={(e)=> onFormUpdate('firstName', e.target.value)}/>
//             </Col>
//             <Col ms={6}  className='px-1'>
//             <input type='text' class="form-control" value={formDetails.lastName}  placeholder='Last Name'
//             onChange={(e)=> onFormUpdate('lastName', e.target.value)}/>
//             </Col>
//             <Col ms={6}  className='px-1'>
//             <input type='email' class="form-control" value={formDetails.email}  placeholder='Email Address'
//             onChange={(e)=> onFormUpdate('email', e.target.value)}/>
//             </Col>
//             <Col ms={6}  className='px-1'>
//             <input type='tel' class="form-control"  value={formDetails.phone}  placeholder='Phone No.'
//             onChange={(e)=> onFormUpdate('phone', e.target.value)}/>
//             </Col>
//             <Col>
//             <textarea row='6'  class="form-control" value={formDetails.message} placeholder='Message'
//              onChange={(e)=> onFormUpdate('message', e.target.value)} />
//              <button type='submit' className='btn btn-primary'><span>{buttonText}</span></button>
//             </Col>
//             {
//               status.message &&
//               <Col>
//               <p className={status.success === false ? "danger": "success"}>{status.message}</p>
//               </Col>
//             }
            
//           </row>
//         </Form>
//         </Col>
//       </Row>
//     </Container>

//    </section>
   
   
//    </>
//   )
// }

// export default Contact
