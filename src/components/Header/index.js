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
                    <Link href="/#home" passHref>
                        <StyledLink onClick={() => setIsOpen(false)}>Início</StyledLink>
                    </Link>
                </div>
                <div>
                    <Link href="/#advantages" passHref>
                        <StyledLink onClick={() => setIsOpen(false)}>
                            Porque ter um Site?
                        </StyledLink>
                    </Link>
                </div>
                <div>
                    <Link href="/#services" passHref>
                        <StyledLink onClick={() => setIsOpen(false)}>Serviços</StyledLink>
                    </Link>
                </div>
                <div>
                    <Link href="/#about" passHref>
                        <StyledLink onClick={() => setIsOpen(false)}>Quem somos?</StyledLink>
                    </Link>
                </div>
                <div>
                    <Link href="/#members" passHref>
                        <StyledLink onClick={() => setIsOpen(false)}>Membros</StyledLink>
                    </Link>
                </div>
                <div>
                    <Link href="/#mej" passHref>
                        <StyledLink onClick={() => setIsOpen(false)}>MEJ</StyledLink>
                    </Link>
                </div>
                <Button>
                    <Link href="/ContactUs">Faça seu orçamento!</Link>
                </Button>
            </NavContainer>
        </HeaderContainer>
    );
}
