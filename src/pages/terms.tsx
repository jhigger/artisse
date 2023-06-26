import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";
import md from "~/assets/markdown/tos.md";

const Terms = () => {
	return (
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
	);
};

export default Terms;
