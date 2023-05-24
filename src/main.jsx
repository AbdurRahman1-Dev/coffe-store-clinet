import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import AddCoffe from './pages/AddCoffee/AddCoffe.jsx';
import UpdateCoffe from './pages/UpdateCoffe/UpdateCoffe.jsx';
import Home from './pages/Home/Home.jsx';
import EditCoffee from './pages/Edit/EditCoffee.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/addcoffe',
        element: <AddCoffe></AddCoffe>
      },
      {
        path: '/updatecoffe',
        element: <UpdateCoffe></UpdateCoffe>
      },
     {
        path: '/edit/:id',
        element: <EditCoffee></EditCoffee>,
        loader: ({params}) => fetch(`https://coffe-store-backend.vercel.app/addcoffee/${params.id}`)
      }
    ]
  },

]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
