export const HIDE_HOME_INFO = 'HIDE_HOME_INFO'
export const SHOW_HOME_INFO = 'SHOW_HOME_INFO'


export const showParagraphInfo = () => {
    return dispatch => { dispatch({  type: SHOW_HOME_INFO })}
}

export const hideParagraphInfo = () => {
    return dispatch => { dispatch({  type: HIDE_HOME_INFO })}
}

const initialState = {
    showInfo: false
}


export default (state= initialState, action) => {
    switch (action.type) {
        case SHOW_HOME_INFO:
            return {
                ...state,
                showInfo: true
            }
        case HIDE_HOME_INFO:
            return {
                ...state,
                showInfo: false
            } 
        default:
            return state
    }

}
