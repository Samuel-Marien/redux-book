import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { fetchBooks } from '../redux/actions/actionsFetchBooks'

const SearchBook = () => {
  const [title, setTitle] = useState('')

  const state = useSelector((state) => state.search)
  const dispatch = useDispatch()

  console.log(state)

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(title)
    dispatch(fetchBooks(title))
  }

  return (
    <main role="main">
      <div className="jumbotron jumbotron-fluid mb-5 ">
        <div className="container text-center pb-3">
          <h1 className="display-4">BOOKS</h1>
          <p>Indiquez le sujet du livre que vous voulez ajouter</p>
          <form
            onSubmit={handleSubmit}
            className="form-inline d-flex justify-content-center"
          >
            <div className="from-group">
              <input
                required
                type="text"
                className="form-control"
                placeholder="Quoi rechercher ?"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>

            <div className="from-group">
              <button className="btn btn-outline-secondary ms-3">
                Rechercher
              </button>
            </div>
          </form>
        </div>
      </div>
      <div className="container" style={{ minHeight: '200px' }}>
        <div className="accordion">
          <div className="card mb-2">
            <div className="card-header"></div>
            <div className="collapse" data-parent="accordion">
              <div className="card-body"></div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

export default SearchBook
