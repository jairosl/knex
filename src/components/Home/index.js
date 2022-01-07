import Image from 'next/image';
import React from 'react';
import { Wrapper, Content, Title, Container, Button } from './styles.js';

export default function Home() {
    return (
        <Wrapper>
            <Content>
                <Title>Atualize seu negócio</Title>
                <p>
                    Temos como principal objetivo entregar o melhor site para o seu negócio
                    alavancar de vendas e ainda com baixo preço!
                </p>

                <Button>Conheça nossos serviços</Button>
                <Button color green>
                    Faça Seu Orçamento
                </Button>
                <span>Acompanhe-nos nas redes sociais!</span>
                <div>
                    <Image src="/assets/images/iconInstagram.svg" width={34} height={34} />
                    <span>@Knex</span>
                    <Image src="/assets/images/iconLinkedin.svg" width={34} height={34} />
                    <span>linkedin/knex</span>
                    <Image src="/assets/images/iconFacebook.svg" width={34} height={34} />
                    <span>facebook.com/knex</span>
                </div>
            </Content>
            <Container>
                <Image
                    src="/assets/images/femaleWorking.svg"
                    alt="avatar"
                    width={863}
                    height={644}
                />
            </Container>
        </Wrapper>
    );
}
