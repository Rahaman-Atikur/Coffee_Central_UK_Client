import { Children, Component, StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Layouts from './Layouts/Layouts.jsx'
import { createBrowserRouter, RouterProvider } from "react-router";
import Home from './Components/Home.jsx'
import AddCoffee from './Components/AddCoffee.jsx'
import UpdateCoffee from './Components/UpdateCoffee.jsx'
import CoffeeDetails from './Components/CoffeeDetails.jsx'
import Signin from './Components/Signin.jsx'
import Signup from './Components/Signup.jsx'
const router = createBrowserRouter([
  {
    path: '/',
    element: <Layouts></Layouts>,
    children: [
      {
        index: true,
        loader: () => fetch('http://localhost:3000/coffees'),
        Component: Home
      },
      {
        path: 'addCoffee',
        Component: AddCoffee
      },
      {
        path: 'coffee/:id',
        Component: CoffeeDetails
      },
      {
        path: 'updateCoffee/:id',
        loader: ({ params }) => fetch(`http://localhost:3000/coffees/${params.id}`),
        Component: UpdateCoffee
      },
      {
        path: 'signin',
        Component: Signin
      },
      {
        path:'signup',
        Component: Signup
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)
