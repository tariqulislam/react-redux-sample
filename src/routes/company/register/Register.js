import React from "react";
import {Container, Row, Col, Form, Button} from "react-bootstrap";
import {withTranslation, Trans} from 'react-i18next';
import environment from '../../../environment';
import axios from 'axios';

import './CompanyRegister.css';

export class Register extends React.Component {

    companyNameRef = React.createRef();
    companyCodeRef = React.createRef();
    companyContactRef = React.createRef();
    companyEmailRef = React.createRef();
    companyClassificationRef = React.createRef();
    companyTermsAndConditions = React.createRef();

    constructor(props) {
        super(props);
        this.state = {};
    };

    registerCompany = () => {
        console.log(this.state);

        let URL = 'http://localhost:4000/api/companies/registration';
        let company = {
            name: this.state.companyName,
            username: this.state.companyEmail,
            email: this.state.companyContact
        };

        axios.post(URL, company).then((res) => {
            console.log(res);
        })

    };

    /**
     * Answer from: https://stackoverflow.com/a/57763036/5554993
     *
     * The following two methods send socket server a signal that user has stopped typing.
     *
     * @param {*} callback
     * @param {*} wait
     */
    debounce = (callback, wait) => {
        let timeout;
        return (...args) => {
            const context = this;
            clearTimeout(timeout);
            timeout = setTimeout(() => callback.apply(context, args), wait);
        };
    };

