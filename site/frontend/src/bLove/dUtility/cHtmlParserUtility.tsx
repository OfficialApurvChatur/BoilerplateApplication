import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";


const htmlParsedUtility = ( htmlString: string ) => {
  return (
    <div className="border border-gray-300 dark:border-gray-700 p-6 rounded-xl shadow-sm transition-colors duration-300">      <p className="mb-2 text-sm text-gray-700 dark:text-gray-300 italic">
        (Note: This text is from Markdown file...)
      </p>
      <article className="prose max-w-none dark:prose-invert prose-headings:font-bold prose-li:marker:text-blue-500">
        <ReactMarkdown
          remarkPlugins={[remarkGfm]} 
          rehypePlugins={[rehypeRaw]}
          components={{
            a: ({ node, ...props }) => (
              <a
                {...props}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 dark:text-blue-400 underline hover:text-blue-800 dark:hover:text-blue-300"
              />
            ),
          }}
        >
          {htmlString}
        </ReactMarkdown>
      </article>
    </div>
  )
}

export default htmlParsedUtility;
