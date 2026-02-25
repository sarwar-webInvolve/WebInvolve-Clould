import { Children } from 'react';
import Layout from './Layout';
import Features from './pages/Features';
import Pricing from './pages/Pricing';
import Reviews from './pages/Review';
const routes = [
	{
		path: '/',
		element: <Layout />,
		children: [
			{
				index: true,
				element: <Features />,
			},
			{
				path: 'features', // lowercase to match NavLink
				element: <Features />,
			},
			{
				path: 'pricing',
				element: <Pricing />,
			},
			{
				path: 'reviews',
				element: <Reviews />,
			},
		],
	},
];

export default routes;
