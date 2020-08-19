import React from 'react'
import {Container, Row, Col} from 'react-bootstrap'
import {withRouter} from "react-router-dom"

import './CandidateLogin.css';
import axios from "axios"

const parseJwt = (token) => {
    var base64Url = token.split('.')[1];
    var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    var jsonPayload = decodeURIComponent(atob(base64).split('').map(function(c) {
        return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
    }).join(''));

    return JSON.parse(jsonPayload);
};

export class CandidateLogin extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            spinner: false
        }
    }

    onSubmitLoginCandidate = (event) => {
        event.preventDefault()
        const data = new FormData(event.target)
        console.log(data.get("email"))

        let url = "http://localhost:4000/api/auth/signin";

        const credential = {
            password: data.get("password"),
            username: data.get("username")
        }

        axios.post(url, credential, { headers: {'content-type': 'application/json'}
            }).then(result => {
                const parsetoken = parseJwt(result.data.accessToken)
                this.props.history.push("/candidate/dashboard")
            })
    }

    render() {
        return (
            <Container className='main-container'>
                <Row className="justify-content-md-center inner-container">
                    <Col sm="3"></Col>
                    <Col sm="6" className='login-container'>
                        <form onSubmit={this.onSubmitLoginCandidate} style={{width: "100%"}}>
                            <h3 className='sign-in-banner'>Sign In</h3>
                            <div className="form-group">
                                <label>Email address</label>
                                <input type="email" name="username" id="username" className="form-control" placeholder="Username"/>
                            </div>

                            <div className="form-group">
                                <label>Password</label>
                                <input type="password" name="password" id="password" className="form-control" placeholder="Password"/>
                            </div>

                            <div className="form-group">
                                <div className="custom-control custom-checkbox">
                                    <input type="checkbox" className="custom-control-input" id="customCheck1"/>
                                    <label className="custom-control-label remember-me" htmlFor="customCheck1">Remember
                                        me</label>
                                </div>
                            </div>

                            <button className="btn btn-primary btn-block">Log In</button>

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

export default withRouter(CandidateLogin)