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



class Home extends Component {
   render () {
       let bannerStyle = {
           width: "100%"
       }
       return (  
        <>
         <Row>
             <Col xs={12}>
                  <Image style={bannerStyle} src={GroupOnDevice} fluid />
             </Col>
         </Row>
         <Row>
             <Col xs={12}>
                
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

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Home)