import styled from 'styled-components';

export const Wrapper = styled.div`
    height: 100vh;
    display: flex;
    background-image: url('/assets/images/tela.png');
    align-items: center;
    justify-content: space-evenly;

    @media screen and (max-width: 600px) {
        width: 100vw;
        justify-content: center;
    }
`;

export const Content = styled.div`
    display: block;
    width: 500px;
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
                transition: 0.5s;
                background-color: transparent;
                color: #8bffa2;
            }
        }
    }

    @media screen and (max-width: 600px) {
        display: ${({ hidden }) => (hidden ? 'none' : 'block')};
        text-align: center;
        width: 100%;
        margin-top: 3rem;

        button {
            margin-bottom: 1rem;
        }

        div {
            justify-content: center;
        }
    }

    @media screen and (max-width: 1024px) {
        display: ${({ hidden }) => (hidden ? 'none' : 'block')};

        p {
            margin-bottom: 1.5rem;
        }
        > span {
            margin: 1.5rem 0 0.2rem 0;
        }
    }
`;

export const Title = styled.h2`
    color: #8bffa2;
    margin: 0;
    font-weight: 600;
    font-size: 3.5rem;
    line-height: 72px;

    @media screen and (max-width: 600px) {
        font-size: 2.5rem;
        line-height: 50px;
    }
    @media screen and (max-width: 910px) {
        font-size: 3rem;
        line-height: 56px;
    }
`;

export const Button = styled.button`
    background-color: ${(props) => (props.bg ? '#8bffa2' : 'var(--black)')};
    color: ${(props) => (props.colorGreen ? '#8bffa2' : '#0d0c17')};
    border-radius: 1.6rem;
    border: ${(props) => (props.greenBorder ? '1px solid #8bffa2' : '#0d0c17')};
    padding: 0.8rem;
    margin-right: 0.5rem;
    font-weight: 600;
    transition: 0.2s;

    &:hover {
        transition: 0.2s;
        background-color: transparent;
        color: ${(props) => (props.fontColorGreen ? '#8bffa2' : '#FFFFFF')};
        border: ${(props) => (props.greenBorder ? '1px solid #8bffa2' : '#0d0c17')};
    }
`;
