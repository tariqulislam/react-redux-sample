import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { withTranslation } from "react-i18next";

export class ForContact extends React.Component {
  render() {
    const { t } = this.props;

    let title = {
      textAlign: "center",
      paddingTop: "10px",
      paddingBottom: "10px",
      color: "WHITE",
      fontSize: "24px",
      fontWeight: "BOLD",
      backgroundColor: "#E60039",
    };

    let contactFrom = {
      maxWidth: "400px",
      margin: "70px auto 0px",
    };
    let form = {
      border: "2px solid #D9D9D9",
      borderRadius: "5px",
      padding: "24px 16px 16px",
    };

    let formRequired = {
      backgroundColor: "RED",
      color: "WHITE",
      fontWeight: "BOLD",
      borderRadius: "5px",
      paddingLeft: "10px",
      paddingRight: "10px",
      fontSize: "10px",
      paddingTop: "2px",
      paddingBottom: "2px",
      marginLeft: "12px",
    };

    let submitBtn = {
      width: "152px",
      height: "50px",
      marginLeft: "10px",
      marginRight: "10px",
      fontSize: "20px",
      fontWeight: "BOLD",
      borderRadius: "5px",
      marginBottom: "10px",
      background: "linear-gradient(#FF9300,#EB5100)",
      borderColor: "#EB5100",
      color: "WHITE",
    };

    return (
      <React.Fragment>
        <Container className="padding-bottom-120">
          <Row>
            <Col>
              <div style={title}>{t("homepage.contact_section.title")}</div>
              <div style={contactFrom}>
                <p>{t("homepage.contact_section.title-description")}</p>

                <Form style={form}>
                  <Form.Group>
                    <Form.Label>
                      {t("homepage.contact_section.form-name-label")}
                      <span style={formRequired}>
                        {t("homepage.contact_section.form-required")}
                      </span>
                    </Form.Label>
                    <Form.Control type="text" placeholder="Name" />
                  </Form.Group>
                  <Form.Group>
                    <Form.Label>
                      {t("homepage.contact_section.form-company-label")}
                      <span style={formRequired}>
                        {t("homepage.contact_section.form-required")}
                      </span>
                    </Form.Label>
                    <Form.Control type="text" placeholder="Company Name" />
                  </Form.Group>
                  <Form.Group>
                    <Form.Label>
                      {t("homepage.contact_section.form-email-label")}
                      <span style={formRequired}>
                        {t("homepage.contact_section.form-required")}
                      </span>
                    </Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                  </Form.Group>
                  <Form.Group>
                    <Form.Label>
                      {t("homepage.contact_section.form-description-label")}
                      <span style={formRequired}>
                        {t("homepage.contact_section.form-required")}
                      </span>
                    </Form.Label>
                    <Form.Control as="textarea" rows="7" />
                  </Form.Group>
                  <div className="text-center">
                    <Button style={submitBtn}>
                      {t("homepage.contact_section.form-btn")}
                    </Button>
                  </div>
                </Form>
              </div>
            </Col>
          </Row>
        </Container>
      </React.Fragment>
    );
  }
}

export default withTranslation()(ForContact);
