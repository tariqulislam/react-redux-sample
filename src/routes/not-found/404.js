import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import AdminPanel from '../admin-panel/AdminPanel';

class NotFound extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div style={{justifyContent: 'center', padding: '5%', paddingLeft: '285px'}}>
                <div>
                    <div className="content">
                        <div className="header">
                            Are you lost?
                        </div>
                        <div className="description">
                            You seem to be somewhere we don't want you to be. Restart your journey &nbsp;
                            {/* <Link to={`/${JSON.parse(localStorage.getItem('role'))}/dashboard`}>here.</Link> */}
                            <Link to={`/`}>here.</Link>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export {
    NotFound as default
}