import React from 'react';
import PathConstants from './pathConstants';
import Home from '../home/Home';

const Login = React.lazy(() => import('../login/Login'));
const Register = React.lazy(() => import('../register/Register'));

const routes = [
  {
    path: PathConstants.HOME,
    element: <Home />,
  },
  {
    path: PathConstants.REGISTER,
    element: <Register />,
  },
  {
    path: PathConstants.LOGIN,
    element: <Login />,
  },
];

export default routes;
