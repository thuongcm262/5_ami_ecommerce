"use client";
import { AlignLeft } from "lucide-react";
import React, { useState } from "react";
import SideMenu from "./SideMenu";

const HeaderMobileMenu = () => {
  const [isSideBarOpen, setIsSideBarOpen] = useState(false);

  return (
    <>
      <button onClick={() => setIsSideBarOpen(!isSideBarOpen)}>
        <AlignLeft
          className="hover:text-gray-900
        hoverEffect md:hidden hover:cursor-pointer
        "
        ></AlignLeft>
      </button>
      <div className="md:hidden">
        <SideMenu
          isOpen={isSideBarOpen}
          onClose={() => setIsSideBarOpen(false)}
        ></SideMenu>
      </div>
    </>
  );
};

export default HeaderMobileMenu;
