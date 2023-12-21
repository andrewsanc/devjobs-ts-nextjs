import type { Metadata } from "next";
import { Kumbh_Sans } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";

const kumbh = Kumbh_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "DevJobs | Job Board",
  description: "Job board for developers",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body
        className={`${kumbh.className} bg-light-grey text-very-dark-blue relative h-[500px]`}
      >
        <Header />
        {children}
      </body>
    </html>
  );
}
