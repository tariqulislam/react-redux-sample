import {getAllWeatherInfo}   from './home.async'
export const HIDE_HOME_INFO = 'HIDE_HOME_INFO'
export const SHOW_HOME_INFO = 'SHOW_HOME_INFO'
export const GET_ALL_POSTS = 'GET_ALL_POSTS'

export const GET_ALL_WEATHER_INFO = 'GET_ALL_WEATHER_INFO'



export const getAllWeatherInfoFromApi = () => {
    return dispatch => {
    
        getAllWeatherInfo().then(res => {
            debugger
            /** calculating the weather data */
            let weatherInfo = res.data && res.data.list;
            /** get the dateinfo */
            let dates = [];
            let newWeatherInfo = [];
            weatherInfo.forEach(val => {
                let tempDate = val.dt_txt.split(' ')
                dates = [...dates, tempDate[0]]
                let main = val.weather && val.weather[0].main;
                let maxTemp = val.main && val.main.temp
                let celUnit = 273.15;
                let temp = maxTemp - celUnit

                let tempWeatherInfo = { date: tempDate[0], timetext: tempDate[1], weather: main, temp: temp }
                newWeatherInfo = [...newWeatherInfo, tempWeatherInfo]
            })
            
            let uniqueDate = dates.filter((elem,pos) => dates.indexOf(elem) === pos)

            let consolidateInfo = {};

            uniqueDate.forEach(elem => {
                let key = `${elem}`
                let tempClouds = 0;
                let tempRain =0;
                let tempClear =0;
                let total = 0
                let tempWeather = [];
                let highestTemp = 0
                newWeatherInfo.forEach(mElem => {
                    if(elem === mElem.date) {
                       if(mElem.weather === 'Clear') {
                           tempClear = tempClear + 1;
                       }

                       if(mElem.weather === 'Clouds') {
                           tempClouds = tempClouds + 1;
                       }

                       if(mElem.weather === 'Rain') {
                           tempRain = tempRain + 1;
                       }
                       if(mElem.temp > highestTemp) {
                          highestTemp = mElem.temp; 
                       }
                       total = total + 1;
                       tempWeather = [...tempWeather, mElem]
                      
                    }
                })
                consolidateInfo[key] = {"clouds": tempClouds,
                 "temp": highestTemp,
                 "rain": tempRain,
                  "clear": tempClear,
                  "total": total,
                   "weather": tempWeather}
            })

            debugger
            dispatch({
                type: GET_ALL_WEATHER_INFO,
                payload: {
                    ...res.data
                }
            })
        })
    }
}


const initialState = {
    weathers: [],
}


export default (state= initialState, action) => {
    switch (action.type) {
        case GET_ALL_WEATHER_INFO:
            return {
                ...state,
                weathers: action.payload
            }
        default:
            return state
    }

}
