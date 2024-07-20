import React from "react";
import {
  MDBFooter,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBIcon,
} from "mdb-react-ui-kit";

export default function Footer() {
  return (
    <MDBFooter className="text-center  footerbottom text-lg-start text-muted">
      <section className="border-bottom"></section>

      <section className="">
        <MDBContainer className="text-center text-md-start mt-5">
          <MDBRow className="mt-3">
            <MDBCol md="3" lg="4" xl="3" className="mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">
                <img className="img-fluid logonavbar2" src="logo.jpeg" alt="" />
                <span className="ms-2">ResoSyncer</span>
              </h6>
              <p>
              ResoSyncer is a comprehensive platform meticulously designed to streamline resource management, project management, and employee data tracking

              </p>
            </MDBCol>

            <MDBCol md="3" lg="2" xl="2" className="mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Useful links</h6>
              <p>
                <a href="#features" className="text-reset">
                  Features
                </a>
              </p>
              <p>
                <a href="#about" className="text-reset">
                  About
                </a>
              </p>
              <p>
                <a href="#benefits" className="text-reset">
                  Benefits
                </a>
              </p>
              <p>
                <a href="#testimonials" className="text-reset">
                  Testimonials
                </a>
              </p>

              <p>
                <a href="#pricing" className="text-reset">
                  Pricing
                </a>
              </p>

              <p>
                <a href="#faqs" className="text-reset">
                  FAQs
                </a>
              </p>
            </MDBCol>

            <MDBCol md="4" lg="3" xl="3" className="mx-auto mb-md-0 mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
              <p>
                <MDBIcon icon="home" className="me-2" />
                Boston, Massachusetts, USA
              </p>
              <p>
                <MDBIcon icon="envelope" className="me-3" />
                info@resosyncer.com
              </p>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>

      <div
        className="text-center bottomfootercopyright p-4"
       
      >
        © 2023 Copyright:
        <a className="text-reset fw-bold">Resosyncer.com</a>
      </div>
    </MDBFooter>
  );
}
