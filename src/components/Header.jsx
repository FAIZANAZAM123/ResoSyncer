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
  MDBCol,
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
} from "mdb-react-ui-kit";

import Carousel from "react-multi-carousel";
import Navbar1 from "./Navbar1";
import "react-multi-carousel/lib/styles.css";
import Navbar2 from "./Navbar2";
import { useEffect } from "react";

export default function Header() {
  const [openNavSecond, setOpenNavSecond] = useState(false);

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  };

  const renderStars = () => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      stars.push(<MDBIcon key={i} icon="star" fas className="star-icon" />);
    }
    return stars;
  };

  const clientsimages = [
    "clients (1).jpeg",
    "clients (2).jpeg",
    "clients (3).jpeg",
    "clients (4).jpeg",
    "clients (5).jpeg",
    "clients (6).jpeg",
    "clients (7).jpeg",
  ];
  const [showNavbar2, setShowNavbar2] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setShowNavbar2(currentScrollY > 100); // Show Navbar2 after scrolling 100px
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <div className="header">
        <Navbar1 className={showNavbar2 ? "hidden" : "visible"} />
        <Navbar2 className={showNavbar2 ? "visible" : "hidden"} />

        <MDBRow className="g-0 row1  h-100 mt-5 flex-wrap flex-row">
          <MDBCol
            size="12"
            lg="6"
            className="mb-4 d-flex flex-column justify-content-center "
          >
            <div>
              <h1 className="headingtext">Welcome to ResoSyncer</h1>
              <p className="ptext">
                Streamline Your Resources, Projects, and Workforce with Our
                Comprehensive Management Solution
              </p>
            </div>

            <div className="d-flex">
              <MDBBtn size="lg" className="me-3 button1">
                Buy Now
              </MDBBtn>
              <MDBBtn size="lg" className="button2" color="secondary">
                Free Preview
              </MDBBtn>
            </div>
          </MDBCol>

          <MDBCol size="12" lg="6" className=" text-lg-end text-center">
            <img src="main.jpeg" className="book " />
            {/* <img src="image1.png" className="img-fluid image1" alt="" />

              <h5 className="text-start p-3 design">
                Designing creative user interfaces
              </h5>
              <p className="text-start p-3">by Dmytri Ivanov</p> */}
            {/* </div> */}
          </MDBCol>
        </MDBRow>
      </div>

      <h1 className="text-center my-5 text-black"> Our Clients </h1>

      <div className="mx-4">
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
              items: 4,
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
          {clientsimages.map((image, index) => {
            return (
              <div className="d-flex   m-auto  justify-content-center align-items-center mt-3">
                <img
                  className="img-fluid ourclientsimages "
                  src={image}
                  alt=""
                />
              </div>
            );
          })}
        </Carousel>
      </div>
    </>
  );
}
