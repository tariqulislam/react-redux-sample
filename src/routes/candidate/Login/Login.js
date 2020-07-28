import React from 'react'
import {Container, Row, Col} from 'react-bootstrap'

import './CandidateLogin.css';

export class CandidateLogin extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (
            <Container className='main-container'>
                <Row className="justify-content-md-center inner-container">
                    <Col sm="3"></Col>
                    <Col sm="6" className='login-container'>
                        <form style={{width: "100%"}}>
                            <h3 className='sign-in-banner'>Sign In</h3>
                            <div className="form-group">
                                <label>Email address</label>
                                <input type="email" className="form-control" placeholder="Username"/>
                            </div>

                            <div className="form-group">
                                <label>Password</label>
                                <input type="password" className="form-control" placeholder="Password"/>
                            </div>

                            <div className="form-group">
                                <div className="custom-control custom-checkbox">
                                    <input type="checkbox" className="custom-control-input" id="customCheck1"/>
                                    <label className="custom-control-label remember-me" htmlFor="customCheck1">Remember
                                        me</label>
                                </div>
                            </div>

                            <button type="submit" className="btn btn-primary btn-block">Log In</button>

                            {
                                // Loading while redirecting to the dashboard
                                this.state.spinner === true &&
                                <div style={{display: 'flex', justifyContent: 'center'}}>
                                    <label className="lds-ellipsis">
                                        <label></label>
                                        <label></label>
                                        <label></label>
                                        <label></label>
                                    </label>
                                </div>
                            }

                            <div style={{
                                display: 'flex',
                                justifyContent: 'center',
                                color: `${this.state.textColor}`,
                                paddingTop: '5%'
                            }}>
                                {this.state.loginMessage}
                            </div>

                        </form>

                    </Col>
                    <Col sm="3"></Col>
                </Row>
            </Container>
        )
    }
}

export default CandidateLogin;