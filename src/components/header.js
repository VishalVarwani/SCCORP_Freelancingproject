import React from 'react'
import "../css/header.css"
import { Link } from 'react-router-dom'
export default function Header() {
  return (
    <div>
  <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <Link className="navbar-brand" to="/"> <img src='assets/gallery/log.png'/> </Link>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon" />
  </button>
  <div className="collapse navbar-collapse" id="navbarNav">
    <ul className="navbar-nav ml-auto">
      <li className="nav-item active mr-3">
        <Link className="nav-link" to="/">Home <span className="sr-only">(current)</span></Link>
      </li>
      <li className="nav-item mr-3">
        <Link className="nav-link" to="/about">About</Link>
      </li>
      <li className="nav-item dropdown mr-3">
        <Link className="nav-link dropdown-toggle" to="/service" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Services
        </Link>
        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
          <Link className="dropdown-item" to="/buy">Buy</Link>
          <Link className="dropdown-item" to="/rent">Rent</Link>
          <Link className="dropdown-item" to="/sell">Sell</Link>

     
        </div>
      </li>
      <li className="nav-item mr-3">
        <Link className="nav-link" to="/gallery">Gallery</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/contact">Contact</Link>
      </li>
    </ul>
  </div>
</nav>

{/* END nav */}

    </div>
  )
}
