import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import { withTranslation } from "react-i18next";
import UserFeatureImage from "../assets/images/feature/user_feature.jpg";

export class ForUserFeature extends React.Component {
  render() {
    const { t } = this.props;

    return (
      <React.Fragment>
        <Container fluid className="bg-offwhite">
          <Container className="padding-bottom-120">
            <Row className="padding-bottom-30">
              <Col md={2}></Col>
              <Col className="text-center">
                <h1 className="title">
                  {t("homepage.user_feature_section.title")}
                </h1>
                <div className="title-underline"></div>
                <p className="title-subtitle text-red">User My Page Features</p>
                <p className="title-description text-orange">
                  {t("homepage.user_feature_section.title-description")}
                </p>
              </Col>
              <Col md={2}></Col>
            </Row>
            <Row>
              <Col md={1}></Col>
              <Col>
                <div className="feature-list">
                  <div className="feature-list-title text-aqua">
                    {t("homepage.user_feature_section.feature-list.one.title")}
                  </div>
                  <div className="feature-list-subtitle">
                    {t(
                      "homepage.user_feature_section.feature-list.one.subtitle"
                    )}
                  </div>
                  <div className="feature-list-title text-aqua">
                    {t("homepage.user_feature_section.feature-list.one.title")}
                  </div>
                  <div className="feature-list-subtitle">
                    {t(
                      "homepage.user_feature_section.feature-list.one.subtitle"
                    )}
                  </div>
                  <div className="feature-list-title text-aqua">
                    {t("homepage.user_feature_section.feature-list.one.title")}
                  </div>
                  <div className="feature-list-subtitle">
                    {t(
                      "homepage.user_feature_section.feature-list.one.subtitle"
                    )}
                  </div>
                  <div className="feature-list-title text-aqua">
                    {t("homepage.user_feature_section.feature-list.one.title")}
                  </div>
                  <div className="feature-list-subtitle">
                    {t(
                      "homepage.user_feature_section.feature-list.one.subtitle"
                    )}
                  </div>
                  <div className="feature-list-title text-aqua">
                    {t("homepage.user_feature_section.feature-list.one.title")}
                  </div>
                  <div className="feature-list-subtitle">
                    {t(
                      "homepage.user_feature_section.feature-list.one.subtitle"
                    )}
                  </div>
                  <div className="feature-list-title text-aqua">
                    {t("homepage.user_feature_section.feature-list.one.title")}
                  </div>
                  <div className="feature-list-subtitle">
                    {t(
                      "homepage.user_feature_section.feature-list.one.subtitle"
                    )}
                  </div>
                </div>
              </Col>
              <Col>
                <Image src={UserFeatureImage} fluid />
              </Col>
              <Col md={1}></Col>
            </Row>
          </Container>
        </Container>
      </React.Fragment>
    );
  }
}

export default withTranslation()(ForUserFeature);
