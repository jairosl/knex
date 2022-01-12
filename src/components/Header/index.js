import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Nav, NavContainer, StyledLink, Logo, Button } from './styles';

export default function Header() {
    return (
        <Nav>
            <Logo>
                <Image src="/assets/images/knex-logo.svg" layout="fill" />
            </Logo>
            <NavContainer>
                <div>
                    <Link href="/#home" passHref>
                        <StyledLink>Início</StyledLink>
                    </Link>
                </div>
                <div>
                    <Link href="/" passHref>
                        <StyledLink>Porque ter um Site?</StyledLink>
                    </Link>
                </div>
                <div>
                    <Link href="/" passHref>
                        <StyledLink>Serviços</StyledLink>
                    </Link>
                </div>
                <div>
                    <Link href="/#about" passHref>
                        <StyledLink>Quem somos?</StyledLink>
                    </Link>
                </div>
                <div>
                    <Link href="/" passHref>
                        <StyledLink>Membros</StyledLink>
                    </Link>
                </div>
                <div>
                    <Link href="/" passHref>
                        <StyledLink>MEJ</StyledLink>
                    </Link>
                </div>
                <Button>
                    <Link href="/ContactUs">Faça seu orçamento!</Link>
                </Button>
            </NavContainer>
        </Nav>
    );
}
