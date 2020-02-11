import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";

export class Register extends React.Component {
  render() {
    return (
      <Container>
        <Row className="justify-content-md-center">
          <Col md="auto">
            <h3>Register</h3>
          </Col>
        </Row>
        <Row className="justify-content-md-center">
          <Col md="8">
            <Form style={{ width: "100%" }}>
              <Form.Group
                className="form-main-container"
                as={Row}
                controlId="formHorizontalName"
              >
                <Form.Label column sm={3}>
                  Name(Full name)
                </Form.Label>
                <Col sm={9}>
                  <Form.Control type="text" placeholder="Type Your Name" />
                </Col>
              </Form.Group>

              <Form.Group
                className="form-main-container"
                as={Row}
                controlId="formHorizontalFullName"
              >
                <Form.Label column sm={3}>
                  Name(Katagana)
                </Form.Label>
                <Col sm={9}>
                  <Form.Control type="text" placeholder="Type Katagana name" />
                </Col>
              </Form.Group>

              <Form.Group
                className="form-main-container"
                as={Row}
                controlId="formHorizontalRomajiName"
              >
                <Form.Label column sm={3}>
                  Name(Romaji)
                </Form.Label>
                <Col sm={9}>
                  <Form.Control type="text" placeholder="Type Romaji name" />
                </Col>
              </Form.Group>

              <Form.Group
                className="form-main-container"
                as={Row}
                controlId="formHorizontalRomajiName"
              >
                <Form.Label column sm={3}>
                  Nick Name
                </Form.Label>
                <Col sm={9}>
                  <Form.Control type="text" placeholder="Type Nick name" />
                </Col>
              </Form.Group>

              <Form.Group
                className="form-main-container"
                as={Row}
                controlId="formHorizontalCountry"
              >
                <Form.Label column sm={3}>
                  Country & Resident
                </Form.Label>
                <Col sm={9}>
                    <select className="form-control">
                        <option>-- Select One --</option>
                        <opton> Japan </opton>
                        <option>Nepal</option>
                        <option>Vitnam</option>
                    </select>
                  <br/>
                  <Form.Control type="text" placeholder="Nationality" />
                </Col>
              </Form.Group>
              <Form.Group as={Row}>
                <Col sm={{ span: 9, offset: 3 }}>
                  <Button type="submit">Sign in</Button>
                </Col>
              </Form.Group>
            </Form>
            
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Register;
