import React, { useState } from 'react'
import { connect } from 'react-redux'
import { addBook } from '../redux/actions/actionAddBooks'

const AddBook = ({ libraryData, addBook }) => {
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
            <ul className="list-group">
              <li className="list-group-item list-groupitem-light d-flex juystify-content-between">
                Livre enregristré ici
              </li>
            </ul>
            <div className="d-flex justify-content-center">
              <button className="btn btn-danger mt-4 mb-5">
                Effacer tous les livres
              </button>
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
    addBook: (param) => dispatch(addBook(param))
  }
}

export default connect(mapStateToProps, addDispatchToProps)(AddBook)
