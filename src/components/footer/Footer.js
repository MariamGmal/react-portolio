import React from 'react'
import { Youtube } from 'react-bootstrap-icons';
import { Tiktok } from 'react-bootstrap-icons';
import { Instagram } from 'react-bootstrap-icons';



const Footer = () => {
  return (
   <>
   <div class="container-flid mt-5 pb-1" style={{backgroundColor:"rgba(255, 254, 254, 0.1)"}}>
  <footer class="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
    <div class="col-md-4 d-flex align-items-center">

      <span class="mb-3 mb-md-0 ms-5" style={{color:"#cf6922", fontWeight:"bold"}} >Mangti</span>
    </div>

    <ul class="nav col-md-4 justify-content-end list-unstyled d-flex me-5">
      <li class="me-3">       <a href='https://www.youtube.com/@Mangti_ill' target="_blank"><Youtube></Youtube></a></li>
      <li class="me-3">       <a href='https://www.tiktok.com/@illumd_l?_t=8q2qHJQBAeI&_r=1' target="_blank"><Tiktok></Tiktok></a>
      </li>
      <li class="me-3">       <a href='https://www.instagram.com/mangti_ll/?igsh=MXZweDJwbW8wenI5NA%3D%3D' target="_blank"><Instagram></Instagram></a>
      </li>
    </ul>
  </footer>
</div>
   
   </>
  )
}

export default Footer
