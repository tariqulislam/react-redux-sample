import {getAllWeatherInfo}   from './home.async'

export const GET_ALL_WEATHER_INFO = 'GET_ALL_WEATHER_INFO'



export const getAllWeatherInfoFromApi = () => {
    return dispatch => {
    
        getAllWeatherInfo().then(res => {
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

            let consolidateInfo = [];
            
            uniqueDate.forEach(elem => {
                let tempClouds = 0;
                let tempRain =0;
                let tempClear =0;
                let total = 0
                let tempWeather = [];
                let highestTemp = 0
                newWeatherInfo.forEach(mElem => {
                    if(elem === mElem.date) {
                       if(mElem.weather === 'Clear') { tempClear = tempClear + 1; }
                       if(mElem.weather === 'Clouds') { tempClouds = tempClouds + 1;}
                       if(mElem.weather === 'Rain') { tempRain = tempRain + 1;}
                       if(mElem.temp > highestTemp) { highestTemp = mElem.temp;}
                       total = total + 1;
                       tempWeather = [...tempWeather, mElem]
                    }
                })
                let byingPrediction = "";
                let weatherCondition = "";
                let rainyPredictionSum = tempClouds + tempRain;

                if(rainyPredictionSum > tempClear) {
                    byingPrediction = "umbralla";
                    weatherCondition = "Rain or Clouds"
                } else {
                    byingPrediction = "jecket";
                    weatherCondition = "Sunny or Clear"
                }
                
                consolidateInfo = [...consolidateInfo, {
                 "date": elem,
                 "clouds": tempClouds, 
                 "temp": highestTemp,
                 "rain": tempRain,
                 "clear": tempClear, 
                 "total": total,
                 "weather": tempWeather,
                 "product": byingPrediction, 
                 "daycondition": weatherCondition
                }]
            })
         
            dispatch({
                type: GET_ALL_WEATHER_INFO,
                payload: consolidateInfo
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
