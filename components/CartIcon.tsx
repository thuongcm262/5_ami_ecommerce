"use client";
import useStore from "@/store";
import { ShoppingBag } from "lucide-react";
import Link from "next/link";
import React from "react";

const CartIcon = () => {
  const { items } = useStore();
  return (
    <Link href={"/cart"} className="group relative">
      <ShoppingBag
        className="w-5 h-5 text-gray-950
      hover:text-gray-900
      "
      ></ShoppingBag>
      <span
        className="absolute -top-1 -right-1
         bg-gray-700 text-white h-3.5 w-3.5 
         rounded-full text-xs font-semibold flex 
         items-center justify-center"
      >
        {items?.length ? items?.length : 0}
      </span>
    </Link>
  );
};

export default CartIcon;
