import React, { FC } from "react";
import Logo from "./Logo";
import { X } from "lucide-react";

interface SideBarProps {
  isOpen: boolean;
  onClose: () => void;
}
const SideMenu: FC<SideBarProps> = ({ isOpen, onClose }) => {
  return (
    <div
      onClick={onClose} // bắt sự kiện click overlay
      className={`fixed inset-y-0 left-0 z-50 h-screen
        w-full bg-black/10 shadow-xl text-white
    ${isOpen ? "translate-x-0" : "-translate-x-full"} hoverEffect
  `}
    >
      <div
        onClick={(e) => e.stopPropagation()} // chặn sự kiện nổi bọt
        className="w-3/4 min-w-48 max-w-96 bg-gray-400 h-screen
      p-10 border-r border-r-gray-950 flex flex-col gap-6"
      >
        <div className="flex items-center justify-between">
          <Logo className="text-white" />
          <button
            onClick={onClose}
            className="flex items-center justify-center w-8 h-8 rounded-full hover:text-white hover:bg-gray-900"
          >
            <X />
          </button>
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default SideMenu;
