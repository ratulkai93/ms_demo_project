//helper function for onCLick to mae sri google page
export const mapPage=()=>{
    window.open("https://maps.app.goo.gl/tN1vi5EdLcLzrK978")
}

export const uberPage=()=>{
    window.open("https://www.ubereats.com/ca/store/mae-sri-comptoir-thai-milton/fB2G9G3DRgaUCFMxtCI04Q")
}

// export const doordashPage=()=>{
//     window.open("https://www.doordash.com/store/mae-sri-comptoir-thai-montr%C3%A9al-896364/")
// }

export const homeObjOne= {
    id:'about',
    lightBg: false,
    lightText: true,
    lightTextDesc: true,
    topLine: 'Kuai Tiao Thai Counter',
    heading: 'Best noodles soup spot for all your spicy cravings',
    description: 'From kuai tiao heng to lab and kao man kai, find the taste of authentic thai street food in the heart of Montreal.',
    buttonLabel: 'Find us', //add google link to the resto
    imgStart: false,
    img: require('../../images/ms3.jpg'),
    alt: 'resto',
    dark: true,
    primary: true,
    darkText: false,
    pageLink: mapPage
};

export const homeObjTwo= {
    id:'about',
    lightBg: false,
    lightText: true,
    lightTextDesc: true,
    topLine: 'Order Online',
    heading: 'Delivering the taste of thailand to your doorsteps',
    description: 'Available for delivery with both Uber and Doordash',
    buttonLabel: 'Uber', //add google link to the resto
    imgStart: false,
    img: require('../../images/ms4.jpg'),
    alt: 'resto',
    dark: true,
    primary: true,
    darkText: false,
    pageLink: uberPage
};