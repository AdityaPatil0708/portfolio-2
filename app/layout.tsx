import type { Metadata } from "next";
import { Geist, Geist_Mono, Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { ThemeProvider } from "next-themes";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: "Aditya Patil",
  icons: {
    icon: "/favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      suppressHydrationWarning
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${poppins.variable} h-full antialiased`}
    >
      <body className="min-h-screen font-poppins">
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false}>
          <div className="relative min-h-screen overflow-x-hidden transition-colors bg-white dark:bg-slate-950 text-[#4a4a4a] dark:text-zinc-100">
            <div className="pointer-events-none absolute inset-0 overflow-hidden">
              <div className="absolute -top-24 -left-20 h-60 w-50 rounded-full bg-[#443da3]/18 blur-3xl" />
              <div className="absolute -bottom-24 -right-20 h-60 w-50 rounded-full bg-[#443da3]/12 blur-3xl" />
              <div className="absolute bottom-0 left-1/5 h-20 w-130 rounded-full bg-[#443da3]/10 blur-3xl" />
              <div className="absolute top-0 right-1/5 h-20 w-130 rounded-full bg-[#443da3]/10 blur-3xl" />
            </div>
            <div className="relative z-10 mx-auto flex min-h-screen w-full max-w-2xl flex-col py-35">
              <Navbar />
              <main>{children}</main>
              <Footer />
            </div>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}