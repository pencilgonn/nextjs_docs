import { routes } from "@/components/layouts/_default.route";
import { flattenRoutes } from "@/utils";

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string[] }>;
}) {
  const { slug } = await params;
  const slugPath = slug.join("/");

  const { default: MDX } = await import(`@/markdown/${slugPath}.mdx`);

  return <MDX />;
}

export function generateStaticParams() {
  return [
    // generate slug
    ...flattenRoutes(routes).map((route) => ({
      slug: route.to.split("/").slice(2),
    })),
  ];
}

export const dynamicParams = false;
