import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
    min-height: 100%;
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    top: 0;
    z-index: 0;
    overflow: hidden;
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

export const Info = styled.div`
  color: #5b5b5b;
  margin-bottom: 20px;
`;

export const Button = styled.button`
  border-radius: 50px;
  background: #8F5B3C;
  color: #fff;
  padding: 10px 20px;
  cursor: pointer;
  border: none;
  outline: none;
  transition: background-color 0.2s ease-in-out;

  &:hover {
    background-color: #CD926D;
  }
`;


export const MainContainer = styled.div`
  display: flex;
`;

export const Sidebar = styled.div`
  width: 250px;
  background-color: #f0f0f0;
  height: 100vh;
`;

export const Menu = styled.ul`
  list-style: none;
  padding: 0;
`;

export const MenuItem = styled.li`
  padding: 20px;
  cursor: pointer;
  &:hover {
    background-color: #e0e0e0;
  }
`;

export const Content = styled.div`
  flex-grow: 1;
  padding: 20px;
  width: 50%;
`;

export const RightSidebar = styled.div`
  width: 300px;
  background-color: rgb(189 145 118);
  height: 100vh;
`;

export const ChatContainer = styled.div`
  /* Estilos para o container do chat */
`;

// ... seus estilos existentes ...

export const UserProfileContainer = styled.div`
  padding: 1rem;
`;

export const ProfilePicture = styled.img`
  width: 100px; // ou o tamanho que desejar
  height: 100px; // igual à largura para manter a imagem circular
  border-radius: 50%; // Isso torna a imagem redonda
  object-fit: cover; // Isso garante que a imagem cubra todo o espaço sem distorcer
  border: 2px solid #fff; // Adiciona uma borda branca (opcional)
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1); // Sombra leve (opcional)
`;

export const UserInfo = styled.div`
  // Estilos para o container das informações do usuário
`;

export const UserName = styled.h2`
  // Estilos para o nome do usuário
`;

export const UserEmail = styled.p`
  // Estilos para o email do usuário
`;

export const EditButton = styled.button`
    background-color: unset;
`;

export const LogoutButton = styled.button`
  position: fixed;
  right: 20px;
  bottom: 20px;
  padding: 10px 20px;
  background-color: #f44336; // Cor vermelha para o botão de saída
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  z-index: 1000; // Garantir que fique acima de outros elementos

  &:hover {
    background-color: #d32f2f;
  }
`;

export const PetCard = styled.div`
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 15px;
  margin: 10px 0;
  display: flex;
  align-items: center;
`;

export const PetImage = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  object-fit: cover;
  margin-right: 15px;
`;

export const PetInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

export const PetName = styled.h3`
  margin: 0;
  color: #333;
  font-size: 1.2em;
`;

export const PetAge = styled.span`
  color: #666;
  font-size: 1em;
`;

export const PetServices = styled.span`
  color: #666;
  font-size: 0.9em;
  margin-top: 5px;
`;

export const PetType = styled.span`
  color: #666;
  font-size: 0.9em;
  margin-top: 5px;
`;

export const AddPetButton = styled.button`
  background-color: #4CAF50; /* Green */
  border: none;
  color: white;
  padding: 10px 20px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  cursor: pointer;
  border-radius: 8px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #45a049; /* Darker green */
  }
`;

export const PetForm = styled.div`
  margin-top: 20px;
  padding: 20px;
  background-color: #f5f5f5;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

export const PetInput = styled.input`
  display: block;
  width: 100%;
  padding: 10px;
  margin-bottom: 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
  box-sizing: border-box;
`;

export const PetSubmitButton = styled.button`
  display: block;
  width: 100%;
  padding: 10px;
  margin-top: 10px;
  background-color: #4CAF50;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  &:hover {
    background-color: #45a049;
  }
`;

export const FileInput = styled.input``;


export const UpdatePhotoButton = styled.button`
  background-color: #4CAF50; /* Cor de fundo verde */
  color: white; /* Texto branco */
  padding: 10px 20px; /* Padding para tornar o botão maior */
  border: none; /* Sem borda */
  border-radius: 5px; /* Borda arredondada */
  cursor: pointer; /* Cursor do mouse como ponteiro */
  font-size: 0.7em; /* Tamanho da fonte */
  margin-top: 10px; /* Margem no topo */
  transition: background-color 0.3s; /* Transição suave para hover */

  &:hover {
    background-color: #45a049; /* Cor de fundo mais escura quando passa o mouse */
  }

  &:focus {
    outline: none; /* Remove o contorno ao focar (clique) */
  }

  &:disabled {
    background-color: #ccc; /* Cor de fundo para estado desabilitado */
    cursor: default; /* Cursor padrão para estado desabilitado */
  }
`;

// ... estilos adicionais conforme necessário ...

