import React, {Fragment} from 'react'

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useParams,
    useRouteMatch
} from "react-router-dom"

import './admin.css';
import ListGroup from "react-bootstrap/ListGroup";

export class AdminDashboard extends React.Component {
   

    render() {
        return (
            <div style={{width: "15%", height: "70em"}} class="bg-light border-right" id="sidebar-wrapper">
            <div class="list-group list-group-flush">
                <Link className="list-group-item list-group-item-action bg-light" to="/admin/candidate/list">Candidate List</Link>
                <Link className="list-group-item list-group-item-action bg-light" to="/admin/campaign/list">Campaign List</Link>
                <Link className="list-group-item list-group-item-action bg-light" to="/admin/campaign/create">Create Campaign</Link>
                <Link className="list-group-item list-group-item-action bg-light" to="/admin/company/list">Company List</Link>
                <Link className="list-group-item list-group-item-action bg-light" to="/admin/company/register">Company Registration</Link>
            </div>
        </div>
        );
    }
}

export default AdminDashboard

