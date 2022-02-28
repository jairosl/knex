/* eslint-disable react/prop-types */
import React from 'react';

import Image from 'next/image';
import Link from 'next/link';

import { CardContainer, CardContent, MemberImg } from './styles.js';
export function Card({ name, job, image, linkedin }) {
    return (
        <CardContainer>
            <CardContent>
                <MemberImg>
                    <Image
                        src={image}
                        alt="member photo"
                        height={300}
                        width={300}
                        quality={100}
                        onDragStart={(e) => e.preventDefault()}
                    />
                </MemberImg>
                <h1>{name}</h1>
                <h2>{job}</h2>

                <span>
                    <Image
                        src="/assets/images/linkedInBlackIcon.svg"
                        alt="in"
                        width={31}
                        height={31}
                    />
                    <Link href={`https://www.linkedin.com/in/${linkedin}`}>
                        <a>{'/' + linkedin}</a>
                    </Link>
                </span>
            </CardContent>
        </CardContainer>
    );
}
