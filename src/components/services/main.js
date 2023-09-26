import React from 'react'
import { Link } from 'react-router-dom'
export default function Service() {
  return (
    <div>
<section className="hero-wrap hero-wrap-2 ftco-degree-bg js-fullheight" style={{backgroundImage: 'url("assets/images/bg_1.jpg")'}} data-stellar-background-ratio="0.5">
    <div className="" />
    <div className="" />
    <div className="container">
      <div className="row no-gutters slider-text js-fullheight align-items-end justify-content-center">
        <div className="col-md-9 ftco-animate pb-5 mb-5 text-center">
          <h1 className="mb-3 bread">Our Services</h1>
          <p className="breadcrumbs"><span className="mr-2"><a href="/">Home <i className="ion-ios-arrow-forward" /></a></span> <span>Services <i className="ion-ios-arrow-forward" /></span></p>
        </div>
      </div>
    </div>
  </section>
  <section className="ftco-section">
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-12 heading-section text-center ftco-animate mb-5">
          <span className="subheading">Our Services</span>
          <h2 className="mb-2">Choose Our Services</h2>
        </div>
      </div>
      <div className="row d-flex">
        <div className="col-md-4 d-flex align-self-stretch ftco-animate">
          <div className="media block-6 services d-block text-center">
            <div className="icon d-flex justify-content-center align-items-center"><span className="flaticon-piggy-bank" /></div>
            <div className="media-body py-md-4">
            <Link style={{textDecoration:"none"}} to="/buy"><h3>Buy</h3></Link>
              <p>Invest in your future: Buy your dream property today!



</p>
            </div>
          </div>      
        </div>
        <div className="col-md-4 d-flex align-self-stretch ftco-animate">
          <div className="media block-6 services d-block text-center">
            <div className="icon d-flex justify-content-center align-items-center"><span className="flaticon-wallet" /></div>
            <div className="media-body py-md-4">
            <Link style={{textDecoration:"none"}} to="/rent"><h3>Rent</h3></Link>
              <p>Live life your way: Rent the perfect space to call home.</p>
            </div>
          </div>      
        </div>
        <div className="col-md-4 d-flex align-self-stretch ftco-animate">
          <div className="media block-6 services d-block text-center">
            <div className="icon d-flex justify-content-center align-items-center"><span className="flaticon-file" /></div>
            <div className="media-body py-md-4">
            <Link style={{textDecoration:"none"}} to="/sell"><h3>Sell</h3></Link>
              <p>List your property with confidence and let us handle the rest.</p>
            </div>
          </div>      
        </div>
       
      </div>
    </div>
  </section>
  <section className="ftco-section ftco-fullwidth">
    <div className="overlay" />
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-12 heading-section text-center ftco-animate mb-5">
          <span className="subheading">Services</span>
          <h2 className="mb-2">Why Choose Us?</h2>
        </div>
      </div>
    </div>
    <div className="container-fluid px-0">
      <div className="row d-md-flex text-wrapper align-items-stretch">
        <div className="one-half img d-flex align-self-stretch" style={{backgroundImage: 'url("assets/images/about.jpg")'}} />
        <div className="one-half half-text d-flex justify-content-end align-items-center">
          <div className="text-inner pl-md-5">
            <div className="row d-flex">
              <div className="col-md-12 d-flex align-self-stretch ftco-animate">
                <div className="media block-6 services-wrap d-flex">
                  <div className="icon d-flex justify-content-center align-items-center"><span className="flaticon-piggy-bank" /></div>
                  <div className="media-body pl-4">
                    <h3>No Downpayment</h3>
                    <p>A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
                  </div>
                </div>      
              </div>
              <div className="col-md-12 d-flex align-self-stretch ftco-animate">
                <div className="media block-6 services-wrap d-flex">
                  <div className="icon d-flex justify-content-center align-items-center"><span className="flaticon-wallet" /></div>
                  <div className="media-body pl-4">
                    <h3>All Cash Offer</h3>
                    <p>A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
                  </div>
                </div>      
              </div>
              <div className="col-md-12 d-flex align-self-stretch ftco-animate">
                <div className="media block-6 services-wrap d-flex">
                  <div className="icon d-flex justify-content-center align-items-center"><span className="flaticon-file" /></div>
                  <div className="media-body pl-4">
                    <h3>Experts in Your Corner</h3>
                    <p>A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
                  </div>
                </div>      
              </div>
              <div className="col-md-12 d-flex align-self-stretch ftco-animate">
                <div className="media block-6 services-wrap d-flex">
                  <div className="icon d-flex justify-content-center align-items-center"><span className="flaticon-locked" /></div>
                  <div className="media-body pl-4">
                    <h3>Locked in Pricing</h3>
                    <p>A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
                  </div>
                </div>      
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</div>


  )
}
