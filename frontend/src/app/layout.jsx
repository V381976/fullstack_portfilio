import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata = {
  title: "Devendra Saini | Portfolio",
  description:
    "Full-stack developer portfolio — React, Next.js, Node.js, and modern web apps.",
  icons: {
    icon: "/images/web_developer.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.variable} antialiased`}>{children}</body>
    </html>
  );
}
