import React, {useEffect, useState} from 'react'
import {FaBars} from 'react-icons/fa'
import{animateScroll as scroll} from 'react-scroll'
import {
  Nav, 
  NavbarContainer, 
  NavLogo, 
  MobileIcon, 
  NavMenu, 
  NavItem, 
  NavLinks, 
  // NavBtn, NavBtnLink,
  NavLangBtn, NavFr, NavEn
} from './navbarElements'
import { IconContext } from 'react-icons';
const Navbar = ({toggle}) => {

    const [scrollNav, setScrollNav]=useState(false)

    const changeNav= ()=>{
      if(window.scrollY >= 80){
        setScrollNav(true)
      }else{
        setScrollNav(false)
      }
    };

    useEffect(()=>{
      window.addEventListener('scroll', changeNav)
    },[])

    const toggleHome=()=>{
      scroll.scrollToTop();
    }
  return (
    <>
      <IconContext.Provider value={{color: '#fff'}}>
        <Nav scrollNav={scrollNav}>
            <NavbarContainer>
                <NavLogo to='/' onClick={toggleHome}>Mae Sri</NavLogo>
                <MobileIcon onClick={toggle}>
                  <FaBars />
                </MobileIcon>                
                <NavMenu>
                    <NavItem>
                        <NavLinks to="about"
                          smooth={true}
                          duration={500}
                          spy={true}
                          exact='true'
                          offset={-80}
                        >
                          About
                        </NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to="menu"
                          smooth={true}
                          duration={500}
                          spy={true}
                          exact='true'
                          offset={-80}
                        >
                          Menu
                        </NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to="order_online"
                          smooth={true}
                          duration={500}
                          spy={true}
                          exact='true'
                          offset={-80}
                        >
                          Order online
                        </NavLinks>
                    </NavItem>
                    {/* <NavItem>
                        <NavLinks to="contact">Contact us</NavLinks>
                    </NavItem> */}
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
        </IconContext.Provider>
    </>
  );
};

export default Navbar;
