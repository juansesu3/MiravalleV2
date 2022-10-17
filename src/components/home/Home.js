import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Father } from './styles';
import Carousel from 'react-bootstrap/Carousel';
import { Link } from 'react-router-dom';
const Home = () => {
  return (
    <Father>
    <div>
    <Card style={{ width: '18rem' }}>
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
  </Card>
  </div>
  <div>
    <Card style={{ width: '18rem' }}>
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
  </Card>
  </div>
  <div>
    <Card style={{ width: '18rem' }}>
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
  </Card>
  </div>
  <div>
    <Card style={{ width: '18rem' }}>
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
  </Card>
  </div>
  </Father>
  
  
  )
}

export default Home