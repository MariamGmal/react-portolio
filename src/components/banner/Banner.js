import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { ArrowRight } from 'react-bootstrap-icons';
import  amemi from "../../assets/man.jpg"
const Banner = () => {
  return (
    <>
    <section className='banner' id="home">
    <Container className=''>
        <Row className='align-items-center d-flex'>
            <Col xs={12} md={6} xl={6}  style={{}}>
            <span className='tagline'> Welcome To My Portfolio</span>
            <h1>{`Hi I'm Ahmed Mostafa`} <div className='wrap'>Voice Over</div></h1>
           <p> Recorded voice-overs for various projects in Arabic.
            <br></br>
            Collaborated with clients to ensure their needs were met.
            <br></br>
            Worked with a team of sound engineers to produce high-quality audio.</p>
           {/* <button onClick={()=> console.log("clicked")}> Let's Connect <ArrowRight color="#cf6922" size={25} /></button> */}
            </Col>
            <Col xs={12} md={6} xl={6} style={{ }}>
            {/* <img src={amemi} style={{width:"300px" , marginLeft:"400px"}} alt='Header Img'/> */}
            </Col>
        </Row>
    </Container>
    </section>
    </>
  )
}

export default Banner
