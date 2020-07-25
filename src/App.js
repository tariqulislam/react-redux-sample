import React, {Component} from "react";
import {BrowserRouter, Switch, Route, Link} from "react-router-dom";
import Home from "./routes/home/Home";
import Campaign from "./routes/campaign/Campaign";
import CandidateRegister from "./routes/candidate/register/Register";
import CompanyRegister from "./routes/company/register/Register";
import AdminLogin from "./routes/admin/login/Login";
import "./assets/App.css";
import {Navbar, Nav, NavDropdown} from "react-bootstrap";
import CandidateLogin from "./routes/candidate/Login/Login";
import AdminDashboard from "./routes/admin/admin";
import {withTranslation} from "react-i18next";
import CampaignAdmin from "./routes/admin/campain/components/campaign";
import NewCandidate from './routes/candidate/new-candidate/NewCandidate';

import AdminPanel from "./routes/admin-panel/AdminPanel";
import NotFound from './routes/not-found/404';

import Login from './routes/admin/login/Login';
import Button from "react-bootstrap/Button";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: "en",
        };
    }

    onLanguageHandle = (event) => {
        this.setState({value: event});
        localStorage.setItem("language", event);
        this.props.i18n.changeLanguage(event);
    };

    componentDidMount() {
        let getLanguageVal = localStorage.getItem("language");
        this.setState({value: getLanguageVal});
        this.props.i18n.changeLanguage(getLanguageVal);
    }

    render() {
        let TopFragment = () => {
            return (
                <React.Fragment>
                    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                        <Navbar.Brand href="/">
                            GHRN
                        </Navbar.Brand>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav className="mr-auto">
                                <Nav.Link href="/campaign">Campaign</Nav.Link>
                            </Nav>

                            <Nav>
                                <Nav.Item
                                    style={{
                                        color: "white",
                                        marginTop: "8px",
                                        cursor: "pointer",
                                    }}
                                    eventkey={2}
                                    onClick={() => this.onLanguageHandle("en")}
                                >
                                    EN{" "}
                                </Nav.Item>
                                <Nav.Item
                                    style={{
                                        color: "white",
                                        marginTop: "8px",
                                        cursor: "pointer",
                                    }}
                                    eventkey={2}
                                    onClick={() => this.onLanguageHandle("jp")}
                                >
                                    &nbsp;|&nbsp;JP
                                </Nav.Item>
                                <Nav.Link href="/candidate/register">
                                    <Button>
                                        Register
                                    </Button>
                                </Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Navbar>
                </React.Fragment>
            );
        };

        return (
            <BrowserRouter>
                <div>
                    <TopFragment/>
                    <Switch>
                        <Route exact path="/" component={Home}/>
                        <Route exact path="/admin/login" component={Login}/>
                        <Route exact path="/admin/dashboard" component={AdminDashboard}/>
                        <Route exact path="/admin/campaign" component={CampaignAdmin}/>
                        <Route exact path="/admin/login" component={AdminLogin}/>
                        <Route exact path="/admin/dashboard" component={AdminDashboard}/>
                        <Route exact path="/candidate/dashboard" component={AdminPanel}/>
                        <Route exact path="/candidate/register" component={CandidateRegister}/>
                        <Route exact path="/candidate/login" component={CandidateLogin}/>
                        <Route exact path="/candidate/new_one" component={NewCandidate}/>
                        <Route exact path="/company/register" component={CompanyRegister}/>
                        <Route exact component={NotFound}/>
                    </Switch>
                </div>
            </BrowserRouter>
        );
    }
}

export default withTranslation()(App);