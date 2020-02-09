import React from 'react'
import {Table} from 'react-bootstrap'
import sunny from './images/sunny.jpeg'
import raining from './images/raining.png'
import cloudy from './images/cloudy.jpeg'

export  const DailyWeather = (props) => {
    const {weather} = props
    
    if (weather.length <= 0) {
        return null
    } 
    
    let refinedWeather = weather;

    if (refinedWeather.length < 8) {
        let fakeItem = {
            date: "",
            timetext: "",
            weather: "",
            temp: "",
        }
        var itemCount = 8 - refinedWeather.length;
        for (let i =0; i < itemCount; i++) {
           
            refinedWeather = [...refinedWeather, fakeItem]
        }
    }
    console.log('refined weather', refinedWeather)
    let iconStyle = {
        height: '20px',
        width: '20px'
    }
    return (
        <Table striped bordered hover>
            <thead>
                <tr>
                    <th>00:00</th>
                    <th>03:00</th>
                    <th>06:00</th>
                    <th>09:00</th>
                    <th>12:00</th>
                    <th>15:00</th>
                    <th>18:00</th>
                    <th>21:00</th>
                </tr>
            </thead>
           <tbody>
           <tr>
                {
                    refinedWeather.map((item,index) => {
                        return (<td key={index}>{ item.temp ? item.temp.toFixed(2) : null }&#8451;</td>)
                    })
                }
            </tr>
            <tr>
            {
                    refinedWeather.map((item,index) => {
                        let showItems = null
                        if (item.weather === "Clear") {
                            showItems = <img style={iconStyle} alt="sunny" src={sunny} />
                        } else if (item.weather === "Rain") {
                            showItems = <img style={iconStyle} alt="raning" src={raining} />
                        } else if (item.weather === "Clouds") {
                            showItems = <img style={iconStyle} alt="cloudy" src={cloudy} />
                        } else {
                            showItems = null
                        }
                       return (<td key={index}>{showItems}</td>)
                    })
            }
            </tr>
           </tbody>
           
        </Table>
    )
}