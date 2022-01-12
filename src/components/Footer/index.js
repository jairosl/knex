import React from 'react';

import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
    return (
        <footer>
            <div>
                <div>
                    <Image src="/assets/images/knex-logo.svg" alt="knex" width={136} height={69} />
                    <h1>Soluções web para a sua empresa</h1>

                    <span>
                        <Image
                            src="/assets/images/iconFacebook.svg"
                            alt="facebook"
                            width={17}
                            height={17}
                        />
                        <Image
                            src="/assets/images/iconInstagram.svg"
                            alt="facebook"
                            width={17}
                            height={17}
                        />
                    </span>
                    <p>&copy; All rights reserved - Knex</p>
                </div>

                <div>
                    <h1>Empresa</h1>
                    <Link href="/">
                        <a>Sobre nós</a>
                    </Link>
                    <Link href="/">
                        <a>Sobre o MEJ</a>
                    </Link>
                    <Link href="/">
                        <a>Serviços</a>
                    </Link>
                    <Link href="/#">
                        <a>Membros</a>
                    </Link>
                </div>
                <div>
                    <h1>Contato</h1>
                    <Link href="mailto:knex.org@gmail.com">
                        <a>knex.org@gmail.com</a>
                    </Link>
                    <Link href="tel:+5583912345678">
                        <a>(83) 9 1234-5678</a>
                    </Link>
                </div>
                <p>Política de Privacidade</p>
                <p>Termos e Condições</p>
            </div>
        </footer>
    );
}
