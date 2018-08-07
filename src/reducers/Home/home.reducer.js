import {getAllPosts}   from './home.async'
export const HIDE_HOME_INFO = 'HIDE_HOME_INFO'
export const SHOW_HOME_INFO = 'SHOW_HOME_INFO'
export const GET_ALL_POSTS = 'GET_ALL_POSTS'


export const showParagraphInfo = () => {
    return dispatch => { dispatch({  type: SHOW_HOME_INFO })}
}

export const hideParagraphInfo = () => {
    return dispatch => { dispatch({  type: HIDE_HOME_INFO })}
}

export const getAllPostForFromApi = () => {
    return dispatch => {
         getAllPosts().then(res => {
            dispatch({
                type: GET_ALL_POSTS,
                payload: {...res.data}
            })
        })
      
    }
}



const initialState = {
    showInfo: false,
    posts: null
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
        case GET_ALL_POSTS:
            return {
                ...state,
                posts: action.payload
            }    
        default:
            return state
    }

}
