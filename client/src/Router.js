import Home from "./pages/Home";
import Lend from "./pages/Lend";
import Borrow from "./pages/Borrow";
import Portfolio from "./pages/Portfolio";
import Governance from "./pages/Governance";

export const ROUTES = [
	{
		title: "Dashboard",
		component: Home,
		exact: true,
		path: "/home",
	},
	{
		title: "Lend",
		component: Lend,
		exact: true,
		path: "/lend",
	},
	{
		title: "Create a DAO",
		component: Borrow,
		exact: true,
		path: "/borrow",
	},
	{
		title: "Portfolio",
		component: Portfolio,
		exact: true,
		path: "/portfolios",
	},
	{
		title: "Governance",
		component: Governance,
		exact: true,
		path: "/governance",
	},
];
