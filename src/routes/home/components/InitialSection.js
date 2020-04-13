import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import { withTranslation } from "react-i18next";
import IMAGE_RESOURCE from "../assets/images/ImageResource";

export class InitialSection extends React.Component {
  render() {
    const { t, selectedLanguage } = this.props;
    let imgForHowItworks = "";
    if (selectedLanguage === "en") {
      imgForHowItworks = IMAGE_RESOURCE.initialSection.howItworkEn;
    }

    if (selectedLanguage === "jp") {
      imgForHowItworks = IMAGE_RESOURCE.initialSection.howItworkJp;
    }
    return (
      <React.Fragment>
        <Container className="padding-bottom-120">
          <Row className="padding-bottom-30">
            <Col xs={12} md={2}></Col>
            <Col xs={12} md={8} className="text-center">
              <h1 className="title">{t("homepage.initial_section.title")}</h1>
              <div className="title-underline"></div>
              <p className="title-subtitle text-red">What is GHRN?</p>
            </Col>
            <Col xs={12} md={2}></Col>
          </Row>
          <Row>
            <Col xs={12} md={1}></Col>
            <Col xs={12} md={5}>
              <p>{t("homepage.initial_section.leftMsg.one")}</p>
              <p>{t("homepage.initial_section.leftMsg.two")}</p>
              <p>{t("homepage.initial_section.leftMsg.three")}</p>
              <p>{t("homepage.initial_section.leftMsg.four")}</p>
              <p>{t("homepage.initial_section.leftMsg.five")}</p>
              <p>{t("homepage.initial_section.leftMsg.six")}</p>
              <p>{t("homepage.initial_section.leftMsg.seven")}</p>
            </Col>
            <Col xs={12} md={5}>
              <Image src={imgForHowItworks} fluid />
            </Col>
            <Col xs={12} md={1}></Col>
          </Row>
        </Container>
      </React.Fragment>
    );
  }
}

export default withTranslation()(InitialSection);
