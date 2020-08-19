export const SELECTED_LANGUAGE = 'SELECTED_LANGUAGE'


export const onSelectedLanguage = (payload) => {
    return dispatch => { dispatch({  type: SELECTED_LANGUAGE, payload })}
}



const initialState = {
    selectedLanguage: 'en',
}


export default (state= initialState, action) => {
    switch (action.type) {
        case SELECTED_LANGUAGE:
            return {
                ...state,
                selectedLanguage: action.payload
            }
        default:
            return state
    }

}
