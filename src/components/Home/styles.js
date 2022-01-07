import styled from 'styled-components';

export const Wrapper = styled.div`
    max-width: 100%;
    height: 100vh;
    padding: 0 10rem;
    display: flex;
    background: var(--black);
    gap: 4rem;
    align-items: center;
    justify-content: center;
`;

export const Content = styled.div`
    width: 576px;
    p,
    span {
        margin: 0.4rem 0;
        font-size: 1.125rem;
        line-height: 30px;
        color: var(--white);
    }

    div {
        margin-top: 1rem;
        display: flex;
        align-items: center;
        justify-content: center;
        span {
            font-weight: 700;
            font-size: 1rem;
            margin: 0 0.4rem;
        }
    }
`;

export const Container = styled.div`
    width: 800px;
    height: 644px;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const Title = styled.h2`
    color: #8bffa2;
    margin: 0;
    font-weight: 600;
    font-size: 3.5rem;
    line-height: 72px;
`;

export const Button = styled.button`
    background-color: ${(props) => (props.color ? 'var(--black)' : '#8bffa2')};
    color: ${(props) => (props.green ? '#8bffa2' : '#000')};
    border-radius: 1.6rem;
    border: none;
    padding: 0.8rem;
    margin-top: 2rem;
    margin-right: 0.2rem;
    margin-bottom: 3.5rem;
    font-size: 1rem;
    font-weight: 600;
`;
