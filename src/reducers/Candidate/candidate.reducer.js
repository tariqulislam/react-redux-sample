import { saveCandidateInfo } from './candidate.async'

export const SAVE_CANDIDATE_INFO = 'SAVE_CANDIDATE_INFO'

export const saveCandidateInfoFromApi = (formData, callback) => {
    return dispatch => {
        console.log(formData)
        saveCandidateInfo(formData).then(res => {
            console.log(res);
            callback();
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
