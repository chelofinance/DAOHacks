import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import landing from '../../assets/img/landing-bk.png'
import { useNavigate } from "react-router-dom";

const headingStyle = {
	fontFamily: 'Readex Pro',
	fontWeight: 600,
	fontSize: '64px',
	margin: 0,
	marginLeft: '100px'
};

const descStyle = {
	fontFamily: 'Readex Pro',
	fontWeight: 400,
	fontSize: '24px',
	margin: 0,
	marginLeft: '100px'
};

const btnStyle = {
	display: 'flex',
	position: 'absolute',
	backgroundColor: '#FCDDEC',
	borderRadius: '100px',
	padding: '20px',
	fontFamily: 'Readex Pro',
	fontWeight: 600,
	fontSize: '18px',
	color: '#8247E5',
	width: '277px',
	height: '69px',
	right: '100px'
};

const imgStyle = {
	position: 'absolute',
	top: 0,
	width: '100%',
	height: '100%'
};

const Landing = () => {
	let navigate = useNavigate();

	const onClick = () => {
		navigate("/home");
	};

	return (
		<div style={{ display: 'flex', alignItems: 'center', height: '100vh' }}>
			<img src={landing} style={imgStyle}/>
			<Box sx={{display: 'flex', flexDirection: 'column', position: 'absolute'}}>
				<h3 style={headingStyle}>Use Quicklend.</h3>
				<h3 style={headingStyle}>Go bankless.</h3>
				<p style={descStyle}>Own your content.</p>
				<p style={descStyle}>Login with Web3, get paid and use decentralized storage.</p>
			</Box>
			<Button onClick={onClick} sx={btnStyle}>Enter QuickLend</Button>
		</div>
	);
};

export default Landing;