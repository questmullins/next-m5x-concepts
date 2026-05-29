import "./globals.css";

export const metadata = {
  title: "M5X Mechanix Concepts",
  description: "Three distinct one-page Next.js concepts for M5X Mechanix."
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
