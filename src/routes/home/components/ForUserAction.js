import React from "react";
import {Container, Row, Col, Image, Button} from "react-bootstrap";
import {withTranslation} from "react-i18next";
import IMAGE_RESOURCE from "../assets/images/ImageResource";
import {Redirect} from "react-router";

export class ForUserAction extends React.Component {
    render() {
        const {t} = this.props;

        let userCard = {
            display: "block",
            backgroundColor: "#F2EFE4",
            paddingBottom: "10px",
            margin: "0px auto 20px",
            overflow: "hidden",
        };
        let cardTitle = {
            textAlign: "center",
            paddingTop: "7px",
            paddingBottom: "7px",
            color: "WHITE",
            fontSize: "20px",
            fontWeight: "BOLD",
        };

        let cardContentWrapper = {
            maxWidth: "370px",
            width: "80%",
            marginLeft: "auto",
            marginRight: "auto",
            marginTop: "25px",
            border: "5px solid #052E6F",
        };

        let imageBlock = {
            width: "100%",
            paddingBottom: "40px",
            backgroundPosition: "center",
            backgroundSize: "cover",
            textAlign: "center",
        };

        let contentTitle = {
            textShadow: "2px 4px 4px #5f5f5f",
            paddingTop: "80px",
            fontSize: "14px",
            color: "WHITE",
            paddingBottom: "5px",
        };
        let contentHeading = {
            paddingTop: "5px",
            paddingBottom: "5px",
            color: "WHITE",
            fontSize: "13px",
            fontWeight: "BOLD",
            width: "110px",
            marginLeft: "auto",
            marginRight: "auto",
            borderRadius: "10px",
            marginTop: "10px",
        };
        let contentLogo = {
            width: "130px",
        };

        let itemOne = {
            backgroundImage: `url(${IMAGE_RESOURCE.syupanFeatureSection.featureOne})`,
        };
        let itemTwo = {
            backgroundImage: `url(${IMAGE_RESOURCE.syupanFeatureSection.featureTwo})`,
        };
        let itemThree = {
            backgroundImage: `url(${IMAGE_RESOURCE.syupanFeatureSection.featureThree})`,
        };

        let cardFooter = {
            paddingTop: "20px",
        };

        let CardBtn = {
            width: "152px",
            height: "50px",
            marginLeft: "10px",
            marginRight: "10px",
            fontSize: "12px",
            fontWeight: "BOLD",
            borderRadius: "5px",
            marginBottom: "10px",
        };

        let CardBtnLeft = {
            border: "3px solid #C7C7C7",
            backgroundColor: "#FFFFFF",
            float: "left",
            color: "#676767",
        };
        let CardBtnRight = {
            background: "linear-gradient(#FF9300,#EB5100)",
            borderColor: "#EB5100",
            float: "right",
            color: "WHITE",
        };

        return (
            <React.Fragment>
                <Container className="padding-bottom-120">
                    <Row>
                        <Col xs={12} md={4}>
                            <div style={userCard}>
                                <div style={cardTitle} className="bg-blue">
                                    {t("homepage.user_action_section.item-one.title")}
                                </div>

                                <div style={cardContentWrapper}>
                                    <div style={{...imageBlock, ...itemOne}}>
                                        <h2 style={contentTitle}>
                                            {t("homepage.user_action_section.item-one.content-title")}
                                        </h2>
                                        <Image
                                            style={contentLogo}
                                            src={IMAGE_RESOURCE.transparentLogo}
                                        />
                                        <h3 style={contentHeading} className="bg-blue">
                                            {t(
                                                "homepage.user_action_section.item-one.content-heading"
                                            )}
                                        </h3>
                                    </div>
                                </div>

                                <div style={cardFooter}>
                                    <Button style={{...CardBtn, ...CardBtnLeft}}>
                                        {t("homepage.user_action_section.item-one.btn-left")}
                                    </Button>
                                    <Button
                                        style={{...CardBtn, ...CardBtnRight}}
                                        onClick={() => {
                                        }}
                                    >
                                        {t("homepage.user_action_section.item-one.btn-right")}
                                    </Button>
                                </div>
                            </div>
                        </Col>
                        <Col xs={12} md={4}>
                            <div style={userCard}>
                                <div style={cardTitle} className="bg-aqua">
                                    {t("homepage.user_action_section.item-two.title")}
                                </div>

                                <div style={cardContentWrapper}>
                                    <div style={{...imageBlock, ...itemTwo}}>
                                        <h2 style={contentTitle}>
                                            {t("homepage.user_action_section.item-two.content-title")}
                                        </h2>
                                        <Image
                                            style={contentLogo}
                                            src={IMAGE_RESOURCE.transparentLogo}
                                        />
                                        <h3 style={contentHeading} className="bg-aqua">
                                            {t(
                                                "homepage.user_action_section.item-two.content-heading"
                                            )}
                                        </h3>
                                    </div>
                                </div>

                                <div style={cardFooter}>
                                    <Button style={{...CardBtn, ...CardBtnLeft}}>
                                        {t("homepage.user_action_section.item-two.btn-left")}
                                    </Button>
                                    <Button
                                        style={{...CardBtn, ...CardBtnRight}}
                                        onClick={() => {
                                            window.location.href = '/admin/login';
                                        }}
                                    >
                                        {t("homepage.user_action_section.item-two.btn-right")}
                                    </Button>
                                </div>
                            </div>
                        </Col>
                        <Col xs={12} md={4}>
                            <div style={userCard}>
                                <div style={cardTitle} className="bg-green">
                                    {t("homepage.user_action_section.item-three.title")}
                                </div>

                                <div style={cardContentWrapper}>
                                    <div style={{...imageBlock, ...itemThree}}>
                                        <h2 style={contentTitle}>
                                            {t(
                                                "homepage.user_action_section.item-three.content-title"
                                            )}
                                        </h2>
                                        <Image
                                            style={contentLogo}
                                            src={IMAGE_RESOURCE.transparentLogo}
                                        />
                                        <h3 style={contentHeading} className="bg-green">
                                            {t(
                                                "homepage.user_action_section.item-three.content-heading"
                                            )}
                                        </h3>
                                    </div>
                                </div>

                                <div style={cardFooter}>
                                    <Button style={{...CardBtn, ...CardBtnLeft}}>
                                        {t("homepage.user_action_section.item-three.btn-left")}
                                    </Button>
                                    <Button
                                        style={{...CardBtn, ...CardBtnRight}}
                                        onClick={() => {
                                          window.location.href = '/candidate/login';
                                        }}
                                    >
                                        {t("homepage.user_action_section.item-three.btn-right")}
                                    </Button>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </React.Fragment>
        );
    }
}

export default withTranslation()(ForUserAction);
