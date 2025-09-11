import React from "react";
import Container from "./Container";
import FooterTop from "./FooterTop";
import Logo from "./Logo";
import SocialMedia from "./SocialMedia";
import { SubText, SubTitle } from "./ui/text";
import { categoriesData, quickLinksData } from "@/constants/data";
import Link from "next/link";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
const Footer = () => {
  return (
    <footer className="bg-white border-t">
      <Container>
        <FooterTop />
        <div className="py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="space-y-4">
            <Logo />
            <SubText>
              Khám phá bộ sưu tập đồ nội thất được tuyển chọn kỹ lưỡng tại Ami
              OT, kết hợp phong cách và sự thoải mái để nâng tầm không gian sống
              của bạn.
            </SubText>
            <SocialMedia
              className="text-darkColor/60"
              iconClassName="border-darkColor/60 hover:border-gray-400 hover:text-gray-700"
              tooltipClassName="bg-gray-950 text-white"
            />
          </div>
          <div>
            <SubTitle>Các đường dẫn</SubTitle>
            <ul className="space-y-3 mt-4">
              {quickLinksData?.map((item) => (
                <li key={item?.title}>
                  <Link
                    href={item?.href}
                    className="hover:text-gray-700 hoverEffect font-medium"
                  >
                    {item?.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <SubTitle>Danh mục</SubTitle>
            <ul className="space-y-3 mt-4">
              {categoriesData?.map((item) => (
                <li key={item?.title}>
                  <Link
                    href={`/danh-muc/${item?.href}`}
                    className="hover:text-gray-700 hoverEffect font-medium"
                  >
                    {item?.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="space-y-4">
            <SubTitle>Tin tức</SubTitle>
            <SubText>
              Đăng ký nhận bản tin của chúng tôi để nhận thông tin cập nhật và
              ưu đãi độc quyền
            </SubText>
            <form className="space-y-3">
              <Input placeholder="Nhâp email của bạn" type="email" required />
              <Button className="w-full">Đăng ký</Button>
            </form>
          </div>
        </div>
        <div className="py-6 border-t text-center text-sm text-gray-600">
          <div>
            © {new Date().getFullYear()} <Logo className="text-sm" />. Mọi quyền
            được bảo lưu.
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
