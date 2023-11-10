import React from 'react';
import { useForm } from 'react-hook-form';
import { GrContactInfo } from 'react-icons/gr';
import { useDispatch, useSelector } from 'react-redux';
import { Link, Navigate } from 'react-router-dom';
import { loginThunk } from 'redux/auth/operations';
import { selectIsLoggedIn } from 'redux/auth/selector';
import {
  StyledForm,
  StyledImageContainer,
  StyledWrapper,
} from './StyledLoginRegister';
import phoneImage from '../image/phoneBook.webp';

const Register = () => {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(selectIsLoggedIn);

  const { register, handleSubmit } = useForm();
  const submit = data => {
    dispatch(loginThunk(data));
  };
  if (isLoggedIn) {
    return <Navigate to="/" />;
  }
  return (
    <StyledWrapper>
      <StyledImageContainer
        initial={{ x: -500, opacity: 0.5 }}
        animate={{
          x: 0,
          opacity: 1,
          transition: { duration: 1 },
        }}
      >
        <img width={300} src={phoneImage} alt="Phonebook"></img>
      </StyledImageContainer>
      <StyledForm
        initial={{ x: 500, opacity: 0.5 }}
        animate={{
          x: 0,
          opacity: 1,
          transition: { duration: 1 },
        }}
        onSubmit={handleSubmit(submit)}
      >
        <h1>
          <GrContactInfo /> <span>Phonebook</span>
        </h1>

        <label>
          Email:
          <input
            {...register('email', { required: true, minLength: 6 })}
            type="email"
            placeholder="Enter you email"
          />
        </label>
        <label>
          Password:
          <input
            {...register('password', { required: true, minLength: 6 })}
            type="password"
            placeholder="Enter you password"
          />
        </label>
        <button>Sign up</button>
        <span>
          Have an account? <Link to={'/register'}>Log up</Link>
        </span>
      </StyledForm>
    </StyledWrapper>
  );
};

export default Register;
