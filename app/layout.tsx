import "./globals.css";
import Navbar from "../components/Navbar";

export const metadata = {
  title: "IRA Tours & Travels",
  description: "Plan your journey with IRA Tours & Travels",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main className="min-h-screen">{children}</main>
      </body>
    </html>
  );
}
