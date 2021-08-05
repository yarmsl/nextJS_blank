import Document, { Html, Head, Main, NextScript, DocumentContext } from 'next/document';
import { ServerStyleSheets } from '@material-ui/core/styles';
import { ReactElement, ReactFragment } from 'react';

class MyDocument extends Document {
	static async getInitialProps(ctx: DocumentContext): Promise<{
		html: string;
		head?: (JSX.Element | null)[] | undefined;
		styles?: ReactElement[] | ReactFragment | undefined;
  }> {
		const initialProps = await Document.getInitialProps(ctx);
		return { ...initialProps };
	}

	render():ReactElement {
		return (
			<Html>
				<Head>
					<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
					<link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
				</Head>
				<body>
					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}
}

MyDocument.getInitialProps = async (ctx) => {
	const sheets = new ServerStyleSheets();
	const originalRenderPage = ctx.renderPage;

	ctx.renderPage = () =>
		originalRenderPage({
			enhanceApp: (App) => (props) => sheets.collect(<App {...props} />),
		});

	const initialProps = await Document.getInitialProps(ctx);

	return {
		...initialProps,
		styles: (
			<>
				{initialProps.styles}
				{sheets.getStyleElement()}
			</>
		),
	};
};

export default MyDocument;