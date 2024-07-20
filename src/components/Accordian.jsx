import React from "react";
import {
  MDBAccordion,
  MDBAccordionItem,
  MDBCol,
  MDBBtn,
} from "mdb-react-ui-kit";

import AOS from "aos";

import { useEffect } from "react";
export default function Accordion() {
  useEffect(() => {
    AOS.init();
  }, []);

  const faqs = [
    {
      question: "What is ResoSyncer?",
      answer:
        "ResoSyncer is a comprehensive platform designed to streamline resource management, project management, and employee data tracking. It provides businesses with tools to optimize resource allocation, monitor project progress, and maintain detailed employee records, all within a single, integrated solution.",
    },
    {
      question: "How can ResoSyncer benefit my business?",
      answer:
        "ResoSyncer enhances productivity, improves collaboration, and ensures data accuracy. By offering real-time analytics, task management, and advanced tracking features, it helps businesses make informed decisions, reduce operational costs, and stay competitive.",
    },
    {
      question: "What features does ResoSyncer offer?",
      answer:
        "ResoSyncer offers a range of features including resource management, project management, employee data tracking, real-time analytics, task assignment, milestone tracking, and Gantt charts. These features are designed to provide a comprehensive solution for managing your business operations.",
    },
    {
      question: "Is ResoSyncer suitable for small businesses?",
      answer:
        "Yes, ResoSyncer is suitable for businesses of all sizes. Its scalable features and customizable options make it ideal for small businesses looking to streamline operations, as well as larger enterprises needing advanced management tools.",
    },
    {
      question: "How easy is it to use ResoSyncer?",
      answer:
        "ResoSyncer is designed with user-friendliness in mind. Its intuitive interface and straightforward navigation make it easy for users to get started quickly, without the need for extensive training.",
    },
    {
      question: "Can ResoSyncer be customized to fit our specific needs?",
      answer:
        "Yes, ResoSyncer offers customizable options to tailor the platform to your specific business requirements. Whether you need specific features or integrations, our team can help you customize ResoSyncer to best suit your needs.",
    },
    {
      question: "What kind of support does ResoSyncer offer?",
      answer:
        "ResoSyncer provides comprehensive customer support, including online resources, tutorials, and a dedicated support team available to assist with any questions or issues. We are committed to ensuring our clients have a smooth and successful experience with our platform.",
    },
    {
      question: "Is my data secure with ResoSyncer?",
      answer:
        "Absolutely. ResoSyncer prioritizes data security and employs advanced security measures to protect your information. We use encryption, secure data storage, and regular security audits to ensure your data remains safe and confidential.",
    },
    {
      question: "How can I get started with ResoSyncer?",
      answer:
        "Getting started with ResoSyncer is simple. You can sign up for an account on our website, choose the plan that best fits your needs, and begin using the platform right away. Our support team is also available to assist you with any setup questions.",
    },
    {
      question: "Can I try ResoSyncer before committing to a plan?",
      answer:
        "Yes, we offer a free trial period for new users to explore ResoSyncer and experience its features firsthand. Visit our website to sign up for the free trial and see how ResoSyncer can benefit your business.",
    },
  ];

  return (
    <div id="faqs">
      <div data-aos="fade-up" className="accordiontop mb-4 ">
        <MDBCol className="mt-3 ms-4">
          <MDBBtn className="  featurebtn1 mb-4"> WE'VE GOT ANSWERS</MDBBtn>

          <h1>
            <span className="text-black ">Frequently asked questions</span>
          </h1>

          <p style={{ color: "#66666E" }}>
            Find Answers to Common Questions About ResoSyncer.
          </p>
        </MDBCol>
        <MDBAccordion data-aos="fade-up" flush initialActive={1}>
          {faqs.map((faq, index) => {
            return (
              <MDBAccordionItem
                data-aos="fade-up"
                collapseId={index+1}
                headerTitle={faq.question}
              >
               {faq.answer}
              </MDBAccordionItem>
            );
          })}
        </MDBAccordion>
      </div>
    </div>
  );
}
