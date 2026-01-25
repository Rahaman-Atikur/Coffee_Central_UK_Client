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
import AuthProvider from './firebase/AuthProvider.jsx'
import Users from './Components/Users.jsx'
const router = createBrowserRouter([
  {
    path: '/',
    element: <Layouts></Layouts>,
    children: [
      {
        index: true,
        loader: () => fetch('https://coffee-central-uk.vercel.app/coffees'),
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
        loader: ({ params }) => fetch(`https://coffee-central-uk.vercel.app/coffees/${params.id}`),
        Component: UpdateCoffee
      },
      {
        path: 'signin',
        Component: Signin
      },
      {
        path: 'signup',
        Component: Signup
      },
      {
        path: 'users',
        loader:()=> fetch('https://coffee-central-uk.vercel.app/users'),
        Component: Users
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router}></RouterProvider>
    </AuthProvider>,
  </StrictMode>

)
