import React, { Component } from "react";
import { push } from "react-router-redux";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import {
  showParagraphInfo,
  hideParagraphInfo,
  getAllPostForFromApi
} from "../../reducers/Home/home.reducer";
import { Row, Col, Image } from "react-bootstrap";
import GroupOnDevice from "./assets/images/group-on-devices.jpg";
import { withTranslation } from "react-i18next";
import RegSection from "./components/RegSection";
import ForCandidate from "./components/ForCandidate";
import InitialSection from "./components/InitialSection";

class Home extends Component {
  render() {
    let bannerStyle = {
      width: "100%"
    };
    const { t } = this.props;
    const selectedLanguage = localStorage.getItem("language");
    return (
      <>
        <Row>
          <Col md={12}>
            <Image style={bannerStyle} src={GroupOnDevice} fluid />
          </Col>
        </Row>
        <Row>
          <Col style={{ padding: "30px" }} md={12}>
            <ForCandidate />
          </Col>
        </Row>
        <Row style={{ padding: "40px" }}>
          <InitialSection selectedLanguage={selectedLanguage} />
        </Row>
        <Row style={{ padding: "40px" }}>
          <RegSection />
        </Row>
      </>
    );
  }
}

const mapStateToProps = state => ({
  showInfo: state.home.showInfo
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      showParagraphInfo,
      hideParagraphInfo,
      getAllPostForFromApi,
      goToAboutPage: () => push("/about-us")
    },
    dispatch
  );

export default withTranslation()(
  connect(mapStateToProps, mapDispatchToProps)(Home)
);
