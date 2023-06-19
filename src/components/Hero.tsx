import { Balancer } from "react-wrap-balancer";
import locale, { type LocaleOption } from "~/locale";

const Hero = ({ localeOption }: { localeOption: LocaleOption }) => {
	const title = locale[localeOption].hero.title;
	const desc = locale[localeOption].hero.desc;
	const subtext = locale[localeOption].hero.subtext;

	return (
		<section className="flex min-h-screen items-center justify-center bg-gradient-to-br from-[#59D1E9] via-[#D87DDD] to-[#F8C63A]">
			<div className="container flex w-4/5 flex-col items-center justify-center gap-[15vw] px-2 py-36 sm:px-8 lg:flex-row xl:gap-[10vw]">
				<div className="flex items-center justify-center overflow-hidden lg:w-1/3">
					<img
						src={
							localeOption === "zh-cn"
								? "images/heroCN.webp"
								: "images/heroEN.webp"
						}
						alt="hero image"
						className="aspect-[9/19.5] h-full object-cover object-center lg:w-[350px]"
					/>
				</div>
				<div className="flex h-full flex-col gap-8 lg:w-2/5">
					<div className="flex flex-col items-center gap-4 text-center">
						{localeOption === "zh-cn" ? (
							<div className="flex items-center justify-center gap-4 lg:gap-6">
								<img
									src="logo.webp"
									alt="logo"
									className="w-1/5 rounded-xl bg-white lg:w-1/4"
								/>
								<img
									src="logo name.png"
									alt="mumuxiang ai"
									className="w-1/3 lg:w-3/4"
								/>
							</div>
						) : (
							<h1 className="whitespace-nowrap font-heading text-6xl md:text-7xl lg:text-8xl">
								{title}
							</h1>
						)}
						<p className="text-lg md:text-2xl lg:whitespace-nowrap lg:text-3xl">
							<Balancer>{desc}</Balancer>
						</p>
					</div>
					<div className="flex flex-col items-center justify-center gap-8 sm:flex-row">
						{/* <img
						src="https://placehold.co/128x128?text=QR"
						alt="qr code"
						className="aspect-square rounded-xl border-2 border-black"
					/> */}
						<div className="flex aspect-square w-32 items-center justify-center rounded-xl border-2 border-gray-600 text-center text-base italic text-gray-600 md:text-xl lg:text-2xl">
							{subtext.split(" ")[0]}
							<br />
							{subtext.split(" ")[1]}
						</div>
						<div className="grid grid-rows-2 gap-4">
							<a href="#" className="h-14">
								<img
									src="appstore.png"
									alt="appstore"
									className="h-full"
								/>
							</a>
							<a href="#" className="h-14">
								<img
									src="android.png"
									alt="android"
									className="h-full"
								/>
							</a>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Hero;
