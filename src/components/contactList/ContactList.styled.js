import styled from 'styled-components';

export const StyledListUl = styled.ul`
  display: flex;
  margin: 0 auto;
  overflow: auto;
  max-height: 300px;
  flex-direction: column;
  max-width: 420px;
  gap: 5px;
  background-color: rgba(255, 255, 255, 0.6);
  border-radius: 10px;
  padding: 5px 10px;
  margin: 0 auto;
  li {
    padding: 5px 0;
    border-bottom: 1px solid black;
    display: flex;
    justify-content: space-between;
    align-items: center;
    & {
    }
    button {
      background-color: white;
      font-size: 14px;
      padding: 5px 10px;
      cursor: pointer;
      border-radius: 5px;
      border: none;
      &:hover,
      &:focus {
        background-color: #f1f1f1;
      }
    }
  }
`;
