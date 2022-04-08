import Home from './pages/Home';
import Lend from './pages/Lend';
import Borrow from './pages/Borrow';
import Portfolios from './pages/Portfolios';

export const ROUTES = [
	{
		title: 'Home',
		component: Home,
		exact: true,
		path: '/home'
	},

	{
		title: 'Lend',
		component: Lend,
		exact: true,
		path: '/lend'
	},
	{
		title: 'Borrow',
		component: Borrow,
		exact: true,
		path: '/borrow'
	},
	{
		title: 'Portfolios',
		component: Portfolios,
		exact: true,
		path: '/portfolios'
	},
];