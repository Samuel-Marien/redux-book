import {
  FETCH_BOOKS_LOADING,
  FETCH_BOOKS_SUCCESS,
  FETCH_BOOKS_ERROR
} from '../constants'

import axios from 'axios'

const fetchBooksLoading = () => ({
  type: FETCH_BOOKS_LOADING
})

const fetchBooksSuccess = (data) => ({
  type: FETCH_BOOKS_SUCCESS,
  payload: data
})

const fetchBooksError = (error) => ({
  type: FETCH_BOOKS_ERROR,
  payload: error
})

export const fetchBooks = (title) => {
  return (dispatch) => {
    dispatch(fetchBooksLoading())
    axios
      .get(
        `https://www.googleapis.com/books/v1/volumes?q=${title}&maxResults=20&key=AIzaSyCXd6utlgJ3WRMoXUKXDsC8nnnYEe4RIUE`
      )
      .then((res) => {
        console.log(res)
        dispatch(fetchBooksSuccess(res.data.items))
      })
      .catch((error) => dispatch(fetchBooksError(error.message)))
  }
}
