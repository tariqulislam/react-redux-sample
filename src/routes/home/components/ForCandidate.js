import React from "react";
import IMAGE_RESOURCE from "../assets/images/ImageResource";
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
      backgroundColor: "#06bf06",
      color: "white",
      height: "50px",
      fontSize: "30px",
    };

    let designCounterNote = {
      backgroundColor: "gray",
      color: "white",
      height: "50px",
      fontSize: "20px"
    };

    let DayTimeStyle = {
      float: "left",
      border: "1px solid white",
      marginTop: "4px",
      padding: "6px"
    };
    return (
      <React.Fragment>
        <Container fluid>
          <Row className="padding-bottom-30">
            <Col xs={12} md={2}></Col>
            <Col xs={12} md={8} className="text-center">
              <h1 style={{marginTop: "40px"}}>{t("homepage.candidate_process.title")}</h1>
              <div className="title-underline"></div>
            </Col>
            <Col xs={12} md={2}></Col>
          </Row>
          <Row>
            <Col xs={12} md={3} className="text-center">
              <Image
                style={imgStyle}
                src={IMAGE_RESOURCE.candidateSection.candidateOne}
                thumbnail
              />
              <div>{t("homepage.candidate_process.one")}</div>
            </Col>
            <Col xs={12} md={3} className="text-center">
              <div>
                <Image
                  style={imgStyle}
                  src={IMAGE_RESOURCE.candidateSection.candidateTwo}
                  thumbnail
                />
              </div>
              <div>{t("homepage.candidate_process.two")}</div>
            </Col>
            <Col xs={12} md={3} className="text-center">
              <div>
                <Image
                  style={imgStyle}
                  src={IMAGE_RESOURCE.candidateSection.candidateThree}
                  thumbnail
                />
              </div>
              <div>{t("homepage.candidate_process.three")}</div>
            </Col>
            <Col xs={12} md={3} className="text-center">
              <div>
                <Image
                  style={imgStyle}
                  src={IMAGE_RESOURCE.candidateSection.candidateFour}
                  thumbnail
                />
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
