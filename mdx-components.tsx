import { textToSlug } from "@/utils";
import type { MDXComponents } from "mdx/types";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    ...components,
    h1: ({ children }) => (
      <h1 id={textToSlug(children)} className="text-3xl">
        {children}
      </h1>
    ),
    h2: ({ children }) => (
      <h2 id={textToSlug(children)} className="text-2xl">
        {children}
      </h2>
    ),
    h3: ({ children }) => (
      <h3 id={textToSlug(children)} className="text-xl">
        {children}
      </h3>
    ),
    h4: ({ children }) => (
      <h4 id={textToSlug(children)} className="text-lg">
        {children}
      </h4>
    ),
  };
}
