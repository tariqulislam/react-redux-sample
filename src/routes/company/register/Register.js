import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { withTranslation, Trans } from 'react-i18next'

export class Register extends React.Component {
  render() {
    const {t} = this.props
    return (
      <Container>
        <Row className="justify-content-md-center">
          <Col md="auto">
            <h3>Company Registration Form</h3>
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
                 Company Name
                </Form.Label>
                <Col sm={9}>
                  <Form.Control type="text"  />
                </Col>
              </Form.Group>
              <Form.Group
                className="form-main-container"
                as={Row}
                controlId="formHorizontalRomajiName"
              >
                <Form.Label column sm={3}>
                 Company Contact
                </Form.Label>
                <Col sm={9}>
                  <Form.Control type="text"  />
                </Col>
              </Form.Group>

              <Form.Group
                className="form-main-container"
                as={Row}
                controlId="formHorizontalRomajiName"
              >
                <Form.Label column sm={3}>
                  Company Email
                </Form.Label>
                <Col sm={9}>
                  <Form.Control type="text"  />
                </Col>
              </Form.Group>
              <Form.Group
                className="form-main-container"
                as={Row}
                controlId="formHorizontalCountry"
              >
                <Form.Label column sm={3}>
                   Industry Classification
                </Form.Label>
                <Col sm={9}>
                    <select name="country" className="form-control">
                        <option>-- Select One --</option>
                        <option>IT </option>
                        <option>Marketing</option>
                        <option>Manufacturer</option>
                    </select>
                </Col>
              </Form.Group>
              <Form.Group
                className="form-main-container"
                as={Row}
                controlId="formHorizontalRomajiName"
              >
                <Form.Label column sm={3}>
                   Contact Person
                </Form.Label>
                <Col sm={9}>
                 
                </Col>
              </Form.Group>
              <Form.Group
                className="form-main-container"
                as={Row}
                controlId="formHorizontalCountry"
              >
                <Form.Label column sm={3}>
                  {t('registration.terms_conditions.title')}
                </Form.Label>
                <Col sm={9}>
                  <textarea style={{width: '100%'}} cols="40" rows="5"></textarea>
              
                </Col>
              </Form.Group>
             
              {/* <Form.Group
                className="form-main-container"
                as={Row}
                controlId="formHorizontalCountry"
              >
                <Form.Label column sm={3}>
                  {t('registration.religion.title')}
                </Form.Label>
                <Col sm={9}>
                    <select name="religion" className="form-control">
                        <option>-- No Religion --</option>
                        <option> Buddist </option>
                        <opton> Cristen </opton>
                        <option>Muslim</option>
                        <option>Jdusim</option>
                        <option>Others</option>
                    </select>
              
                </Col>
              </Form.Group>
              <Form.Group
                className="form-main-container"
                as={Row}
                controlId="formHorizontalCountry"
              >
                <Form.Label column sm={3}>
                  {t('registration.sex.title')}
                </Form.Label>
                <Col sm={9}>
                    <select name="religion" className="form-control">
                        <option>--  Select One --</option>
                        <option> Male </option>
                        <option> Female </option>
                        <option>Others</option>
                    </select>
              
                </Col>
              </Form.Group>
              <Form.Group
                className="form-main-container"
                as={Row}
                controlId="formHorizontalCountry"
              >
                <Form.Label column sm={3}>
                  {t('registration.half_body_photo.title')}
                </Form.Label>
                <Col sm={9}>
                   <input className="form-control" type="file" />
              
                </Col>
              </Form.Group>
              */}
               <Form.Group
                className="form-main-container"
                as={Row}
                controlId="formHorizontalCountry"
              >
                <Form.Label column sm={3}>
               
                </Form.Label>
                <Col sm={9}>
                  <Button  type="button"> Register</Button>
                </Col>
              </Form.Group>
            </Form>
            
          </Col>
        </Row>
      </Container>
    );
  }
}

export default withTranslation()(Register)

