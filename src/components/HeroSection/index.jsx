import React, {useState} from 'react';
import * as Styled from './styles';
import dogpamimg from '../../assets/images/dogpamcachorro.png'
import {Button} from '../../styles/Button';

export default function HeroSection() {
    const [hover, setHover] = useState(false);

    const onHover = () => {
        setHover(!hover)
    }

    return (
        <> 
        <Styled.HeroContainer>
            <Styled.HeroBg>
                <img src={dogpamimg} alt='DogPam imagem background'/>
            </Styled.HeroBg>
            <Styled.HeroContent>
                <Styled.HeroH1>
                    QUEM AMA CUIDA
                </Styled.HeroH1>
                <Styled.HeroP>
                    De um match com os melhores especialista/lovers pet, para cuidar do seu animal
                </Styled.HeroP>
                <Styled.HeroBtnWrapper>
                    <Button to="signup" onMouseEnter={onHover} onMouseLeave={onHover} primary={true} dark={true}>
                        Cadastrar meu pet {hover ? <Styled.ArrowForward /> : <Styled.ArrowRight />}
                    </Button>
                </Styled.HeroBtnWrapper>
            </Styled.HeroContent>
        </Styled.HeroContainer>
        </>
    )
}
