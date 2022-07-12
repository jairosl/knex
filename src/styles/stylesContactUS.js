import styled from 'styled-components';

export const FormBody = styled.form`
    padding-top: 80px;
    display: flex;
    flex-direction: column;

    div {
        margin: 0 auto;
    }

    h1 {
        color: #6562cf;
        font-size: 36px;
        margin: 40px 0 0 0;
        line-height: 45px;
        margin: 80px 0 0 0;
    }

    p {
        text-align: left;
        margin: 10px 0;
    }

    .textArea {
        margin: 10px 0;
        width: 1085px;
    }

    @media screen and (max-width: 1125px) {
        div {
            .textArea {
                width: 800px;
            }
            text-align: center;
        }

        p {
            text-align: center;
        }
    }

    @media screen and (max-width: 850px) {
        div {
            .textArea {
                width: 540px;
            }
        }
    }

    @media screen and (max-width: 580px) {
        div {
            .textArea {
                width: 225px;
            }
        }
    }
`;

export const FormSection = styled.div`
    width: 100%;
    .organizer {
        margin: 0 10px 10px 0;
    }
    div {
        input {
            height: 20px;
            width: 500px;
        }
        margin-right: 10px;
    }

    @media screen and (max-width: 1125px) {
        .organizer {
            margin: 10px 0;
        }

        div {
            input {
                width: 350px;
            }
            margin-bottom: 5px;
            margin: 0 7px;
        }
    }

    @media screen and (max-width: 850px) {
        div {
            input {
                width: 220px;
            }
            margin-bottom: 1px;
        }
    }

    @media screen and (max-width: 400px) {
        text-align: center;

        .organizer {
            margin: 0;
        }
        div {
            input {
                width: 200px;
            }
            margin-right: 4;
        }
    }
`;

export const Button = styled.button`
    width: 200px;
    border-radius: 8px;
    color: white;
    background-color: var(--light-purple);
    border: 1px solid var(--light-purple);
    transition: 0.2s;
    height: 40px;
    margin: 50px 0;

    &:hover {
        transition: 0.2s;
        color: var(--light-purple);
        background-color: transparent;
        border: 1px solid var(--light-purple);
    }
`;
