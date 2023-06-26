import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";
import md from "~/assets/markdown/pp.md";

const Policy = () => {
	return (
		<div className="container mx-auto my-32 w-max">
			<ReactMarkdown
				remarkPlugins={[remarkGfm]}
				rehypePlugins={[rehypeRaw]}
				className="prose"
			>
				{md}
			</ReactMarkdown>
		</div>
	);
};

export default Policy;
