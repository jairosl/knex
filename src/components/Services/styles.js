import styled from 'styled-components';

export const Container = styled.div`
    margin: 0;
    background: #8075ff;
    width: 100%;

    @media (max-width: 320px) {
        #headerMain {
            margin: 0 auto;
            text-align: left;
            p {
                margin-top: 15%;
            }
        }
    }
    @media (max-width: 770px) {
        width: 100%;
        #headerMain {
            padding: 10%;
            text-align: center;
            h2 {
                margin: 0;
            }
            p {
                text-align: center;
            }
        }
        #cardsMain {
            line-height: 1.2rem;
        }

        #headerMain,
        #cardsMain {
            flex-direction: column;
            align-items: center;
        }
    }

    @media (max-width: 1180px) {
        #cardsMain {
            align-items: center;
            flex-direction: column;
        }
    }
`;

export const Header = styled.section`
    color: white;
    width: 70%;
    margin: 0 auto;
    padding: 3rem;
    display: flex;

    h2 {
        font-size: 2rem;
        font-weight: 500;
        margin-top: 0;
        margin-bottom: 0;
        margin-right: 8%;
        line-height: 2.5rem;
    }
`;

export const Cards = styled.div`
    width: 70%;
    margin: 0 auto;
    display: flex;
    align-items: center
    padding-top: 50px;
    padding-bottom: 50px;
    justify-content: space-between;
`;
