import React from 'react';
import Table from "react-bootstrap/Table";

import NewCandidate from '../../../candidate/new-candidate/NewCandidate';
import CandidateDetails from '../../../candidate/CandidateDetails';

import environment from '../../../../environment.json';

import axios from 'axios';

import '../style/candidateList.css';

class CandidateList extends React.Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount() {
        console.log(this.props)
        let {base_url, api_path, service_name} = environment.candidate;
        let controller_url = environment.candidate.controllers.service_name;

        let url = `${base_url}/${api_path}/${controller_url}/`;

        axios.get(url).then((response) => {
            response = response.data.data;
            console.log(response);

            this.setState({
                data: response
            });
        });
    }

    render() {
        return (
            <div className='main'>
                <Table striped bordered hover size='sm'>
                    <thead>
                    <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>E-mail</th>
                    </tr>
                    </thead>
                    <tbody>

                    {
                        this.state.data &&
                        this.state.data.map((item, idx) => {
                            return (
                                <tr
                                    key={idx}
                                    className='single-row'
                                    onClick={(e) => {
                                        this.props.callBackToParentElement(<CandidateDetails/>);
                                    }}
                                >
                                    <td>{idx + 1}</td>
                                    <td>{item.name}</td>
                                    <td>{item.email}</td>
                                </tr>
                            )
                        })
                    }
                    </tbody>
                </Table>
            </div>
        )
    }
}


export {
    CandidateList as default
}