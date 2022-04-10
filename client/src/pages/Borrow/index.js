import {useEffect, useState} from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import Input from "@mui/material/Input";
import FilledInput from "@mui/material/FilledInput";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormHelperText from "@mui/material/FormHelperText";
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import {createTandaDAO} from "../../helpers/quicklend";
import "./index.scss";

import Navbar from "../../components/Navbar";

const Step1 = ({selectOrgType, selectStep}) => {
	const selectOpt = (opt) => {
		selectOrgType(opt);
		selectStep(1);
	};

	return (
		<Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '90vh' }}>
			<Button onClick={() => { selectOpt('new') }} className='grey-container' sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
				<Typography className='gradient-text text-style' sx={{ fontSize: '24px' }}>Create an organization</Typography>
				<Typography className='text-style' sx={{ color: '#fff' }}>Start your organization with Aragon</Typography>
			</Button>
			<Button onClick={() => { selectOpt('existing') }} className='grey-container' sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
				<Typography className='text-style' sx={{ color: '#fff' }}>Open an existing organization</Typography>
			</Button>
		</Box>
	);
};

const Step2 = ({orgName, selectOrgName, selectStep}) => {
	const handleChange = (event) => {
		selectOrgName(event.target.value);
	};

	return (
		<Box
			sx={{
				display: "flex",
				flexDirection: "column",
				alignItems: "center",
				justifyContent: "center",
				height: "90vh",
			}}
		>
			<Box className="grey-container" sx={{display: "flex", flexDirection: "column"}}>
				<FormControl fullWidth sx={{m: 1}} variant="filled">
					<InputLabel sx={{color: "#fff"}}>NAME OF ORGANIZATION</InputLabel>
					<Input sx={{color: "#fff"}} value={orgName} onChange={handleChange} />
				</FormControl>

				<Box sx={{display: "flex", flexDirection: "row", justifyContent: "space-evenly"}}>
					<Button
						className="next-bk-btn"
						onClick={() => {
							selectStep(0);
						}}
					>
						<span className="gradient-text">Back</span>
					</Button>

					<Button
						className="next-bk-btn"
						onClick={() => {
							selectStep(2);
						}}
					>
						<span className="gradient-text">Open Organization</span>
					</Button>
				</Box>
			</Box>
		</Box>
	);
};

const Step3 = ({ orgTemplate, selectOrgTemplate, selectStep }) => {

	const row1 = [
		{title: "Company", value: "company"},
		{title: "Membership", value: "membership"},
		{title: "Reputation", value: "reputation"},
	];

	const row2 = [
		{title: "Dandelion", value: "dandelion"},
		{title: "Open Enterprise", value: "enterprice"},
		{title: "Fundraising", value: "fundraising"},
	];

	return (
		<Box
			sx={{
				display: "flex",
				flexDirection: "column",
				alignItems: "center",
				justifyContent: "center",
				height: "90vh",
			}}
		>
			<Box className="grey-container" sx={{display: "flex", flexDirection: "column"}}>
				<Button className="gradient-text next-bk-btn">Back</Button>

				<Box
					sx={{
						display: "flex",
						flexDirection: "row",
						justifyContent: "space-between",
						marginBottom: "10px",
					}}
				>
					{row1.map((k, i) => (
						<Button
							key={i}
							onClick={() => {
								selectOrgTemplate(k.value);
							}}
							sx={{
								backgroundColor: orgTemplate === k.value ? "#000" : "rgba(176, 176, 176, 0.1);",
							}}
						>
							{k.title}
						</Button>
					))}
				</Box>

				<Box
					sx={{
						display: "flex",
						flexDirection: "row",
						justifyContent: "space-between",
						marginBottom: "20px",
					}}
				>
					{row2.map((k, i) => (
						<Button
							key={i}
							onClick={() => {
								selectOrgTemplate(k.value);
							}}
							sx={{
								backgroundColor: orgTemplate === k.value ? "#000" : "rgba(176, 176, 176, 0.1);",
							}}
						>
							{k.title}
						</Button>
					))}
				</Box>

				<Box sx={{display: "flex", flexDirection: "row", justifyContent: "space-evenly"}}>
					<Button
						className="next-bk-btn"
						onClick={() => {
							selectStep(1);
						}}
					>
						<span className="gradient-text">Back</span>
					</Button>

					<Button
						className="next-bk-btn"
						onClick={() => {
							selectStep(3);
						}}
					>
						<span className="gradient-text">Select Template</span>
					</Button>
				</Box>
			</Box>
		</Box>
	);
};

