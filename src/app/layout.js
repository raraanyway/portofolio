import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Ini Metadata yang benar (gabungan judul dan paksaan logo)
export const metadata = {
  title: "Portofolio — Muhamad Rafi Ramadhan",
  description: "Mahasiswa S1 Sistem Informasi.",
  icons: {
    icon: '/logo.png', // Pastikan gambar logo.png sudah ada di folder public
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
} 