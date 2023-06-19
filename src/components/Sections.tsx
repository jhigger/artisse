import { type LocaleOption } from "~/locale";
import Content from "./Content";

type IconType = {
	src: string;
	desc: Record<LocaleOption, string>;
};

export const Section1 = (props: { localeOption: LocaleOption }) => {
	const icons: IconType[] = [
		{
			src: "icons/icon1.webp",
			desc: { "en-us": "Text-generated images", "zh-cn": "文生图" },
		},
		{
			src: "icons/icon2.webp",
			desc: { "en-us": "Imitate other photos", "zh-cn": "图生图" },
		},
		{
			src: "icons/icon3.webp",
			desc: { "en-us": "Fine tune editing", "zh-cn": "自由编辑" },
		},
		{
			src: "icons/icon4.webp",
			desc: { "en-us": "Fully customizable", "zh-cn": "自选风格" },
		},
	];

	return (
		<section className="grid h-[50vw] grid-cols-2 grid-rows-1">
			<img
				src="images/image1.webp"
				alt="section image"
				className="h-full w-full object-cover object-center"
			/>
			<div className="flex items-center justify-center p-4">
				<div className="flex flex-col gap-4 text-center lg:text-start">
					<Content section="section1" {...props} />
					<div className="flex flex-wrap justify-center gap-6 lg:flex-initial lg:justify-start">
						{icons.map((icon) => {
							return (
								<div
									key={icon.src}
									className="flex w-max flex-col items-center justify-end rounded-xl"
								>
									<img
										src={icon.src}
										alt="icon"
										className="w-4 invert-[50%] sm:w-8 md:w-12 lg:w-16"
									/>
									<p className="text-center text-[1vw]">
										{icon.desc[props.localeOption]}
									</p>
								</div>
							);
						})}
					</div>
				</div>
			</div>
		</section>
	);
};

export const Section2 = (props: { localeOption: LocaleOption }) => {
	return (
		<section className="grid h-[50vw] grid-cols-2 grid-rows-1 bg-gradient-to-l from-[#c9f6f0]">
			<div className="flex items-center justify-center p-4">
				<div className="flex flex-col gap-4 text-center lg:text-start">
					<Content section="section2" {...props} />
				</div>
			</div>
			<img
				src="images/image2.webp"
				alt="section image"
				className="h-full w-full object-cover object-center"
			/>
		</section>
	);
};

export const Section3 = (props: { localeOption: LocaleOption }) => {
	return (
		<section className="grid h-[50vw] grid-cols-2 grid-rows-1 bg-gradient-to-r from-[#d5d6f2]">
			<img
				src="images/image3.webp"
				alt="section image"
				className="h-full w-full object-cover object-center"
			/>
			<div className="flex items-center justify-center p-4">
				<div className="flex flex-col gap-4 text-center lg:text-start">
					<Content section="section3" {...props} />
				</div>
			</div>
		</section>
	);
};

export const Section4 = (props: { localeOption: LocaleOption }) => {
	return (
		<section className="grid h-[50vw] grid-cols-2 grid-rows-1 bg-gradient-to-l from-[#fbf0d2]">
			<div className="flex items-center justify-center p-4">
				<div className="flex flex-col gap-4 text-center lg:text-start">
					<Content section="section4" {...props} />
				</div>
			</div>
			<img
				src="images/image4.webp"
				alt="section image"
				className="h-full w-full object-cover object-center"
			/>
		</section>
	);
};

export const Section5 = (props: { localeOption: LocaleOption }) => {
	const icons: IconType[] = [
		{
			src: "icons/icon5.webp",
			desc: { "en-us": "Patented models", "zh-cn": "专利模型" },
		},
		{
			src: "icons/icon6.webp",
			desc: { "en-us": "Exclusive fine-tuning", "zh-cn": "独家微调" },
		},
	];

	return (
		<section className="grid h-[50vw] grid-cols-2 grid-rows-1 bg-gradient-to-r from-rose-200">
			<img
				src="images/image5.webp"
				alt="section image"
				className="h-full w-full object-cover object-center"
			/>
			<div className="flex items-center justify-center p-4">
				<div className="flex flex-col gap-4 text-center lg:text-start">
					<Content section="section5" {...props} />
					<div className="flex flex-wrap justify-center gap-6 lg:flex-initial lg:justify-start">
						{icons.map((icon) => {
							return (
								<div
									key={icon.src}
									className="flex w-max flex-col items-center justify-end rounded-xl"
								>
									<img
										src={icon.src}
										alt="icon"
										className="w-4 invert-[50%] sm:w-8 md:w-12 lg:w-16"
									/>
									<p className="text-center text-[1vw]">
										{icon.desc[props.localeOption]}
									</p>
								</div>
							);
						})}
					</div>
				</div>
			</div>
		</section>
	);
};
