import { cn } from "@/lib/utils";
import Link from "next/link";
import React from "react";

const Logo = ({ className }: { className?: string }) => {
  return (
    <Link href={"/"}>
      <h2
        className={cn(
          "text-4xl text-gray-950 font-black tracking-wider uppercase hover:text-gray-700 hoverEffect group font-sans",
          className
        )}
      >
        Am{""}
        <span
          className="text-gray-700
        group-hover:text-gray-950 hoverEffect"
        >
          i
        </span>
      </h2>
    </Link>
  );
};

export default Logo;
