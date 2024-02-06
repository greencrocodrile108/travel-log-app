import React from 'react';
import Button from '../buttons/Button';

const LoginForm = () => {
  return (
    <div>
      <div className="bg-red-300 w-1/2 h-screen flex justify-center items-center flex-col">
        <div>
          <h2 className="text-4xl font-semibold mb-4">Get Started</h2>
        </div>
        <div className="flex">
          <div>
            <Button content="Log in" />
          </div>
          <div className="ml-4">
            <Button content="Sign up" />
          </div>
        </div>
      </div>
      ;
    </div>
  );
};

export default LoginForm;
