import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import { withTranslation } from "react-i18next";
import IMAGE_RESOURCE from "../assets/images/ImageResource";
export class ForCompanyFeature extends React.Component {
  render() {
    const { t } = this.props;

    return (
      <React.Fragment>
        <Container className="padding-bottom-120">
          <Row className="padding-bottom-30">
            <Col md={2}></Col>
            <Col className="text-center">
              <h1 className="title">
                {t("homepage.company_feature_section.title")}
              </h1>
              <div className="title-underline"></div>
              <p className="title-subtitle text-red">
                Company My Page Features
              </p>
              <p className="title-description text-orange">
                {t("homepage.company_feature_section.title-description")}
              </p>
            </Col>
            <Col md={2}></Col>
          </Row>
          <Row>
            <Col xs={12} md={1}></Col>
            <Col xs={12} md={5}>
              <Image
                src={IMAGE_RESOURCE.companyFeatureSection.featureImage}
                fluid
              />
            </Col>
            <Col xs={12} md={5}>
              <div className="feature-list">
                <div className="feature-list-title text-blue">
                  {t("homepage.company_feature_section.feature-list.one.title")}
                </div>
                <div className="feature-list-subtitle">
                  {t(
                    "homepage.company_feature_section.feature-list.one.subtitle"
                  )}
                </div>
                <div className="feature-list-title text-blue">
                  {t("homepage.company_feature_section.feature-list.one.title")}
                </div>
                <div className="feature-list-subtitle">
                  {t(
                    "homepage.company_feature_section.feature-list.one.subtitle"
                  )}
                </div>
                <div className="feature-list-title text-blue">
                  {t("homepage.company_feature_section.feature-list.one.title")}
                </div>
                <div className="feature-list-subtitle">
                  {t(
                    "homepage.company_feature_section.feature-list.one.subtitle"
                  )}
                </div>
                <div className="feature-list-title text-blue">
                  {t("homepage.company_feature_section.feature-list.one.title")}
                </div>
                <div className="feature-list-subtitle">
                  {t(
                    "homepage.company_feature_section.feature-list.one.subtitle"
                  )}
                </div>
                <div className="feature-list-title text-blue">
                  {t("homepage.company_feature_section.feature-list.one.title")}
                </div>
                <div className="feature-list-subtitle">
                  {t(
                    "homepage.company_feature_section.feature-list.one.subtitle"
                  )}
                </div>
                <div className="feature-list-title text-blue">
                  {t("homepage.company_feature_section.feature-list.one.title")}
                </div>
                <div className="feature-list-subtitle">
                  {t(
                    "homepage.company_feature_section.feature-list.one.subtitle"
                  )}
                </div>
              </div>
            </Col>
            <Col xs={12} md={1}></Col>
          </Row>
        </Container>
      </React.Fragment>
    );
  }
}

export default withTranslation()(ForCompanyFeature);
