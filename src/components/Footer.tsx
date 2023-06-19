import locale, { type LocaleOption } from "~/locale";

const Footer = ({ localeOption }: { localeOption: LocaleOption }) => {
	const p1 = locale[localeOption].footer.p1;
	const a = locale[localeOption].footer.a;
	const p2 = locale[localeOption].footer.p2;

	return (
		<footer className="bg-zinc-900 px-12 py-24">
			<div className="container mx-auto flex flex-col items-center justify-center gap-4 text-center text-sm text-white/50 lg:text-lg">
				<p>&copy;2023 {p1}</p>
				<p>
					<a
						href="License.pdf"
						target="_blank"
						rel="noopener noreferrer"
						className="text-white"
					>
						{a}
					</a>
					{p2}
				</p>
			</div>
		</footer>
	);
};

export default Footer;
