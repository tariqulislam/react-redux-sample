import React from 'react';
import Table from "react-bootstrap/Table";
import axios from "axios"
import CampaignDetails from "../../../routes/campaign/Campaign"
class CampaignList extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            campaigns: []
        }
    }

    componentDidMount() {
        let url = "http://localhost:4000/api/campaigns"
        axios.get(url).then(result => {
            debugger
            this.setState({campaigns: result.data.data})
        })
    }


    render() {
        return (
            <div className='main'>
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
                        return (
                            <tr
                                key={idx}
                                className='single-row'
                                onClick={(e) => {
                                        this.props.callBackToParentElement(<CampaignDetails campaign={item} />);
                                }}
                            >
                                <td>{item.id}</td>
                                <td>{item.recruiter}</td>
                                <td>{item.positionLevel}</td>
                                <td>{item.startSalary} ~ {item.endSalary}</td>
                                <td>{item.japaneseLevel}</td>
                            </tr>
                        )
                    })
                }
                </tbody>
            </Table>
        </div>
        );
    }
}

export {
    CampaignList as default
}







