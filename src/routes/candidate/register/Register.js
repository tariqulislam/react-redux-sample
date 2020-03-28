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
                        <option>-- Select One --</option>
                        <option>Japan </option>
                        <option>Nepal</option>
                        <option>Vitnam</option>
                    </select>
                  <br/>
                  <Form.Control type="text" placeholder="Nationality" />
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
                    <Col sm={3}><input type="checkbox" />Japanese</Col>
                    <Col sm={3}><input type="checkbox" />Vietnamese</Col>
                    <Col sm={3}><input type="checkbox" />English</Col>
                    <Col sm={3}><input type="checkbox" />Others</Col>
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
                        <option>-- Select One --</option>
                        {
                          years.map(item => {
                            return (<option value={item}>{item}</option>)
                          })
                        }
                      </select>
                    </Col>
                    <Col sm={4}><select className="form-control" name="month" >
                      <option>-- Select One --</option>
                      {
                        months.map(item => {
                          return (<option value={item}>{item}</option>)
                        })
                      }
                      </select>
                      </Col>
                    <Col sm={4}><input  className="form-control" type="text" name="day" /></Col>
                 
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
                     <Col sm={6}><input type="text" placeholder="height" className="form-control" /></Col>
                     <Col sm={6}>
                     <select name="religion" className="form-control">
                        <option>--  Select One --</option>
                        <option> cm </option>
                        <option> ft  </option>
                    </select>
                     </Col>
                   </Row>
                   <Row style={{height: '10px'}}></Row>
                   <Row>
                     <Col sm={6}><input type="text" placeholder="weight" className="form-control" /></Col>
                     <Col sm={6}>
                     <select name="religion" className="form-control">
                        <option>--Select One--</option>
                        <option>kg</option>
                        <option>lb</option>
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
                     <Col sm={3}>Eyesight</Col>
                     <Col sm={8}>
                     <select name="religion" className="form-control">
                        <option>--  Select One --</option>
                        <option> Nacket Vision </option>
                        <option> Glass  </option>
                        <option> Lenses </option>
                    </select>
                     </Col>
                   </Row>
                   <Row style={{height: '10px'}}></Row>
                   <Row>
                     <Col sm={3}>Hearing</Col>
                     <Col sm={8}>
                     <select name="religion" className="form-control">
                        <option>--  Select One --</option>
                        <option> Clear Hearing </option>
                        <option> HearPices  </option>
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
                     <Col sm={3}><input type="text" placeholder="Foot Size" className="form-control" /></Col>
                     <Col sm={8}>
                     <select name="religion" className="form-control">
                        <option>--  Select One --</option>
                        <option> cm </option>
                        <option> inc  </option>
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
                  <Form.Control type="text" placeholder="Type Email Address" />
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
                  <Form.Control type="password" placeholder="Type Email Address" />
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
                  <Form.Control type="password" placeholder="Type Email Address" />
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
                  <Form.Control type="text" placeholder="Type Phone Number" />
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
                  <Form.Control type="text" placeholder="Type Facebook address" />
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
                        <option>--  Same As Nationality --</option>
                        <option> Japan </option>
                        <option> Others </option>
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
                        <option>--  Japanese Language Training --</option>
                        <option> Technical Traning </option>
                        <option> Work at Your Country </option>
                        <option> Student </option>
                        <option>Others</option>
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
                        <option>--  Work Status 1 --</option>
                        <option> Technical Traning </option>
                        <option> Office Work </option>
                        <option>Others</option>
                    </select>
                    </Col>
                    <Col sm={6}>
                     <input type="text" className="form-control" />
                     </Col>
                  </Row>
                  <Row>
                    <Col sm={6}>
                    <select name="religion" className="form-control">
                        <option>--  Work Status 2 --</option>
                        <option> Technical Traning </option>
                        <option> Office Work </option>
                        <option>Others</option>
                    </select>
                    </Col>
                    <Col sm={6}>
                     <input type="text" className="form-control" />
                     </Col>
                  </Row>

                  <Row>
                    <Col sm={6}>
                    <select name="religion" className="form-control">
                        <option>--  Work Status 3 --</option>
                        <option> Technical Traning </option>
                        <option> Office Work </option>
                        <option>Others</option>
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
                        <option>--  Japanese Language Training --</option>
                        <option> Technical Traning </option>
                        <option> Work at Your Country </option>
                        <option>Others</option>
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
                    <input name="marritial" type="radio" value="married" /> Married
                  </Col>
                  <Col sm={4}>
                    <input name="marritial"  type="radio" value="unmarried" /> Unmarried
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
                        <option>--  No Skill --</option>
                        <option> N5 </option>
                        <option> N4 </option>
                        <option> N3 </option>
                        <option> N2 </option>
                        <option> N1 </option>
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
                   <Col sm={3}> <input  type="checkbox" />Engineer</Col>
                   <Col sm={3}> <input  type="checkbox" />Chef</Col>
                   <Col sm={3}> <input  type="checkbox" />Software</Col>
                   <Col sm={3}> <input  type="checkbox" />Networking</Col>
                   <Col sm={3}> <input  type="checkbox" />Cleaner</Col>
                   <Col sm={3}> <input  type="checkbox" />Engineer</Col>
                   <Col sm={3}> <input  type="checkbox" />Engineer</Col>
                   <Col sm={3}> <input  type="checkbox" />Engineer</Col>
                   <Col sm={3}> <input  type="checkbox" />Engineer</Col>
                   <Col sm={3}> <input  type="checkbox" />Engineer</Col>
                   <Col sm={3}> <input  type="checkbox" />Engineer</Col>
                   <Col sm={3}> <input  type="checkbox" />Engineer</Col>
                   <Col sm={3}> <input  type="checkbox" />Engineer</Col>
                   <Col sm={3}> <input  type="checkbox" />Engineer</Col>
                   <Col sm={3}> <input  type="checkbox" />Engineer</Col>
                   <Col sm={3}> <input  type="checkbox" />Engineer</Col>
                   <Col sm={3}> <input  type="checkbox" />Engineer</Col>
                   <Col sm={3}> <input  type="checkbox" />Engineer</Col>
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
