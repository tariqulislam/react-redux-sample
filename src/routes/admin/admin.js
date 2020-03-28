import React from 'react'
import CampainPage from './campain/index'
import { Link } from 'react-router-dom'

export class Admin extends React.Component {
    render() {
        return (
            <div>
                <div>
                    <Link to="/admin/campain">Campain</Link>
                </div>
                <div>
                    <Route exact path="/admin/campain" component={CampainPage}  />
                </div>
            </div>
        )
    }
}