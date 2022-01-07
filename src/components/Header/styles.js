import styled from 'styled-components';

export const Nav = styled.nav`
    padding: 0 10rem;
    height: 80px;
    background-color: var(--black);
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

export const NavContainer = styled.div`
    margin: 0 5px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const StyledLink = styled.a`
    padding: 0rem 1.5rem;
    color: var(--white);
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
`;
