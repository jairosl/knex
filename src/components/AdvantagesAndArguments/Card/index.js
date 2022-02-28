/* eslint-disable react/prop-types */
import React from 'react';

import Image from 'next/image';

import { CardContainer, CardContent } from './styles.js';

export function Card({ imageUrl, title, text }) {
    return (
        <CardContainer>
            <CardContent>
                <Image
                    src={imageUrl}
                    alt={title}
                    width={399}
                    height={242}
                    onDragStart={(e) => e.preventDefault()}
                />
                <h1>{title}</h1>
                <p>{text}</p>
            </CardContent>
        </CardContainer>
    );
}
