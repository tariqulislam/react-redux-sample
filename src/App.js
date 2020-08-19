import React, {Component} from "react";
import {BrowserRouter, Switch, Route, Link} from "react-router-dom";
import Home from "./routes/home/Home";
import CandidateRegister from "./routes/candidate/register/Register";
import CompanyRegister from "./routes/company/register/Register";
import AdminLogin from "./routes/admin/login/Login";
import "./assets/App.css";
import {Navbar, Nav} from "react-bootstrap";
import CandidateLogin from "./routes/candidate/Login/Login";
import AdminDashboard from "./routes/admin/dashboard";
import {withTranslation} from "react-i18next";
import CandidateDetails from './routes/candidate/CandidateDetails';

import CanidateAdminPanel from "./routes/candidate_panel/AdminPanel";
import NotFound from './routes/not-found/404';
import Button from "react-bootstrap/Button";
import Dropdown from "react-bootstrap/Dropdown";
import Campaign from "./routes/campaign/CampaignList";
import CampaignDetails from "./routes/campaign/Campaign";
import CampaignCreate from "./routes/admin/campaign/campaign";

import AboutUs from './routes/about-us/AboutUs';

import CandidateList from './routes/admin/candidate/component/candidateList';

import AdminCompanyRegister from './routes/admin/company/register/Register';
import CompanyList from "./routes/admin/company/company-list/CompanyList";

import CampaignList from "./routes/admin/campaign/CampaignList"

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
                        <Route exact path="/candidate/dashboard" component={CanidateAdminPanel}/>
                        <Route exact path="/candidate/register" component={CandidateRegister}/>
                        <Route exact path="/candidate/details" component={CandidateDetails}/>

                        <Route exact path="/about-us" component={AboutUs}/>


                        <Route path="/admin/candidate/list" component={CandidateList}/>
                        <Route exact path="/admin/campaign/list" component={CampaignList}/>
                        <Route exact path="/admin/company/list" component={CompanyList} />
                        <Route exact path="/admin/company/register" component={AdminCompanyRegister} />
                        <Route exact path="/admin/campaign/create" component={CampaignCreate} />

                        <Route exact component={NotFound}/>
                    </Switch>
                </div>
            </BrowserRouter>
        );
    }
}

export default withTranslation()(App);



