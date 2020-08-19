import {loadCampaingByLang} from './campaign.async'
/** Action Type */

export const LOAD_CAMPAING = 'LOAD_CAMPAING'


export function loadCampaingByLanguageChange (payload) {
    return {
        type:  LOAD_CAMPAING,
        payload
    }
}

export const loadCampaign = (lang) => {
    return dispatch => {
        loadCampaingByLang(lang)
        .then(res => {
            dispatch(loadCampaingByLanguageChange(res.data.data))
        })
    }
}

/** State */
const initialState = {
    message: '',
    msgType: '',
    campaigns: []
}

/** reducers */
export default (state=initialState, action) => {
    switch(action.type) {
        case LOAD_CAMPAING:
            return {...state, campaigns: action.payload}
        default:
            return state
    }
   
}
