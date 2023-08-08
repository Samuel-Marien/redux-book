import {
  FETCH_BOOKS_LOADING,
  FETCH_BOOKS_SUCCESS,
  FETCH_BOOKS_ERROR
} from '../constants'

const initialState = {
  isLoading: false,
  books: [],
  error: null
}

const reducerFetchBooks = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_BOOKS_LOADING:
      return { ...state, isLoading: true }
    case FETCH_BOOKS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        books: action.payload,
        error: ''
      }
    case FETCH_BOOKS_ERROR:
      return {
        ...state,
        isLoading: false,
        books: [],
        error: action.payload
      }
    default:
      return state
  }
}

export default reducerFetchBooks
