import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from './Components/Main.jsx';
import Home from './Components/Home.jsx';
import Login from './Components/Login';
import Reg from './Components/Reg';
import AuthProviders from './Providers/AuthProviders';
import Orders from './Components/Orders';
import PrivateRoute from './Routes/PrivateRoute';
import UserProfile from './Components/UserProfile';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/registration",
        element: <Reg></Reg>
      },
      {
        path: "/orders",
        element: <PrivateRoute>
          <Orders></Orders>
        </PrivateRoute>
      },
      {
        path: "/profile",
        element: <PrivateRoute> <UserProfile></UserProfile> </PrivateRoute>
      }
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProviders>
      <RouterProvider router={router} />
    </AuthProviders>
  </React.StrictMode>,
)
