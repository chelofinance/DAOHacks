import { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import Input from '@mui/material/Input';
import FilledInput from '@mui/material/FilledInput';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

import './index.scss'

import Navbar from "../../components/Navbar";

const Step1 = ({ selectOrgType }) => {

	const selectOpt = (opt) => {
		selectOrgType(opt);
	};

	return (
		<Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '90vh' }}>
			<Button onClick={() => {selectOpt('new')}} className='grey-container' sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
				<Typography className='gradient-text text-style' sx={{ fontSize: '24px' }}>Create an organization</Typography>
				<Typography classname='text-style' sx={{ color: '#fff' }}>Start your organization with Aragon</Typography>
			</Button>
			<Button onClick={() => {selectOpt('existing')}} className='grey-container' sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
				<Typography classname='text-style' sx={{ color: '#fff' }}>Open an existing organization</Typography>
			</Button>
		</Box>
	)
};

const Step2 = () => {
	const [name, setName] = useState('');

	const handleChange = (event) => {
		setName(event.target.value);
	};

	return (
		<Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '90vh' }}>
			<Box className='grey-container' sx={{ display: 'flex', flexDirection: 'column' }}>

				<FormControl fullWidth sx={{ m: 1 }} variant="filled">
					<InputLabel sx={{ color: '#fff' }}>NAME OF ORGANIZATION</InputLabel>
					<Input
						sx={{ color: '#fff' }}
						value={name}
						onChange={handleChange}
					/>
				</FormControl>

				<Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly' }}>

					<Button className='next-bk-btn'>
						<span className='gradient-text'>Back</span>
					</Button>

					<Button className='next-bk-btn'>
						<span className='gradient-text'>Open Organization</span>
					</Button>
				</Box>
			</Box>
		</Box>
	)
};

const Step3 = () => {

	const row1 = [
		{ title: 'Company', value: 'company' },
		{ title: 'Membership', value: 'membership' },
		{ title: 'Reputation', value: 'reputation' }
	];

	const row2 = [
		{ title: 'Dandelion', value: 'dandelion' },
		{ title: 'Open Enterprise', value: 'enterprice' },
		{ title: 'Fundraising', value: 'fundraising' }
	];

	const [template, setTemplate] = useState(row1[0].value);

	return (
		<Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '90vh' }}>
			<Box className='grey-container' sx={{ display: 'flex', flexDirection: 'column' }}>
				<Button className='gradient-text next-bk-btn'>Back</Button>

				<Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', marginBottom: '10px' }}>
					{row1.map((k, i) => (
						<Button key={i} onClick={() => { setTemplate(k.value) }} sx={{
							backgroundColor: template === k.value ? '#000' : 'rgba(176, 176, 176, 0.1);'
						}}>
							{k.title}
						</Button>
					))}
				</Box>

				<Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', marginBottom: '20px' }}>
					{row2.map((k, i) => (
						<Button key={i} onClick={() => { setTemplate(k.value) }} sx={{
							backgroundColor: template === k.value ? '#000' : 'rgba(176, 176, 176, 0.1);'
						}}>
							{k.title}
						</Button>
					))}
				</Box>

				<Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly' }}>

					<Button className='next-bk-btn'>
						<span className='gradient-text'>Back</span>
					</Button>

					<Button className='next-bk-btn'>
						<span className='gradient-text'>Select Template</span>
					</Button>
				</Box>
			</Box>
		</Box>
	)
};

const Step4 = () => {
	const [tokenName, setTokenName] = useState('');
	const [tokenSymbol, setTokenSymbol] = useState('');
	const [tokenHolders, setTokenHolders] = useState([]);

	const updateTokenHolders = (e, k) => {

	};

	return (
		<Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
			<Box className='grey-container' sx={{ display: 'flex', flexDirection: 'column' }}>

				<Typography>CHOOSE YOUR TOKENS SETTINGS BELOW</Typography>

				<FormControl fullWidth variant="filled" sx={{ display: 'flex', flexDirection: 'column' }}>
					<Box sx={{display: 'flex', flexDirection: 'row'}}>
						<InputLabel sx={{ color: '#fff' }}>TOKEN NAME</InputLabel>
						<Input
							value={tokenName}
							onChange={(e) => { setTokenName(e.target.value) }}
						/>
					</Box>

					<Box>
						<InputLabel sx={{ color: '#fff' }}>TOKEN SYMBOL</InputLabel>
						<Input
							value={tokenSymbol}
							onChange={(e) => { setTokenSymbol(e.target.value) }}
						/>
					</Box>

					<Box>
						<InputLabel sx={{ color: '#fff' }}>TOKEN HOLDERS</InputLabel>
						{tokenHolders.map((k, i) => (
							<Input
								key={i}
								value={k.address}
								onChange={(e) => { updateTokenHolders(e, k) }}
							/>
						))}
						<Button className='next-bk-btn'>
							<span className='gradient-text'>Add more</span>
						</Button>
					</Box>
				</FormControl>

				<Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly' }}>

					<Button className='next-bk-btn'>
						<span className='gradient-text'>Back</span>
					</Button>

					<Button className='next-bk-btn'>
						<span className='gradient-text'>Create DAO</span>
					</Button>
				</Box>
			</Box>
		</Box>
	)
};

const Step5 = () => {
	return (
		<Box>
			<Box>
				<Typography>All Done</Typography>
				<Typography>Your organization is ready</Typography>
			</Box>
			<Button>Get Started</Button>
		</Box>
	)
};

const Borrow = () => {
	const [orgType, selectOrgType] = useState('');
	const [step, selectStep] = useState(0);

	const steps = [
		<Step1 selectOrgType={selectOrgType} />,
		<Step2 />,
	]

	useEffect(() => {
		if(step === 0 && orgType) {
			selectStep(1);
		}
	}, [orgType]);

	return (
		<>
			<Navbar />
			<Container maxWidth="lg" className='home' sx={{ marginTop: '10px' }}>

				{/* <Step1 selectOrgType={selectOrgType} /> */}
				{steps[step]}

				{/* <Typography variant="h2" sx={{
					fontSize: 30,
					fontFamily: 'Readex Pro',
					marginTop: '50px',
					marginBottom: '30px',
					color: '#000'
				}} gutterBottom>
					Borrow
				</Typography> */}

			</Container>
		</>
	)
};

export default Borrow;