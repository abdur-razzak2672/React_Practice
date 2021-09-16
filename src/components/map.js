import React from 'react'
import image1 from './images/map.png'
const map = () => {
    return (
      <section class="map" id="services">
        <div class="row">
          <div class="col-12 col-s-8">
            <div class = "container-fluid">
              <div class = "row">
                <div class = "col-lg-12">
                  <h2>Your kid’s <span>Journey</span> to become</h2>
                  <h1>Technology creator & Mathematics Maestro</h1>
                  <img src={image1} alt = ""></img> 
                </div>
              </div>
            </div>
          </div>
        </div>   
      </section>
    )
}

export default map;
