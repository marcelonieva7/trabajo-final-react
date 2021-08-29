/* eslint-disable no-underscore-dangle */
import {
  ONECENTER_ERROR,
  ONECENTER_LOADING,
  GET_ONECENTER_OK,
  UPDATE_ONECENTER_OK,
  DELETE_ONECENTER_OK,
  CREATE_ONECENTER_OK,
  GET_CENTERS_OK,
  CENTERS_LOADING,
  CENTERS_ERROR,
} from '../actions/centerActions'

const initialState = {
  loading: false,
  center: null,
  error: null,
  centers: [],
  centersError: null,
}

const centerReducer = (state = initialState, action) => {
  const { type, payload } = action
  switch (type) {
    case ONECENTER_LOADING:
      return {
        ...state, loading: true, center: null, error: null,
      }
    case ONECENTER_ERROR:
      return { ...state, loading: false, error: payload }
    case GET_ONECENTER_OK:
      return { ...state, loading: false, center: payload }
    case DELETE_ONECENTER_OK: {
      const updatedCenters = state.centers.filter(center => center._id !== payload)
      return { ...state, loading: false, centers: updatedCenters }
    }
    case UPDATE_ONECENTER_OK: {
      const updatedCenters = state.centers.map(c => (c._id === payload._id ? payload : c))
      return { ...state, loading: false, centers: updatedCenters }
    }
    case CREATE_ONECENTER_OK: {
      const updatedCenters = state.centers.concat(payload)
      return { ...state, loading: false, centers: updatedCenters }
    }
    case CENTERS_LOADING:
      return {
        ...state, loading: true, centers: [], centersError: null,
      }
    case CENTERS_ERROR:
      return { ...state, loading: false, centersError: payload }
    case GET_CENTERS_OK:
      return { ...state, loading: false, centers: payload }
    default:
      return state
  }
}

export default centerReducer
