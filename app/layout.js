import "./globals.css";

export const metadata = {
  title: "Briefing IA",
  description: "Gere estratégias de conteúdo com IA",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body className="bg-zinc-950 text-zinc-100">
        {children}
      </body>
    </html>
  );
}
