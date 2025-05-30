"use client";

import { routes } from "@/components/layouts/_default.route";
import Navigate from "@/components/layouts/Navigate";
import Sidebar from "@/components/layouts/Sidebar";
import TocDocs from "@/components/layouts/TocDocs";
import { cn } from "@/lib/utils";
import { flattenRoutes } from "@/utils";
import { ChevronRight } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ReactNode, useEffect, useMemo, useRef, useState } from "react";

const Layout: React.FC<{ children: ReactNode }> = ({ children }) => {
  const pathname = usePathname();
  const ref = useRef<HTMLDivElement>(null);
  const [toc, setToc] = useState<{ text: string; id: string; level: number }[]>(
    []
  );

  const breadcrums = useMemo(() => {
    return pathname.split("/").splice(2);
  }, [pathname]);

  const flatArrRoutes = flattenRoutes(routes);

  const currentRoute = useMemo(
    () => flatArrRoutes.find((route) => route.to == pathname),
    [pathname, flatArrRoutes]
  );

  useEffect(() => {
    if (!ref.current) return;

    const headings = Array.from(
      ref.current.querySelectorAll("h1, h2, h3, h4")
    ) as HTMLHeadingElement[];

    const result = headings.map((el) => ({
      text: el.innerText,
      id: el.id,
      level: parseInt(el.tagName.substring(1)),
    }));

    setToc(result);
  }, [pathname]);

  return (
    <div className="flex items-start relative">
      <Sidebar />
      <div className="grow px-6 flex flex-col overflow-hidden">
        <div className="flex gap-3">
          {breadcrums.map((item, index) => (
            <div
              className={cn(
                "flex gap-3 text-sm",
                index < breadcrums.length - 1 && "text-white/65"
              )}
              key={index}
            >
              <Link
                href={`/docs/${breadcrums.slice(0, index + 1).join("/")}`}
                key={index}
                className="capitalize"
              >
                {item.replaceAll("-", " ")}
              </Link>
              {index < breadcrums.length - 1 && <ChevronRight size={20} />}
            </div>
          ))}
        </div>
        <div ref={ref} className="flex flex-col max-w-none grow mt-4">
          {children}
        </div>
        {currentRoute && currentRoute.children && (
          <div className="grid grid-cols-2 gap-6 mt-10">
            {currentRoute.children.map((route: any, index: number) => (
              <Link
                href={route.to}
                key={index}
                className="border border-gray-300/20 rounded-lg p-6 hover:border-primary transition-colors"
              >
                <p>{route.label}</p>
                {route?.brief && (
                  <p className="mt-2 text-sm text-white/65">{route?.brief}</p>
                )}
              </Link>
            ))}
          </div>
        )}
        <Navigate flatArrRoutes={flatArrRoutes} currentRoute={currentRoute} />
      </div>
      <TocDocs toc={toc} />
    </div>
  );
};

export default Layout;
