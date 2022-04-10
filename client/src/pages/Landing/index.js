import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import landing from '../../assets/img/landing-bk.png'
import { useNavigate } from "react-router-dom";

import './index.scss';

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
	marginLeft: '100px',
	color: '#fff'
};

const btnStyle = {
	display: 'flex',
	position: 'absolute',
	backgroundColor: '#000',
	borderRadius: '100px',
	padding: '20px',
	fontFamily: 'Readex Pro',
	fontWeight: 700,
	fontStyle: 'normal',
	lineHeight: '24px',
	fontSize: '25px',
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
			{/* <img src={landing} style={imgStyle}/> */}
			<Box sx={{ display: 'flex', flexDirection: 'column', position: 'absolute', paddingLeft: '50px' }}>
				<div style={{backgroundColor: 'rgba(0,0,0, 0.3)', padding: '20px', marginLeft: '-50px', paddingLeft: '50px'}}>
					<h3 style={{ marginBottom: '0px', textAlign: 'right'}}>
						<span className="heading heading-white">Use</span>
						<span className='gradient-text heading heading-logo'>QuickLend</span>
					</h3>
					<h3 className='heading heading-white' style={{ marginTop: '-50px' }}>
						<span>Go bankless.</span>
					</h3>
				</div>
				<div style={{backgroundColor: 'rgba(0,0,0, 0.3)', padding: '20px', marginLeft: '-50px', paddingLeft: '50px', marginTop: '20px'}}>
					<p className='desc1'>Decentralized Credit Lending Protocol for DAOs </p>
					<p className='desc2'>powered by Tanda model credit rating</p>
				</div>
			</Box>
			<Button onClick={onClick} sx={btnStyle} className="goto-btn">
				<span className='gradient-text'>Go to dApp</span>
			</Button>
		</div>
	);
};

export default Landing;