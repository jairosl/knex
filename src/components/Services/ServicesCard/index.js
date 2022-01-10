/* eslint-disable react/prop-types */
import React from 'react';
import Image from 'next/image';

export function ServicesCard(props) {
    return (
        <div>
            <Image src={props.imgPath} alt={props.imgAlternative} />
            <h2>{props.title}</h2>
            <p>{props.description}</p>
        </div>
    );
}
