import React from 'react';
import Table from "react-bootstrap/Table";
import axios from "axios"
import CampaignDetails from "../../../routes/campaign/Campaign"
import SideBar from "../sidebar"
class CampaignList extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            campaigns: []
        }
    }

    componentDidMount() {
        let url = "http://localhost:4000/api/campaigns?lang=en"
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
                    <Table striped bordered hover size='sm' className='candidate-list-table'>
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
                        debugger
                        return (
                       
                            <tr
                                key={idx}
                                className='single-row'
                            >
                                <td>{item.id}</td>
                                <td>{item.recruiter}</td>
                                <td>{item.positionLevel.name}</td>
                                <td>{item.startSalary} ~ {item.endSalary}</td>
                                <td>{item.japaneseLevel}</td>
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

export default CampaignList






