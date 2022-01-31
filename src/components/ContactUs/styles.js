import styled from 'styled-components';

export const ContactUsContainer = styled.section`
    background: var(--light-purple);
`;

export const ContactUsContent = styled.div`
    background: var(--purple-500);
    display: grid;
    grid-template-columns: repeat(2, 50%);

    img {
        object-fit: cover;
    }

    @media (max-width: 1080px) {
        display: flex;
        flex-direction: column-reverse;
    }
`;

export const LikeText = styled.div`
    align-self: center;
    margin: 0 auto;
    padding: 2rem;

    h1 {
        max-width: 35rem;
        font-size: 3rem;
        font-weight: 600;
        line-height: 3.5rem;
        color: var(--white);
    }

    button {
        margin-top: 2rem;
    }
`;

export const Button = styled.button`
    background-color: var(--light-green);
    color: var(--black);
    border: none;
    border-radius: 30px;
    padding: 0.5rem 0.8rem;
    font-weight: 600;
    transition: 0.2s;

    &:hover {
        background: var(--dark-green);
        color: #111;
    }
`;
