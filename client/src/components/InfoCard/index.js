import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import { HtmlTooltip } from '../HTMLToolTip';

import './index.scss';

export const InfoCard = ({ title, value, desc }) => {
	return <Card className="info-card" variant="outlined" sx={{ width: '250px' }}>
		<CardContent>
			<Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'baseline' }}>
				<Typography sx={{ fontSize: 14, fontFamily: 'Readex Pro', color: '#fff' }} color="text.secondary" gutterBottom>
					{title}
				</Typography>
				<HtmlTooltip
					title={
						<>
							<Typography variant="h6" color="inherit" sx={{ fontSize: '14px' }}>{title}</Typography>
							<Typography color="inherit" sx={{ fontSize: '12px' }}>{desc}</Typography>
						</>
					}
				>
					<HelpOutlineIcon sx={{ fontSize: 'small', cursor: 'pointer', color: '#fff' }} />
				</HtmlTooltip>
			</Box>
			<Typography variant="h5" component="div" sx={{
				fontFamily: 'Readex Pro',
				fontSize: '24px',
				textTransform: 'uppercase',
				fontWeight: 700,
				color: '#fff'
			}}>
				{value}
			</Typography>
		</CardContent>
	</Card>
};