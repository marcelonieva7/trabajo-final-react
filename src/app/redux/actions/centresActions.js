import getCentres from '../../services/vaccinationCentresService'

// Action Types
export const GET_CENTRES_LOADING = 'GET_CENTRES_LOADING'
export const GET_CENTRES_OK = 'GET_CENTRES_OK'
export const GET_CENTRES_ERROR = 'GET_CENTRES_ERROR'

// Actions Creators
export const centresLoading = () => ({ type: GET_CENTRES_LOADING })
export const getCentresOk = centres => ({ type: GET_CENTRES_OK, payload: centres })
export const getCentresError = err => ({ type: GET_CENTRES_ERROR, payload: err })

// Dispatch with Thunks Middleware
export const getCentresAllCentres = () => async dispatch => {
  dispatch(centresLoading())
  try {
    const centres = await getCentres()
    dispatch(getCentresOk(centres))
  } catch (e) {
    const { message } = e
    dispatch(getCentresError(message))
  }
}
