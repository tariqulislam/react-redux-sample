import { saveCandidateInfo } from './candidate.async'
import {push} from "react-router-redux"
export const SAVE_CANDIDATE_INFO = 'SAVE_CANDIDATE_INFO'

export function storeCandidateInfo(payload) {
    return {
        type: SAVE_CANDIDATE_INFO,
        payload
    }
}
export const saveCandidateInfoFromApi = (formData) => {
    return dispatch => {
        console.log(formData)
        saveCandidateInfo(formData).then(res => {
            debugger
            if(res.status === 201) {
                let candidateInfo = res.data.data
                dispatch(storeCandidateInfo(candidateInfo))
                window.location.href =`/candidate/details/${candidateInfo.id}`
               // dispatch(push(`/candidate/details/${candidateInfo.id}`))
            }
           
        }).catch(ex => {
           console.log(ex)
        })
    }
}

const initialState = {
    candidateInfo: null,
    message: null
}

export default (state=initialState, action) => {
    switch(action.type) {
        case SAVE_CANDIDATE_INFO:
            return {
                ...state,
                message: action.payload
            }
    }
}
