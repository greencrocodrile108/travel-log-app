import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../buttons/Button';

const LoginForm = () => {
  return (
    <div>
      <div className=" h-screen flex justify-center items-center flex-col p-14">
        <div>
          <h2 className="text-4xl font-semibold mb-4">Get Started</h2>
        </div>
        <div className="flex">
          <div>
            <Link to="/log-in">
              <Button content="Log in" />
            </Link>
          </div>
          <div className="ml-4">
            <Link to="/sign-up">
              <Button content="Sign up" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
