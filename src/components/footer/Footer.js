import React from 'react'
import { ButtonSC, ContainerFooter } from './styles'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouseUser } from '@fortawesome/free-solid-svg-icons'

import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <ContainerFooter>
        <Link  to="Home" ><ButtonSC><FontAwesomeIcon icon={faHouseUser}/></ButtonSC></Link>
    </ContainerFooter>
 

  )
}

export default Footer