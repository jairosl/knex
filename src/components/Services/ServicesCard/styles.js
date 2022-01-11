import styled from 'styled-components';

export const Container = styled.div`
    background: white;
    border-radius: 1rem;
    padding: 1rem 1.8rem;
    width: 26%;
    height: 300px;
    margin: 0;
`;

export const TextArea = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;

    h2 {
        height: 3rem;
        margin-top: 0.5rem;
        margin-bottom: 0;
    }

    p {
        line-height: 2rem;
        margin-bottom: 0;
        margin-top: 2rem;
    }
`;
