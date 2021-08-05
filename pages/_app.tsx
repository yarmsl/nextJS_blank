import type { AppProps } from 'next/app';
import { ReactElement } from 'react';
import Head from 'next/head';
import { CssBaseline, ThemeProvider } from '@material-ui/core';
import theme from '../UI/theme';

function MyApp({ Component, pageProps }: AppProps):ReactElement {
	return (
		<>
			<Head>
			<meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width"/>
			</Head>
			<ThemeProvider theme={theme}>
				<CssBaseline/>
				<Component {...pageProps} />
			</ThemeProvider>

		</>
	);
}
export default MyApp;