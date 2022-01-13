import styled from 'styled-components';

export const MemberContainer = styled.div`
    background: var(--white);
    border-radius: 1.25rem;
`;

export const CardContent = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    margin: 0 auto;
    padding: 2rem 3rem;

    @media (max-width: 720px) {
        padding: 1rem 1.5rem;
    }

    h1 {
        color: var(--black);
        font-size: 1.875rem;
        font-weight: 500;
        line-height: 2.25rem;
        margin: 1rem 0 0;
    }

    h2 {
        color: var(--black);
        font-size: 1.125rem;
        line-height: 2.75rem;
        font-weight: 500;
        margin: 0;
    }

    span {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-wrap: wrap;
        gap: 0.5rem;
        margin: 1.75rem 0;

        p {
            color: var(--gray);
            font-size: 1rem;
            font-weight: 500;
        }
    }
`;

export const MemberImg = styled.div`
    max-width: 300px;
    max-height: 300px;

    display: flex;
    align-items: center;

    border-radius: 50%;
    box-shadow: 0 0 4px 1px rgba(0, 0, 0, 25%);

    img {
        object-fit: cover;
        border-radius: 50%;
    }
`;
