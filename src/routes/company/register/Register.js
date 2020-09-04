import React from "react";
import {Container, Row, Col, Form, Button} from "react-bootstrap";
import {withTranslation, Trans} from 'react-i18next';
import axios from 'axios';

import environment from "../../../environment.json"

export class Register extends React.Component {

    constructor(props) {
        super(props);
        this.state = {};
    };

    registerCompany = () => {
        console.log(this.state);

        let URL = `http://${environment.api_url}/api/companies/registration`;
        let company = {
            name: this.state.companyName,
            username: this.state.companyEmail,
            email: this.state.companyContact
        };

        axios.post(URL, company).then((res) => {
            console.log(res);
        })

    };



    render() {
        const {t} = this.props
        return (
            <div class="d-flex" id="wrapper">
            <div style={{width: "85%"}} id="page-content-wrapper">
            <div class="container-fluid">
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
                                        name="companyName"
                                        
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
                                         type="text"
                                         name="companyCode"
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
                                        name="companyContact"
                                       
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
                                        name="companyEmail"
                                      
                                    />
                                </Form.Label>
                            </Form.Group>
                            <Form.Group
                                className="form-main-container"
                                as={Row}
                                controlId="formHorizontalRomajiName"
                            >
                                <Form.Label column sm={3}>
                                    Password
                                </Form.Label>
                                <Form.Label column sm={9}>
                                    <Form.Control
                                        name="companyPassword"
                                       
                                    />
                                </Form.Label>
                            </Form.Group>
                            <Form.Group
                                className="form-main-container"
                                as={Row}
                                controlId="formHorizontalRomajiName"
                            >
                                <Form.Label column sm={3}>
                                   Retype Password
                                </Form.Label>
                                <Form.Label column sm={9}>
                                    <Form.Control
                                        name="retypePassword"
                                        
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
                                        
                                    >
                                    </textarea>
                                </Form.Label>
                            </Form.Group>

                          
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
            </div>
            </div>
            </div>
        );
    }
}

export default withTranslation()(Register)

