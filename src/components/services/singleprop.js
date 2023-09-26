import React from 'react'

export default function Singleprop() {
  return (
    <div>
   <section className="ftco-section ftco-property-details">
  <div className="container">
    <div className="row justify-content-center">
      <div className="col-md-12">
        <div className="property-details">
          <div className="img rounded" style={{backgroundImage: 'url(assets/images/work-1.jpg)'}} />
          <div className="text">
            <h2>Green Valey Home</h2>
            <span className="subheading">2854 Meadow View Drive, Hartford, USA</span>
          </div>
        </div>
      </div>
    </div>
    <div className="row">
      <div className="col-md-12 pills">
        <div className="bd-example bd-example-tabs">
          <div className="d-flex">
            <ul className="nav nav-pills mb-2" id="pills-tab" role="tablist">
              <li className="nav-item">
                <a className="nav-link active" id="pills-description-tab" data-toggle="pill" href="#pills-description" role="tab" aria-controls="pills-description" aria-expanded="true">Features</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" id="pills-manufacturer-tab" data-toggle="pill" href="#pills-manufacturer" role="tab" aria-controls="pills-manufacturer" aria-expanded="true">Description</a>
              </li>
             
            </ul>
          </div>
          <div className="tab-content" id="pills-tabContent">
            <div className="tab-pane fade show active" id="pills-description" role="tabpanel" aria-labelledby="pills-description-tab">
              <div className="row">
                <div className="col-md-4">
                  <ul className="features">
                    <li className="check"><span className="ion-ios-checkmark-circle" />Lot Area: 1,250 SQ FT</li>
                    <li className="check"><span className="ion-ios-checkmark-circle" />Bed Rooms: 4</li>
                    <li className="check"><span className="ion-ios-checkmark-circle" />Bath Rooms: 4</li>
                    <li className="check"><span className="ion-ios-checkmark-circle" />Luggage</li>
                    <li className="check"><span className="ion-ios-checkmark-circle" />Garage: 2</li>
                  </ul>
                </div>
                <div className="col-md-4">
                  <ul className="features">
                    <li className="check"><span className="ion-ios-checkmark-circle" />Floor Area: 1,300 SQ FT</li>
                    <li className="check"><span className="ion-ios-checkmark-circle" />Year Build:: 2019</li>
                    <li className="check"><span className="ion-ios-checkmark-circle" />Water</li>
                    <li className="check"><span className="ion-ios-checkmark-circle" />Stories: 2</li>
                    <li className="check"><span className="ion-ios-checkmark-circle" />Roofing: New</li>
                  </ul>
                </div>
                <div className="col-md-4">
                  <ul className="features">
                    <li className="check"><span className="ion-ios-checkmark-circle" />Floor Area: 1,300 SQ FT</li>
                    <li className="check"><span className="ion-ios-checkmark-circle" />Year Build:: 2019</li>
                    <li className="check"><span className="ion-ios-checkmark-circle" />Water</li>
                    <li className="check"><span className="ion-ios-checkmark-circle" />Stories: 2</li>
                    <li className="check"><span className="ion-ios-checkmark-circle" />Roofing: New</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="tab-pane fade" id="pills-manufacturer" role="tabpanel" aria-labelledby="pills-manufacturer-tab">
              <p>Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar.</p>
              <p>When she reached the first hills of the Italic Mountains, she had a last view back on the skyline of her hometown Bookmarksgrove, the headline of Alphabet Village and the subline of her own road, the Line Lane. Pityful a rethoric question ran over her cheek, then she continued her way.</p>
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
