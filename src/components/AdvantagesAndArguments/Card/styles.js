import styled from 'styled-components';

export const CardContainer = styled.div`
    max-width: 25rem;
    height: 31.25rem;
`;

export const CardContent = styled.div`
    display: flex;
    flex-direction: column;

    img {
        border-radius: 1.5rem;
        height: 242px;
        object-fit: cover;
    }

    h1 {
        font-size: 1.5rem;
        margin-top: 2rem;
    }
    p {
        font-size: 1rem;
        margin-top: 1rem;
    }
`;
