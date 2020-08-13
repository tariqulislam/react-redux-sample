import React from 'react';
import './CompanyList.css';
import environment from '../../../environment';
import axios from 'axios';
import Table from "react-bootstrap/Table";
import CandidateDetails from "../../candidate/CandidateDetails";

class CompanyList extends React.Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount() {
        // let {base_url, api_path} = environment.company;
        // let {service_name} = environment.company.controllers;
        // let {register_company} = environment.company.controllers.api;
        //
        // let url = `${base_url}/${api_path}/${service_name}/${register_company}`;
        // console.log(url)

        let companyList = [
            {
                name: 'Star Tech Ltd.',
                contact: '352/South West Lane, New Hampshire',
                email: 'star.tech@gmail.com',
                classification: 'IT Company'
            },
            {
                name: 'Ryan Computers Ltd.',
                contact: 'East Shewrapara, Dhaka',
                email: 'ryans.computers@yahoo.com',
                classification: 'Computer wholesale Company'
            },
            {
                name: 'Biostar ShowBizz',
                contact: '15, Yemen Road, Yemen',
                email: 'bio.star@gmail.com',
                classification: 'Drama Company'
            }
        ];

        this.setState({
            data: companyList
        })

    }

    render() {
        return (
            <div className='company-main'>
                <Table striped bordered hover size='sm' className='company-list-table'>
                    <thead>
                    <tr>
                        <th>#</th>
                        <th>Company Name</th>
                        <th>Contact</th>
                        <th>Email</th>
                        <th>Classification</th>
                    </tr>
                    </thead>
                    <tbody>

                    {
                        this.state.data &&
                        this.state.data.map((item, idx) => {
                            return (
                                <tr
                                    key={idx}
                                    className='company-single-row'
                                    onClick={(e) => {
                                        // console.log(`${this.state.base_url}/${item.id}`);
                                        axios.get(`${this.state.base_url}/${item.id}`).then((res) => {
                                            this.props.callBackToParentElement(<CandidateDetails
                                                callBackToParentElement={this.props.callBackToParentElement}
                                                state={res.data.data}/>);
                                        });
                                    }}
                                >
                                    <td>{idx + 1}</td>
                                    <td>{item.name}</td>
                                    <td>{item.contact}</td>
                                    <td>{item.email}</td>
                                    <td>{item.classification}</td>
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
    CompanyList as default
}


