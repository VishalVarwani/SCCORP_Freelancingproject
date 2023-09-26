import React from 'react'

export default function About() {
  return (
    <div>
      <section className="ftco-section ftco-no-pb">
    <div className="container">
    <div className="row justify-content-center">
      <div className="col-md-12 heading-section text-center mb-5">
        <h2 style={{fontSize:"32px"}}className="mb-2 subheading">About Us</h2>
      </div>
    </div>
      <div className="row">
        <div className="col-md-6 img img-3 d-flex justify-content-center align-items-center" style={{backgroundImage: 'url(assets/images/about.jpg)'}}>
        </div>
        <div className="col-md-6 wrap-about pl-md-5 ftco-animate">
          <div className="heading-section">
            <h2 className="mb-4">Welcome To Findstate A Real Estate Agency</h2>
<p>Sccorp is India’s largest platform for Real Estate & Mortgages and one of the fastest growing comapny in India.</p>      
<p>Sccorp platform offers an excellent consumer experience & covers the full real-estate journey from search & 
discovery, transactions, interiors, rentals, property management. We have excellent team who guide our clients to get proper property .</p>            <p><a href="/about" className="btn btn-primary">Read More</a></p>
          </div>
        </div>
      </div>
    </div>
  </section>
    </div>
  )
}
