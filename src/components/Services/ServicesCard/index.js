/* eslint-disable react/prop-types */
import React from 'react';
import Image from 'next/image';

import { Container } from './styles';

export function ServicesCard(props) {
    return (
        <Container>
            <Image src={props.imgPath} alt={props.imgAlternative} className="icon" />
            <h2>{props.title}</h2>
            <p>{props.description}</p>
        </Container>
    );
}
