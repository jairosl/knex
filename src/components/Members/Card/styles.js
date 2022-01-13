import styled from 'styled-components';

export const MemberContainer = styled.div`
    width: 400px;
    height: 530px;

    background: var(--white);
    border-radius: 1.25rem;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    h1 {
        font-size: 1.875rem;
        font-weight: 500;
        line-height: 2.25rem;
        margin: 1rem 0 0;
    }

    h2 {
        font-size: 1.125rem;
        line-height: 2.75rem;
        font-weight: 500;
        margin: 0;
    }

    span {
        display: flex;
        align-items: center;
        gap: 0.5rem;
        margin-top: 1.75rem;

        p {
            color: var(--gray);
            font-size: 1rem;
            font-weight: 500;
        }
    }
`;

export const MemberImg = styled.div`
    width: 300px;
    height: 300px;

    border-radius: 50%;
    box-shadow: 0 0 4px 1px rgba(0, 0, 0, 25%);

    img {
        object-fit: cover;
        border-radius: 50%;
    }
`;
