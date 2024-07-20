import React from "react";
import {
  MDBBtn,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBRow,
  MDBIcon,
} from "mdb-react-ui-kit";

import AOS from "aos";

import { useEffect } from "react";
const Testimonials = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  const renderStars = () => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      stars.push(<MDBIcon key={i} icon="star" fas className="" />);
    }
    return stars;
  };

  const testimonials = [
    {
      text: "ResoSyncer has completely transformed our resource management process. The intuitive interface and real-time analytics have made a significant impact on our productivity.",
      author: "John Doe",
      position: "CEO",
      company: "ABC Corp",
      image:
        "https://framerusercontent.com/images/2Y7D9JS4krqAwKQy2bnTL8Hqfg.png?scale-down-to=512",
    },
    {
      text: "Using ResoSyncer has streamlined our project management tasks. The comprehensive tracking features ensure that we stay on schedule and meet our deadlines.",
      author: "Jane Smith",
      position: "Project Manager",
      company: "XYZ Ltd",
      image:
        "https://framerusercontent.com/images/Mp7qaShG98j2qmmBNdftQVFjYag.png?scale-down-to=512",
    },
    {
      text: "The employee data tracking capabilities of ResoSyncer are outstanding. It has simplified our HR processes and improved our data accuracy immensely.",
      author: "Michael Johnson",
      position: "HR Director",
      company: "Acme Inc.",
      image:
        "https://framerusercontent.com/images/DqlCOuEt50xoB9OtRSkK9tDWTjQ.png",
    },
    {
      text: "ResoSyncer’s collaboration tools have greatly enhanced our team's communication and coordination. It's now easier than ever to keep everyone aligned.",
      author: "Sarah Lee",
      position: "Operations Manager",
      company: "Beta Tech",
      image:
        "https://framerusercontent.com/images/uNyXIhuGNBdSRHCDQcDtk8Wtjk.png?scale-down-to=512",
    },
    {
      text: "The real-time analytics provided by ResoSyncer have given us valuable insights into our resource usage and project progress, allowing us to make better decisions.",
      author: "David Brown",
      position: "COO",
      company: "Gamma Solutions",
      image:
        "https://framerusercontent.com/images/2Y7D9JS4krqAwKQy2bnTL8Hqfg.png?scale-down-to=512",
    },
    {
      text: "With ResoSyncer, we’ve been able to optimize our resource allocation and improve overall efficiency. It's a game-changer for our operations.",
      author: "Emily Davis",
      position: "Resource Manager",
      company: "Delta Enterprises",
      image:
        "https://framerusercontent.com/images/Mp7qaShG98j2qmmBNdftQVFjYag.png?scale-down-to=512",
    },
    {
      text: "ResoSyncer’s task management features have made it easy to assign and track tasks. Our team’s productivity has seen a significant boost.",
      author: "Robert Wilson",
      position: "Team Lead",
      company: "Epsilon Services",
      image:
        "https://framerusercontent.com/images/DqlCOuEt50xoB9OtRSkK9tDWTjQ.png",
    },
    {
      text: "The platform’s ability to maintain detailed employee records and track performance metrics is impressive. It's an essential tool for our HR department.",
      author: "Jessica Taylor",
      position: "HR Specialist",
      company: "Zeta Tech",
      image:
        "https://framerusercontent.com/images/uNyXIhuGNBdSRHCDQcDtk8Wtjk.png?scale-down-to=512",
    },
    {
      text: "ResoSyncer has helped us reduce operational costs by eliminating inefficiencies and improving resource management.",
      author: "William Martinez",
      position: "CFO",
      company: "Omega Industries",
      image:
        "https://framerusercontent.com/images/2Y7D9JS4krqAwKQy2bnTL8Hqfg.png?scale-down-to=512",
    }
 
  ];

  return (
    <div id="testimonials">
      <div data-aos="fade-up" className="features">
        <MDBBtn className="  featurebtn1">Testimonials</MDBBtn>

        <MDBCol className="mt-3" size="12" lg="7">
          <h1>
            <span className="text-black">Thousands of rave </span>

            <span className="text-primary">reviews</span>
          </h1>

          <p style={{ color: "#66666E" }}>
            Explore reader feedback praising our ebook for its clarity,
            practicality, and transformative impact on their design skills.
          </p>
        </MDBCol>

        <MDBRow data-aos="fade-up">
          {testimonials.map((testimonial, index) => {
            return (
              <MDBCol className="mb-5" size="12" lg="4">
                <MDBCard className="cardhover border-0 shadow-none">
                  <MDBCardBody className="border-0">
                    <MDBCardTitle> {renderStars()}</MDBCardTitle>
                    <MDBCardText className=" text-wrap"> {testimonial.text}</MDBCardText>
                    <div className="d-flex align-items-center mt-3">
                      <img
                        className="img-fluid aboutusimages"
                        src={testimonial.image}
                        alt=""
                      />

                      <div className="d-flex flex-column ms-2">
                        <span className="fw-bold">{testimonial.author}</span>

                        <span>
                          {testimonial.position},{testimonial.company}
                        </span>
                      </div>
                    </div>
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

export default Testimonials;
