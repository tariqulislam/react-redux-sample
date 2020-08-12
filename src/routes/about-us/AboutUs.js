import React from 'react';
import './AboutUs.css';
import {Col, Container, Image, Row, Table} from "react-bootstrap";
import {withTranslation} from "react-i18next";

const AboutUs = (props) => {

    const image1 = require('./1.JPEG');
    const image2 = require('./2.JPEG');
    const image3 = require('./3.JPEG');
    const image4 = require('./4.JPEG');

    const {t} = props;

    return (
        <Container>
            <Row>
                <Col>
                    <Table>
                        <tbody>
                        <tr>
                            <td className='about-us-td'>
                                <div
                                    className="about-us-head about-us-company-name"
                                >
                                    {t("about-us.company-name-key")}
                                </div>
                            </td>

                            <td>
                                <h2>
                                    {t("about-us.company-name-value")}
                                </h2>
                            </td>
                        </tr>


                        <tr>
                            <td>
                                <div className="about-us-head">
                                    {t("about-us.company-business-content-key")}
                                </div>
                            </td>
                            <td>
                                <h4>{t("about-us.company-business-content-value.h2")}</h4>
                                <p>・ {t("about-us.company-business-content-value.paragraph1")}</p>
                                <p>・ {t("about-us.company-business-content-value.paragraph2")}</p>
                                <p>・ {t("about-us.company-business-content-value.paragraph3")}</p>
                                <p>・ {t("about-us.company-business-content-value.paragraph4")}</p>
                            </td>
                        </tr>

                        <tr>
                            <td>
                                <div className="about-us-head">
                                    {t("about-us.company-corporate-website-key")}
                                </div>
                            </td>
                            <td>
                                <a href='https://careernext.jp/' target='_blank' style={{textDecoration: 'none'}}>
                                    {t("about-us.company-corporate-website-value")}
                                </a>
                            </td>
                        </tr>

                        <tr>
                            <td>
                                <div className="about-us-head">
                                    {t("about-us.location-key")}
                                </div>
                            </td>
                            <td>
                                <p>
                                    {t("about-us.location-value")}
                                </p>
                            </td>
                        </tr>

                        </tbody>
                    </Table>
                </Col>
            </Row>

            <div className="slider-holder">
                <span id="slider-image-1"></span>
                <span id="slider-image-2"></span>
                <span id="slider-image-3"></span>
                <span id="slider-image-4"></span>
                <div className="image-holder">
                    <img src={image1} className="slider-image"/>
                    <img src={image2} className="slider-image"/>
                    <img src={image3} className="slider-image"/>
                    <img src={image4} className="slider-image"/>
                </div>
                <div className="button-holder">
                    <a href="#slider-image-1" className="slider-change"></a>
                    <a href="#slider-image-2" className="slider-change"></a>
                    <a href="#slider-image-3" className="slider-change"></a>
                    <a href="#slider-image-4" className="slider-change"></a>
                </div>
            </div>
        </Container>
    );
};

export default withTranslation()(AboutUs);



