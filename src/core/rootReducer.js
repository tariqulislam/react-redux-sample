import { combineReducers } from 'redux'
import home  from '../reducers/Home/home.reducer'
import campaign from '../reducers/Campaign/campain.reducer'

const rootReducer = combineReducers({
    home,
    campaign
})

export default rootReducer
