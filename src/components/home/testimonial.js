import React from 'react'
import "../../css/testimonial.css";
export default function Testimonial() {
  return (
    <section style={{paddingTop:"5em"}} class="ftco-section testimony-section bg-light">

    <div >
      <div className="container">
         <div className="row justify-content-center mb-5">
        <div className="col-md-7 text-center heading-section ftco-animate">
          <span className="subheading">Testimonial</span>
          <h2 className="mb-3">Happy Clients</h2>
        </div>
        </div>
  <div className="accordion d-flex justify-content-center align-items-center height" id="accordionExample">
    <div className="row">
   
      <div className="col-md-6">
        <div className="p-3">
          <ul className="testimonial-list">
            <li>
              <div className="card p-3" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                <div className="d-flex flex-row align-items-center">
                  <img src="https://i.imgur.com/G1pXs7D.jpg" width={50} className="rounded-circle" />
                  <div className="d-flex flex-column ml-2">
                    <span className="font-weight-normal">Milton Austin</span>
                    <span>Sales Manager, Stack</span>
                  </div>
                </div>
              </div>   
            </li>
            <li>
              <div className="card p-3" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                <div className="d-flex flex-row align-items-center">
                  <img src="https://i.imgur.com/udGH5tO.jpg" width={50} className="rounded-circle" />
                  <div className="d-flex flex-column ml-2">
                    <span className="font-weight-normal">John Reeves</span>
                    <span>Head of Sales, Asana</span>
                  </div>
                </div>
              </div> 
            </li>
            <li>
              <div className="card p-3" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                <div className="d-flex flex-row align-items-center">
                  <img src="https://i.imgur.com/Uz4FjGZ.jpg" width={50} className="rounded-circle" />
                  <div className="d-flex flex-column ml-2">
                    <span className="font-weight-normal">Luke Harper</span>
                    <span>Sales Team Lead,Sketch</span>
                  </div>
                </div>
              </div> 
            </li>
          </ul>
        </div>
      </div>
      <div className="col-md-6">
        <div className="p-3 testimonials-margin">
          <div id="collapseOne" className="collapse show" aria-labelledby="headingOne" data-parent="#accordionExample">
            <div className="card-body">
              <h4>It was a great experience</h4>
              <div className="ratings">
                <i className="fa fa-star" />
                <i className="fa fa-star" />
                <i className="fa fa-star" />
              </div>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
            </div>
          </div>
          <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordionExample">
            <div className="card-body">
              <h4>Thanks for this great service</h4>
              <div className="ratings">
                <i className="fa fa-star" />
                <i className="fa fa-star" />
                <i className="fa fa-star" />
                <i className="fa fa-star" />
                <i className="fa fa-star" />
              </div>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
            </div>
          </div>
          <div id="collapseThree" className="collapse" aria-labelledby="headingThree" data-parent="#accordionExample">
            <div className="card-body">
              <h4>You all are awesome thanks alot</h4>
              <div className="ratings">
                <i className="fa fa-star" />
                <i className="fa fa-star" />
                <i className="fa fa-star" />
                <i className="fa fa-star" />
              </div>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
    </div>
    </section>
  )
}
