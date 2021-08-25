import {
  GET_AUTH_ERROR,
  GET_AUTH_LOADING,
  GET_AUTH_OK,
} from '../actions/authActions'

const initialState = {
  loading: false,
  userData: {},
  error: null,
}

const authReducer = (state = initialState, action) => {
  const { type, payload } = action
  switch (type) {
    case GET_AUTH_LOADING:
      return {
        ...state, loading: true, userData: {}, error: null,
      }
    case GET_AUTH_OK:
      return { ...state, loading: false, userData: payload }
    case GET_AUTH_ERROR:
      return { ...state, loading: false, userData: payload }
    default:
      return state
  }
}

export default authReducer
