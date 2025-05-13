import { ArrowLeftIcon, ArrowRightIcon } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navigate: React.FC<{ flatArrRoutes: any[]; currentRoute: any }> = ({
  flatArrRoutes,
  currentRoute,
}) => {
  const pathname = usePathname();

  if (pathname == "/docs") return null;

  return (
    <div className="mt-10 pt-10 border-t border-t-gray-300/20 grid grid-cols-2 gap-6">
      {(() => {
        const index = flatArrRoutes.findIndex((r) => r.to === currentRoute.to);
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
        const index = flatArrRoutes.findIndex((r) => r.to === currentRoute.to);
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
  );
};

export default Navigate;
