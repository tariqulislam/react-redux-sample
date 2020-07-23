import React from 'react'
import CampainPage from './campain/index'
import { Link, Route } from 'react-router-dom'
import {Container, Row} from 'react-bootstrap'

import AdminPanel from '../admin-panel/AdminPanel';


export class AdminDashboard extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <Container style={{ paddingLeft: '200px' }}>
                    <Row>
                        This is row
                    </Row>
                    <div>
                        <Link to="/admin/campaign">Campaign</Link>
                    </div>
                    <div>
                        <Link to="/admin/campaign">Campaign</Link>
                    </div>
                </Container>
            </div>
        )
    }

    // render() {
    //     return(
    //         <div>
    //             Hello !!
    //         </div>
    //     );
    // }
}

export default AdminDashboard