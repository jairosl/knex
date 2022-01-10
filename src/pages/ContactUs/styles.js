import styled from 'styled-components';

export const FormBody = styled.form`
  width: 100vw;
  padding-top: 80px;
  display: flex;
  flex-direction: column;
  
  div {
    margin: 0 auto;
  }

  h1 {
    color: #6562CF;
    font-size: 36px;
    margin: 40px 0 0 0;
    line-height: 45px;
  }

  p {
    text-align: left;
    margin: 10px 0;
  }
`

export const FormSection = styled.div`
  width: 100%;

  input:first-child {
    margin: 0 20px 15px 0;
  }
`

export const Input = styled.input`
  padding: 5px;
  height: 40px;
  width: 500px;
  background-color: rgba(167, 192, 255, 0.17);
  border-radius: 8px;
  border: none;
  outline: none;
`
export const TextArea = styled.textarea`
  padding: 5px;
  width: calc(100% - 10px);
  height: 200px;
  background-color: rgba(167, 192, 255, 0.17);
  border-radius: 8px;
  border: none;
  outline: none;
`

export const Button = styled.button`
  width: 200px;
  border-radius: 8px;
  color: white;
  background-color: var(--light-purple);
  border: 1px solid var(--light-purple);
  transition: 0.2s;
  height: 40px;

  &:hover {
    transition: 0.2s;
    color: var(--light-purple);
    background-color: transparent;
    border: 1px solid var(--light-purple);
  }
`
