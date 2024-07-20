import React, { useState, useEffect } from 'react';
import { MDBBtn, MDBIcon,MDBNavbarBrand } from 'mdb-react-ui-kit';

const Drawer = ({ openBasic,setOpenBasic }) => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setIsOpen(openBasic);
  }, [openBasic]);

  const toggleDrawer = () => {
    setOpenBasic(!isOpen);
  };

  return (
    <>
      <div className={`drawer ${isOpen ? 'open' : ''}`}>
        <div className="drawer-content">


            <div className="d-flex justify-content-between align-items-center">

            <MDBNavbarBrand href="#"><img src="logo.jpeg" className='img-fluid logonavbar2' alt="" /></MDBNavbarBrand>

           

          <MDBIcon className="text-dark cross fw-medium fs-4 mt-1" fas icon="times" onClick={toggleDrawer} />
            </div>
          
          <h4>Drawer Content</h4>
          <ul>
            <li><a onClick={toggleDrawer} href="#features">Features</a></li>
            <li><a onClick={toggleDrawer} href="#about">About</a></li>

            <li><a onClick={toggleDrawer} href="#benefits">Benefits</a></li>
            <li><a onClick={toggleDrawer} href="#testimonials">Testimonials</a></li>
            <li><a onClick={toggleDrawer} href="#pricing">Pricing</a></li>

            <li><a onClick={toggleDrawer} href="#faqs">FAQs</a></li>

          </ul>
        </div>
      </div>
      {isOpen && <div className="drawer-backdrop" onClick={toggleDrawer}></div>}
    </>
  );
};

export default Drawer;
