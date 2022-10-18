import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBath, faBed, faChartArea, faDollarSign, faPersonCircleQuestion} from '@fortawesome/free-solid-svg-icons'
import Card from 'react-bootstrap/Card';
import { CardSc, Father, ImgSC, CarouselSC, ButtonSC } from './styles';

import { Link } from 'react-router-dom';
const Home = () => {
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
      <p>Location / ipsum</p>
      <Card.Title>House 1</Card.Title>
      <Card.Text>
      <ul>
      <li><FontAwesomeIcon icon={faBed} /> 3</li>
        <li><FontAwesomeIcon icon={faBath} /> 3</li>
        
        <li><FontAwesomeIcon icon={faChartArea}/> 120 mts<sup>2</sup></li>
        </ul>
        
        <p><strong>LF:</strong> <FontAwesomeIcon icon={faDollarSign} /> 1'500.000 cop <FontAwesomeIcon icon={faPersonCircleQuestion} /></p>
        <p><strong>MG:</strong> <FontAwesomeIcon icon={faDollarSign}/> 1'500.000 cop <FontAwesomeIcon icon={faPersonCircleQuestion} /></p>
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
      <p>Location / ipsum</p>
      <Card.Title>House 2</Card.Title>
      <Card.Text>
      <ul>
      <li><FontAwesomeIcon icon={faBed} /> 3</li>
        <li><FontAwesomeIcon icon={faBath} /> 3</li>
        
        <li><FontAwesomeIcon icon={faChartArea}/> 120 mts<sup>2</sup></li>
        </ul>
        
        <p><strong>LF:</strong> <FontAwesomeIcon icon={faDollarSign} /> 1'500.000 cop <FontAwesomeIcon icon={faPersonCircleQuestion} /></p>
        <p><strong>MG:</strong> <FontAwesomeIcon icon={faDollarSign}/> 1'500.000 cop <FontAwesomeIcon icon={faPersonCircleQuestion} /></p>
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
      <p>Location / ipsum</p>
      <Card.Title>House 3</Card.Title>
      <Card.Text>
      <ul>
      <li><FontAwesomeIcon icon={faBed} /> 3</li>
        <li><FontAwesomeIcon icon={faBath} /> 3</li>
        
        <li><FontAwesomeIcon icon={faChartArea}/> 120 mts<sup>2</sup></li>
        </ul>
        
        <p><strong>LF:</strong> <FontAwesomeIcon icon={faDollarSign} /> 1'500.000 cop <FontAwesomeIcon icon={faPersonCircleQuestion} /></p>
        <p><strong>MG:</strong> <FontAwesomeIcon icon={faDollarSign}/> 1'500.000 cop <FontAwesomeIcon icon={faPersonCircleQuestion} /></p>
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
      <p>Location / ipsum</p>
      <Card.Title>House 4</Card.Title>
      <Card.Text>
      <ul>
      <li><FontAwesomeIcon icon={faBed} /> 3</li>
        <li><FontAwesomeIcon icon={faBath} /> 3</li>
        
        <li><FontAwesomeIcon icon={faChartArea}/> 120 mts<sup>2</sup></li>
        </ul>
        
        <p><strong>LF:</strong> <FontAwesomeIcon icon={faDollarSign} /> 1'500.000 cop <FontAwesomeIcon icon={faPersonCircleQuestion} /></p>
        <p><strong>MG:</strong> <FontAwesomeIcon icon={faDollarSign}/> 1'500.000 cop <FontAwesomeIcon icon={faPersonCircleQuestion} /></p>
      </Card.Text>  
      <Link  to="templated" ><ButtonSC variant="primary">Details</ButtonSC></Link>
    </Card.Body>
  </CardSc>
  </div>
  </Father>
  
  
  )
}

export default Home