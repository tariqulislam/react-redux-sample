import React from 'react'
import CampainPage from './campain/index'
import { Link, Route } from 'react-router-dom'
import {Container, Row} from 'react-bootstrap'


export class AdminDashboard extends React.Component {
    render() {
        return (
            <Container>
                <Row>
                    This is row
                </Row>
                <div>
                    <Link to="/admin/campain">Campain</Link>
                </div>
                <div>
                    <Route exact path="/admin/campain" component={CampainPage}  />
                </div>
            </Container>
        )
    }
}

export default AdminDashboard