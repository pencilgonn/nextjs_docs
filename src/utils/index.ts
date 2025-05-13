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

export { flattenRoutes };
