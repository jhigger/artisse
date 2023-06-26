import Document, {
	type DocumentContext,
	Head,
	Html,
	Main,
	NextScript,
} from "next/document";
import Script from "next/script";

class MyDocument extends Document {
	static async getInitialProps(ctx: DocumentContext) {
		const initalProps = await Document.getInitialProps(ctx);

		return initalProps;
	}

	render() {
		return (
			<Html>
				<Head></Head>
				<body>
					<Script
						async
						src="https://www.googletagmanager.com/gtag/js?id=G-2TVJSL9NGZ"
					/>
					<Script id="google-analytics">
						{`window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments);} gtag('js', new Date()); gtag('config', 'G-2TVJSL9NGZ');`}
					</Script>
					<Script id="google-tag-manager">
						{`
					(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
					new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
					j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
					'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
					})(window,document,'script','dataLayer','GTM-TBLJFC9');
                        `}
					</Script>
					<noscript>
						<iframe
							src="https://www.googletagmanager.com/ns.html?id=GTM-TBLJFC9"
							height="0"
							width="0"
							className="invisible hidden"
						></iframe>
					</noscript>
					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}
}

export default MyDocument;
