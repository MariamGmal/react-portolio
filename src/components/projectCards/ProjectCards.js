import React from 'react'
import { Col } from 'react-bootstrap'


const ProjectCards = ({title, imgUrl, videoLink}) => {
  return (
   <>
   <Col sm={6} md={4}>
   <a href={videoLink} target="_blank">
   <div className='proj-imgbx'>
    <img style={{width:"100%"}} src={imgUrl} alt='..'/>
    <div className='proj-txt'>  <h6 style={{color:"white"}}>{title}</h6>  </div>
    
   </div>
   </a>
   </Col>
   </>
  )
}

export default ProjectCards
