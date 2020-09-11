import React from 'react';
import './CompanyList.css';
import axios from 'axios';
import Table from "react-bootstrap/Table";
import SideBar from "../../sidebar"
import environment from "../../../../environment.json"

class CompanyList extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            companyList: []
        };
    }

    componentDidMount() {
     
        let url = `http://${environment.api_url}/api/companies`;

        axios.get(url).then((response) => {
            
            let companyList = response.data.data;

            this.setState({
                companyList: companyList,
            });
        });

       

    }

    render() {
        return (
            <div class="d-flex" id="wrapper">
            <SideBar />
            <div style={{width: "85%"}} id="page-content-wrapper">
                <div class="container-fluid pt-3">
  
                <Table striped bordered hover size='rg' className='company-list-table'>
                    <thead>
                    <tr>
                        <th>#</th>
                        <th>Company Name</th>
                        <th>Contact</th>
                        <th>Email</th>
                        <th>Action</th>
                    </tr>
                    </thead>
                    <tbody>

                    {
                        this.state.companyList &&
                        this.state.companyList.map((item, idx) => {
                            return (
                                <tr
                                    key={idx}
                                    className='company-single-row'
                                    onClick={(e) => {
                                        // console.log(`${this.state.base_url}/${item.id}`);
                                        axios.get(`/admin/company/details/${item.id}`).then((res) => {
                                        });
                                    }}
                                >
                                    <td>{item.id}</td>
                                    <td>{item.companyUser && item.companyUser.name}</td>
                                    <td>{item.companyAddress}</td>
                                    <td>{item.email}</td>
                                    <td><button className="btn btn-success btn-sm mr-1">Generate Coupon</button>
                                        <button className="btn btn-warning btn-sm">Details</button>
                                    </td>
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

export {
    CompanyList as default
}


