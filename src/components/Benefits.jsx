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
const Benefits = () => {
  useEffect(() => {
    AOS.init();
  }, []);


  const benefits = [
    {
      title: "Enhanced Productivity",
      text: "Streamline operations with integrated resource, project, and employee management, boosting overall productivity.",
      icon:"book"
    },
    {
      title: "Improved Collaboration",
      text: "Centralized communication tools foster better teamwork and ensure everyone stays aligned on project goals."
      ,      icon:"desktop"

    },
    {
      title: "Real-Time Analytics",
      text: "Gain actionable insights with real-time data analytics and reporting to make informed decisions quickly."
      ,      icon:"mobile"

    },
    {
      title: "Optimal Resource Allocation",
      text: "Efficiently allocate resources with real-time visibility and detailed usage patterns to maximize productivity."
      ,icon:"book"
    },
    {
      title: "Comprehensive Employee Tracking",
      text: "Maintain detailed records, track performance, and manage payroll and benefits effortlessly."
      ,      icon:"desktop"

    },
    {
      title: "Simplified Project Management",
      text: "Use task assignment, milestone tracking, and Gantt charts to keep projects on schedule and within budget."
      ,icon:"mobile"
    },
    {
      title: "Increased Efficiency",
      text: "Reduce operational costs and eliminate bottlenecks with advanced management tools and features."
     ,      icon:"desktop"
    },
    {
      title: "Customizable Solutions",
      text: "Tailor ResoSyncer to fit your specific business needs with customizable options and integrations."
      ,      icon:"book"

    }
  ];
  

  return (
    <div id="benefits">
      <div  data-aos="fade-up" className="features">
        <MDBBtn className="  featurebtn1"> Benefits</MDBBtn>

        <MDBCol data-aos="fade-up" className="mt-3 mb-5" size="12" lg="7">
          <h1>
            <span className="text-black">Discover How  </span>

            <span className="text-primary">ResoSyncer</span>
            <span className="text-black">
              {" "}
               Can Transform Your Business             </span>

               <span className="text-primary">Operations</span>
          </h1>

          {/* <p style={{ color: "#66666E" }}>
          Discover How ResoSyncer Can Transform Your Business Operations
          </p> */}
        </MDBCol>

        <MDBRow data-aos="fade-up" className="mt-5">

          {

            benefits.map((benefit,index)=>{

              return(

                <MDBCol className="mb-5" size="12" lg="3">
                <MDBCard className="shadow-none mb-4 p-0">
                  <MDBCardBody className="p-0">
                    <MDBCardTitle>
                      <MDBBtn
                        size="sm"
                        className="bg-transparent rounded-3 shadow-none btnicons"
                      >
                        <MDBIcon className="featureicons" fas icon={benefit.icon} />
                      </MDBBtn>
                    </MDBCardTitle>
                    <MDBCardText className="text-black mt-4">
                      <h5>{index+1}. {benefit.title}</h5>
                    </MDBCardText>
    
                    <MDBCardText>
                    {benefit.text}
                    </MDBCardText>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>

              )
            })
        

}
       
        </MDBRow>
      </div>
    </div>
  );
};

export default Benefits;
