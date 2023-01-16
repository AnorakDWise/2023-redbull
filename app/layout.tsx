import "../styles/globals.css";
import { IBM_Plex_Sans } from "@next/font/google";

const ibm = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700"],
  preload: true,
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head />
      <body className={ibm.className + " m-auto"}>{children}</body>
    </html>
  );
}
