import React, { useState } from 'react';
import * as Styled from './styles';
import InputMask from 'react-input-mask';
import axios from 'axios';
import Footer from '../Footer';


export default function Index() {
  const textoHousesPet = 'Cadastro usuário';

  //modal
  const [modalShow, setModalShow] = useState(false);
  const [modalContent, setModalContent] = useState('');

  const [nome, setNome] = useState('');
  const [sexo, setSexo] = useState('');
  const opcoesSexo = ['Masculino', 'Feminino', 'Outros', 'Prefiro não informar'] //Adicionar mais opções
  const [email, setEmail] = useState('');
  const [confirmarEmail, setConfirmarEmail] = useState('');
  const [celular, setCelular] = useState('');
  const [emailError, setEmailError] = useState('');
  const [dataAniversario, setDataAniversario] = useState('')
  const [idade, setIdade] = useState('')
  const [senha, setSenha] = useState('')
  const [foto, setFoto] = useState(null)


    // Função para exibir o modal com a resposta do backend
    const showModal = (content) => {
      setModalContent(content);
      setModalShow(true);
  
      // Fechar o modal após 15 segundos
      setTimeout(() => {
        setModalShow(false);
      }, 7000);
    };

  const handleNomeChange = (e) => {
    const novoNome = e.target.value;
    if (/^[A-Za-z\s]+$/.test(novoNome) || novoNome === '') {
      setNome(novoNome);
    }

  };

  const handleSexoChange = (e) => {
    setSexo(e.target.value);
  };

  const handleSenhaChange = (e) => {
    setSenha(e.target.value);
  };

  const handleFotoChange = (e) => {
    setFoto(e.target.files[0]); // Pega o primeiro arquivo
  };

  const handleDataAniversarioChange = (e) => {
    const novaDataAniversario = e.target.value;
    setDataAniversario(novaDataAniversario);
  
    // Calcula a idade com base na data de nascimento
    if (novaDataAniversario) {
      const dataNascimento = new Date(novaDataAniversario);
      const hoje = new Date();
      const idadeCalculada = hoje.getFullYear() - dataNascimento.getFullYear();
  
      // Verifica se o aniversário já ocorreu este ano
      if (
        hoje.getMonth() < dataNascimento.getMonth() ||
        (hoje.getMonth() === dataNascimento.getMonth() &&
          hoje.getDate() < dataNascimento.getDate())
      ) {
        setIdade(idadeCalculada - 1); // Ainda não fez aniversário este ano
      } else {
        setIdade(idadeCalculada); // Já fez aniversário este ano
      }
    }
  };

  const handleIdadeChange = (e) => {
    setIdade(e.target.value)
  }

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleConfirmarEmailChange = (e) => {
    setConfirmarEmail(e.target.value);
  };

  const handleCelularChange = (e) => {
    setCelular(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Verificar se os e-mails coincidem
    if (email !== confirmarEmail || email === "" || confirmarEmail === "") {
      setEmailError('Os e-mails não coincidem');
      return;
    }
    
    // Verificar se a senha tem pelo menos 8 caracteres
    if (senha.length < 8) {
      alert('A senha deve conter no mínimo 8 caracteres.');
      return;
    }

    // Lógica adicional de validação, se necessário
    if (!nome || /\d/.test(nome)) {
      // Adicione uma mensagem de erro ou ação apropriada aqui, se necessário
      alert('Nome inválido');
      return;
    }

      // Verificar se o campo "celular" tem pelo menos 11 números e não contém letras
      const celularNumerico = celular.replace(/\D/g, '');
      if (celularNumerico.length < 11 || /\D/.test(celularNumerico)) {
        // Adicione uma mensagem de erro ou ação apropriada aqui, se necessário
        alert('Número de celular inválido. Certifique-se de ter inserido pelo menos 11 números e sem letras.');
        return;
      }

      if (dataAniversario === '' || dataAniversario.replace(/\D/g, '').length < 8) {
        alert('Data de nascimento incompleto. Preencha o campo corretamente.');
        return;
      }
    
      // Verificar se a idade é válida
      if (!idade || idade < 0 || idade > 90) {
        alert('Idade inválida. Certifique-se de ter inserido uma idade válida.');
        return;
      }

      if(sexo === ''){
        alert('Selecione alguma opção no campo sexo')
      }

    // Limpar o erro de e-mail
    setEmailError('');

    try {
      // Crie um objeto com os dados do formulário

      const formData = new FormData();
      formData.append('nome', nome);
      formData.append('sexo', sexo);
      formData.append('email', email);
      formData.append('celular', celular);
      formData.append('dataAniversario', dataAniversario);
      formData.append('idade', idade);
      formData.append('senha', senha);

      if(foto){
        formData.append('foto', foto)
      }

    // Faça uma solicitação POST para o endpoint do seu backend
    const response = await axios.post('http://localhost:3001/CadastroUsuarioPet', formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    });
      // Manipule a resposta conforme necessário
      //console.log('Resposta do backend:', response.data);

      showModal(response.data);

    } catch (error) {
      // Trate quaisquer erros que ocorram durante a solicitação POST
      console.error('Erro ao enviar formulário:', error);
      // Você pode definir um estado de erro aqui, se necessário
    }
  };

  return (
    <>
      <Styled.Container>
        <Styled.FormWrap>
          <Styled.FormContent>
            <Styled.Form onSubmit={handleSubmit}>
              <Styled.FormH1>{textoHousesPet}</Styled.FormH1>

              <Styled.FormLabel htmlFor='nome'>Nome completo</Styled.FormLabel>
              <Styled.Input type='text' placeholder='John Cary' id='nome' required onChange={handleNomeChange} />

              <Styled.FormLabel htmlFor='sexo'>Sexo:</Styled.FormLabel>
              <Styled.Select id='sexo' name='sexo' required onChange={handleSexoChange}>
              <option value=''>Selecione...</option>
              {opcoesSexo.map((opcao) => (
                <option key={opcao} value={opcao}>{opcao}</option>
              ))}
            </Styled.Select>

              <Styled.FormLabel htmlFor='email'>Email</Styled.FormLabel>
              <Styled.Input type='email' id='email' placeholder='john@gmail.com' required onChange={handleEmailChange} />

              <Styled.FormLabel htmlFor='confirmEmail'>Confirmar Email</Styled.FormLabel>
              <Styled.Input type='email' id='confirmEmail' placeholder='john@gmail.com' required onChange={handleConfirmarEmailChange} />

              <Styled.FormLabel htmlFor='celular'>Celular</Styled.FormLabel>
              <InputMask
                style={{
                  padding: '16px',
                  marginBottom: '32px',
                  border: 'none',
                  borderRadius: '4px',
                  backgroundColor: '#afafaf',
                }}
                mask="(99) 99999-9999"
                maskChar={null}
                type='text'
                id='celular'
                placeholder='(99) 99999-9999'
                required
                value={celular}
                onChange={handleCelularChange}
              />

              <Styled.FormLabel htmlFor='dataAniversario'>Data de aniversário</Styled.FormLabel>
              <InputMask
                style={{
                  padding: '16px',
                  marginBottom: '32px',
                  border: 'none',
                  borderRadius: '4px',
                  backgroundColor: '#afafaf',
                }}
                mask='99/99/9999' // Define o formato da máscara
                placeholder='09/09/1999'
                id='dataAniversario'
                onChange={handleDataAniversarioChange}
               />

              <Styled.FormLabel htmlFor='idade'>Idade</Styled.FormLabel>
              <Styled.Input
                type='number'
                id='idade'
                placeholder='25'
                required
                value={idade}
                onChange={handleIdadeChange}
                disabled // Desabilita a edição do campo de idade
              />

                <Styled.FormLabel htmlFor='senha'>Senha</Styled.FormLabel>
                <Styled.Input
                  type='password'
                  id='senha'
                  placeholder='Digite sua senha'
                  required
                  onChange={handleSenhaChange}
                />

                <Styled.FormLabel htmlFor='foto'>Foto</Styled.FormLabel>
                <Styled.Input type='file' id='foto' onChange={handleFotoChange} />

              {emailError && <Styled.FormH1>{emailError}</Styled.FormH1>}

              <Styled.FormButton type='submit'>Criar conta</Styled.FormButton>
            </Styled.Form>
          </Styled.FormContent>
        </Styled.FormWrap>
      </Styled.Container>


      <Styled.Container>

        {/* Modal para exibir a resposta do backend */}
        <div className={`modal fade ${modalShow ? 'show' : ''}`} style={{ display: modalShow ? 'block' : 'none', backgroundColor: 'rgba(0, 0, 0, 0.7)' }} tabIndex="-1" role="dialog">
          <div className="modal-dialog modal-dialog-centered" role="document">
            <div className="modal-content" style={{ backgroundColor: '#fff', border: 'none' }}>
              <div className="modal-header">
                <h5 className="modal-title">Parabens!!</h5>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={() => setModalShow(false)}></button>
              </div>
              <div className="modal-body" style={{ color: '#000' }}>
                {modalContent}
              </div>
            </div>
          </div>
        </div>

      </Styled.Container>

      <Footer />
    </>
  );
}
