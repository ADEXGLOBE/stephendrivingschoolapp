import { MDBContainer } from "mdb-react-ui-kit";
import React from 'react';
import * as mdb from 'mdb-ui-kit'
import {
    MDBNavbar,
    MDBNavbarNav,
    MDBNavbarItem,
    MDBNavbarLink,
    MDBNavbarToggler,
    MDBIcon } from "mdb-react-ui-kit";
import { Link } from 'react-router-dom';
// import logo3d from '../Images/logo3d.png'

const Navbar = () => {
    return (
            <nav 
            class="navbar navbar-expand-lg navbar-light bg-light">
            <div 
            class="container-fluid">
                <a 
                class="navbar-brand" 
                href="#">Stephen's Driving School</a>

                <button
                class="navbar-toggler"
                type="button"
                data-mdb-toggle="collapse"
                data-mdb-target="#navbarNav"
                aria-controls="navbarNav"
                aria-expanded="false"
                aria-label="Toggle navigation"
    >
         <i class="fas fa-bars"></i>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" 
          href="/">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/Dashboard">Profile page</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Pricing</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/ContactUs">ContactUs</a>
        </li>
        </ul>
    </div>
  </div>
</nav>
//         <div>
//             <header>
//                     {/* <h1 style={{
//                     backgroundImage: 'url(' + logo3d + ')',
//                     backgroundColor: '#34495E',
//                     backgroundRepeat: "no-repeat",
//                     paddingTop: "100px", }}>

//                     </h1> */}
//                             < MDBNavbar 
//                             expand='lg' 
//                             light bgColor="white"
//         // style={{
//         //     backgroundImage: 'url(' + logo3d + ')',
//         //     backgroundColor: '#34495E',
//         //     backgroundRepeat: "no-repeat",
//         //     paddingTop: "100px",   
// >
//                                      <MDBContainer fluid>
//                                         <MDBNavbarToggler 
//                                         aria-controls= 'navbarExample01'
//                                         aria-expanded='false'
//                                         aria-label='Toggle navigation'>
//                                                  <MDBIcon fas icon='bars' />
                   
//                                          </MDBNavbarToggler>
//      <div 
//                      className="collapse navbar-collapse" 
//                      id="navbarExample01">
//                          <MDBNavbar right className= 'mb-2 mb-lg-0'>
//                              <MDBNavbarItem active>
//                                     <MDBNavbarLink 
//                                         aria-current="page" 
//                                         href= "/">
//                                         <i class="fas fa-Home"></i>
//                                         Home
//                                     </MDBNavbarLink>
//                              </MDBNavbarItem>
//                              </MDBNavbar>
                             
//                              <MDBNavbarItem>
//                                  <MDBNavbarLink href="/SignUp">
//                                  Registration
                                 
//                                  </MDBNavbarLink>
//                              </MDBNavbarItem>
//                              <MDBNavbarItem>
//                                  <MDBNavbarLink href="/ContactUs">
//                                  ContactUs
//                                  </MDBNavbarLink>  
//                                  </MDBNavbarItem>   
//                                     </div>
//                                     </MDBContainer>
//                         </MDBNavbar>
       
//             </header>
//     </div>
    )
}
export default Navbar;