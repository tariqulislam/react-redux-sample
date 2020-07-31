import React from "react";
import { Container, Row, Col, Tabs, Tab, Form, Button } from "react-bootstrap";
import axios from "axios"
export default class Campaign extends React.Component {
  constructor(props) {
      super(props)

      this.state = {
        areas: [
          {id: 2, name: "TOKYO"},
          {id: 3, name: "YOKOHAMA"},
          {id: 3, name: "SIATAMA"}
        ],
        currency: [
          {"text": "JP", "symbol": " ¥"},
          {"text": "USD", "symbol": "$"}
        ]

      }
  }

  componentDidMount() {
     
  }

  onSubmitGetAllValue = (event) => {
      event.preventDefault()
      const data = new FormData(event.target)
      console.log(data.get("areaId"))
    /* get form value */
    let payload = {
      "areaId": data.get("areaId"),
      "currency": data.get("currency"),
      "endSalary": data.get("endSalary"),
      "japaneseLevel": data.get("japaneseLevel"),
      "jobDescription": data.get("jobDescription"),
      "lang":  "en",
      "languageId": 1,
      "positionLevel": data.get("positionLevel"),
      "recruiter": data.get("company"),
      "specialFeatures": data.get("specialFeatures"),
      "startSalary": data.get("startSalary")
    }
    let url = "http://localhost:4000/api/campaigns"
    axios.post(url, payload, {
      headers: {
          'Content-Type': 'application/json',
         // 'Authorization': localStorage.getItem('authToken')
      }
    }).then(result => {
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
        <Row className="justify-content-md-center">
          <Col md="8">
            <Tabs defaultActiveKey="english" id="uncontrolled-tab-example">
              <Tab eventKey="english" title="English">
                <Form onSubmit={this.onSubmitGetAllValue} style={formBlock}>
                  <Form.Group as={Row} controlId="formHorizontalRecruiter">
                    <Form.Label column sm={4}>
                      Company
                    </Form.Label>
                    <Col sm={8}>
                      <Form.Control id="company" name="company" type="text" placeholder="Company" />
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

                  <Form.Group as={Row}  controlId="formHorizontalJapaneseLevel">
                    <Form.Label column sm={4}>
                      Japanese Level
                    </Form.Label>
                    <Col sm={8}>
                      <Form.Control id="japaneseLevel" name="japaneseLevel" type="text" placeholder="Japanese Level" />
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
                      Salary
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
                      Features
                    </Form.Label>
                    <Col sm={8}>
                      <Form.Control id="specialFeatures" name="specialFeatures" column sm={8} as="select">
                        <option>-- SELECT --</option>
                        <option value="INTERNATIONAL_TRANSFER">
                          INTERNATIONAL TRANSFER
                        </option>
                      </Form.Control>
                    </Col>
                  </Form.Group>

                  <Form.Group as={Row} id="currency" name="currency" controlId="formHorizontalCurrency">
                    <Form.Label column sm={4}>
                      Currency
                    </Form.Label>
                    <Col sm={8}>
                    <select name="currency" className="form-control">
                        {
                          this.state.currency.map((item, index) => {
                            return <option value={item.text}>
                                 {item.text}
                          </option>})
                        }
                      </select>
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
              <Tab eventKey="japanese" title="Japanese"></Tab>
            </Tabs>
          </Col>
        </Row>
      </Container>
    );
  }
}
