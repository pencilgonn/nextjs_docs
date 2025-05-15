"use client";

import { cn } from "@/lib/utils";
import { getShortcutKeys } from "@/utils/plateform";
import { Fish } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import Search from "./Search";

type Props = {};

const Header: React.FC<Props> = () => {
  const pathname = usePathname();

  const checkPathActive = (regex: RegExp) => {
    return regex.test(pathname);
  };

  return (
    <header className="sticky top-0 border-b z-20 border-gray-300/20 bg-background">
      <div className="px-6">
        <div className="max-w-[1400px] w-full mx-auto h-16 flex items-center">
          <div className="flex justify-between grow">
            <div className="flex items-center gap-2">
              <Link href="/">
                <Fish size={28} />
              </Link>
              <Link
                href="/docs"
                className={cn(
                  "text-sm px-3 hover:text-white",
                  checkPathActive(/^\/docs(\/.*)?$/) && "text-primary"
                )}
              >
                Docs
              </Link>
            </div>
            <Search>
              <motion.div
                className="flex items-center"
                whileTap={{ scale: 0.98 }}
              >
                <div className="cursor-pointer text-sm bg-gray-100/10 px-2 py-1 rounded gap-4 flex items-center">
                  <span className="opacity-70">Search documentation...</span>
                  <span
                    className="bg-background/60 border border-gray-300/20 px-1 py-0.5 text-xs rounded-md"
                    suppressHydrationWarning
                  >
                    {getShortcutKeys(["mod"])} K
                  </span>
                </div>
              </motion.div>
            </Search>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
