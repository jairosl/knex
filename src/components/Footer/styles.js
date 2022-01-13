import styled from 'styled-components';

export const FooterContainer = styled.section`
    background: #0d0c17;
    display: flex;

    &::before {
        content: '';
        width: 53px;
        height: 144px;
        border-radius: 0 30px 0 0;
        background: var(--light-purple);
        float: left;
        align-self: flex-end;
    }

    &::after {
        content: '';
        width: 53px;
        height: 287px;
        border-radius: 30px 0 0 30px;
        background: var(--light-purple);
        float: left;
        align-self: flex-start;
        margin-top: 2rem;
    }
`;

export const FooterContent = styled.div`
    width: 1300px;
    padding: 5rem 2rem;

    margin: 0 auto;

    display: flex;
    flex-direction: column;

    color: var(--white);

    p {
        font-size: 16;
        font-weight: 500;
    }

    h1 {
        font-size: 1.5rem;
        font-weight: 600;
    }

    .alignEnd {
        align-self: flex-end;
    }
`;

export const KnexInformation = styled.div`
    max-width: 830px;
    display: grid;

    grid-template-columns: 50% 25% 25%;

    @media (max-width: 720px) {
        display: flex;
        flex-direction: column;
        gap: 1rem;
    }
`;

export const LegalInformation = styled.div`
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 2rem;

    @media (max-width: 720px) {
        flex-direction: column;
        align-items: center;
    }

    span {
        display: flex;
        align-items: center;
        gap: 3rem;

        @media (max-width: 720px) {
            flex-direction: column;
            gap: 1rem;
        }
    }

    margin-top: 5rem;
`;

export const DomainColumn = styled.div`
    span {
        a + a {
            margin-left: 1rem;
        }
    }
`;

export const NavLinks = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.75rem;

    h1 {
        font-size: 1.125rem;
    }
`;
