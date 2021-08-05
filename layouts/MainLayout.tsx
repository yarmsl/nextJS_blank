import React, {ReactElement} from 'react';
import { Container, makeStyles } from '@material-ui/core';
import { Child } from '../lib/types';

const useStyles = makeStyles(() => ({
	root: {

	},
}));

const MainLayout = ({ children }: Child): ReactElement => {

	const classes = useStyles();

	return (
		<Container className={classes.root}>
			<>
				{children}
			</>
		</Container>
	);
};

export default MainLayout;