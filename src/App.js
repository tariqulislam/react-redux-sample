import React, {Component} from "react";
import {BrowserRouter, Switch, Route} from "react-router-dom";
import Home from "./routes/home/Home";
import CandidateRegister from "./routes/candidate/register/Register";
import AdminLogin from "./routes/admin/login/Login";
import "./assets/App.css";
import {Navbar, Nav} from "react-bootstrap";
import CandidateLogin from "./routes/candidate/Login/Login";
import AdminDashboard from "./routes/admin/dashboard";
import {withTranslation} from "react-i18next";
import CandidateDetails from './routes/candidate/CandidateDetails';

import CandidateDashboard from "./routes/candidate/dashboard";
import NotFound from './routes/not-found/404';
import Button from "react-bootstrap/Button";
import Dropdown from "react-bootstrap/Dropdown";
import Campaign from "./routes/campaign/CampaignList";
import CampaignDetails from "./routes/campaign/Campaign";
import CampaignCreate from "./routes/admin/campaign/campaign";

import AboutUs from './routes/about-us/AboutUs';

import CandidateList from './routes/admin/candidate/component/candidateList';

import AdminCompanyRegister from './routes/company/register/Register';
import CompanyList from "./routes/admin/company/company-list/CompanyList";
import AdminCampaignDetails from "./routes/admin/campaign/campaigndetails";
import AdminCampaignAppliedList from "./routes/admin/campaign/appliedcampaignlist";
import AdminCampaignAppliedDetails from "./routes/admin/campaign/appliedcampaingdetails";

import AdminCandidateDetails from "./routes/admin/candidate/component/candidate";

import CampaignList from "./routes/admin/campaign/CampaignList"

import {connect} from "react-redux"
import {onSelectedLanguage} from "./reducers/Home/home.reducer"
import {loadCampaign} from "./reducers/Campaign/campain.reducer"
import {getAllCountriesFromApi} from "./reducers/Candidate/candidate.reducer"
import {CompanyLogin} from "./routes/company/Login/Login";
import ProfileUpdate from "./routes/candidate/profile/update"

import CompanyCandidateList from "./routes/company/candidate/component/candidateList"
import CompanyCandidateDetails from "./routes/company/candidate/component/candidate"
import CompanyCampaignCreate from "./routes/company/campaign/campaign"
import CompanyCampainList from "./routes/company/campaign/CampaignList"
import CompanyCampaignDetails from "./routes/company/campaign/campaigndetails"
import CompanyAppliedCampaignList from "./routes/company/campaign/appliedcampaignlist"
import CompanyAppliedCampaignDetails from "./routes/company/campaign/appliedcampaingdetails"

import CandidateAppliedCampaignDetails from "./routes/candidate/campaign/appliedcampaingdetails"
import CompanyDashboard from "./routes/company/dashboard"
import thankyou from  "./routes/thankyou";

