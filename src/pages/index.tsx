/* eslint-disable @next/next/no-img-element */
import { type NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import Footer from "~/components/Footer";
import Hero from "~/components/Hero";
import {
	Section1,
	Section2,
	Section3,
	Section4,
	Section5,
} from "~/components/Sections";
import { type LocaleOption } from "~/locale";

const EnglishHome: NextPage = () => {
	const locale: LocaleOption = "en-us";

	return (
		<>
			<Head>
				<title>Artisse AI</title>
				<meta
					name="description"
					content="Artisse AI - Changing photography forever"
				/>
				<link rel="canonical" href="https://artisse.ai/" />
				<meta name="author" content="https://github.com/jhigger" />
				<link rel="icon" href="/artisse favicon.png" />
			</Head>
			<div className="relative min-h-[50vh] font-default">
				<header className="absolute p-10">
					<Link href="/en-us">
						<img src="artisse.png" alt="logo" className="h-12" />
					</Link>
				</header>
				<Hero localeOption={locale} />
				<Section1 localeOption={locale} />
				<Section2 localeOption={locale} />
				<Section3 localeOption={locale} />
				<Section4 localeOption={locale} />
				<Section5 localeOption={locale} />
				<Footer localeOption={locale} />
			</div>
		</>
	);
};

export default EnglishHome;
