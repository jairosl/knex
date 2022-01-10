import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    height: 100vh;
    justify-content: center;
    align-items: center;
    font-weight: 600;
    font-size: 0.9em;
`;

export const MainText = styled.div`
    width: 700px;
    h1 {
        font-size: 48px;
        margin: 0;
    }
    p {
        color: #5b5b5b;
        width: 400px;
    }
`;
export const SubText = styled.div`
    width: 800px;
    display: flex;

    p {
        color: #5b5b5b;
        width: 340px;
    }

    div {
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: flex-start;
    }
`;
