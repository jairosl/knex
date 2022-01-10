import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

import Header from '../Header';
import Head from 'next/head';

import { Wrapper, Content, Title, Button } from './styles.js';

export default function Home() {
    return (
        <>
            <Head>
                <link rel="shortcut icon" href="/favicon.ico" />
                <title>Knex</title>
            </Head>

            <Header />
            <Wrapper id="home">
                <Content>
                    <Title>Atualize seu negócio</Title>
                    <p>
                        Temos como principal objetivo entregar o melhor site para o seu negócio
                        alavancar de vendas e ainda com baixo preço!
                    </p>

                    <Button bg greenBorder fontColorGreen>
                        Conheça Nossos Serviços
                    </Button>
                    <Button colorGreen>Faça Seu Orçamento!</Button>
                    <span>Acompanhe-nos nas redes sociais!</span>
                    <div>
                        <Image
                            src="/assets/images/iconInstagram.svg"
                            alt="icon instagram"
                            width={24}
                            height={24}
                        />
                        <Link href="https://www.instagram.com/knexjr/">
                            <a target="_blank">
                                <span>@Knex</span>
                            </a>
                        </Link>

                        <Image
                            src="/assets/images/iconLinkedin.svg"
                            alt="icon linkedin"
                            width={24}
                            height={24}
                        />
                        <Link href="https://www.linkedin.com/company/knexjr/">
                            <a target="_blank">
                                <span>linkedin/knex</span>
                            </a>
                        </Link>
                        {/* Page do fecebook ainda não criada */}
                        {/* <Image
                        src="/assets/images/iconFacebook.svg"
                        alt="icon facebook"
                        width={24}
                        height={24}
                    />
                    <Link href="/">
                        <a target="_blank">
                            <span>facebook.com/knex</span>
                        </a>
                    </Link> */}
                    </div>
                </Content>
                <Content>
                    <Image
                        src="/assets/images/femaleWorking.svg"
                        alt="avatar"
                        width={600}
                        height={600}
                    />
                </Content>
            </Wrapper>
        </>
    );
}
