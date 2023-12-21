import type { Metadata } from "next";
import { Kumbh_Sans } from "next/font/google";
import "./globals.css";

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
      <body className={`${kumbh.className} bg-light-grey text-very-dark-blue`}>
        {children}
      </body>
    </html>
  );
}
