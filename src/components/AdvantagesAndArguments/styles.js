import styled, { css } from 'styled-components';

export const AdvantagesAndArgumentsContainer = styled.section`
    min-height: 930px;
    background: var(--white);
`;

export const AdvantagesAndArgumentsContent = styled.div`
    max-width: 1504px;
    min-height: 930px;
    margin: 0 auto;
    padding: 0 1rem;

    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;

    color: var(--black);
`;

export const TextBox = styled.div`
    min-width: 1279px;

    @media (max-width: 720px) {
        margin-left: 1rem;
    }
`;

export const Title = styled.h1`
    font-size: 3rem;
    line-height: 3.5rem;
    font-weight: 600;

    max-width: 850px;
`;

export const Text = styled.p`
    font-size: 1.125rem;
    line-height: 1.875rem;
    font-weight: 500;
    color: var(--gray);

    max-width: 730px;

    margin-top: 2rem;
`;

export const ArrowButton = styled.button`
    border: none;
    width: 49px;
    height: 74px;
    display: flex;
    align-items: center;

    background: transparent;
    color: var(--black);
    padding: 0;
    margin-right: 30px;
    margin-top: 80px;

    ${(props) =>
        props.isRight &&
        css`
            img {
                transform: rotate(180deg);
            }
            margin-right: 0;
            margin-left: 30px;
        `}

    img {
        width: 49px;
        height: 74px;
    }

    transition: filter 0.2s;

    &:hover {
        filter: brightness(1.5);
    }

    &:disabled {
        visibility: hidden;
    }
`;
