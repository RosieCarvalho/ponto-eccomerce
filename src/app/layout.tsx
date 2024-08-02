import type { Metadata } from "next";
import { Lato } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";
const lato = Lato({
  subsets: ["latin"],
  weight: ["100", "300", "700", "900"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: "Ponto Eccomerce",
  description: "app de venda",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={lato.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
