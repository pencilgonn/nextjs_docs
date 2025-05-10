export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const { default: MDX } = await import(`@/markdown/${slug}.mdx`);

  return <MDX />;
}

export function generateStaticParams() {
  return [{ slug: ["welcome"] }, { slug: ["about"] }];
}

export const dynamicParams = false;
