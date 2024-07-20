import React from "react";
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarToggler,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBIcon,
  MDBCollapse,
  MDBRow,
  MDBCol,
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
} from "mdb-react-ui-kit";
import { useState } from "react";

import Drawer from "./Drawer";
const Navbar1 = ({ className }) => {
    const [openBasic, setOpenBasic] = useState(false);

  return (
    <>
      {" "}
      <MDBNavbar className={`navbar11 ${className}`} expand="lg">
        <MDBContainer fluid>
          <MDBNavbarBrand href="#"><span className="fw-bold">ResoSyncer</span> <img src="logo.jpeg" className="img-fluid logonavbar2 ms-2 " alt="" /></MDBNavbarBrand>

          <MDBNavbarToggler
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
          onClick={() => setOpenBasic(!openBasic)}
        >
            <MDBIcon className="text-white fs-3" fas icon="grip-lines" />
        </MDBNavbarToggler>
          <MDBCollapse navbar className="justify-content-end ">
            <MDBNavbarNav>
              <MDBNavbarLink active aria-current="page" href="#features">
                Features
              </MDBNavbarLink>

              <MDBNavbarLink active aria-current="page" href="#about">
                About
              </MDBNavbarLink>
              <MDBNavbarLink href="#benefits">Benefits</MDBNavbarLink>
              <MDBNavbarLink href="#testimonials">Testimonials</MDBNavbarLink>

              <MDBNavbarLink href="#pricing">Pricing</MDBNavbarLink>
              <MDBNavbarLink href="#faqs">FAQs</MDBNavbarLink>
            </MDBNavbarNav>
          </MDBCollapse>
        </MDBContainer>


      </MDBNavbar>
      <Drawer openBasic={openBasic} setOpenBasic={setOpenBasic} />


    </>
  );
};

export default Navbar1;
