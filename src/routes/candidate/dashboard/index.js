import React from 'react';
import Table from "react-bootstrap/Table";
import axios from "axios"
import SideBar from "../sidebar"
import {withRouter} from "react-router-dom"

class CandidateDashboard extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            campaigns: []
        }
    }

    componentDidMount() {
        let url = "http://ec2-18-224-16-47.us-east-2.compute.amazonaws.com:4000/api/campaigndetails"
        axios.get(url).then(result => {
            debugger
            this.setState({campaigns: result.data.data})
        })
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
                    <th>Industry</th>
                    <th>Company</th>
                    <th>Candidate</th>
                    <th>Salary Range</th>
                    <th>contractPeriod</th>
                </tr>
                </thead>
                <tbody>
                {
                    this.state.campaigns &&
                    this.state.campaigns.map((item, idx) => {
                        return (
                       
                            <tr
                                key={idx}
                                className='single-row'
                                onClick={(e) => {

                                    this.props.history.push(`/admin/campaign/applied/details/${item.id}`)
                                }}
                            >
                                <td>{item.id}</td>
                                <td>{item.campaign.industry.name}</td>
                                <td>{item.campaign.recruiter}</td>
                                <td>{item.candidate.username} ( {item.candidate.name})</td>
                                <td>{item.campaign.startSalary} ~ {item.campaign.endSalary}</td>
                                <td>{item.campaign.contractPeriod}</td>
                              
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

export default withRouter(CandidateDashboard)





