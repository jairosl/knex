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
        font-weight: 500;
        margin-top: 2rem;
    }
    p {
        font-size: 1rem;
        line-height: 1.75rem;
        margin-top: 1rem;
        font-weight: 500;
        color: var(--gray);
    }
`;
