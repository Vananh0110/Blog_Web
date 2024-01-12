import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from '../../../api/axios';
import login from '../../../assets/images/login.png';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [hasInputError, setHasInputError] = useState(false);
  const [loginError, setLoginError] = useState(null);
  const navigate = useNavigate();

  const ContainerStyle = {
    width: '1000px',
    height: '600px',
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
  };

  const imgStyle = {
    height: '500px',
    width: 'auto',
  };
  const handleLogin = async () => {
    if (!email || !password) {
      setHasInputError(true);
      return;
    }

    try {
      const response = await axios.post('/auth/login', {
        user_email: email,
        user_password: password,
      });

      setHasInputError(false);
      setLoginError(null);
      navigate('../user/home');
      console.log(response.data);
    } catch (err) {
      setHasInputError(false);
      setLoginError('Invalid email or password. Please try again.');
      console.error(err);
    }
  };

  const handleClickSignUp = () => {
    navigate('../register');
  };

  return (
    <div className="h-screen bg-amber-50">
      <div
        className="flex border-inherit rounded-2xl shadow-2xl bg-amber-100"
        style={ContainerStyle}
      >
        <div className="flex-none flex items-center justify-center rounded-2xl bg-amber-100">
          <img src={login} alt="Login's Image" style={imgStyle} />
        </div>
        <div className="flex-grow rounded-xl pt-5 pl-12 bg-white">
          <div className="text-4xl mt-10 font-bold">Login</div>
          <div className="mt-1 text-sm leading-6 text-gray-600">
            Please enter your details to sign in
          </div>

          <div className="mt-12 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div className="sm:col-span-5">
              <label
                for="email"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Email
              </label>
              <div className="mt-1">
                <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset sm:max-w-md">
                  <input
                    type="text"
                    name="email"
                    id="email"
                    autocomplete="email"
                    className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                    placeholder="Email"
                    onChange={(e) => setEmail(e.target.value)}
                  ></input>
                </div>
              </div>
            </div>
            <div className="sm:col-span-5">
              <label
                for="password"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Password
              </label>
              <div className="mt-1">
                <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset sm:max-w-md">
                  <input
                    type="password"
                    name="password"
                    id="password"
                    autocomplete="password"
                    className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                    placeholder="***********************"
                    onChange={(e) => setPassword(e.target.value)}
                  ></input>
                </div>
              </div>
            </div>

            <div className="sm:col-span-5">
              <button
                className={`w-full rounded-md bg-amber-400 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-amber-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-500 ${
                  hasInputError ? 'border border-red-500' : ''
                }`}
                onClick={handleLogin}
              >
                Log In
              </button>
              {hasInputError && (
                <p className="mt-2 text-red-500 text-sm mt-1">
                  Please enter email and password.
                </p>
              )}
              {loginError && (
                <p className="mt-2 text-red-500 text-sm mt-1">{loginError}</p>
              )}
            </div>
          </div>

          <div className="mt-8 pl-12">
            <div className="pl-12 text-sm leading-6 text-gray-600">
              Don't have an account?
              <span
                className="ml-1 text-amber-400 font-bold cursor-pointer"
                onClick={handleClickSignUp}
              >
                Sign up
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
