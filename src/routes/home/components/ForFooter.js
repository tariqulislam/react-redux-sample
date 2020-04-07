import React from "react";
import { Container, Image } from "react-bootstrap";
import { withTranslation } from "react-i18next";
import WhiteLogo from "../assets/images/logo_white.png";

export class ForUserFeature extends React.Component {
  render() {
    const { t } = this.props;

    let contentLogo = {
      width: "130px",
    };

    let footerContainer = {
      backgroundColor: "#E60039",
      textAlign: "center",
      paddingBottom: "75px",
      paddingTop: "75px",
      color: "white",
    };

    let link = {
      textDecoration: "none",
      color: "white",
      padding: "0 10px",
    };

    return (
      <React.Fragment>
        <Container fluid style={footerContainer}>
          <div className="text-center">
            <p>{t("homepage.footer_section.title")}</p>
            <Image style={contentLogo} src={WhiteLogo} />
            <p style={{ marginTop: "60px" }}>
              <a style={link} href="/index.php">
                {t("homepage.footer_section.link-list-one.one")}
              </a>
              <a style={link} href="/company/top.php">
                {t("homepage.footer_section.link-list-one.two")}
              </a>
              <a style={link} href="/user/top.php">
                {t("homepage.footer_section.link-list-one.three")}
              </a>
              <a style={link} href="/registration_support/top.php">
                {t("homepage.footer_section.link-list-one.four")}
              </a>
              <a style={link} href="/specific_skills.php">
                {t("homepage.footer_section.link-list-one.five")}
              </a>
            </p>
            <p style={{ marginTop: "30px" }}>
              <a style={link} href="/operating_company.php">
                {" "}
                {t("homepage.footer_section.link-list-two.one")}
              </a>
              <a style={link} href="/terms_of_service.php">
                {" "}
                {t("homepage.footer_section.link-list-two.two")}
              </a>
              <a style={link} href="/privacy_policy.php">
                {t("homepage.footer_section.link-list-two.three")}
              </a>
            </p>
            <p style={{ marginTop: "50px" }}>
              {t("homepage.footer_section.copyright")}
            </p>
          </div>
        </Container>
      </React.Fragment>
    );
  }
}

export default withTranslation()(ForUserFeature);
