import React, { Component } from "react";
import { push } from "react-router-redux";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import {
  showParagraphInfo,
  hideParagraphInfo,
  getAllPostForFromApi,
} from "../../reducers/Home/home.reducer";
import { Image } from "react-bootstrap";
import GroupOnDevice from "./assets/images/group-on-devices.jpg";
import { withTranslation } from "react-i18next";
import RegSection from "./components/RegSection";
import ForCandidate from "./components/ForCandidate";
import ForCompanyFeature from "./components/ForCompanyFeature";
import ForSpecificSkill from "./components/ForSpecificSkill";
import ForUserFeature from "./components/ForUserFeature";
import InitialSection from "./components/InitialSection";
import ForSyupanFeature from "./components/ForSyupanFeature";
import ForUserAction from "./components/ForUserAction";
import ForContact from "./components/ForContact";
import ForFooter from "./components/ForFooter";
import "./assets/home.scss";

class Home extends Component {
  render() {
    let bannerStyle = {
      width: "100%",
    };
    const selectedLanguage = localStorage.getItem("language");
    return (
      <>
        <div>
          <Image style={bannerStyle} src={GroupOnDevice} fluid />
        </div>
        <ForCandidate />
        <InitialSection selectedLanguage={selectedLanguage} />
        <RegSection />
        <ForCompanyFeature />
        <ForUserFeature />
        <ForSpecificSkill />
        <ForSyupanFeature />
        <ForUserAction />
        <ForContact />
        <ForFooter />
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  showInfo: state.home.showInfo,
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      showParagraphInfo,
      hideParagraphInfo,
      getAllPostForFromApi,
      goToAboutPage: () => push("/about-us"),
    },
    dispatch
  );

export default withTranslation()(
  connect(mapStateToProps, mapDispatchToProps)(Home)
);
