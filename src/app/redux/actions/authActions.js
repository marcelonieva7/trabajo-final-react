import getAuth from '../../services/auth.Service'

// Action Types
// export const GET_AUTH_LOADING = 'GET_AUTH_LOADING'
export const GET_AUTH_OK = 'GET_AUTH_OK'
export const GET_AUTH_ERROR = 'GET_AUTH_ERROR'

// Actions Creators
// export const authLoading = () => ({ type: GET_AUTH_LOADING })
export const getAuthOk = userData => ({ type: GET_AUTH_OK, payload: userData })
export const getAuthError = err => ({ type: GET_AUTH_ERROR, payload: err })

// Dispatch with Thunks Middleware
export const getUserAuth = () => async dispatch => {
  // dispatch(authLoading())
  try {
    const userData = await getAuth()
    dispatch(getAuthOk(userData))
  } catch (e) {
    const { message } = e
    dispatch(getAuthError(message))
  }
}
