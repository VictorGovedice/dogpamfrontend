import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import * as Styled from './styles';
import ImgLogoDogPam from '../../assets/images/DogPam.png';

export default function Index() {
  const navigate = useNavigate();
  const [isHoveredHome, setIsHoveredHome ] = useState(false);
  const [isHoveredCriarConta, setIsHoveredCriarConta ] = useState(false);
  const [isHoveredRecuperarConta, setIsHoveredRecuperarConta ] = useState(false);

  const handleOnClick = () => {
    navigate('/');
  };

  const handleOnRecuperarSenha = () => {
    navigate('/');
  };

  const handleOnCriarNovoUser = () => {
    navigate('/');
  };

  return (
    <>
      <Styled.Container>
        <Styled.FormWrap>
          <Styled.FormContent>
            <Styled.Form action="#">
              <Styled.FormH1>
                <img src={ImgLogoDogPam} alt='Logo DogPam' />
              </Styled.FormH1>
              <Styled.FormLabel htmlFor='for'>Email</Styled.FormLabel>
              <Styled.Input type='email' required />
              <Styled.FormLabel htmlFor='for'>Senha</Styled.FormLabel>
              <Styled.Input type='password' required />
              <Styled.FormButton type='submit'>Continuar</Styled.FormButton>
              <Styled.Text>Esqueceu sua senha?<Styled.Text 
              onClick={handleOnRecuperarSenha}
              onMouseEnter={() => setIsHoveredRecuperarConta(true)}
              onMouseLeave={() => setIsHoveredRecuperarConta(false)}
              style={{
                cursor: 'pointer',
                color: isHoveredRecuperarConta ? 'rgb(143, 91, 60)' : 'black',
                background: isHoveredRecuperarConta ? 'none' : 'transparent',
                borderBottom: '1px solid rgb(143, 91, 60)',
                padding: '0px',
                borderRadius: '0px',
                transition: 'background 0.3s, color 0.3s',
              }}
              > Recuperar senha.</Styled.Text></Styled.Text>
              <Styled.Text
                onClick={handleOnCriarNovoUser}
                onMouseEnter={() => setIsHoveredCriarConta(true)}
                onMouseLeave={() => setIsHoveredCriarConta(false)}
              style={{
                cursor: 'pointer',
                color: isHoveredCriarConta ? 'rgb(143, 91, 60)' : 'black',
                background: isHoveredCriarConta ? 'none' : 'transparent',
                padding: '0px',
                borderRadius: '0px',
                transition: 'background 0.3s, color 0.3s',
              }}
              >
                Não tem conta? Criar conta.
              </Styled.Text>
              <Styled.Text
                onClick={handleOnClick}
                onMouseEnter={() => setIsHoveredHome(true)}
                onMouseLeave={() => setIsHoveredHome(false)}
                style={{
                  cursor: 'pointer',
                  color: isHoveredHome ? 'rgb(143, 91, 60)' : 'black',
                  background: isHoveredHome ? 'none' : 'transparent',
                  padding: '10px',
                  borderRadius: '5px',
                  transition: 'background 0.3s, color 0.3s',
                }}
              >
                Voltar para home
              </Styled.Text>
            </Styled.Form>
          </Styled.FormContent>
        </Styled.FormWrap>
      </Styled.Container>
    </>
  );
}
