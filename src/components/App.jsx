import React, { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Layout from './Layout/Layout';
import NotFound from 'pages/NotFound';
import Register from 'pages/Register';
import Login from 'pages/Login';
import Contacts from 'pages/Contacts';
import { refreshThunk } from 'redux/auth/operations';
import PrivateRoute from './hoc/PrivateRoute';
import { selectRefresh } from 'redux/auth/selector';

export const App = () => {
  const dispatch = useDispatch();
  const refresh = useSelector(selectRefresh);
  useEffect(() => {
    dispatch(refreshThunk());
    console.log();
  }, [dispatch]);

  return refresh ? null : (
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
