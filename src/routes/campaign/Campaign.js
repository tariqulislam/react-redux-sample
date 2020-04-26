import React, { Component } from "react";
import { Container, Row, Col, Table, Button } from "react-bootstrap";
import "./assets/campaign.scss";

class Campaign extends Component {
  render() {
    return (
      <Container>
        <Row style={{ paddingTop: "70px", paddingBottom: "20px" }}>
          <Col className="text-center">
            <h1 className="campaign-title">Client Service Lead</h1>
            <div className="campaign-title-underline"></div>
            <p className="campaign-title-subtitle text-red">
              <span className="btn-sky">Recruiter</span>
              Company is not publicly visible
            </p>
          </Col>
        </Row>
        <Row>
          <Col>
            <Table>
              <tr>
                <td>
                  <span className="btn-orange">HIGH CLASS</span>
                </td>
                <td>
                  <span className="star-label">
                    &#9733;&#9733;&#9733;&#9733;&#9733; Manager Level
                  </span>
                </td>
              </tr>
              <tr>
                <td>
                  <div className="campaign-head">Recruiter</div>
                </td>
                <td>Frank Recruitment Group PTE Ltd</td>
              </tr>
              <tr>
                <td>
                  <div className="campaign-head">Location</div>
                </td>
                <td>Asia Igkyg Shinjuku JPY</td>
              </tr>
              <tr>
                <td>
                  <div className="campaign-head">Salary</div>
                </td>
                <td>Japanese yen JPY 8000K - JPY 15000K</td>
              </tr>
              <tr>
                <td>
                  <div className="campaign-head">Japanese Level</div>
                </td>
                <td>Fluent(JLPT Level 1 or NI)</td>
              </tr>
              <tr>
                <td>
                  <div className="campaign-head">Job Description</div>
                </td>
                <td>
                  <p>
                    • Expert implementation of client RTSM applications to
                    enable client start-up targets
                  </p>
                  <p>
                    • Primary client engagement contact, responsible for the
                    health of the client relationship working with clinical
                    study teams to establish RTSM requirements and deliver
                    robust RTSM delivery and oversight for study operations.{" "}
                  </p>
                  <p>
                    • Work with product development and Quality Analysts to
                    ensure study level applications are designed, configured,
                    customized and tested to deliver a high quality, validated
                    system to clients.{" "}
                  </p>
                  <p>• Expert in the company's Prancer technology;</p>
                </td>
              </tr>
            </Table>
            <div className="text-center">
              <p>
                <Button variant="warning" className="btn-bottom">
                  Like
                </Button>
                <Button variant="dark" className="btn-bottom">
                  View Full Listing
                </Button>
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Campaign;