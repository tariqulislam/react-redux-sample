import React from 'react';
import { Col, Container, Row, Table } from "react-bootstrap";
import axios from 'axios';
import { withRouter } from "react-router-dom"
import './CandidateDetails.css';

import environment from "../../environment.json"
import {withTranslation} from "react-i18next"

class CandidateDetails extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            canidateInfo: {}
        };
    }

    componentDidMount() {
        const user = JSON.parse(localStorage.getItem("user"))
        const id = user.id
        let url = `http://${environment.api_url}/api/candidates/${id}`;

        axios.get(url).then((res) => {
            debugger
            this.setState({candidateInfo: res.data.data})
        });
    }

    render() {
        const {t} = this.props
        return (
            <Container className='candidate-details-main'>
                <Row>
                    <Col>
                        <Table>
                            <tbody>
                                <tr>
                                    {
                                        <td >
                                            <a
                                                href="/candidate/dashboard"
                                                className='btn btn-warning'
                                                style={{width: "10em"}}
                                            >
                                            Go Back
                                        </a>
                                        </td>
                                    }
                                    <td>
                                        <h2>
                                            Candidate Details
                                    </h2>
                                    </td>
                                </tr>

                                <tr>
                                    <td>
                                        <div
                                            className="candidate-details-head">
                                            {t("registration.full_name.title")}
                                        </div>
                                    </td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td>
                                        <div
                                            className="candidate-details-head">
                                           {t("registration.romanji_name.title")}
                                        </div>
                                    </td>
                                    <td></td>
                                </tr>

                                <tr>
                                    <td>
                                        <div
                                            className="candidate-details-head">
                                             {t("registration.country_resident.title")}    
                                        </div>
                                    </td>
                                    <td></td>
                                </tr>

                                <tr>
                                    <td>
                                        <div
                                            className="candidate-details-head">
                                            {t("registration.language_you_can_fully_understand.title")}    
                                        </div>
                                    </td>
                                    <td></td>
                                </tr>

                                <tr>
                                    <td>
                                        <div
                                            className="candidate-details-head">
                                               {t("registration.date_of_birth.title")}   
                                        </div>
                                    </td>
                                    <td></td>
                                </tr>

                                <tr>
                                    <td>
                                        <div
                                            className="candidate-details-head">
                                               {t("registration.religion.title")}     
                                        </div>
                                    </td>
                                    <td></td>
                                </tr>

                                <tr>
                                    <td>
                                        <div
                                            className="candidate-details-head">
                                                  {t("registration.sex.title")}     
                                        </div>
                                    </td>
                                    <td></td>
                                </tr>

                                <tr>
                                    <td>
                                        <div
                                            className="candidate-details-head">
                                                 {t("registration.height_weight.title")} 
                                        </div>
                                    </td>
                                    <td></td>
                                </tr>

                                <tr>
                                    <td>
                                        <div
                                            className="candidate-details-head">
                                                 {t("registration.eyesight_hearing.title")} 
                                        </div>
                                    </td>
                                    <td></td>
                                </tr>

                                <tr>
                                    <td>
                                        <div
                                            className="candidate-details-head">
                                                 {t("registration.foot_size.title")} 
                                        </div>
                                    </td>
                                    <td></td>
                                </tr>

                                <tr>
                                    <td>
                                        <div
                                            className="candidate-details-head">
                                                {t("registration.email.title")} 
                                        </div>
                                    </td>
                                    <td></td>
                                </tr>

                                <tr>
                                    <td>
                                        <div
                                            className="candidate-details-head">
                                                  {t("registration.phonenumber.title")} 
                                        </div>
                                    </td>
                                    <td></td>
                                </tr>

                                <tr>
                                    <td>
                                        <div
                                            className="candidate-details-head">
                                                  {t("registration.facebook.title")} 
                                        </div>
                                    </td>
                                    <td></td>
                                </tr>

                                <tr>
                                    <td>
                                        <div
                                            className="candidate-details-head">
                                                   {t("registration.current_location.title")} 
                                        </div>
                                    </td>
                                    <td></td>
                                </tr>

                                <tr>
                                    <td>
                                        <div
                                            className="candidate-details-head">
                                                {t("registration.current_situation.title")} 
                                        </div>
                                    </td>
                                    <td></td>
                                </tr>

                                <tr>
                                    <td>
                                        <div
                                            className="candidate-details-head">
                                                {t("registration.work_experience.title")}
                                        </div>
                                    </td>
                                    <td></td>
                                </tr>

                                <tr>
                                    <td>
                                        <div
                                            className="candidate-details-head">
                                                  {t("registration.specific_skills.title")}
                                        </div>
                                    </td>
                                    <td></td>
                                </tr>
                                
                                <tr>
                                    <td>
                                        <div
                                            className="candidate-details-head">
                                                  {t("registration.meritial_status.title")}
                                        </div>
                                    </td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td>
                                        <div
                                            className="candidate-details-head">
                                                  {t("registration.cronic_disease.title")}
                                        </div>
                                    </td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td>
                                        <div
                                            className="candidate-details-head">
                                                  {t("registration.japanese_language_skills.title")}
                                        </div>
                                    </td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td>
                                        <div
                                            className="candidate-details-head">
                                                  {t("registration.desired_job.title")}
                                        </div>
                                    </td>
                                    <td></td>
                                </tr>
                            </tbody>
                        </Table>
                    </Col>
                </Row>
            </Container>
        )
    }
};

export default withTranslation()(withRouter(CandidateDetails))
