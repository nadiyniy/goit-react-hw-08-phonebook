import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { Link, Navigate } from 'react-router-dom';
import { loginThunk } from 'redux/auth/operations';
import { selectIsLoggedIn, selectUser } from 'redux/auth/selector';
import { selectIsLoading } from 'redux/selectors';

const Login = () => {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const { name } = useSelector(selectUser);

  const { register, reset, handleSubmit } = useForm();

  const submit = data => {
    dispatch(loginThunk(data));
    console.log(data);
  };
  if (isLoggedIn) {
    return <Navigate to="/" />;
  }
  return (
    <div>
      <form onSubmit={handleSubmit(submit)}>
        <input
          {...register('email', { required: true, minLength: 3 })}
          type="email"
          placeholder="Enter you email"
        />
        <input
          {...register('password', { required: true, minLength: 6 })}
          type="password"
          placeholder="Enter you password"
        />
        <button>Sign in</button>
        <span>
          Don't have an account? <Link to={'/register'}>Sign up</Link>
        </span>
      </form>
    </div>
  );
};

export default Login;
