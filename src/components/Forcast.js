import React, {Component} from 'react'
import {Table, Row, Col} from 'react-bootstrap'
import jecket from './images/jecket.jpg'
import umbralla from './images/umbralla.jpg'
import {DailyWeather} from './DailyWeather'
import sunny from './images/sunny.jpeg'
import cloudy from './images/cloudy.jpeg'


class Forcast extends Component {
    render() {
        const {weathers} = this.props
        console.log('this is weather', weathers)
        if(weathers.length <= 0) { return null; }
        let imageStyle = {
            height: '70px',
            width: '70px'
        }
        let idFieldStyle = {
            width: "16.66%"
        }

        let hightRinyCloudyDate = weathers.reduce(function(a,b) {
            if(a.rain < b.rain) {return b;} else {return a;}
        });

        let higlySunnyDate = weathers.reduce(function (a, b) {
            if (a.clear < b.clear) { return b;} else { return a; }
        })

        let has5DaysAvarage = false;
        
        let ifTotalRainyDuration = 0;
        let ifTotalSunnyDuration =0;

        weathers.forEach(we => {
            if (we.rain) {
                ifTotalRainyDuration = ifTotalRainyDuration + we.rain;
            }

            if (we.clear) {
                ifTotalSunnyDuration = ifTotalSunnyDuration + we.clear;
            }
        });

        if (ifTotalRainyDuration === ifTotalSunnyDuration) {
            has5DaysAvarage = true
        }
        
        return (
            <div>
                {
                  has5DaysAvarage === true ?  <React.Fragment>
                        <Row style={{height: "110px", backgroundColor: "cornsilk", padding: "5px", border: "1px solid lightgray"}}>
                            <Col style={{fontSize: "20px",fontWeight: "bold", color: "green"}}  xs={6}>The Weather is avarage for 5 days so You can buy the Umbrella and Jacket both</Col>
                            <Col xs={3}><img style={{height: "100px", width: "100px"}} src={umbralla} alt="unbrella" /></Col>
                            <Col xs={3}><img style={{height: "100px", width: "100px"}} src={jecket} alt="Jacket" /></Col>
                        </Row>  
                    </React.Fragment> :  <React.Fragment>
                    <Row style={{height: "110px", backgroundColor: "cornsilk", padding: "5px", border: "1px solid lightgray"}}>
                        <Col style={{fontSize: "20px",fontWeight: "bold", color: "green"}}  xs={8}>Date:&nbsp;{hightRinyCloudyDate.date} You can buy the Umbrella(Best day to sell an umbrella.)</Col>
                        <Col xs={4}><img style={{height: "100px", width: "100px"}} src={umbralla} alt="unbrella" /></Col>
                    </Row> 
                    <Row style={{height: "110px", backgroundColor: "#ffd8e5",  padding: "5px", border: "1px solid lightgray"}}> 
                    <Col style={{fontSize: "20px",fontWeight: "bold", color: "blue"}}  xs={8}> Date:&nbsp; {higlySunnyDate.date} You can buy the Jacket(Best day to sell an Jacket.) </Col> 
                    <Col xs={4}><img style={{height: "100px", width: "100px"}} src={jecket} alt="Jecket" /></Col>
                    </Row>  
                    </React.Fragment>   
                }          
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th style={idFieldStyle}>   Date for Weather  </th>
                            <th>Forcast</th>
                            <th>Condition</th>
                            <th>Buying Suggestion</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            weathers.map((item, index) => {
                                 let showItems = null
                                if (item.daycondition === "Sunny or Clear") {
                                    showItems = <img style={imageStyle} alt="sunny" src={sunny} />
                                } else if (item.daycondition === "Rain or Clouds") {
                                    showItems = <img style={imageStyle} alt="cloudy" src={cloudy} />
                                }
                                return (<tr>
                                    <td>{item.date}</td>
                                    <td>
                                     <DailyWeather weather={item.weather} />
                                    </td>
                                    <td>{showItems}</td>
                                    <td>{ item.product === 'jecket' ? <img alt={item.product} src={jecket} />: <img alt={item.product} src={umbralla} />}</td>
                                </tr>)
                            })
                        }
                    </tbody>
                </Table>
            </div>
        )
    }
}

export default Forcast
