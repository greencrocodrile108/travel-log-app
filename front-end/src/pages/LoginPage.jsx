import React from 'react';
import './LoginPage.css';
import ButtonGreen from '../components/buttons/ButtonGreen';

const SigninPage = () => {
  return (
    <div className="flex justify-center">
      <div className="flex flex-col">
        <div className="flex justify-center mb-4">
          <h2 className="text-3xl font-semibold">Welcome Back</h2>
        </div>
        <div className="flex justify-center">
          <input
            className="login-input rounded- p-2 w-80 rounded-md"
            placeholder="Email address"
            type="text"
          />
        </div>
        <div>
          <ButtonGreen />
        </div>
        <div>
          <p>
            Don´t have an account?
            <span className="ml-2">Sign Up</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SigninPage;
