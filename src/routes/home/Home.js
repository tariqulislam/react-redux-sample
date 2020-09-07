import React, {Component} from "react";
import {Image} from "react-bootstrap";
import {withTranslation} from "react-i18next";
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
import IMAGE_RESOURCE from "./assets/images/ImageResource";

class Home extends Component {
    render() {
        let bannerStyle = {
            width: "100%",
        };
        const selectedLanguage = localStorage.getItem("language");
        return (
            <>
                <div>
                    <Image
                        style={bannerStyle}
                        src={IMAGE_RESOURCE.bannerSection.banner}
                        fluid
                    />
                </div>
                <ForCandidate/>
                <InitialSection selectedLanguage={selectedLanguage}/>
                <RegSection/>
                <ForCompanyFeature/>
                <ForUserFeature/>
                <ForSpecificSkill/>
                <ForSyupanFeature/>
                <ForUserAction/>
                <ForContact/>
                <ForFooter/>
            </>
        );
    }
}

export default withTranslation()(Home)
