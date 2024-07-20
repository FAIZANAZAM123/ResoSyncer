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
const Features = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  const features = [
    {
      title: "Resource Management",
      text: "Optimize resource allocation with real-time visibility and usage patterns, ensuring maximum efficiency and productivity.",
      icon: "book",
    },
    {
      title: "Project Management",
      text: "Simplify project planning and execution with task assignment, milestone tracking, and Gantt charts, keeping your team on track and aligned.",
      icon: "desktop",
    },
    {
      title: "Employee Data Tracking",
      text: "Maintain detailed employee records, track attendance and performance metrics, and manage payroll and benefits effortlessly.",
      icon: "desktop",
    },
  ];

  return (
    <div id="features">
      <div data-aos="fade-up" className="features">
        <MDBBtn className="  featurebtn1"> WHAT YOU'LL GET</MDBBtn>

        <MDBCol className="mt-3 mb-5" size="12" lg="7">
          <h1>
            <span className="text-black">Master the Essentials of </span>

            <span className="text-primary">ResoSyncer</span>
          </h1>

          <p style={{ color: "#66666E" }}>
          Gain expertise in Resource management, Project management, Record management and effortlessly  apply best practices to boost your efficiency.
          </p>
        </MDBCol>

        <MDBRow>
          {features.map((feature,index) => {
            return (
              <MDBCol className="mb-5" size="12" lg="4">
                <MDBCard data-aos="fade-up" className="shadow-none p-0">
                  <MDBCardBody className="p-0">
                    <MDBCardTitle>
                      <MDBBtn
                        size="sm"
                        className="bg-transparent rounded-3 shadow-none btnicons"
                      >
                        <MDBIcon className="featureicons" fas icon={feature.icon} />
                      </MDBBtn>
                    </MDBCardTitle>
                    <MDBCardText className="text-black mt-4">
                      <h5>
                        {feature.title}
                      </h5>
                    </MDBCardText>

                    <MDBCardText>
                    {feature.text}
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

export default Features;
