import React from 'react'
import Testimonial from './home/testimonial'

export default function Aboutus() {
  return (
    <div>
      <div>
  <section className="hero-wrap hero-wrap-2 ftco-degree-bg js-fullheight" style={{backgroundImage: 'url("images/bg_1.jpg")'}} data-stellar-background-ratio="0.5">
    <div className="overlay" />
    <div className="overlay-2" />
    <div className="container">
      <div className="row no-gutters slider-text js-fullheight align-items-end justify-content-center">
        <div className="col-md-9 ftco-animate pb-5 mb-5 text-center">
          <h1 className="mb-3 bread">About Us</h1>
          <p className="breadcrumbs"><span className="mr-2"><a href="index.html">Home <i className="ion-ios-arrow-forward" /></a></span> <span>About us <i className="ion-ios-arrow-forward" /></span></p>
        </div>
      </div>
    </div>
  </section>
  <section className="ftco-section ftco-no-pb">
    <div className="container">
      <div className="row">
        <div className="col-md-6 img img-3 d-flex justify-content-center align-items-center" style={{backgroundImage: 'url(assets/images/about.jpg)'}}>
        </div>
        <div className="col-md-6 wrap-about pl-md-5 ftco-animate">
          <div className="heading-section">
            <h2 className="mb-4">Welcome To Findstate A Real Estate Agency</h2>
            <p>A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.</p>
            <p>On her way she met a copy. The copy warned the Little Blind Text, that where it came from it would have been rewritten a thousand times and everything that was left from its origin would be the word "and" and the Little Blind Text should turn around and return to its own, safe country.</p>
            <p><a href="#" className="btn btn-primary">Find Properties</a></p>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section className="ftco-counter ftco-section ftco-no-pt ftco-no-pb img" id="section-counter">
    <div className="container">
      <div className="row">
        <div className="col-md-6 col-lg-3 justify-content-center counter-wrap ftco-animate">
          <div className="block-18 py-4 mb-4">
            <div className="text text-border d-flex align-items-center">
              <strong className="number" data-number={305}>0</strong>
              <span>Area <br />Population</span>
            </div>
          </div>
        </div>
        <div className="col-md-6 col-lg-3 justify-content-center counter-wrap ftco-animate">
          <div className="block-18 py-4 mb-4">
            <div className="text text-border d-flex align-items-center">
              <strong className="number" data-number={1090}>0</strong>
              <span>Total <br />Properties</span>
            </div>
          </div>
        </div>
        <div className="col-md-6 col-lg-3 justify-content-center counter-wrap ftco-animate">
          <div className="block-18 py-4 mb-4">
            <div className="text text-border d-flex align-items-center">
              <strong className="number" data-number={209}>0</strong>
              <span>Average <br />House</span>
            </div>
          </div>
        </div>
        <div className="col-md-6 col-lg-3 justify-content-center counter-wrap ftco-animate">
          <div className="block-18 py-4 mb-4">
            <div className="text d-flex align-items-center">
              <strong className="number" data-number={67}>0</strong>
              <span>Total <br />Branches</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section className="ftco-section">
    <div className="container">
      <div className="row">
        <div className="col-md-4">
          <h3 style={{fontWeight: 600, fontSize: 20}}>Our Mission</h3>
          <p>A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.</p>
        </div>
        <div className="col-md-4">
          <h3 style={{fontWeight: 600, fontSize: 20}}>Our Vission</h3>
          <p>A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.</p>
        </div>
        <div className="col-md-4">
          <h3 style={{fontWeight: 600, fontSize: 20}}>Our Value</h3>
          <p>A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.</p>
        </div>
      </div>
    </div>
  </section>
 <Testimonial/>
 
  {/* loader */}
</div>

    </div>
  )
}
