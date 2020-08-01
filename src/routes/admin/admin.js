import React, {Fragment} from 'react'
import CandidateList from '../admin/candidate/component/candidateList';

import CompanyRegister from '../company/register/Register';
import CompanyList from "../company/company-list/CompanyList";

import CustomSidebar from '../custom-components/side-bar/CustomSidebar';
import Dropdown from "react-bootstrap/Dropdown";

import './admin.css';
import ListGroup from "react-bootstrap/ListGroup";

export class AdminDashboard extends React.Component {

    constructor(props) {
        super(props);
        this.sideBarRef = React.createRef();
        this.mainRef = React.createRef();

        this.state = {};
    }

    componentDidMount() {
        this.setState({
            viewable: <CandidateList/>,
            viewableName: 'CandidateList'
        })
    }

    callBackToParentElement = (comp) => {
        this.setState({
            viewable: comp
        })
    };

    render() {
        return (
            <div className='admin-view' style={{height: '100vh', display: 'flex'}}>
                <CustomSidebar>
                    <Dropdown.Item active={this.state.viewableName==='CandidateList'} className='item' onClick={() => {
                        this.setState({
                            viewable: <CandidateList/>,
                            viewableName: 'CandidateList'
                        })
                    }}>
                        Candidate List
                    </Dropdown.Item>
                    <Dropdown.Item active={this.state.viewableName==='CompanyList'} className='item' onClick={() => {
                        this.setState({
                            viewable: <CompanyList/>,
                            viewableName: 'CompanyList'
                        })
                    }}>
                        Company List
                    </Dropdown.Item>
                    <Dropdown.Item active={this.state.viewableName==='CompanyRegister'} className='item' onClick={() => {
                        this.setState({
                            viewable: <CompanyRegister/>,
                            viewableName: 'CompanyRegister'
                        })
                    }}>
                        Create Company
                    </Dropdown.Item>
                </CustomSidebar>

                <div id="right" className="admin-dashboard-canvas" style={{flexGrow: '1'}}>
                    {this.state.viewable}
                </div>
            </div>
        );
    }
}

export default AdminDashboard