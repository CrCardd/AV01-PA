import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Link from "next/link";
import { ROUTES } from "@/constants/routes";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-pallete04`}
      >

        <header className="bg-pallete01 h-[7vh] flex justify-around items-center fixed w-screen p-[10px] top-0">
          <Link href={ROUTES.home} className="text-white font-bold bg-pallete05 p-[8px] rounded-[10px]">Tech</Link >
          <Link href={ROUTES.media} className="text-white font-bold bg-pallete05 p-[8px] rounded-[10px]">Average</Link >
          <Link href={ROUTES.imc} className="text-white font-bold bg-pallete05 p-[8px] rounded-[10px]">IMC</Link >
        </header>

        {children}
      </body>
    </html>
  );
}
