import React from 'react'
import CandidateOne from '../assets/images/candidate/one.png'
import CandidateTwo from '../assets/images/candidate/two.png'
import CandidateThree from '../assets/images/candidate/three.png'
import CandidateFour from '../assets/images/candidate/four.png'
import { Row, Col, Image } from 'react-bootstrap'
import {withTranslation} from 'react-i18next'

export class ForCompany extends React.Component {
    render() {
        const {t} = this.props
        let imgStyle = {
            height: '220px'
        }
        let paraStyle = {
            textAlign: 'center'
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
            </React.Fragment>
        )
    }
}

export default withTranslation()(ForCompany)