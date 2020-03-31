import React from "react";
import { Card, Button, Col } from "react-bootstrap";
import companyImg from '../assets/images/regsection/company.jpg'
import candidateImg from '../assets/images/regsection/candidate.jpg'
import supportImg from '../assets/images/regsection/support.png'
import { withTranslation } from 'react-i18next'
import { withRouter, Link } from 'react-router-dom'

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
    const { t } = this.props
    let companyRegStyle = {
      backgroundSize: 'cover',
      paddingTop: '70px',
      backgroundImage: `url(${companyImg})`,
      height: '200px'
    };

    let candidateRegStyle = {
      backgroundSize: 'cover',
      paddingTop: '70px',
      backgroundImage: `url(${candidateImg})`,
      height: '200px'
    }

    let supportRegStyle = {
      backgroundSize: 'cover',
      backgroundImage: `url(${supportImg})`,
      paddingTop: '70px',
      height: '200px'
    }
    return (
      <React.Fragment>
        <Col md={1}></Col>
        <Col md={3}>
          <Card className="text-center">
            <Card.Header>{t('homepage.regsection.for_company_title')}</Card.Header>
            <Card.Body style={companyRegStyle}>
              {/* <Card.Title>Special title treatment</Card.Title>
              <Card.Text>
               
              </Card.Text> */}
              <Link to={'/company/register'} className="btn btn-primary" variant="primary">{t('homepage.regsection.for_company_button')}</Link>
            </Card.Body>
            <Card.Footer className="text-muted"></Card.Footer>
          </Card>
        </Col>
        <Col md={3}>
          <Card className="text-center">
            <Card.Header>{t('homepage.regsection.for_user_title')}</Card.Header>
            <Card.Body style={candidateRegStyle}>
              {/* <Card.Title>Special title treatment</Card.Title>
              <Card.Text>
                With supporting text below as a natural lead-in to additional
                content.
              </Card.Text> */}
              <Link className="btn btn-primary" to={'/candidate/register'} variant="primary">{t('homepage.regsection.for_candidate_button')}</Link>
            </Card.Body>
            <Card.Footer className="text-muted"></Card.Footer>
          </Card>
        </Col>
        <Col md={3}>
          <Card className="text-center">
            <Card.Header>{t('homepage.regsection.for_support_title')}</Card.Header>
            <Card.Body style={supportRegStyle}>
              <Link className="btn btn-primary" to={'/company/register'} variant="primary">{t('homepage.regsection.for_support_button')}</Link>
            </Card.Body>
            <Card.Footer className="text-muted"></Card.Footer>
          </Card>
        </Col>
        <Col md={1}></Col>
      </React.Fragment>
    );
  }
}

export default withTranslation()(RegSection);
