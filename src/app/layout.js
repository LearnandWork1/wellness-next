
import "./globals.css";

export const metadata = {
  title: "VidyaNiketan - Chindcare & Kids School Next.js Template",
  description: "VidyaNiketan - Chindcare & Kids School Next.js and Tailwind CSS Template",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
