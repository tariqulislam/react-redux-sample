import React from 'react';
import Table from "react-bootstrap/Table";
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
        // console.log(this.props);
       // let {base_url, api_path} = environment.candidate;
       // let controller_url = environment.candidate.controllers.service_name;

        let url = "http://localhost:4000/api/candidates";


        axios.get(url).then((response) => {
            response = response.data.data;

            this.setState({
                data: response,
                base_url: url
            });
        });
    }

    render() {
        return (
            <div className='main'>
                <Table striped bordered hover size='sm' className='candidate-list-table'>
                    <thead>
                    <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Gender</th>
                        <th>Current Location</th>
                        <th>Nationality</th>
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
                                        // console.log(`${this.state.base_url}/${item.id}`);
                                        axios.get(`${this.state.base_url}/${item.id}`).then((res)=> {
                                            this.props.callBackToParentElement(<CandidateDetails callBackToParentElement={this.props.callBackToParentElement} state={res.data.data}/>);
                                        });
                                    }}
                                >
                                    <td>{idx + 1}</td>
                                    <td>{item.romajiName}</td>
                                    <td>{item.gender}</td>
                                    <td>{item.currentLocation}</td>
                                    <td>{item.nationality}</td>
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