import React from 'react';
import { useForm } from 'react-hook-form';
import { GrContactInfo } from 'react-icons/gr';
import { useDispatch, useSelector } from 'react-redux';
import { Link, Navigate } from 'react-router-dom';
import { registerThunk } from 'redux/auth/operations';
import { selectIsLoggedIn } from 'redux/auth/selector';
import styled from 'styled-components';

const Register = () => {
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
    <StyledWrapper>
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

export const StyledWrapper = styled.div`
  display: flex;
  inset: 0;
  justify-content: center;
  align-items: center;
  padding: 20px 10px;
`;
export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
  background-color: rgba(255, 255, 255, 0.6);
  border-radius: 10px;
  padding: 5px 10px;
  max-width: 420px;
  margin: 0 auto;
  margin-bottom: 10px;
  width: 100%;
  display: flex;
  flex-direction: column;

  label {
    display: flex;
    flex-direction: column;
    gap: 5px;
  }
  input {
    height: 40px;
    padding: 5px 15px;
    max-width: 420px;
    border-radius: 10px;
    border: 1px solid black;
    margin-bottom: 10px;
  }
  button {
    width: 120px;
    height: 40px;

    display: inline-flex;
    justify-content: center;
    align-items: center;
    padding: 5px 10px;
    height: 28px;
    cursor: pointer;
    border-radius: 5px;
    border: 1px solid black;
    background-color: white;

    &:hover,
    &:focus {
      box-shadow: 0 0 1px 1px black;
    }
  }

  h1 {
    border-bottom: 2px solid black;
    display: flex;
    gap: 10px;
    align-items: center;
    margin-bottom: 10px;
  }
`;

//========
export const StyledMainWrapper = styled.div`
  padding: 20px 10px;
  @media screen and (min-width: 768.98px) {
  }

  div {
    margin: 0 auto;
  }

  h1 {
    border-bottom: 2px solid black;
    display: flex;
    gap: 10px;
    align-items: center;
    margin-bottom: 10px;
  }
  div:first-child {
    background-color: rgba(255, 255, 255, 0.6);
    border-radius: 10px;
    padding: 5px 10px;
    max-width: 420px;
    margin: 0 auto;
    margin-bottom: 10px;
    width: 100%;
  }
  form {
    margin-bottom: 10px;
  }
  h2 {
    /* text-align: center; */
  }
`;

export default Register;
