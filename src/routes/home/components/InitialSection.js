import React from "react";

import { Col, Image } from "react-bootstrap";
import { withTranslation } from "react-i18next";
import howItworkEn from '../assets/images/en/howitworks_en.png'
import howItworkJp from '../assets/images/jp/howitworks_jp.png'

export class InitialSection extends React.Component {
  render() {
    const { t, selectedLanguage } = this.props;
    let imgForHowItworks = '';
    if (selectedLanguage === 'en') {
         imgForHowItworks = howItworkEn
    }

    if (selectedLanguage === 'jp') {
        imgForHowItworks = howItworkJp
    }
    return (
      <React.Fragment>
        <Col style={{ textAlign: "center" }} md={12}>
          <h1>{t("homepage.initial_section.whatsGHRN")}</h1>
        </Col>

        <Col md={6}>
          <p>{t("homepage.initial_section.leftMsg.one")}</p>
          <p>{t("homepage.initial_section.leftMsg.two")}</p>
          <p>{t("homepage.initial_section.leftMsg.three")}</p>
          <p>{t("homepage.initial_section.leftMsg.four")}</p>
          <p>{t("homepage.initial_section.leftMsg.five")}</p>
          <p>{t("homepage.initial_section.leftMsg.six")}</p>
          <p>{t("homepage.initial_section.leftMsg.seven")}</p>
        </Col>
        <Col md={6}>
          <Image src={imgForHowItworks} fluid />
        </Col>
      </React.Fragment>
    );
  }
}

export default withTranslation()(InitialSection);
