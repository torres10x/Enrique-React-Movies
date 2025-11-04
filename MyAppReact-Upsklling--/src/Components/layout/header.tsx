import type { JSX } from "react";
import {Container, Nav, Navbar} from 'react-bootstrap'
import { NavLink } from "react-router-dom";
import type { TitleProps } from "./types";

function Header({title}:TitleProps): JSX.Element{
 
 return(   
    
    <Navbar  bg="dark" variant="dark" expand="lg" fixed="top">
      <Container>
        <Navbar.Brand >{title}</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={NavLink} to="/" end>Home</Nav.Link>
            <Nav.Link as={NavLink} to="/movies">Movies</Nav.Link>
            <Nav.Link as={NavLink} to="/user-form">User Form</Nav.Link>
            <Nav.Link as={NavLink} to="/">Nada</Nav.Link>
            
        
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

 )
}

export default Header