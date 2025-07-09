import type { Metadata } from "next";
// import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

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
          <div>
            <h1>test menu</h1>
          </div>
          <div className="navDropdown">
            <div>
              <h2>products</h2>
            </div>
            <div>
              <h2>products</h2>
            </div>
            <div>
              <h2>products</h2>
            </div>
            <div>
              <h2>products</h2>
            </div>
            <div>
              <h2>products</h2>
            </div>
          </div>
          <div className="regButton">
            <h2>Contact Sales</h2>
            <h2>Log In Sign Up</h2>
          </div>
        </div>
        {children}
      </body>
    </html>
  );
}
