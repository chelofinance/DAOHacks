import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Chip from '@mui/material/Chip';
import { HtmlTooltip } from '../HTMLToolTip';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import { Link } from "react-router-dom";

import './index.scss'

function createData(name, calories, fat, carbs, protein) {
	return { name, calories, fat, carbs, protein };
}

const rows = [
	createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
	createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
	createData('Eclair', 262, 16.0, 24, 6.0),
	createData('Cupcake', 305, 3.7, 67, 4.3),
	createData('Gingerbread', 356, 16.0, 49, 3.9),
];

const TABLE_DATA = [
	{
		name: 'B2B Fintech Portfolio',
		address: '0xa62cafd41676613e3723ff966a0f2e3f6ddffee2',
		logo: 'https://raw.githubusercontent.com/trusttoken/truefi-registry/main/profiles/mainnet/trustTokenAssetManagement/logo.svg',
		manager: 'TrueTrading',
		managerAdd: '0xC8bD2387DB21aAFdD5235B4f223fd5E2c2815eD4',
		value: 2052024.38,
		currency: 'USDC',
		roi: 11.82,
		status: 'Full'
	},
	{
		name: 'Perpetual Protocol Portfolio',
		address: '0xf3094013e6106dc26828b64bcde92240398a8379',
		logo: 'https://assets.website-files.com/609c255d11c4e7e984c6dc00/60d18ad85d03bd258e9fe254_mark%20only%2001.svg',
		manager: 'TrueTrading',
		managerAdd: '0xC8bD2387DB21aAFdD5235B4f223fd5E2c2815eD4',
		value: 5023474.36,
		currency: 'USDC',
		roi: 4.9,
		status: 'Open'
	},
	{
		name: 'Alameda Research Portfolio',
		address: '0xf3094013e6106dc26828b64bcde92240398a8379',
		logo: 'https://raw.githubusercontent.com/trusttoken/truefi-registry/main/profiles/mainnet/alameda/logo.png',
		manager: 'TrueTrading',
		managerAdd: '0xC8bD2387DB21aAFdD5235B4f223fd5E2c2815eD4',
		value: 10899321.34,
		currency: 'USDC',
		roi: 36.76,
		status: 'Open'
	},
];

const TABLEHEADERS = [
	{ title: 'Portfolio name', desc: null },
	{ title: 'Portfolio manager', desc: null },
	{ title: 'Portfolio value', desc: `Total USD present value of principal and accrued interest on loans, assuming that loans will be repaid in full at maturity.` },
	{ title: 'Current ROI', desc: null },
	{ title: 'Status', desc: `Indicates whether a portfolio is currently accepting new investments.` },
];

const LendingMarketplace = ({ title }) => {
	return (
		<Box className="marketplace">
			<Typography className="gradient-text market-title" variant="h2" sx={{ fontSize: 30, fontFamily: 'Readex Pro', marginTop: '50px', marginBottom: '30px' }} gutterBottom>
				{title}	
			</Typography>

			<TableContainer component={Paper} className="market-table">
				<Table sx={{ minWidth: 650 }} aria-label="simple table">
					<TableHead className="table-header">
						<TableRow>
							{TABLEHEADERS.map((k, i) => (
								<TableCell component="th" align="center" key={i}>
									<span style={{color: '#fff'}}>{k.title}</span>
									{k.desc ?
										<HtmlTooltip
											title={
												<Typography color="inherit" sx={{ fontSize: '12px' }}>
													{k.desc}
												</Typography>
											}
										>
											<HelpOutlineIcon sx={{ fontSize: 'small', cursor: 'pointer', marginLeft: '5px', color: '#fff' }} />
										</HtmlTooltip>
										: ""}
								</TableCell>
							))}
						</TableRow>
					</TableHead>
					<TableBody>
						{TABLE_DATA.map((row, i) => (
							<TableRow
								key={i}
								sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
							>
								<TableCell align="center" sx={{ display: 'flex', flexDirection: 'row', padding: '22px' }}>
									<img src={row.logo} style={{ width: '24px', height: '24px', marginRight: '10px' }} />
									<Link to={`/portfolio/${row.address}`} style={{ textDecoration: 'none', cursor: 'pointer', color:'#fff' }}>
										{row.name}
									</Link>
								</TableCell>
								<TableCell align="center">{row.manager}</TableCell>
								<TableCell align="center">{row.value}</TableCell>
								<TableCell align="center">{row.roi}%</TableCell>
								<TableCell align="center">
									<Link to={`/portfolio/${row.address}`} style={{ textDecoration: 'none', cursor: 'pointer' }}>
										{row.status === 'Full' ?
											<Chip label={row.status} sx={{ backgroundColor: 'rgba(255, 0, 0, 0.26)', color: '#fff', borderRadius: '5px', width: '80px' }}  />
											: <Chip label={row.status} sx={{ backgroundColor: 'rgba(204, 255, 153, 0.39)', color: '#fff', borderRadius: '5px', width: '80px' }} />
										}
									</Link>
								</TableCell>
							</TableRow>
						))}
					</TableBody>
				</Table>
			</TableContainer>
		</Box>
	)
};

export default LendingMarketplace;