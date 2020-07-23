import React from "react";
import { Container, Row, Col, Tabs, Tab, Form, Button } from "react-bootstrap";
export default class Campaign extends React.Component {
  render() {
    let formBlock = {
      paddingTop: "20px",
    };
    return (
      <Container>
        <Row className="justify-content-md-center">
          <Col md="auto">
            <h3>Campaign</h3>
          </Col>
        </Row>
        <Row className="justify-content-md-center">
          <Col md="8">
            <Tabs defaultActiveKey="english" id="uncontrolled-tab-example">
              <Tab eventKey="english" title="English">
                <Form style={formBlock}>
                  <Form.Group as={Row} controlId="formHorizontalRecruiter">
                    <Form.Label column sm={4}>
                      Recruiter
                    </Form.Label>
                    <Col sm={8}>
                      <Form.Control type="text" placeholder="Recruiter" />
                    </Col>
                  </Form.Group>

                  <Form.Group as={Row} controlId="formHorizontalJobDescription">
                    <Form.Label column sm={4}>
                      Job Description
                    </Form.Label>
                    <Col sm={8}>
                      <Form.Control as="textarea" rows="3" />
                    </Col>
                  </Form.Group>

                  <Form.Group as={Row} controlId="formHorizontalJapaneseLevel">
                    <Form.Label column sm={4}>
                      Japanese Level
                    </Form.Label>
                    <Col sm={8}>
                      <Form.Control type="text" placeholder="Japanese Level" />
                    </Col>
                  </Form.Group>

                  <Form.Group as={Row} controlId="formHorizontalPositionLevel">
                    <Form.Label column sm={4}>
                      Position Level
                    </Form.Label>
                    <Col sm={8}>
                      <Form.Control column sm={8} as="select">
                        <option>-- SELECT --</option>
                        <option>EXECUTIVE</option>
                      </Form.Control>
                    </Col>
                  </Form.Group>

                  <Form.Group as={Row} controlId="formHorizontalPositionSalary">
                    <Form.Label column sm={4}>
                      Salary
                    </Form.Label>
                    <Col sm={4}>
                      <Form.Control type="number" placeholder="Start" />
                    </Col>
                    <Col sm={4}>
                      <Form.Control type="number" placeholder="End" />
                    </Col>
                  </Form.Group>

                  <Form.Group
                    as={Row}
                    controlId="formHorizontalSpecialFeatures"
                  >
                    <Form.Label column sm={4}>
                      Special Features
                    </Form.Label>
                    <Col sm={8}>
                      <Form.Control column sm={8} as="select">
                        <option>-- SELECT --</option>
                        <option value="INTERNATIONAL_TRANSFER">
                          INTERNATIONAL TRANSFER
                        </option>
                      </Form.Control>
                    </Col>
                  </Form.Group>

                  <Form.Group as={Row} controlId="formHorizontalChineseLevel">
                    <Form.Label column sm={4}>
                      Chinese Level
                    </Form.Label>
                    <Col sm={8}>
                      <Form.Control type="text" placeholder="Chinese Level" />
                    </Col>
                  </Form.Group>

                  <Form.Group as={Row} controlId="formHorizontalCurrency">
                    <Form.Label column sm={4}>
                      Currency
                    </Form.Label>
                    <Col sm={8}>
                      <Form.Control type="number" placeholder="Currency" />
                    </Col>
                  </Form.Group>

                  <Form.Group as={Row} controlId="formHorizontalLang">
                    <Form.Label column sm={4}>
                      Language
                    </Form.Label>
                    <Col sm={8}>
                      <Form.Control type="number" placeholder="Lang" />
                    </Col>
                  </Form.Group>

                  <Form.Group as={Row} controlId="formHorizontalAreaName">
                    <Form.Label column sm={4}>
                      Area Name
                    </Form.Label>
                    <Col sm={8}>
                      <Form.Control type="text" placeholder="Name" />
                    </Col>
                  </Form.Group>

                  <Form.Group as={Row} controlId="formHorizontalSpecialCountry">
                    <Form.Label column sm={4}>
                      Country
                    </Form.Label>
                    <Col sm={8}>
                      <Form.Control column sm={8} as="select">
                        <option>-- SELECT --</option>
                        <option value="bangladesh">Bangladesh</option>
                      </Form.Control>
                    </Col>
                  </Form.Group>

                  <Form.Group as={Row}>
                    <Col sm={{ span: 8, offset: 4 }}>
                      <Button type="submit">SAVE</Button>
                    </Col>
                  </Form.Group>
                </Form>
              </Tab>
              <Tab eventKey="japanese" title="Japanese"></Tab>
            </Tabs>
          </Col>
        </Row>
      </Container>
    );
  }
}
