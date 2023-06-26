const localeKeys = ["en-us"] as const;
export type LocaleOption = (typeof localeKeys)[number];

const sectionKeys = [
	"section1",
	"section2",
	"section3",
	"section4",
	"section5",
] as const;
export type SectionKey = (typeof sectionKeys)[number];

type LocaleType = Record<
	LocaleOption,
	{
		hero: {
			title: string;
			desc: string;
			subtext: string;
		};
		sections: Record<
			SectionKey,
			{
				title: string;
				desc: string;
			}
		>;
		footer: {
			p1: string;
			a: string;
			p2: string;
		};
	}
>;

const locale: LocaleType = {
	"en-us": {
		hero: {
			title: "Artisse AI",
			desc: "Changing photography forever",
			subtext: "Coming Soon",
		},
		sections: {
			section1: {
				title: "Create any image you want",
				desc: "Use text descriptions or reference photos to generate your ultra high quality photos",
			},
			section2: {
				title: "Train your AI model once",
				desc: "Generate stunning photos instantly, anytime, anywhere",
			},
			section3: {
				title: "One-click generation, infinite possibilities",
				desc: "Create images in any style, or setting that you can imagine",
			},
			section4: {
				title: "Instant output",
				desc: "Get your photos instantly, fully touched and edited to be capital S Stunning",
			},
			section5: {
				title: "Dedicated creation, your exclusive style",
				desc: "Based on exclusive patented portrait AI technology, excels in portraying Asian faces",
			},
		},
		footer: {
			p1: "Artisse AI, Ltd.",
			a: "",
			p2: "All rights reserved. | Contact: info@artisse.ai",
		},
	},
};

export default locale;
