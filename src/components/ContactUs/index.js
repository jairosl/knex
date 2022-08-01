import React from 'react';
import Image from 'next/image';

import { ContactUsContainer, LikeText, ContactUsContent, Button } from './styles.js';
import Link from 'next/link';

export default function ContactUs() {
    return (
        <ContactUsContainer>
            <ContactUsContent>
                <Image src="/assets/images/call.webp" alt="Call" width={963} height={400} />
                <LikeText>
                    <h1>Gostou da Knex?</h1>
                    <h3>Então entre em contato conosco e faça seu site!</h3>
                    <Button>
                        <Link href="/ContactUs">Faça seu orçamento!</Link>
                    </Button>
                </LikeText>
            </ContactUsContent>
        </ContactUsContainer>
    );
}
