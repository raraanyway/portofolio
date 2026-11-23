import "./globals.css";

export const metadata = {
  title: "Muhamad Rafi Ramadhan — Portofolio",
  description: "Portofolio Web & Mobile Developer",
};

export default function RootLayout({ children }) {
  return (
    <html lang="id">
      <body className="antialiased selection:bg-pink-500 selection:text-white">
        {children}
      </body>
    </html>
  );
}