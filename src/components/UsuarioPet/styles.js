import styled from "styled-components";
import { Link } from "react-router-dom";
import dogBackground from '../../assets/images/dogs.png'

export const Container = styled.div`
    min-height: 100%;
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    top: 0;
    z-index: 0;
    overflow: hidden;
    background: url(${dogBackground}) no-repeat center center fixed;
    background-size: cover;
`;


export const FormWrap = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;

    @media screen and (max-width:400px){
        height: 80%;
    }
`;

export const Icon = styled(Link)`
    margin: 32px 0px 0px 32px;
    text-decoration:none;
    color: var(--wjite);
    font-weight: 700;
    font-size: 32px;

    @media screen and (max-width:480px){
        margin-left: 16px;
        margin-top: 8px;
    }
`;

export const FormContent = styled.div`
height:100%;
display: flex;
flex-direction: column;
justify-content: center;
    @media screen and (max-width: 480px){
    padding:10px;
    }
`;
export const Form = styled.form`
    background: #fff;
    max-width:400px;
    height: auto;
    width: 100%;
    z-index: 1;
    display: grid;
    margin: 0 auto;
    padding: 35px 32px;
    border-radius: 20px;
    box-shadow: rgba(0, 0, 0, 0.9) 9px 1px 20px;
    @media screen and (max-width: 400px) {
    padding: 32px 32px;
    }
`;

export const FormH1 = styled.h1`
    margin-bottom: 40px;
    color: var(--white);
    font-size: 20px;
    font-weight:400px;
    text-align:center;
    display: flex;
    flex-direction: column;
    align-items: center;

    img{
        width: 160px;
    }
`;

export const FormLabel = styled.label`
margin-bottom: 8px;
font-size: 14px;
color: #5b5b5b;
`;

export const Input = styled.input`
padding: 16px 16px;
margin-bottom:32px;
border: none;
border-radius:4px;
background-color: #afafaf;
`

export const FormButton = styled.button`
border-radius: 50px;
background: ${('#8F5B3C')};
white-space: nowrap;
padding: ${({big}) => (big ? '14px 48px' : '12px 30px')};
color: ${('#fff')};
font-size: ${({fontBig}) => fontBig ? '20px' : '16px'};
outline: none;
border: none;
cursor: pointer;
display: flex;
justify-content: center;
align-items: center;
transition:  all .2s ease-in-out;
margin-top: 1.2rem;
margin-bottom: 2rem;

&:hover{
    transition: all .2s ease-in-out;
    background: ${('#CD926D')};
    color: ${('#fff')};
}

`;

export const Text = styled.span`
text-align: center;
margin-top: 9px;
color: #5b5b5b;
font-size:14px;
`