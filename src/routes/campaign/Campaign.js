import React, {Component} from "react";
import {Container, Row, Col, Table, Button} from "react-bootstrap";
import "./assets/campaign.scss";

class Campaign extends Component {
    render() {
        const {campaign} = this.props
        console.log(campaign)
        let newCampaign = {}
        if (campaign) {
            newCampaign = campaign
        } else {
            newCampaign = this.props.location.state.campaign
        }
        return (
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
                                        &#9733;&#9733;&#9733;&#9733;&#9733; {newCampaign.positionLevel}
                                    </span>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <div className="campaign-head">Industry</div>
                                </td>
                                <td>IT/Software Engineering</td>
                            </tr>
                            <tr>
                                <td>
                                    <div className="campaign-head">Work Location</div>
                                </td>
                                <td>Tokyo</td>
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
                                   8:30 ~ 17:30
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <div className="campaign-head">Application Condition</div>
                                </td>
                                <td>
                                   8:30 ~ 17:30
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <div className="campaign-head">English Ability</div>
                                </td>
                                <td>
                                   Native Level
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <div className="campaign-head">Explanation About Salary</div>
                                </td>
                                <td>
                                Assumed annual income: 6.7 million yen to 8.7 million yen
                        *For desired annual income, we will consult based on past work experience, number of years and skills

                        Bonus:

                        Commuting allowance (full payment) twice a year (June / December ) Complete social insurance, asset saving system, shareholding system, dormitory/company housing system, retirement allowance system (defined contribution pension), acceptance congratulatory system for qualified persons, etc.
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <div className="campaign-head">Holidays</div>
                                </td>
                                <td>
                                   Native Level
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <div className="campaign-head">Nearest Station</div>
                                </td>
                                <td>
                                   Azamino
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <div className="campaign-head">Nots for Applicant</div>
                                </td>
                                <td>
                                This job will be introduced and applied via Daijob AGENT.
Please apply after confirming the following steps.

1. Please apply from the "Apply for this job" button below.
2. Daijob AGENT will contact you by phone or email.
3. After having an interview with Daijob AGENT's career consultant, we will introduce the details of the job offer and apply for the company.

*Please note that we may not be able to introduce you to this job offer, even if you meet with a Daijob AGENT career consultant, depending on your work experience and desired conditions.

                                </td>
                            </tr>
                        </Table>
                        <div style={{backgroundColor: "lightgray", paddingTop: "1em"}} className="text-center">
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
        );
    }
}

export default Campaign;
