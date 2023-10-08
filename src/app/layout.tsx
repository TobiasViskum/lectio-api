import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Lectio",
  description: "Made by Tobias T. Viskum",
};

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div>Lectio API 2023</div>
        <p>Get started here:</p>
      </body>
    </html>
  );
}
