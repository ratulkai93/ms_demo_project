import styled from "styled-components";

export const MenuContainer=styled.div`
    background: #0c0c0c;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 30px;
    height: 800px;
    position: relative;
    z-index: 1;
`
export const MenuBg=styled.div`
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
`
export const MenuImg=styled.img`
    width: 100%;
    height: 100%;
    -o-object-fit: cover;
    object-fit: cover;
    background: #232a34;
`
export const MenuContent=styled.div`
    z-index: 3;
    max-width: 1200px;
    position: absolute;
    padding: 8px 24px;
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-left: 80px;
    justify-content: space-between; /* Adjusts spacing between items */
`
export const MenuA= styled.a`
@import url('https://fonts.googleapis.com/css2?family=IBM+Plex+Sans+Thai:wght@100;200;300;400;500;600;700&display=swap');
    color: #fff; /**use #FFD700 for gold */
    font-size: 48px;
    margin: 0 10px;
    text-align: center;
    font-family: "IBM Plex Sans Thai",  sans-serif;
    font-style: normal;
    cursor: pointer;
    text-decoration: underline;
    @media screen and (max-width: 768px){
        font-size: 40px;
    }
    @media screen and (max-width: 768px){
        font-size: 32px;
    }
`