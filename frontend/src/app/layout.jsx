import "./globals.css";

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
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
