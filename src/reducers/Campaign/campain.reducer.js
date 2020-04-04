import {saveCampaignInfo} from './campaign.async'
/** Action Type */
export const SAVE_COFIRMATION = 'SAVE_COFIRMATION'

/** Action Creator */
export function saveConfirmation(payload) {
    return {
        type: SAVE_COFIRMATION,
        payload
    }
}

export const saveCampaign = (formData) => {
    debugger
    const {name, details} = formData

    return dispatch => {

        let msg = 'save successfully'
        dispatch(saveConfirmation(msg))
        saveCampaignInfo(formData)
            .then(res => {
                debugger
                let resMsg = res.successMsg
                dispatch(saveConfirmation(resMsg))
        })
    }

} 

/** State */
const initialState = {
    message: '',
    msgType: '',

}

/** reducers */
export default (state=initialState, action) => {
    switch(action.type) {
        case SAVE_COFIRMATION:
            debugger
            return {...state, successMsg: action.payload}
        default:
            return state
    }
   
}
