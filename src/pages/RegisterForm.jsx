import React from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { Link, Navigate } from 'react-router-dom';
import { registerThunk } from 'redux/auth/operations';
import { selectIsLoggedIn } from 'redux/auth/selector';

const RegisterForm = () => {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(selectIsLoggedIn);

  const { register, reset, handleSubmit } = useForm();
  const submit = data => {
    dispatch(registerThunk(data));
    console.log(data);
  };
  if (isLoggedIn) {
    return <Navigate to="/" />;
  }
  return (
    <div>
      <form onSubmit={handleSubmit(submit)}>
        <input
          {...register('name', { required: true, minLength: 3 })}
          type="text"
          placeholder="Enter you name"
        />
        <input
          {...register('email', { required: true, minLength: 6 })}
          type="email"
          placeholder="Enter you email"
        />
        <input
          {...register('password', { required: true, minLength: 6 })}
          type="password"
          placeholder="Enter you password"
        />
        <button>Sign up</button>
        <span>
          Have an account? <Link to={'/login'}>Log in</Link>
        </span>
      </form>
    </div>
  );
};

export default RegisterForm;
