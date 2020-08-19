import React from 'react';
import Table from "react-bootstrap/Table";
import {Container, Row, Col, Button} from "react-bootstrap";
import {withTranslation} from "react-i18next"
import {connect} from 'react-redux'

import {loadCampaign} from "../../reducers/Campaign/campain.reducer"
class CampaignList extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        const {loadCampaignListByLang} = this.props
        let language = localStorage.getItem("language")
        loadCampaignListByLang(language)
    }


    render() {
        const {t} = this.props
        return (
            <div className='main'>
                <div className="container card p-3">
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
                    <div className="row p-3">
                        <div className="pull-right">
                            <button className="btn btn-info">Search</button>
                        </div>
                    </div>
                </div>

                <div className="container">

                {
                    this.props.campaigns &&
                    this.props.campaigns.map((item, idx) => {
                        return (
                            <Container style={{border: "2px solid", marginTop: "1em", borderRadius: "5px"}}>
                            <Row style={{paddingTop: "70px", paddingBottom: "20px"}}>
                                <Col className="text-center">
                                    <h1 className="campaign-title">Client Service Lead</h1>
                                    <div className="campaign-title-underline"></div>
                                    <p className="campaign-title-subtitle text-red">
                                        <span className="btn-sky">{item.recruiter}</span>
                                        Company is not publicly visible
                                    </p>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <Table>
                                        <tr>
                                            <td>
                                                <span className="btn-orange">{item.positionLevel && item.positionLevel.name}</span>
                                            </td>
                                            <td>
                              <span className="star-label">
                                &#9733;&#9733;&#9733;&#9733;&#9733; {item.positionLevel && item.positionLevel.name}
                              </span>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
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
                                            <td>
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
                                            <td>
                                                <div className="campaign-head">{t("campaign.jobDescription.title")}</div>
                                            </td>
                                            <td>
                                                {item.jobDescription}
                                            </td>
                                        </tr>
                                    </Table>
                                    <div style={{backgroundColor: "lightgray", paddingTop: "1em"}} className="text-center">
                                        <p>
                                            <Button variant="warning" className="btn-bottom" onClick={(e) => {
                                    this.props.history.push("/campaign/details", { campaign: item } );
                             
                                }}>
                                                Details
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
