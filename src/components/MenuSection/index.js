import React from 'react'
import ms2 from '../../images/ms2.jpg'
import { MenuA, MenuBg, MenuContainer, MenuContent, MenuImg } from './menuElements'
import menu_en from '../../pdfs/menu_en.pdf'
import menu_fr from '../../pdfs/menu_fr.pdf'

const MenuSection = () => {

  return (
    <MenuContainer id='menu'>
        <MenuBg>
            <MenuImg src={ms2}/>
        </MenuBg>
        <MenuContent>
            <MenuA
                href={menu_en}
                download="menu_en.pdf"
                target="_blank"          
            >
                EN
            </MenuA>
            <MenuA
                href={menu_fr}
                download="menu_fr.pdf"
                target="_blank"    
            >
                FR
            </MenuA>
        </MenuContent>
    </MenuContainer>
  )
}

export default MenuSection
