import React from 'react';
import Table from "react-bootstrap/Table";
import axios from "axios"
import SideBar from "../sidebar"
import {withRouter} from "react-router-dom"
import environment from "../../../environment.json"
class CompanyCampaignList extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            campaigns: []
        }
    }

    componentDidMount() {
        let companyInfo = JSON.parse(localStorage.getItem("company"))
        if(companyInfo) {
            let url = `http://${environment.api_url}/api/campaigns/company/${companyInfo.id}`
            axios.get(url).then(result => {
                debugger
                this.setState({campaigns: result.data.data})
            })
        }
        
    }


    render() {
        return (
            <div class="d-flex" id="wrapper">
                <SideBar />
                <div style={{width: "85%"}} id="page-content-wrapper">
                    <div class="container-fluid pt-4">
                <Table striped bordered hover size='rg' className='candidate-list-table '>
                <thead>
                <tr>
                    <th>#</th>
                    <th>Company</th>
                    <th>Job Level</th>
                    <th>Salary Range</th>
                    <th>Language Profeciency</th>
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
                                    this.props.history.push(`/company/campaign/details/${item && item.id}`)
                                }}
                            >
                                <td>{item.id}</td>
                                <td>{item && item.recruiter}</td>
                                <td>{item && item.positionLevel && item.positionLevel.name}</td>
                                <td>{item && item.startSalary} ~ {item.endSalary}</td>
                                <td>{item && item.japaneseLevel}</td>
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

export default withRouter(CompanyCampaignList)






