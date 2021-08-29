import { combineReducers } from 'redux'
import centerReducer from './centerReducer'
import authReducer from './authReducer'

const root = (state = {}) => state

export default combineReducers({
  root,
  authReducer,
  centerReducer,
})
