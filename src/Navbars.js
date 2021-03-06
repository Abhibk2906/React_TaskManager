import React, { useContext } from 'react';
import {TaskContext} from './App.js'
import './App.css';
import {Navbar,Container,Nav,Button} from 'react-bootstrap';

const Navbars = () => {
  const{dispatch}=useContext(TaskContext)
  const createT=()=>{
    dispatch({type:"MOD",payload:true})
  }
    return (
        <Container>
        <Navbar expand="lg" className="nbar">
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