import React from 'react';

import Image from 'next/image';
import Link from 'next/link';

import { MemberContainer, MemberImg } from './styles.js';
export function Card() {
    return (
        <MemberContainer>
            <MemberImg>
                <Image
                    src="/assets/images/manAndWoman.webp"
                    alt="member photo"
                    height={300}
                    width={300}
                />
            </MemberImg>
            <h1>Márcio Filho</h1>
            <h2>Diretor de Projetos</h2>

            <span>
                <Image src="/assets/images/linkedInBlackIcon.svg" alt="in" width={31} height={31} />
                <Link href="/">
                    <a>/nomesobrenome</a>
                </Link>
            </span>
        </MemberContainer>
    );
}
