import React from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Navbar from "../../components/Navbar";
import Input from "@mui/material/Input";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import Button from "@mui/material/Button";

import {getWeb3} from "../../helpers";
import {getNetworkConfig} from "../../helpers/network";
import {getContract} from "../../helpers/contracts";
import {createWrapper, setWrapper, getApps, getWrapper} from "../../helpers/aragon";
import {whitelistMember} from "../../helpers/quicklend";

const Portfolio = () => {
	const [daoName, setDaoName] = React.useState("");
	const [member, setMember] = React.useState("");

	const connectWrapper = async () => {
		const web3 = getWeb3();
		const curNetwork = getNetworkConfig("rinkeby"); //network config
		const wrapper = await createWrapper(
			`${daoName}.aragonid.eth`,
			curNetwork.addresses.ensRegistry,
			{
				ipfsConf: curNetwork.apm.ipfs,
				provider: getWeb3(curNetwork.nodes.defaultEth).currentProvider,
				accounts: await web3.eth.getAccounts(),
			}
		);
		return wrapper;
	};

	const proposeWhitelist = async () => {
		const curNetwork = getNetworkConfig("rinkeby"); //network config
		const wrapper = await connectWrapper();
		const agent = (await getApps(wrapper)).find((app) => app.appName === "agent.aragonpm.eth");
		const tandaFactory = getContract("CreateTandaDAO", curNetwork.addresses.tandaDaoFactory);
		const tanda = await tandaFactory.methods
			.daoToTanda(daoName)
			.send({from: window.ethereum.selectedAddress});
		console.log(tanda);
		//await whitelistMember({
		//agent: agent.proxyAddress,
		//member,
		//tanda,
		//});
	};

	return (
		<>
			<Navbar />
			<Container maxWidth="lg" className="home" sx={{marginTop: "10px"}}>
				<Box
					sx={{
						display: "flex",
						flexDirection: "column",
						alignItems: "center",
						justifyContent: "center",
						height: "90vh",
					}}
				>
					<Typography
						variant="h2"
						sx={{
							fontSize: 30,
							fontFamily: "Readex Pro",
							marginTop: "50px",
							marginBottom: "30px",
							color: "#000",
						}}
						gutterBottom
					>
						Add member to Tanda
					</Typography>
					<Box className="grey-container" sx={{display: "flex", flexDirection: "column"}}>
						<FormControl fullWidth sx={{m: 1}} variant="filled">
							<InputLabel sx={{color: "#fff"}}>Member wallet</InputLabel>
							<Input
								sx={{color: "#fff"}}
								value={member}
								onChange={(e) => setMember(e.target.value)}
							/>
						</FormControl>

						<FormControl fullWidth sx={{m: 1}} variant="filled">
							<InputLabel sx={{color: "#fff"}}>Dao name</InputLabel>
							<Input
								sx={{color: "#fff"}}
								value={daoName}
								onChange={(e) => setDaoName(e.target.value)}
							/>
						</FormControl>

						<Box sx={{display: "flex", flexDirection: "row", justifyContent: "space-evenly"}}>
							<Button className="next-bk-btn" onClick={proposeWhitelist}>
								<span className="gradient-text">Propose whitelist</span>
							</Button>
						</Box>
					</Box>
				</Box>
			</Container>
		</>
	);
};

export default Portfolio;
