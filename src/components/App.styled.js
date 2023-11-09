import styled from 'styled-components';

export const StyledMainWrapper = styled.div`
  padding: 20px 10px;
  @media screen and (min-width: 768.98px) {
  }

  div {
    margin: 0 auto;
  }

  h1 {
    border-bottom: 2px solid black;
    display: flex;
    gap: 10px;
    align-items: center;
    margin-bottom: 10px;
  }
  div:first-child {
    background-color: rgba(255, 255, 255, 0.6);
    border-radius: 10px;
    padding: 5px 10px;
    max-width: 420px;
    margin: 0 auto;
    margin-bottom: 10px;
    width: 100%;
  }
  form {
    margin-bottom: 10px;
  }
  h2 {
    /* text-align: center; */
  }
`;
