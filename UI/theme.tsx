import { createTheme } from '@material-ui/core/styles';

const theme = createTheme({
	breakpoints: {
		values: {
			xs: 0,
			sm: 600,
			md: 960,
			lg: 1280,
			xl: 1920,
		},
	},
	shadows: [ //вызываются theme.spacing[порядковый номер в этом массиве]
		'none',
		'none',
		'none',
		'none',
		'none',
		'none',
		'none',
		'none',
		'none', //используется выпадашки из селектов TextField
		'none',
		'none',
		'none',
		'none',
		'none',
		'none',
		'none',
		'none',
		'none',
		'none',
		'none',
		'none',
		'none',
		'none',
		'none',
		'none'
	],
	shape: {
		borderRadius: 8,
	},
	overrides: {
		MuiCssBaseline: {
			'@global': {
				html: {
					width: '100%',
					height: '100%'
				},
				body: {
					width: '100%',
					height: '100%'
				},
				'#__next': {
					width: '100%',
					height: '100%'
				}
			}
		},
	}
});

export default theme;