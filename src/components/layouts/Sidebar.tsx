"use client";

import { ChevronRight } from "lucide-react";
import { routes } from "./_default.route";
import { ReactNode, useState } from "react";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";
import { m, AnimatePresence } from "framer-motion";
import Link from "next/link";

type Route = {
  label: string;
  to: string;
  icon: null | ReactNode;
  children?: Route[];
};

const Sidebar = () => {
  return (
    <div className="w-[284px] sticky top-[105px] flex-shrink-0 max-h-[calc(100dvh-146px)] scroll__custom overflow-y-auto overflow-x-hidden">
      <aside>
        <div className="pr-4">
          {routes.map((route, index) => (
            <div key={index}>
              <Menu route={route} level={0} />
            </div>
          ))}
        </div>
      </aside>
    </div>
  );
};

const Menu: React.FC<{
  route: Route;
  level: number;
}> = ({ route, level }) => {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <div>
      <Link
        onClick={() => setOpen(!open)}
        className={cn("flex justify-between items-center gap-2 cursor-pointer")}
        href={pathname == route.to || level == 0 ? "#" : route.to}
      >
        <p
          className={cn(
            "text-sm",
            level > 0 && "text-white/65",
            level == 0 && "text-base font-semibold",
            route.children &&
              route.children.length > 0 &&
              level < 2 &&
              "font-semibold",
            open &&
              route.children &&
              route.children.length > 0 &&
              pathname == route.to &&
              level > 0 &&
              "text-primary",
            level == 1 && pathname.includes(route.to) && "text-primary",
            level == 2 && pathname.includes(route.to) && "text-white/90"
          )}
        >
          {route.label} {route.icon && route.icon}
        </p>
        {route.children && route.children.length > 0 && (
          <ChevronRight size={20} className={cn(open && "rotate-90")} />
        )}
      </Link>
      <div
        className={cn(
          "ml-1 pl-3 my-2.5",
          level > 0 && "border-l border-l-gray-300/20"
        )}
      >
        <AnimatePresence>
          {open &&
            route.children &&
            route.children.length > 0 &&
            route.children.map((item, index) => (
              <Menu route={item} key={index} level={level + 1} />
            ))}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Sidebar;
