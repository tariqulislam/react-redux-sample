import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { withTranslation, Trans } from 'react-i18next'

export class Register extends React.Component {
  render() {
    const {t} = this.props
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
                  Country & Resident
                </Form.Label>
                <Col sm={9}>
                    <select name="country" className="form-control">
                        <option>-- Select One --</option>
                        <opton> Japan </opton>
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
                  Language You can fully understand
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
                  Date Of Birth
                </Form.Label>
                <Col sm={9}>
                  <Row>
                    <Col sm={4}><select className="form-control" name="year" ><option>-- Select One --</option></select></Col>
                    <Col sm={4}><select className="form-control" name="month" ><option>-- Select One --</option></select></Col>
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
                  Religion
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
                  Sex
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
                  Half Body Photo
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
                 Passport Photo
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
                  Height &amp; Weight
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
                        <option>--  Select One --</option>
                        <option> kg </option>
                        <option> lb  </option>
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
                  Eyesight &amp; Hearing
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
                  Foot Size
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
                 Email
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
                 Password
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
                 Retype Password
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
                  Phone Number
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
                  Facebook
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
                  Current Location
                </Form.Label>
                <Col sm={9}>
                    <select name="religion" className="form-control">
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
                  Current Situation
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
                  Work Experience 
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
                  Current Situation
                </Form.Label>
                  
                <Col sm={9}>
                  <Row>
                    <Col sm={12}>
                    <select name="religion" className="form-control">
                        <option>--  Japanese Language Training --</option>
                        <option> Technical Traning </option>
                        <option> Work at Your Country </option>
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
                  Specific Skills
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
                  Meritial Status
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
                  Cronic Disease
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
                  Japanese Language Skills
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
                  Desired Job
                </Form.Label>
                <Col sm={9}>
                   <Row>
                   <Col sm={3}> <input className="form-control" type="checkbox" />Engineer</Col>
                   <Col sm={3}> <input className="form-control" type="checkbox" />Chef</Col>
                   <Col sm={3}> <input className="form-control" type="checkbox" />Software</Col>
                   <Col sm={3}> <input className="form-control" type="checkbox" />Networking</Col>
                   <Col sm={3}> <input className="form-control" type="checkbox" />Cleaner</Col>
                   <Col sm={3}> <input className="form-control" type="checkbox" /></Col>
                   <Col sm={3}> <input className="form-control" type="checkbox" /></Col>
                   <Col sm={3}> <input className="form-control" type="checkbox" /></Col>
                   <Col sm={3}> <input className="form-control" type="checkbox" /></Col>
                   <Col sm={3}> <input className="form-control" type="checkbox" /></Col>
                   <Col sm={3}> <input className="form-control" type="checkbox" /></Col>
                   <Col sm={3}> <input className="form-control" type="checkbox" /></Col>
                   <Col sm={3}> <input className="form-control" type="checkbox" /></Col>
                   <Col sm={3}> <input className="form-control" type="checkbox" /></Col>
                   <Col sm={3}> <input className="form-control" type="checkbox" /></Col>
                   <Col sm={3}> <input className="form-control" type="checkbox" /></Col>
                   <Col sm={3}> <input className="form-control" type="checkbox" /></Col>
                   <Col sm={3}> <input className="form-control" type="checkbox" /></Col>
                   </Row>
                  
                </Col>
              </Form.Group>
            
              <Form.Group
                className="form-main-container"
                as={Row}
                controlId="formHorizontalCountry"
              >
                <Form.Label column sm={3}>
                  Terms &amp; Conditions
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
                  <Button type="submit">Register To Site</Button>
                </Col>
              </Form.Group>
           
            </Form>
            
          </Col>
        </Row>
      </Container>
    );
  }
}

export default withTranslation()(Register)
