import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";

const TocDocs: React.FC<{
  toc: { text: string; id: string; level: number }[];
}> = ({ toc }) => {
  const pathname = usePathname();

  if (pathname == "/docs") return null;

  return (
    <div className="w-[224px] flex-shrink-0">
      <p className="text-sm font-semibold">On this page</p>
      <div className="mt-4">
        {toc.map((item, index) => (
          <div key={index} style={{ paddingLeft: item.level + item.level * 8 }}>
            <Link
              href={`#${item.id}`}
              className="text-white/65 hover:text-white/90 text-sm transition-[color]"
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
