import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Lectio API",
  description: "Lectio API is an API for the danish website lectio.dk.",
  keywords: "Lectio, API, LectioAPI, lectio.dk, 2023",
  authors: { name: "Tobias Tranberg Viskum", url: "https://github.com/TobiasViskum" },
  creator: "Tobias Tranberg Viskum",
  applicationName: "Lectio API",
  category: "API",
};

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
