import React from 'react'
import * as Styled from './styles';

export default function Sidebar({isOpen, toggle}) {
    return (
        <> 
            <Styled.SidebarContainer isOpen={isOpen} onClick={toggle}>
                <Styled.Icon onClick={toggle}>
                    <Styled.CloseIcon />
                </Styled.Icon>
                <Styled.SidebarWrapper>
                    <Styled.SidebarMenu>
                        <Styled.SidebarLink to="about" onClick={toggle}>
                            Home
                        </Styled.SidebarLink>
                        <Styled.SidebarLink to="discover" onClick={toggle}>
                            Trabalho que relizamos
                        </Styled.SidebarLink>
                        <Styled.SidebarLink to="services" onClick={toggle}>
                            Serviços
                        </Styled.SidebarLink>
                        <Styled.SidebarLink to="signup" onClick={toggle}>
                            Seja um PetCare
                        </Styled.SidebarLink>
                    </Styled.SidebarMenu>
                    <Styled.SideBtnWrap>
                        <Styled.SidebarRouter to="/signin">
                            Entrar
                        </Styled.SidebarRouter>
                        <Styled.SidebarRouter to="/signin">
                            Cadastrar
                        </Styled.SidebarRouter>
                    </Styled.SideBtnWrap>
                </Styled.SidebarWrapper>
            </Styled.SidebarContainer>
        </>
    )
}