const Step4 = ({ setTokenDetails, selectStep }) => {
	const [tokenName, setTokenName] = useState('');
	const [tokenSymbol, setTokenSymbol] = useState('');
	const [support, setSupport] = useState(10);
	const [quorum, setQuorum] = useState(10);
	const [duration, setDuration] = useState(1);
	const [tokenHolders, setTokenHolders] = useState(["0xB9602f2442da97651D5f7e0435a4733b1a1145cD"]);

	const updateTokenHolders = (e, i) => {
		const holders = [...tokenHolders];
		holders[i] = e.target.value;
		setTokenHolders(holders);
	};

	const addMore = () => {
		setTokenHolders([...tokenHolders, '']);
	};

	useEffect(() => {
		setTokenDetails({
			tokenName,
			tokenSymbol,
			tokenHolders,
			support,
			quorum,
			duration
		});
	}, [tokenName, tokenSymbol, tokenHolders]);

	return (
		<Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '90vh' }}>
			<Box className='grey-container' sx={{ display: 'flex', flexDirection: 'column' }}>

				<Typography className='text-style' sx={{ color: '#fff', textAlign: 'center' }}>CHOOSE YOUR TOKENS SETTINGS BELOW</Typography>

				<Box sx={{ display: 'flex', flexDirection: 'column' }}>
					<Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around' }}>
						<FormControl fullWidth sx={{ m: 1 }} variant="filled">
							<InputLabel sx={{ color: '#fff' }}>TOKEN NAME</InputLabel>
							<Input
								sx={{ color: '#fff' }}
								value={tokenName}
								onChange={(e) => { setTokenName(e.target.value) }}
							/>
						</FormControl>
					</Box>

					<Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around' }}>
						<FormControl fullWidth sx={{ m: 1 }} variant="filled">
							<InputLabel sx={{ color: '#fff' }}>TOKEN SYMBOL</InputLabel>
							<Input
								sx={{ color: '#fff' }}
								value={tokenSymbol}
								onChange={(e) => { setTokenSymbol(e.target.value) }}
							/>
						</FormControl>
					</Box>

					<Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around' }}>
						<FormControl fullWidth sx={{ m: 1 }} variant="filled">
							<InputLabel sx={{ color: '#fff' }}>SUPPORT</InputLabel>
							<Input
								sx={{ color: '#fff' }}
								value={support}
								onChange={(e) => { setSupport(e.target.value) }}
							/>
						</FormControl>
					</Box>

					<Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around' }}>
						<FormControl fullWidth sx={{ m: 1 }} variant="filled">
							<InputLabel sx={{ color: '#fff' }}>QUORUM</InputLabel>
							<Input
								sx={{ color: '#fff' }}
								value={quorum}
								onChange={(e) => { setQuorum(e.target.value) }}
							/>
						</FormControl>
					</Box>

					<Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around' }}>
						<FormControl fullWidth sx={{ m: 1 }} variant="filled">
							<InputLabel sx={{ color: '#fff' }}>DURATION</InputLabel>
							<Input
								sx={{ color: '#fff' }}
								value={duration}
								onChange={(e) => { setDuration(e.target.value) }}
							/>
						</FormControl>
					</Box>

					<Box sx={{ display: 'flex', flexDirection: 'column' }}>
						<Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', padding: '20px' }}>
							<p style={{ color: '#fff' }}>TOKEN HOLDERS</p>
							<Button className='next-bk-btn' sx={{ width: '100px' }} onClick={addMore}>
								<span className='gradient-text'>Add more</span>
							</Button>
						</Box>
						{tokenHolders.map((k, i) => (
							<FormControl key={i} fullWidth sx={{ m: 1 }} variant="filled">
								<Input
									sx={{ color: '#fff' }}
									value={k}
									onChange={(e) => { updateTokenHolders(e, i) }}
								/>
							</FormControl>
						))}
					</Box>
				</Box>

				<Box sx={{display: "flex", flexDirection: "row", justifyContent: "space-evenly"}}>
					<Button
						className="next-bk-btn"
						onClick={() => {
							selectStep(2);
						}}
					>
						<span className="gradient-text">Back</span>
					</Button>

					<Button
						className="next-bk-btn"
						onClick={() => {
							selectStep(4);
						}}
					>
						<span className="gradient-text">Create DAO</span>
					</Button>
				</Box>
			</Box>
		</Box>
	);
};

const Step5 = ({ setComplete }) => {
	return (
		<Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '90vh' }}>
			<Box className='grey-container' sx={{ display: 'flex', flexDirection: 'column' }}>
				<Box>
					<Typography className='text-style' sx={{ color: '#fff', textAlign: 'center' }}>All Done</Typography>
					<Typography className='text-style' sx={{ color: '#fff', textAlign: 'center' }}>Your organization is ready</Typography>
				</Box>
				<Button className='next-bk-btn' onClick={() => { setComplete(true) }}>
					<span className='gradient-text'>Get Started</span>
				</Button>
			</Box>
		</Box>
	);
};

const Borrow = () => {
	const [orgType, selectOrgType] = useState('');
	const [orgName, selectOrgName] = useState('');
	const [orgTemplate, selectOrgTemplate] = useState('company');
	const [tokenDetails, setTokenDetails] = useState({});
	const [step, selectStep] = useState(0);
	const [complete, setComplete] = useState(false);
	const [allDetails, setAllDetails] = useState({});

	const steps = [
		<Step1 selectOrgType={selectOrgType} selectStep={selectStep} />,
		<Step2 orgName={orgName} selectOrgName={selectOrgName} selectStep={selectStep} />,
		<Step3 orgTemplate={orgTemplate} selectOrgTemplate={selectOrgTemplate} selectStep={selectStep} />,
		<Step4 setTokenDetails={setTokenDetails} selectStep={selectStep} />,
		<Step5 setComplete={setComplete} />,
	]

	useEffect(() => {
		if(step === 4) {
			const details = {
				orgName,
				orgType,
				orgTemplate,
				...tokenDetails
			};
			setAllDetails(details);

			createTandaDAO({
				network: "rinkeby",
				dao: orgName,
				// members: ["0xB9602f2442da97651D5f7e0435a4733b1a1145cD"], //first members
				members: details.tokenHolders,
				support: +details.support, //support in %
				quorum: +details.quorum, //quorum in %
				duration: +details.duration, //duration in hours (of voting)
				// support: 10, //support in %
				// quorum: 10, //quorum in %
				// duration: 1, //duration in hours (of voting)
			});
		}
	}, [step]);

	useEffect(() => {
		console.log(allDetails);
	}, [complete]);

	return (
		<>
			<Navbar />
			<Container maxWidth="lg" className='home' sx={{ marginTop: '10px' }}>

				{steps[step]}

			</Container>
		</>
	);
};

export default Borrow;
