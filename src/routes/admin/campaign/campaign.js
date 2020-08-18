import React from "react";
import { Container, Row, Col, Tabs, Tab, Form, Button } from "react-bootstrap";
import axios from "axios"
export default class Campaign extends React.Component {
  constructor(props) {
      super(props)
      this.state = {
        areas: [],
        positionLevels: [],
        industries: []
      }
  }

  componentDidMount() {
     /* load area */
     let url = "http://localhost:4000/api/areas"
        axios.get(url).then(result => {
           
            this.setState({areas: result.data.data})
        })

      let urlPosition = "http://localhost:4000/api/positionLevel"
        axios.get(urlPosition).then(result => {
          
          this.setState({positionLevels: result.data.data})
        })

      let urlIndustry = "http://localhost:4000/api/industry?lang=en"

      axios.get(urlIndustry).then(result => {
        debugger
        this.setState({industries: result.data})
      })

  }

  onSubmitGetAllValue = (event) => {
    debugger
      event.preventDefault()
      const data = new FormData(event.target)
      console.log(data.get("areaId"))


    /* get form value */
    let payload = {
      "workLocation": {
          "id": data.get("areaId")
      },
      "industry": {
          "id": data.get("industry")
      },
      "benefits": data.get("benefits"),
      "contractPeriod": data.get("contract_period"),
      "englishLevel": data.get("englishLevel"),
      "nearestStation": data.get("nearest_station"),
      "workingHours": data.get("working_hour"),
      "aboutCompany": data.get("about_company"),
      "endSalary": data.get("endSalary"),
      "japaneseLevel": data.get("japaneseLevel"),
      "jobDescription": data.get("jobDescription"),
      "holidays": data.get("holiday"),
      "lang":  data.get("lang"),
      "positionLevel": {
        "id": data.get("positionLevel")
      },
      "recruiter": data.get("company"),
      "startSalary": data.get("startSalary")
    }
    let url = "http://localhost:4000/api/campaigns"
    axios.post(url, payload, {
      headers: {
          'Content-Type': 'application/json',
         // 'Authorization': localStorage.getItem('authToken')
      }
    }).then(result => {
      debugger
        if(result.data) {
          window.location.replace("/admin/dashboard")
        }
    });
  }
  render() {
    let formBlock = {
      paddingTop: "20px",
    };

    return (
      <Container>
        <Row className="justify-content-md-center">
          <Col md="auto">
            <h3>Campaign</h3>
          </Col>
        </Row>
        <Row style={{height: "2000px"}} className="justify-content-md-center">
          <Col md="8">
            <Tabs defaultActiveKey="english" id="uncontrolled-tab-example">
              <Tab eventKey="english" title="English">
                <Form onSubmit={this.onSubmitGetAllValue} style={formBlock}>
                  <Form.Group as={Row} controlId="formHorizontalRecruiter">
                    <Form.Label column sm={4}>
                      Company
                    </Form.Label>
                    <Col sm={8}>
                      <input type="hidden" name="lang" id="lang" value="en" />
                      <Form.Control id="company" name="company" type="text" placeholder="Company" />
                    </Col>
                  </Form.Group>
                  <Form.Group as={Row} controlId="formHorizontalRecruiter">
                    <Form.Label column sm={4}>
                      Industry
                    </Form.Label>
                    <Col sm={8}>
                    <Form.Control id="industry" name="industry" column sm={8} as="select">
                        <option value="0">-- SELECT --</option>
                        {
                          this.state.industries &&
                          this.state.industries.map((item, index) => {
                            debugger
                            return <option value={item.id}>{item.name}</option>
                          })
                        }
                      </Form.Control>
                    </Col>
                  </Form.Group>
                  <Form.Group as={Row} controlId="formHorizontalRecruiter">
                    <Form.Label column sm={4}>
                      Working Hours
                    </Form.Label>
                    <Col sm={8}>
                      <Form.Control id="working_hour" name="working_hour" type="text" placeholder="Working Hours" />
                    </Col>
                  </Form.Group>
                  <Form.Group as={Row} controlId="formHorizontalJobDescription">
                    <Form.Label  column sm={4}>
                      Job Description
                    </Form.Label>
                    <Col sm={8}>
                      <Form.Control name="jobDescription" id="jobDescription" as="textarea" rows="3" />
                    </Col>
                  </Form.Group>
                 
                  <Form.Group as={Row} controlId="formHorizontalJobDescription">
                    <Form.Label  column sm={4}>
                      About Company
                    </Form.Label>
                    <Col sm={8}>
                      <Form.Control name="about_company" id="about_company" as="textarea" rows="3" />
                    </Col>
                  </Form.Group>
                  <Form.Group as={Row} controlId="formHorizontalJobDescription">
                    <Form.Label  column sm={4}>
                      Holidays
                    </Form.Label>
                    <Col sm={8}>
                      <Form.Control name="holiday" id="holiday" as="textarea" rows="3" />
                    </Col>
                  </Form.Group>

                  <Form.Group as={Row}  controlId="formHorizontalJapaneseLevel">
                    <Form.Label column sm={4}>
                      Japanese Level
                    </Form.Label>
                    <Col sm={8}>
                      <Form.Control id="japaneseLevel" name="japaneseLevel" type="text" placeholder="Japanese Level" />
                    </Col>
                  </Form.Group>

                  <Form.Group as={Row}  controlId="formHorizontalJapaneseLevel">
                    <Form.Label column sm={4}>
                      English Level
                    </Form.Label>
                    <Col sm={8}>
                      <Form.Control id="englishLevel" name="englishLevel" type="text" placeholder="Japanese Level" />
                    </Col>
                  </Form.Group>

                  <Form.Group as={Row} controlId="formHorizontalRecruiter">
                    <Form.Label column sm={4}>
                      Nearest Station
                    </Form.Label>
                    <Col sm={8}>
                      <Form.Control id="nearest_station" name="nearest_station" type="text" placeholder="Nearest Station" />
                    </Col>
                  </Form.Group>

                  <Form.Group as={Row} controlId="formHorizontalPositionLevel">
                    <Form.Label column sm={4}>
                      Occupations
                    </Form.Label>
                    <Col sm={8}>
                      <Form.Control id="positionLevel" name="positionLevel" column sm={8} as="select">
                        <option value={0}>-- SELECT --</option>
                        {
                          this.state.positionLevels &&
                          this.state.positionLevels.map((item, index) => {
                          return <option value={item.id}>{item.name}</option>
                          })
                        }
                      </Form.Control>
                    </Col>
                  </Form.Group>

                  <Form.Group as={Row} controlId="formHorizontalPositionSalary">
                    <Form.Label column sm={4}>
                      Salary Range
                    </Form.Label>
                    <Col sm={4}>
                      <Form.Control id="startSalary" name="startSalary" type="number" placeholder="Start" />
                    </Col>
                    <Col sm={4}>
                      <Form.Control id="endSalary" name="endSalary" type="number" placeholder="End" />
                    </Col>
                  </Form.Group>
                  <Form.Group
                    as={Row}
                    controlId="formHorizontalSpecialFeatures"
                  >
                    <Form.Label column sm={4}>
                      Benefits
                    </Form.Label>
                    <Col sm={8}>
                    <Form.Control name="benefits" id="benefits" as="textarea" rows="3" />
                    </Col>
                  </Form.Group>
                  
                  <Form.Group
                    as={Row}
                    controlId="formHorizontalSpecialFeatures"
                  >
                    <Form.Label column sm={4}>
                      Contract Period
                    </Form.Label>
                    <Col sm={8}>
                    <Form.Control name="contract_period" id="contract_period" type="text" />
                    </Col>
                  </Form.Group>
                  <Form.Group as={Row} controlId="formHorizontalAreaName">
                    <Form.Label column sm={4}>
                      Work Location
                    </Form.Label>
                    <Col sm={8}>
                      <select id="areaId" name="areaId" className="form-control" >
                      <option value={0}>-- SELECT --</option>
                        {
                          this.state.areas &&
                          this.state.areas.map((item, index) => {
                            return <option value={item.id}>
                                 {item.name}
                          </option>})
                        }
                      </select>
                    </Col>
                  </Form.Group>

            

                  <Form.Group as={Row}>
                    <Col sm={{ span: 8, offset: 4 }}>
                    <button>Save Data</button>
                    </Col>
                  </Form.Group>
                </Form>
              </Tab>
              <Tab eventKey="japanese" title="日本語">
              <Form onSubmit={this.onSubmitGetAllValue} style={formBlock}>
                  <Form.Group as={Row} controlId="formHorizontalRecruiter">
                    <Form.Label column sm={4}>
                      会社
                    </Form.Label>
                    <Col sm={8}>
                      <Form.Control id="company" name="company" type="text" placeholder="Company" />
                    </Col>
                  </Form.Group>
                  <Form.Group as={Row} controlId="formHorizontalRecruiter">
                    <Form.Label column sm={4}>
                      業界
                    </Form.Label>
                    <Col sm={8}>
                    <Form.Control id="industry" name="industry" column sm={8} as="select">
                        <option>-- SELECT --</option>
                        <option value="itandsoft">IT/Software Engineer</option>
                        <option value="gov">
                         Governments Works
                        </option>
                      </Form.Control>
                    </Col>
                  </Form.Group>
                  <Form.Group as={Row} controlId="formHorizontalRecruiter">
                    <Form.Label column sm={4}>
                      労働時間
                    </Form.Label>
                    <Col sm={8}>
                      <Form.Control id="working_hour" name="working_hour" type="text" placeholder="Working Hours" />
                    </Col>
                  </Form.Group>
                  <Form.Group as={Row} controlId="formHorizontalJobDescription">
                    <Form.Label  column sm={4}>
                      仕事内容
                    </Form.Label>
                    <Col sm={8}>
                      <Form.Control name="jobDescription" id="jobDescription" as="textarea" rows="3" />
                    </Col>
                  </Form.Group>
                  <Form.Group as={Row} controlId="formHorizontalJobDescription">
                    <Form.Label  column sm={4}>
                      英語能力
                    </Form.Label>
                    <Col sm={8}>
                      <Form.Control name="note_for_candidate" id="note_for_candidate"   type="text" />
                    </Col>
                  </Form.Group>

                  <Form.Group as={Row} controlId="formHorizontalJobDescription">
                    <Form.Label  column sm={4}>
                      会社について
                    </Form.Label>
                    <Col sm={8}>
                      <Form.Control name="about_company" id="about_company" as="textarea" rows="3" />
                    </Col>
                  </Form.Group>
                  <Form.Group as={Row} controlId="formHorizontalJobDescription">
                    <Form.Label  column sm={4}>
                      休日
                    </Form.Label>
                    <Col sm={8}>
                      <Form.Control name="holidays" id="holidays" as="textarea" rows="3" />
                    </Col>
                  </Form.Group>

                  <Form.Group as={Row}  controlId="formHorizontalJapaneseLevel">
                    <Form.Label column sm={4}>
                      日本語能力
                    </Form.Label>
                    <Col sm={8}>
                      <Form.Control id="japaneseLevel" name="japaneseLevel" type="text" placeholder="Japanese Level" />
                    </Col>
                  </Form.Group>

                  <Form.Group as={Row} controlId="formHorizontalRecruiter">
                    <Form.Label column sm={4}>
                      最寄り駅
                    </Form.Label>
                    <Col sm={8}>
                      <Form.Control id="nearest_station" name="nearest_station" type="text" placeholder="Nearest Station" />
                    </Col>
                  </Form.Group>

                  <Form.Group as={Row} controlId="occupations">
                    <Form.Label column sm={4}>
                    
                    職業
                    </Form.Label>
                    <Col sm={8}>
                      <Form.Control id="positionLevel" name="positionLevel" column sm={8} as="select">
                        <option>-- SELECT --</option>
                        <option value="EXECUTIVE">EXECUTIVE</option>
                        <option value="SENIOR_EXECUTIVE">
                        SENIOR_EXECUTIVE
                        </option>
                      </Form.Control>
                    </Col>
                  </Form.Group>

                  <Form.Group as={Row} controlId="formHorizontalPositionSalary">
                    <Form.Label column sm={4}>
                      給料
                    </Form.Label>
                    <Col sm={4}>
                      <Form.Control id="startSalary" name="startSalary" type="number" placeholder="Start" />
                    </Col>
                    <Col sm={4}>
                      <Form.Control id="endSalary" name="endSalary" type="number" placeholder="End" />
                    </Col>
                  </Form.Group>
                  <Form.Group
                    as={Row}
                    controlId="formHorizontalSpecialFeatures"
                  >
                    <Form.Label column sm={4}>
                    従業員給付
                    </Form.Label>
                    <Col sm={8}>
                    <Form.Control name="benefits" id="benefits" as="textarea" rows="3" />
                    </Col>
                  </Form.Group>
                  <Form.Group as={Row} controlId="formHorizontalRecruiter">
                    <Form.Label column sm={4}>
                    契約期間
                    </Form.Label>
                    <Col sm={8}>
                      <Form.Control id="contract_period" name="contract_period" type="text" placeholder="contract preiod" />
                    </Col>
                  </Form.Group>
                  

                  <Form.Group as={Row} controlId="formHorizontalAreaName">
                    <Form.Label column sm={4}>
                    勤務地
                    </Form.Label>
                    <Col sm={8}>
                      <select id="areaId" name="areaId" className="form-control" >
                        {
                          this.state.areas.map((item, index) => {
                            return <option value={item.id}>
                                 {item.name}
                          </option>})
                        }
                      </select>
                    </Col>
                  </Form.Group>

                  <Form.Group as={Row}>
                    <Col sm={{ span: 8, offset: 4 }}>
                    <button>Save Data</button>
                    </Col>
                  </Form.Group>
                </Form>
              </Tab>
              <Tab eventKey="napali" title="napali">
              <Form onSubmit={this.onSubmitGetAllValue} style={formBlock}>
                  <Form.Group as={Row} controlId="formHorizontalRecruiter">
                    <Form.Label column sm={4}>
                      Company
                    </Form.Label>
                    <Col sm={8}>
                      <Form.Control id="company" name="company" type="text" placeholder="Company" />
                    </Col>
                  </Form.Group>
                  <Form.Group as={Row} controlId="formHorizontalRecruiter">
                    <Form.Label column sm={4}>
                      Working Hours
                    </Form.Label>
                    <Col sm={8}>
                      <Form.Control id="working_hour" name="working_hour" type="text" placeholder="Working Hours" />
                    </Col>
                  </Form.Group>
                  <Form.Group as={Row} controlId="formHorizontalRecruiter">
                    <Form.Label column sm={4}>
                      Working Hours
                    </Form.Label>
                    <Col sm={8}>
                      <Form.Control id="working_hour" name="working_hour" type="text" placeholder="Working Hours" />
                    </Col>
                  </Form.Group>
                  <Form.Group as={Row} controlId="formHorizontalJobDescription">
                    <Form.Label  column sm={4}>
                      Job Description
                    </Form.Label>
                    <Col sm={8}>
                      <Form.Control name="jobDescription" id="jobDescription" as="textarea" rows="3" />
                    </Col>
                  </Form.Group>
                  <Form.Group as={Row} controlId="formHorizontalJobDescription">
                    <Form.Label  column sm={4}>
                      English Ability
                    </Form.Label>
                    <Col sm={8}>
                      <Form.Control name="note_for_candidate" id="note_for_candidate"   type="text" />
                    </Col>
                  </Form.Group>

                  <Form.Group as={Row} controlId="formHorizontalJobDescription">
                    <Form.Label  column sm={4}>
                      About Company
                    </Form.Label>
                    <Col sm={8}>
                      <Form.Control name="about_company" id="about_company" as="textarea" rows="3" />
                    </Col>
                  </Form.Group>
                  <Form.Group as={Row} controlId="formHorizontalJobDescription">
                    <Form.Label  column sm={4}>
                      Holidays
                    </Form.Label>
                    <Col sm={8}>
                      <Form.Control name="holidays" id="holidays" as="textarea" rows="3" />
                    </Col>
                  </Form.Group>

                  <Form.Group as={Row}  controlId="formHorizontalJapaneseLevel">
                    <Form.Label column sm={4}>
                      Japanese Level
                    </Form.Label>
                    <Col sm={8}>
                      <Form.Control id="japaneseLevel" name="japaneseLevel" type="text" placeholder="Japanese Level" />
                    </Col>
                  </Form.Group>

                  <Form.Group as={Row} controlId="formHorizontalRecruiter">
                    <Form.Label column sm={4}>
                      Nearest Station
                    </Form.Label>
                    <Col sm={8}>
                      <Form.Control id="nearest_station" name="nearest_station" type="text" placeholder="Nearest Station" />
                    </Col>
                  </Form.Group>

                  <Form.Group as={Row} controlId="formHorizontalPositionLevel">
                    <Form.Label column sm={4}>
                      Position Level
                    </Form.Label>
                    <Col sm={8}>
                      <Form.Control id="positionLevel" name="positionLevel" column sm={8} as="select">
                        <option>-- SELECT --</option>
                        <option value="EXECUTIVE">EXECUTIVE</option>
                        <option value="SENIOR_EXECUTIVE">
                        SENIOR_EXECUTIVE
                        </option>
                      </Form.Control>
                    </Col>
                  </Form.Group>

                  <Form.Group as={Row} controlId="formHorizontalPositionSalary">
                    <Form.Label column sm={4}>
                      Salary Range
                    </Form.Label>
                    <Col sm={4}>
                      <Form.Control id="startSalary" name="startSalary" type="number" placeholder="Start" />
                    </Col>
                    <Col sm={4}>
                      <Form.Control id="endSalary" name="endSalary" type="number" placeholder="End" />
                    </Col>
                  </Form.Group>
                  <Form.Group
                    as={Row}
                    controlId="formHorizontalSpecialFeatures"
                  >
                    <Form.Label column sm={4}>
                      Benefites
                    </Form.Label>
                    <Col sm={8}>
                    <Form.Control name="benefit" id="benefit" as="textarea" rows="3" />
                    </Col>
                  </Form.Group>

                  <Form.Group as={Row} controlId="formHorizontalRecruiter">
                    <Form.Label column sm={4}>
                      Company
                    </Form.Label>
                    <Col sm={8}>
                      <Form.Control id="company" name="company" type="text" placeholder="Company" />
                    </Col>
                  </Form.Group>
                  

                  <Form.Group as={Row} controlId="formHorizontalAreaName">
                    <Form.Label column sm={4}>
                      Area Name
                    </Form.Label>
                    <Col sm={8}>
                      <select id="areaId" name="areaId" className="form-control" >
                        {
                          this.state.areas.map((item, index) => {
                            return <option value={item.id}>
                                 {item.name}
                          </option>})
                        }
                      </select>
                    </Col>
                  </Form.Group>

                  <Form.Group as={Row}>
                    <Col sm={{ span: 8, offset: 4 }}>
                    <button>Save Data</button>
                    </Col>
                  </Form.Group>
                </Form>
              </Tab>
            </Tabs>
          </Col>
        </Row>
      </Container>
    );
  }
}
