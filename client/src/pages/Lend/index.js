import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Navbar from "../../components/Navbar";

const Lend = () => {
	return (
		<>
			<Navbar />
			<Container maxWidth="lg" className='home' sx={{ marginTop: '10px' }}>

				<Typography variant="h2" sx={{
					fontSize: 30,
					fontFamily: 'Readex Pro',
					marginTop: '50px',
					marginBottom: '30px',
					color: '#000'
				}} gutterBottom>
					Lend
				</Typography>

			</Container>
		</>
	)
};

export default Lend;