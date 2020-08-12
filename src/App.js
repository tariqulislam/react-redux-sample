import React, {Component} from "react";
import {BrowserRouter, Switch, Route, Link} from "react-router-dom";
import Home from "./routes/home/Home";
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
import CandidateDetails from './routes/candidate/CandidateDetails';

import AdminPanel from "./routes/admin-panel/AdminPanel";
import NotFound from './routes/not-found/404';
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import ToggleButton from "react-bootstrap/ToggleButton";
import DropdownButton from "react-bootstrap/DropdownButton";
import Dropdown from "react-bootstrap/Dropdown";
import Campaign from "./routes/campaign/CampaignList";
import CampaignDetails from "./routes/campaign/Campaign";

import AboutUs from './routes/about-us/AboutUs';

import CustomSidebar from './routes/custom-components/side-bar/CustomSidebar';

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
        const {t} = this.props;

        const radios = [
            {name: 'Active', value: '1'},
            {name: 'Radio', value: '2'},
            {name: 'Radio', value: '3'},
        ];
        let TopFragment = () => {
            return (
                <React.Fragment>
                    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                        <Navbar.Brand href="/">
                            {t('nav-bar.GHRN')}
                        </Navbar.Brand>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav className="mr-auto">
                                <Nav.Link href="/campaign">{t('nav-bar.jobs')}</Nav.Link>
                                <Nav.Link href="/about-us">{t('nav-bar.about-us')}</Nav.Link>
                            </Nav>

                            <Nav>
                                <Navbar style={{backgroundColor: 'rgba(0,0,0,0)', padding: '0'}}>
                                    <Dropdown>
                                        <Dropdown.Toggle variant="primary" id="dropdown-basic">
                                            {this.state.value === 'en' ? 'English' : 'Japanese'}
                                        </Dropdown.Toggle>

                                        <Dropdown.Menu>
                                            <Dropdown.Item
                                                active={this.state.value === 'en'}
                                                style={{color: 'black'}}
                                                href="#/action-1"
                                                onClick={() => {
                                                    this.setState({
                                                        value: 'en'
                                                    }, () => {
                                                        this.onLanguageHandle("en")
                                                    })
                                                }}
                                            >
                                                English
                                            </Dropdown.Item>
                                            <Dropdown.Item
                                                active={this.state.value === 'jp'}
                                                style={{color: 'black'}}
                                                href="#/action-2"
                                                onClick={() => {
                                                    this.setState({
                                                        value: 'jp'
                                                    }, () => {
                                                        this.onLanguageHandle("jp")
                                                    })
                                                }}
                                            >
                                                Japanese
                                            </Dropdown.Item>
                                        </Dropdown.Menu>
                                    </Dropdown>
                                </Navbar>

                                {/*Below code was for selecting the language of the site. Now it's being handled by the code above.*/}
                                {/*<Nav.Item*/}
                                {/*    style={{*/}
                                {/*        color: "white",*/}
                                {/*        marginTop: "8px",*/}
                                {/*        cursor: "pointer",*/}
                                {/*    }}*/}
                                {/*    eventkey={2}*/}
                                {/*    onClick={() => this.onLanguageHandle("en")}*/}
                                {/*>*/}
                                {/*    EN{" "}*/}
                                {/*</Nav.Item>*/}
                                {/*<Nav.Item*/}
                                {/*    style={{*/}
                                {/*        color: "white",*/}
                                {/*        marginTop: "8px",*/}
                                {/*        cursor: "pointer",*/}
                                {/*    }}*/}
                                {/*    eventkey={2}*/}
                                {/*    onClick={() => this.onLanguageHandle("jp")}*/}
                                {/*>*/}
                                {/*    &nbsp;|&nbsp;JP*/}
                                {/*</Nav.Item>*/}

                                <Nav.Link href="/candidate/register">
                                    <Button>
                                        {t('nav-bar.register')}
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
                <div className='main-app'>
                    <TopFragment/>
                    <Switch>
                        <Route exact path="/" component={Home}/>
                        <Route exact path="/admin/login" component={AdminLogin}/>
                        <Route exact path="/campaign" component={Campaign} />
                        <Route exact path="/campaign/details" component={CampaignDetails} />
                        <Route exact path="/candidate/login" component={CandidateLogin}/>
                        <Route exact path="/admin/dashboard" component={AdminDashboard}/>
                        <Route exact path="/candidate/dashboard" component={AdminPanel}/>
                        <Route exact path="/candidate/register" component={CandidateRegister}/>
                        <Route exact path="/candidate/new_one" component={NewCandidate}/>
                        <Route exact path="/candidate/details" component={CandidateDetails}/>
                        <Route exact path="/company/register" component={CompanyRegister}/>

                        <Route exact path="/custom-side-bar" component={CustomSidebar}/>
                        <Route exact path="/about-us" component={AboutUs}/>

                        <Route exact component={NotFound}/>
                    </Switch>
                </div>
            </BrowserRouter>
        );
    }
}

export default withTranslation()(App);



