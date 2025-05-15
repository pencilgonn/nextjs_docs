import Link from "next/link";

const Footer = () => {
  return (
    <div className="border-t border-gray-300/20">
      <div className="max-w-[1232px] w-full px-4 mx-auto text-center py-2">
        <span className="text-white/50 text-sm">
          Copyright © 2025{" "}
          <Link
            href="https://github.com/pencilgonn"
            target="_blank"
            className="underline hover:text-primary transition-[color]"
          >
            pencilgonn
          </Link>
          . Built with{" "}
          <Link href="https://nextjs.org" target="_blank">
            NextJS
          </Link>
          .
        </span>
      </div>
    </div>
  );
};

export default Footer;
