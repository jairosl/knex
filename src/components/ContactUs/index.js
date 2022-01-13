import React from 'react';
import Image from 'next/image';

import { ContactUsContainer, LikeText, ContactUsContent } from './styles.js';

export default function ContactUs() {
    return (
        <ContactUsContainer>
            <ContactUsContent>
                <Image src="/assets/images/call.webp" alt="Call" width={963} height={400} />
                <LikeText>
                    <h1>Gostou da Knex? Então entre em contato conosco e faça seu site!</h1>
                </LikeText>
            </ContactUsContent>
        </ContactUsContainer>
    );
}
