import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import { withTranslation } from "react-i18next";
import IMAGE_RESOURCE from "../assets/images/ImageResource";

export class ForSyupanFeature extends React.Component {
  render() {
    const { t } = this.props;

    let titleBlock = {
      backgroundColor: "#E60039",
      fontSize: "16px",
      color: "WHITE",
      fontWeight: "BOLD",
      paddingTop: "10px",
      paddingBottom: "10px",
      textAlign: "center",
    };

    let featureImage = {
      width: "380px",
      height: "auto",
      margin: "30px",
    };

    let contentBlock = {
      marginBottom: "40px",
    };

    let grayBlock = {
      fontWeight: "BOLD",
      backgroundColor: "#EFEFEF",
      borderRadius: "5px",
      display: "block",
      padding: "20px",
    };

    return (
      <React.Fragment>
        <Container className="padding-bottom-120">
          <Row className="padding-bottom-30">
            <Col xs={12} md={2}></Col>
            <Col xs={12} md={8} className="text-center">
              <h1 className="title">
                {t("homepage.syupan_feature_section.title")}
              </h1>
              <div className="title-underline"></div>
              <p className="title-subtitle text-red">
                {t("homepage.syupan_feature_section.title-subtitle")}
              </p>
            </Col>
            <Col xs={12} md={2}></Col>
          </Row>
          <Row>
            <Col xs={12} md={2}></Col>
            <Col xs={12} md={8}>
              <div style={contentBlock}>
                <div style={titleBlock}>
                  {t("homepage.syupan_feature_section.feature.one.title")}
                </div>
                <div className="text-center">
                  <Image
                    style={featureImage}
                    src={IMAGE_RESOURCE.syupanFeatureSection.featureOne}
                  />
                </div>
                <div className="syupan-feature-content">
                  <p>
                    {t(
                      "homepage.syupan_feature_section.feature.one.description-one"
                    )}
                  </p>
                  <p>
                    {t(
                      "homepage.syupan_feature_section.feature.one.description-two"
                    )}
                  </p>
                </div>
              </div>
              <div style={contentBlock}>
                <div style={titleBlock}>
                  {t("homepage.syupan_feature_section.feature.second.title")}
                </div>
                <div className="text-center">
                  <Image
                    style={featureImage}
                    src={IMAGE_RESOURCE.syupanFeatureSection.featureTwo}
                  />
                </div>
                <div className="syupan-feature-content">
                  <p>
                    {t(
                      "homepage.syupan_feature_section.feature.second.description-one"
                    )}
                  </p>
                  <p>
                    {t(
                      "homepage.syupan_feature_section.feature.second.description-two"
                    )}
                  </p>
                  <p>
                    {t(
                      "homepage.syupan_feature_section.feature.second.description-three"
                    )}
                  </p>
                  <p>
                    {t(
                      "homepage.syupan_feature_section.feature.second.description-four"
                    )}
                  </p>
                  <p style={grayBlock}>
                    {t(
                      "homepage.syupan_feature_section.feature.second.description-box"
                    )}
                  </p>
                  <p>
                    {t(
                      "homepage.syupan_feature_section.feature.second.description-five"
                    )}
                  </p>
                </div>
              </div>
              <div style={contentBlock}>
                <div style={titleBlock}>
                  {t("homepage.syupan_feature_section.feature.third.title")}
                </div>
                <div className="text-center">
                  <Image
                    style={featureImage}
                    src={IMAGE_RESOURCE.syupanFeatureSection.featureThree}
                  />
                </div>
                <div className="syupan-feature-content">
                  <p>
                    {t(
                      "homepage.syupan_feature_section.feature.third.description-one"
                    )}
                  </p>
                </div>
              </div>
            </Col>
            <Col xs={12} md={2}></Col>
          </Row>
        </Container>
      </React.Fragment>
    );
  }
}

export default withTranslation()(ForSyupanFeature);
