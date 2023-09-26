import React, {useState} from 'react'
import "../css/searchfilter.css"
import Header from './header';
import Featured from './home/featured';
import About from './home/about';
import Testimonial from './home/testimonial';

export default function Home() {
  const [propertyType, setPropertyType] = useState('all');
  const [propertyAction, setPropertyAction] = useState('all');
  const [location, setLocation] = useState('all');
  const [priceRange, setPriceRange] = useState('all');
  const [filteredProperties, setFilteredProperties] = useState([]);
  const [formData, setFormData] = useState({
    location: '',
    propertyType: 'Type',
    propertyStatus: 'Type',
    priceLimit: '$5,000',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can access formData directly here to send it to your backend
    console.log(formData);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  
  const properties = [
    { id: 1, type: 'house', action: 'buy', location: 'New York', price: 200000, name: 'House 1' },
    { id: 2, type: 'apartment', action: 'rent', location: 'Los Angeles', price: 150000, name: 'Apartment 1' },
    { id: 3, type: 'house', action: 'sell', location: 'Chicago', price: 250000, name: 'House 2' },
    { id: 4, type: 'condo', action: 'buy', location: 'Miami', price: 180000, name: 'Condo 1' },
  ];

  const handleTypeChange = (e) => {
    setPropertyType(e.target.value);
  };

  const handleActionChange = (e) => {
    setPropertyAction(e.target.value);
  };

  const handleLocationChange = (e) => {
    setLocation(e.target.value);
  };

  const handlePriceChange = (e) => {
    setPriceRange(e.target.value);
  };

  
  return (
    <div>
           {/* 1 single slider */}
           <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
 
  <div className="carousel-inner">
    <div className="carousel-item active">
      <section className="swiper-slide d1 t1 m1 witr_swiper_height">
        
      <img className="d-block w-100 imgsrc" src="assets\images\banner1.jpg" height={200} alt="First slide" />
  
      <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a>
      <div className="carousel-caption d-none d-md-block">
               
                  </div>
      
                <div className="witr_btn_style">

                  <div className="witr_btn_sinner">
                 
                  </div>
                </div>
       
              </section>
    </div>
    <div className="carousel-item">
      <section className="swiper-slide d1 t1 m1 witr_swiper_height">
      <img className="d-block w-100 imgsrc" src="assets\images\banner2.jpg" alt="Second slide" />
      <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a>
      <div className="carousel-caption d-none d-md-block">
     

                  </div>
    
<div className="slider_btn">
                <div className="witr_btn_style">
                  <div className="witr_btn_sinner">
                  </div>
                </div>
              </div>

</section>
    </div>
    <div className="carousel-item">
      <section className="swiper-slide d1 t1 m1 witr_swiper_height">
      <img className="d-block w-100 imgsrc" src="assets\images\banner3.jpg" alt="Third slide" />
      <a  class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
    <span  class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span  class="sr-only">Previous</span>
  </a>
  <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a>
      <div className="carousel-caption d-none d-md-block">
  

                  </div>

<div className="slider_btn">
                <div className="witr_btn_style">
                  <div className="witr_btn_sinner">
                  </div>
                </div>
              </div>

</section>
    </div>
  </div>





    <section className="ftco-section ftco-no-pb">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="search-wrap-1 ftco-animate">
              <form action="#" className="search-property-1" onSubmit={handleSubmit}>
                <div className="row">
                  <div className="col-lg align-items-end">
                    <div className="form-group">
                      <label htmlFor="location">Location</label>
                      <div className="form-field">
                        <div className="icon"><span className="ion-ios-search" /></div>
                        <input
                          type="text"
                          className="form-control"
                          id="location"
                          name="location"
                          placeholder="City/Locality Name"
                          value={formData.location}
                          onChange={handleChange}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="col-lg align-items-end">
                    <div className="form-group">
                      <label htmlFor="propertyType">Property Type</label>
                      <div className="form-field">
                        <div className="select-wrap">
                          <div className="icon"><span className="ion-ios-arrow-down" /></div>
                          <select
                            id="propertyType"
                            name="propertyType"
                            className="form-control"
                            value={formData.propertyType}
                            onChange={handleChange}
                          >
                            <option value="Type">Type</option>
                            <option value="Commercial">Commercial</option>
                            <option value="Office">Office</option>
                            <option value="Residential">Residential</option>
                            <option value="Villa">Villa</option>
                            <option value="Condominium">Condominium</option>
                            <option value="Apartment">Apartment</option>
                          </select>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg align-items-end">
                    <div className="form-group">
                      <label htmlFor="propertyStatus">Property Status</label>
                      <div className="form-field">
                        <div className="select-wrap">
                          <div className="icon"><span className="ion-ios-arrow-down" /></div>
                          <select
                            id="propertyStatus"
                            name="propertyStatus"
                            className="form-control"
                            value={formData.propertyStatus}
                            onChange={handleChange}
                          >
                            <option value="Type">Type</option>
                            <option value="Rent">Rent</option>
                            <option value="Sale">Sale</option>
                          </select>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg align-items-end">
                    <div className="form-group">
                      <label htmlFor="priceLimit">Price Limit</label>
                      <div className="form-field">
                        <div className="select-wrap">
                          <div className="icon"><span className="ion-ios-arrow-down" /></div>
                          <select
                            id="priceLimit"
                            name="priceLimit"
                            className="form-control"
                            value={formData.priceLimit}
                            onChange={handleChange}
                          >
                            <option value="$5,000">$5,000</option>
                            <option value="$10,000">$10,000</option>
                            <option value="$50,000">$50,000</option>
                            <option value="$100,000">$100,000</option>
                            <option value="$200,000">$200,000</option>
                            <option value="$300,000">$300,000</option>
                            <option value="$400,000">$400,000</option>
                            <option value="$500,000">$500,000</option>
                            <option value="$600,000">$600,000</option>
                            <option value="$700,000">$700,000</option>
                            <option value="$800,000">$800,000</option>
                            <option value="$900,000">$900,000</option>
                            <option value="$1,000,000">$1,000,000</option>
                            <option value="$2,000,000">$2,000,000</option>
                          </select>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg align-self-end">
                    <div className="form-group">
                      <div className="form-field">
                        <input
                          type="submit"
                          value="Search Property"
                          className="form-control btn btn-primary"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>


</div>
<Featured/>
<About/>

<Testimonial/>

    </div>
  )
}
