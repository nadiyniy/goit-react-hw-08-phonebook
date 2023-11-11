import styled from 'styled-components';

export const StyledContactForm = styled.form`
  display: flex;
  flex-direction: column;

  label {
    display: flex;
    flex-direction: column;
  }
  input {
    height: 40px;
    font-size: 20px;
    padding: 5px 15px;
    max-width: 420px;
    border-radius: 10px;
    border: none;
    margin-bottom: 10px;
  }
  button {
    font-size: 20px;
    width: 200px;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    padding: 5px 10px;
    cursor: pointer;
    border-radius: 5px;
    border: none;
    background-color: white;

    &:hover,
    &:focus {
      background-color: #f1f1f1;
    }
  }
`;
