import { combineReducers } from 'redux'
import centresReducer from './centresReducer'
import authReducer from './authReducer'

const root = (state = {}) => state

export default combineReducers({
  root,
  centresReducer,
  authReducer,
})
