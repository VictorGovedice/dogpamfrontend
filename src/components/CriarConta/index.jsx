import * as Styled from './styles';
import Footer from '../Footer';
import { Link } from 'react-router-dom'

export default function Index() {
  const textoHousesPet = 'Clinica veterinária, School Dog, PetShop, Banho e tosa';
  const textoCadastroPet = 'Tenho um Pet, cadastre seu pet junto a você';
  const textoCadastroLover = 'Sou um PetLover, quero me cadastrar'

  return (
    <>
      <Styled.Container>
        
        <Styled.FormWrap>
          <Styled.FormContent>
            <Styled.Form action="#">
              <Styled.FormH1>
              </Styled.FormH1>
              <Styled.FormH1>{textoHousesPet}</Styled.FormH1>
              <Styled.FormLabel htmlFor='for'>Com esta opção de conta, você pode cadastrar Clínicas Veterinárias, Escolas para Pets, Pet Shops, Serviços de Banho e Tosa. Certifique-se de incluir fotos de qualidade, adicionar suas especialidades, localização e trabalhos realizados. Dessa forma, os usuários da DogPam poderão escolher seus serviços com base em suas especialidades. Não se esqueça, o aspecto mais importante é fornecer informações precisas sobre a sua localização.</Styled.FormLabel>
              <Styled.FormButton type='submit'>Criar conta</Styled.FormButton>
            </Styled.Form>
          </Styled.FormContent>
        </Styled.FormWrap>

        <Styled.FormWrap>
          <Styled.FormContent>
            <Styled.Form action="#">
              <Styled.FormH1>
              </Styled.FormH1>
              <Styled.FormH1>{textoCadastroPet}</Styled.FormH1>
              <Styled.FormLabel htmlFor='for'>Você pode cadastrar tanto você quanto seu pet. Confirme sua identidade e a de seu animal de estimação para encontrar o melhor profissional para cuidar do seu animal em um prazo determinado. Descubra as melhores clínicas veterinárias em sua região, seja 24 horas ou não, assim como os melhores pet shops que oferecem promoções em serviços de banho e tosa.
                Ao finalizar qualquer serviço, você tem a oportunidade de qualificar o prestador e também visualizar a avaliação dele antes de utilizar seus serviços.</Styled.FormLabel>
                <Link to="/CadastroUsuarioPet">
                  <Styled.FormButton type='button'>Criar conta</Styled.FormButton>
                </Link>
            </Styled.Form>
          </Styled.FormContent>
        </Styled.FormWrap>

        <Styled.FormWrap>
          <Styled.FormContent>
            <Styled.Form action="#">
              <Styled.FormH1>
              </Styled.FormH1>
              <Styled.FormH1>{textoCadastroLover}</Styled.FormH1>
              <Styled.FormLabel htmlFor='for'>A conta PetLover é destinada a quem ama pets. Ao se cadastrar, você analisa o pet que irá passear ou cuidar, por um tempo determinado e negocia um valor com o dono do animal. Após a conclusão do trabalho, você recebe o valor acordado inicialmente. É importante ter todos os documentos em dia. Uma boa qualificação não apenas reflete seu comprometimento, mas também resulta em mais reconhecimento e, consequentemente, ganhos extras.</Styled.FormLabel>
              <Styled.FormButton type='submit'>Criar conta</Styled.FormButton>
            </Styled.Form>
          </Styled.FormContent>
        </Styled.FormWrap>

        

      </Styled.Container>

      <Footer />
    </>
  );
}
