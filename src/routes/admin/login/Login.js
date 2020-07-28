import React from "react";
import {Container, Row, Col} from "react-bootstrap";
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux';
import {attemptLogin} from '../../../reducers/Admin/admin.reducer'
import {Redirect} from "react-router";
import './asset/css/style.css';

export class AdminLogin extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            email: null,
            password: null
        }
    }

    onEmailChange = (e) => {
        this.setState({email: e.target.value})
    }

    onPasswordChange = (e) => {
        this.setState({password: e.target.value})
    };

    onSubmitAdminForm = (e) => {
        let validity = document.getElementsByClassName("login-form")
        validity = validity[0].checkValidity();
        console.log(validity[0])

        const callback = (payload) => {
            if (payload.status === true) {
                this.setState({
                    'loginMessage': payload.message,
                    'textColor': 'green',
                    role: payload.decodedToken.role
                }, () => {
                    // console.log('Pushing into History')
                    console.log(payload)
                    this.props.history.push({
                        pathname: '/admin/dashboard',
                        state: {
                            payload
                        }
                    });
                });
            } else {
                this.setState({'loginMessage': payload.message, 'textColor': 'red', spinner: false});
            }
        };

        if (validity === true) {
            e.preventDefault();

            this.setState({'spinner': true, loginMessage: ''});

            this.props.attemptAdminLogin({username: this.state.email, password: this.state.password}, callback);
        } else {
            console.log('FAILED TO VALIDATE')
        }
    }

    render() {
        let role = this.state.role;
        let loggedIn = true;

        if (role === undefined || role === null) {
            loggedIn = false;
        }

        return (
            loggedIn === false ? (
                <Container className='main-container'>
                    <Row className="justify-content-md-center inner-container">
                        <Col sm="3"></Col>
                        <Col sm="6" className='login-container'>
                            <form className="login-form" style={{width: "100%"}}>
                                <h3 className='sign-in-banner'>Sign In</h3>
                                <div className="form-group">
                                    <label>Email address</label>
                                    <input
                                        type="email"
                                        className="form-control"
                                        placeholder="Username"
                                        onChange={(e) => {
                                            this.setState({email: e.target.value})
                                        }}
                                        required
                                    />
                                </div>

                                <div className="form-group">
                                    <label>Password</label>
                                    <input
                                        type="password"
                                        className="form-control"
                                        placeholder="Password"
                                        onChange={(e) => {
                                            this.setState({password: e.target.value})
                                        }}
                                        required
                                    />
                                </div>

                                <div className="form-group">
                                    <div className="custom-control custom-checkbox">
                                        <input type="checkbox" className="custom-control-input" id="customCheck1"/>
                                        <label className="custom-control-label remember-me" htmlFor="customCheck1">Remember me</label>
                                    </div>
                                </div>

                                {/* <div className="form-group">
                  <div className="custom-control custom-checkbox">
                    <input
                      type="checkbox"
                      className="custom-control-input"
                      id="customCheck1"
                    />
                    <label
                      className="custom-control-label"
                      htmlFor="customCheck1"
                    >
                      Remember me
                    </label>
                  </div>
                </div> */}

                                <button type="submit" onClick={this.onSubmitAdminForm}
                                        className="btn btn-primary btn-block">
                                    Log In
                                </button>

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
            ) : (
                <Redirect to={`/${role}/dashboard`}/>
            )

        );
    }
}

const mapStateToProps = state => ({})

/*
const mapDispatchToProps = dispatch => bindActionCreators({

}, dispatch)
*/

const mapDispatchToProps = dispatch => {
    return {
        attemptAdminLogin: (data, callback) => dispatch(attemptLogin(data, callback))
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(AdminLogin);
