function flattenRoutes(routes: any[]) {
  const result: any[] = [];

  function traverse(routeList: any[]) {
    for (const route of routeList) {
      const { children, ...rest } = route;
      result.push({ ...rest, children });

      if (children && Array.isArray(children)) {
        traverse(children);
      }
    }
  }

  traverse(routes);

  return result;
}

function textToSlug(text: string) {
  return text
    .toString()
    .normalize("NFKD") // Normalize accents
    .replace(/[\u0300-\u036f]/g, "") // Remove accents
    .toLowerCase() // Convert to lowercase
    .trim() // Trim whitespace
    .replace(/[^a-z0-9 -]/g, "") // Remove invalid chars
    .replace(/\s+/g, "-") // Replace spaces with -
    .replace(/-+/g, "-"); // Remove duplicate -
}

export { flattenRoutes, textToSlug };
