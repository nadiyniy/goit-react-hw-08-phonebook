import React from 'react';
import { useForm } from 'react-hook-form';
import { GrContactInfo } from 'react-icons/gr';
import { useDispatch, useSelector } from 'react-redux';
import { Link, Navigate } from 'react-router-dom';
import { toast } from 'react-toastify';

import { registerThunk } from 'redux/auth/operations';
import { selectError, selectIsLoggedIn } from 'redux/auth/selector';
import phoneImage from '../image/iphone_login.webp';
import {
  StyledForm,
  StyledImageContainer,
  StyledWrapper,
} from './StyledLoginRegister';

const Register = () => {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const error = useSelector(selectError);

  // useEffect(() => {
  //   if (error) {
  //     toast.error(error);
  //   }
  // }, [error]);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const submit = data => {
    dispatch(registerThunk(data))
      .unwrap()
      .catch(e => {
        toast.error('Email or password invalid');
      });
  };
  // if (error === 'Request failed with status code 400') {
  //   toast.error('Email or password invalid');
  // }
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
        <p> Sign up to see contacts.</p>
        <label>
          <input
            {...register('name', {
              required: 'Name is required',
              minLength: {
                value: 3,
                message: 'Name should be at least 3 characters',
              },
            })}
            type="text"
            placeholder="Full Name"
          />
          {errors.name && <p>{errors.name.message}</p>}
        </label>
        <label>
          <input
            {...register('email', {
              required: 'Email is required',
              minLength: {
                value: 6,
                message: 'Email should be at least 6 characters',
              },
            })}
            type="email"
            placeholder="Email"
          />
          {errors.email && <p>{errors.email.message}</p>}
        </label>
        <label>
          <input
            {...register('password', {
              required: 'Password is required',
              minLength: {
                value: 6,
                message: 'Password should be at least 6 characters',
              },
            })}
            type="password"
            placeholder="Password"
          />
          {errors.password && <p>{errors.password.message}</p>}
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
