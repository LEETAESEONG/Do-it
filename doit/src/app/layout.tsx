import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "../components/navbar/navbar";

export const metadata: Metadata = {
  title: "Do It",
  description: "할 일 목록을 관리하는 To Do 서비스",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <div className="px-6 desktop:px-90">{children}</div>
      </body>
    </html>
  );
}
