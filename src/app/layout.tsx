import type { Metadata } from "next";
import { Prompt, Kanit } from "next/font/google";
import "./globals.css";

const prompt = Prompt({
  weight: ['300', '400', '500', '600', '700'],
  variable: "--font-prompt",
  subsets: ["latin", "thai"],
});

const kanit = Kanit({
  weight: ['300', '400', '500', '600', '700'],
  variable: "--font-kanit",
  subsets: ["latin", "thai"],
});

export const metadata: Metadata = {
  title: "CheckCredit Thailand - เช็คเครดิตก่อนโอน",
  description: "เว็บกลางเช็คเครดิตที่พัก โรงแรม พูลวิลล่า รีสอร์ท",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="th">
      <body className={`${prompt.variable} ${kanit.variable}`}>
        {children}
      </body>
    </html>
  );
}
