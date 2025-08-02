import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Sgrids | Solvyn",
  description: "One Intelligent Platform For All Your Energy Operations",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      
    >
      <body className="bg-white font-sans">
        {children}
      </body>
    </html>
  );
}
