import * as React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Navbar from "../../components/Navbar";
import { getWeb3 } from "../../helpers";
import { createWrapper, setWrapper } from "../../helpers/aragon";
import { getNetworkConfig } from "../../helpers/network";

import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';

import { card } from '../../components/InfoCard';
import LendingMarketplace from '../../components/LendingMarketplace';

const CARDS = [
	{ title: 'Total Value Locked', value: '525.77M USD', desc: `Market value of all assets in the lending pools and the market value of QuickLend tokens staked in the protocol` },
	{ title: 'Total Loan Originations', value: '1.30 B USD', desc: `Cumulative total USD principal value of all loans originated on QuickLend` },
	{ title: 'Current Loans Outstanding', value: '301.18 M USD', desc: `Total USD principal value of assets currently on loan to borrowers.` },
];

const Home = () => {

	const connectWrapper = async () => {
		const web3 = getWeb3();
		const dao = "quicklend"; //dao name
		const curNetwork = getNetworkConfig("rinkeby"); //network config
		const wrapper = setWrapper(
			await createWrapper(`${dao}.aragonid.eth`, curNetwork.addresses.ensRegistry, {
				ipfsConf: curNetwork.apm.ipfs,
				provider: getWeb3(curNetwork.nodes.defaultEth).currentProvider,
				accounts: await web3.eth.getAccounts(),
			})
		);
		console.log({ wrapper });
	};

	React.useState(() => {
		connectWrapper();
	}, []);


	return (
		<>
			<Navbar />
			<Container maxWidth="lg" className='home' sx={{ marginTop: '10px', position: 'relative' }}>
				{/* data boxes */}
				<Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around' }}>
					{CARDS.map((k, i) => (
						<Card key={i} variant="outlined" sx={{ width: '250px' }}>{card(k)}</Card>
					))}
				</Box>

				{/* Lending Marketplace */}

				<Typography variant="h2" sx={{ fontSize: 30, fontFamily: 'Readex Pro', marginTop: '50px', marginBottom: '30px' }} color="#000" gutterBottom>
					QuickLend Lending Marketplace
				</Typography>

				<LendingMarketplace />

			</Container>
		</>
	)
};

export default Home;
