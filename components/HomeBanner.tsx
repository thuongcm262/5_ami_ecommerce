import React from "react";
import { Title } from "./ui/text";
import Link from "next/link";
import Image from "next/image";
import { banner_1 } from "@/images";

const HomeBanner = () => {
  return (
    <div className="py-16 md:py-0 bg-gray-300 rounded-lg px-10 lg:px-24 flex items-center justify-between">
      <div className="space-y-5">
        <Title>
          Giảm giá tới 50% <br />
          Các sản phẩm tai nghe
        </Title>
        <Link
          href={"/shop"}
          className="bg-gray-950/90 text-white/90 px-5 py-2 rounded-md text-sm font-semibold hover:text-white hover:bg-gray-900 hoverEffect"
        >
          Mua ngay
        </Link>
      </div>
      <div>
        <Image
          src={banner_1}
          alt="banner_1"
          className="hidden md:inline-flex w-96"
        />
      </div>
    </div>
  );
};

export default HomeBanner;
