import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import companyImg from "../assets/images/regsection/company.jpg";
import candidateImg from "../assets/images/regsection/candidate.jpg";
import supportImg from "../assets/images/regsection/support.png";
import { withTranslation } from "react-i18next";
import { Link } from "react-router-dom";

export class RegSection extends React.Component {
  //   candidateOnClick = () => {
  //       debugger
  //      this.props.history.push('/candidate/register')
  //   }

  //   companyOnClick = () => {
  //       debugger
  //       this.props.history.push('/company/register')
  //   }

  render() {
    const { t } = this.props;
    let companyRegStyle = {
      backgroundSize: "cover",
      paddingTop: "70px",
      backgroundImage: `url(${companyImg})`,
      height: "200px",
    };

    let candidateRegStyle = {
      backgroundSize: "cover",
      paddingTop: "70px",
      backgroundImage: `url(${candidateImg})`,
      height: "200px",
    };

    let supportRegStyle = {
      backgroundSize: "cover",
      backgroundImage: `url(${supportImg})`,
      paddingTop: "70px",
      height: "200px",
    };
    return (
      <React.Fragment>
        <Container>
          <Row>
            <Col xs={12} md={4}>
              <Card className="text-center">
                <Card.Header>
                  {t("homepage.regsection.for_company_title")}
                </Card.Header>
                <Card.Body style={companyRegStyle}>
                  <Link
                    to={"/company/register"}
                    className="btn btn-primary"
                    variant="primary"
                  >
                    {t("homepage.regsection.for_company_button")}
                  </Link>
                </Card.Body>
              </Card>
            </Col>
            <Col xs={12} md={4}>
              <Card className="text-center">
                <Card.Header>
                  {t("homepage.regsection.for_user_title")}
                </Card.Header>
                <Card.Body style={candidateRegStyle}>
                  <Link
                    className="btn btn-info"
                    to={"/candidate/register"}
                    variant="primary"
                  >
                    {t("homepage.regsection.for_candidate_button")}
                  </Link>
                </Card.Body>
              </Card>
            </Col>
            <Col xs={12} md={4}>
              <Card className="text-center">
                <Card.Header>
                  {t("homepage.regsection.for_support_title")}
                </Card.Header>
                <Card.Body style={supportRegStyle}>
                  <Link
                    className="btn btn-success"
                    to={"/company/register"}
                    variant="primary"
                  >
                    {t("homepage.regsection.for_support_button")}
                  </Link>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </React.Fragment>
    );
  }
}

export default withTranslation()(RegSection);
