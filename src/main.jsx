import { Children, Component, StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Layouts from './Layouts/Layouts.jsx'
import {createBrowserRouter} from "react-router";
import Home from './Components/Home.jsx'
import AddCoffee from './Components/AddCoffee.jsx'
import UpdateCoffee from './Components/UpdateCoffee.jsx'
const router = createBrowserRouter([
  {
    path:'/',
    element:<Layouts></Layouts>,
    Children:[
      {
        index:true,
        Component:Home
      },
      {
        path:'addCoffee',
        Component:AddCoffee
      },
      {
        path:'updateCoffee',
        Component:UpdateCoffee
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)
