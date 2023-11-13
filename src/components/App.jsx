import React, { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { ClipLoader } from 'react-spinners';
import styled from 'styled-components';

import NotFound from 'pages/NotFound';
import Register from 'pages/Register';
import Login from 'pages/Login';
import Contacts from 'pages/Contacts';
import { refreshThunk } from 'redux/auth/operations';
import { selectRefresh } from 'redux/auth/selector';
import PrivateRoute from './hoc/PrivateRoute';
import Layout from './Layout/Layout';

export const App = () => {
  const dispatch = useDispatch();
  const refresh = useSelector(selectRefresh);
  useEffect(() => {
    dispatch(refreshThunk());
  }, [dispatch]);

  return refresh ? (
    <StyledLoader>
      <ClipLoader color="lightblue" size={100} />
    </StyledLoader>
  ) : (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route
          index
          element={
            <PrivateRoute>
              <Contacts />
            </PrivateRoute>
          }
        />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Route>
      <Route path="*" element={<NotFound />}></Route>
    </Routes>
  );
};

const StyledLoader = styled.div`
  background-color: rgba(255, 255, 255, 0.6);
  width: 100dvw;
  height: 100dvh;
  display: flex;
  justify-content: center;
  align-items: center;
`;
