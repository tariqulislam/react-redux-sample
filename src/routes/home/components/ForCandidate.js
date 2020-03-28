import React from 'react'
import CandidateOne from '../assets/images/candidate/one.png'
import CandidateTwo from '../assets/images/candidate/two.png'
import CandidateThree from '../assets/images/candidate/three.png'
import CandidateFour from '../assets/images/candidate/four.png'
import { Row, Col, Image } from 'react-bootstrap'
import {withTranslation} from 'react-i18next'

export class ForCandidate extends React.Component {
    render() {
        const {t} = this.props
        let imgStyle = {
            height: '220px'
        }
        let paraStyle = {
            textAlign: 'center'
        }
        let designFooterNote = {
            backgroundColor: "green",
            color: "white",
            height: "50px",
            fontSize: "30px",
            paddingLeft: "20px",
        }

        let designCounterNote = {
           
                backgroundColor: "#de5383",
                color: "white",
                height: "150px",
                fontSize: "30px",
                paddingLeft: "20px",
            
        }

        let DayTimeStyle = {
            float: 'left',
            border: '2px solid white',
            padding: '5px',
            marginTop: '5px',
            float: 'left'
        }
        return (
            <React.Fragment>
                <Row style={{ textAlign: 'center' }}>
                    <Col md={12}>
                    <h1>{t('homepage.candidate_process.title')}</h1>
                    </Col>
                   
                    </Row>
                <Row>
                <Col md={3}>
                    <Image style={imgStyle} src={CandidateOne} thumbnail />
                    <div style={paraStyle}>{t('homepage.candidate_process.one')}</div>
                </Col>
                <Col md={3}>
                    <div> <Image style={imgStyle} src={CandidateTwo} thumbnail /></div>
                    <div style={paraStyle}>{t('homepage.candidate_process.two')}</div>
                </Col>
                <Col md={3}>
                    <div><Image style={imgStyle} src={CandidateThree} thumbnail /></div>
                    <div style={paraStyle}>{t('homepage.candidate_process.three')}</div>
                </Col>
                <Col md={3}>
                    <div><Image style={imgStyle} src={CandidateFour} thumbnail /></div>
                    <div style={paraStyle}>{t('homepage.candidate_process.four')}</div>
                </Col>
                </Row>
                <Row style={{paddingLeft: '15px', paddingRight: '15px'}}>
                    <Col style={designFooterNote} md={12}>
                        <div>{t('homepage.candidate_process.notes')}</div>
                    </Col>
                </Row>
                <Row style={{paddingLeft: '15px', paddingRight: '15px' }} >
                    <Col style={designCounterNote} md={12}>
                      <Row>
                          <div style={DayTimeStyle}>2020</div>
                          <div style={DayTimeStyle}>{t('homepage.counter_section.year')}</div>
                          <div style={DayTimeStyle}>03</div>
                          <div style={DayTimeStyle}>{t('homepage.counter_section.month')}</div>
                          <div style={DayTimeStyle}>28</div>
                          <div style={DayTimeStyle}>{t('homepage.counter_section.day')}</div>
                      </Row>
                      <Row>
                          <div style={DayTimeStyle}>2020</div>
                          <div style={DayTimeStyle}>{t('homepage.counter_section.candidate_register_for')}</div>
                          <div style={DayTimeStyle}>03</div>
                          <div style={DayTimeStyle}>{t('homepage.counter_section.person')}</div>
                          <div style={DayTimeStyle}>28</div>
                          <div style={DayTimeStyle}>{t('homepage.counter_section.company_register_for')}</div>
                      </Row>
                    </Col>
                </Row>
            </React.Fragment>
        )
    }
}

export default withTranslation()(ForCandidate)