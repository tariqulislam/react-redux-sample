import React, { Component } from "react";
import { Container, Row, Col, Table, Button } from "react-bootstrap";
import "./assets/campaign.scss";
import { withRouter } from "react-router-dom"
import axios from "axios"
import SideBar from "../sidebar"
import { NotificationContainer, NotificationManager } from 'react-notifications';
import environment from "../../../environment.json"
import { withTranslation } from "react-i18next"
class CompanyAppliedCampaingDetails extends Component {
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

    onApporvedAppliedCampaign = (event) => {
        let campaign = this.state.newCampaign
        /** check userinfo to canidate is */
        let getCompany = JSON.parse(localStorage.getItem("company"))
        let language = localStorage.getItem("language")
        if (getCompany) {

            let postValue = {
                "candidate": {
                    "id": campaign.candidate.id
                },
                "campaign": {
                    "id": campaign.campaign.id
                },
                "companyUser": { "id": getCompany.id },
                "lang": language,
                "approved": true
            }
            /** get canidate id */
            let url = `http://${environment.api_url}/api/campaigndetails/${campaign.id}`
            axios.post(url, postValue, {
                headers: { 'content-type': 'application/json' }
            }).then(res => {
                if (res.status === 201) {
                    NotificationManager.success('Campaign Has been approved for Candidate', 'Approval');
                }
            })
            /* save into api call */
        } else {

        }
    }

    render() {
        const { newCampaign } = this.state
        const { t } = this.props
        return (
            <div class="d-flex" id="wrapper">
                <SideBar />
                <div style={{ width: "85%" }} id="page-content-wrapper">
                    <div class="container-fluid">
                        <Container style={{ border: "2px solid", marginTop: "1em", borderRadius: "5px" }}>
                            <Row style={{ paddingTop: "70px", paddingBottom: "20px" }}>
                                <Col className="text-center">
                                    <h1 className="campaign-title">{newCampaign && newCampaign.campaign && newCampaign.campaign.positionLevel &&  newCampaign.campaign.positionLevel.name}</h1>
                                    <div className="campaign-title-underline"></div>
                                    <p className="campaign-title-subtitle text-red">
                                        <span className="btn-sky">{newCampaign && newCampaign.campaign && newCampaign.campaign.recruiter}</span>

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
                                                    <span className="btn-orange">{t("campaign.recruiter.title")}</span>
                                                </td>
                                                <td>
                                                    <span className="star-label">
                                                        &#9733;&#9733;&#9733;&#9733;&#9733; {newCampaign.campaign && newCampaign.campaign.recruiter}
                                                    </span>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <span className="btn-orange">{t("campaign.positionLevel.title")}</span>
                                                </td>
                                                <td>
                                                    <span className="star-label">
                                                        &#9733;&#9733;&#9733;&#9733;&#9733; {newCampaign.campaign && newCampaign.campaign.positionLevel && newCampaign.campaign.positionLevel.name}
                                                    </span>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <div className="campaign-head">{t("campaign.industry.title")}</div>
                                                </td>
                                                <td>{newCampaign.campaign && newCampaign.campaign.industry && newCampaign.campaign.industry.name}</td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <div className="campaign-head">{t("campaign.workLocation.title")}</div>
                                                </td>
                                                <td>
                                                    {newCampaign.campaign.workLocation && newCampaign.campaign.workLocation.name}
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <div className="campaign-head">{t("campaign.salary.title")}</div>
                                                </td>
                                                <td>Japanese yen JPY {newCampaign.campaign.startSalary} - JPY {newCampaign.campaign.endSalary}</td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <div className="campaign-head">{t("campaign.japaneseLevel.title")}</div>
                                                </td>
                                                <td>{newCampaign.campaign.japaneseLevel}</td>

                                            </tr>
                                            <tr>
                                                <td>
                                                    <div className="campaign-head">{t("campaign.englishLevel.title")}</div>
                                                </td>
                                                <td>{newCampaign.campaign.englishLevel}</td>

                                            </tr>
                                            <tr>
                                                <td>
                                                    <div className="campaign-head">{t("campaign.japaneseLevel.title")}</div>
                                                </td>
                                                <td>
                                                    {newCampaign.campaign.jobDescription}
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <div className="campaign-head">{t("campaign.workingHours.title")}</div>
                                                </td>
                                                <td>
                                                    {newCampaign.campaign.workingHours}
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <div className="campaign-head">{t("campaign.aboutCompany.title")}</div>
                                                </td>
                                                <td>
                                                    {newCampaign.campaign.aboutCompany}
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <div className="campaign-head">{t("campaign.holidays.title")}</div>
                                                </td>
                                                <td>
                                                    {newCampaign.campaign.holidays}
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <div className="campaign-head">{t("campaign.nearestStation.title")}</div>
                                                </td>
                                                <td>
                                                    {newCampaign.campaign.nearestStation}
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <div className="campaign-head">{t("campaign.benefits.title")}</div>
                                                </td>
                                                <td>
                                                    {newCampaign.campaign.benefits}

                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <div className="campaign-head">{t("campaign.contractPeriod.title")}</div>
                                                </td>
                                                <td>
                                                    {newCampaign.campaign.contractPeriod}
                                                </td>
                                            </tr>
                                        </Table>
                                    }
                                    <div style={{ backgroundColor: "lightgray", paddingTop: "1em", marginBottom: "100px" }} className="text-center">
                                        <p>
                                            <Button onClick={this.onApporvedAppliedCampaign} variant="warning" className="btn-bottom">
                                                Approved
                                 </Button>

                                        </p>
                                    </div>
                                </Col>
                            </Row>
                        </Container>
                        <NotificationContainer />
                    </div>
                </div>
            </div>


        );

    }
}

export default withTranslation()(withRouter(CompanyAppliedCampaingDetails));