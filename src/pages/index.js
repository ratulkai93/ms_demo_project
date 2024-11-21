import React, {useState} from 'react'
import Sidebar from '../components/Sidebar'
import Navbar from '../components/Navbar'
import HeroSection from '../components/HeroSection'
import InfoSection from '../components/InfoSection';
import { homeObjOne, homeObjTwo } from '../components/InfoSection/Data';
import MenuSection from '../components/MenuSection';

const Home = () => {
    const [isOpen,setIsOpen] = useState(false)

    const toggle = ()=>{
        setIsOpen(!isOpen)
    };

  return (
    <>
        {/* <Sidebar isOpen={isOpen} toggle={toggle} /> */}
        <Navbar toggle= {toggle} />
        {/* <HeroSection/> */}
        {/* <InfoSection {...homeObjOne}/> */}
        <MenuSection/>
        {/* <InfoSection {...homeObjTwo}/> */}

    </>
  );
};

export default Home;
