import styled from 'styled-components';

export const ContactUsContainer = styled.section`
    background: var(--light-purple);
`;

export const ContactUsContent = styled.div`
    background: var(--purple-500);
    display: flex;

    img {
        object-fit: cover;
    }

    @media (max-width: 1634px) {
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
