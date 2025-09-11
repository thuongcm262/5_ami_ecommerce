"use client";
import React, { FC } from "react";
import Logo from "./Logo";
import { X } from "lucide-react";
import { headerData } from "@/constants/data";
import Link from "next/link";
import { usePathname } from "next/navigation";
import SocialMedia from "./SocialMedia";
import { useOutsideClick } from "@/hooks";

interface SideBarProps {
  isOpen: boolean;
  onClose: () => void;
}
const SideMenu: FC<SideBarProps> = ({ isOpen, onClose }) => {
  const pathname = usePathname();
  const sidebarRef = useOutsideClick<HTMLDivElement>(onClose);
  return (
    <div
      className={`fixed inset-y-0 left-0 z-50 h-screen
        w-full bg-black/10 shadow-xl text-white
    ${isOpen ? "translate-x-0" : "-translate-x-full"} hoverEffect
  `}
    >
      <div
        ref={sidebarRef}
        className="w-3/4 min-w-48 max-w-96 bg-gray-950 h-screen
      p-10 border-r border-r-gray-950 flex flex-col gap-6"
      >
        <div className="flex items-center justify-between">
          <Logo
            className="text-gray-50"
            spanDesign="group-hover:text-gray-50"
          />
          <button
            onClick={onClose}
            className="flex items-center justify-center w-8 h-8 rounded-full hover:text-white hover:bg-gray-900"
          >
            <X />
          </button>
        </div>
        <div
          className="
        flex flex-col space-y-3.5
        font-semibold tracking-wide
        "
        >
          {headerData?.map((item) => (
            <Link
              key={item?.title}
              href={item?.href}
              className={`hover:text-gray-300 hoverEffect
                ${pathname === item?.href && "text-gray-700"}
                `}
            >
              {item?.title}
            </Link>
          ))}
        </div>
        <SocialMedia></SocialMedia>
      </div>
    </div>
  );
};

export default SideMenu;
