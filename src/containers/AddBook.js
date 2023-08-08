import React, { useState } from 'react'
import { connect } from 'react-redux'

import FlipMove from 'react-flip-move'

import {
  addBook,
  deleteBook,
  deleteAllBooks
} from '../redux/actions/actionAddBooks'

const AddBook = ({ libraryData, addBook, deleteBook, deleteAllBooks }) => {
  console.log(libraryData)

  const initialeState = {
    title: '',
    author: ''
  }
  const [newData, setNewData] = useState(initialeState)

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(newData)
    addBook(newData)

    // vider le input
    setNewData(initialeState)
  }

  const displayDtata =
    libraryData.length > 0 ? (
      <FlipMove>
        {libraryData.map((data, index) => {
          return (
            <li
              // key={index}
              key={data.id}
              className="list-group-item list-groupitem-light d-flex justify-content-between align-items-center "
            >
              <span>
                <strong>Title :</strong> {data.title}
              </span>
              <span>
                <strong>Author :</strong> {data.author}
              </span>
              <span
                onClick={() => deleteBook(data.id)}
                className="btn btn-danger"
              >
                X
              </span>
            </li>
          )
        })}
      </FlipMove>
    ) : (
      <p className="text-center">Aucune data à afficher</p>
    )

  const deleteAllBooksBtn = libraryData.length > 0 && (
    <button
      onClick={() => deleteAllBooks()}
      className="btn btn-danger mt-4 mb-5"
    >
      Effacer tous les livres
    </button>
  )

  return (
    <main role="main">
      <div className="jumbotron jumbotron-fluid mb-5 ">
        <div className="container text-center pb-3">
          <h1 className="display-4">BOOKS</h1>
          <p>Ajouter un livre à votre bibliothèque</p>
          <form
            className="form-inline d-flex justify-content-center"
            onSubmit={handleSubmit}
          >
            <div className="from-group">
              <input
                required
                type="text"
                className="form-control"
                placeholder="Titre"
                value={newData.title}
                onChange={(e) =>
                  setNewData({ ...newData, title: e.target.value })
                }
              />
            </div>
            <div className="from-group">
              <input
                required
                type="text"
                className="form-control ms-2"
                placeholder="Auteur"
                value={newData.author}
                onChange={(e) =>
                  setNewData({ ...newData, author: e.target.value })
                }
              />
            </div>
            <div className="from-group">
              <button className="btn btn-outline-secondary ms-3">
                Ajouter un livre
              </button>
            </div>
          </form>
        </div>
      </div>
      <div className="container" style={{ minHeight: '200px' }}>
        <div className="row">
          <div className="clo-md-12">
            <ul className="list-group">{displayDtata}</ul>
            <div className="d-flex justify-content-center">
              {deleteAllBooksBtn}
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

const mapStateToProps = (state) => {
  return {
    libraryData: state.library
  }
}

const addDispatchToProps = (dispatch) => {
  return {
    addBook: (param) => dispatch(addBook(param)),
    deleteBook: (id) => dispatch(deleteBook(id)),
    deleteAllBooks: () => dispatch(deleteAllBooks())
  }
}

export default connect(mapStateToProps, addDispatchToProps)(AddBook)
