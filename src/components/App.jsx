import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Layout from './Layout/Layout';
import NotFound from 'pages/NotFound';
import RegisterForm from 'pages/RegisterForm';
import Login from 'pages/Login';
import Contacts from 'pages/Contacts';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/register" element={<RegisterForm />} />
        <Route path="/login" element={<Login />} />
      </Route>
      <Route path="*" element={<NotFound />}></Route>
    </Routes>
  );
};
