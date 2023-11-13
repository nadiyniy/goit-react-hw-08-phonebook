import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';

import { logoutThunk } from 'redux/auth/operations';
import { selectIsLoggedIn, selectUser } from 'redux/auth/selector';

const Navbar = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  const handleLogout = () => {
    dispatch(logoutThunk());
  };

  return (
    <div>
      <StyledHeader>
        {isLoggedIn && (
          <StyledContainer>
            <p>{user.email}</p>
            <button onClick={handleLogout}>logout</button>
          </StyledContainer>
        )}
      </StyledHeader>
    </div>
  );
};
export const StyledHeader = styled.div`
  background-color: rgba(255, 255, 255, 0.6);
  display: flex;
  align-items: center;
  justify-content: center;

  @media screen and (min-width: 768.98px) {
  }
`;
export const StyledContainer = styled.div`
  max-width: 420px;
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 10px;
  button {
    background-color: white;
    font-size: 20px;

    padding: 5px 10px;
    cursor: pointer;
    border-radius: 5px;
    border: none;
    &:hover,
    &:focus {
      background-color: #f1f1f1;
    }
  }
`;

export default Navbar;
