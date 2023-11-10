import React, { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import Layout from './Layout/Layout';
import NotFound from 'pages/NotFound';
import RegisterForm from 'pages/RegisterForm';
import Login from 'pages/Login';
import Contacts from 'pages/Contacts';
import { useDispatch } from 'react-redux';
import { refreshThunk } from 'redux/auth/operations';
import PrivateRoute from './hoc/PrivateRoute';

export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(refreshThunk());
    console.log();
  }, [dispatch]);

  return (
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
        <Route path="/register" element={<RegisterForm />} />
        <Route path="/login" element={<Login />} />
      </Route>
      <Route path="*" element={<NotFound />}></Route>
    </Routes>
  );
};
