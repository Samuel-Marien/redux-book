import React from 'react'

const AddBook = () => {
  return (
    <main role="main">
      <div className="jumbotron jumbotron-fluid mb-5 ">
        <div className="container text-center  pb-3 ">
          <h1 className="display-4">BOOKS</h1>
          <p>Ajouter un livre à votre bibliothèque</p>
          <form className="form-inline d-flex justify-content-center">
            <div className="from-group">
              <input
                required
                type="text"
                className="form-control"
                placeholder="Titre"
              />
            </div>
            <div className="from-group">
              <input
                required
                type="text"
                className="form-control ms-2"
                placeholder="Auteur"
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

export default AddBook
