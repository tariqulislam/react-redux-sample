import React, {Component} from "react";
import {Container, Row, Col, Table, Button} from "react-bootstrap";
import "./assets/campaign.scss";
import {withRouter} from "react-router-dom"
import axios from "axios"
import SideBar from "../sidebar"
import environment from "../../../environment.json"
class Campaign extends Component {
    constructor(props) {
        super(props)
        this.state = {
            newCampaign: null
        }
    }

    componentDidMount() {
        const {match} = this.props
        const id = match.params.id
        
        let url = `http://${environment.api_url}/api/campaigns/${id}`
        axios.get(url).then(result => {
            this.setState({newCampaign: result.data.data})
        })
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
                                        &#9733;&#9733;&#9733;&#9733;&#9733; {newCampaign.recruiter}
                                    </span>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <span className="btn-orange">Occupation Name</span>
                                    </td>
                                    <td>
                                        <span className="star-label">
                                            &#9733;&#9733;&#9733;&#9733;&#9733; {newCampaign.positionLevel && newCampaign.positionLevel.name }
                                        </span>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <div className="campaign-head">Industry</div>
                                    </td>
                                    <td>{newCampaign.industry && newCampaign.industry.name}</td>
                                </tr>
                                <tr>
                                    <td>
                                        <div className="campaign-head">Work Location</div>
                                    </td>
                                    <td>
                                        {newCampaign.workLocation && newCampaign.workLocation.name}
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <div className="campaign-head">Salary</div>
                                    </td>
                                 <td>Japanese yen JPY {newCampaign.startSalary} - JPY {newCampaign.endSalary}</td>
                                </tr>
                                <tr>
                                    <td>
                                        <div className="campaign-head">Japanese Level</div>
                                    </td>
                                <td>{newCampaign.japaneseLevel}</td>
   
                                </tr>
                                <tr>
                                    <td>
                                        <div className="campaign-head">English Level</div>
                                    </td>
                                <td>{newCampaign.englishLevel}</td>
                               
                                </tr>
                                <tr>
                                    <td>
                                        <div className="campaign-head">Job Description</div>
                                    </td>
                                    <td>
                                        {newCampaign.jobDescription}
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <div className="campaign-head">Working Hour</div>
                                    </td>
                                    <td>
                                       {newCampaign.workingHours}
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <div className="campaign-head">About Company</div>
                                    </td>
                                    <td>
                                      {newCampaign.aboutCompany}
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <div className="campaign-head">Holidays</div>
                                    </td>
                                    <td>
                                       {newCampaign.holidays}
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
                                        {newCampaign.benefits}
   
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <div className="campaign-head">Contract Period</div>
                                    </td>
                                    <td>
                                        {newCampaign.contractPeriod}
                                    </td>
                                </tr>
                            </Table>

                        }
                        
                         <div style={{backgroundColor: "lightgray", paddingTop: "1em", marginBottom:"100px"}} className="text-center">
                             <p>
                                 <Button variant="warning" className="btn-bottom">
                                     Save
                                 </Button>
                                 <Button variant="dark" className="btn-bottom">
                                     Apply
                                 </Button>
                             </p>
                         </div>
                     </Col>
                 </Row>
             </Container>
                    </div>
                </div> 
            </div>   

            
        );
        
    }
}

export default withRouter(Campaign);
