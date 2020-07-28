import React from 'react';
import {Button, Col, Container, Row, Table} from "react-bootstrap";

import CandidateList from '../admin/candidate/component/candidateList';

import './CandidateDetails.css';

class CandidateDetails extends React.Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount() {
        let attributeMap = {
            id: 'ID',
            candidateWorkExperiences: 'Work Experience',
            desiredJobs: 'Desired Jobs',
            languages: 'Languages',
            isAcceptTermsAndCondition: 'Terms & Co.',
            birthMonth: 'Birth Month',
            birthYear: 'Birth Year',
            birthday: 'Birth Date',
            candidate: 'Candidate',
            chronicDisease: 'Chronic Disease',
            country: 'Country',
            currentLocation: 'Currently at',
            currentSituation: 'Current Situation',
            currentSituationOption: 'Situation Option',
            eyeSight: 'Eye Sight',
            facebookUrl: 'Facebook URL',
            footSize: 'Foot Size',
            footSizeUnit: 'Foot Size Unit',
            gender: 'Gender',
            hearing: 'Hearing',
            height: 'Height',
            heightUnit: 'Height Unit',
            japaneseLanguageSkill: 'Japanese Skill',
            maritalStatus: 'Marital Status',
            nationality: 'Nationality',
            nickName: 'Nick Name',
            phoneNumber: 'Phone',
            religion: 'Religion',
            retypedPassword: 'Error Code',
            romajiName: 'Name',
            selectedStatus: 'Selected Status',
            specificSkill: 'Skills',
            specificSkillOption: 'Skill Options',
            status: 'Status',
            weight: 'Weight',
            weightUnit: 'Weight Unit',
            name: 'Name',
            username: 'Username',
            roleName: 'Role Name',
            email: 'E-mail'
        };

        let entries = Object.entries(this.props.state || this.props.location.state);

        let assest = [];

        entries.map(item => {
            if (attributeMap[item[0]]) {
                let key = item[0];
                let value = item[1];

                if (key === 'birthMonth') {
                    value = this.monthNumberToString[value]
                } else if (key === 'status') {
                    value = value === true ? 'True' : 'False'
                } else if (key === 'isAcceptTermsAndCondition') {
                    value = value === true ? 'Accepted' : 'Rejected'
                }
                assest.push({key, value});
            }
        });

        this.setState({
            entries: assest,
            attributeMap
        })
    }

    monthNumberToString = {
        1: 'January', 2: 'February', 3: 'March', 4: 'April', 5: 'May', 6: 'June', 7: 'July',
        8: 'August', 9: 'September', 10: 'October', 11: 'November', 12: 'December'
    };

    render() {
        return (
            <Container className='main'>
                <Row>
                    <Col>
                        <Table>
                            <tbody>
                            <tr>
                                {
                                    !this.state.fromRegistrationPage &&
                                    <td>
                                        <div
                                            className="campaign-head"
                                            style={{backgroundColor: 'green', cursor: 'pointer'}}
                                            onClick={() => {
                                                this.props.callBackToParentElement(<CandidateList
                                                    callBackToParentElement={this.props.callBackToParentElement}/>);
                                            }}
                                        >
                                            Go Back
                                        </div>
                                    </td>
                                }
                                <td>
                                    <h2>
                                        Candidate Details
                                    </h2>
                                </td>
                            </tr>

                            {
                                this.state.entries && this.state.entries.map((item, idx) => {
                                    if (typeof (item.value) !== 'object') {
                                        let key = item.key;
                                        let value = item.value;

                                        return (
                                            <tr key={idx}>
                                                <td>
                                                    <div
                                                        className="campaign-head">{this.state.attributeMap[key]}
                                                    </div>
                                                </td>
                                                <td>{value}</td>
                                            </tr>
                                        )
                                    } else {
                                        let key = item.key;
                                        let value = item.value;

                                        return (
                                            <tr key={idx}>
                                                <td>
                                                    <div
                                                        className="campaign-head">{this.state.attributeMap[key]}
                                                    </div>
                                                </td>
                                                <td>
                                                    {
                                                        Object.entries(value).map((it, idx) => {
                                                            // console.log(it);
                                                            // it = it[1];
                                                            return (
                                                                it[1] &&
                                                                <p key={idx}>• {this.state.attributeMap[it[0]] || it[1]['name']}: {it[1].description || it[1]['name'] || it[1]}</p>
                                                            );
                                                        })
                                                    }
                                                </td>
                                            </tr>
                                        )
                                    }
                                })
                            }


                            {/*Code below are hidden*/}
                            <tr style={{visibility: 'hidden'}}>
                                <td>
                                    <div className="campaign-head">Recruiter</div>
                                </td>
                                <td>Frank Recruitment Group PTE Ltd</td>
                            </tr>
                            <tr style={{visibility: 'hidden'}}>
                                <td>
                                    <div className="campaign-head">Job Description</div>
                                </td>
                                <td>
                                    <p>
                                        • Expert implementation of client RTSM applications to
                                        enable client start-up targets
                                    </p>
                                    <p>
                                        • Primary client engagement contact, responsible for the
                                        health of the client relationship working with clinical
                                        study teams to establish RTSM requirements and deliver
                                        robust RTSM delivery and oversight for study operations.{" "}
                                    </p>
                                    <p>
                                        • Work with product development and Quality Analysts to
                                        ensure study level applications are designed, configured,
                                        customized and tested to deliver a high quality, validated
                                        system to clients.{" "}
                                    </p>
                                    <p>• Expert in the company's Prancer technology;</p>
                                </td>
                            </tr>
                            </tbody>
                        </Table>
                    </Col>
                </Row>
            </Container>
        )
    }
};

export {
    CandidateDetails as default
}







