import React from 'react';
import Table from "react-bootstrap/Table";
import axios from "axios"
import {useHistory} from "react-router-dom"
import {Container, Row, Col, Button} from "react-bootstrap";
class CampaignList extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            campaigns: [],
            viewable: null,
        }
    }

    componentDidMount() {
        let url = "http://localhost:4000/api/campaigns"
        axios.get(url).then(result => {
            this.setState({campaigns: result.data.data})
        })
    }


    render() {
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
                    this.state.campaigns &&
                    this.state.campaigns.map((item, idx) => {
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
                                                <span className="btn-orange">{item.positionLevel}</span>
                                            </td>
                                            <td>
                              <span className="star-label">
                                &#9733;&#9733;&#9733;&#9733;&#9733; {item.positionLevel}
                              </span>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <div className="campaign-head">Company</div>
                                            </td>
                                            <td>{item.recruiter}</td>
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
                                         <td>Japanese yen JPY {item.startSalary} ~ {item.endSalary}</td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <div className="campaign-head">Japanese Level</div>
                                            </td>
                                        <td>{item.japaneseLevel}</td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <div className="campaign-head">Job Description</div>
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

export {
    CampaignList as default
}







