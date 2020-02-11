import React, { Component } from "react";
import { Route, Link } from "react-router-dom";
import Home from "./routes/home/Home";
import Register from "./routes/register/Register";
import "./assets/App.css";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";

class App extends Component {
  render() {
    return (
       <React.Fragment>
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
          <Navbar.Brand href="javascript.void(0);"><Link to="/">CareerNext.com</Link></Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="#features">Features</Nav.Link>
              <Nav.Link href="#pricing">Pricing</Nav.Link>
              <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Something
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Nav>
              <Nav.Link href="javascript.void(0);"><Link to="/register">Register</Link></Nav.Link>
              <Nav.Link eventKey={2} href="javascript.void(0);">
                  <Link to="/">English</Link>&nbsp;|&nbsp;<Link to="/">Nepal</Link>&nbsp;|&nbsp;<Link to="/">Vetnam</Link>&nbsp;|&nbsp;<Link to="/">Japan</Link>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
       
        {/* <header className="App-header">
          <Link to="/"> Home</Link>
          <Link to="/about-us"> About </Link>
        </header> */}

         <main>
          <Route exact path="/" component={Home} />
          <Route exact path="/register" component={Register} />
        </main>
        </React.Fragment>
    );
  }
}

export default App;
