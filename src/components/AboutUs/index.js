import React from 'react';
import Image from 'next/image';
import {Container, MainText, SubText } from './style';

const AboutUS = () => {
    return (
        <Container>
            <div>
                <MainText>
                    <h1>Quem somos nós?</h1>
                    <p>
                        Somos uma empresa formada por estudantes dedicados com experiência no mercado de trabalho e que vai te retornar o melhor projeto para a sua empresa.
                    </p>
                </MainText> 
                <br></br> 
                <SubText>
                    <div>
                        <Image
                            src="/assets/images/iconArrowUp.svg"
                            alt="icon of an Arrow Up"
                            width={60}
                            height={60}
                        />
                        <h3>Alta Qualidade</h3>
                        <p>
                            Temos um rigoroso processo seletivo que seleciona os melhores estudantes da universidade, que também recebem treinamentos intensivos e palestras contantes para aprimorarem ainda mais os seus conhecimentos.
                        </p>
                    </div>
                    <div>
                        <Image
                            src="/assets/images/iconArrowUp.svg"
                            alt="icon of an Arrow Up"
                            width={60}
                            height={60}
                        />
                        <h3>Custo benefício</h3>
                        <p>
                            Como somos uma empresa sem fins lucrativos, cobramos preços até 60% mais barato que o mercado. Bem legal, não é?
                        </p>
                    </div>
                </SubText>  
            </div>
            <div>
                <Image
                        src="/assets/images/groupMeeting.svg"
                        alt="group meeting"
                        width={400}
                        height={400}
                    />
            </div>
        </Container>
    )
}

export default AboutUS;
