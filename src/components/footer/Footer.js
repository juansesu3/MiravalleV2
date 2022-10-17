import React from 'react'
import { ContainerFooter } from './styles'
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
//import { faPlus } from '@fortawesome/free-solid-svg-icons';
import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faSolidFaHouse } from '@fortawesome/free-solid-svg-icons'




const Footer = () => {
  return (
    <ContainerFooter>
        <Link  to="Home" ><Button variant="primary">Home</Button></Link>
      
       

    </ContainerFooter>

  )
}

export default Footer