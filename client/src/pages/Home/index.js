import * as React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Navbar from "../../components/Navbar";

const Home = () => {
	return (
		<>
			<Navbar />
			<Container maxWidth="lg">
				<div className='home'>
					<Box sx={{ bgcolor: '#cfe8fc', height: '100vh' }} />
				</div>
			</Container>
		</>
	)
};

export default Home;