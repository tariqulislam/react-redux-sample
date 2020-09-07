import React from 'react'

import {
    Link,
} from "react-router-dom"


export class SideBar extends React.Component {
    render() {
        return (
            <div style={{width: "15%", height: "70em"}} class="bg-light border-right" id="sidebar-wrapper">
            <div class="list-group list-group-flush">
                <Link className="list-group-item list-group-item-action bg-light" to="/candidate/dashboard">Dashboard</Link>
                <Link className="list-group-item list-group-item-action bg-light" to="/candidate/campaign/list">Campaign List</Link>
                <Link className="list-group-item list-group-item-action bg-light" to="/candidate/profile">Candidate profile</Link>
            </div>
        </div>
        );
    }
}

export default SideBar