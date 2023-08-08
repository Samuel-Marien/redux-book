import { createStore, combineReducers, applyMiddleware } from 'redux'
import reducerAddBooks from './reducers/reducerAddBooks'
import reducerFetchBooks from './reducers/reducerFetchBooks'
import thunk from 'redux-thunk'

const rootReducer = combineReducers({
  library: reducerAddBooks,
  search: reducerFetchBooks
})

applyMiddleware(thunk)

const store = createStore(rootReducer, applyMiddleware(thunk))

export default store
