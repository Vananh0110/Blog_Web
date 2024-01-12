import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from '../../../api/axios';
import signup from '../../../assets/images/signup.png';

const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [hasInputError, setHasInputError] = useState(false);
  const [emailUsedError, setEmailUsedError] = useState(false);
  const [isRegistered, setIsRegistered] = useState(false);

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

  const handleRegister = async () => {
    if (!name || !email || !password) {
      setHasInputError(true);
      return;
    }
    try {
      const response = await axios.post('/auth/register', {
        user_name: name,
        user_email: email,
        user_password: password,
      });

      setHasInputError(false);
      setEmailUsedError(false);
      setIsRegistered(true);
      console.log(response.data);
    } catch (err) {
      if (err.response && err.response.status === 400) {
        setEmailUsedError(true);
      } else {
        console.error(err);
      }
    }
  };

  const handleClickLogIn = () => {
    navigate('../login');
  };

  const handleModalClose = () => {
    setIsRegistered(false);
  };

  const handleClickHomePage = () => {
    navigate('../');
  };
  return (
    <>
      <div className="h-screen bg-amber-50">
        <div
          className="flex border-inherit rounded-2xl shadow-2xl bg-amber-100"
          style={ContainerStyle}
        >
          <div className="flex-grow rounded-xl pt-5 pl-12 bg-white">
            <div className="text-4xl mt-10 font-bold">Create an account</div>

            <div className="mt-12 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
              <div className="sm:col-span-5">
                <label
                  for="username"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Username
                </label>
                <div className="mt-1">
                  <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset sm:max-w-md">
                    <input
                      type="text"
                      name="username"
                      id="username"
                      autocomplete="username"
                      className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                      placeholder="Username"
                      onChange={(e) => setName(e.target.value)}
                    ></input>
                  </div>
                </div>
              </div>
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
                  onClick={handleRegister}
                >
                  Create Account
                </button>

                {hasInputError && (
                  <p className="mt-2 text-red-500 text-sm mt-1">
                    Please enter all required fields.
                  </p>
                )}
                {emailUsedError && (
                  <p className="mt-2 text-red-500 text-sm mt-1">
                    This email is already in use.
                  </p>
                )}
              </div>
            </div>

            <div className="mt-8 pl-12">
              <div className="pl-12 text-sm leading-6 text-gray-600">
                Already have an account?
                <span
                  className="ml-1 text-amber-400 font-bold cursor-pointer"
                  onClick={handleClickLogIn}
                >
                  Login
                </span>
              </div>
            </div>
          </div>
          <div className="flex-none flex items-center justify-center rounded-2xl bg-amber-100">
            <img src={signup} alt="Login's Image" style={imgStyle} />
          </div>
        </div>
      </div>
      {isRegistered && (
        <div className="fixed top-0 left-0 w-screen h-screen flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-md shadow-md">
            <div className="flex justify-end">
              <button
                className="text-gray-500 hover:text-gray-700"
                onClick={handleModalClose}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="h-6 w-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
            <div className="flex items-center justify-center mb-4">
              <div className="bg-green-500 rounded-full p-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="h-8 w-8 text-white"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
            </div>
            <div className="mb-5">
              <p className="text-2xl font-bold mb-4 text-center">
                Registration Successful!
              </p>
              <p className="text-gray-700 text-center">
                You can now log in or go back to the home page.
              </p>
            </div>
            <div className="mt-5 flex justify-end">
              <button
                className=" bg-slate-500 px-3 py-2 text-sm font-semibold text-white rounded-md shadow-sm hover:bg-slate-400"
                onClick={handleClickHomePage}
              >
                Homepage
              </button>
              <button
                className=" bg-amber-400 ml-3 px-3 py-2 text-sm font-semibold text-white rounded-md shadow-sm hover:bg-amber-300"
                onClick={handleClickLogIn}
              >
                Login
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Register;
