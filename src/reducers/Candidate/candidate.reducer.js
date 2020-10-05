import { saveCandidateInfo, getAllCountriesByApi } from './candidate.async'
import {push} from "react-router-redux"
export const SAVE_CANDIDATE_INFO = 'SAVE_CANDIDATE_INFO'
export const MESSAGE_ALERT_DATA = 'MESSAGE_ALERT_DATA'

export const GET_ALL_COUNTRIES = 'GET_ALL_COUNTRIES'
export const GET_LANGUAGE_WISE_COUNTRIES= 'GET_LANGUAGE_WISE_COUNTRIES'

export const GET_ALL_GENDERS = 'GET_ALL_GENDERS'
export const GET_LANGUAGE_WISE_GENDERS = 'GET_LANGUAGE_WISE_GENDERS'

export function getAllGenders (payload) {
    return {
        type: GET_ALL_GENDERS,
        payload
    }
}

export function getLanguageWiseGenders (payload) {
    return {
        type: GET_LANGUAGE_WISE_GENDERS,
        payload
    }
}

export function getLanguageWiseCountries (payload) {
    return {
        type: GET_LANGUAGE_WISE_COUNTRIES,
        payload
    }
}

export function getAllCountries (payload) {
    return {
        type: GET_ALL_COUNTRIES,
        payload
    }
}

export function storeCandidateInfo(payload) {
    return {
        type: SAVE_CANDIDATE_INFO,
        payload
    }
}

export function messageAlertInfo(payload) {
    return {
        type: MESSAGE_ALERT_DATA,
        payload
    }
}

export const getAllCountriesFromApi = (lang) => {
    return dispatch => {
        getAllCountriesByApi().then(res => {
            let countries = res.data.data
            dispatch(getAllCountries(countries))

            let newCountries = []
            if (countries) {
                countries.forEach((item, index) => {
                    let tempCountry = {}
                    if (lang === "en") {
                    tempCountry =  {
                            text: item.name,
                            value: item.id
                        }
                    } else if (lang === "jp") {
                        tempCountry = {
                            text: item.jpname,
                            value: item.id
                        }
                    }
                
                    newCountries.push(tempCountry)
                })
                 dispatch(getLanguageWiseCountries(newCountries))
                }
            })
    }
}

export const saveCandidateInfoFromApi = (formData) => {
    return dispatch => {
        console.log(formData)
        saveCandidateInfo(formData).then(res => {
            
            if(res.status === 201) {
                let candidateInfo = res.data.data
                dispatch(storeCandidateInfo(candidateInfo))
                dispatch(messageAlertInfo({message: res.message, status:res.status}))
            }
           
        }).catch(ex => {
            
            dispatch(messageAlertInfo({message: ex.response.data.error.message, status: ex.response.status}))
        })
    }
}

const initialState = {
    candidateInfo: null,
    message: null,
    status: null,
    countries: [],
    filteredCountries: []
}

export default (state=initialState, action) => {
    switch(action.type) {
        case SAVE_CANDIDATE_INFO:
            return {
                ...state,
                candidateInfo: action.payload
            }
        case MESSAGE_ALERT_DATA:
            return {
                ...state,
                message: action.payload.message,
                status: action.payload.status
            }
        case GET_ALL_COUNTRIES:
            return {
                ...state,
                countries: action.payload
            }
        case GET_LANGUAGE_WISE_COUNTRIES:
            return {
                ...state,
                filteredCountries: action.payload
            }
        default:
            return state
    }
}
