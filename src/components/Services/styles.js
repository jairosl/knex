import styled from 'styled-components';

export const Container = styled.div`
    margin-top: 0;
    background: #8075ff;
    width: 100%;
`;

export const Header = styled.section`
    justify-content: space-between;
    color: white;
    margin: 0 auto;
    padding-top: 3rem;
    display: flex;
    width: 70%;

    h2 {
        width: 40%;
        font-size: 2rem;
        font-weight: 500;
        margin-top: 0;
        line-height: 2.5rem;
    }

    p {
        margin-top: 0;
        width: 30%;
    }
`;

export const Cards = styled.div`
    display: flex;
    width: 70%;
    margin: 4rem auto 0 auto;
    padding-bottom: 120px;
    justify-content: space-between;
`;
