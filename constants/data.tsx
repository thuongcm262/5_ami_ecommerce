import { Facebook, Github, Youtube } from "lucide-react";

export const headerData = [
  { title: "Trang chủ", href: "/" },
  { title: "Sản phẩm", href: "/san-pham" },
  { title: "Tin tức", href: "/tin-tuc" },
  { title: "Liên hệ", href: "/lien-he" },
  { title: "Ưu đãi", href: "/uu-dai" },
];

export const socialMediaData = [
  {
    title: "Youtube",
    href: "https://www.youtube.com/@thuongcm262",
    icon: <Youtube></Youtube>,
  },
  {
    title: "Facebook",
    href: "https://www.youtube.com/@thuongcm262",
    icon: <Facebook></Facebook>,
  },
  {
    title: "Github",
    href: "https://www.youtube.com/@thuongcm262",
    icon: <Github></Github>,
  },
];

export const quickLinksData = [
  { title: "Về chúng tôi", href: "/ve-chung-toi" },
  { title: "Liên hệ", href: "/lien-he" },
  { title: "Điều khoản & Điều kiện", href: "/dieu-khoan" },
  { title: "Chính sách bảo mật", href: "/chinh-sach-bao-mat" },
  { title: "Câu hỏi thường gặp", href: "/cau-hoi-thuong-gap" },
  { title: "Trợ giúp", href: "/tro-giup" },
];

// có thể lấy từ database lên
export const categoriesData = [
  { title: "Điện thoại", href: "dien-thoai" },
  { title: "Máy tính xách tay", href: "may-tinh-xach-tay" },
  { title: "Đồng hồ thông minh", href: "dong-ho-thong-minh" },
];

export const productType = [
  { title: "Gadget", value: "gadget" },
  { title: "Appliances", value: "appliances" },
  { title: "Refrigerators", value: "refrigerators" },
  { title: "Others", value: "others" },
];
