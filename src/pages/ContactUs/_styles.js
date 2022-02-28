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
