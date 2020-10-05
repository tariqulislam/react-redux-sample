import React from 'react'
import { Container, Row, Col , Alert} from 'react-bootstrap'
import { withRouter } from "react-router-dom"

import './CandidateLogin.css';
import axios from "axios"
import environment from "../../../environment.json"
import {withTranslation} from "react-i18next"

const parseJwt = (token) => {
    var base64Url = token.split('.')[1];
    var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    var jsonPayload = decodeURIComponent(atob(base64).split('').map(function (c) {
        return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
    }).join(''));

    return JSON.parse(jsonPayload);
};

export class CandidateLogin extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            spinner: false,
            showMessage: false,
            message: "",
            status: ""
        }
    }

    onSubmitLoginCandidate = (event) => {
        event.preventDefault()
        const data = new FormData(event.target)
        console.log(data.get("email"))

        let url = `http://${environment.api_url}/api/auth/signin`;

        const credential = {
            password: data.get("password"),
            username: data.get("username")
        }

        axios.post(url, credential, {
            headers: { 'content-type': 'application/json' }
        }).then(result => {
            
                const parsetoken = parseJwt(result.data.accessToken)

                const user = parsetoken.user

                const userRole = user.authorities[0].authority
                localStorage.setItem("user_role", userRole)
                localStorage.setItem("user", JSON.stringify(user))

                this.props.history.push("/candidate/dashboard")

        }).catch(ex => {
            this.setState({ status: "danger", showMessage: true, message: "Wrong username or password" })
        })
    }

    render() {
        const {t} = this.props
        return (
            <Container className='main-container'>
                <Row className="justify-content-md-center inner-container">
                    <Col sm="3"></Col>
                    <Col sm="6" className='login-container'>
                        <form onSubmit={this.onSubmitLoginCandidate} style={{ width: "100%" }}>
                           
                            <h3 className='sign-in-banner'>{t("login-page.candidate_title")}</h3>
                            {
                                this.state.showMessage && <Alert variant={this.state.status}>
                                    {this.state.message}
                                </Alert>
                            }
                            <div className="form-group">
                                <label>{t("login-page.email_address")}</label>
                                <input type="email" name="username" id="username" className="form-control" placeholder="Username" />
                            </div>

                            <div className="form-group">
                                <label>{t("login-page.password")}</label>
                                <input type="password" name="password" id="password" className="form-control" placeholder="Password" />
                            </div>

                            {/* <div className="form-group">
                                <div className="custom-control custom-checkbox">
                                    <input type="checkbox" className="custom-control-input" id="customCheck1" />
                                    <label className="custom-control-label remember-me" htmlFor="customCheck1">Remember
                                        me</label>
                                </div>
                            </div> */}

                            <button className="btn btn-primary btn-block">{t("login-page.candidate_login_button")}</button>

                            {
                                this.state.spinner === true &&
                                <div style={{ display: 'flex', justifyContent: 'center' }}>
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
                <Row className="justify-content-md-center">
                    <div sm="3"></div>
                    <div sm="6"></div>
                    <div sm="3" className="register-container text-center"><a className="btn btn-success" href="/candidate/register">{t("login-page.candidate_register_button")}</a></div>
                   
                </Row>
            </Container>
        )
    }
}

export default withTranslation()(withRouter(CandidateLogin))