import React from 'react';
import Table from "react-bootstrap/Table";
import { Container, Row, Col, Button } from "react-bootstrap";
import { withTranslation } from "react-i18next"
import { connect } from 'react-redux'
import "./assets/campaign.scss"
import { loadCampaign } from "../../reducers/Campaign/campain.reducer"
class CampaignList extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        const { loadCampaignListByLang } = this.props
        let language = localStorage.getItem("language")
        loadCampaignListByLang(language)
    }


    render() {
        const { t } = this.props
        return (
            <div className='main'>
                <div className="container mt-3 border pb-3">
                    <div className="row p-2 ml-2">
                        <h3>Quick Search</h3>
                    </div>
                    <div className="row p-2">
                        <div className="col-3">
                            <select className="form-control">
                                <option>Japan</option>
                            </select>
                        </div>
                        <div className="col-3">
                            <select className="form-control">
                                <option>Japanese</option>
                            </select>
                        </div>
                        <div className="col-3">
                            <select className="form-control">
                                <option>Job Cateogry</option>
                            </select>
                        </div>
                        <div className="col-3">
                            <input placeholder="search" className="form-control" />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-6">

                        </div>
                        <div className="col-6 text-right">
                            <button className="btn btn-info">Search</button>
                        </div>
                    </div>
                </div>

                <div className="container">

                    {
                        this.props.campaigns &&
                        this.props.campaigns.map((item, idx) => {
                            return (
                                <Container className="border mt-3">
                                    <Row className="p-4">
                                        <Col className="text-center">
                                            <h1 className="campaign-title">{item.positionLevel && item.positionLevel.name.toUpperCase()}</h1>
                                            <div className="campaign-title-underline"></div>
                                            <p className="campaign-title-subtitle text-red">
                                                <span className="btn-sky">{item.recruiter}</span>
                                            </p>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col>
                                            <Table className="table table-striped">
                                                <tr>
                                                    <td style={{width: "25%"}}>
                                                        <span className="btn-orange">{item.positionLevel && item.positionLevel.name}</span>
                                                    </td>
                                                    <td>
                                                        <span className="star-label">
                                                            &#9733;&#9733;&#9733;&#9733;&#9733; {item.positionLevel && item.positionLevel.name}
                                                        </span>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td style={{width: "25%"}}>
                                                        <div className="campaign-head">{t("campaign.recruiter.title")}</div>
                                                    </td>
                                                    <td>{item.recruiter}</td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <div className="campaign-head">{t("campaign.workLocation.title")}</div>
                                                    </td>
                                                    <td>{item.workLocation.name}</td>
                                                </tr>
                                                <tr>
                                                    <td style={{width: "25%"}}>
                                                        <div className="campaign-head">{t("campaign.salary.title")}</div>
                                                    </td>
                                                    <td> {item.startSalary} ~ {item.endSalary}</td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <div className="campaign-head">{t("campaign.japaneseLevel.title")}</div>
                                                    </td>
                                                    <td>{item.japaneseLevel}</td>
                                                </tr>
                                                <tr>
                                                    <td style={{width: "25%"}}>
                                                        <div className="campaign-head">{t("campaign.jobDescription.title")}</div>
                                                    </td>
                                                    <td>
                                                        {item.jobDescription}
                                                    </td>
                                                </tr>
                                            </Table>
                                            <div style={{ backgroundColor: "lightgray", paddingTop: "1em" }} className="text-center">
                                                <p>
                                                    <Button variant="warning" className="btn-bottom" onClick={(e) => {
                                                        this.props.history.push("/campaign/details", { campaign: item });

                                                    }}>
                                                        {t("campaign.details")}
                                                    </Button>

                                                </p>
                                            </div>
                                        </Col>
                                    </Row>
                                </Container>
                            )
                        })
                    }
                </div>

            </div>
        );
    }
}



const mapStateToProps = state => {
    return {
        campaigns: state.campaign.campaigns
    }
}

const mapDispatchToProps = dispatch => {
    return {
        loadCampaignListByLang: (lang) => dispatch(loadCampaign(lang)),
    }
}

export default withTranslation()(connect(mapStateToProps, mapDispatchToProps)(CampaignList))
