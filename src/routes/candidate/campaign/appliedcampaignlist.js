import React from 'react';
import Table from "react-bootstrap/Table";
import axios from "axios"
import SideBar from "../sidebar"
import {withRouter} from "react-router-dom"
import environment from "../../../environment.json"

class CandidateAppliedCampaignList extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            campaigns: []
        }
    }

    componentDidMount() {
        let url = `http://${environment.api_url}/api/campaigndetails`
        axios.get(url).then(result => {
            this.setState({campaigns: result.data.data})
        })
    }


    render() {
        return (
            <div class="d-flex" id="wrapper">
                <SideBar />
                <div style={{width: "85%"}} id="page-content-wrapper">
                    <div class="container-fluid">
                <Table striped bordered hover size='rg' className='mt-3'>
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
                                style={{cursor: "pointer"}}
                                onClick={(e) => {

                                    this.props.history.push(`/candidate/campaign/applied/details/${item.id}`)
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

export default withRouter(CandidateAppliedCampaignList)






