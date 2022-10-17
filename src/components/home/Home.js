import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { CardSc, Father } from './styles';
import Carousel from 'react-bootstrap/Carousel';
import { Link } from 'react-router-dom';
const Home = () => {
  return (
    <Father>
    <div>
    <CardSc>
    <Carousel>
    <Carousel.Item>
      <img
        className="d-block w-100"
        src="https://res.cloudinary.com/dv08oqgvx/image/upload/v1666026269/WhatsApp_Image_2022-10-12_at_6.47.14_AM_j65tsr.jpg"
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
        src="https://res.cloudinary.com/dv08oqgvx/image/upload/v1666026270/WhatsApp_Image_2022-10-12_at_6.38.45_AM_yfhqhl.jpg"
        alt="Third slide"
      />

      <Carousel.Caption>
    
      </Carousel.Caption>
    </Carousel.Item>
  </Carousel>
    <Card.Body>
      <Card.Title>Casa 1</Card.Title>
      <Card.Text>
      <ul>
        <li>item 1 </li>
        <li>item 2 </li>
        <li>item 3</li>
        </ul>
      </Card.Text>
      <Link  to="templated" ><Button variant="primary">Details</Button></Link>
    </Card.Body>
  </CardSc>
  </div>
  <div>
    <CardSc >
    <Carousel>
    <Carousel.Item>
      <img
        className="d-block w-100"
        src="https://res.cloudinary.com/dv08oqgvx/image/upload/v1666026270/WhatsApp_Image_2022-10-12_at_6.40.23_AM_bpiexf.jpg"
        alt="First slide"
      />
      <Carousel.Caption>
    
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img
        className="d-block w-100"
        src="https://res.cloudinary.com/dv08oqgvx/image/upload/v1666026270/WhatsApp_Image_2022-10-12_at_6.40.23_AM_bpiexf.jpg"
        alt="Second slide"
      />

      <Carousel.Caption>

      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img
        className="d-block w-100"
        src="https://res.cloudinary.com/dv08oqgvx/image/upload/v1666026270/WhatsApp_Image_2022-10-12_at_6.40.23_AM_bpiexf.jpg"
        alt="Third slide"
      />

      <Carousel.Caption>

      </Carousel.Caption>
    </Carousel.Item>
  </Carousel>
    <Card.Body>
      <Card.Title>Casa 1</Card.Title>
      <Card.Text>
      <ul>
        <li>item 1 </li>
        <li>item 2 </li>
        <li>item 3</li>
        </ul>
      </Card.Text>
      <Link  to="templated" ><Button variant="primary">Details</Button></Link>
    </Card.Body>
  </CardSc>
  </div>
  <div>
    <CardSc>
    <Carousel>
    <Carousel.Item>
      <img
        className="d-block w-100"
        src="https://imganuncios.mitula.net/casas_venta_dapa_8060100644583525418.jpg"
        alt="First slide"
      />
      <Carousel.Caption>
    
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img
        className="d-block w-100"
        src="https://imganuncios.mitula.net/casas_venta_dapa_8060100644583525418.jpg"
        alt="Second slide"
      />

      <Carousel.Caption>
   
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img
        className="d-block w-100"
        src="https://imganuncios.mitula.net/casas_venta_dapa_8060100644583525418.jpg"
        alt="Third slide"
      />

      <Carousel.Caption>

      </Carousel.Caption>
    </Carousel.Item>
  </Carousel>
    <Card.Body>
      <Card.Title>Casa 1</Card.Title>
      <Card.Text>
      <ul>
        <li>item 1 </li>
        <li>item 2 </li>
        <li>item 3</li>
        </ul>
      </Card.Text>
      <Link  to="templated" ><Button variant="primary">Details</Button></Link>
    </Card.Body>
  </CardSc>
  </div>
  <div>
    <CardSc >
    <Carousel>
    <Carousel.Item>
      <img
        className="d-block w-100"
        src="https://imganuncios.mitula.net/casas_venta_dapa_8060100644583525418.jpg"
        alt="First slide"
      />
      <Carousel.Caption>

      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img
        className="d-block w-100"
        src="https://imganuncios.mitula.net/casas_venta_dapa_8060100644583525418.jpg"
        alt="Second slide"
      />

      <Carousel.Caption>

      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img
        className="d-block w-100"
        src="https://imganuncios.mitula.net/casas_venta_dapa_8060100644583525418.jpg"
        alt="Third slide"
      />

      <Carousel.Caption>
       
      </Carousel.Caption>
    </Carousel.Item>
  </Carousel>
    <Card.Body>
      <Card.Title>Casa 1</Card.Title>
      <Card.Text>
        <ul>
        <li>item 1 </li>
        <li>item 2 </li>
        <li>item 3</li>
        </ul>
      
      </Card.Text>
      <Link  to="templated" ><Button variant="primary">Details</Button></Link>
    </Card.Body>
  </CardSc>
  </div>
  </Father>
  
  
  )
}

export default Home