import React, { useState } from "react";
import {
  MDBBtn,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBRow,
  MDBIcon,
  MDBTabs,
  MDBTabsItem,
  MDBTabsLink,
  MDBTabsContent,
  MDBTabsPane,
} from "mdb-react-ui-kit";

import AOS from "aos";
import { useEffect } from "react";

const About = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  const aboutData = [
    {
      title: "About Us",
      text: "ResoSyncer is a comprehensive platform meticulously designed to streamline resource management, project management, and employee data tracking. Our intuitive and user-friendly interface empowers businesses to efficiently allocate resources, monitor project progress, and maintain detailed employee records. With advanced features like real-time resource visibility, task assignment, and milestone tracking, ResoSyncer enables companies to enhance productivity, improve collaboration, and ensure data accuracy. By consolidating these essential functions into a single, integrated solution, ResoSyncer provides a robust framework for organizational efficiency and success.",
      icon: "user-friends",
    },
    {
      title: "Our Journey",
      text: "Founded by TIERS Limited, ResoSyncer was born out of a need for a comprehensive solution that addresses the complex challenges of modern business management. Our team of experts recognized the inefficiencies in traditional resource and project management tools and set out to create an innovative platform that integrates all essential functions into a single, user-friendly interface.",
      icon: "route",
    },
    {
      title: "Our Mission",
      text: "At ResoSyncer, our mission is to empower businesses to achieve their full potential by providing cutting-edge tools for resource management, project management, and employee data tracking. We strive to enhance productivity, improve collaboration, and ensure data accuracy, helping organizations thrive in today’s competitive landscape.",
      icon: "bullseye",
    },
    {
      title: "Our Vision",
      text: "We envision a world where businesses can operate seamlessly and efficiently, leveraging technology to overcome obstacles and reach new heights. Our goal is to be the leading platform for comprehensive business management, continuously innovating to meet the evolving needs of our clients.",
      icon: "eye",
    },
    // {
    //   title: "Meet Our Team",
    //   text: "Our team is composed of dedicated professionals with diverse expertise in software development, project management, and business operations. We are passionate about creating solutions that make a real difference for our clients. Each member of our team brings a unique perspective and a shared commitment to excellence, driving ResoSyncer forward.",
    //   icon: "users",
    // },
  ];

  const corevalues = [
    {
      title: "Innovation",
      text: "We are committed to continuous innovation, constantly seeking new ways to improve our platform and better serve our clients.",
      icon: "lightbulb",
    },
    {
      title: "Integrity",
      text: "Integrity is at the heart of everything we do. We believe in honest, transparent, and ethical practices in all our interactions.",
      icon: "balance-scale",
    },
    {
      title: "Customer Success",
      text: "Our clients’ success is our success. We prioritize customer satisfaction and work tirelessly to ensure our platform meets their needs.",
      icon: "hands-helping",
    }
  ];

  const [basicActive, setBasicActive] = useState("tab1");

  const handleBasicClick = (value) => {
    if (value === basicActive) {
      return;
    }

    setBasicActive(value);
  };

  return (

    
<>
    <div id="about" className="abouttop">
      <div data-aos="fade-up" className="about py-5">
        <MDBBtn className="  featurebtn1">About ResoSyncer</MDBBtn>

        <MDBCol className="mt-3 pb-5" size="12" lg="7">
          <h1>
            <span className="text-black">
              Discover Our Mission, Vision, and the Team Behind{" "}
            </span>

            <span className="text-primary">ResoSyncer</span>
          </h1>
        </MDBCol>

        <MDBTabs className="mb-3 justify-content-center">
          <MDBTabsItem>
            <MDBTabsLink
              onClick={() => handleBasicClick("tab1")}
              active={basicActive === "tab1"}
              className="mdb-tabs-link"
            >
              About Us
            </MDBTabsLink>
          </MDBTabsItem>
          <MDBTabsItem>
            <MDBTabsLink
              onClick={() => handleBasicClick("tab2")}
              active={basicActive === "tab2"}
              className="mdb-tabs-link"
            >
              Our Journey
            </MDBTabsLink>
          </MDBTabsItem>
          <MDBTabsItem>
            <MDBTabsLink
              onClick={() => handleBasicClick("tab3")}
              active={basicActive === "tab3"}
              className="mdb-tabs-link"
            >
              Our Mission
            </MDBTabsLink>
          </MDBTabsItem>
          <MDBTabsItem>
            <MDBTabsLink
              onClick={() => handleBasicClick("tab4")}
              active={basicActive === "tab4"}
              className="mdb-tabs-link"
            >
              Our Vision
            </MDBTabsLink>
          </MDBTabsItem>
        </MDBTabs>

        <MDBRow className="g-0">
          {aboutData.map(
            (section, index) =>
              basicActive === `tab${index + 1}` && (
                <MDBTabsPane
                  key={index}
                  open={basicActive === `tab${index + 1}`}
                >
                  <MDBCol size="12" lg="12">
                    <MDBCard
                      data-aos="fade-up"
                      className="shadow-none mdb-card"
                    >
                      <MDBCardBody className="mdb-card-body">
                        <MDBCardTitle className="text-black fw-bold">
                          {section.title}
                          {section.icon && (
                            <MDBIcon
                              icon={section.icon}
                              className="icon ms-2"
                            />
                          )}
                        </MDBCardTitle>
                        <MDBCardText>{section.text}</MDBCardText>
                      </MDBCardBody>
                    </MDBCard>
                  </MDBCol>
                </MDBTabsPane>
              )
          )}

       
        </MDBRow>
      </div>



      


      
    </div>


<div>
<h1 className="text-center text-black my-5">Core Values</h1>
<MDBRow className="m-3 justify-content-center">
  {corevalues.map((section, index) => (
    <MDBCol className="my-3" key={index} md="6" lg="4">
      <MDBCard
        data-aos="fade-up"
        className="shadow-sm h-100   mdb-card"
      >
        <MDBCardBody className="text-center">
          <MDBCardTitle className="text-black fw-bold mb-3">
            {section.title}
            {section.icon && (
              <MDBIcon icon={section.icon} className="icon ms-2" />
            )}
          </MDBCardTitle>
          <MDBCardText >{section.text}</MDBCardText>
        </MDBCardBody>
      </MDBCard>
    </MDBCol>
  ))}
</MDBRow>
</div>
</>
  );
};

export default About;
