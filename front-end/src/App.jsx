import './App.css';
import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import HomePage from './pages/Homepage';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <HomePage />,
    },
    {
      path: '/log-in',
      element: <LoginPage />,
    },
    {
      path: '/sign-up',
      element: <SignupPage />,
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
