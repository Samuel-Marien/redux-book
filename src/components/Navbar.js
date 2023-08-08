import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <header>
      <div className="d-flex flex-column flex-md-row p-3 justify-content-between border-bottom bg-secondary text-white">
        <h4 className="mr-md-auto">
          <a className="text-decoration-none text-white" href="/">
            BOOKS
          </a>
        </h4>
        <nav className="btn-group">
          <Link className="btn btn-light" to="/">
            Accueil
          </Link>
          <Link className="btn btn-light" to="/search">
            Search
          </Link>
        </nav>
      </div>
    </header>
  )
}

export default Navbar
