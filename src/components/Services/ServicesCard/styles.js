import styled from 'styled-components';

export const Container = styled.div`
    background: white;
    border-radius: 1rem;
    padding: 1rem 1.8rem;
    width: 26%;
    height: 300px;
    margin: 0;

    @media (max-width: 890px) {
        margin-bottom: 8px;
        flex-direction: column;
        width: 60%;
        height: 200px !important;
        text-align: center;
        font-size: 13px !important;
        justify-content: space-between;
        .icon {
            visibility: hidden;
            display: none;
        }
        #textArea {
            p {
                margin-top: 8px;
                line-height: 1.5rem;
            }
        }
    }

    @media (max-width: 1180px) {
        margin-bottom: 8px;
        flex-direction: column;
        width: 60%;
        height: 200px !important;
        text-align: center;
        .icon {
            visibility: hidden;
            display: none;
        }
        #textArea {
            p {
                margin-top: 0;
                line-height: 1.5rem;
            }
        }
    }

    @media (max-width: 1318px) {
        .icon {
            visibility: hidden;
            display: none;
        }
        #textArea {
            p {
                line-height: 1.5rem;
            }
        }
    }
`;

export const TextArea = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    .icon {
        justify-self: start;
    }
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
