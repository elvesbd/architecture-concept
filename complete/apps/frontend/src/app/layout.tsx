import "./globals.css";
import "@mantine/core/styles.css";
import { Inter } from "next/font/google";
import { MantineProvider } from "@mantine/core";
import type { Metadata } from "next";
import { AuthProvider } from "@/data/context/authContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Plataforma EAD",
  description: "Plataforma EAD com arquitetura limpa",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={inter.className}>
        <MantineProvider defaultColorScheme="dark">
          <AuthProvider>{children}</AuthProvider>
        </MantineProvider>
      </body>
    </html>
  );
}
