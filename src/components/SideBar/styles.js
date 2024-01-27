import styled from "styled-components";
import {Link as LinkS} from 'react-scroll';
import {Link as LinkR} from 'react-router-dom';
import {FaTimes} from 'react-icons/fa';


export const SidebarContainer = styled.aside`
    position: fixed;
    z-index: 999;
    width: 100%;
    height: 100%;
    background: var(--tertiary);
    display: grid;
    align-items: center;
    top: 0;
    left: 0;
    transition: .3s ease-in-out;
    opacity: ${({isOpen}) => (isOpen ? '100%' : '0')};
    top: ${({ isOpen }) => (isOpen ? '0' : '-100%')};    
`;

export const CloseIcon = styled(FaTimes)`
    color: #8F5B3C;
`;

export const Icon = styled.div`
    position: absolute;
    top: 1.2rem;
    right:1.5rem;
    background: transparent;
    cursor: pointer;
    font-size: 2rem;
    outline: none;

`;

export const SidebarWrapper = styled.div`
    color: var(--white);
`;


export const SidebarLink = styled(LinkS)`
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.5rem;
    text-decoration:none;
    list-style: none;
    transition: none.2s ease-in-out;
    text-decoration:none;
    color: var(--white);
    cursor: pointer;

    &:hover{
        color: var(--secondary);
        transition: .2s ease-in-out
    }
`;


export const SideBtnWrap = styled.div`
    display: flex;
    justify-content: center;
`;


export const SidebarMenu = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: repeat()(6,180px);
    grid-template-rows: repeat(6,80px);
    text-align: center;

    @media screen and (max-width: 480px){
        grid-template-rows: repeat(6,60px);
    }
`;


export const SidebarRouter = styled(LinkR)`
    border-radius: 50px;
    background: var(--secondary);
    white-space: nowrap;
    padding: 16px 64px;
    color: var(--tertiary);
    font-size: 16px;
    outline: none;
    border: none;
    cursor: pointer;
    transition: all .2s ease-in-out;
    text-decoration: none;

    &:hover{
        transition: all .2s ease-in-out; 
        background: var(--white);
        color: var(--secondary);

    }
`;

