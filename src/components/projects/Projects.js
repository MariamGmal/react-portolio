import React from 'react'
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';
import Tab from 'react-bootstrap/Tab';
import {  Container } from 'react-bootstrap';
import proj1 from "../../assets/yotproj2.jpeg"
import proj2 from "../../assets/yotproj1.jpeg"
import proj3 from "../../assets/yotproj3.jpeg"
import proj4 from "../../assets/yotproj4.jpeg"
import proj5 from "../../assets/yotproj5.jpeg"
import proj6 from "../../assets/yotproj6.jpeg"

import tick1 from "../../assets/tick1.PNG"
import tick2 from "../../assets/tick2.PNG"
import tick3 from "../../assets/tick3.PNG"
// import tick4 from "../../assets/tick4.PNG"s





import ProjectCards from "../projectCards/ProjectCards"

const Projects = () => {
    
const youtubeProjects =[{
    title :"A young man goes back in time to save humanity from destruction",
    imgUrl: proj1,
    videoLink:"https://www.youtube.com/watch?v=XDK6ISvEF08"
},
{
  title: "He finds himself in someone else's body 😱 but with all the knowledge that makes him remain the highest in the academy!",
  imgUrl: proj2,
  videoLink:"https://www.youtube.com/watch?v=ZhlHaBna_v0"
},
{
  title:"A boy decides to become a magician because of his small body that cannot hold a sword!",
imgUrl: proj3,
videoLink:"https://www.youtube.com/watch?v=Mg5wDOr6wpI"
},
{
  title:"A weak young man who has the ability to eat anything he can!",
  imgUrl: proj4 ,
  videoLink: "https://www.youtube.com/watch?v=ukjUtfZBcSo"
},
{
  title:"A child discovers too late that his father has been the strongest hunter in the world all this time!",
  imgUrl: proj5 ,
  videoLink: "https://www.youtube.com/watch?v=fD_fWjzBDEM"
},
{
  title:"They took everything from him and now he has grown up and returned them to take revenge",
  imgUrl: proj6 ,
  videoLink: "https://www.youtube.com/watch?v=UiMZ6XDGmPo"
}

]


const tiktokProjects = [{
  title :"",
    imgUrl: tick1,
    videoLink:"https://www.tiktok.com/@illumd_l/video/7418990160718728466?_r=1&_t=8q2qHJQBAeI"
},
{
  title :"",
    imgUrl: tick2,
    videoLink:"https://www.tiktok.com/@illumd_l/video/7228954712991649029?_r=1&_t=8q2qHJQBAeI"
},
{
  title :"",
    imgUrl: tick3,
    videoLink:"https://www.tiktok.com/@illumd_l/video/7211937084259503365?_r=1&_t=8q2qHJQBAeI"
},

]

  return (
    <>
    <section className='project' id="projects">
      <Container>
        <Row>
          <Col>
          <h2>Projects</h2>
       
          <Tab.Container id="left-tabs-example" defaultActiveKey="first">
          <Nav variant="pills" className=" pills mb-3 justify-content-center aligin-items-center">
            <Nav.Item className='nav-item'>
              <Nav.Link className='nav-link' eventKey="first">Youtube</Nav.Link>
            </Nav.Item>
            <Nav.Item className='nav-item'>
              <Nav.Link  className='nav-link' eventKey="second">Tiktok</Nav.Link>
            </Nav.Item>
            <Nav.Item className='nav-item'>
              <Nav.Link className='nav-link' eventKey="third">Tab 3</Nav.Link>
            </Nav.Item>
          </Nav>
          <Tab.Content>
            <Tab.Pane className='firstTap' eventKey="first">
             <Row>
              {
                youtubeProjects.map((item, index)=>{
                  return(
                    <>
                  
                  <ProjectCards
                    key={index}
                    {...item}
                    />
                    </>
                  )
                })
              }

             </Row>
            </Tab.Pane>
            <Tab.Pane className='secTap' eventKey="second">
              <Row>
                {
                  tiktokProjects.map((item, i)=>{
                    return(
                      <>
                      <ProjectCards
                      key={i}
                      {...item}
                      
                      />
                      
                      </>
                    )
                  })
                }
              </Row>
            </Tab.Pane>
            <Tab.Pane className='thirdTap' eventKey="third">third tab content</Tab.Pane>

          </Tab.Content>
          </Tab.Container>
          </Col>
        </Row>
      </Container>

    </section>
    
    </>
  )
}

export default Projects
