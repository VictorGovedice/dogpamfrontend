import React from 'react';
import {animateScroll as scroll} from 'react-scroll';
import * as Styled from './styles';
import { FaFacebook,FaInstagram, FaYoutube, FaLinkedin } from 'react-icons/fa';
import ImagemLogo from '../../assets/images/dogpamfoter.png'

export default function index() {
    const toggleHome = () => {
        scroll.scrollToTop();
    };
    return (
        <>
            <Styled.FooterContainer>
                <Styled.FooterWrap>
                    <Styled.FooterLinksContainer>
                        <Styled.FooterLinksWrapper>
                            <Styled.FooterLinksItems>
                                <Styled.FooterLinkTitle>
                                    Sobre nos
                                </Styled.FooterLinkTitle>
                                <Styled.FooterLink to="/">
                                    Como trabalhamos
                                </Styled.FooterLink>
                                <Styled.FooterLink to="/">
                                    Nossos clientes
                                </Styled.FooterLink>
                                <Styled.FooterLink to="/">
                                    Seja um PetCare
                                </Styled.FooterLink>
                                <Styled.FooterLink to="/">
                                    Termos e leis
                                </Styled.FooterLink>
                            </Styled.FooterLinksItems>
                            <Styled.FooterLinksItems>
                                <Styled.FooterLinkTitle>
                                        Contate-nos
                                </Styled.FooterLinkTitle>
                                <Styled.FooterLink to="/">
                                        Contato
                                </Styled.FooterLink>
                                <Styled.FooterLink to="/">
                                    Suporte
                                </Styled.FooterLink>
                            </Styled.FooterLinksItems>
                            <Styled.FooterLinksItems>
                                <Styled.FooterLinkTitle>
                                    Vídeos
                                </Styled.FooterLinkTitle>
                                <Styled.FooterLink to="/">
                                    Vídeos Profissionais
                                </Styled.FooterLink>
                                <Styled.FooterLink to="/">
                                    Hoteis Pets parceiros
                                </Styled.FooterLink>
                                <Styled.FooterLink to="/">
                                    Clínicas veterinárias
                                </Styled.FooterLink> 
                                <Styled.FooterLink to="/">
                                    PetShops
                                </Styled.FooterLink>                                
                            </Styled.FooterLinksItems>
                            <Styled.FooterLinksItems>
                                <Styled.FooterLinkTitle>
                                    Redes Sociais
                                </Styled.FooterLinkTitle>
                                <Styled.FooterLink to="/">
                                    Instagram
                                </Styled.FooterLink>
                                <Styled.FooterLink to="/">
                                    Facebook
                                </Styled.FooterLink>
                                <Styled.FooterLink to="/">
                                    Youtube
                                </Styled.FooterLink>
                                <Styled.FooterLink to="/">
                                    LinkedIn
                                </Styled.FooterLink>
                            </Styled.FooterLinksItems>
                        </Styled.FooterLinksWrapper>
                    </Styled.FooterLinksContainer>
                    <Styled.SocialMedia>
                        <Styled.SocialMediaWrap>
                            <Styled.SocialLogo to="/" onClick={toggleHome}>
                                <img src={ImagemLogo} alt='DogPam footer'/>
                            </Styled.SocialLogo>
                            <Styled.WebsiteRights>
                                DogPam © {new Date().getFullYear()} Todos direitos reservados.
                            </Styled.WebsiteRights>
                            <Styled.SocialIcons>
                                <Styled.SocialIconLink href="https://www.facebook.com/dogpamoficial" target="_blank" aria-label="Facebook">
                                    <FaFacebook />
                                </Styled.SocialIconLink>
                                <Styled.SocialIconLink href="https://www.instagram.com/dogpam.oficial/" target="_blank" aria-label="Instagram">
                                    <FaInstagram />
                                </Styled.SocialIconLink>
                                <Styled.SocialIconLink href="https://www.youtube.com/channel/UC3QjCasWbPxnzguoF3HxfWQ" target="_blank" aria-label="Youtube">
                                    <FaYoutube />
                                </Styled.SocialIconLink>
                                <Styled.SocialIconLink href="https://www.linkedin.com/company/dogpam/" target="_blank" aria-label="Linkedin">
                                    <FaLinkedin />
                                </Styled.SocialIconLink>
                            </Styled.SocialIcons>
                        </Styled.SocialMediaWrap>
                    </Styled.SocialMedia>
                </Styled.FooterWrap>
            </Styled.FooterContainer>
        </>
    )
}
