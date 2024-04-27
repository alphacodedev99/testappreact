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
		elementError: <div>error</div>,
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
			},
		],
	},
]);

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
);
