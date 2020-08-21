import React, {Component} from "react";
import {Container, Row, Col, Table, Button} from "react-bootstrap";
import "./assets/campaign.scss";
import {withTranslation} from "react-i18next"
import axios from "axios"
class Campaign extends Component {

    componentDidMount() {

    }

    onApplyCampaignInfo = () => {
        debugger
        let props = this.props
        let campaign = this.props.location.state.campaign
        /** check userinfo to canidate is */
        let getCandidate = JSON.parse(localStorage.getItem("user"))
        let language = localStorage.getItem("language")
        if(getCandidate) {

            let postValue = {"campaign": { "id": campaign.id},
                            "candidate": {"id": getCandidate.id},
                            "lang": language,}
            /** get canidate id */
            let url = "http://ec2-18-224-16-47.us-east-2.compute.amazonaws.com:4000/api/campaigndetails"
            axios.post(url, postValue, {headers: {'content-type': 'application/json' }
            }).then(res => {
                    debugger
            })
            /* save into api call */

            
        } else {
            
        }
    }

    render() {
        const {campaign, t} = this.props
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
                                    <span className="btn-orange">{t("campaign.recruiter.title")}</span>
                                </td>
                                <td>
                                <span className="star-label">
                                    &#9733;&#9733;&#9733;&#9733;&#9733; {newCampaign.recruiter}
                                </span>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <span className="btn-orange">{t("campaign.positionLevel.title")}</span>
                                </td>
                                <td>
                                    <span className="star-label">
                                        &#9733;&#9733;&#9733;&#9733;&#9733; {newCampaign.positionLevel && newCampaign.positionLevel.name }
                                    </span>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <div className="campaign-head">{t("campaign.industry.title")}</div>
                                </td>
                                <td>{newCampaign.industry && newCampaign.industry.name}</td>
                            </tr>
                            <tr>
                                <td>
        <div className="campaign-head">{t("campaign.workLocation.title")}</div>
                                </td>
                                <td>
                                    {newCampaign.workLocation && newCampaign.workLocation.name}
                                </td>
                            </tr>
                            <tr>
                                <td>
        <div className="campaign-head">{t("campaign.salary.title")}</div>
                                </td>
                             <td>Japanese yen JPY {newCampaign.startSalary} - JPY {newCampaign.endSalary}</td>
                            </tr>
                            <tr>
                                <td>
        <div className="campaign-head">{t("campaign.japaneseLevel.title")}</div>
                                </td>
                            <td>{newCampaign.japaneseLevel}</td>

                            </tr>
                            <tr>
                                <td>
                                    <div className="campaign-head">{t("campaign.englishLevel.title")}</div>
                                </td>
                            <td>{newCampaign.englishLevel}</td>
                            
                            </tr>
                            <tr>
                                <td>
        <div className="campaign-head">{t("campaign.japaneseLevel.title")}</div>
                                </td>
                                <td>
                                    {newCampaign.jobDescription}
                                </td>
                            </tr>
                            <tr>
                                <td>
        <div className="campaign-head">{t("campaign.workingHours.title")}</div>
                                </td>
                                <td>
                                   {newCampaign.workingHours}
                                </td>
                            </tr>
                            <tr>
                                <td>
        <div className="campaign-head">{t("campaign.aboutCompany.title")}</div>
                                </td>
                                <td>
                                  {newCampaign.aboutCompany}
                                </td>
                            </tr>
                            <tr>
                                <td>
                            <div className="campaign-head">{t("campaign.holidays.title")}</div>
                                </td>
                                <td>
                                   {newCampaign.holidays}
                                </td>
                            </tr>
                            <tr>
                                <td>
                      <div className="campaign-head">{t("campaign.nearestStation.title")}</div>
                                </td>
                                <td>
                                   {newCampaign.nearestStation}
                                </td>
                            </tr>
                            <tr>
                                <td>
                        <div className="campaign-head">{t("campaign.benefits.title")}</div>
                                </td>
                                <td>
                                    {newCampaign.benefits}

                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <div className="campaign-head">{t("campaign.contractPeriod.title")}</div>
                                </td>
                                <td>
                                    {newCampaign.contractPeriod}
                                </td>
                            </tr>
                        </Table>
                        <div style={{backgroundColor: "lightgray", paddingTop: "1em", marginBottom:"100px"}} className="text-center">
                            <p>
                                <button  onClick={this.onApplyCampaignInfo} variant="dark" className="btn-bottom">
                                    Apply
                                </button>
                            </p>
                        </div>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default withTranslation()(Campaign)
