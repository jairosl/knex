import React from 'react';
import styled from 'styled-components';

import { AdvantagesAndArguments } from '../Components/AdvantagesAndArguments';

const H1 = styled.h1`
    color: red;
`;

export default function Home() {
    return (
        <>
            <H1>Next.js + Styled Component</H1>
            <AdvantagesAndArguments />
        </>
    );
}
