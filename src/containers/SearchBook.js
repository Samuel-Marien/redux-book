import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { fetchBooks } from '../redux/actions/actionsFetchBooks'
import { addBook } from '../redux/actions/actionAddBooks'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
toast.configure()

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

  const handleSaveBook = (title, author) => {
    const bookToSave = { title, author }
    dispatch(addBook(bookToSave))
    toast.info('Livre ajouté avec succès !', {
      position: toast.POSITION.BOTTOM_RIGHT
    })
  }

  const displayFetchBooks = state.isLoading ? (
    <div className="d-flex justify-content-center">
      <div className="spinner-border text-info " role="status"></div>
      <span className="sr-only">Loading...</span>
    </div>
  ) : state.error !== '' ? (
    <p>{state.error}</p>
  ) : (
    state.books.map((data) => {
      return (
        <div key={data.id} className="card mb-2">
          <div className="card-header">
            <h5 className="mb-0">
              <button
                className="btn btn-link collapsed"
                data-bs-toggle="collapse"
                data-bs-target={`#${data.id}`}
                aria-expanded="false"
              >
                {data.volumeInfo.title}
              </button>
            </h5>
          </div>
          <div id={data.id} className="collapse" data-parent="#accordion">
            <div className="card-body">
              {data.volumeInfo.hasOwnProperty('imageLinks') && (
                <img
                  src={data.volumeInfo.imageLinks.thumbnail}
                  alt={data.volumeInfo.title}
                />
              )}

              <br />
              <h4 className="card-title">Titre : {data.volumeInfo.title}</h4>
              <h5 className="card-title">
                Auteurs : {data.volumeInfo.authors}
              </h5>
              <p className="card-text">
                Description : {data.volumeInfo.description}
              </p>
              <a
                target="_blank"
                rel="noreferrer noopener"
                className="btn btn-outline-secondary"
                href={data.volumeInfo.previewLink}
              >
                Plus d'infos
              </a>
              <button
                onClick={() =>
                  handleSaveBook(data.volumeInfo.title, data.volumeInfo.authors)
                }
                className="btn btn-outline-secondary"
              >
                Save
              </button>
            </div>
          </div>
        </div>
      )
    })
  )

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
        <div id="accordion">{displayFetchBooks}</div>
      </div>
    </main>
  )
}

export default SearchBook
