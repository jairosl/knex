import styled from 'styled-components';

export const Container = styled.div`
    margin: 0;
    background: #8075ff;
    width: 100%;

    @media (max-width: 1180px) {
        #headerMain {
            h2 {
                width: 50%;
                height: auto;
                font-size: 2.4rem;
            }

            p {
                width: 45%;
                height: auto;
                margin: 0;
                font-size: 1.1rem;
            }
        }

        #cardsMain {
            align-items: center;
            flex-direction: column;
        }
    }

    @media (max-width: 770px) {
        width: 100%;
        #headerMain {
            padding: 10%;
            padding-bottom: 0;
            text-align: center;
            h2 {
                width: 70%;
                margin: 0;
                margin-bottom: 40px;
                font-size: 3rem;
                line-height: 3.25rem;
            }
            p {
                width: 65%;
                font-size: 1.5rem;
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

    @media (max-width: 650px) {
        #headerMain {
            width: 80%;

            h2 {
                width: 100%;
            }

            p {
                width: 90%;
            }
        }

        #cardsMain {
            width: 90%;
        }
    }

    @media (max-width: 320px) {
        #headerMain {
            margin: 0 auto;
            text-align: left;
        }
    }
`;

export const Header = styled.section`
    color: white;
    width: 70%;
    margin: 0 auto;
    padding-top: 3rem;
    display: flex;
    justify-content: space-between;

    h2 {
        width: 40%;
        font-size: 2rem;
        font-weight: 500;
        margin-top: 0;
        margin-bottom: 0;
        line-height: 2.5rem;
    }

    p {
        width: 35%;
        text-align: justify;
    }
`;

export const Cards = styled.div`
    width: 70%;
    margin: 0 auto;
    display: flex;
    align-items: center;
    padding-top: 50px;
    padding-bottom: 50px;
    justify-content: space-between;
`;
