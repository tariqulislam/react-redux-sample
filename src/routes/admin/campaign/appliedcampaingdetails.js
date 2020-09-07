import React, {Component} from "react";
import {Container, Row, Col, Table, Button} from "react-bootstrap";
import "./assets/campaign.scss";
import {withRouter} from "react-router-dom"
import axios from "axios"
import SideBar from "../sidebar"
import {NotificationContainer, NotificationManager} from 'react-notifications';
import environment from "../../../environment.json"
class AppliedCampaingDetails extends Component {
    constructor(props) {
        super(props)
        this.state = {
            newCampaign: null
        }
    }

    componentDidMount() {
        const {match} = this.props
        const id = match.params.id
        
        let url = `http://${environment.api_url}/api/campaigndetails/${id}`
        axios.get(url).then(result => {
            this.setState({newCampaign: result.data.data})
        })
    }

    onApporvedAppliedCampaign = (event) => {
        let campaign = this.state.newCampaign
        /** check userinfo to canidate is */
        let getAdmin = JSON.parse(localStorage.getItem("admin_user"))
        let language = localStorage.getItem("language")
        if(getAdmin) {

            let postValue = {
                            "candidate": {
                                "id": campaign.candidate.id
                            },
                            "campaign": {
                                "id": campaign.campaign.id
                            },
                            "admin": {"id": 1},
                            "lang": language,
                            "approved": true}
            /** get canidate id */
            let url = `hhttp://${environment.api_url}/api/campaigndetails/${campaign.id}`
            axios.post(url, postValue, {headers: {'content-type': 'application/json' }
            }).then(res => {
                  if(res.status === 201) {
                      NotificationManager.success('Campaign Has been approved for Candidate', 'Approval');
                  }
            })
            /* save into api call */ 
        } else {
            
        }
    }

    render() {
       const {newCampaign} = this.state
      
        return (
            <div class="d-flex" id="wrapper">
                <SideBar />
                <div style={{width: "85%"}} id="page-content-wrapper">
                    <div class="container-fluid">
                     <Container style={{border: "2px solid", marginTop: "1em", borderRadius: "5px"}}>
                 <Row style={{paddingTop: "70px", paddingBottom: "20px"}}>
                     <Col className="text-center">
                         <h1 className="campaign-title">Client Service Lead</h1>
                         <div className="campaign-title-underline"></div>
                         <p className="campaign-title-subtitle text-red">
                             <span className="btn-sky">Recruiter</span>
                             Company is not publicly visible
                         </p>
                     </Col>
                 </Row>
                 <Row>
                     {
                         newCampaign &&
                         <Table>
                         <tr>
                                <td>
                                    <span className="btn-orange">Candidate Name</span>
                                    </td>
                                    <td>
                                        <span className="star-label">
                                         {newCampaign.candidate && newCampaign.candidate.name } 
                                         
                                        </span>
                                        <button onClick={(e) => {
                                            this.props.history.push(`/admin/candidate/details/${newCampaign.candidate.id}`)
                                        }} className="btn btn-success">Candidate Details</button>
                                    </td>
                                    
                         </tr>
                         <tr>
                                <td>
                                    <span className="btn-orange">User Name</span>
                                    </td>
                                    <td>
                                        <span className="star-label">
                                            &#9733;&#9733;&#9733;&#9733;&#9733; {newCampaign.candidate && newCampaign.candidate.username }
                                        </span>
                                    </td>
                                    
                         </tr>
                        
                     </Table>

                     }
                  
                 </Row>
                 <Row>
                     <Col>
                        {
                            newCampaign &&
                            <Table>
                            <tr>
                                    <td>
                                        <span className="btn-orange">Company Name</span>
                                    </td>
                                    <td>
                                    <span className="star-label">
                                        &#9733;&#9733;&#9733;&#9733;&#9733; { newCampaign.campaign && newCampaign.campaign.recruiter}
                                    </span>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <span className="btn-orange">Occupation Name</span>
                                    </td>
                                    <td>
                                        <span className="star-label">
                                            &#9733;&#9733;&#9733;&#9733;&#9733; {newCampaign.campaign && newCampaign.campaign.positionLevel.name }
                                        </span>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <div className="campaign-head">Industry</div>
                                    </td>
                                    <td>{newCampaign.campaign && newCampaign.campaign.industry.name}</td>
                                </tr>
                                <tr>
                                    <td>
                                        <div className="campaign-head">Work Location</div>
                                    </td>
                                    <td>
                                        {newCampaign.campaign && newCampaign.campaign.workLocation.name}
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <div className="campaign-head">Salary</div>
                                    </td>
                                 <td>Japanese yen JPY {newCampaign.campaign &&newCampaign.campaign.startSalary} - JPY {newCampaign.campaign && newCampaign.campaign.endSalary}</td>
                                </tr>
                                <tr>
                                    <td>
                                        <div className="campaign-head">Japanese Level</div>
                                    </td>
                                <td>{newCampaign.campaign && newCampaign.campaign.japaneseLevel}</td>
   
                                </tr>
                                <tr>
                                    <td>
                                        <div className="campaign-head">English Level</div>
                                    </td>
                                <td>{newCampaign.campaign && newCampaign.campaign.englishLevel}</td>
                               
                                </tr>
                                <tr>
                                    <td>
                                        <div className="campaign-head">Job Description</div>
                                    </td>
                                    <td>
                                        {newCampaign.campaign && newCampaign.campaign.jobDescription}
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <div className="campaign-head">Working Hour</div>
                                    </td>
                                    <td>
                                       {newCampaign.campaign && newCampaign.campaign.workingHours}
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <div className="campaign-head">About Company</div>
                                    </td>
                                    <td>
                                      {newCampaign.campaign && newCampaign.campaign.aboutCompany}
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <div className="campaign-head">Holidays</div>
                                    </td>
                                    <td>
                                       {newCampaign.campaign && newCampaign.campaign.holidays}
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <div className="campaign-head">Nearest Station</div>
                                    </td>
                                    <td>
                                       {newCampaign.nearestStation}
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <div className="campaign-head">Benefits</div>
                                    </td>
                                    <td>
                                        {newCampaign.campaign && newCampaign.campaign.benefits}
   
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <div className="campaign-head">Contract Period</div>
                                    </td>
                                    <td>
                                        {newCampaign.campaign && newCampaign.campaign.contractPeriod}
                                    </td>
                                </tr>
                            </Table>

                        }
                        
                         <div style={{backgroundColor: "lightgray", paddingTop: "1em", marginBottom:"100px"}} className="text-center">
                             <p>
                                 <Button onClick={this.onApporvedAppliedCampaign} variant="warning" className="btn-bottom">
                                     Approved
                                 </Button>
                               
                             </p>
                         </div>
                     </Col>
                 </Row>
             </Container>
             <NotificationContainer/> 
                    </div>
                </div> 
            </div>   

            
        );
        
    }
}

export default withRouter(AppliedCampaingDetails);