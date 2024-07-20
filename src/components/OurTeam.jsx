import React from "react";
import {
  MDBBtn,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImage,
  MDBRow,
  MDBIcon,
} from "mdb-react-ui-kit";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import AOS from "aos";
import { useEffect } from "react";

const OurTeam = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  const images = [
    {
      image: "ourteam (1).jpeg",
      name: "Shoaib Rafique",
      role: "Founder",
    },
    {
      image: "ourteam (2).jpeg",
      name: "Shahbaz Rafique",
      role: "Chief Operating Officer (CTO)",
    },
    {
      image: "ourteam (3).jpeg",
      name: "Ashkan Mohaghegh",
      role: "Head of Marketing & PR",
    },
    {
      image: "ourteam (4).jpeg",
      name: "Charles Hurd ",
      role: "Head of Sales & Branding",
    },
  ];

  return (
    <div id="about" className="abouttop">
      <div data-aos="fade-up" className="about py-5">
        <MDBCol className="mt-3 pb-5" size="12" lg="7">
          <h1>
            <span className="text-black">Meet Our </span>

            <span className="text-primary"> Team</span>
          </h1>

          <p style={{ color: "#BDBDC7" }}>
            Our team is composed of dedicated professionals with diverse
            expertise in software development, project management, and business
            operations. We are passionate about creating solutions that make a
            real difference for our clients. Each member of our team brings a
            unique perspective and a shared commitment to excellence, driving
            ResoSyncer forward.

          </p>


        </MDBCol>

        <MDBRow>
         
            {images.map((image, index) => {
              return (

                <MDBCol size="12" lg='3' className="d-flex">
                   <MDBCard className=" shadow-none m-3">
                  <MDBCardImage 
                  style={{width:"60%"}}
                    src={image.image}
                    className="rounded-circle m-auto img-fluid"
                    position="top"
                    alt="Profile Image"
                  />
                  <MDBCardBody className="text-center">
                    <MDBCardTitle className="font-weight-bold">
                      {image.name}
                    </MDBCardTitle>
                    <MDBCardText className="text-muted">
                      {image.role}
                    </MDBCardText>
                  </MDBCardBody>
                </MDBCard>
                </MDBCol>
               
              );
            })}
        
        </MDBRow>
      </div>
    </div>
  );
};

export default OurTeam;
