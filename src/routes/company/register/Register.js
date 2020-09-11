import React from "react";
import { Row, Col, Form, Button, Alert } from "react-bootstrap";
import { withTranslation, Trans } from 'react-i18next';
import axios from 'axios';
import "../company.css"
import environment from "../../../environment.json"

export class Register extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            showAlertMessage: false,
            message: "",
            status: ""
        }
    }

    registerCompany = (event) => {
        event.preventDefault()
        const data = new FormData(event.target)

        let URL = `http://${environment.api_url}/api/companies/registration`;
        let company = {
            name: data.get("companyName"),
            password: data.get("companyPassword"),
            username: data.get("companyEmail"),
            email: data.get("companyEmail")
        };

        axios.post(URL, company).then((res) => {
            window.location = "/company/login"
        }).catch(ex => {
            this.setState({showAlertMessage: true, message: "Something went wrong when create the company", status: "danger"})
        })

    };


    render() {
        const { t } = this.props
        return (
            <div class="d-flex main-container" id="wrapper">
                <div style={{ width: "85%" }} id="page-content-wrapper">

                    <div class="container-fluid">
                        <Row className="justify-content-md-center">
                            <Col md="8">
                                <Form onSubmit={this.registerCompany} style={{ width: "100%", marginTop: '5%', marginBottom: '5%' }}>
                                    <Form.Group
                                        className="form-main-container"
                                        as={Row}
                                        controlId="formHorizontalName"
                                    >
                                        <Form.Label column sm={12} style={{ textAlign: 'center' }} className='form-top-company'>
                                            <h3>{t("company_registration.company_registration_form")}</h3>
                                        </Form.Label>
                                    </Form.Group>
                                    {
                                        this.state.showAlertMessage &&      <Alert variant={this.state.status}>{this.state.message}</Alert>
                                    }
                                    <Form.Group
                                        className="form-main-container"
                                        as={Row}
                                        controlId="formHorizontalName"
                                    >
                                        <Form.Label column sm={3}>
                                            {t("company_registration.name")}
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
                                        controlId="formHorizontalRomajiName"
                                    >
                                        <Form.Label column sm={3}>
                                            {t("company_registration.email")}
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
                                            {t("company_registration.password")}
                                        </Form.Label>
                                        <Form.Label column sm={9}>
                                            <Form.Control
                                                type="password"
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
                                            {t("company_registration.retype_password")}
                                        </Form.Label>
                                        <Form.Label column sm={9}>
                                            <Form.Control
                                                type="password"
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
                                            {t('company_registration.terms_and_condition')}
                                        </Form.Label>
                                        <Form.Label column sm={9}>
                                            <textarea
                                                ref={this.companyTermsAndConditions}
                                                style={{ width: '100%' }} cols="40"
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
                                            <Button type="submit"
                                            >
                                                {t('company_registration.register')}
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

