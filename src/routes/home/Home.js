import React, {Component} from 'react'
import { push } from 'react-router-redux'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import {
    showParagraphInfo,
    hideParagraphInfo,
    getAllPostForFromApi
} from '../../reducers/Home/home.reducer'
import { Row, Col, Image } from 'react-bootstrap'
import GroupOnDevice from './assets/images/group-on-devices.jpg'
import {withTranslation} from 'react-i18next'


class Home extends Component {
   render () {
       let bannerStyle = {
           width: "100%"
       }
       const {t} = this.props
       return (  
        <>
         <Row>
             <Col xs={12}>
                  <Image style={bannerStyle} src={GroupOnDevice} fluid />
             </Col>
         </Row>
         <Row>
             <Col xs={12}>
                <Col xs={4}>
                </Col>
                <Col xs={4}>
                    <h1>{t('homepage.initial_section.whatsGHRN')}</h1>
                </Col>
                <Col xs={4}>
                </Col>
             </Col>
             <Col xs={12}>
                 <Col xs={2}></Col>
                 <Col xs={4}>
                    <Col xs={6}>
                      {t('')}
                    </Col>
                    <Col xs={6}>

                    </Col>

                 </Col>
                 <Col xs={2}></Col>
             </Col>
            
         </Row>

        </>
       
       )
   }
}

const mapStateToProps = (state) => ({
    showInfo: state.home.showInfo
})


const mapDispatchToProps = dispatch => bindActionCreators({
    showParagraphInfo,
    hideParagraphInfo,
    getAllPostForFromApi,
    goToAboutPage: () => push('/about-us')
}, dispatch)

export default withTranslation()(connect(
    mapStateToProps,
    mapDispatchToProps
)(Home))