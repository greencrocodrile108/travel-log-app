import React from 'react';

const Button = ({ content }) => {
  return (
    <div className="bg-blue-700 w-56 h-12 flex justify-center items-center text-white rounded-md text-lg">
      {content}
    </div>
  );
};

export default Button;
