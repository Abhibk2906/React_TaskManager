import React from 'react';

import './App.css';
import {Navbar,Container,Nav,Button} from 'react-bootstrap';
import CreateTask from './CreateTask';
const Navbars = ({createT,openModal,addTask}) => {
    return (
        <Container>
        <Navbar  expand="lg" className="nbar">
        <Container>
          <Navbar.Brand href="#home">TaskManager</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav >
            <Nav.Item> <Button variant="light" onClick={createT}>CreateTask</Button>{' '}</Nav.Item>
           <Nav.Item className="aa"> <Button  variant="secondary">Signin</Button>{' '}</Nav.Item>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    

        </Container>
    );
};

export default Navbars;