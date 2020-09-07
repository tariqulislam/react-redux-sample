import { combineReducers } from 'redux'
import home  from '../reducers/Home/home.reducer'
import campaign from '../reducers/Campaign/campain.reducer'
import candidate from "../reducers/Candidate/candidate.reducer"

const rootReducer = combineReducers({
    home,
    campaign,
    candidate
})

export default rootReducer
