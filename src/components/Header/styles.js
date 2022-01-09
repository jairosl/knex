import styled from 'styled-components';

export const Nav = styled.nav`
    width: 100%;
    height: 80px;
    background-color: var(--black);
    position: fixed;
    z-index: 1000;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    border-bottom: 0.5px solid rgba(219, 218, 255, 0.6);
`;

export const NavContainer = styled.div`
    margin: 0 0.2rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    text-align: center;
`;

export const StyledLink = styled.a`
    padding: 0rem 1.5rem;
    color: var(--white);
    font-weight: 600;
    transition: 0.2s;
    &:hover {
        color: var(--light-purple);
    }
`;

export const Logo = styled.div`
    position: relative;
    height: 100px;
    width: 150px;
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
`;
