import styled from 'styled-components';

export const CardContainer = styled.div`
    background: var(--white);
    border-radius: 1.25rem;
    width: 25rem;
    height: 35rem;
`;

export const CardContent = styled.div`
    display: flex;
    height: 35rem;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    margin: 0 auto;
    padding: 2rem;

    @media (max-width: 720px) {
        padding: 1rem 1.5rem;
    }

    h1 {
        color: var(--black);
        font-size: 1.875rem;
        font-weight: 500;
        line-height: 2.25rem;
        margin: 1rem 0 0.5rem;
    }

    h2 {
        color: var(--black);
        font-size: 1.125rem;
        line-height: 1.5rem;
        font-weight: 500;
        margin: 0;
    }

    span {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-wrap: nowrap;
        gap: 0.5rem;
        margin: 1.75rem 0;

        a {
            color: var(--gray);
            font-size: 1rem;
            font-weight: 500;
            white-space: wrap;
            word-break: keep-all;
            overflow: clip;
            text-overflow: ellipsis;
        }
    }
`;

export const MemberImg = styled.div`
    max-width: 300px;
    max-height: 300px;

    display: flex;
    align-items: center;

    border-radius: 50%;
    box-shadow: 0 0 4px 1px rgba(0, 0, 0, 50%);

    img {
        object-fit: cover;
        border-radius: 50%;
    }
`;
