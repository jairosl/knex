import styled from 'styled-components';

export const HeaderContainer = styled.header`
    width: 100%;
    background-color: var(--black);
    position: fixed;
    z-index: 1000;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    flex-wrap: wrap;

    border-bottom: 0.5px solid rgba(219, 218, 255, 0.6);

    @media (max-width: 1024px) {
        justify-content: space-around;
    }
`;

export const NavContainer = styled.nav`
    margin: 0 0.2rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    text-align: center;

    @media screen and (max-width: 1024px) {
        div {
            margin-bottom: 15px;
        }
        overflow: hidden;
        flex-direction: column;
        width: 100%;
        max-height: ${({ isOpen }) => (isOpen ? '300px' : '0')};
        transition: max-height 0.3s ease-in;
    }
    @media screen and (max-width: 768px) {
        div {
            margin-bottom: 15px;
        }
        overflow: hidden;
        flex-direction: column;
        width: 100%;
        max-height: ${({ isOpen }) => (isOpen ? '300px' : '0')};
        transition: max-height 0.3s ease-in;
    }
`;

export const StyledLink = styled.a`
    padding: 0.8rem 1.5rem;
    cursor: pointer;
    text-align: center;
    color: var(--white);
    font-weight: 600;
    transition: 0.2s;
    &:hover {
        color: var(--light-purple);
    }
`;

export const Logo = styled.div`
    position: relative;
    height: 6rem;
    width: 9rem;
`;

export const Button = styled.button`
    background-color: var(--light-purple);
    color: var(--white);
    border: none;
    border-radius: 30px;
    padding: 0.5rem 0.8rem;
    font-weight: 600;
    transition: 0.2s;

    &:hover {
        background: white;
        color: var(--light-purple);
    }

    @media (max-width: 1024px) {
        display: none;
    }
    @media (max-width: 724px) {
        display: none;
    }
`;
export const Hamburger = styled.div`
    display: none;
    flex-direction: column;
    cursor: pointer;

    span {
        height: 2px;
        width: 25px;
        background: #fff;
        margin-bottom: 4px;
        border-radius: 5px;
    }

    @media (max-width: 1024px) {
        display: flex;
    }
    @media (max-width: 724px) {
        display: flex;
    }
`;
