import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {createBrowserRouter,RouterProvider} from 'react-router-dom'
import Contactus from './Contactus';
import Aboutus from './Aboutus';
import Services from './Services';
import Home from './Home';
import Products from './Products';
import ProductDetails from './ProductDetails';
var router = createBrowserRouter([
    {
        path:"/",
        element:<App/>,
        children:[
            {
                path:"/contact",
                element:<Contactus></Contactus>
            },
            {
                path:"/about",
                element:<Aboutus></Aboutus>
            },
            {
                path:"/services",
                element:<Services></Services>
            },
            {
                path:"/home",
                element:<Home></Home>
            },
            {
                path:"/products",
                element:<Products></Products>,
                children:[
                    {
                        path:"/products/productDetails/:pid",
                        element:<ProductDetails></ProductDetails>
                    }

                ]
            }
        ]
    }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

    <RouterProvider router={router}></RouterProvider>

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
