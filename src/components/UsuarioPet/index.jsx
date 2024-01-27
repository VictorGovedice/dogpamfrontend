import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import * as Styled from './styles';
import ImgLogoDogPam from '../../assets/images/DogPam.png';

const SimpleModal = ({ show, onClose, message }) => {
  if (!show) return null;

  return (
    <div style={{
      position: 'fixed',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      backgroundColor: 'white',
      padding: '20px',
      zIndex: 1000,
    }}>
      <p>{message}</p>
      <button onClick={onClose}>Fechar</button>
    </div>
  );
};

const UsuarioPet = () => {
  const [showModal, setShowModal] = useState(false);
  const [modalMessage, setModalMessage] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:3001/usuarioPet', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, senha: password }),
      });

      if (response.ok) {
        const { token } = await response.json();
        localStorage.setItem('userToken', token);
        navigate('/areaUsuarioPet')
      } else {
        setModalMessage('Email ou senha inválidos.');
        setShowModal(true);
      }
    } catch (error) {
      setModalMessage('Erro ao conectar ao servidor.');
      setShowModal(true);
    }
  };

  return (
    <>
      <Styled.Container>
        <Styled.FormWrap>
          <Styled.FormContent>
            <Styled.Form onSubmit={handleSubmit}>
              <Styled.FormH1>
                <img src={ImgLogoDogPam} alt='Logo DogPam' />
              </Styled.FormH1>
              <Styled.FormLabel htmlFor='email'>Email</Styled.FormLabel>
              <Styled.Input id='email' type='email' required value={email} onChange={(e) => setEmail(e.target.value)} />
              <Styled.FormLabel htmlFor='password'>Senha</Styled.FormLabel>
              <Styled.Input id='password' type='password' required value={password} onChange={(e) => setPassword(e.target.value)} />
              <Styled.FormButton type='submit'>Continuar</Styled.FormButton>
            </Styled.Form>
          </Styled.FormContent>
        </Styled.FormWrap>
      </Styled.Container>

      <SimpleModal 
        show={showModal} 
        onClose={() => setShowModal(false)} 
        message={modalMessage} 
      />
    </>
  );
};

export default UsuarioPet;
