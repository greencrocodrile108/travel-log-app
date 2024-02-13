import React from 'react';
import LoginForm from '../components/Login/LoginForm';
import HighwayImg from '../assets/highway.jpg';
import './LoginPage.css';

const login = () => {
  return (
    <div className="flex">
      <LoginForm />
      <div className="main-img"></div>
    </div>
  );
};

export default login;
