import styled from 'styled-components';

export const Wrapper = styled.div`
    padding: 0 10rem;
    height: 100vh;
    display: flex;
    background: var(--black);
    gap: 4rem;
    align-items: center;
    justify-content: center;
`;

export const Content = styled.div`
    width: 36rem;
    p,
    span {
        font-size: 1.125rem;
        line-height: 30px;
        color: var(--white);
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
    padding: 0.8rem;
    border-radius: 1.6rem;
    border: none;
    margin-top: 2rem;
    margin-right: 0.2rem;
    font-size: 1rem;
    font-weight: 600;
`;
