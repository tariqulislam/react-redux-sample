import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux';

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

  }

  render() {
    return (
      <Container>
        <Row className="justify-content-md-center">
          <Col sm="3"></Col>
          <Col sm="6">
            <form style={{ width: "100%" }}>
              <h3>Sign In</h3>
              <div className="form-group">
                <label>Email address</label>
                <input
                  type="email"
                  className="form-control"
                  placeholder="Enter email"
                />
              </div>

              <div className="form-group">
                <label>Password</label>
                <input
                  type="password"
                  className="form-control"
                  placeholder="Enter password"
                />
              </div>

              <div className="form-group">
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
              </div>

              <button type="submit" onClick={this.onSubmitAdminForm} className="btn btn-primary btn-block">
                Submit
              </button>
            </form>
          </Col>
          <Col sm="3"></Col>
        </Row>
      </Container>
    );
  }
}

const mapStateToProps = state => ({
})

const mapDispatchToProps = dispatch => bindActionCreators({

}, dispatch)


export default connect(mapStateToProps, mapDispatchToProps)(AdminLogin);
