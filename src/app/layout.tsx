// import { Geist, Geist_Mono } from "next/font/google";
import type { Metadata } from "next";
import Image from "next/image";
import logo from "../../public/assets/logo.svg";
import Link from "next/link";

import "./globals.css";
// console.log("logo=", logo);
// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

export const metadata: Metadata = {
  title: "ClickUp project frontEnd",
  description: "ClickUp by Shaban",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div className="navbarContainer">
          <div className="navbarContainerLogo">
            <Link href="/">
              <Image src={logo} alt="clickUp" height={23} width={94} />
              <span className="navbarContainerLogoText">
                The everything app, for work.
              </span>
            </Link>
          </div>
          <div className="navbarContainerDropdown">
            <p>Products</p>
            <p>Solutions</p>
            <p>Resources</p>
            <p>Pricing</p>
          </div>
          <div className="navbarContainerContactSale">
            <p>Contact Sales</p>
          </div>
          <div className="navbarContainerReg">
            <p>login/singup area</p>
          </div>
        </div>
        {children}
      </body>
    </html>
  );
}
