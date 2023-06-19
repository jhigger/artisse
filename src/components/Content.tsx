import { Balancer } from "react-wrap-balancer";
import locale, { type LocaleOption, type SectionKey } from "~/locale";

const Content = ({
	section,
	localeOption,
}: {
	localeOption: LocaleOption;
	section: SectionKey;
}) => {
	const title = locale[localeOption].sections[section].title;
	const desc = locale[localeOption].sections[section].desc;

	return (
		<div>
			<h2 className="font-heading text-[4vw]">
				<Balancer>{title}</Balancer>
			</h2>
			<p className="text-[1.75vw]">
				<Balancer>{desc}</Balancer>
			</p>
		</div>
	);
};

export default Content;
