import React from "react";
import { Container, Row, Col, Form, Button, Tab, Tabs } from "react-bootstrap";
import { withTranslation } from 'react-i18next'
import { connect } from 'react-redux'
import { v4 as uuidv4 } from 'uuid';
import SideBar from "../sidebar"
import {
    saveCandidateInfoFromApi,
    saveCandidateHalfBodyPhotoThroughAPI,
    saveCandidatePassportThroughAPI
} from '../../../reducers/Candidate/candidate.reducer'
import environment from "../../../environment.json"
import axios from "axios"
export class Profile extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            updatedCandidateInfo: {},
            email: null,
            password: null,
            retypepassword: null,
            name: null,
            romajiName: null,
            username: null,
            country: null,
            nationality: null,
            birthMonth: null,
            birthYear: null,
            birthday: null,
            religion: null,
            gender: null,
            heightUnit: null,
            height: null,
            weight: null,
            weightUnit: null,
            eyeSight: null,
            hearing: null,
            footSize: null,
            footSizeUnit: null,
            phoneNumber: null,
            facebook: null,
            currentSituation: null,
            currentLocation: null,
            currentSituationOption: null,
            specificSkills: null,
            specificSkillsOption: null,
            marital: null,
            chronicDisease: null,
            japaneseLanguageSkill: null,
            workExperience0: null,
            workExperience0Value: null,
            workExperience1: null,
            workExperience1Value: null,
            workExperience2: null,
            workExperience2Value: null,
        }
    }

    componentDidMount() {
        let getCandidateInfo = JSON.parse(localStorage.getItem("user"))
        let url = `http://${environment.api_url}/api/candidates/${getCandidateInfo.id}`;
        axios.get(url).then(res => {
            
            if (res.status === 200) {
                let candidateInfo = res.data && res.data.data
                console.log("candidate info", candidateInfo)
                this.setState({ updatedCandidateInfo: candidateInfo })
                let workExperience = candidateInfo.candidateWorkExperience
                if(workExperience.length >=1) {
                    this.setState({
                        workExperience0: workExperience[0].name,
                        workExperience0Value: workExperience[0].companyName,
                        workExperience1: workExperience[1].name,
                        workExperience1Value: workExperience[1].companyName,
                        workExperience2: workExperience[2].name,
                        workExperience2Value: workExperience[2].companyName,
                    })
                }

                let languages = candidateInfo.languages;
                if (languages.length >= 1) {
                    
                }
              
            }
        })
    }

    /**
     * Solution by Brian Woodward, borrowed from here: https://stackoverflow.com/a/38845805/5554993
     * Only the function is borrowed and re-factored as per need.
     */
    onSelectedCheckBox = (element) => {
        if (element.target) {
            element = element.target.name;
            console.log(element)
        }
        let el = document.getElementsByName(element);

        var atLeastOneChecked = false;//at least one cb is checked
        for (let i = 0; i < el.length; i++) {
            if (el[i].checked === true) {
                atLeastOneChecked = true;
            }
        }

        if (atLeastOneChecked === true) {
            for (let i = 0; i < el.length; i++) {
                el[i].required = false;
            }
        } else {
            for (let i = 0; i < el.length; i++) {
                el[i].required = true;
            }
        }
    }

    /**
     * Solution by Brian Woodward, borrowed from here: https://stackoverflow.com/a/38845805/5554993
     * Only the function is borrowed and re-factored as per need.
     */
    onWorkExperienceSelected = () => {
        let el = document.getElementsByClassName('work-experience');

        var atLeastOneChecked = false;//at least one cb is checked
        for (let i = 0; i < el.length; i++) {
            if (el[i].selectedIndex > 0) {
                atLeastOneChecked = true;
            }
        }

        if (atLeastOneChecked === true) {
            for (let i = 0; i < el.length; i++) {
                el[i].required = false;
            }
        } else {
            for (let i = 0; i < el.length; i++) {
                el[i].required = true;
            }
        }
    }


    /**
     * Solution by Brian Woodward, borrowed from here: https://stackoverflow.com/a/38845805/5554993
     * Only the function is borrowed and re-factored as per need.
     */
    onWorkExperienceValueEntered = (e) => {
        let el = document.getElementsByClassName('work-experience-value');
        this.setState({[e.target.id]: e.target.value})
        var atLeastOneChecked = false;//at least one cb is checked
        for (let i = 0; i < el.length; i++) {
            if (el[i].value.length > 0) {
                atLeastOneChecked = true;
            }
        }

        if (atLeastOneChecked === true) {
            for (let i = 0; i < el.length; i++) {
                el[i].required = false;
            }
        } else {
            for (let i = 0; i < el.length; i++) {
                el[i].required = true;
            }
        }
    }


    updatePersonalInfo = (e) => {
        e.preventDefault()
        let fullName = document.getElementsByName("full-name");
        fullName = fullName[0].value;
        let romajiName = document.getElementsByName("full-name-roman");
        romajiName = romajiName[0].value;

        let country = document.getElementsByName("country");
        country = country[0].value;

        let nationality = document.getElementsByName("nationality");
        nationality = nationality[0].value;

        let language = document.getElementsByName("language-check");
        let selectedLanguages = [];
        
        language.forEach(lan => {
            if (lan.checked === true) {
                selectedLanguages.push({
                    "name": lan.parentNode.innerText.trim()
                });
            }
        })
        
        let yearOfBirth = document.getElementsByName("year");
        yearOfBirth = yearOfBirth[0].value;
        let monthOfBirth = document.getElementsByName("month");
        monthOfBirth = monthOfBirth[0].value;
        let dayOfBirth = document.getElementsByName("day");
        dayOfBirth = dayOfBirth[0].value;

        let religion = document.getElementsByName("religion");
        religion = religion[0].value;

        let sex = document.getElementsByName("sex");
        sex = sex[0].value;

        let height = document.getElementsByName("height-value");
        height = height[0].value
        let heightUnit = document.getElementsByName("height-unit");
        heightUnit = heightUnit[0].value;

        let weight = document.getElementsByName("weight-value");
        weight = weight[0].value;
        let weightUnit = document.getElementsByName("weight-unit");
        weightUnit = weightUnit[0].value;

        let eyeSight = document.getElementsByName("eyesight");
        eyeSight = eyeSight[0].value;
        let hearing = document.getElementsByName("hearing");
        hearing = hearing[0].value;

        let footSize = document.getElementsByName("foot-size-value");
        footSize = footSize[0].value;
        let footSizeUnit = document.getElementsByName("foot-size-unit");
        footSizeUnit = footSizeUnit[0].value;

        let getCandidateInfo = JSON.parse(localStorage.getItem("user"))

        let toBePostedCandidate = {
            id: getCandidateInfo.id,
            acceptTermsAndCondition: true,
            romajiName,
            country,
            nationality,
            "languages": selectedLanguages,
            "birthYear": yearOfBirth,
            "birthMonth": monthOfBirth,
            "birthday": dayOfBirth,
            religion,
            "gender": sex,
            height,
            heightUnit,
            weight,
            weightUnit,
            eyeSight,
            hearing,
            footSize,
            footSizeUnit
        }

        let url = `http://${environment.api_url}/api/candidates/details-update`;
        axios.put(url, toBePostedCandidate, { headers: { 'Content-Type': 'application/json' } }).then(res => {
        
        });

        let languageUrl = `http://${environment.api_url}/api/candidates/candidate-languages`;
        axios.put(languageUrl, toBePostedCandidate, { headers: { 'Content-Type': 'application/json' } }).then(res => {
            
        });

    }

    onChangeValue = (event) => {
        if(event.target.type === "radio") {
            
            this.setState({[event.target.name]: event.target.value})
        } else {
            this.setState({ [event.target.id]: event.target.value })
        }
        
    }

    updateWorkExperience = (e) => {
        e.preventDefault()

        let workExperience0 = document.getElementsByName("work-experience-0");
        workExperience0 = workExperience0[0].value;
        let workExperience1 = document.getElementsByName("work-experience-1");
        workExperience1 = workExperience1[0].value;
        let workExperience2 = document.getElementsByName("work-experience-2");
        workExperience2 = workExperience2[0].value;

        let workExperience0Value = document.getElementsByName("work-experience-0-value");
        workExperience0Value = workExperience0Value[0].value;
        let workExperience1Value = document.getElementsByName("work-experience-1-value");
        workExperience1Value = workExperience1Value[0].value;
        let workExperience2Value = document.getElementsByName("work-experience-2-value");
        workExperience2Value = workExperience2Value[0].value;

        let skill = document.getElementsByName("skills");
        skill = skill[0].value;
        let skillText = document.getElementsByName("skills-text");
        skillText = skillText[0].value;
        
        let selectedStatus = this.state.marital;
        // maritalStatus = maritalStatus[0].value;
       
        let chronicDisease = document.getElementsByName("chronic-disease");
        chronicDisease = chronicDisease[0].value;

        let japaneseLanguageSkill = document.getElementsByName("japanese-language-skills");
        japaneseLanguageSkill = japaneseLanguageSkill[0].value;

        let jobs = document.getElementsByName("job");
        let selectedJobs = [];

        jobs.forEach(job => {
            if (job.checked === true) {
                selectedJobs.push({
                    "description": job.parentNode.innerText,
                    "name": job.parentNode.innerText
                });
            }
        })

        
        let getCandidateInfo = JSON.parse(localStorage.getItem("user"))

        let submitedData = {
            "id": getCandidateInfo.id,
            "candidateWorkExperiences": [
                {
                    "companyName": workExperience0Value,
                    "name": workExperience0
                },
                {
                    "companyName": workExperience1Value,
                    "name": workExperience1
                },
                {
                    "companyName": workExperience2Value,
                    "name": workExperience2
                },
            ],
            "specificSkill": skill,
            "specificSkillOption": skillText,
            "maritalStatus": selectedStatus,
            selectedStatus,
            chronicDisease,
            japaneseLanguageSkill,
            "desiredJobs": selectedJobs,
        }

        let url = `http://${environment.api_url}/api/candidates/candidate-work-experience`;
        axios.put(url, submitedData, { headers: { 'Content-Type': 'application/json' } }).then(res => {
            
        });

    }


    onSubmitCandidateSetting = (e) => {
        e.preventDefault();

        let phoneNumber = document.getElementsByName("phone-number");
        phoneNumber = phoneNumber[0].value;

        let facebookUrl = document.getElementsByName("facebook");
        facebookUrl = facebookUrl[0].value;

        let currentLocation = document.getElementsByName("currentlocation");
        currentLocation = currentLocation[0].value;

        let currentSituation = document.getElementsByName("current-situation");
        currentSituation = currentSituation[0].value;

        let currentSituationOption = document.getElementsByName("current-situation-text");
        currentSituationOption = currentSituationOption[0].value;

        let getCandidateInfo = JSON.parse(localStorage.getItem("user"))
        let toBePostedCandidate = {
            "id": getCandidateInfo.id,
            phoneNumber,
            facebookUrl,
            currentLocation,
            currentSituation,
            currentSituationOption,
            "status": true,

        };
        let url = `http://${environment.api_url}/api/candidates/settings`;
        axios.put(url, toBePostedCandidate, { headers: { 'Content-Type': 'application/json' } }).then(res => {
            
        });
    }

    render() {
        const { t } = this.props

        /** get Candidate Name */
        const { updatedCandidateInfo } = this.state
        let getCandidateInfo = JSON.parse(localStorage.getItem("user"))


        let initYear = 1971;
        let yearCount = 2050;
        let years = []
        for (let x = initYear; x < yearCount; x++) {
            years.push(x)
        }

        let initMonth = 1;
        let months = []
        for (let x = initMonth; x <= 12; x++) {
            months.push(x)
        }
        // console.log('this is years', years)
        return (
            <div class="d-flex" id="wrapper">
                <SideBar />
                <div style={{ width: "85%" }} id="page-content-wrapper">

                    <Container >
                        <Row column sm={12} className='justify-content-md-center pt-4'>
                            <h3>
                                {t('registration.registration_form')}
                            </h3>
                        </Row>
                        <Row className="justify-content-md-center pt-4">
                            <Col md="8">
                                <Tabs defaultActiveKey="personalInfo" id="uncontrolled-tab-example">
                                    <Tab eventKey="personalInfo" className="pb-2" style={{ backgroundColor: "lightgray" }} title="Personal">
                                        <Form onSubmit={this.updatePersonalInfo} id="personalInfo">
                                            <Form.Group
                                                className="form-main-container"
                                                as={Row}
                                                controlId="formHorizontalName"
                                            >

                                            </Form.Group>

                                            <Form.Group
                                                className="form-main-container"
                                                as={Row}
                                                controlId="formHorizontalName"
                                            >
                                                <Form.Label column sm={3}>
                                                    {t('registration.full_name.title')}
                                                </Form.Label>
                                                <Form.Label column sm={9}>
                                                    <Form.Control name="full-name" type="text" value={getCandidateInfo.name}

                                                        placeholder={t('registration.full_name.placeholder')} required />
                                                </Form.Label>
                                            </Form.Group>
                                            <Form.Group
                                                className="form-main-container"
                                                as={Row}
                                                controlId="formHorizontalRomajiName"
                                            >
                                                <Form.Label column sm={3}>
                                                    {t('registration.romanji_name.title')}
                                                </Form.Label>
                                                <Form.Label column sm={9}>
                                                    <Form.Control name="full-name-roman" type="text" id="romajiName"
                                                        onChange={this.onChangeValue}
                                                        value={this.state.romajiName || (updatedCandidateInfo && updatedCandidateInfo.romajiName)}
                                                        placeholder={t('registration.romanji_name.placeholder')} required />
                                                </Form.Label>
                                            </Form.Group>
                                            <Form.Group
                                                className="form-main-container"
                                                as={Row}
                                                controlId="formHorizontalCountry"
                                            >
                                                <Form.Label column sm={3}>
                                                    {t('registration.country_resident.title')}
                                                </Form.Label>
                                                <Form.Label column sm={9}>
                                                    <select id="country" onChange={this.onChangeValue} name="country" value={this.state.country || (updatedCandidateInfo && updatedCandidateInfo.country)} className="form-control" required>

                                                        <option
                                                            value="">{t('registration.country_resident.dropdown.placeholder')}</option>
                                                        <option>{t('registration.country_resident.dropdown.option0')}</option>
                                                        <option>{t('registration.country_resident.dropdown.option1')}</option>
                                                        <option>{t('registration.country_resident.dropdown.option2')}</option>
                                                    </select>
                                                    <br />
                                                    <Form.Control onChange={this.onChangeValue} id="nationality" name="nationality" type="text"
                                                        value={this.state.nationality || (updatedCandidateInfo && updatedCandidateInfo.nationality)}
                                                        placeholder={t('registration.country_resident.nationality_placeholder')}
                                                        required />
                                                </Form.Label>
                                            </Form.Group>
                                            <Form.Group
                                                className="form-main-container"
                                                as={Row}
                                                controlId="formHorizontalRomajiName"
                                            >
                                                <Form.Label column sm={3}>
                                                    {t('registration.language_you_can_fully_understand.title')}
                                                </Form.Label>
                                                <Form.Label column sm={9}>
                                                    <Row name="language">
                                                        <Col sm={3}><input onClick={this.onSelectedCheckBox} name="language-check"
                                                            id='language-option'
                                                            type="checkbox"
                                                            required />{t('registration.language_you_can_fully_understand.check.option0')}
                                                        </Col>
                                                        <Col sm={3}><input onClick={this.onSelectedCheckBox} name="language-check"
                                                            id='language-option'
                                                            type="checkbox"
                                                            required />{t('registration.language_you_can_fully_understand.check.option1')}
                                                        </Col>
                                                        <Col sm={3}><input onClick={this.onSelectedCheckBox} name="language-check"
                                                            id='language-option'
                                                            type="checkbox"
                                                            required />{t('registration.language_you_can_fully_understand.check.option2')}
                                                        </Col>
                                                        <Col sm={3}><input onClick={this.onSelectedCheckBox} name="language-check"
                                                            id='language-option'
                                                            type="checkbox"
                                                            required />{t('registration.language_you_can_fully_understand.check.option3')}
                                                        </Col>
                                                    </Row>
                                                </Form.Label>
                                            </Form.Group>
                                            <Form.Group
                                                key={uuidv4()}
                                                className="form-main-container"
                                                as={Row}
                                                controlId="formHorizontalRomajiName"
                                            >
                                                <Form.Label column sm={3}>
                                                    {t('registration.date_of_birth.title')}
                                                </Form.Label>
                                                <Form.Label column sm={9}>
                                                    <Row>
                                                        <Col sm={4}>
                                                            <select className="form-control"
                                                                id="birthYear"
                                                                onChange={this.onChangeValue}
                                                                value={this.state.birthYear || (updatedCandidateInfo && updatedCandidateInfo.birthYear)}
                                                                name="year" required>
                                                                <option
                                                                    value="">{t('registration.date_of_birth.year_placeholder')}</option>
                                                                {
                                                                    years.map(item => {
                                                                        return (<option key={item} value={item}>{item}</option>)
                                                                    })
                                                                }
                                                            </select>
                                                        </Col>
                                                        <Col sm={4}><select id="birthMonth" onChange={this.onChangeValue} className="form-control" value={this.state.birthMonth || (updatedCandidateInfo && updatedCandidateInfo.birthMonth)} name="month" required>
                                                            <option
                                                                value="">{t('registration.date_of_birth.month_placeholder')}</option>
                                                            {
                                                                months.map(item => {
                                                                    return (<option key={uuidv4()} value={item}>{item}</option>)
                                                                })
                                                            }
                                                        </select>
                                                        </Col>
                                                        <Col sm={4}><input id="birthday" onChange={this.onChangeValue} className="form-control" type="text" name="day"
                                                            value={this.state.birthday || (updatedCandidateInfo && updatedCandidateInfo.birthday)}
                                                            placeholder={t('registration.date_of_birth.day_placeholder')}
                                                            required /></Col>

                                                    </Row>
                                                </Form.Label>
                                            </Form.Group>

                                            <Form.Group
                                                className="form-main-container"
                                                as={Row}
                                                controlId="formHorizontalCountry"
                                            >
                                                <Form.Label column sm={3}>
                                                    {t('registration.religion.title')}
                                                </Form.Label>
                                                <Form.Label column sm={9}>
                                                    <select name="religion"
                                                        id="religion"
                                                        onChange={this.onChangeValue}
                                                        value={this.state.religion || (updatedCandidateInfo && updatedCandidateInfo.religion)}
                                                        className="form-control" required>
                                                        <option value="">{t('registration.religion.dropdown.placeholder')}</option>
                                                        <option>{t('registration.religion.dropdown.option0')}</option>
                                                        <option>{t('registration.religion.dropdown.option1')}</option>
                                                        <option>{t('registration.religion.dropdown.option2')}</option>
                                                        <option>{t('registration.religion.dropdown.option3')}</option>
                                                        <option>{t('registration.religion.dropdown.option4')}</option>
                                                    </select>
                                                </Form.Label>
                                            </Form.Group>
                                            <Form.Group
                                                className="form-main-container"
                                                as={Row}
                                                controlId="formHorizontalCountry"
                                            >
                                                <Form.Label column sm={3}>
                                                    {t('registration.sex.title')}
                                                </Form.Label>
                                                <Form.Label column sm={9}>
                                                    <select name="sex"
                                                        id="gender"
                                                        onChange={this.onChangeValue}
                                                        className="form-control"
                                                        value={this.state.gender || (updatedCandidateInfo && updatedCandidateInfo.gender)} required>
                                                        <option value="">{t('registration.sex.dropdown.placeholder')}</option>
                                                        <option>{t('registration.sex.dropdown.option0')}</option>
                                                        <option>{t('registration.sex.dropdown.option1')}</option>
                                                        <option>{t('registration.sex.dropdown.option2')}</option>
                                                    </select>
                                                </Form.Label>
                                            </Form.Group>


                                            <Form.Group
                                                className="form-main-container"
                                                as={Row}
                                                controlId="formHorizontalCountry"
                                            >
                                                <Form.Label column sm={3}>
                                                    {t('registration.height_weight.title')}
                                                </Form.Label>
                                                <Form.Label column sm={9}>
                                                    <Row>
                                                        <Col sm={6}><input name="height-value" type="text"
                                                            id="height"
                                                            onChange={this.onChangeValue}
                                                            value={this.state.height || (updatedCandidateInfo && updatedCandidateInfo.height)}
                                                            placeholder={t('registration.height_weight.height.placeholder')}
                                                            className="form-control" required /></Col>
                                                        <Col sm={6}>
                                                            <select name="height-unit"
                                                                id="heightUnit"
                                                                onChange={this.onChangeValue}
                                                                value={this.state.heightUnit || (updatedCandidateInfo && updatedCandidateInfo.heightUnit)}
                                                                className="form-control" required>
                                                                <option
                                                                    value="">{t('registration.height_weight.height.unit_placeholder')}</option>
                                                                <option>{t('registration.height_weight.height.option0')}</option>
                                                                <option>{t('registration.height_weight.height.option1')}</option>
                                                            </select>
                                                        </Col>
                                                    </Row>
                                                    <Row style={{ height: '10px' }}></Row>
                                                    <Row>
                                                        <Col sm={6}><input name="weight-value" type="text"
                                                            id="weight"
                                                            onChange={this.onChangeValue}
                                                            value={this.state.weight || (updatedCandidateInfo && updatedCandidateInfo.weight)}
                                                            placeholder={t('registration.height_weight.weight.placeholder')}
                                                            className="form-control" required /></Col>
                                                        <Col sm={6}>
                                                            <select
                                                            id="weightUnit"
                                                            onChange={this.onChangeValue}
                                                            value={this.state.weightUnit || (updatedCandidateInfo && updatedCandidateInfo.weightUnit)} 
                                                            name="weight-unit" className="form-control" required>
                                                                <option
                                                                    value="">{t('registration.height_weight.weight.unit_placeholder')}</option>
                                                                <option>{t('registration.height_weight.weight.option0')}</option>
                                                                <option>{t('registration.height_weight.weight.option1')}</option>
                                                            </select>
                                                        </Col>
                                                    </Row>
                                                </Form.Label>
                                            </Form.Group>
                                            <Form.Group
                                                className="form-main-container"
                                                as={Row}
                                                controlId="formHorizontalCountry"
                                            >
                                                <Form.Label column sm={3}>
                                                    {t('registration.eyesight_hearing.title')}
                                                </Form.Label>
                                                <Form.Label column sm={9}>
                                                    <Row>
                                                        <Col sm={3}>{t('registration.eyesight_hearing.eyesight.title')}</Col>
                                                        <Col sm={8}>
                                                            <select
                                                                id="eyeSight"
                                                                onChange={this.onChangeValue}
                                                                value={this.state.eyeSight || (updatedCandidateInfo && updatedCandidateInfo.eyeSight)}

                                                                name="eyesight"
                                                                className="form-control" required>
                                                                <option
                                                                    value="">{t('registration.eyesight_hearing.eyesight.placeholder')}</option>
                                                                <option>{t('registration.eyesight_hearing.eyesight.option0')}</option>
                                                                <option>{t('registration.eyesight_hearing.eyesight.option1')}</option>
                                                                <option>{t('registration.eyesight_hearing.eyesight.option2')}</option>
                                                            </select>
                                                        </Col>
                                                    </Row>
                                                    <Row style={{ height: '10px' }}></Row>
                                                    <Row>
                                                        <Col sm={3}>{t('registration.eyesight_hearing.hearing.title')}</Col>
                                                        <Col sm={8}>
                                                            <select
                                                                id="hearing"
                                                                onChange={this.onChangeValue}
                                                                value={this.state.hearing || (updatedCandidateInfo && updatedCandidateInfo.hearing)}

                                                                name="hearing" className="form-control"
                                                                required>
                                                                <option
                                                                    value="">{t('registration.eyesight_hearing.hearing.placeholder')}</option>
                                                                <option>{t('registration.eyesight_hearing.hearing.option0')}</option>
                                                                <option>{t('registration.eyesight_hearing.hearing.option1')}</option>
                                                            </select>
                                                        </Col>
                                                    </Row>
                                                </Form.Label>
                                            </Form.Group>
                                            <Form.Group
                                                className="form-main-container"
                                                as={Row}
                                                controlId="formHorizontalCountry"
                                            >
                                                <Form.Label column sm={3}>
                                                    {t('registration.foot_size.title')}
                                                </Form.Label>
                                                <Form.Label column sm={9}>
                                                    <Row>
                                                        <Col sm={3}><input name="foot-size-value" type="text"
                                                            id="footSize"
                                                            onChange={this.onChangeValue}
                                                            value={this.state.footSize || (updatedCandidateInfo && updatedCandidateInfo.footSize)}

                                                            placeholder={t('registration.foot_size.title')}
                                                            className="form-control" required /></Col>
                                                        <Col sm={8}>
                                                            <select
                                                                id="footSizeUnit"
                                                                onChange={this.onChangeValue}
                                                                value={this.state.footSizeUnit || (updatedCandidateInfo && updatedCandidateInfo.footSizeUnit)}

                                                                name="foot-size-unit" className="form-control" required>
                                                                <option
                                                                    value="">{t('registration.foot_size.dropdown.placeholder')}</option>
                                                                <option>{t('registration.foot_size.dropdown.option0')}</option>
                                                                <option>{t('registration.foot_size.dropdown.option1')}</option>
                                                            </select>
                                                        </Col>
                                                    </Row>
                                                </Form.Label>
                                            </Form.Group>
                                            <div className="d-flex pt-2">
                                                <div className="col-6"></div>
                                                <div style={{ textAlign: "right" }} className="col-6 ">
                                                    <Button type="submit">Update</Button>
                                                </div>
                                            </div>
                                        </Form>
                                    </Tab>
                                    <Tab eventKey="workExperience" className="pb-2" style={{ backgroundColor: "lightgray" }} title="Work Experience">
                                        <Form onSubmit={this.updateWorkExperience} className="workExperience">


                                            <Form.Group
                                                className="form-main-container"
                                                as={Row}
                                                controlId="formHorizontalCountry"
                                            >
                                                <Form.Label column sm={3}>
                                                    {t('registration.work_experience.title')}
                                                </Form.Label>

                                                <Form.Label column sm={9}>
                                                    <Row>
                                                        <Col sm={6}>
                                                            <select onClick={this.onWorkExperienceSelected}
                                                            id="workExperience0"
                                                            onChange={this.onChangeValue}
                                                            value={this.state.workExperience0}
                                                            name="work-experience-0"
                                                                className="form-control work-experience" required>
                                                                <option
                                                                    value="">{t('registration.work_experience.dropdown.placeholder0')}</option>
                                                                <option>{t('registration.work_experience.dropdown.option0')}</option>
                                                                <option>{t('registration.work_experience.dropdown.option1')}</option>
                                                                <option>{t('registration.work_experience.dropdown.option2')}</option>
                                                            </select>
                                                        </Col>
                                                        <Col sm={6}>
                                                            <input onChange={this.onWorkExperienceValueEntered}
                                                                id="workExperience0Value"
                                                                value={this.state.workExperience0Value}
                                                                name="work-experience-0-value" type="text"
                                                                className="form-control work-experience-value" required />
                                                        </Col>
                                                    </Row>
                                                    <Row>
                                                        <Col sm={6}>
                                                            <select onClick={this.onWorkExperienceSelected} name="work-experience-1"
                                                                  id="workExperience1"
                                                                  onChange={this.onChangeValue}
                                                                  value={this.state.workExperience1}
                                                                className="form-control work-experience" required>
                                                                <option
                                                                    value="">{t('registration.work_experience.dropdown.placeholder1')}</option>
                                                                <option>{t('registration.work_experience.dropdown.option0')}</option>
                                                                <option>{t('registration.work_experience.dropdown.option1')}</option>
                                                                <option>{t('registration.work_experience.dropdown.option2')}</option>
                                                            </select>
                                                        </Col>
                                                        <Col sm={6}>
                                                            <input onChange={this.onWorkExperienceValueEntered}
                                                                   id="workExperience1Value"
                                                                   value={this.state.workExperience1Value}
                                                                name="work-experience-1-value" type="text"
                                                                className="form-control work-experience-value" required />
                                                        </Col>
                                                    </Row>
                                                    <Row>
                                                        <Col sm={6}>
                                                            <select onClick={this.onWorkExperienceSelected} name="work-experience-2"
                                                              id="workExperience2"
                                                              onChange={this.onChangeValue}
                                                              value={this.state.workExperience2}
                                                                className="form-control work-experience" required>
                                                                <option
                                                                    value="">{t('registration.work_experience.dropdown.placeholder2')}</option>
                                                                <option>{t('registration.work_experience.dropdown.option0')}</option>
                                                                <option>{t('registration.work_experience.dropdown.option1')}</option>
                                                                <option>{t('registration.work_experience.dropdown.option2')}</option>
                                                            </select>
                                                        </Col>
                                                        <Col sm={6}>
                                                            <input onChange={this.onWorkExperienceValueEntered}
                                                                 id="workExperience2Value"
                                                                 value={this.state.workExperience2Value}
                                                                name="work-experience-2-value" type="text"
                                                                className="form-control work-experience-value" required />
                                                        </Col>
                                                    </Row>
                                                </Form.Label>
                                            </Form.Group>
                                            <Form.Group
                                                className="form-main-container"
                                                as={Row}
                                                controlId="formHorizontalCountry"
                                            >
                                                <Form.Label column sm={3}>
                                                    {t('registration.specific_skills.title')}
                                                </Form.Label>

                                                <Form.Label column sm={9}>
                                                    <Row>
                                                        <Col sm={6}>
                                                            <select
                                                            id="specificSkills"
                                                            onChange={this.onChangeValue}
                                                            value={this.state.specificSkills || (updatedCandidateInfo && updatedCandidateInfo.specificSkills)}
                                                            name="skills" className="form-control" required>
                                                                <option
                                                                    value="">{t('registration.specific_skills.dropdown.placeholder')}</option>
                                                                <option>{t('registration.specific_skills.dropdown.option0')}</option>
                                                                <option>{t('registration.specific_skills.dropdown.option1')}</option>
                                                                <option>{t('registration.specific_skills.dropdown.option2')}</option>
                                                            </select>
                                                        </Col>
                                                        <Col sm={6}>
                                                            <input name="skills-text" type="text" 
                                                              id="specificSkillsOption"
                                                              onChange={this.onChangeValue}
                                                              value={this.state.specificSkillsOption || (updatedCandidateInfo && updatedCandidateInfo.specificSkillsOption)}
                                                            className="form-control" required />
                                                        </Col>
                                                    </Row>
                                                </Form.Label>
                                            </Form.Group>
                                            <Form.Group
                                                className="form-main-container"
                                                as={Row}
                                                controlId="formHorizontalRomajiName"
                                            >
                                                <Form.Label column sm={3}>
                                                    {t('registration.meritial_status.title')}
                                                </Form.Label>
                                                <Form.Label column sm={9}>
                                                    <Col sm={4}>
                                                        <input name="marital" type="radio" value="married"
                                                            onChange={this.onChangeValue}
                                                            checked={this.state.marital === "married" || (updatedCandidateInfo && updatedCandidateInfo.maritalStatus) === "married"}
                                                            required /> {t('registration.meritial_status.check.option0')}
                                                    </Col>
                                                    <Col sm={4}>
                                                        <input name="marital" type="radio" value="unmarried"
                                                            checked={this.state.marital === "unmarried" || (updatedCandidateInfo && updatedCandidateInfo.maritalStatus)  === "unmarried"}
                                                        onChange={this.onChangeValue}
                                                            required /> {t('registration.meritial_status.check.option1')}
                                                    </Col>
                                                </Form.Label>
                                            </Form.Group>
                                            <Form.Group
                                                className="form-main-container"
                                                as={Row}
                                                controlId="formHorizontalRomajiName"
                                            >
                                                <Form.Label column sm={3}>
                                                    {t('registration.cronic_disease.title')}
                                                </Form.Label>
                                                <Form.Label column sm={9}>
                                                    <Form.Control
                                                    id="chronicDisease"
                                                    onChange={this.onChangeValue}
                                                    value={this.state.chronicDisease || (updatedCandidateInfo && updatedCandidateInfo.chronicDisease)}
                                                    name="chronic-disease" type="text" required />
                                                </Form.Label>
                                            </Form.Group>

                                            <Form.Group
                                                className="form-main-container"
                                                as={Row}
                                                controlId="formHorizontalCountry"
                                            >
                                                <Form.Label column sm={3}>
                                                    {t('registration.japanese_language_skills.title')}
                                                </Form.Label>

                                                <Form.Label column sm={9}>
                                                    <select 
                                                    name="japanese-language-skills" 
                                                    id="japaneseLanguageSkill"
                                                    onChange={this.onChangeValue}
                                                    value={this.state.japaneseLanguageSkill || (updatedCandidateInfo && updatedCandidateInfo.japaneseLanguageSkill)}
                                                    className="form-control" required>
                                                        <option
                                                            value="">{t('registration.japanese_language_skills.dropdown.placeholder')}</option>
                                                        <option>{t('registration.japanese_language_skills.dropdown.option0')}</option>
                                                        <option>{t('registration.japanese_language_skills.dropdown.option1')}</option>
                                                        <option>{t('registration.japanese_language_skills.dropdown.option2')}</option>
                                                        <option>{t('registration.japanese_language_skills.dropdown.option3')}</option>
                                                        <option>{t('registration.japanese_language_skills.dropdown.option4')}</option>
                                                    </select>
                                                </Form.Label>
                                            </Form.Group>

                                            <Form.Group
                                                className="form-main-container"
                                                as={Row}
                                                controlId="formHorizontalCountry"
                                            >
                                                <Form.Label column sm={3}>
                                                    {t('registration.desired_job.title')}
                                                </Form.Label>
                                                <Form.Label column sm={9}>
                                                    <Row>
                                                        <Col sm={3}> <input onClick={this.onSelectedCheckBox} name="job" type="checkbox"
                                                            id='job-option'
                                                            required />{t('registration.desired_job.check.option0')}
                                                        </Col>
                                                        <Col sm={3}> <input onClick={this.onSelectedCheckBox} name="job" type="checkbox"
                                                            id='job-option'
                                                            required />{t('registration.desired_job.check.option1')}
                                                        </Col>
                                                        <Col sm={3}> <input onClick={this.onSelectedCheckBox} name="job" type="checkbox"
                                                            id='job-option'
                                                            required />{t('registration.desired_job.check.option2')}
                                                        </Col>
                                                        <Col sm={3}> <input onClick={this.onSelectedCheckBox} name="job" type="checkbox"
                                                            id='job-option'
                                                            required />{t('registration.desired_job.check.option3')}
                                                        </Col>
                                                        <Col sm={3}> <input onClick={this.onSelectedCheckBox} name="job" type="checkbox"
                                                            id='job-option'
                                                            required />{t('registration.desired_job.check.option4')}
                                                        </Col>
                                                    </Row>
                                                </Form.Label>
                                            </Form.Group>


                                            <div className="d-flex pt-2">
                                                <div className="col-6"></div>
                                                <div style={{ textAlign: "right" }} className="col-6 ">
                                                    <Button type="submit">Update</Button>
                                                </div>
                                            </div>
                                        </Form>
                                    </Tab>
                                    <Tab eventKey="settings" className="pb-2" style={{ backgroundColor: "lightgray" }} title="settings">
                                        <Form onSubmit={this.onSubmitCandidateSetting} className="settingForm">

                                            <Form.Group
                                                className="form-main-container"
                                                as={Row}
                                                controlId="formHorizontalFullName"
                                            >
                                                <Form.Label column sm={3}>
                                                    {t('registration.email.title')}
                                                </Form.Label>
                                                <Form.Label column sm={9}>
                                                    <Form.Control name="email" value={getCandidateInfo.username} type="text" disabled
                                                        placeholder={t('registration.email.placeholder')} required />
                                                </Form.Label>
                                            </Form.Group>

                                            <Form.Group
                                                className="form-main-container"
                                                as={Row}
                                                controlId="formHorizontalFullName"
                                            >
                                                <Form.Label column sm={3}>
                                                    {t('registration.phonenumber.title')}
                                                </Form.Label>
                                                <Form.Label column sm={9}>
                                                    <Form.Control name="phone-number" type="text"
                                                        id="phoneNumber"
                                                        onChange={this.onChangeValue}
                                                        value={this.state.phoneNumber || (updatedCandidateInfo && updatedCandidateInfo.phoneNumber)}
                                                        placeholder={t('registration.phonenumber.placeholder')} required />
                                                </Form.Label>
                                            </Form.Group>
                                            <Form.Group
                                                className="form-main-container"
                                                as={Row}
                                                controlId="formHorizontalFullName"
                                            >
                                                <Form.Label column sm={3}>
                                                    {t('registration.facebook.title')}
                                                </Form.Label>
                                                <Form.Label column sm={9}>
                                                    <Form.Control name="facebook" type="text"
                                                        id="facebook"
                                                        onChange={this.onChangeValue}
                                                        value={this.state.facebook || (updatedCandidateInfo && updatedCandidateInfo.facebookUrl)}
                                                        placeholder={t('registration.facebook.placeholder')} required />
                                                </Form.Label>
                                            </Form.Group>
                                            <Form.Group
                                                className="form-main-container"
                                                as={Row}
                                                controlId="formHorizontalCountry"
                                            >
                                                <Form.Label column sm={3}>
                                                    {t('registration.current_location.title')}
                                                </Form.Label>
                                                <Form.Label column sm={9}>
                                                    <select
                                                    id="currentLocation"
                                                    onChange={this.onChangeValue}
                                                    value={this.state.currentLocation || (updatedCandidateInfo && updatedCandidateInfo.currentLocation)}
                                                    name="currentlocation" className="form-control" required>
                                                        <option>{t('registration.current_location.dropdown.placeholder')}</option>
                                                        <option>{t('registration.current_location.dropdown.option0')}</option>
                                                        <option>{t('registration.current_location.dropdown.option1')}</option>
                                                    </select>
                                                </Form.Label>
                                            </Form.Group>
                                            <Form.Group
                                                className="form-main-container"
                                                as={Row}
                                                controlId="formHorizontalCountry"
                                            >
                                                <Form.Label column sm={3}>
                                                    {t('registration.current_situation.title')}
                                                </Form.Label>

                                                <Form.Label column sm={9}>
                                                    <Row>
                                                        <Col sm={12}>
                                                            <select 
                                                             id="currentSituation"
                                                             onChange={this.onChangeValue}
                                                             value={this.state.currentSituation || (updatedCandidateInfo && updatedCandidateInfo.currentSituation)}
                                                             name="current-situation" className="form-control" required>
                                                                <option
                                                                    value="">{t('registration.current_situation.dropdown.placeholder')}</option>
                                                                <option>{t('registration.current_situation.dropdown.option0')}</option>
                                                                <option>{t('registration.current_situation.dropdown.option1')}</option>
                                                                <option>{t('registration.current_situation.dropdown.option2')}</option>
                                                                <option>{t('registration.current_situation.dropdown.option3')}</option>
                                                            </select>
                                                        </Col>
                                                    </Row>
                                                    <Row>
                                                        <Col sm={12}>
                                                            <input name="current-situation-text" type="text" className="form-control"
                                                                 id="currentSituationOption"
                                                                 onChange={this.onChangeValue}
                                                                 value={this.state.currentSituationOption || (updatedCandidateInfo && updatedCandidateInfo.currentSituationOption)}
                                                        
                                                                required />
                                                        </Col>
                                                    </Row>
                                                </Form.Label>
                                            </Form.Group>
                                            <div className="d-flex pt-2">
                                                <div className="col-6"></div>
                                                <div style={{ textAlign: "right" }} className="col-6 ">
                                                    <Button type="submit">Update</Button>
                                                </div>
                                            </div>
                                        </Form>
                                    </Tab>
                                    <Tab eventKey="photoUpload" className="pb-2" style={{ backgroundColor: "lightgray" }} title="Photos">
                                        <Form id="frmPhotoUpload">
                                            <Form.Group
                                                className="form-main-container"
                                                as={Row}
                                                controlId="formHorizontalCountry"
                                            >
                                                <Form.Label column sm={3}>
                                                    {t('registration.half_body_photo.title')}
                                                </Form.Label>
                                                <Form.Label column sm={9}>
                                                    <input
                                                        hidden
                                                        className="form-control" type="file"
                                                        id='upload-image-half'
                                                        onChange={(e) => {
                                                            console.log(e.target.files)
                                                            this.setState({
                                                                halfBodyPhoto: e.target.files[0]
                                                            })
                                                        }}
                                                    />

                                                    <label htmlFor="upload-image-half" className="upload-button">
                                                        <i className="ui upload icon"></i>
                                        Upload image
                                    </label>

                                                </Form.Label>
                                            </Form.Group>
                                            <Form.Group
                                                className="form-main-container"
                                                as={Row}
                                                controlId="formHorizontalCountry"
                                            >
                                                <Form.Label column sm={3}>
                                                    {t('registration.passport_photo.title')}
                                                </Form.Label>
                                                <Form.Label column sm={9}>
                                                    <input
                                                        hidden
                                                        id='upload-image-passport'
                                                        className="form-control" type="file"
                                                        onChange={(e) => {
                                                            this.setState({
                                                                passportPhoto: e.target.files[0]
                                                            })
                                                        }}
                                                    />

                                                    <label htmlFor="upload-image-passport" className="upload-button">
                                                        <i className="ui upload icon"></i>
                                        Upload image
                                    </label>
                                                </Form.Label>
                                            </Form.Group>
                                            <div className="d-flex pt-2">
                                                <div className="col-6"></div>
                                                <div style={{ textAlign: "right" }} className="col-6 ">
                                                    <Button type="submit">Update</Button>
                                                </div>
                                            </div>

                                        </Form>
                                    </Tab>


                                </Tabs>
                            </Col>
                        </Row>
                        <Row className="justify-content-md-center">
                            <Col md="8">

                            </Col>
                        </Row>

                    </Container>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => ({})

const mapDispatchToProps = dispatch => {
    return {
        saveCandidateInfoForm: (formData) => dispatch(saveCandidateInfoFromApi(formData)),
        // saveCandidateHalfBodyPhoto: (imageData) => dispatch(saveCandidateHalfBodyPhotoThroughAPI(imageData)),
        // saveCandidatePassport: (imageData) => dispatch(saveCandidatePassportThroughAPI(imageData))
    }
}

export default withTranslation()(connect(mapStateToProps, mapDispatchToProps)(Profile))




