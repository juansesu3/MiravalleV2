import React from 'react'
import { Container } from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel';
import { Link } from 'react-router-dom';
import {ContainerDetails, Father, ContainerDesign, ContSubComp} from './styles';
import Features from '././sub-components/features/features';
import Location from '././sub-components/location/Location';
import Surroundings from './sub-components/surroundings/Surroundings'
import AppSouterSubComp from '././../../app-router/AppSouterSubComp'

const TemplatedV1 = () => {
  return (
    <Father>
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://res.cloudinary.com/dv08oqgvx/image/upload/v1666026270/WhatsApp_Image_2022-10-12_at_6.38.45_AM_yfhqhl.jpg"
            alt="First slide"
          />
          <Carousel.Caption>

          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://res.cloudinary.com/dv08oqgvx/image/upload/v1666026269/WhatsApp_Image_2022-10-12_at_6.47.15_AM_1_kko2ib.jpg"
            alt="Second slide"
          />

          <Carousel.Caption>

          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://res.cloudinary.com/dv08oqgvx/image/upload/v1666026270/WhatsApp_Image_2022-10-12_at_6.47.12_AM_nrarcf.jpg"
            alt="Third slide"
          />

          <Carousel.Caption>

          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      <div>
      <hr />
      <h1>Description</h1>
      <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>

      <h2>More Details</h2>
      </div>
      <ContainerDesign>

  
      <ContainerDetails>

<span><Link to="/features" >Features</Link></span>
<span><Link to="/location" >Location</Link></span>
<span><Link to="/surroundings" >Surroundings</Link></span>



</ContainerDetails>
 
      </ContainerDesign>
     
    </Father>

  )
}

export default TemplatedV1