import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { CardSc, Father, ImgSC, CarouselSC, ButtonSC } from './styles';

import { Link } from 'react-router-dom';
const Home = () => {

  const house = [
    {
      "idHouse":"",
      "houseName":"",
      "canonRent":"",
      "admon":"",
      "cantRoom":"",
      "cantBatRoom":"",
      "area":"",
      "contract":"",
      "images":""

    },


  ]


  return (
    <Father>
    <div>
    <CardSc>
    <CarouselSC>
    <CarouselSC.Item>
      <ImgSC
        className="d-block w-100"
        src="https://res.cloudinary.com/dv08oqgvx/image/upload/v1666026269/WhatsApp_Image_2022-10-12_at_6.47.14_AM_j65tsr.jpg"
        alt="First slide"
      />
      <CarouselSC.Caption>

      </CarouselSC.Caption>
    </CarouselSC.Item>
    <CarouselSC.Item>
      <ImgSC  
        className="d-block w-100"
        src="https://res.cloudinary.com/dv08oqgvx/image/upload/v1666026269/WhatsApp_Image_2022-10-12_at_6.47.15_AM_1_kko2ib.jpg"
        alt="Second slide"
      />

      <CarouselSC.Caption>
      
      </CarouselSC.Caption>
    </CarouselSC.Item>
    <CarouselSC.Item>
      <ImgSC
        className="d-block w-100"
        src="https://res.cloudinary.com/dv08oqgvx/image/upload/v1666026270/WhatsApp_Image_2022-10-12_at_6.38.45_AM_yfhqhl.jpg"
        alt="Third slide"
      />

      <CarouselSC.Caption>
    
      </CarouselSC.Caption>
    </CarouselSC.Item>
  </CarouselSC>
    <Card.Body>
      <p>Lorem / ipsum</p>
      <Card.Title>Casa 1</Card.Title>
      <Card.Text>
      <ul>
        <li>item 1 </li>
        <li>item 2 </li>
        <li>item 3</li>
        </ul>
        <p>Price: $ xxxx-xxx</p>
        <p>Admin: $ xxxx-xxx</p>
      </Card.Text>  
      <Link  to="templated" ><ButtonSC variant="primary">Details</ButtonSC></Link>
    </Card.Body>
  </CardSc>
  </div>
  <div>
    <CardSc >
    <CarouselSC>
    <CarouselSC.Item>
      <ImgSC
        className="d-block w-100"
        src="https://res.cloudinary.com/dv08oqgvx/image/upload/v1666026270/WhatsApp_Image_2022-10-12_at_6.40.23_AM_bpiexf.jpg"
        alt="First slide"
      />
      <CarouselSC.Caption>
    
      </CarouselSC.Caption>
    </CarouselSC.Item>
    <CarouselSC.Item>
      <ImgSC
        className="d-block w-100"
        src="https://res.cloudinary.com/dv08oqgvx/image/upload/v1666026270/WhatsApp_Image_2022-10-12_at_6.40.23_AM_bpiexf.jpg"
        alt="Second slide"
      />

      <CarouselSC.Caption>

      </CarouselSC.Caption>
    </CarouselSC.Item>
    <CarouselSC.Item>
      <ImgSC
        className="d-block w-100"
        src="https://res.cloudinary.com/dv08oqgvx/image/upload/v1666026270/WhatsApp_Image_2022-10-12_at_6.40.23_AM_bpiexf.jpg"
        alt="Third slide"
      />

      <CarouselSC.Caption>

      </CarouselSC.Caption>
    </CarouselSC.Item>
  </CarouselSC>
  <Card.Body>
      <p>Lorem / ipsum</p>
      <Card.Title>Casa 1</Card.Title>
      <Card.Text>
      <ul>
        <li>item 1 </li>
        <li>item 2 </li>
        <li>item 3</li>
        </ul>
        <p>Price: $ xxxx-xxx</p>
        <p>Admin: $ xxxx-xxx</p>
      </Card.Text>  
      <Link  to="templated" ><ButtonSC variant="primary">Details</ButtonSC></Link>
    </Card.Body>
  </CardSc>
  </div>
  <div>
    <CardSc>
    <CarouselSC>
    <CarouselSC.Item>
      <ImgSC
        className="d-block w-100"
        src="https://imganuncios.mitula.net/casas_venta_dapa_8060100644583525418.jpg"
        alt="First slide"
      />
      <CarouselSC.Caption>
    
      </CarouselSC.Caption>
    </CarouselSC.Item>
    <CarouselSC.Item>
      <ImgSC
        className="d-block w-100"
        src="https://imganuncios.mitula.net/casas_venta_dapa_8060100644583525418.jpg"
        alt="Second slide"
      />

      <CarouselSC.Caption>
   
      </CarouselSC.Caption>
    </CarouselSC.Item>
    <CarouselSC.Item>
      <ImgSC
        className="d-block w-100"
        src="https://imganuncios.mitula.net/casas_venta_dapa_8060100644583525418.jpg"
        alt="Third slide"
      />

      <CarouselSC.Caption>

      </CarouselSC.Caption>
    </CarouselSC.Item>
  </CarouselSC>
  <Card.Body>
      <p>Lorem / ipsum</p>
      <Card.Title>Casa 1</Card.Title>
      <Card.Text>
      <ul>
        <li>item 1 </li>
        <li>item 2 </li>
        <li>item 3</li>
        </ul>
        <p>Price: $ xxxx-xxx</p>
        <p>Admin: $ xxxx-xxx</p>
      </Card.Text>  
      <Link  to="templated" ><ButtonSC variant="primary">Details</ButtonSC></Link>
    </Card.Body>
  </CardSc>
  </div>
  <div>
    <CardSc >
    <CarouselSC>
    <CarouselSC.Item>
      <ImgSC
        className="d-block w-100"
        src="https://imganuncios.mitula.net/casas_venta_dapa_8060100644583525418.jpg"
        alt="First slide"
      />
      <CarouselSC.Caption>

      </CarouselSC.Caption>
    </CarouselSC.Item>
    <CarouselSC.Item>
      <ImgSC
        className="d-block w-100"
        src="https://imganuncios.mitula.net/casas_venta_dapa_8060100644583525418.jpg"
        alt="Second slide"
      />

      <CarouselSC.Caption>

      </CarouselSC.Caption>
    </CarouselSC.Item>
    <CarouselSC.Item>
      <ImgSC
        className="d-block w-100"
        src="https://imganuncios.mitula.net/casas_venta_dapa_8060100644583525418.jpg"
        alt="Third slide"
      />

      <CarouselSC.Caption>
       
      </CarouselSC.Caption>
    </CarouselSC.Item>
  </CarouselSC>
  <Card.Body>
      <p>Lorem / ipsum</p>
      <Card.Title>Casa 1</Card.Title>
      <Card.Text>
      <ul>
        <li>item 1 </li>
        <li>item 2 </li>
        <li>item 3</li>
        </ul>
        <p>Price: $ xxxx-xxx</p>
        <p>Admin: $ xxxx-xxx</p>
      </Card.Text>  
      <Link  to="templated" ><ButtonSC variant="primary">Details</ButtonSC></Link>
    </Card.Body>
  </CardSc>
  </div>
  </Father>
  
  
  )
}

export default Home