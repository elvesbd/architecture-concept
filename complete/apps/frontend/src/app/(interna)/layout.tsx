"use client";
import Page from "@/components/shared/Page";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <Page>{children}</Page>;
}
