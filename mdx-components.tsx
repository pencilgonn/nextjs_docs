import Copy from "@/components/Copy";
import { textToSlug } from "@/utils";
import type { MDXComponents } from "mdx/types";
import Link from "next/link";
import SyntaxHighlighter from "react-syntax-highlighter";
import { atomOneDark } from "react-syntax-highlighter/dist/esm/styles/hljs";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    ...components,
    h1: ({ children }) => (
      <h1 id={textToSlug(children)} className="text-3xl mb-8">
        {children}
      </h1>
    ),
    h2: ({ children }) => (
      <h2 id={textToSlug(children)} className="text-2xl mt-8 [h1~h2]:mt-0">
        {children}
      </h2>
    ),
    h3: ({ children }) => (
      <h3 id={textToSlug(children)} className="text-xl mt-6">
        {children}
      </h3>
    ),
    h4: ({ children }) => (
      <h4 id={textToSlug(children)} className="text-lg mt-4">
        {children}
      </h4>
    ),
    ul: ({ children }) => {
      return <ul className="list-disc pl-10 mt-4">{children}</ul>;
    },
    li: ({ children }) => {
      return (
        <li className="hover:text-primary transition-[color] text-white/65">
          {children}
        </li>
      );
    },
    a: ({ children, ...props }) => {
      return (
        <Link {...props} target="_blank">
          {children}
        </Link>
      );
    },
    pre: ({ children }) => {
      return (
        <div className="overflow-hidden mt-6">
          <pre className="grow overflow-x-auto rounded-lg border border-gray-300/20">
            {children}
          </pre>
        </div>
      );
    },
    code: ({ children, className }) => {
      const language = className.split("-")[1];
      return (
        <code className="text-sm code__Wraper">
          <div className="py-2 px-3 bg-black border-b border-gray-300/20 flex justify-between items-center">
            <span>{language && language}</span>
            <Copy content={children} />
          </div>
          <SyntaxHighlighter
            showLineNumbers
            language="javascript"
            wrapLines={false}
            style={atomOneDark}
          >
            {children}
          </SyntaxHighlighter>
        </code>
      );
    },
  };
}
