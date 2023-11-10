import React from 'react';
import { useForm } from 'react-hook-form';
import { GrContactInfo } from 'react-icons/gr';
import { useDispatch, useSelector } from 'react-redux';
import { Link, Navigate } from 'react-router-dom';
import { registerThunk } from 'redux/auth/operations';
import { selectIsLoggedIn } from 'redux/auth/selector';
import {
  StyledForm,
  StyledImageContainer,
  StyledWrapper,
} from './StyledLoginRegister';
import phoneImage from '../image/phoneBook.PNG';

const Register = () => {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(selectIsLoggedIn);

  const { register, handleSubmit } = useForm();
  const submit = data => {
    dispatch(registerThunk(data));
  };
  if (isLoggedIn) {
    return <Navigate to="/" />;
  }
  return (
    <StyledWrapper>
      <StyledImageContainer>
        <img width={300} src={phoneImage} alt="Phonebook" />
      </StyledImageContainer>
      <StyledForm onSubmit={handleSubmit(submit)}>
        <h1>
          <GrContactInfo /> <span>Phonebook</span>
        </h1>
        <label>
          Name:
          <input
            {...register('name', { required: true, minLength: 3 })}
            type="text"
            placeholder="Enter you name"
          />
        </label>
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
          Have an account? <Link to={'/login'}>Log in</Link>
        </span>
      </StyledForm>
    </StyledWrapper>
  );
};

export default Register;
