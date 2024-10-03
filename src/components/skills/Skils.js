import React from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
const Skills = () => {
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };
  return (
<>
<section className='skill' id='skills'>
    <Container>
    <Row>
        <Col>
        <div className='skill-bx'>
            <h2>
                SKills
            </h2>
           
        <Carousel responsive={responsive} infinite={true} className='skill-slider'  >
         <div className='item'>
         <div className='rate'>98%</div>
            <h5>Voice Over</h5>
         </div>

         <div className='item'>
         <div className='rate'>95%</div>
            <h5>Content Creator</h5>
         </div>

         <div className='item'>
            <div className='rate'>90%</div>
            <h5>Edit Videos</h5>
         </div>

         <div className='item'>
         <div className='rate'>95%</div>
            <h5>Manage social media accounts</h5>
         </div>

        </Carousel>
        </div>
            
            </Col>
    </Row>
    </Container>
    <img className='background-image-left'/>
</section>

</>
  )
}

export default Skills
