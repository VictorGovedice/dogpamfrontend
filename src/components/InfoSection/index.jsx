import React from 'react';
import * as Styled from './styles';
import { Button } from '../../styles/Button';
// import Catclinica from '../../assets/images'


export default function InfoSection({lightBg, id, imgStart, topLine, headLine, lightText, darkText, description, buttonLabel, img, alt,primary, dark, dark2}) {
    return (
        <>
            <Styled.InfoContainer lightBg={lightBg} id={id}>
                <Styled.InfoWrapper>
                    <Styled.InfoRow imgStart={imgStart}>
                        <Styled.Column1>
                            <Styled.TextWrapper>
                                <Styled.TopLine>
                                    {topLine}
                                </Styled.TopLine>
                                <Styled.Heading lightText={lightText}>
                                    {headLine}
                                </Styled.Heading>
                                <Styled.Subtitile darkText={darkText}>
                                    {description}
                                </Styled.Subtitile>
                                <Styled.BtnWrap>
                                    <Button to="home"
                                    smooth={true}
                                    duration={500}
                                    spy={true}
                                    exact="true"
                                    offset={-80}  
                                    primary={primary ? 1 : 0}      
                                    dark={dark ? 1 : 0}                            
                                    dark2={dark2 ? 1 : 0}
                                    >
                                        {buttonLabel}
                                    </Button>
                                </Styled.BtnWrap>
                            </Styled.TextWrapper>
                        </Styled.Column1>
                        <Styled.Column2>
                            <Styled.ImgWrap>
                                <Styled.Img src={img.default} alt={alt} />
                            </Styled.ImgWrap>
                        </Styled.Column2>
                    </Styled.InfoRow>
                </Styled.InfoWrapper>
            </Styled.InfoContainer>
        </>
    )
}
