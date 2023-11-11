import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { GrContactInfo } from 'react-icons/gr';
import { useDispatch, useSelector } from 'react-redux';
import { Link, Navigate } from 'react-router-dom';
import { loginThunk } from 'redux/auth/operations';
import { selectError, selectIsLoggedIn } from 'redux/auth/selector';
import {
  StyledForm,
  StyledImageContainer,
  StyledWrapper,
} from './StyledLoginRegister';
import phoneImage from '../image/iphone_login.webp';
import { toast } from 'react-toastify';

const Register = () => {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const error = useSelector(selectError);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const submit = data => {
    dispatch(loginThunk(data));
  };

  useEffect(() => {
    if (error) {
      toast.error(error);
    }
  }, [error]);

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
      <StyledForm onSubmit={handleSubmit(submit)}>
        <h1>
          <GrContactInfo /> <span>Phonebook</span>
        </h1>

        <label>
          Email:
          <input
            {...register('email', {
              required: 'Email is required',
              minLength: {
                value: 6,
                message: 'Email should be at least 6 characters',
              },
            })}
            type="email"
            placeholder="Enter you email"
          />
          {errors.email && <p>{errors.email.message}</p>}
        </label>
        <label>
          Password:
          <input
            {...register('password', {
              required: 'Password is required',
              minLength: {
                value: 6,
                message: 'Password should be at least 6 characters',
              },
            })}
            type="password"
            placeholder="Enter you password"
          />
          {errors.password && <p>{errors.password.message}</p>}
        </label>

        <button>Log in</button>
        <span>
          Have an account? <Link to={'/register'}>Sign up</Link>
        </span>
      </StyledForm>
    </StyledWrapper>
  );
};

export default Register;
