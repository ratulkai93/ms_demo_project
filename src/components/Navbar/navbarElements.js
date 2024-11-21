import styled from 'styled-components'
import {Link as LinkR} from 'react-router-dom'
import {Link as LinkScroll} from 'react-scroll'

export const Nav = styled.nav`
    background: #000;
    height: 80px;
    /* margin-top: -80px;*/
    display: flex;
    align-items: center;
    font-size: 1rem;
    position: sticky;
    top: 0;
    z-index: 10;

    @media screen and (max-width: 960px){
    transition: 0.8s all ease;
    }
`;
export const NavbarContainer= styled.div`
    display: flex;
    justify-content: space-between;
    height: 80px;
    z-index: 1;
    width: 100%;
    padding: 0 24px;
    max-width: 1500px;
`;
 export const NavLogo= styled(LinkR)`
    color: #fff;
    justify-self: flex-start;
    cursor: pointer;
    font-size: 1.5rem;
    display: flex;
    align-items: center;
    margin-left: 24px;
    font-weight: bold;
    text-decoration: none;
 `;

 export const MobileIcon= styled.div`
    display: none;

    @media screen and (max-width: 768px){
        display: block;
        position: absolute;
        top: 0;
        right: 0;
        transform: translate(-100%, 60%);
        font-size: 1.8rem;
        cursor: pointer;
        color:#fff
    }
 `
export const NavMenu= styled.ul`
    display: flex;
    align-items: center;
    list-style: none;
    text-align: center;
    margin-right: -20px;

    @media screen and (max-width: 768px){
        display: none;
    }
`

export const NavItem = styled.li`
    height: 80px;
`

export const NavLinks= styled(LinkScroll)`
    color: #fff;
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0 1rem;
    height: 100%;
    cursor: pointer;

    &:hover{
        color: #FFD700;
        transition: 0.2s ease-in-out;
    }
    &.active{
        border-bottom: 3px solid #01bf71; /* underline color */
    
    }
`
// export const NavBtn=styled.nav`
//     display:flex;
//     align-items: center;

//     @media scren and (max-width: 768px){
//     display: none;
//     }
// `

// export const NavBtnLink= styled(LinkR)`
//     border-radius: 50px;
//     background: #01bf71;
//     white-space: nowrap;
//     padding: 10px 22px;
//     color: #010606;
//     font-size: 16px;
//     outline: none;
//     border: none;
//     cursor: pointer;
//     transition: all 0.2s ease-in-out;
//     text-decoration: none;

//     &:hover{
//     transition: all 0.2s ease-in-out;
//     background: #fff;
//     color: #010606;
//     }
// `;

export const NavLangBtn=styled.nav`
    display:flex;
    align-items: center;

    @media screen and (max-width: 768px){
    display: none;
    }
`
export const NavFr=styled(LinkR)`
    color: #fff;
    cursor: pointer;
    display: flex;
    align-items: center;
    text-decoration: none;

    &:hover{
        color: #FFD700;
        transition: 0.2s ease-in-out;
        }
`

export const NavEn=styled(LinkR)`
    color: #fff;
    cursor: pointer;
    display: flex;
    align-items: center;
    text-decoration: none;
    margin-right: 10px;

    &:hover{
        color: #FFD700;
        transition: 0.2s ease-in-out;
    }
`