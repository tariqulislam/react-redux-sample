import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux';
import { attemptLogin } from '../../../reducers/Admin/admin.reducer'
import { Redirect } from "react-router";
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
  }

  onSubmitAdminForm = (e) => {
    let validity = document.getElementsByClassName("login-form")
    validity = validity[0].checkValidity();

    const callback = () => {
      let role = JSON.parse(localStorage.getItem('role'));
      this.props.history.push({
        pathname: '/admin/dashboard',
        state: {
          "payload": {
            "username": this.state.email,
            role
          }
        }
      });
    }

    if(validity===true) {
      e.preventDefault();

      this.setState({'spinner': true});

      this.props.attemptAdminLogin({username: this.state.email, password: this.state.password}, callback);
    }
  }

  render() {
    let role = JSON.parse(localStorage.getItem('role'));
    let loggedIn = true;

    if(role === undefined || role === null) {
      loggedIn = false;
    }

    return (
      loggedIn===false ? (
        <Container>
          <Row className="justify-content-md-center">
            <Col sm="3"></Col>
            <Col sm="6">
              <form className="login-form" style={{ width: "100%" }}>
                <h3>Sign In</h3>
                <div className="form-group">
                  <label>Email address</label>
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Enter email"
                    onChange = { (e) => { this.setState({ email: e.target.value }) } }
                    required
                  />
                </div>

                <div className="form-group">
                  <label>Password</label>
                  <input
                    type="password"
                    className="form-control"
                    placeholder="Enter password"
                    onChange = { (e) => { this.setState({ password: e.target.value }) } }
                    required
                  />
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

                <button type="submit" onClick={this.onSubmitAdminForm} className="btn btn-primary btn-block">
                  Submit
                </button>

                {
                  // Loading while redirecting to the dashboard
                  this.state.spinner===true &&
                  <div style={{display: 'flex', justifyContent: 'center'}}>
                      <label className="lds-ellipsis">
                          <label></label>
                          <label></label>
                          <label></label>
                          <label></label>
                      </label>
                  </div>
                }

              </form>
            </Col>
            <Col sm="3"></Col>
          </Row>
        </Container>
      ):  (
        <Redirect to={ `/${role}/dashboard` } />
      )

    );
  }
}

const mapStateToProps = state => ({
})

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
