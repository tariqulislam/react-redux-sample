import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { withTranslation, Trans } from 'react-i18next'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {saveCandidateInfoFromApi} from '../../../reducers/Candidate/candidate.reducer'

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
    debugger
    this.props.saveCandidateInfoForm({email: 'ttt', name: 'ddddd'})
  }

  render() {
    const {t} = this.props

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
                  <Form.Control type="text" placeholder={t('registration.full_name.placeholder')} />
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
                  <Form.Control type="text" placeholder= {t('registration.romanji_name.placeholder')} />
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
                  <Form.Control type="text" placeholder={t('registration.nick_name.placeholder')} />
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
                  <Form.Control type="text" placeholder={t('registration.country_resident.nationality_placeholder')} />
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
                  <Row>
                    <Col sm={3}><input type="checkbox" />{t('registration.language_you_can_fully_understand.check.option0')}</Col>
                    <Col sm={3}><input type="checkbox" />{t('registration.language_you_can_fully_understand.check.option1')}</Col>
                    <Col sm={3}><input type="checkbox" />{t('registration.language_you_can_fully_understand.check.option2')}</Col>
                    <Col sm={3}><input type="checkbox" />{t('registration.language_you_can_fully_understand.check.option3')}</Col>
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
                    <select name="religion" className="form-control">
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
                     <Col sm={6}><input type="text" placeholder={t('registration.height_weight.height.placeholder')} className="form-control" /></Col>
                     <Col sm={6}>
                     <select name="religion" className="form-control">
                        <option>{t('registration.height_weight.height.unit_placeholder')}</option>
                        <option>{t('registration.height_weight.height.option0')}</option>
                        <option>{t('registration.height_weight.height.option1')}</option>
                    </select>
                     </Col>
                   </Row>
                   <Row style={{height: '10px'}}></Row>
                   <Row>
                     <Col sm={6}><input type="text" placeholder={t('registration.height_weight.weight.placeholder')} className="form-control" /></Col>
                     <Col sm={6}>
                         <select name="religion" className="form-control">
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
                     <select name="religion" className="form-control">
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
                     <select name="religion" className="form-control">
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
                     <Col sm={3}><input type="text" placeholder={t('registration.foot_size.title')} className="form-control" /></Col>
                     <Col sm={8}>
                     <select name="religion" className="form-control">
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
                  <Form.Control type="text" placeholder={t('registration.email.placeholder')} />
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
                  <Form.Control type="password" placeholder={t('registration.password.placeholder')} />
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
                  <Form.Control type="password" placeholder={t('registration.retypepassword.title')} />
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
                  <Form.Control type="text" placeholder={t('registration.phonenumber.placeholder')} />
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
                  <Form.Control type="text" placeholder={t('registration.facebook.placeholder')}/>
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
                    <select name="religion" className="form-control">
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
                     <input type="text" className="form-control" />
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
                    <select name="religion" className="form-control">
                        <option>{t('registration.work_experience.dropdown.placeholder0')}</option>
                        <option>{t('registration.work_experience.dropdown.option0')}</option>
                        <option>{t('registration.work_experience.dropdown.option1')}</option>
                        <option>{t('registration.work_experience.dropdown.option2')}</option>
                    </select>
                    </Col>
                    <Col sm={6}>
                     <input type="text" className="form-control" />
                     </Col>
                  </Row>
                  <Row>
                    <Col sm={6}>
                    <select name="religion" className="form-control">
                        <option>{t('registration.work_experience.dropdown.placeholder1')}</option>
                        <option>{t('registration.work_experience.dropdown.option0')}</option>
                        <option>{t('registration.work_experience.dropdown.option1')}</option>
                        <option>{t('registration.work_experience.dropdown.option2')}</option>
                    </select>
                    </Col>
                    <Col sm={6}>
                     <input type="text" className="form-control" />
                     </Col>
                  </Row>

                  <Row>
                    <Col sm={6}>
                    <select name="religion" className="form-control">
                        <option>{t('registration.work_experience.dropdown.placeholder2')}</option>
                        <option>{t('registration.work_experience.dropdown.option0')}</option>
                        <option>{t('registration.work_experience.dropdown.option1')}</option>
                        <option>{t('registration.work_experience.dropdown.option2')}</option>
                    </select>
                    </Col>
                    <Col sm={6}>
                     <input type="text" className="form-control" />
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
                    <select name="religion" className="form-control">
                        <option>{t('registration.specific_skills.dropdown.placeholder')}</option>
                        <option>{t('registration.specific_skills.dropdown.option0')}</option>
                        <option>{t('registration.specific_skills.dropdown.option1')}</option>
                        <option>{t('registration.specific_skills.dropdown.option2')}</option>
                    </select>
                    </Col>
                    <Col sm={6}>
                     <input type="text" className="form-control" />
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
                    <input name="marritial" type="radio" value="married" /> {t('registration.meritial_status.check.option0')}
                  </Col>
                  <Col sm={4}>
                    <input name="marritial"  type="radio" value="unmarried" /> {t('registration.meritial_status.check.option1')}
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
                    <Form.Control name="marritial" type="text" />
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
                
                    <select name="religion" className="form-control">
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
                   <Col sm={3}> <input  type="checkbox" />{t('registration.desired_job.check.option0')}</Col>
                   <Col sm={3}> <input  type="checkbox" />{t('registration.desired_job.check.option1')}</Col>
                   <Col sm={3}> <input  type="checkbox" />{t('registration.desired_job.check.option2')}</Col>
                   <Col sm={3}> <input  type="checkbox" />{t('registration.desired_job.check.option3')}</Col>
                   <Col sm={3}> <input  type="checkbox" />{t('registration.desired_job.check.option4')}</Col>
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
                  <textarea style={{width: '100%'}} cols="40" rows="5"></textarea>
              
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
    saveCandidateInfoForm: (formData) => dispatch(saveCandidateInfoFromApi(formData))
  }
}

export default withTranslation()(connect(mapStateToProps, mapDispatchToProps)(Register))
