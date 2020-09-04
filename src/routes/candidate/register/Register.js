import React from "react";
import {Container, Row, Col, Form, Button} from "react-bootstrap";
import {withTranslation} from 'react-i18next'
import {connect} from 'react-redux'
import {v4 as uuidv4} from 'uuid';

import './Register.css';

import {
    saveCandidateInfoFromApi,
} from '../../../reducers/Candidate/candidate.reducer'

export class Register extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            email: null,
            password: null,
            retypepassword: null,
            name: null,
            name_romaji: null,
            username: null
        }
    }


    /**
     * Solution by Brian Woodward, borrowed from here: https://stackoverflow.com/a/38845805/5554993
     * Only the function is borrowed and re-factored as per need.
     */
    

    onSubmitCandidateData = (e) => {
        // e.preventDefault();

        let fullName = document.getElementsByName("full-name");
        fullName = fullName[0].value;
        
        let romajiName = document.getElementsByName("full-name-roman");
        romajiName = romajiName[0].value;

    

        // Half Body Picture
        // Passport Picture

        let email = document.getElementsByName("email");
        email = email[0].value;

        let password = document.getElementsByName("password");
        password = password[0].value;
        let retypedPassword = document.getElementsByName("retyped-password");
        retypedPassword = retypedPassword[0].value;


        let termsAndConditions = document.getElementsByName("terms-and-conditions");
        termsAndConditions = termsAndConditions[0].value;

        let toBePostedCandidate = {
            acceptTermsAndCondition: true,
            romajiName,
            "candidate": {
                lang: localStorage.getItem("language"),
                email,
                "name": fullName,
                password,
                "username": email   //  No username found.
            },
            retypedPassword,
            "status": true,
            "fromRegistrationPage": true
        };
        let validity = document.getElementsByClassName("registration-form");
        validity = validity[0].checkValidity();

        if (validity === true) {
            e.preventDefault();
            this.props.saveCandidateInfoForm(toBePostedCandidate);
        }
    }

    render() {
        const {t} = this.props

        return (
            <Container className='main-container'>
                <Row className="justify-content-md-center">
                    <Col md="8">
                        <Form className="registration-form">
                            <Form.Group
                                className="form-main-container border-0"
                                as={Row}
                                controlId="formHorizontalName"
                            >
                                <Form.Label column sm={12} style={{textAlign: 'center'}} className='form-top'>
                                    <h3>
                                        {t('registration.registration_form')}
                                    </h3>
                                </Form.Label>
                            </Form.Group>

                            <Form.Group
                                className="form-main-container"
                                as={Row}
                                controlId="formHorizontalName"
                            >
                                <Form.Label className="border-0" column sm={3}>
                                    {t('registration.full_name.title')}
                                </Form.Label>
                                <Form.Label column sm={9}>
                                    <Form.Control name="full-name" type="text"
                                                  placeholder={t('registration.full_name.placeholder')} required/>
                                </Form.Label>
                            </Form.Group>
                            <Form.Group
                                className="form-main-container"
                                as={Row}
                                controlId="formHorizontalRomajiName"
                            >
                                <Form.Label className="border-0" column sm={3}>
                                    {t('registration.romanji_name.title')}
                                </Form.Label>
                                <Form.Label column sm={9}>
                                    <Form.Control name="full-name-roman" type="text"
                                                  placeholder={t('registration.romanji_name.placeholder')} required/>
                                </Form.Label>
                            </Form.Group>

                            <Form.Group
                                className="form-main-container"
                                as={Row}
                                controlId="formHorizontalFullName"
                            >
                                <Form.Label  className="border-0" column sm={3}>
                                    {t('registration.email.title')}
                                </Form.Label>
                                <Form.Label column sm={9}>
                                    <Form.Control name="email" type="text"
                                                  placeholder={t('registration.email.placeholder')} required/>
                                </Form.Label>
                            </Form.Group>
                            <Form.Group
                                className="form-main-container"
                                as={Row}
                                controlId="formHorizontalFullName"
                            >
                                <Form.Label className="border-0" column sm={3}>
                                    {t('registration.password.title')}
                                </Form.Label>
                                <Form.Label className="border-0" column sm={9}>
                                    <Form.Control name="password" type="password"
                                                  placeholder={t('registration.password.placeholder')} required/>
                                </Form.Label>
                            </Form.Group>
                            <Form.Group
                                className="form-main-container"
                                as={Row}
                                controlId="formHorizontalFullName"
                            >
                                <Form.Label className="border-0" column sm={3}>
                                    {t('registration.retypepassword.title')}
                                </Form.Label>
                                <Form.Label column sm={9}>
                                    <Form.Control name="retyped-password" type="password"
                                                  placeholder={t('registration.retypepassword.title')} required/>
                                </Form.Label>
                              </Form.Group>
                            <Form.Group
                                className="form-main-container"
                                as={Row}
                                controlId="formHorizontalCountry"
                            >
                                <Form.Label className="border-0 pl-2" column sm={3}>
                                    {t('registration.terms_conditions.title')}
                                </Form.Label>
                                <Form.Label column sm={9}>
                                    <textarea name="terms-and-conditions" style={{width: '100%'}} cols="40" rows="5"
                                              required></textarea>
                                </Form.Label>
                            </Form.Group>

                            <Form.Group
                                className="form-main-container"
                                as={Row}
                                controlId="formHorizontalCountry"
                            >
                                <Form.Label  column sm={3} className='form-bottom-left border-0'>

                                </Form.Label>
                                <Form.Label column sm={9} style={{textAlign: "right"}} className='form-bottom-right'>
                                    <Button onClick={this.onSubmitCandidateData}
                                            type="submit"> {t('registration.register_to_site.title')} </Button>
                                </Form.Label>
                            </Form.Group>

                        </Form>
                    </Col>
                </Row>
            </Container>
        );
    }
}

const mapStateToProps = state => ({})

const mapDispatchToProps = dispatch => {
    return {
        saveCandidateInfoForm: (formData) => dispatch(saveCandidateInfoFromApi(formData)),
    }
}

export default withTranslation()(connect(mapStateToProps, mapDispatchToProps)(Register))