import HRDatabaseList from "./routes/hrdatabase/list"
import { getLanguageWiseCountries } from "./reducers/Candidate/candidate.reducer";
class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: "en",
        };
    } 


    onLanguageHandle = (event) => {
        console.log("language", event)
        this.setState({value: event});
        localStorage.setItem("language", event);
        this.props.onSelectedLanguage(event)
        this.props.i18n.changeLanguage(event);

        /* load the campaign */
        this.props.loadCampaignListByLang(event)

 
        this.loadCountriesByLanguage(event)
        /* filter countries */
        
        
    };
    

    componentDidMount() {
        let getLanguageVal = localStorage.getItem("language");
        this.setState({value: getLanguageVal});
        this.props.i18n.changeLanguage(getLanguageVal);
        this.props.getAllCountriesFromApi(getLanguageVal)
    
      
    }


    loadCountriesByLanguage (lang) {
        let countries = []
        if (this.props.countries) {
            this.props.countries.forEach((item, index) => {
                let tempCountry = {}
                if (lang === "en") {
                  tempCountry =  {
                        text: item.name,
                        value: item.id
                    }
                } else if (lang === "jp") {
                    tempCountry = {
                        text: item.jpname,
                        value: item.id
                    }
                }
              
                countries.push(tempCountry)
            })
            this.props.getLanguageWiseCountries(countries)
        }
    }

    render() {
        const {t} = this.props;

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
                                <Nav.Link href="/hrdatabase/list">{t('nav-bar.hr_database')}</Nav.Link>
                                <Nav.Link href="/candidate/login">{t('nav-bar.candidate_login')}</Nav.Link>
                                <Nav.Link href="/company/login">{t('nav-bar.company_login')}</Nav.Link>
                                <Nav.Link href="/admin/login">{t('nav-bar.admin_login')}</Nav.Link>
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
                        <Route exact path="/campaign" component={Campaign}/>
                        <Route exact path="/campaign/details" component={CampaignDetails}/>
                        <Route exact path="/candidate/login" component={CandidateLogin}/>
                        <Route exact path="/admin/dashboard" component={AdminDashboard}/>
                        <Route exact path="/candidate/dashboard" component={CandidateDashboard}/>
                        <Route exact path="/candidate/register" component={CandidateRegister}/>
                        <Route exact path="/candidate/details/:id" component={CandidateDetails}/>

                        <Route exact path="/about-us" component={AboutUs}/>


                        <Route path="/admin/candidate/list" component={CandidateList}/>
                        <Route path="/admin/candidate/details/:id" component={AdminCandidateDetails}/>
                        <Route exact path="/admin/campaign/list" component={CampaignList}/>
                        <Route exact path="/admin/company/list" component={CompanyList}/>
                        <Route exact path="/admin/campaign/details/:id" component={AdminCampaignDetails}/>
                       
                        <Route exact path="/admin/campaign/create" component={CampaignCreate}/>
                        <Route exact path="/candidate/profile" component={ProfileUpdate}  />
                        <Route exact path="/admin/campaign/applied/list" component={AdminCampaignAppliedList}/>
                        <Route exact path="/admin/campaign/applied/details/:id"
                               component={AdminCampaignAppliedDetails}/>
                        
                        <Route exact path="/company/register" component={AdminCompanyRegister}/>
                        <Route exact path="/company/dashboard" component={CompanyDashboard} />
                        <Route exact path="/company/login" component={CompanyLogin}/>
                        <Route path="/company/candidate/list" component={CompanyCandidateList}/>
                        <Route path="/company/candidate/details/:id" component={CompanyCandidateDetails}/>
                        <Route exact path="/company/campaign/list" component={CompanyCampainList}/>
                        <Route exact path="/company/campaign/details/:id" component={CompanyCampaignDetails}/>
                        <Route exact path="/company/campaign/create" component={CompanyCampaignCreate}/>
                        <Route exact path="/company/campaign/applied/list" component={CompanyAppliedCampaignList}/>
                        <Route exact path="/company/campaign/applied/details/:id"
                               component={CompanyAppliedCampaignDetails}/>
                        <Route exact path="/hrdatabase/list" component={HRDatabaseList} />
                        <Route exact path="/candidate/campaign/applied/details/:id" component={CandidateAppliedCampaignDetails} />
                        <Route exact path="/thankyou" component={thankyou} />

                        <Route exact component={NotFound}/>
                    </Switch>
                </div>
            </BrowserRouter>
        );
    }
}

const mapStateToProps = (state) => ({
    selectedLanguage: state.home.selectedLanguage,
    filteredCountries: state.candidate.filteredCountries,
    countries: state.candidate.countries
});

const mapDispatchToProps = dispatch => {
    return {
        getAllCountriesFromApi: (lang) => dispatch(getAllCountriesFromApi(lang)),
        getLanguageWiseCountries: (countries) => dispatch(getLanguageWiseCountries(countries)),
        loadCampaignListByLang: (lang) => dispatch(loadCampaign(lang)),
        onSelectedLanguage: (lang) => dispatch(onSelectedLanguage(lang))
    }
}


export default withTranslation()(connect(mapStateToProps, mapDispatchToProps)(App));



