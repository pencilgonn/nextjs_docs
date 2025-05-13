"use client";

import { routes } from "@/components/layouts/_default.route";
import Sidebar from "@/components/layouts/Sidebar";
import { flattenRoutes } from "@/utils";
import { ArrowLeftIcon, ArrowRightIcon } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ReactNode, useMemo } from "react";

const Layout: React.FC<{ children: ReactNode }> = ({ children }) => {
  const pathname = usePathname();

  const flatArrRoutes = flattenRoutes(routes);

  const currentRoute = useMemo(
    () => flatArrRoutes.find((route) => route.to == pathname),
    [pathname, flatArrRoutes]
  );

  return (
    <div className="flex items-start">
      <Sidebar />
      <div className="grow px-6">
        <div>{children}</div>
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
        <div className="mt-10 pt-10 border-t border-t-gray-300/20 grid grid-cols-2 gap-6">
          {(() => {
            const index = flatArrRoutes.findIndex(
              (r) => r.to === currentRoute.to
            );
            const prev = index > 0 ? flatArrRoutes[index - 1] : null;
            return prev ? (
              <Link
                href={prev.to}
                className="border border-gray-300/20 rounded-lg p-5 hover:border-primary transition-colors"
              >
                <p className="text-sm text-muted flex items-center gap-2">
                  <ArrowLeftIcon size={20} /> Previous
                </p>
                <p className="text-primary mt-1">{prev.label}</p>
              </Link>
            ) : (
              <div />
            );
          })()}

          {/* Next */}
          {(() => {
            const index = flatArrRoutes.findIndex(
              (r) => r.to === currentRoute.to
            );
            const next =
              index >= 0 && index < flatArrRoutes.length - 1
                ? flatArrRoutes[index + 1]
                : null;
            return next ? (
              <Link
                href={next.to}
                className="border border-gray-300/20 flex flex-col items-end rounded-lg p-5 hover:border-primary transition-colors"
              >
                <p className="text-sm text-muted flex items-center gap-2">
                  Next <ArrowRightIcon size={20} />
                </p>
                <p className="text-primary">{next.label}</p>
              </Link>
            ) : (
              <div />
            );
          })()}
        </div>
      </div>
    </div>
  );
};

export default Layout;
