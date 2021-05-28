import React from 'react';
import {Nav, NavLink, NavIcon, Bars} from './NavbarElements';

const Navbar = ({toggle}) => {
    return (
        <>
            <Nav>
                <NavLink to='/'>Taura Store</NavLink>
                <NavIcon onClick={toggle}>
                    <p>Tienda</p>
                    <Bars />
                </NavIcon>
            </Nav>
        </> 
    )
}

export default Navbar
