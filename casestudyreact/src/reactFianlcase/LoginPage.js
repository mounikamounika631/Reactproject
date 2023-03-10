import React from 'react'
import { Container } from 'react-bootstrap';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar'
import { BrowserRouter, Link, Routes,Route } from 'react-router-dom';
import Login from './Login';
import Table from './Table';
import Register from "./Register"
function LoginPage() {
  return (
    <BrowserRouter>
    <div>
        <Navbar bg="primary" expand="lg">
      <Container>
      <Nav className="me-auto">
      <Nav.Link   as={Link} to="/register">Register</Nav.Link> 
      <Nav.Link   as={Link} to="/home">Login</Nav.Link>
      <Nav.Link  as={Link} to="/link">Table</Nav.Link>
    </Nav>
    </Container>
    </Navbar>
    </div>
  <div>
    <Routes>
    <Route path="/register" element={<Register/>}/>
        <Route path="/home" element={<Login/>}/>
        <Route path="/link" element={<Table/>}/>
    </Routes>
  </div>

    </BrowserRouter>
  )
}

export default LoginPage
