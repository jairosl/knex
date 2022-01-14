import styled from 'styled-components';

export const Container = styled.div`
    background: white;
    border-radius: 1rem;
    padding: 1rem 1.8rem;
    width: 26%;
    height: 300px;
    margin: 0;

    @media (max-width: 1448px) {
        #textArea {
            h2 {
                margin-top: 0;
            }
            p {
                line-height: 1.75rem;
            }
        }
    }

    @media (max-width: 1318px) {
        #textArea {
            height: 76%;
            display: flex;
            justify-content: space-between;
            h2 {
                line-height: 1.5rem;
            }

            p {
                margin: 0;
                line-height: 1.5rem;
            }
        }
    }

    @media (max-width: 1180px) {
        margin-bottom: 10px;
        flex-direction: column;
        width: 47%;
        height: 250px;
        text-align: center;
        #textArea {
            justify-content: space-around;
            height: 70%;
            h2 {
                height: auto;
            }

            p {
                margin-top: 0;
                line-height: 1.3rem;
                font-size: 1.15rem;
            }
        }
    }

    @media (max-width: 770px) {
        width: 65%;
        height: 300px;
        padding-bottom: 0;

        p {
            text-align: center;
        }
    }

    @media (max-width: 650px) {
        height: 230px;
    }

    @media (max-width: 420px) {
        height: 250px;
        margin-bottom: 20px;
    }

    @media (max-width: 320px) {
        height: 310px;

        #textArea {
            justify-content: space-between;
        }
    }
`;

export const TextArea = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;

    h2 {
        height: 3rem;
        margin-top: 0.5rem;
        margin-bottom: 0;
    }

    p {
        display: flex;
        line-height: 2rem;
        margin-bottom: 0;
        margin-top: 2rem;
    }
`;
