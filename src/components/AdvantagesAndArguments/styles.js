import styled, { css } from 'styled-components';

export const AdvantagesAndArgumentsContainer = styled.section`
    min-height: 930px;
    background: var(--white);
`;

export const AdvantagesAndArgumentsContent = styled.div`
    max-width: 1504px;
    min-height: 930px;
    margin: 0 auto;
    padding: 2rem;

    display: flex;
    flex-direction: column;
    justify-content: center;

    color: var(--black);

    .rec-carousel {
        margin-top: 4rem;
    }
`;

export const TextBox = styled.div`
    margin-left: 6.75rem;

    @media (max-width: 1080px) {
        margin-left: 5rem;
    }

    @media (max-width: 720px) {
        margin-left: 0;
    }
`;

export const Title = styled.h1`
    font-size: 3rem;
    line-height: 3.5rem;
    font-weight: 600;

    max-width: 850px;
    margin: 0;
`;

export const Text = styled.p`
    font-size: 1.125rem;
    line-height: 1.875rem;
    font-weight: 500;
    color: var(--gray);

    max-width: 730px;
    margin-top: 1.75rem;
    margin-bottom: 0;
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
    margin-top: 5rem;

    @media (max-width: 720px) {
        margin: 5.5rem 0 0 0;
        width: 29px;
        height: 54px;
    }

    @media (max-width: 550px) {
        margin: 4rem 0 0 0;
        width: 29px;
        height: 54px;
    }

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
        filter: contrast(0%);
        cursor: not-allowed;
    }
`;
