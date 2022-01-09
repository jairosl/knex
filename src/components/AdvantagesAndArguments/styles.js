import styled from 'styled-components';

export const AdvantagesAndArgumentsContainer = styled.section`
    min-height: 930px;
    background: var(--white);
`;

export const AdvantagesAndArgumentsContent = styled.div`
    max-width: 1500px;
    min-height: 930px;
    margin: 0 auto;
    padding: 0 1rem;

    display: flex;
    flex-direction: column;
    justify-content: space-around;

    color: var(--black);
`;

export const TextBox = styled.div`
    margin-left: 5rem;

    @media (max-width: 720px) {
        margin-left: 1rem;
    }
`;

export const Title = styled.h1`
    font-size: 3rem;
    font-weight: 600;

    max-width: 850px;
`;

export const Text = styled.p`
    font-size: 1.125rem;
    color: var(--gray);

    max-width: 730px;

    margin-top: 2rem;
`;

export const ArrowButton = styled.button`
    border: none;

    display: flex;
    align-items: center;

    background: transparent;
    color: var(--black);

    svg {
        width: 49px;
        height: 74px;
    }

    &:disabled {
        visibility: hidden;
    }
`;
