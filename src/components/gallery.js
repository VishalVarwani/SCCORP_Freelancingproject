import React from 'react'
import "../css/lightbox.css"

export default function Gallery() {
  return (
    <div>

<section className="hero-wrap hero-wrap-2 ftco-degree-bg js-fullheight" style={{backgroundImage: 'url("images/bg_1.jpg")'}} data-stellar-background-ratio="0.5">
    <div className="" />
    <div className="" />
    <div className="container">
      <div className="row no-gutters slider-text js-fullheight align-items-end justify-content-center">
        <div className="col-md-9 ftco-animate pb-5 mb-5 text-center">
          <h1 className="mb-3 bread">Gallery</h1>
          <p className="breadcrumbs"><span className="mr-2"><a href="index.html">Home <i className="ion-ios-arrow-forward" /></a></span> <span>Gallery <i className="ion-ios-arrow-forward" /></span></p>
        </div>
      </div>
    </div>
  </section>
        <section  className="section-md bg-default text-center">

       <div className="">
       <div className="col-md-12 heading-section text-center mb-5">
        <span className="subheading">Our Gallery</span>
      </div>    <div style={{margin:"10px"}}className="row row-50" data-lightgallery="group">
      <div className="col-md-6 col-xl-4">
        {/* Post project*/}
        <article className="post-project"><a  data-lightgallery="item" data-size="652x491">
        < a href='assets/gallery/img1.jpg'className='anchor' data-lightbox="models" >
    <img src='assets/gallery/img1.jpg' /> </a>
</a>
        
        </article>
      </div>
      <div className="col-md-6 col-xl-4">
        {/* Post project*/}
        <article className="post-project"><a data-lightgallery="item" data-size="652x491">
        <a href='assets/gallery/img2.jpg'className='anchor' data-lightbox="models" >
    <img src='assets/gallery/img2.jpg' /> </a>
      </a>
         
        </article>
      </div>
     
      <div className="col-md-6 col-xl-4">
      <article className="post-project"><a data-lightgallery="item" data-size="652x491">
      <a href='assets/gallery/img3.jpg'className='anchor' data-lightbox="models" >
    <img src='assets/gallery/img3.jpg' /> </a>
           
       </a>
         
        </article>
      </div>
      <div className="col-md-6 col-xl-4">
      <article className="post-project">
        
      {/* <a href='assets-2\images\WhatsApp Video 2023-08-26 at 12.59.45 PM (1).mp4'className='anchor' data-lightbox="models" > */}
<iframe style={{width:"430px",height:"320px"}} className="" src="assets/gallery/video1.mp4" loop controls preload="metadata" controlslist="nodownload" poster="assets-2\images\WhatsApp Video 2023-08-26 at 12.59.45 PM (1).mp4" />
    
         
        </article>
      </div>
      <div className="col-md-6 col-xl-4">
      <article className="post-project"><a data-lightgallery="item" data-size="652x491">
      <a href='assets/gallery/img4.jpg'className='anchor' data-lightbox="models" >
    <img src='assets/gallery/img4.jpg' /> </a>
           
       </a>
         
        </article>
      </div>
      <div className="col-md-6 col-xl-4">
      <article className="post-project"><a data-lightgallery="item" data-size="652x491">
      <a href='assets/gallery/img5.jpg'className='anchor' data-lightbox="models" >
    <img src='assets/gallery/img5.jpg' /> </a>
           
       </a>
         
        </article>
      </div>
      <div className="col-md-6 col-xl-4">
      <article className="post-project"><a data-lightgallery="item" data-size="652x491">
      <a href='assets/gallery/img7.jpg'className='anchor' data-lightbox="models" >
    <img src='assets/gallery/img7.jpg' /> </a>
           
       </a>
         
        </article>
      </div>
    </div>
  </div>
  </section>
</div>

  )
}
