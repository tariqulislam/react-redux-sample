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
import howItworkEn from './assets/images/en/howitworks_en.png'
import howItworkJp from './assets/images/jp/howitworks_jp.png'

import ForCandidate from './components/ForCandidate'
import ForCompany from './components/ForCompany'
import classes from './assets/home.scss'

class Home extends Component {
   render () {
       let bannerStyle = {
           width: "100%"
       }
       const {t} = this.props
       const selectedLanguage = localStorage.getItem('language')
       let imgForHowItworks = '';
       if (selectedLanguage === 'en') {
            imgForHowItworks = howItworkEn
       }

       if (selectedLanguage === 'jp') {
           imgForHowItworks = howItworkJp
       }

       return (  
        <>
         <Row>
             <Col xs={12}>
                  <Image style={bannerStyle} src={GroupOnDevice} fluid />
             </Col>
         </Row>
         <Row>
           <Col style={{padding: '30px'}} xs={12}>
                 <ForCandidate  />    
           </Col>
         </Row>
         <Row> 
             <Col style={{textAlign: 'center'}} xs={12}>
                    <h1>{t('homepage.initial_section.whatsGHRN')}</h1>
             </Col>
         </Row>
         <Row>
{/* 
                 <Col xs={5}>
                     <p>{t('homepage.initial_section.leftMsg.one')}</p>
                     <p>{t('homepage.initial_section.leftMsg.two')}</p>
                     <p>{t('homepage.initial_section.leftMsg.three')}</p>
                     <p>{t('homepage.initial_section.leftMsg.four')}</p>
                     <p>{t('homepage.initial_section.leftMsg.five')}</p>
                     <p>{t('homepage.initial_section.leftMsg.six')}</p>
                     <p>{t('homepage.initial_section.leftMsg.seven')}</p>
                 </Col>
                 <Col xs={5}>
                   <img src={imgForHowItworks}  className="img-responsive" />
                 </Col> */}
                
          
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