import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import { withTranslation } from "react-i18next";
import { withRouter, Link } from "react-router-dom";

export class ForSpecificSkill extends React.Component {
  render() {
    const { t } = this.props;

    return (
      <React.Fragment>
        <Container>
          <Row>
            <Col style={{ textAlign: "center" }}>
              <h1>What is "specific skill"?</h1>
              <h3>With “specific skill”</h3>
              <p>
                "Specific Skills" is a new status of residence newly established
                in April 2019. Even if efforts are made to improve productivity
                and secure domestic human resources, it is limited to 14 fields
                (specific industrial fields) where it is difficult to secure
                human resources. Acceptance was accepted.
              </p>
            </Col>
          </Row>
        </Container>
      </React.Fragment>
    );
  }
}

export default withTranslation()(ForSpecificSkill);
