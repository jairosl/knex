import styled from 'styled-components';

export const FooterContainer = styled.section`
    background: #0d0c17;
`;

export const FooterContent = styled.div`
    max-width: 1300px;
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
        span + span {
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
