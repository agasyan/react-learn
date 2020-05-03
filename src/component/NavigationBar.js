import React from 'react';

import './style/NavigationBar.css';
import Navbar from 'react-bootstrap/Navbar';

function NavigationBar() {
  return (
    <Navbar bg="dark" variant="dark">
      <Navbar.Brand href="#home">
        <img
          alt=""
          src={process.env.PUBLIC_URL + 'logo192.png'}
          width="30"
          height="30"
          className="d-inline-block align-top"
        />{' '}
        Agas's Portofolio
      </Navbar.Brand>
    </Navbar>
  );
}

export default NavigationBar;
