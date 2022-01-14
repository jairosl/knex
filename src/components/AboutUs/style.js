import styled from 'styled-components';

export const Container = styled.div`
    display: flex;

    justify-content: center;
    align-items: center;
    font-weight: 600;
    font-size: 0.9em;

    @media screen and (min-width: 1280px) {
        padding: 6rem 5rem 6rem 2rem;
    }
`;

export const LeftCol = styled.div`
    width: 100%;
    margin: 0 2rem;
    @media screen and (max-width: 600px) {
        height: 100%;
    }
`;

export const MainText = styled.div`
    width: 80%;
    margin-right: 1rem;

    h1 {
        font-size: 3rem;
        line-height: 3.5rem;
        margin: 0;
        margin-top: 2rem;

        @media screen and (max-width: 910px) {
            font-size: 2.5rem;
            line-height: 56px;
        }
    }
    p {
        color: var(--gray);
        width: 100%;
        font-size: 1.125rem;
        line-height: 1.875rem;
        font-weight: 500;
    }

    @media screen and (max-width: 800px) {
        margin: 0;
    }

    @media screen and (max-width: 910px) {
        width: 100%;
        margin-right: 1rem;
    }
`;
export const SubText = styled.div`
    width: 100%;
    display: flex;
    padding-top: 2rem;
    padding-bottom: 2rem;

    h3 {
        font-size: 1.5rem;
        font-weight: 500;
        margin: 0;
        margin-top: 1rem;
    }

    p {
        color: var(--gray);
        font-size: 1rem;
        line-height: 1.75rem;

        max-width: 310px;
        @media screen and (max-width: 800px) {
            text-align: justify;
        }

        @media screen and (max-width: 910px) {
            width: 85%;
        }
    }

    div {
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: flex-start;
        width: 100%;

        @media screen and (max-width: 800px) {
            margin: 0 auto;
            align-items: center;
            width: 80%;
        }
    }

    @media screen and (max-width: 800px) {
        margin: 0 auto;
        display: block;
    }

    @media screen and (max-width: 910px) {
        width: 100%;
        margin-right: 1rem;
    }
`;

export const RightCol = styled.div`
    width: 33%;
    @media screen and (max-width: 1280px) {
        display: none;
    }
`;