    render() {
        const {t} = this.props
        return (
            <Container className='main-container-company'>
                <Row className="justify-content-md-center">
                    <Col md="8">
                        <Form style={{width: "100%", marginTop: '5%', marginBottom: '5%'}}>
                            <Form.Group
                                className="form-main-container"
                                as={Row}
                                controlId="formHorizontalName"
                            >
                                <Form.Label column sm={12} style={{textAlign: 'center'}} className='form-top-company'>
                                    <h3>Company Registration Form</h3>
                                </Form.Label>
                            </Form.Group>

                            <Form.Group
                                className="form-main-container"
                                as={Row}
                                controlId="formHorizontalName"
                            >
                                <Form.Label column sm={3}>
                                    Company Name
                                </Form.Label>
                                <Form.Label column sm={9}>
                                    <Form.Control
                                        ref={this.companyNameRef} type="text"
                                        onChange={
                                            this.debounce((e) => {
                                                this.setState({
                                                    companyName: this.companyNameRef.current.value
                                                });
                                            }, 250)
                                        }
                                    />
                                </Form.Label>
                            </Form.Group>

                            <Form.Group
                                className="form-main-container"
                                as={Row}
                                controlId="formHorizontalName"
                            >
                                <Form.Label column sm={3}>
                                    Company Code
                                </Form.Label>
                                <Form.Label column sm={9}>
                                    <Form.Control
                                        ref={this.companyCodeRef} type="text"
                                        onChange={
                                            this.debounce((e) => {
                                                this.setState({
                                                    companyCode: this.companyCodeRef.current.value
                                                });
                                            }, 250)
                                        }
                                    />
                                </Form.Label>
                            </Form.Group>

                            <Form.Group
                                className="form-main-container"
                                as={Row}
                                controlId="formHorizontalRomajiName"
                            >
                                <Form.Label column sm={3}>
                                    Company Contact
                                </Form.Label>
                                <Form.Label column sm={9}>
                                    <Form.Control
                                        ref={this.companyContactRef} type="text"
                                        onChange={
                                            this.debounce((e) => {
                                                this.setState({
                                                    companyContact: this.companyContactRef.current.value
                                                });
                                            }, 250)
                                        }
                                    />
                                </Form.Label>
                            </Form.Group>

                            <Form.Group
                                className="form-main-container"
                                as={Row}
                                controlId="formHorizontalRomajiName"
                            >
                                <Form.Label column sm={3}>
                                    Company Email
                                </Form.Label>
                                <Form.Label column sm={9}>
                                    <Form.Control
                                        ref={this.companyEmailRef} type="text"
                                        onChange={
                                            this.debounce((e) => {
                                                this.setState({
                                                    companyEmail: this.companyEmailRef.current.value
                                                });
                                            }, 250)
                                        }
                                    />
                                </Form.Label>
                            </Form.Group>
                            <Form.Group
                                className="form-main-container"
                                as={Row}
                                controlId="formHorizontalCountry"
                            >
                                <Form.Label column sm={3}>
                                    Industry Classification
                                </Form.Label>
                                <Form.Label column sm={9}>
                                    <select
                                        ref={this.companyClassificationRef}
                                        name="country" className="form-control"
                                        onChange={
                                            this.debounce((e) => {
                                                this.setState({
                                                    companyClassification: this.companyClassificationRef.current.value
                                                });
                                            }, 250)
                                        }
                                    >
                                        <option>-- Select One --</option>
                                        <option>IT</option>
                                        <option>Marketing</option>
                                        <option>Manufacturer</option>
                                    </select>
                                </Form.Label>
                            </Form.Group>
                            <Form.Group
                                className="form-main-container"
                                as={Row}
                                controlId="formHorizontalRomajiName"
                            >
                                <Form.Label column sm={3}>
                                    Contact Person
                                </Form.Label>
                                <Form.Label column sm={9}>

                                </Form.Label>
                            </Form.Group>
                            <Form.Group
                                className="form-main-container"
                                as={Row}
                                controlId="formHorizontalCountry"
                            >
                                <Form.Label column sm={3}>
                                    {t('registration.terms_conditions.title')}
                                </Form.Label>
                                <Form.Label column sm={9}>
                                    <textarea
                                        ref={this.companyTermsAndConditions}
                                        style={{width: '100%'}} cols="40"
                                        rows="5"
                                        onChange={
                                            this.debounce((e) => {
                                                this.setState({
                                                    companyTermsAndConditions: this.companyTermsAndConditions.current.value
                                                });
                                            }, 250)
                                        }
                                    >
                                    </textarea>
                                </Form.Label>
                            </Form.Group>

                            {/* <Form.Group
                className="form-main-container"
                as={Row}
                controlId="formHorizontalCountry"
              >
                <Form.Label column sm={3}>
                  {t('registration.religion.title')}
                </Form.Label>
                <Col sm={9}>
                    <select name="religion" className="form-control">
                        <option>-- No Religion --</option>
                        <option> Buddist </option>
                        <opton> Cristen </opton>
                        <option>Muslim</option>
                        <option>Jdusim</option>
                        <option>Others</option>
                    </select>
              
                </Col>
              </Form.Group>
              <Form.Group
                className="form-main-container"
                as={Row}
                controlId="formHorizontalCountry"
              >
                <Form.Label column sm={3}>
                  {t('registration.sex.title')}
                </Form.Label>
                <Col sm={9}>
                    <select name="religion" className="form-control">
                        <option>--  Select One --</option>
                        <option> Male </option>
                        <option> Female </option>
                        <option>Others</option>
                    </select>
              
                </Col>
              </Form.Group>
              <Form.Group
                className="form-main-container"
                as={Row}
                controlId="formHorizontalCountry"
              >
                <Form.Label column sm={3}>
                  {t('registration.half_body_photo.title')}
                </Form.Label>
                <Col sm={9}>
                   <input className="form-control" type="file" />
              
                </Col>
              </Form.Group>
              */}
                            <Form.Group
                                className="form-main-container"
                                as={Row}
                                controlId="formHorizontalCountry"
                            >
                                <Form.Label column sm={3} className='form-bottom-left-company'>
                                </Form.Label>
                                <Form.Label column sm={9} className='form-bottom-right-company'>
                                    <Button type="button"
                                            onClick={this.registerCompany}
                                    >
                                        Register
                                    </Button>
                                </Form.Label>
                            </Form.Group>
                        </Form>

                    </Col>
                </Row>
            </Container>
        );
    }
}

export default withTranslation()(Register)

