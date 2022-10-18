import React from 'react'
import { ContainerDetails } from './styles'
import { Link } from 'react-router-dom';

const NavbarSubComp = () => {
    return (
        <ContainerDetails>

            <span><Link to="/features" >Features</Link></span>
            <span><Link to="/location" >Location</Link></span>
            <span><Link to="/surroundings" >Surroundings</Link></span>

        </ContainerDetails>
    )
}

export default NavbarSubComp