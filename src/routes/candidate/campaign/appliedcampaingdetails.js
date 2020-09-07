import React, { Component } from "react";
import { Container, Row, Col, Table, Button } from "react-bootstrap";
import "./assets/campaign.scss";
import { withRouter } from "react-router-dom"
import axios from "axios"
import SideBar from "../sidebar"
import environment from "../../../environment.json"

class CandidateAppliedCampaingDetails extends Component {
    constructor(props) {
        super(props)
        this.state = {
            newCampaign: null
        }
    }

    componentDidMount() {
        const { match } = this.props
        const id = match.params.id

        let url = `http://${environment.api_url}/api/campaigndetails/${id}`
        axios.get(url).then(result => {
            this.setState({ newCampaign: result.data.data })
        })
    }


    render() {
        const { newCampaign } = this.state

        return (
            <div class="d-flex" id="wrapper">
                <SideBar />
                <div style={{ width: "85%" }} id="page-content-wrapper">
                    <div class="container-fluid">
                        <Container style={{ border: "2px solid", marginTop: "1em", borderRadius: "5px" }}>
                            <Row style={{ paddingTop: "70px", paddingBottom: "20px" }}>
                                <Col className="text-center">
                                    <h1 className="campaign-title">{newCampaign && newCampaign.campaign.positionLevel.name}</h1>
                                    <div className="campaign-title-underline"></div>
                                    <p className="campaign-title-subtitle text-red">
                                        <span className="btn-sky">{newCampaign && newCampaign.campaign.recruiter}</span>

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
                                                    <span className="btn-orange">Candidate Name</span>
                                                </td>
                                                <td>
                                                    {newCampaign.candidate && newCampaign.candidate.name}
                                                </td>

                                            </tr>
                                            <tr>
                                                <td>
                                                    <span className="btn-orange">User Name</span>
                                                </td>
                                                <td>
                                                    <span className="star-label">
                                                        {newCampaign.candidate && newCampaign.candidate.username}
                                                    </span>
                                                </td>

                                            </tr>
                                            <tr>
                                                <td>
                                                    <span className="btn-orange">Company Name</span>
                                                </td>
                                                <td>
                                                    <span className="star-label">
                                                        {newCampaign.campaign && newCampaign.campaign.recruiter}
                                                    </span>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <span className="btn-orange">Occupation Name</span>
                                                </td>
                                                <td>
                                                    <span className="star-label">
                                                        {newCampaign.campaign && newCampaign.campaign.positionLevel.name}
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
                                                <td>Japanese yen JPY {newCampaign.campaign && newCampaign.campaign.startSalary} - JPY {newCampaign.campaign && newCampaign.campaign.endSalary}</td>
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

                                </Col>
                            </Row>
                        </Container>
                    </div>
                </div>
            </div>


        );

    }
}

export default withRouter(CandidateAppliedCampaingDetails);