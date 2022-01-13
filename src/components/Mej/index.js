import React from 'react';
import { Wrapper, Title } from './styles';
import Image from 'next/image';

export function Mej() {
    return (
        <Wrapper id="mej">
            <div>
                <Title>Sobre O MEJ</Title>
                <p>
                    O MEJ (Movimento Empresa Júnior) tem a missão de formar por meio da vivência
                    empresarial, empreendedores comprometidos e capazes de transformar o Brasil.
                    Desde de 2010, o MEJ já impactou mais R$70.000.000,00 na economia brasileira,
                    que são integralmente reinvestidos na educação empreendedora dos estudantes.
                </p>
            </div>
            <div>
                <Image src="/assets/images/mej.svg" alt="logo MEJ" width={585} height={443} />
            </div>
        </Wrapper>
    );
}
