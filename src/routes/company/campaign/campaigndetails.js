import React, {Component} from "react";
import {Container, Row, Col, Table} from "react-bootstrap";
import "./assets/campaign.scss";
import {withTranslation} from "react-i18next"
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
       const {t} = this.props
        return (
            <div class="d-flex" id="wrapper">
                <SideBar />
                <div style={{width: "85%"}} id="page-content-wrapper">
                    <div class="container-fluid">
                     <Container style={{border: "2px solid", marginTop: "1em", borderRadius: "5px"}}>
                 <Row style={{paddingTop: "70px", paddingBottom: "20px"}}>
                     <Col className="text-center">
                         <h1 className="campaign-title">{newCampaign && newCampaign.positionLevel && newCampaign.positionLevel.name }</h1>
                         <div className="campaign-title-underline"></div>
                         <p className="campaign-title-subtitle text-red">
                             <span className="btn-sky">{newCampaign && newCampaign.recruiter}</span>
                             
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
                                        &#9733;&#9733;&#9733;&#9733;&#9733; {newCampaign.positionLevel && newCampaign.positionLevel.name}
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

export default withTranslation()(withRouter(Campaign));
