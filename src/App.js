import React, { Component } from "react";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import Home from "./routes/home/Home";
import CandidateRegister from "./routes/candidate/register/Register";
import CompanyRegister from './routes/company/register/Register';
import AdminLogin from './routes/admin/login/Login';
import "./assets/App.css";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import CandidateLogin from "./routes/candidate/Login/Login";
import AdminDashboard from './routes/admin/admin'
import { withTranslation } from 'react-i18next'

import SideBar from './routes/side-bar/SideBar';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      value: "en"
    }
  }
 
  onLanguageHandle = (event) => {
    this.setState({value: event})
    localStorage.setItem('language', event);
    this.props.i18n.changeLanguage(event)
  }

  componentDidMount() {
    let getLanguageVal = localStorage.getItem('language')
    this.setState({value: getLanguageVal})
    this.props.i18n.changeLanguage(getLanguageVal)
  }

  render() {
    let TopFragment = () => {
          return(
            <React.Fragment>
              <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Navbar.Brand href="javascript.void(0);"><Link to="/">GHRN</Link></Navbar.Brand>
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
                    <Nav.Link href="javascript.void(0);"><Link to="/candidate/register">Register</Link></Nav.Link>
                    <Nav.Item style={{color: 'white', marginTop:'8px', cursor: 'pointer'}} eventKey={2} onClick={() => this.onLanguageHandle('en')}>EN </Nav.Item>
                    <Nav.Item style={{color: 'white', marginTop: '8px', cursor: 'pointer'}} eventKey={2} onClick={() => this.onLanguageHandle('jp')}>&nbsp;|&nbsp;JP</Nav.Item>
                  </Nav>
                </Navbar.Collapse>
              </Navbar>
            </React.Fragment>
          );
        }

    return (
      <BrowserRouter>
        <div>
          <TopFragment/>
          <Switch>
            <Route exact path="/" component={Home}  />
            <Route path="/admin" component={SideBar}  />
            <Route path="/admin/login" component={AdminLogin} />
            <Route path="/candidate/register" component={CandidateRegister}  />
            <Route path="/company/register" component={CompanyRegister} />
            <Route path="/candidate/login" component={CandidateLogin}  />
            <Route path="/admin/dashboard" component={AdminDashboard} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default withTranslation()(App)
