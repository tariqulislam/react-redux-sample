import React, {useState, useEffect} from 'react';
import './AboutUs.css';
import {Col, Container, Row, Table} from "react-bootstrap";
import {withTranslation} from "react-i18next";

import {Carousel} from 'react-responsive-carousel';
import "./carousel.css";


const AboutUs = (props) => {
    const {t} = props;

    const image1 = require('./1.JPEG');
    const image2 = require('./2.JPEG');
    const image3 = require('./3.JPEG');
    const image4 = require('./4.JPEG');

    const images = [
        {
            text: `${t("about-us.images-description.image1")}`,
            src: image1
        },
        {
            text: `${t("about-us.images-description.image2")}`,
            src: image2
        },
        {
            text: `${t("about-us.images-description.image3")}`,
            src: image3
        },
        {
            text: `${t("about-us.images-description.image4")}`,
            src: image4
        },
    ];

    const [imageList, setImageList] = useState([]);
    const [selectedImage, setSelectedImage] = useState(null);

    useEffect(() => {
        setImageList(images);
    }, []);

    useEffect(() => {
        setSelectedImage(imageList[imageList.length / 2]);
    }, [imageList]);


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
                                <p>・ {t("about-us.company-business-content-value.paragraph5")}</p>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <div className="about-us-head">
                                    {t("about-us.phone_number.title")}
                                </div>
                            </td>
                            <td>
                            {t("about-us.phone_number.value")}
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <div className="about-us-head">
                                    {t("about-us.email_address.title")}
                                </div>
                            </td>
                            <td>
                            {t("about-us.email_address.value")}
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <div className="about-us-head">
                                    {t("about-us.company-corporate-website-key")}
                                </div>
                            </td>
                            <td>
                                <a href='https://tsunagu-japan.com/' target='_blank' style={{textDecoration: 'none'}}>
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

            <Row style={{justifyContent: 'center'}}>
                <div>
                    <Carousel>
                        {
                            imageList.map((currentImage, key) =>
                                <div>
                                    <img
                                        className="d-block w-100"
                                        src={currentImage.src}
                                        alt={currentImage.text}
                                    />
                                    <p className="legend">{t(`about-us.images-description.image${key + 1}`)}</p>
                                </div>
                            )
                        }
                    </Carousel>
                </div>
            </Row>
        </Container>
    );
};

export default withTranslation()(AboutUs);



