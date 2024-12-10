import React from 'react'
import { 
    SidebarContainer, 
    Icon, 
    CloseIcon, 
    SideBtnWrap, 
    SidebarLink, 
    SidebarRoute, 
    SidebarWrapper, 
    SidebarMenu 
} from './sidebarElements'
const Sidebar = ({isOpen, toggle}) => {
  return (
        <SidebarContainer isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
                <CloseIcon/>
            </Icon>
            <SidebarWrapper>
                <SidebarMenu>
                    <SidebarLink to='about' onClick={toggle}>About</SidebarLink>
                    <SidebarLink to='menu' onClick={toggle}>Menu</SidebarLink>
                    <SidebarLink to='order_online' onClick={toggle}>Order online</SidebarLink>
                    {/* <SidebarLink to='contact' onClick={toggle}>Contact</SidebarLink> */}
                </SidebarMenu>
                {/* <SideBtnWrap>
                    <SidebarRoute to="/signin">Sign in</SidebarRoute>
                </SideBtnWrap> */}
            </SidebarWrapper>
        </SidebarContainer>
  )
}

export default Sidebar
