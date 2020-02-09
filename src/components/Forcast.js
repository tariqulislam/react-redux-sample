import React, {Component} from 'react'
import {Table} from 'react-bootstrap'
import jecket from './images/jecket.jpg'
import umbralla from './images/umbralla.jpg'
import {DailyWeather} from './DailyWeather'
import sunny from './images/sunny.jpeg'
import cloudy from './images/cloudy.jpeg'


class Forcast extends Component {
    componentDidMount() {

    }

    render() {
        const {weathers} = this.props
        console.log('this is weather', weathers)
        let imageStyle = {
            height: '70px',
            width: '70px'
        }
        return (
            <div>
                
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>Date</th>
                            <th>Forcast</th>
                            <th>Over All Condition</th>
                            <th>Suggestion</th>
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
