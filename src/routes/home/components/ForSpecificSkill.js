import React from "react";
import { Container, Row, Col, Image, Button } from "react-bootstrap";
import { withTranslation } from "react-i18next";
import { withRouter, Link } from "react-router-dom";

export class ForSpecificSkill extends React.Component {
  render() {
    const { t } = this.props;

    return (
      <React.Fragment>
        <Container fluid className="bg-offwhite">
          <Container className="padding-bottom-120">
            <Row className="padding-bottom-30">
              <Col md={1}></Col>
              <Col className="text-center">
                <h1 className="title">
                  {t("homepage.specific_skill_section.title")}
                </h1>
                <div className="title-underline"></div>
                <p className="title-subtitle text-red">
                  {t("homepage.specific_skill_section.title-subtitle")}
                </p>
                <p className="title-description">
                  {t("homepage.specific_skill_section.title-description")}
                </p>
              </Col>
              <Col md={1}></Col>
            </Row>
            <Row>
              <Col md={1}></Col>
              <Col>
                <div
                  className="bg-lightwhite"
                  style={{ padding: "20px", marginBottom: "100px" }}
                >
                  <p>{t("homepage.specific_skill_section.first-content")}</p>
                  <p>{t("homepage.specific_skill_section.second-content")}</p>
                </div>
                <div className="text-center">
                  <Button variant="danger">
                    {t("homepage.specific_skill_section.action-btn")}
                  </Button>
                </div>
              </Col>
              <Col md={1}></Col>
            </Row>
          </Container>
        </Container>
      </React.Fragment>
    );
  }
}

export default withTranslation()(ForSpecificSkill);
