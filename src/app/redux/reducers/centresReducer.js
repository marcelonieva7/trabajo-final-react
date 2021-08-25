import { GET_CENTRES_ERROR, GET_CENTRES_LOADING, GET_CENTRES_OK } from '../actions/centresActions'

const initialState = {
  loading: false,
  centres: [],
  error: null,
}

const centresReducer = (state = initialState, action) => {
  const { type, payload } = action
  switch (type) {
    case GET_CENTRES_LOADING:
      return {
        ...state, loading: true, centres: [], error: null,
      }
    case GET_CENTRES_OK:
      return { ...state, loading: false, centres: payload }
    case GET_CENTRES_ERROR:
      return { ...state, loading: false, error: payload }
    default:
      return state
  }
}

export default centresReducer
