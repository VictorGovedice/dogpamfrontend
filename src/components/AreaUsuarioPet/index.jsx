import React, { useState, useEffect } from 'react';
import axios from 'axios';
import * as Styled from './styles';
import { useNavigate } from 'react-router-dom';

export default function UserProfile() {
  const [user, setUser] = useState({ nome: '', email: '', foto: '' });
  const [isEditing, setIsEditing] = useState(false);
  const [newName, setNewName] = useState('');
  const [newEmail, setNewEmail] = useState('');
  const [newPhoto, setNewPhoto] = useState(null);
  const navigate = useNavigate();
  const [activeContent, setActiveContent] = useState('pets');
  const [newPetPhoto, setNewPetPhoto] = useState(null);
    

  const [pets, setPets] = useState([]);

  const [newPet, setNewPet] = useState({ nome: '', idade: '', tipo: '', servicosProcurados: '' });

  const handleNewPetChange = (e) => {
    setNewPet({ ...newPet, [e.target.name]: e.target.value });
  };

  const handlePetPhotoChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setNewPetPhoto(file);
    }
  };

  // Função para atualizar foto
  const handleUpdatePhoto = async () => {
    if (newPhoto) {
      const formData = new FormData();
      formData.append('foto', newPhoto);
  
      try {
        const token = localStorage.getItem('userToken');
        const response = await axios.post('http://localhost:3001/updateProfilePhoto', formData, {
          headers: {
            Authorization: token,
            'Content-Type': 'multipart/form-data',
          },
        });
  
        // Atualize o estado do usuário aqui com a nova foto
        setUser(prevState => ({
          ...prevState,
          foto: `http://localhost:3001/${response.data.foto}`,
        }));
      } catch (error) {
        console.error('Erro ao atualizar a foto', error);
      }
    }
  };
  

  const addNewPet = async () => {
    const formData = new FormData();
    formData.append('nome', newPet.nome);
    formData.append('idade', newPet.idade);
    formData.append('tipo', newPet.tipo);
    formData.append('servicosProcurados', newPet.servicosProcurados);
    if (newPetPhoto) {
      formData.append('foto', newPetPhoto);
    }
  
    try {
      const token = localStorage.getItem('userToken');
      await axios.post('http://localhost:3001/cadastrarPet', formData, {
        headers: {
          Authorization: token,
          'Content-Type': 'multipart/form-data',
        },
      });
  
      setPets([...pets, { ...newPet, foto: newPetPhoto }]);
      setNewPet({ nome: '', idade: '', tipo: '', servicosProcurados: '' }); // Resetar o formulário
      setNewPetPhoto(null); // Resetar a foto
    } catch (error) {
      console.error('Erro ao cadastrar pet', error);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('userToken'); // Remover o token do localStorage
    navigate('/usuarioPet'); // Redirecionar para a tela de login
  };

    // Função para mudar o conteúdo ativo
    const handleMenuClick = (content) => {
      setActiveContent(content);
    };

  useEffect(() => {
    const fetchUserData = async () => {
      const token = localStorage.getItem('userToken'); // Buscar o token armazenado
      console.log("Token:", token)
      if (token) {
        try {
          const response = await axios.get('http://localhost:3001/areaUsuarioPet', {
            headers: {
              Authorization: token,
            },
          });

          setUser({
            nome: response.data.user.nome,
            email: response.data.user.email,
            foto: response.data.user.foto ? `http://localhost:3001/${response.data.user.foto}` : 'path_to_default_image',
          });
        } catch (error) {
          console.error('Erro ao buscar dados do usuário', error);
        }
      }
    };

    const fetchPets = async () => {
      const token = localStorage.getItem('userToken');
      if (token) {
        try {
          const response = await axios.get('http://localhost:3001/meusPets', {
            headers: {
              Authorization: token,
            },
          });
          
          // Adiciona o caminho base às fotos dos pets
          const petsWithUpdatedPhotos = response.data.map(pet => ({
            ...pet,
            foto: pet.foto ? `http://localhost:3001/${pet.foto}` : 'path_to_default_pet_image'
          }));
    
          setPets(petsWithUpdatedPhotos);
        } catch (error) {
          console.error('Erro ao buscar pets', error);
        }
      }
    };
    

    fetchUserData();
    fetchPets();
    document.getElementById('profile-photo').click();
  }, []);

  const handleEdit = () => {
    setIsEditing(true);
    setNewName(user.nome);
    setNewEmail(user.email);
  };

  const handleSave = async () => {
    const formData = new FormData();
    formData.append('nome', newName);
    formData.append('email', newEmail);
    if (newPhoto) {
      formData.append('foto', newPhoto); // Adicionando a foto apenas se houver uma nova
    }

    try {
      const token = localStorage.getItem('userToken');
      const response = await axios.post('http://localhost:3001/updateProfile', formData, {
        headers: {
          Authorization: token,
          'Content-Type': 'multipart/form-data', // Esta linha é opcional, pois o navegador pode definir automaticamente
        },
      });

      // Atualize o estado do usuário aqui com a resposta, se necessário
      setUser({ ...user, nome: newName, email: newEmail }); // Atualizar o estado com os novos dados
      if (response.data.foto) {
        setUser(prevState => ({
          ...prevState,
          foto: `http://localhost:3001/${response.data.foto}`,
        }));
      }
      setIsEditing(false);
    } catch (error) {
      console.error('Erro ao atualizar o perfil', error);
    }
  };

  const handlePhotoChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setNewPhoto(file);
  
      // Criar uma URL para o arquivo
      const fileUrl = URL.createObjectURL(file);
      
      // Atualizar o estado do usuário com a nova URL da foto
      setUser(prevState => ({
        ...prevState,
        foto: fileUrl,
      }));
    }
  };

  const triggerFileInput = () => {
    document.getElementById('profile-photo').click();
  };

  return (
    <Styled.MainContainer>
      <Styled.Sidebar>
        <Styled.Menu>
          <Styled.MenuItem onClick={() => handleMenuClick('pets')}>Pet's Cadastrados</Styled.MenuItem>
          <Styled.MenuItem onClick={() => handleMenuClick('petcare')}>PetCare - Procurar alguém para cuidar do meu pet</Styled.MenuItem>
          <Styled.MenuItem onClick={() => handleMenuClick('clinica24h')}>Clínicas Perto 24h</Styled.MenuItem>
          <Styled.MenuItem onClick={() => handleMenuClick('banhotosa')}>Banho e Tosa</Styled.MenuItem>
          <Styled.MenuItem onClick={() => handleMenuClick('novidadespet')}>Novidades Pet's</Styled.MenuItem>
          <Styled.MenuItem onClick={() => handleMenuClick('hotelpet24h')}>Hoteis Pet 24h</Styled.MenuItem>
        </Styled.Menu>
      </Styled.Sidebar>

      <Styled.Content>

      {activeContent === 'pets' && (
  <>
    <Styled.AddPetButton onClick={() => {/* código para adicionar um novo pet */}}>
      Cadastrar Novo Pet
    </Styled.AddPetButton>

    {/* Formulário para adicionar um novo pet */}
    <Styled.PetForm>
      <Styled.PetInput
        name="nome"
        placeholder="Nome do Pet"
        value={newPet.nome}
        onChange={handleNewPetChange}
      />
      <Styled.PetInput
        name="idade"
        placeholder="Idade do Pet"
        value={newPet.idade}
        onChange={handleNewPetChange}
      />
      <Styled.PetInput
        name="tipo"
        placeholder="Tipo do Pet (ex: cachorro, gato)"
        value={newPet.tipo}
        onChange={handleNewPetChange}
      />
      <Styled.PetInput
        name="servicosProcurados"
        placeholder="Serviços Procurados"
        value={newPet.servicosProcurados}
        onChange={handleNewPetChange}
      />
      <Styled.PetAge>Imagem do pet:  </Styled.PetAge>
      <Styled.FileInput
          type="file"
          accept="image/*"
          onChange={handlePetPhotoChange}
        />
      <Styled.PetSubmitButton onClick={addNewPet}>Adicionar Pet</Styled.PetSubmitButton>
    </Styled.PetForm>

    {/* Lista de pets */}
    {Array.isArray(pets) && pets.map(pet => (
    <Styled.PetCard key={pet.id}>
        <Styled.PetImage src={pet.foto || 'path_to_default_pet_image'} alt={`Foto do ${pet.nome}`} />
        <Styled.PetInfo>
            <Styled.PetName>{pet.nome}</Styled.PetName>
            <Styled.PetAge>{pet.idade} anos</Styled.PetAge>
            <Styled.PetType>{pet.tipo}</Styled.PetType>
            <Styled.PetServices>{pet.servicosProcurados}</Styled.PetServices>
        </Styled.PetInfo>
    </Styled.PetCard>
))}
  </>
)}

          {activeContent === 'petcare' && (
            <div>
              <Styled.PetServices>Procure profissionais PetCare para cuidade do seu Pet</Styled.PetServices>
            </div>
          )}

          {activeContent === 'clinica24h' && (
            <div>
              <Styled.PetServices>Clinicas 24 horas para o melhor cuidado do seu animal</Styled.PetServices>
            </div>
          )}

          {activeContent === 'banhotosa' && (
            <div>
              <Styled.PetServices>Promoções banho e tosa, ganhe vales e de nota para as melhores Banho e Tosa</Styled.PetServices>
            </div>
          )}
          
          {activeContent === 'novidadespet' && (
            <div>
              <Styled.PetServices>Todas as novidades para o seu pet</Styled.PetServices>
            </div>
          )}

          {activeContent === 'hotelpet24h' && (
            <div>
              <Styled.PetServices>Veja os melhores Hoteis Pet perto de voce</Styled.PetServices>
            </div>
          )}
      </Styled.Content>

      <Styled.RightSidebar>
        {/* Informações do usuário */}
        <Styled.UserProfileContainer>
        <Styled.ProfilePicture 
            src={user.foto || 'path_to_default_image'} 
            alt='Profile' 
            onClick={triggerFileInput} // Adiciona o evento de clique aqui
          />
        <Styled.FileInput
            type="file"
            id="profile-photo"
            accept="image/*"
            onChange={handlePhotoChange}
            hidden
        />
        <Styled.UpdatePhotoButton onClick={handleUpdatePhoto}>Atualizar Foto</Styled.UpdatePhotoButton>
        <Styled.UserInfo>
          <Styled.UserName>{user.nome}</Styled.UserName>
          <Styled.UserEmail>{user.email}</Styled.UserEmail>
        </Styled.UserInfo>
        <Styled.EditButton onClick={handleEdit}>Editar Perfil</Styled.EditButton>
      </Styled.UserProfileContainer>

        {/* Chat */}
        <Styled.ChatContainer>
          {/*Chat para se comunicar com o PetCare disponivel */}
        </Styled.ChatContainer>
      </Styled.RightSidebar>
      <Styled.LogoutButton onClick={handleLogout}>Sair</Styled.LogoutButton>
    </Styled.MainContainer>
  );
}
