import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import { withTranslation } from "react-i18next";
import FeatureImage from "../assets/images/feature/feature.jpg";
import { withRouter, Link } from "react-router-dom";

export class ForCompanyFeature extends React.Component {
  render() {
    const { t } = this.props;

    return (
      <React.Fragment>
        <Container>
          <Row>
            <Col style={{ textAlign: "center" }}>
              <h1>What you can do with My Company Page</h1>
              <h3>Company My Page Features</h3>
              <h4>My page is created when you register.</h4>
            </Col>
          </Row>
          <Row>
            <Col>
              <Image src={FeatureImage} fluid />
            </Col>
            <Col>
              <ul>
                <li>
                  <h3>Shupan News</h3>
                  <p>You can browse news related to specific skills.</p>
                </li>
                <li>
                  <h3>Shupan News</h3>
                  <p>You can browse news related to specific skills.</p>
                </li>
                <li>
                  <h3>Shupan News</h3>
                  <p>You can browse news related to specific skills.</p>
                </li>
                <li>
                  <h3>Shupan News</h3>
                  <p>You can browse news related to specific skills.</p>
                </li>
                <li>
                  <h3>Shupan News</h3>
                  <p>You can browse news related to specific skills.</p>
                </li>
                <li>
                  <h3>Shupan News</h3>
                  <p>You can browse news related to specific skills.</p>
                </li>
              </ul>
            </Col>
          </Row>
        </Container>
      </React.Fragment>
    );
  }
}

export default withTranslation()(ForCompanyFeature);
