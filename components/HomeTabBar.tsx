import { productType } from "@/constants/data";
import Link from "next/link";
import React from "react";

interface Props {
  selectedTab: string;
  onTabSelect: (tab: string) => void;
}

const HomeTabBar = ({ selectedTab, onTabSelect }: Props) => {
  return (
    <div className="flex items-center flex-wrap gap-5 justify-between">
      <div className="flex items-center gap-1.5 text-sm font-semibold">
        <div className="flex items-center gap-1.5 md:gap-3">
          {productType?.map((item) => (
            <button
              onClick={() => onTabSelect(item?.title)}
              key={item?.title}
              className={`border border-gray-950/30 px-4 py-1.5 md:px-6 md:py-2 rounded-full hover:bg-gray-900 hover:border-gray-900 hover:text-gray-50 hoverEffect ${selectedTab === item?.title ? "bg-gray-900 text-white border-gray-700" : "bg-shop_light_green/10"}`}
            >
              {item?.title}
            </button>
          ))}
        </div>
      </div>
      <Link
        href={"/san-pham"}
        className="border bg-gray-900 text-gray-50 border-gray-900 px-4 py-1 rounded-full hover:bg-gray-50 hover:text-gray-700 hover:border-gray-700 hoverEffect"
      >
        See all
      </Link>
    </div>
  );
};

export default HomeTabBar;
