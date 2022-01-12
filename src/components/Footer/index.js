import React from 'react';

import Image from 'next/image';
import Link from 'next/link';

import {
    FooterContainer,
    FooterContent,
    KnexInformation,
    DomainColumn,
    NavLinks,
    LegalInformation
} from './styles';

export default function Footer() {
    return (
        <FooterContainer>
            <FooterContent>
                <KnexInformation>
                    <DomainColumn>
                        <Image
                            src="/assets/images/knex-logo.svg"
                            alt="knex"
                            width={136}
                            height={69}
                        />
                        <h1>
                            Soluções web para
                            <br /> a sua empresa
                        </h1>

                        <span>
                            <span>
                                <Image
                                    src="/assets/images/whiteFacebookIcon.svg"
                                    alt="facebook"
                                    width={17}
                                    height={17}
                                />
                            </span>
                            <span>
                                <Image
                                    src="/assets/images/whiteInstagramIcon.svg"
                                    alt="facebook"
                                    width={17}
                                    height={17}
                                />
                            </span>
                        </span>
                    </DomainColumn>

                    <NavLinks>
                        <h1>Empresa</h1>
                        <Link href="/#about">
                            <a>Sobre nós</a>
                        </Link>
                        <Link href="/#mej">
                            <a>Sobre o MEJ</a>
                        </Link>
                        <Link href="/#services">
                            <a>Serviços</a>
                        </Link>
                        <Link href="/#members">
                            <a>Membros</a>
                        </Link>
                    </NavLinks>
                    <NavLinks>
                        <h1>Contato</h1>
                        <Link href="mailto:knex.org@gmail.com">
                            <a>knex.org@gmail.com</a>
                        </Link>
                        <Link href="tel:+5583912345678">
                            <a>(83) 9 1234-5678</a>
                        </Link>
                    </NavLinks>
                </KnexInformation>
                <LegalInformation>
                    <p>&copy; All rights reserved - Knex</p>
                    <span>
                        <Link href="/">
                            <a>Política de Privacidade</a>
                        </Link>
                        <Link href="/">
                            <a>Termos e Condições</a>
                        </Link>
                    </span>
                </LegalInformation>
            </FooterContent>
        </FooterContainer>
    );
}
