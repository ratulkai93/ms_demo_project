import React from 'react';
import {Button} from '../ButtonElement';
import { 
    InfoContainer,
    InfoWrapper,
    InfoRow,
    TextWrapper,
    Subtitle,Heading,TopLine,
    BtnWrap,
    Column1,
    Column2, 
    Img, 
    ImgWrap, 
    // CusButton
} from './InfoElements';

//boiler plate code for all info pages
const InfoSection = ({
    pageLink,
    pageLink2,
    lightBg,
    id, 
    imgStart, 
    topLine, 
    lightText, 
    heading, 
    darkText, 
    description, 
    buttonLabel,
    buttonLabel2, 
    img, 
    alt,
    primary,
    dark,
    dark2
}) => {
  return (
    <>
        <InfoContainer lightBg={lightBg} id={id}>
            <InfoWrapper>
                <InfoRow imgStart={imgStart}>
                    <Column1>
                        <TextWrapper>
                            <TopLine>{topLine}</TopLine>
                            <Heading lightText={lightText}>{heading}</Heading>
                            <Subtitle darkText={darkText}>{description}</Subtitle>
                            <BtnWrap>
                                <Button 
                                    to='home' 
                                    smooth={true}
                                    duration={500}
                                    spy={true}
                                    exact="true"
                                    offset={-80}
                                    primary={primary ? 1 : 0}
                                    dark={dark ? 1 : 0}
                                    dark2={dark2 ? 1 : 0}
                                    onClick={pageLink}
                                >
                                    {buttonLabel}
                                </Button>
                                
                                {pageLink2 ? (
                                    <Button
                                        to='home' 
                                        smooth={true}
                                        duration={500}
                                        spy={true}
                                        exact="true"
                                        offset={-80}
                                        primary={primary ? 1 : 0}
                                        dark={dark ? 1 : 0}
                                        dark2={dark2 ? 1 : 0}
                                        onClick={pageLink2}
                                    >
                                        {buttonLabel2}
                                    </Button>
                                ) : null}
                            </BtnWrap>
                        </TextWrapper>
                    </Column1>
                    <Column2>
                        <ImgWrap>
                            <Img src={img} alt={alt}/>
                        </ImgWrap>
                    </Column2>
                </InfoRow>
            </InfoWrapper>
        </InfoContainer>
    </>
  )
}

export default InfoSection
