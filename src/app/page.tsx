import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <div className="h-dvh flex flex-col items-center justify-center text-7xl font-bold">
      <p>The Docs by pencilgonn</p>
      <Link href="/docs">
        <Button className="border border-gray-300/20 mt-4 cursor-pointer">
          Read Docs
          <ArrowUpRight />
        </Button>
      </Link>
    </div>
  );
}
