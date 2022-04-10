import {useState} from 'react';
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

const Step1 = () => {
	return (
		<Box sx={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
			<Box className='grey-container' sx={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
				<Typography className='gradient-text text-style' sx={{fontSize: '24px'}}>Create an organization</Typography>
				<Typography classname='text-style' sx={{color: '#fff'}}>Start your organization with Aragon</Typography>
			</Box>
			<Box className='grey-container' sx={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
				<Typography classname='text-style' sx={{color: '#fff'}}>Open an existing organization</Typography>
			</Box>
		</Box>
	)
};

const Step2 = () => {
	const [name, setName] = useState('');

  const handleChange = (event) => {
    setName(event.target.value);
  };

	return (
		<Box>
			<Button>Back</Button>

			<FormControl fullWidth sx={{ m: 1 }} variant="filled">
				<InputLabel htmlFor="filled-adornment-amount">NAME OF ORGANIZATION</InputLabel>
				<FilledInput
					value={name}
					onChange={handleChange}
				/>
			</FormControl>

			<Button>Open Organization</Button>
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
		<Box>
			<Button>Back</Button>

			<Box sx={{display: 'flex', flexDirection: 'row'}}>
				{row1.map((k, i) => (
					<Button key={i} onClick={() => { setTemplate(k.value) }} sx={{
						backgroundColor: template === k.value ? '#000' : 'rgba(176, 176, 176, 0.1);'}}>
							{k.title}
					</Button>
				))}
			</Box>

			<Box sx={{display: 'flex', flexDirection: 'row'}}>
				{row2.map((k, i) => (
					<Button key={i} onClick={() => { setTemplate(k.value) }} sx={{
						backgroundColor: template === k.value ? '#000' : 'rgba(176, 176, 176, 0.1);'}}>
							{k.title}
					</Button>
				))}
			</Box>

			<Button>Select Template</Button>
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
		<Box>

			<Typography>CHOOSE YOUR TOKENS SETTINGS BELOW</Typography>

			<FormControl fullWidth sx={{ m: 1 }} variant="filled">
				<InputLabel htmlFor="filled-adornment-amount">TOKEN NAME</InputLabel>
				<FilledInput
					value={tokenName}
					onChange={(e) => { setTokenName(e.target.value)}}
				/>

				<InputLabel htmlFor="filled-adornment-amount">TOKEN SYMBOL</InputLabel>
				<FilledInput
					value={tokenSymbol}
					onChange={(e) => { setTokenSymbol(e.target.value)}}
				/>

				<InputLabel htmlFor="filled-adornment-amount">TOKEN HOLDERS</InputLabel>
				{tokenHolders.map((k, i) => (
					<FilledInput
						key={i}
						value={k.address}
						onChange={(e) => { updateTokenHolders(e, k)}}
					/>
				))}
				<Button>Add more</Button>

			</FormControl>

			<Button>Create DAO</Button>
			<Button>Back</Button>
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
	return (
		<>
			<Navbar />
			<Container maxWidth="lg" className='home' sx={{ marginTop: '10px' }}>

				<Step1 />

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