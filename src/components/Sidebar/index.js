import React from 'react';
import {SidebarContainer, Icon, CloseIcon, SidebarMenu, SidebarLink, SidebarRoute, SideBtnWrap } from './SideBarElements';

const SideBar = ({isOpen, toggle}) => {
    return (
        <SidebarContainer isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
                <CloseIcon />
            </Icon>
            <SidebarMenu>
                <SidebarLink to="/">Hombre</SidebarLink>
                <SidebarLink to="/">Mujer</SidebarLink>
                <SidebarLink to="/">Accesorios Deportivos</SidebarLink>
                
            </SidebarMenu>
            <SideBtnWrap>
                <SidebarRoute to="/">Hace tu pedido</SidebarRoute>
            </SideBtnWrap>
        </SidebarContainer>
            
    )
}

export default SideBar;
