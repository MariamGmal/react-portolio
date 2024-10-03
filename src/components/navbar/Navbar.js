import React from 'react'
import '../../App.css';
import {Navbar,Container, Nav,NavbarToggle } from "react-bootstrap"
import { useState, useEffect } from 'react'
import logo from "../../assets/logo.jpg"

import { Youtube } from 'react-bootstrap-icons';
import { Tiktok } from 'react-bootstrap-icons';
import { Instagram } from 'react-bootstrap-icons';
import { Justify } from 'react-bootstrap-icons';









const Navbarr = () => {

const [activeLink, setActiveLink] = useState('home')
const [scrolled, setScrolled] = useState(false)


useEffect(()=> {
const onScroll = ()=>{
    if (window.scrollY > 50)
    { setScrolled(true)

    } else 
    {setScrolled(false)}
}

window.addEventListener("scroll", onScroll)

return () => window.removeEventListener("scroll", onScroll)
},[])

 
const onUpdateActiveLink = (value) =>{
    setActiveLink(value)
}



    return (
        <>
    <Navbar expand="lg" className={scrolled ? "scrolled" : ""}>
      <Container>
        <Navbar.Brand href="#home">
         
         <h2 className='mangti'>Mangti</h2>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" >
            <span className='togglerIcon'> < Justify className='togglerIcon'></Justify></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home" className={activeLink === "home"? "active navbar-linkk" : "navbar-linkk"} onClick={()=> onUpdateActiveLink("home")}>Home</Nav.Link>
            <Nav.Link href="#skills"  className={activeLink === "skills"? "active navbar-linkk" : "navbar-linkk"}   onClick={()=> onUpdateActiveLink("skills")}>Skills</Nav.Link>
            <Nav.Link href="#projects"  className={activeLink === "projects"? "active navbar-linkk" : "navbar-linkk"}  onClick={()=> onUpdateActiveLink("projects")}>Projects</Nav.Link>
          </Nav>
          <span className='"navbar-text'>
            <div className='social-icon'>
            <a href='https://www.youtube.com/@Mangti_ill' target="_blank"><Youtube></Youtube></a>
            <a href='https://www.tiktok.com/@illumd_l?_t=8q2qHJQBAeI&_r=1' target="_blank"><Tiktok></Tiktok></a>
            <a href='https://www.instagram.com/mangti_ll/?igsh=MXZweDJwbW8wenI5NA%3D%3D' target="_blank"><Instagram></Instagram></a>
            </div>
            {/* <button className='contactBtn' onClick={() => console.log("clicked")}>
            Let's Connect
            </button> */}
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>

</>
  )
}

export default Navbarr
