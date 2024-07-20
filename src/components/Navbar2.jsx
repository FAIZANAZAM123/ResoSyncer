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
import Drawer from "./Drawer";
import { useState } from "react";
const Navbar2 = ({ className }) => {
  const [openBasic, setOpenBasic] = useState(false);

  return (
    <>
      <MDBNavbar
        className={`navbar2 ${className} shadow-sm  `}
        fixed="top"
        expand="lg"
      >
        <MDBContainer fluid>
          <MDBNavbarBrand href="#">
            <img src="logo.jpeg" className="img-fluid logonavbar2" alt="" />
          </MDBNavbarBrand>

          <MDBNavbarToggler
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
            onClick={() => setOpenBasic(!openBasic)}
          >
            <MDBIcon className="text-black fs-3" fas icon="grip-lines" />
          </MDBNavbarToggler>
          <MDBCollapse navbar className=" ">
            <MDBNavbarNav className="navbar-nav2">
              <MDBNavbarLink active aria-current="page" href="#features">
                Features
              </MDBNavbarLink>


              <MDBNavbarLink href="#about">About</MDBNavbarLink>


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

export default Navbar2;
