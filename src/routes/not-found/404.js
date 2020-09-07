import React, {Component} from 'react';
import {Link} from 'react-router-dom';

import './404.css';
import Table from "react-bootstrap/Table";
import {Image} from "react-bootstrap";

class NotFound extends Component {

    render() {
        return (
            <div className='not-found'>
                <Image src='/media/404.png' className='image'/>
                <Table responsive style={{outline: 'none'}} className='message'>
                    <tbody>
                    <tr>
                        <td>
                            <div className="content">
                                <div className="header">
                                    Are you lost?
                                </div>
                                <div className="description">
                                    You seem to be somewhere we don't want you to be. Restart your journey&nbsp;
                                    {/* <Link to={`/${JSON.parse(localStorage.getItem('role'))}/dashboard`}>here.</Link> */}
                                    <Link to={`/`}>here.</Link>
                                </div>
                            </div>
                        </td>
                    </tr>
                    </tbody>
                </Table>
            </div>
        );
    }
}

export {
    NotFound as default
}