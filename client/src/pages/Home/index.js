import * as React from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Navbar from "../../components/Navbar";
import {getWeb3} from "../../helpers";
import {createWrapper, setWrapper, getApps} from "../../helpers/aragon";
import {getNetworkConfig} from "../../helpers/network";

import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";

import {InfoCard} from "../../components/InfoCard";
import LendingMarketplace from "../../components/LendingMarketPlace";

import "./index.scss";

const CARDS = [
	{
		title: "Total Value Locked",
		value: "525.77M USD",
		desc: `Market value of all assets in the lending pools and the market value of QuickLend tokens staked in the protocol`,
	},
	{
		title: "Total Loan Originations",
		value: "1.30 B USD",
		desc: `Cumulative total USD principal value of all loans originated on QuickLend`,
	},
	{
		title: "Current Loans Outstanding",
		value: "301.18 M USD",
		desc: `Total USD principal value of assets currently on loan to borrowers.`,
	},
];

const Home = () => {
	return (
		<>
			<Navbar />
			<Container maxWidth="lg" className="home" sx={{marginTop: "10px", position: "relative"}}>
				{/* data boxes */}
				<Box
					className="card-container"
					sx={{display: "flex", flexDirection: "row", justifyContent: "space-around"}}
				>
					{CARDS.map((k, i) => (
						<InfoCard key={i} {...k} />
					))}
				</Box>

				{/* Lending Marketplace */}

				<LendingMarketplace title="QuickLend Lending Marketplace" />
			</Container>
		</>
	);
};

export default Home;
