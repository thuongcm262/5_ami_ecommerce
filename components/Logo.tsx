import { cn } from "@/lib/utils";
import Link from "next/link";
import React from "react";

const Logo = ({
  className,
  spanDesign,
}: {
  className?: string;
  spanDesign?: string;
}) => {
  return (
    <Link href={"/"} className="inline-flex">
      <h2
        className={cn(
          "text-4xl text-gray-950 font-black tracking-wider uppercase hover:text-gray-700 hoverEffect group font-sans",
          className
        )}
      >
        Am{""}
        <span
          className={cn(
            "text-gray-700 group-hover:text-gray-950 hoverEffect",
            spanDesign
          )}
        >
          i
        </span>
      </h2>
    </Link>
  );
};

export default Logo;
