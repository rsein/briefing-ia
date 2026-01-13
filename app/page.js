import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center text-center px-6">
      <h1 className="text-4xl md:text-6xl font-bold mb-6">
        Briefing de Conteúdo com IA
      </h1>

      <p className="text-zinc-400 max-w-xl mb-10">
        Transforme respostas simples em estratégias completas de conteúdo digital.
      </p>

      <div className="flex gap-4">
        <Link
          href="/login"
          className="bg-white text-black px-8 py-4 rounded-xl font-semibold hover:bg-zinc-200 transition"
        >
          Começar agora
        </Link>
      </div>
    </main>
  );
}
