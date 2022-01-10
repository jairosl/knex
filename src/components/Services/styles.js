import styled from 'styled-components';

export const Container = styled.div`
    margin-top: 0;
    background: #8075ff;
    width: 100vw;
`;

export const Header = styled.section`
    justify-content: space-between;
    color: white;
    margin: 0 auto;
    padding-top: 30px;
    display: flex;
    width: 80%;

    h2 {
        width: 40%;
        font-weight: 600;
    }

    p {
        width: 40%;
    }
`;

export const Cards = styled.div`
    display: flex;
    width: 80%;
    margin: 1rem auto 0 auto;
    padding-bottom: 120px;
`;
