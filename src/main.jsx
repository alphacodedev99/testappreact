import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
// components
import Pocetna from './pages/Pocetna.jsx'
import Kontakt from './pages/Kontakt.jsx'
import Usluge from './pages/Usluge.jsx'

// router
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <Pocetna />
      },
      {
        path: '/test',
        element: <div>RADI TEST</div>
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
);
