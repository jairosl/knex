import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { HeaderContainer, NavContainer, StyledLink, Logo, Button, Hamburger } from './styles';

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <HeaderContainer>
            <Logo>
                <Image src="/assets/images/knex-logo.svg" layout="fill" />
            </Logo>
            <Hamburger onClick={() => setIsOpen(!isOpen)}>
                <span />
                <span />
                <span />
            </Hamburger>
            <NavContainer isOpen={isOpen}>
                <div>
                    <Link href="/" passHref>
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
                    <Link href="#about" passHref>
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
                <Button>Faça seu orçamento!</Button>
            </NavContainer>
        </HeaderContainer>
    );
}
