import React from 'react';
import {Col, Container, Row, Table} from "react-bootstrap";
import axios from 'axios';
import {withRouter} from "react-router-dom"
import './CandidateDetails.css';
import SideBar from "../../sidebar"
import environment from "../../../../environment.json"
class CompanyCandidateDetails extends React.Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount() {
        
        const {match} = this.props
        const id = match.params.id
        let url = `http://${environment.api_url}/api/candidates/${id}`;

        axios.get(url).then((response) => {
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

            let entries = Object.entries(response.data.data);

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
        });
    }

    monthNumberToString = {
        1: 'January', 2: 'February', 3: 'March', 4: 'April', 5: 'May', 6: 'June', 7: 'July',
        8: 'August', 9: 'September', 10: 'October', 11: 'November', 12: 'December'
    };

    render() {
        return (
            <div class="d-flex" id="wrapper">
                <SideBar />
                <div style={{width: "85%"}} id="page-content-wrapper">
                <div class="container-fluid">
                <Row>
                    <Col>
                        <Table>
                            <tbody>
                            <tr>
                                {
                                    !this.state.fromRegistrationPage &&
                                    <td className='candidate-details-td'>
                                        <div
                                            className="candidate-details-head go-back-to-candidate-list-button"
                                            onClick={() => {
                                               // this.props.callBack();
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
                                                        className="candidate-details-head">{this.state.attributeMap[key]}
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
                                                        className="candidate-details-head">{this.state.attributeMap[key]}
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

                            </tbody>
                        </Table>
                    </Col>
                </Row>
            </div>
            </div>
            </div>
        )
    }
};

export default withRouter(CompanyCandidateDetails)
