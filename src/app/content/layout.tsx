import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Artigos",
  description: "Todos os meus artigos e conteúdos",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
