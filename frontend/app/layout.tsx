import type { Metadata } from "next";
import "./globals.css";
import NavBar from "@/layouts/NavBar";
import { Toaster } from "react-hot-toast";


export const metadata: Metadata = {
  title: "Routine App",
  description: "Developed By RG",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={''}
    >
      <body className="min-h-full flex flex-col bg-[#F5EFE6]">
        <Toaster position="top-center"/>
        <nav>
          <NavBar />
        </nav>
        <section className="mb-20">
          {children}
        </section>
      </body>
    </html>
  );
}
