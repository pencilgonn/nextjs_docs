"use client";

import { useCopyToClipboard } from "@/hooks/useCopyToClipboard";
import { cn } from "@/lib/utils";
import { Check, Copy as CopyIcon } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const Copy: React.FC<{ content: string }> = ({ content }) => {
  const [isCopy, setIsCopy] = useState(false);
  const [_, copy] = useCopyToClipboard();
  const timeId = useRef<NodeJS.Timeout>(null);

  const handleCopy = async () => {
    await copy(content).then(() => setIsCopy(true));
  };

  useEffect(() => {
    if (isCopy) {
      timeId.current = setTimeout(() => {
        setIsCopy(false);
      }, 5000);
    }
    return () => {
      if (timeId.current) {
        clearTimeout(timeId.current);
      }
    };
  }, [isCopy]);

  return (
    <span
      onClick={handleCopy}
      className={cn(
        "cursor-pointer size-7 flex items-center justify-center rounded-md hover:bg-gray-300/15",
        isCopy && "pointer-events-none"
      )}
    >
      {isCopy ? <Check size={14} /> : <CopyIcon size={14} />}
    </span>
  );
};

export default Copy;
