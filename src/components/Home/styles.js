import styled from 'styled-components';

export const Wrapper = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    background: var(--black);
    align-items: center;
    justify-content: center;
    gap: 2rem;
`;

export const Content = styled.div`
    width: 550px;
    padding: 0 1rem;
    p,
    span {
        display: inline-block;
        font-size: 1.125rem;
        line-height: 30px;
        color: var(--white);
    }
    p {
        margin-bottom: 3rem;
    }
    > span {
        margin: 3rem 0 0.4rem 0;
    }

    div {
        display: flex;
        gap: 0.5rem;
        span {
            font-weight: 700;
            font-size: 1rem;
            &:hover {
                text-decoration: underline;
            }
        }
    }
`;

export const Title = styled.h2`
    color: #8bffa2;
    margin: 0;
    font-weight: 600;
    font-size: 3.5rem;
    line-height: 72px;
`;

export const Button = styled.button`
    background-color: ${(props) => (props.bg ? '#8bffa2' : 'var(--black)')};
    color: ${(props) => (props.colorGreen ? '#8bffa2' : '#000')};
    border-radius: 1.6rem;
    border: none;
    padding: 0.8rem;
    margin-right: 0.5rem;
    font-weight: 600;
    &:hover {
        text-decoration: underline;
    }
`;
