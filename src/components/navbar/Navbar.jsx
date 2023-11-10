import React, { useState } from 'react';
import { GrContactInfo } from 'react-icons/gr';
import { useDispatch, useSelector } from 'react-redux';
import { Link, NavLink } from 'react-router-dom';
import { logoutThunk } from 'redux/auth/operations';
import { selectIsLoggedIn, selectUser } from 'redux/auth/selector';
import styled from 'styled-components';
import { GiHamburgerMenu } from 'react-icons/gi';
import { AiFillCloseCircle } from 'react-icons/ai';

const Navbar = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  console.log(isLoggedIn);

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

    padding: 5px 10px;
    height: 28px;
    cursor: pointer;
    border-radius: 5px;
    border: 1px solid black;
    &:hover,
    &:focus {
      box-shadow: 0 0 1px 1px black;
    }
  }
`;

export default Navbar;
