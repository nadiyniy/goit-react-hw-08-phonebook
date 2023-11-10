import React from 'react';
import { useForm } from 'react-hook-form';
import { GrContactInfo } from 'react-icons/gr';
import { useDispatch, useSelector } from 'react-redux';
import { Link, Navigate } from 'react-router-dom';
import { loginThunk } from 'redux/auth/operations';
import { selectIsLoggedIn } from 'redux/auth/selector';
import { StyledForm, StyledWrapper } from './StyledLoginRegister';

const Register = () => {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(selectIsLoggedIn);

  const { register, handleSubmit } = useForm();
  const submit = data => {
    dispatch(loginThunk(data));
    console.log(data);
  };
  if (isLoggedIn) {
    return <Navigate to="/" />;
  }
  return (
    <StyledWrapper>
      <StyledForm onSubmit={handleSubmit(submit)}>
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