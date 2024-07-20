import React, { useState } from "react";
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
  MDBListGroup,
  MDBListGroupItem,
  MDBCardLink,
  MDBCol,
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
} from "mdb-react-ui-kit";

import AOS from "aos";

import { useEffect } from "react";
export default function Pricing() {
    useEffect(() => {
        AOS.init();
      }, []);
  return (
    <div id="pricing">
      <div data-aos="fade-up" className="header">
        <MDBCol className="mt-3 p-5" size="12" lg="7">
          <h2 className="mt-5">
            <span className="text-white">Explore our pricing options</span>
          </h2>

          <p style={{ color: "#BDBDC7" }}>
            Choose the plan that fits your needs and unlock exclusive features
            to fast-track your journey to becoming a design expert.
          </p>
        </MDBCol>

        <MDBRow  data-aos="fade-up" className="g-0 row1 mt-5 flex-wrap  justify-content-between flex-row">
          <MDBCol data-aos="fade-up" size="12" lg="6">
            <MDBCard className="pricing-card mt-3">
              <MDBCardBody>
                <MDBCardTitle>
                  <MDBBtn className="  pricingbtn shadow-none ">
                    Free Preview
                  </MDBBtn>
                </MDBCardTitle>
                <MDBCardText className="d-flex py-2 ms-1 align-items-baseline">
                  <h1>$0</h1>

                  <p className="ms-1" style={{ color: "#92929C" }}>
                    Try it before you buy
                  </p>
                </MDBCardText>

                <MDBBtn className=" pricing-btn w-100  shadow-none ">
                  Free Preview
                </MDBBtn>


                <MDBListGroup className="list" style={{ minWidth: "100%" }}>
                  <MDBListGroupItem
                    style={{ color: "#92929C" }}
                    className="list"
                    noBorders
                  >
                All Basic Features
                  </MDBListGroupItem>
                  <MDBListGroupItem
                    style={{ color: "#B2B2BB" }}
                    className="list"
                    noBorders
                  >
                    <MDBIcon far icon="check-circle me-2" />
                    Advanced Project Management
                  </MDBListGroupItem>


                  <MDBListGroupItem
                    style={{ color: "#B2B2BB" }}
                    className="list"
                    noBorders
                  >
                    <MDBIcon far icon="check-circle me-2" />
                    Advanced Employee Data Tracking
                  </MDBListGroupItem>


                  <MDBListGroupItem
                    style={{ color: "#B2B2BB" }}
                    className="list"
                    noBorders
                  >
                    <MDBIcon far icon="check-circle me-2" />
                    Real-time Analytics
                  </MDBListGroupItem>
                </MDBListGroup>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>

          <MDBCol size="12" lg="6">


          <MDBCard data-aos="fade-up" className="pricing-card mt-3  ms-0 ms-lg-4">
              <MDBCardBody>
                <MDBCardTitle>
                  <MDBBtn className="  pricingbtn shadow-none ">
                  Enterprise
                  </MDBBtn>
                </MDBCardTitle>
                <MDBCardText className="d-flex py-2 ms-1 align-items-baseline">
                  <h4>Contact for Pricing</h4>

                  <p className="ms-1" style={{ color: "#92929C" }}>
                One-time payment
                  </p>
                </MDBCardText>

                <MDBBtn className=" pricing-btn2 w-100  shadow-none ">
                  Buy now
                </MDBBtn>

                <MDBListGroup className="list" style={{ minWidth: "100%" }}>
                  <MDBListGroupItem
                    style={{ color: "#92929C" }}
                    className="list"
                    noBorders
                  >
                    key features
                  </MDBListGroupItem>
                  <MDBListGroupItem
                    style={{ color: "#B2B2BB" }}
                    className="list"
                    noBorders
                  >
                    <MDBIcon far icon="check-circle me-2" />
                    All Pro Features
                  </MDBListGroupItem>


                  <MDBListGroupItem
                    style={{ color: "#B2B2BB" }}
                    className="list"
                    noBorders
                  >
                    <MDBIcon far icon="check-circle me-2" />
                    Customized Solutions
                  </MDBListGroupItem>


                  <MDBListGroupItem
                    style={{ color: "#B2B2BB" }}
                    className="list"
                    noBorders
                  >
                    <MDBIcon far icon="check-circle me-2" />
                    Priority Support

                  </MDBListGroupItem>

                  <MDBListGroupItem
                    style={{ color: "#B2B2BB" }}
                    className="list"
                    noBorders
                  >
                    <MDBIcon far icon="check-circle me-2" />
                    Dedicated Account Manager
                  </MDBListGroupItem>
                </MDBListGroup>
              </MDBCardBody>
            </MDBCard>




          </MDBCol>
        </MDBRow>
      </div>
    </div>
  );
}
