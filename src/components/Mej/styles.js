import styled from 'styled-components';

export const Wrapper = styled.div`
    width: 100%;
    margin-top: 2rem;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    div {
        width: 500px;
    }

    p {
        color: #5b5b5b;
        font-weight: 500;
        font-size: 1.375rem;
        line-height: 30px;
    }
    @media screen and (max-width: 1024px) {
        justify-content: center;
        div {
            padding: 0 2rem;
        }

        p {
            font-size: 1rem;
        }
        div:last-child {
            display: none;
        }
    }
`;

export const Title = styled.h3`
    font-weight: 600;
    font-size: 3rem;
    line-height: 30px;

    @media screen and (max-width: 1024px) {
        text-align: center;
    }
`;
