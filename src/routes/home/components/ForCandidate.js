import React from "react";
import CandidateOne from "../assets/images/candidate/one.png";
import CandidateTwo from "../assets/images/candidate/two.png";
import CandidateThree from "../assets/images/candidate/three.png";
import CandidateFour from "../assets/images/candidate/four.png";
import { Container, Row, Col, Image } from "react-bootstrap";
import { withTranslation } from "react-i18next";

export class ForCandidate extends React.Component {
  render() {
    const { t } = this.props;
    let imgStyle = {
      height: "220px",
      width: "auto",
    };
    let designFooterNote = {
      backgroundColor: "green",
      color: "white",
      height: "50px",
      fontSize: "30px",
      paddingLeft: "20px",
    };

    let designCounterNote = {
      backgroundColor: "#de5383",
      color: "white",
      height: "150px",
      fontSize: "30px",
      paddingLeft: "20px",
    };

    let DayTimeStyle = {
      float: "left",
      border: "2px solid white",
      padding: "5px",
      marginTop: "5px",
    };
    return (
      <React.Fragment>
        <Container fluid>
          <Row className="padding-bottom-30">
            <Col xs={12} md={2}></Col>
            <Col xs={12} md={8} className="text-center">
              <h1 className="title">{t("homepage.candidate_process.title")}</h1>
              <div className="title-underline"></div>
              <p className="title-subtitle text-red">User My Page Candidate</p>
            </Col>
            <Col xs={12} md={2}></Col>
          </Row>
          <Row>
            <Col xs={12} md={3} className="text-center">
              <Image style={imgStyle} src={CandidateOne} thumbnail />
              <div>{t("homepage.candidate_process.one")}</div>
            </Col>
            <Col xs={12} md={3} className="text-center">
              <div>
                <Image style={imgStyle} src={CandidateTwo} thumbnail />
              </div>
              <div>{t("homepage.candidate_process.two")}</div>
            </Col>
            <Col xs={12} md={3} className="text-center">
              <div>
                <Image style={imgStyle} src={CandidateThree} thumbnail />
              </div>
              <div>{t("homepage.candidate_process.three")}</div>
            </Col>
            <Col xs={12} md={3} className="text-center">
              <div>
                <Image style={imgStyle} src={CandidateFour} thumbnail />
              </div>
              <div>{t("homepage.candidate_process.four")}</div>
            </Col>
          </Row>
          <Row style={{ paddingLeft: "15px", paddingRight: "15px" }}>
            <Col style={designFooterNote} md={12}>
              <div>{t("homepage.candidate_process.notes")}</div>
            </Col>
          </Row>
          <Row style={{ paddingLeft: "15px", paddingRight: "15px" }}>
            <Col style={designCounterNote} md={12}>
              <div>
                <div style={DayTimeStyle}>2020</div>
                <div style={DayTimeStyle}>
                  {t("homepage.counter_section.year")}
                </div>
                <div style={DayTimeStyle}>03</div>
                <div style={DayTimeStyle}>
                  {t("homepage.counter_section.month")}
                </div>
                <div style={DayTimeStyle}>28</div>
                <div style={DayTimeStyle}>
                  {t("homepage.counter_section.day")}
                </div>
              </div>
              <div>
                <div style={DayTimeStyle}>2020</div>
                <div style={DayTimeStyle}>
                  {t("homepage.counter_section.candidate_register_for")}
                </div>
                <div style={DayTimeStyle}>03</div>
                <div style={DayTimeStyle}>
                  {t("homepage.counter_section.person")}
                </div>
                <div style={DayTimeStyle}>28</div>
                <div style={DayTimeStyle}>
                  {t("homepage.counter_section.company_register_for")}
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </React.Fragment>
    );
  }
}

export default withTranslation()(ForCandidate);
