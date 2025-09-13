import { Facebook, Github, Youtube } from "lucide-react";

export const headerData = [
  { title: "Home", href: "/" },
  { title: "Shop", href: "/shop" },
  { title: "Blog", href: "/blog" },
  { title: "Contact", href: "/contact" },
  { title: "Deal", href: "/deal" },
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
  { title: "About Us", href: "/about-us" },
  { title: "Contact", href: "/contact" },
  { title: "Terms & Conditions", href: "/terms" },
  { title: "Privacy Policy", href: "/privacy-policy" },
  { title: "FAQ", href: "/faq" },
  { title: "Help", href: "/help" },
];

// có thể lấy từ database lên
export const categoriesData = [
  { title: "SmartPhone", href: "smartphone" },
  { title: "Laptop", href: "laptop" },
  { title: "SmartWatch", href: "smartwatch" },
];

export const productType = [
  { title: "Gadget", value: "gadget" },
  { title: "Appliances", value: "appliances" },
  { title: "Refrigerators", value: "refrigerators" },
  { title: "Others", value: "others" },
];
