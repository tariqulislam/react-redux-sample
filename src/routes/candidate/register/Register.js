import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { withTranslation, Trans } from 'react-i18next'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {saveCandidateInfoFromApi, saveCandidateHalfBodyPhotoThroughAPI, saveCandidatePassportThroughAPI} from '../../../reducers/Candidate/candidate.reducer'

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

      onSubmitCandidateData = (e) => {
          e.preventDefault();

          let fullName = document.getElementsByName("full-name");
          fullName = fullName[0].value;
          let romajiName = document.getElementsByName("full-name-roman");
          romajiName = romajiName[0].value;

          let nickName = document.getElementsByName("nick-name");
          nickName = nickName[0].value;

          let country = document.getElementsByName("country");
          country = country[0].value;

          let nationality = document.getElementsByName("nationalty");
          nationality = nationality[0].value;

          let language = document.getElementsByName("language-check");
          let selectedLanguages = [];
          language.forEach(lan => {
              if(lan.checked === true) {
                  selectedLanguages.push(lan.parentNode.innerText);
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

          // Half Body Picture
          // Passport Picture

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

          let email = document.getElementsByName("email");
          email = email[0].value;

          let password = document.getElementsByName("password");
          password = password[0].value;
          let retypedPassword = document.getElementsByName("retyped-password");
          retypedPassword = retypedPassword[0].value;

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

          let maritalStatus = document.getElementsByName("marital");
          let selectedStatus;
          // maritalStatus = maritalStatus[0].value;

          maritalStatus.forEach(lan => {
              if(lan.checked === true) {
                  selectedStatus = lan.parentNode.innerText;
              }
          })

          let chronicDisease = document.getElementsByName("chronic-disease");
          chronicDisease = chronicDisease[0].value;

          let japaneseLanguageSkill = document.getElementsByName("japanese-language-skills");
          japaneseLanguageSkill = japaneseLanguageSkill[0].value;

          let jobs = document.getElementsByName("job");
          let selectedJobs = [];

          jobs.forEach(job => {
            if(job.checked === true) {
              selectedJobs.push({
                "description": job.parentNode.innerText,
                "name": job.parentNode.innerText
              });
            }
          })

          let termsAndConditions = document.getElementsByName("terms-and-conditions");
          termsAndConditions = termsAndConditions[0].value;

          let toBePostedCandidate = {

            acceptTermsfAndConditions: true,

            romanName,
            nickName,
            country,
            nationality,
            selectedLanguages,
            "birthYear": yearOfBirth,
            "birthMonth": monthOfBirth,
            "birthday": dayOfBirth,
            religion,
            "gender": sex.toUpperCase(),
            height,
            heightUnit,
            weight,
            weightUnit,
            eyeSight,
            hearing,
            footSize,
            footSizeUnit,
            "candidate": {
              email,
              "name": fullName,
              password,
              "username": email   //  No username found.
            },
            retypedPassword,
            phoneNumber,
            facebookUrl,
            currentLocation,
            currentSituation,
            currentSituationOption,
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
            maritalStatus,
            selectedStatus,
            chronicDisease,
            japaneseLanguageSkill,
            "desiredJobs": selectedJobs,
            termsAndConditions
          }

          // debugger
          this.props.saveCandidateInfoForm(toBePostedCandidate).then(res => {
            console.log(res)
          })
      }

      render() {
        const {t} = this.props
        console.log('-------------------------')
        console.log(withTranslation)
        console.log('-------------------------')

          let initYear = 1971;
          let yearCount = 2050;
          let years = []
        for(let x = initYear; x< yearCount; x++) {
           years.push(x)
        }

        let initMonth = 1;
        let months = []
        for(let x = initMonth; x <= 12; x++) {
          months.push(x)
        }
        console.log('this is years', years)
        return (
          <Container>
            <Row className="justify-content-md-center">
              <Col md="auto">
                <h3>{t('registration.registration_form')}</h3>
              </Col>
            </Row>
            <Row className="justify-content-md-center">
              <Col md="8">
                <Form style={{ width: "100%" }}>
                  <Form.Group
                    className="form-main-container"
                    as={Row}
                    controlId="formHorizontalName"
                  >
                    <Form.Label column sm={3}>
                     {t('registration.full_name.title')}
                    </Form.Label>
                    <Col sm={9}>
                      <Form.Control name="full-name" type="text" placeholder={t('registration.full_name.placeholder')} />
                    </Col>
                  </Form.Group>
                  <Form.Group
                    className="form-main-container"
                    as={Row}
                    controlId="formHorizontalRomajiName"
                  >
                    <Form.Label column sm={3}>
                    {t('registration.romanji_name.title')}
                    </Form.Label>
                    <Col sm={9}>
                      <Form.Control name="full-name-roman" type="text" placeholder= {t('registration.romanji_name.placeholder')} />
                    </Col>
                  </Form.Group>

                  <Form.Group
                    className="form-main-container"
                    as={Row}
                    controlId="formHorizontalRomajiName"
                  >
                    <Form.Label column sm={3}>
                     　{t('registration.nick_name.title')}
                    </Form.Label>
                    <Col sm={9}>
                      <Form.Control name="nick-name" type="text" placeholder={t('registration.nick_name.placeholder')} />
                    </Col>
                  </Form.Group>
                  <Form.Group
                    className="form-main-container"
                    as={Row}
                    controlId="formHorizontalCountry"
                  >
                    <Form.Label column sm={3}>
                      {t('registration.country_resident.title')}
                    </Form.Label>
                    <Col sm={9}>
                        <select name="country" className="form-control">
                            {/*<option>-- Select One --</option>*/}
                            <option>{t('registration.country_resident.dropdown.placeholder')}</option>
                            {/*<option>Japan </option>*/}
                            <option>{t('registration.country_resident.dropdown.option0')}</option>
                            {/*<option>Nepal</option>*/}
                            <option>{t('registration.country_resident.dropdown.option1')}</option>
                            {/*<option>Vitnam</option>*/}
                            <option>{t('registration.country_resident.dropdown.option2')}</option>
                        </select>
                      <br/>
                      <Form.Control name="nationality" type="text" placeholder={t('registration.country_resident.nationality_placeholder')} />
                    </Col>
                  </Form.Group>
                  <Form.Group
                    className="form-main-container"
                    as={Row}
                    controlId="formHorizontalRomajiName"
                  >
                    <Form.Label column sm={3}>
                      {t('registration.language_you_can_fully_understand.title')}
                    </Form.Label>
                    <Col sm={9}>
                      <Row name="language">
                        <Col sm={3}><input name="language-check" type="checkbox" />{t('registration.language_you_can_fully_understand.check.option0')}</Col>
                        <Col sm={3}><input name="language-check" type="checkbox" />{t('registration.language_you_can_fully_understand.check.option1')}</Col>
                        <Col sm={3}><input name="language-check" type="checkbox" />{t('registration.language_you_can_fully_understand.check.option2')}</Col>
                        <Col sm={3}><input name="language-check" type="checkbox" />{t('registration.language_you_can_fully_understand.check.option3')}</Col>
                      </Row>
                    </Col>
                  </Form.Group>
                  <Form.Group
                    className="form-main-container"
                    as={Row}
                    controlId="formHorizontalRomajiName"
                  >
                    <Form.Label column sm={3}>
                      {t('registration.date_of_birth.title')}
                    </Form.Label>
                    <Col sm={9}>
                      <Row>
                        <Col sm={4}>
                          <select className="form-control" name="year" >
                            <option>{t('registration.date_of_birth.year_placeholder')}</option>
                            {
                              years.map(item => {
                                return (<option value={item}>{item}</option>)
                              })
                            }
                          </select>
                        </Col>
                        <Col sm={4}><select className="form-control" name="month" >
                            <option>{t('registration.date_of_birth.month_placeholder')}</option>
                          {
                            months.map(item => {
                              return (<option value={item}>{item}</option>)
                            })
                          }
                          </select>
                          </Col>
                        <Col sm={4}><input  className="form-control" type="text" name="day" placeholder={t('registration.date_of_birth.day_placeholder')} /></Col>

                      </Row>
                    </Col>
                  </Form.Group>

                  <Form.Group
                    className="form-main-container"
                    as={Row}
                    controlId="formHorizontalCountry"
                  >
                    <Form.Label column sm={3}>
                      {t('registration.religion.title')}
                    </Form.Label>
                    <Col sm={9}>
                        <select name="religion" className="form-control">
                            <option>{t('registration.religion.dropdown.placeholder')}</option>
                            <option>{t('registration.religion.dropdown.option0')}</option>
                            <option>{t('registration.religion.dropdown.option1')}</option>
                            <option>{t('registration.religion.dropdown.option2')}</option>
                            <option>{t('registration.religion.dropdown.option3')}</option>
                            <option>{t('registration.religion.dropdown.option4')}</option>
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
                        <select name="sex" className="form-control">
                            <option>{t('registration.sex.dropdown.placeholder')}</option>
                            <option>{t('registration.sex.dropdown.option0')}</option>
                            <option>{t('registration.sex.dropdown.option1')}</option>
                            <option>{t('registration.sex.dropdown.option2')}</option>
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
                  <Form.Group
                    className="form-main-container"
                    as={Row}
                    controlId="formHorizontalCountry"
                  >
                    <Form.Label column sm={3}>
                     {t('registration.passport_photo.title')}
                    </Form.Label>
                    <Col sm={9}>
                       <input className="form-control" type="file" />

                    </Col>
                  </Form.Group>
                  <Form.Group
                    className="form-main-container"
                    as={Row}
                    controlId="formHorizontalCountry"
                  >
                    <Form.Label column sm={3}>
                      {t('registration.height_weight.title')}
                    </Form.Label>
                    <Col sm={9}>
                       <Row>
                         <Col sm={6}><input name="height-value" type="text" placeholder={t('registration.height_weight.height.placeholder')} className="form-control" /></Col>
                         <Col sm={6}>
                         <select name="height-unit" className="form-control">
                            <option>{t('registration.height_weight.height.unit_placeholder')}</option>
                            <option>{t('registration.height_weight.height.option0')}</option>
                            <option>{t('registration.height_weight.height.option1')}</option>
                        </select>
                         </Col>
                       </Row>
                       <Row style={{height: '10px'}}></Row>
                       <Row>
                         <Col sm={6}><input name="weight-value" type="text" placeholder={t('registration.height_weight.weight.placeholder')} className="form-control" /></Col>
                         <Col sm={6}>
                             <select name="weight-unit" className="form-control">
                                 <option>{t('registration.height_weight.weight.unit_placeholder')}</option>
                                 <option>{t('registration.height_weight.weight.option0')}</option>
                                 <option>{t('registration.height_weight.weight.option1')}</option>
                             </select>
                         </Col>
                       </Row>
                    </Col>
                  </Form.Group>
                  <Form.Group
                    className="form-main-container"
                    as={Row}
                    controlId="formHorizontalCountry"
                  >
                    <Form.Label column sm={3}>
                      {t('registration.eyesight_hearing.title')}
                    </Form.Label>
                    <Col sm={9}>
                       <Row>
                         <Col sm={3}>{t('registration.eyesight_hearing.eyesight.title')}</Col>
                         <Col sm={8}>
                         <select name="eyesight" className="form-control">
                            <option>{t('registration.eyesight_hearing.eyesight.placeholder')}</option>
                            <option>{t('registration.eyesight_hearing.eyesight.option0')}</option>
                            <option>{t('registration.eyesight_hearing.eyesight.option1')}</option>
                            <option>{t('registration.eyesight_hearing.eyesight.option2')}</option>
                        </select>
                         </Col>
                       </Row>
                       <Row style={{height: '10px'}}></Row>
                       <Row>
                         <Col sm={3}>{t('registration.eyesight_hearing.hearing.title')}</Col>
                         <Col sm={8}>
                         <select name="hearing" className="form-control">
                             <option>{t('registration.eyesight_hearing.hearing.placeholder')}</option>
                             <option>{t('registration.eyesight_hearing.hearing.option0')}</option>
                             <option>{t('registration.eyesight_hearing.hearing.option1')}</option>
                        </select>
                         </Col>
                       </Row>
                    </Col>
                  </Form.Group>
                  <Form.Group
                    className="form-main-container"
                    as={Row}
                    controlId="formHorizontalCountry"
                  >
                    <Form.Label column sm={3}>
                     {t('registration.foot_size.title')}
                    </Form.Label>
                    <Col sm={9}>
                       <Row>
                         <Col sm={3}><input name="foot-size-value" type="text" placeholder={t('registration.foot_size.title')} className="form-control" /></Col>
                         <Col sm={8}>
                         <select name="foot-size-unit" className="form-control">
                            <option>{t('registration.foot_size.dropdown.placeholder')}</option>
                            <option>{t('registration.foot_size.dropdown.option0')}</option>
                            <option>{t('registration.foot_size.dropdown.option1')}</option>
                        </select>
                         </Col>
                       </Row>
                    </Col>
                  </Form.Group>
                  <Form.Group
                    className="form-main-container"
                    as={Row}
                    controlId="formHorizontalFullName"
                  >
                    <Form.Label column sm={3}>
                     {t('registration.email.title')}
                    </Form.Label>
                    <Col sm={9}>
                      <Form.Control name="email" type="text" placeholder={t('registration.email.placeholder')} />
                    </Col>
                  </Form.Group>
                  <Form.Group
                    className="form-main-container"
                    as={Row}
                    controlId="formHorizontalFullName"
                  >
                    <Form.Label column sm={3}>
                     {t('registration.password.title')}
                    </Form.Label>
                    <Col sm={9}>
                      <Form.Control name="password" type="password" placeholder={t('registration.password.placeholder')} />
                    </Col>
                  </Form.Group>
                  <Form.Group
                    className="form-main-container"
                    as={Row}
                    controlId="formHorizontalFullName"
                  >
                    <Form.Label column sm={3}>
                     {t('registration.retypepassword.title')}
                    </Form.Label>
                    <Col sm={9}>
                      <Form.Control name="retyped-password" type="password" placeholder={t('registration.retypepassword.title')} />
                    </Col>
                  </Form.Group>
                  <Form.Group
                    className="form-main-container"
                    as={Row}
                    controlId="formHorizontalFullName"
                  >
                    <Form.Label column sm={3}>
                      {t('registration.phonenumber.title')}
                    </Form.Label>
                    <Col sm={9}>
                      <Form.Control name="phone-number" type="text" placeholder={t('registration.phonenumber.placeholder')} />
                    </Col>
                  </Form.Group>
                  <Form.Group
                    className="form-main-container"
                    as={Row}
                    controlId="formHorizontalFullName"
                  >
                    <Form.Label column sm={3}>
                      {t('registration.facebook.title')}
                    </Form.Label>
                    <Col sm={9}>
                      <Form.Control name="facebook" type="text" placeholder={t('registration.facebook.placeholder')}/>
                    </Col>
                  </Form.Group>
                  <Form.Group
                    className="form-main-container"
                    as={Row}
                    controlId="formHorizontalCountry"
                  >
                    <Form.Label column sm={3}>
                      {t('registration.current_location.title')}
                    </Form.Label>
                    <Col sm={9}>
                        <select name="currentlocation" className="form-control">
                            <option>{t('registration.current_location.dropdown.placeholder')}</option>
                            <option>{t('registration.current_location.dropdown.option0')}</option>
                            <option>{t('registration.current_location.dropdown.option1')}</option>
                        </select>

                    </Col>
                  </Form.Group>
                  <Form.Group
                    className="form-main-container"
                    as={Row}
                    controlId="formHorizontalCountry"
                  >
                    <Form.Label column sm={3}>
                      {t('registration.current_situation.title')}
                    </Form.Label>

                    <Col sm={9}>
                      <Row>
                        <Col sm={12}>
                        <select name="current-situation" className="form-control">
                            <option>{t('registration.current_situation.dropdown.placeholder')}</option>
                            <option>{t('registration.current_situation.dropdown.option0')}</option>
                            <option>{t('registration.current_situation.dropdown.option1')}</option>
                            <option>{t('registration.current_situation.dropdown.option2')}</option>
                            <option>{t('registration.current_situation.dropdown.option3')}</option>

                        </select>
                        </Col>

                      </Row>
                       <Row>
                         <Col sm={12}>
                         <input name="current-situation-text" type="text" className="form-control" />
                         </Col>

                       </Row>

                    </Col>
                  </Form.Group>
                  <Form.Group
                    className="form-main-container"
                    as={Row}
                    controlId="formHorizontalCountry"
                  >
                    <Form.Label column sm={3}>
                      {t('registration.work_experience.title')}
                    </Form.Label>

                    <Col sm={9}>
                      <Row>
                        <Col sm={6}>
                        <select name="work-experience-0" className="form-control">
                            <option>{t('registration.work_experience.dropdown.placeholder0')}</option>
                            <option>{t('registration.work_experience.dropdown.option0')}</option>
                            <option>{t('registration.work_experience.dropdown.option1')}</option>
                            <option>{t('registration.work_experience.dropdown.option2')}</option>
                        </select>
                        </Col>
                        <Col sm={6}>
                         <input name="work-experience-0-value" type="text" className="form-control" />
                         </Col>
                      </Row>
                      <Row>
                        <Col sm={6}>
                        <select name="work-experience-1" className="form-control">
                            <option>{t('registration.work_experience.dropdown.placeholder1')}</option>
                            <option>{t('registration.work_experience.dropdown.option0')}</option>
                            <option>{t('registration.work_experience.dropdown.option1')}</option>
                            <option>{t('registration.work_experience.dropdown.option2')}</option>
                        </select>
                        </Col>
                        <Col sm={6}>
                         <input name="work-experience-1-value" type="text" className="form-control" />
                         </Col>
                      </Row>

                      <Row>
                        <Col sm={6}>
                        <select name="work-experience-2" className="form-control">
                            <option>{t('registration.work_experience.dropdown.placeholder2')}</option>
                            <option>{t('registration.work_experience.dropdown.option0')}</option>
                            <option>{t('registration.work_experience.dropdown.option1')}</option>
                            <option>{t('registration.work_experience.dropdown.option2')}</option>
                        </select>
                        </Col>
                        <Col sm={6}>
                         <input name="work-experience-2-value" type="text" className="form-control" />
                         </Col>
                      </Row>

                    </Col>
                  </Form.Group>
                  <Form.Group
                    className="form-main-container"
                    as={Row}
                    controlId="formHorizontalCountry"
                  >
                    <Form.Label column sm={3}>
                      {t('registration.specific_skills.title')}
                    </Form.Label>

                    <Col sm={9}>
                      <Row>
                        <Col sm={6}>
                        <select name="skills" className="form-control">
                            <option>{t('registration.specific_skills.dropdown.placeholder')}</option>
                            <option>{t('registration.specific_skills.dropdown.option0')}</option>
                            <option>{t('registration.specific_skills.dropdown.option1')}</option>
                            <option>{t('registration.specific_skills.dropdown.option2')}</option>
                        </select>
                        </Col>
                        <Col sm={6}>
                         <input name="skills-text" type="text" className="form-control" />
                         </Col>
                      </Row>
                    </Col>
                  </Form.Group>
                  <Form.Group
                    className="form-main-container"
                    as={Row}
                    controlId="formHorizontalRomajiName"
                  >
                    <Form.Label column sm={3}>
                      {t('registration.meritial_status.title')}
                    </Form.Label>
                    <Col sm={9}>
                      <Col sm={4}>
                        <input name="marital" type="radio" value="married" /> {t('registration.meritial_status.check.option0')}
                      </Col>
                      <Col sm={4}>
                        <input name="marital"  type="radio" value="unmarried" /> {t('registration.meritial_status.check.option1')}
                      </Col>
                    </Col>
                  </Form.Group>
                  <Form.Group
                    className="form-main-container"
                    as={Row}
                    controlId="formHorizontalRomajiName"
                  >
                    <Form.Label column sm={3}>
                      {t('registration.cronic_disease.title')}
                    </Form.Label>
                    <Col sm={9}>
                        <Form.Control name="chronic-disease" type="text" />
                    </Col>
                  </Form.Group>

                  <Form.Group
                    className="form-main-container"
                    as={Row}
                    controlId="formHorizontalCountry"
                  >
                    <Form.Label column sm={3}>
                      {t('registration.japanese_language_skills.title')}
                    </Form.Label>

                    <Col sm={9}>

                        <select name="japanese-language-skills" className="form-control">
                            <option>{t('registration.japanese_language_skills.dropdown.placeholder')}</option>
                            <option>{t('registration.japanese_language_skills.dropdown.option0')}</option>
                            <option>{t('registration.japanese_language_skills.dropdown.option1')}</option>
                            <option>{t('registration.japanese_language_skills.dropdown.option2')}</option>
                            <option>{t('registration.japanese_language_skills.dropdown.option3')}</option>
                            <option>{t('registration.japanese_language_skills.dropdown.option4')}</option>
                        </select>
                        </Col>
                  </Form.Group>

                  <Form.Group
                    className="form-main-container"
                    as={Row}
                    controlId="formHorizontalCountry"
                  >
                    <Form.Label column sm={3}>
                      {t('registration.desired_job.title')}
                    </Form.Label>
                    <Col sm={9}>
                       <Row>
                       <Col sm={3}> <input name="job" type="checkbox" />{t('registration.desired_job.check.option0')}</Col>
                       <Col sm={3}> <input name="job" type="checkbox" />{t('registration.desired_job.check.option1')}</Col>
                       <Col sm={3}> <input name="job" type="checkbox" />{t('registration.desired_job.check.option2')}</Col>
                       <Col sm={3}> <input name="job" type="checkbox" />{t('registration.desired_job.check.option3')}</Col>
                       <Col sm={3}> <input name="job" type="checkbox" />{t('registration.desired_job.check.option4')}</Col>
                       </Row>

                    </Col>
                  </Form.Group>

                  <Form.Group
                    className="form-main-container"
                    as={Row}
                    controlId="formHorizontalCountry"
                  >
                    <Form.Label column sm={3}>
                      {t('registration.terms_conditions.title')}
                    </Form.Label>
                    <Col sm={9}>
                      <textarea name="terms-and-conditions" style={{width: '100%'}} cols="40" rows="5"></textarea>

                    </Col>
                  </Form.Group>

                  <Form.Group
                    className="form-main-container"
                    as={Row}
                    controlId="formHorizontalCountry"
                  >
                    <Form.Label column sm={3}>

                    </Form.Label>
                    <Col sm={9}>
                      <Button onClick={this.onSubmitCandidateData} type="button"> {t('registration.register_to_site.title')} </Button>
                    </Col>
                  </Form.Group>

                </Form>

              </Col>
            </Row>
          </Container>
        );
      }
    }

    const mapStateToProps = state => ({

    })

    const mapDispatchToProps = dispatch => {
      return {
        saveCandidateInfoForm: (formData) => dispatch(saveCandidateInfoFromApi(formData)),
        // saveCandidateHalfBodyPhoto: (imageData) => dispatch(saveCandidateHalfBodyPhotoThroughAPI(imageData)),
        // saveCandidatePassport: (imageData) => dispatch(saveCandidatePassportThroughAPI(imageData))
      }
    }

    export default withTranslation()(connect(mapStateToProps, mapDispatchToProps)(Register))




