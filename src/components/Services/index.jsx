import React from 'react'
import * as Styled from './styles';

import Icon1 from '../../assets/images/pet-care.png';
import Icon2 from '../../assets/images/dog-carrier.png';
import Icon3 from '../../assets/images/pet-house.png';
import Icon4 from '../../assets/images/pet-shop.png';

export default function index() {
    return (
        <>
        <Styled.ServicesContainer id="services">
            <Styled.ServicesH1>
                Nossos Serviços
            </Styled.ServicesH1>
            <Styled.ServicesWrapper>
                <Styled.ServicesCard>
                    <Styled.ServicesIcon src={Icon1} />
                    <Styled.ServicesH2>
                        PetCare
                    </Styled.ServicesH2>
                    <Styled.ServicesP>
                        Serviço de passeio com o seu animal por um período específico. Cadastre o seu pet ou torne-se um cuidador pet.
                    </Styled.ServicesP>
                </Styled.ServicesCard>
                <Styled.ServicesCard>
                    <Styled.ServicesIcon src={Icon2} />
                    <Styled.ServicesH2>
                        DogDriver
                    </Styled.ServicesH2>
                    <Styled.ServicesP>
                        Serviço de busca e entrega para o seu animal, onde quer que ele esteja, comparado com Uber mas para pets.
                    </Styled.ServicesP>
                </Styled.ServicesCard>
                <Styled.ServicesCard>
                    <Styled.ServicesIcon src={Icon3} />
                    <Styled.ServicesH2>
                        Hoteis Pet
                    </Styled.ServicesH2>
                    <Styled.ServicesP>
                        Busque pelos melhores hotéis da região para pets, explore suas cortesias e distintivos serviços oferecidos.
                    </Styled.ServicesP>
                </Styled.ServicesCard>
                <Styled.ServicesCard>
                    <Styled.ServicesIcon src={Icon4} />
                    <Styled.ServicesH2>
                        PlacePets
                    </Styled.ServicesH2>
                    <Styled.ServicesP>
                        Os melhores lugares para o seu pet, incluindo serviços de banho e tosa, clínicas veterinárias e pet shops.
                    </Styled.ServicesP>
                </Styled.ServicesCard>
            </Styled.ServicesWrapper>
        </Styled.ServicesContainer>
        </>
    )
}
