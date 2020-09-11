import React from 'react';
import Table from "react-bootstrap/Table";
import axios from 'axios';
import '../style/candidateList.css';
import SideBar from "../../sidebar"
import {withRouter} from "react-router-dom"
import environment from "../../../../environment.json"

class CompanyCandidateList extends React.Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount() {
        let url = `http://${environment.api_url}/api/candidates`;

        axios.get(url).then((response) => {
            // alert(response);
            response = response.data.data;

            this.setState({
                data: response,
                base_url: url
            });
        });
    }


    render() {
        return (
            <div class="d-flex" id="wrapper">
                <SideBar />
                <div style={{width: "85%"}} id="page-content-wrapper">
                <div class="container-fluid">
                <Table striped bordered hover size='sm' className='candidate-list-table mt-3'>
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
                                    
                                   this.props.history.push(`/admin/candidate/details/${item.id}`)
                                }}
                            >
                                <td>{item.id}</td>
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
                </div>

            </div>
        );
    }
}

export default withRouter(CompanyCandidateList)