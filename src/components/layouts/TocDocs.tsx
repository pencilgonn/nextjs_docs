import { useActiveHeading } from "@/hooks/useActiveHeading";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";

const TocDocs: React.FC<{
  toc: { text: string; id: string; level: number }[];
}> = ({ toc }) => {
  const pathname = usePathname();
  const activeId = useActiveHeading(toc.map((item) => item.id));

  if (pathname == "/docs") return null;

  return (
    <div className="w-[224px] flex-shrink-0 sticky top-[105px]">
      <p className="text-sm font-semibold">On this page</p>
      <div className="mt-4">
        {toc.map((item, index) => (
          <div key={index} style={{ paddingLeft: item.level + item.level * 8 }}>
            <Link
              href={`#${item.id}`}
              className={cn(
                "text-white/65 hover:text-white/90 text-sm transition-[color]",
                activeId == item.id && "text-white font-semibold"
              )}
            >
              {item.text}
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TocDocs;
