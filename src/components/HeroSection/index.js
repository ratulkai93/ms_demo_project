import React, {useState} from 'react'
import { 
  HeroContainer, 
  HeroBg, 
  VideoBg, 
  HeroImg, 
  HeroContent, 
  HeroH1,HeroP, 
  HeroButnWrapper, 
  ArrowForward, 
  ArrowRight 
} from './heroElements';
import { Button } from '../ButtonElement';

// import video1 from '../../videos/video.mp4';
import ms from '../../images/ms.jpeg'

const HeroSection = () => {
  const [hover, setHover]= useState(false);

  const onHover= ()=>{
    setHover(!hover)
  }

  return (
    <HeroContainer>
        <HeroBg>
          {/* to fix later */}
            {/* <VideoBg autoPlay loop muted src={video1} type='video/mp4'/> */}
          <HeroImg src={ms}/>{/* temp solution */}
        </HeroBg>
        <HeroContent>
          <HeroH1>Mae Sri Thai</HeroH1>
          <HeroP>
            Taste of thailand next door!
          </HeroP>
          <HeroButnWrapper>
            <Button to="menu" 
              onMouseEnter={onHover} 
              onMouseLeave={onHover}
              primary= 'true'
              dark='true'
              >
              see our menu {hover ?  <ArrowForward/> : <ArrowRight/>}
            </Button>
          </HeroButnWrapper>
        </HeroContent>
    </HeroContainer>
  );
};

export default HeroSection;
