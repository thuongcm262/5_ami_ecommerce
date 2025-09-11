import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ClerkProvider } from "@clerk/nextjs";
import { viVN } from "@clerk/localizations"; // <- import gói ngôn ngữ
export const metadata: Metadata = {
  title: {
    template: "%s - Ami online store",
    default: "Ami online store",
  },
  description:
    "Chào mừng bạn đến với cửa hàng trực tuyến của Ami, hmm... cái đếch gì cũng có!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider localization={viVN}>
      <html lang="en">
        <body className="font-poppins antialiased">
          <Header></Header>
          {children}
          <Footer></Footer>
        </body>
      </html>
    </ClerkProvider>
  );
}
