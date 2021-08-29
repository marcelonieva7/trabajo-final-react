import {
  getCenter,
  updateCenter,
  deleteCenter,
  createCenter,
  getCenters,
} from '../../services/vaccinationCenterService'

// Action Types
export const ONECENTER_LOADING = 'ONECENTER_LOADING'
export const ONECENTER_ERROR = 'ONECENTER_ERROR'
export const GET_ONECENTER_OK = 'GET_ONECENTER_OK'
export const DELETE_ONECENTER_OK = 'DELETE_ONECENTER_OK'
export const UPDATE_ONECENTER_OK = 'UPDATE_ONECENTER_OK'
export const CREATE_ONECENTER_OK = 'CREATE_ONECENTER_OK'
export const CENTERS_LOADING = 'CENTERS_LOADING'
export const CENTERS_ERROR = 'CENTERS_ERROR'
export const GET_CENTERS_OK = 'GET_CENTERS_OK'

// Actions Creators
export const oneCenterLoading = () => ({ type: ONECENTER_LOADING })
export const oneCenterError = err => ({ type: ONECENTER_ERROR, payload: err })
export const getOneCenterOk = center => ({ type: GET_ONECENTER_OK, payload: center })
export const deleteCenterOk = id => ({ type: DELETE_ONECENTER_OK, payload: id })
export const updateCenterOk = center => ({ type: UPDATE_ONECENTER_OK, payload: center })
export const createCenterOk = center => ({ type: CREATE_ONECENTER_OK, payload: center })
export const getCentersOk = centers => ({ type: GET_CENTERS_OK, payload: centers })
export const centersLoading = () => ({ type: CENTERS_LOADING })
export const centersError = err => ({ type: CENTERS_ERROR, payload: err })

// Dispatch with Thunks Middleware

export const getCenterOneCenter = id => async dispatch => {
  dispatch(oneCenterLoading())
  try {
    const center = await getCenter(id)
    dispatch(getOneCenterOk(center))
  } catch (e) {
    const { message } = e
    dispatch(oneCenterError(message))
  }
}

export const updateCenterOneCenter = (id, data) => async dispatch => {
  dispatch(oneCenterLoading())
  try {
    const center = await updateCenter(id, data)
    dispatch(updateCenterOk(center))
  } catch (e) {
    const { message } = e
    dispatch(oneCenterError(message))
  }
}

export const deleteCenterOneCenter = id => async dispatch => {
  dispatch(oneCenterLoading())
  try {
    const centerId = await deleteCenter(id)
    dispatch(deleteCenterOk(centerId))
  } catch (e) {
    const { message } = e
    dispatch(oneCenterError(message))
  }
}

export const createCenterOneCenter = data => async dispatch => {
  dispatch(oneCenterLoading())
  try {
    const center = await createCenter(data)
    dispatch(createCenterOk(center))
  } catch (e) {
    const { message } = e
    dispatch(oneCenterError(message))
  }
}

export const getCentersAllCenters = () => async dispatch => {
  dispatch(centersLoading())
  try {
    const centers = await getCenters()
    dispatch(getCentersOk(centers))
  } catch (e) {
    const { message } = e
    dispatch(centersError(message))
  }
}
