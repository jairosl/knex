import styled, { css } from 'styled-components';

export const MembersContainer = styled.section`
    min-height: 856px;
    background: var(--light-purple);
`;

export const MembersContent = styled.section`
    min-height: 856px;
    max-width: 1642px;

    margin: 0 auto;
    padding: 0 2rem;

    display: flex;
    flex-direction: column;
    justify-content: center;

    h1 {
        font-size: 3rem;
        font-weight: 500;
        color: var(--white);
        margin: 0 0 2rem;
        margin-left: 6.75rem;
        @media (max-width: 1080px) {
            margin-left: 5rem;
        }

        @media (max-width: 720px) {
            margin-left: 0;
        }
    }
`;

export const ArrowButton = styled.button`
    border: none;
    display: flex;
    align-items: center;

    background: transparent;
    filter: brightness(0) invert(1);
    color: var(--black);
    padding: 0;

    @media (max-width: 720px) {
        width: 29px;
    }

    @media (max-width: 550px) {
        width: 29px;
    }

    ${(props) =>
        props.isRight &&
        css`
            img {
                transform: rotate(180deg);
            }
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
        filter: contrast(50%) invert(1);
        cursor: not-allowed;
    }
`;
