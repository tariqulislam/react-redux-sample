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
            <Container>
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
                                    <span className="btn-orange">HIGH CLASS</span>
                                </td>
                                <td>
                  <span className="star-label">
                    &#9733;&#9733;&#9733;&#9733;&#9733; {newCampaign.positionLevel}
                  </span>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <div className="campaign-head">Company</div>
                                </td>
                                <td>{newCampaign.recruiter}</td>
                            </tr>
                            <tr>
                                <td>
                                    <div className="campaign-head">Location</div>
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
                        </Table>
                        <div className="text-center">
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
