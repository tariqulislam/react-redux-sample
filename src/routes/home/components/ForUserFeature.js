import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import { withTranslation } from "react-i18next";
import UserFeatureImage from "../assets/images/feature/user_feature.jpg";
import { withRouter, Link } from "react-router-dom";

export class ForUserFeature extends React.Component {
  render() {
    const { t } = this.props;

    return (
      <React.Fragment>
        <Container fluid className="bg-offwhite padding-bottom-120">
          <Container>
            <Row className="padding-bottom-30">
              <Col className="text-center">
                <h1 className="title">What you can do with My Company Page</h1>
                <div className="title-underline"></div>
                <p className="title-subtitle text-red">User My Page Features</p>
                <p className="title-description text-orange">
                  My page is created when you register.
                </p>
              </Col>
            </Row>
            <Row>
              <Col>
                <div className="feature-list">
                  <div className="feature-list-title text-aqua">
                    Shupan News
                  </div>
                  <div className="feature-list-subtitle">
                    You can browse news related to specific skills.
                  </div>
                  <div className="feature-list-title text-aqua">
                    Shupan News
                  </div>
                  <div className="feature-list-subtitle">
                    You can browse news related to specific skills.
                  </div>
                  <div className="feature-list-title  text-aqua">
                    Shupan News
                  </div>
                  <div className="feature-list-subtitle">
                    You can browse news related to specific skills.
                  </div>
                  <div className="feature-list-title  text-aqua">
                    Shupan News
                  </div>
                  <div className="feature-list-subtitle">
                    You can browse news related to specific skills.
                  </div>
                  <div className="feature-list-title  text-aqua">
                    Shupan News
                  </div>
                  <div className="feature-list-subtitle">
                    You can browse news related to specific skills.
                  </div>
                  <div className="feature-list-title  text-aqua">
                    Shupan News
                  </div>
                  <div className="feature-list-subtitle">
                    You can browse news related to specific skills.
                  </div>
                  <div className="feature-list-title  text-aqua">
                    Shupan News
                  </div>
                  <div className="feature-list-subtitle">
                    You can browse news related to specific skills.
                  </div>
                </div>
              </Col>
              <Col>
                <Image src={UserFeatureImage} fluid />
              </Col>
            </Row>
          </Container>
        </Container>
      </React.Fragment>
    );
  }
}

export default withTranslation()(ForUserFeature);
