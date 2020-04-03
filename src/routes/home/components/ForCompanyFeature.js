import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import { withTranslation } from "react-i18next";
import FeatureImage from "../assets/images/feature/feature.jpg";
export class ForCompanyFeature extends React.Component {
  render() {
    const { t } = this.props;

    return (
      <React.Fragment>
        <Container className="padding-bottom-120">
          <Row className="padding-bottom-30">
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
          </Row>
          <Row>
            <Col>
              <Image src={FeatureImage} fluid />
            </Col>
            <Col>
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
          </Row>
        </Container>
      </React.Fragment>
    );
  }
}

export default withTranslation()(ForCompanyFeature);
