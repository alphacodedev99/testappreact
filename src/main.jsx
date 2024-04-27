import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
// pages
import Pocetna from './pages/Pocetna.jsx'
import Kontakt from './pages/Kontakt.jsx'
import Usluge from './pages/Usluge.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <Pocetna />,
      },
      {
        path: '/usluge',
        element: <Usluge />,
      },
      {
        path: '/kontakt',
        element: <Kontakt />,
      }
    ],
  }
])



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router={router} />
  </React.StrictMode>,
)
