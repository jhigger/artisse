import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";
import md from "~/assets/markdown/tos.md";
import Head from "next/head";

const Terms = () => {
	return (
		<>
			<Head>
				<title>Artisse AI | Terms of Service</title>
				<meta
					name="description"
					content="Artisse AI - Changing photography forever"
				/>
				<link rel="canonical" href="https://artisse.ai/" />
				<meta name="author" content="https://github.com/jhigger" />
				<link rel="icon" href="/artisse favicon.png" />
			</Head>
			<div className="container mx-auto my-32 w-max">
				<ReactMarkdown
					components={{
						// eslint-disable-next-line @typescript-eslint/no-unused-vars
						ol: ({ depth, ordered, ...props }) => {
							if (depth === 1) {
								return (
									<ol
										style={{ listStyleType: "lower-alpha" }}
										{...props}
									/>
								);
							}

							return <ol {...props} />;
						},
					}}
					remarkPlugins={[remarkGfm]}
					rehypePlugins={[rehypeRaw]}
					className="prose"
				>
					{md}
				</ReactMarkdown>
			</div>
		</>
	);
};

export default Terms;
