import React from 'react'
import { Link } from 'react-router-dom'
export default function Footer() {
  return (
    <div>
       <footer className="ftco-footer ftco-section">
    <div className="container">
      <div className="row mb-5">
        <div className="col-md">
          <div className="ftco-footer-widget mb-4">
          <Link className="navbar-brand" to="/"> <img src='assets/gallery/log.png'/> </Link>
            <p>Sccorp is India’s largest platform for Real Estate & Mortgages and one of the fastest growing comapny in India.</p>
            <ul className="ftco-footer-social list-unstyled mt-5">
              <li className="ftco-animate"><a href="#"><span className="icon-twitter" /></a></li>
              <li className="ftco-animate"><a href="#"><span className="icon-facebook" /></a></li>
              <li className="ftco-animate"><a href="#"><span className="icon-instagram" /></a></li>
            </ul>
          </div>
        </div>
        <div className="col-md">
          <div className="ftco-footer-widget mb-4 ml-md-4">
            <h2 className="ftco-heading-2">Services</h2>
            <ul className="list-unstyled">
              <li><a href="#"><span className="icon-long-arrow-right mr-2" />Rent</a></li>
              <li><a href="#"><span className="icon-long-arrow-right mr-2" />Buy</a></li>
              <li><a href="#"><span className="icon-long-arrow-right mr-2" />Sell</a></li>
            </ul>
          </div>
        </div>
       
        <div className="col-md">
          <div className="ftco-footer-widget mb-4">
            <h2 className="ftco-heading-2">Company</h2>
            <ul className="list-unstyled">
              <li><a href="#"><span className="icon-long-arrow-right mr-2" />About Us</a></li>
              <li><a href="#"><span className="icon-long-arrow-right mr-2" />Services</a></li>
              <li><a href="#"><span className="icon-long-arrow-right mr-2" />Gallery</a></li>
              <li><a href="#"><span className="icon-long-arrow-right mr-2" />Contact</a></li>
            </ul>
          </div>
        </div>
        <div className="col-md">
          <div className="ftco-footer-widget mb-4">
            <h2 className="ftco-heading-2">Have a Questions?</h2>
            <div className="block-23 mb-3">
              <ul>
                <li><span className="icon icon-map-marker" /><span className="text">203 Fake St. Mountain View, San Francisco, California, USA</span></li>
                <li><a href="#"><span className="icon icon-phone" /><span className="text">+2 392 3929 210</span></a></li>
                <li><a href="#"><span className="icon icon-envelope pr-4" /><span className="text">info@yourdomain.com</span></a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-12 text-center">
          <p>{/* Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. */}
            Copyright © All rights reserved | Sc Corp 2023
            {/* Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. */}</p>
        </div>
      </div>
    </div>
  </footer>
    </div>
  )
}
