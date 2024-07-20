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

const NewSection = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  const images = [
    "EmployeeDashb.png",
    "EmployeePro.png",
    "LoginReso.png",
    "ProjectDetails.png",
    "SuperAdmin1.png",
    "Tickets.png",
  ];

  return (
    <div id="about" className="abouttop">
      <div data-aos="fade-up" className="about py-5">
        <MDBBtn className="  featurebtn1">Short Preview</MDBBtn>

        <MDBCol className="mt-3 pb-5" size="12" lg="7">
          <h1>
            <span className="text-black">A glimpse inside the</span>

            <span className="text-primary"> book</span>
          </h1>

          <p style={{ color: "#BDBDC7" }}>
            Discover expert insights, practical examples, and actionable advice
            awaiting you within the pages of our comprehensive guide.
          </p>
        </MDBCol>

        <MDBRow>
          <Carousel
            additionalTransfrom={0}
            arrows
            autoPlay
            autoPlaySpeed={1000}
            centerMode={false}
            className=""
            containerClass="container-with-dots"
            dotListClass=""
            draggable
            focusOnSelect={false}
            infinite
            itemClass=""
            keyBoardControl
            minimumTouchDrag={80}
            pauseOnHover
            renderArrowsWhenDisabled={false}
            renderButtonGroupOutside={false}
            renderDotsOutside={false}
            responsive={{
              desktop: {
                breakpoint: {
                  max: 3000,
                  min: 1024,
                },
                items: 3,
                partialVisibilityGutter: 40,
                slidesToSlide: 1,

              },
              mobile: {
                breakpoint: {
                  max: 464,
                  min: 0,
                },
                items: 1,
                partialVisibilityGutter: 30,
                slidesToSlide: 1,

              },
              tablet: {
                breakpoint: {
                  max: 1024,
                  min: 464,
                },
                items: 2,
                partialVisibilityGutter: 30,
                slidesToSlide: 1,

              },
            }}
            rewind={false}
            rewindWithAnimation={false}
            rtl={false}
            shouldResetAutoplay
            showDots={false}
            sliderClass=""
            slidesToSlide={2}
            swipeable
          >
            {images.map((image, index) => {
              return (
                <MDBCard className="mx-3">
                  <MDBCardImage
                    src={image}
                    className="rounded-5 image-height"
                    position="top"
                    alt="..."
                  />
                 
                </MDBCard>
              );
            })}
          </Carousel>
        </MDBRow>
      </div>
    </div>
  );
};

export default NewSection;
