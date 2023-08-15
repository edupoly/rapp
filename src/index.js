import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
import AddCustomer from './features/customer/AddCustomer';
import CustomerList from './features/customer/CustomerList';
import Home from './features/pages/Home';
  const router = createBrowserRouter([
    {
      path: "/",
      element: <App></App>,
      children:[
        {
            path:"/",
            element:<Home></Home>
        },
        {
            path:"/addNewCustomer",
            element:<AddCustomer></AddCustomer>
        },
        {
            path:"/customerList",
            element:<CustomerList></CustomerList>
        }
      ]
    },
  ]);
  ReactDOM.createRoot(document.getElementById("root")).render(
      <RouterProvider router={router} />
  );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
