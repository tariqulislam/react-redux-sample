import {saveCandidateInfo} from './candidate.async'
export const SAVE_CANDIDATE_INFO = 'SAVE_CANDIDATE_INFO'


export const saveCandidateInfoFromApi = (formData) => {
    debugger
    // return dispatch => {
    //     saveCandidateInfo(formData).then(res => {
    //         debugger
    //         dispatch
    //     })
    // }
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