import React from 'react'
import {FaBars} from 'react-icons/fa'
import {
  Nav, 
  NavbarContainer, 
  NavLogo, 
  MobileIcon, 
  NavMenu, 
  NavItem, 
  NavLinks, 
  NavBtn, NavBtnLink,
  NavLangBtn, NavFr, NavEn
} from './navbarElements'
const Navbar = ({toggle}) => {
  return (
    <>
        <Nav>
            <NavbarContainer>

                <NavLogo to='/'>Mae Sri</NavLogo>

                <MobileIcon onClick={toggle}>
                  <FaBars />
                </MobileIcon>
                
                <NavMenu>
                    <NavItem>
                        <NavLinks to="about">About</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to="menu">Menu</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to="order_online">Order online</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to="contact">Contact us</NavLinks>
                    </NavItem>
                </NavMenu>

                {/* <NavBtn>
                  <NavBtnLink to='/signin'>Sign in</NavBtnLink>
                </NavBtn> */}

                <NavLangBtn>
                  <NavEn to='/en'>EN</NavEn>
                  <NavFr to='/fr'>FR</NavFr>
                </NavLangBtn>

            </NavbarContainer>
        </Nav>
    </>
  );
};

export default Navbar;
