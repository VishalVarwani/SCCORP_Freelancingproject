import React from 'react'

export default function Contact() {
  return (
    <div>
          <section className="hero-wrap hero-wrap-2 ftco-degree-bg js-fullheight" style={{backgroundImage: 'url("images/bg_1.jpg")'}} data-stellar-background-ratio="0.5">
    <div className="overlay" />
    <div className="overlay-2" />
    <div className="container">
      <div className="row no-gutters slider-text js-fullheight align-items-end justify-content-center">
        <div className="col-md-9 ftco-animate pb-5 mb-5 text-center">
          <h1 className="mb-3 bread">Contact Us</h1>
          <p className="breadcrumbs"><span className="mr-2"><a href="index.html">Home <i className="ion-ios-arrow-forward" /></a></span> <span>Contact <i className="ion-ios-arrow-forward" /></span></p>
        </div>
      </div>
    </div>
  </section>
      <section className="ftco-section contact-section">
  <div className="container">
    <div className="row d-flex mb-5 contact-info justify-content-center">
      <div className="col-md-8">
        <div className="row mb-5">
          <div className="col-md-4 text-center py-4">
            <div className="icon mb-3 d-flex align-items-center justify-content-center">
              <span className="icon-map-o" />
            </div>
            <p><span>Address:</span> SC Corp 123 </p>
          </div>
          <div className="col-md-4 text-center py-4">
            <div className="icon mb-3 d-flex align-items-center justify-content-center">
              <span className="icon-mobile-phone" />
            </div>
            <p><span>Phone:</span> <a href="tel://1234567920">+ 1235 2355 98</a></p>
          </div>
          <div className="col-md-4 text-center py-4">
            <div className="icon mb-3 d-flex align-items-center justify-content-center">
              <span className="icon-envelope-o" />
            </div>
            <p><span>Email:</span> <a href="mailto:info@yoursite.com">info@yoursite.com</a></p>
          </div>
        </div>
      </div>
    </div>
    <div className="row block-9 justify-content-center mb-5">
      <div className="col-md-6 align-items-stretch d-flex">
        <form action="#" className="bg-light p-5 contact-form">
          <div className="form-group">
            <input type="text" className="form-control" placeholder="Your Name" />
          </div>
          <div className="form-group">
            <input type="text" className="form-control" placeholder="Your Email" />
          </div>
          <div className="form-group">
            <input type="text" className="form-control" placeholder="Subject" />
          </div>
          <div className="form-group">
            <textarea name id cols={30} rows={7} className="form-control" placeholder="Message" defaultValue={""} />
          </div>
          <div className="form-group">
            <input type="submit" defaultValue="Send Message" className="btn btn-primary py-3 px-5" />
          </div>
        </form>
      </div>
      <div className="col-md-6 align-items-stretch d-flex">
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3753.3566842474875!2d72.72357867497172!3d19.82485532803764!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be71fc3c1fe3715%3A0x94a4c74c6c080f6!2sBalaji%20Complex!5e0!3m2!1sen!2snl!4v1695717364435!5m2!1sen!2snl" width={600} height={450} style={{border: 0}} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
        <div />
        
      </div>
    </div>
  </div>
</section>

    </div>
  )
}
