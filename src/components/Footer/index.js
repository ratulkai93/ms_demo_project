import React from 'react'
import{animateScroll as scroll} from 'react-scroll'
import { 
    FooterContainer,
    FooterWrap,
    FooterLinksContainer,
    FooterLinksWrapper, 
    FooterLinkItems, 
    FooterLinkTitle, 
    FooterLink,
    SocialIconLink,
    SocialIcons,
    SocialLogo,
    SocialMedia,
    SocialMediaWrap } from './FooterElements'
import { FaFacebook, FaInstagram } from 'react-icons/fa'
import { doordashPage, facebookPage, instaPage, uberPage } from '../InfoSection/Data'
const Footer = () => {

    const toggleHome=()=>{
        scroll.scrollToTop();
      }

  return (
    <FooterContainer>
        <FooterWrap>
            <FooterLinksContainer>
                <FooterLinksWrapper>
                    <FooterLinkItems>
                        <FooterLinkTitle>About</FooterLinkTitle>
                        <FooterLink to='/'>About us</FooterLink>
                    </FooterLinkItems>
                    <FooterLinkItems>
                        <FooterLinkTitle>Menu</FooterLinkTitle>
                        <FooterLink to='/'>see menu</FooterLink>
                    </FooterLinkItems>
                </FooterLinksWrapper>
                <FooterLinksWrapper>
                <FooterLinkItems>
                        <FooterLinkTitle>Order online</FooterLinkTitle>
                        <FooterLink onClick={uberPage}>UberEats</FooterLink>
                        <FooterLink onClick={doordashPage}>Doordash </FooterLink>
                    </FooterLinkItems>
                    <FooterLinkItems>
                        <FooterLinkTitle>Follow US</FooterLinkTitle>
                        <FooterLink onClick={instaPage}>Instagram </FooterLink>
                        <FooterLink onClick={facebookPage}>Facebook </FooterLink>
                    </FooterLinkItems>
                </FooterLinksWrapper>
            </FooterLinksContainer>
            <SocialMedia>
                <SocialMediaWrap>
                    <SocialLogo onClick={toggleHome}>Mae Sri</SocialLogo>
                    <SocialIcons>
                        <SocialIconLink  aria-label="Facebook">
                            <FaFacebook onClick={facebookPage}/>
                        </SocialIconLink>
                        <SocialIconLink  aria-label="Instagram" >
                            <FaInstagram onClick={instaPage}/>
                        </SocialIconLink>
                    </SocialIcons>
                </SocialMediaWrap>
            </SocialMedia>
        </FooterWrap>
    </FooterContainer>
  )
}

export default Footer
