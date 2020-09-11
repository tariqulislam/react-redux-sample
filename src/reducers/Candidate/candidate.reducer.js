import { saveCandidateInfo } from './candidate.async'
import {push} from "react-router-redux"
export const SAVE_CANDIDATE_INFO = 'SAVE_CANDIDATE_INFO'
export const MESSAGE_ALERT_DATA = 'MESSAGE_ALERT_DATA'

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
    status: null
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
        default:
            return state
    }
}
