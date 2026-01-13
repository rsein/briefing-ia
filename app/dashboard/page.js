import Link from "next/link";

export default function DashboardPage() {
  return (
    <div className="flex flex-col items-center justify-center h-full text-center">
      <h1 className="text-3xl font-bold mb-10">
        O que você deseja criar?
      </h1>

      <div className="grid md:grid-cols-3 gap-6 w-full max-w-5xl">
        <Link
          href="/dashboard/perfil"
          className="bg-zinc-900 border border-zinc-800 p-8 rounded-2xl hover:bg-zinc-800 transition"
        >
          <h2 className="text-xl font-semibold mb-2">Perfil do Cliente</h2>
          <p className="text-zinc-400 text-sm">
            Defina o perfil estratégico do cliente
          </p>
        </Link>

        <Link
          href="/dashboard/briefing"
          className="bg-zinc-900 border border-zinc-800 p-8 rounded-2xl hover:bg-zinc-800 transition"
        >
          <h2 className="text-xl font-semibold mb-2">Briefing de Conteúdo</h2>
          <p className="text-zinc-400 text-sm">
            Gere ideias e estratégias de conteúdo
          </p>
        </Link>

        <Link
          href="/dashboard/midia-ia"
          className="bg-zinc-900 border border-zinc-800 p-8 rounded-2xl hover:bg-zinc-800 transition"
        >
          <h2 className="text-xl font-semibold mb-2">Imagem / Vídeo IA</h2>
          <p className="text-zinc-400 text-sm">
            Crie mídia com inteligência artificial
          </p>
        </Link>
      </div>
    </div>
  );
}
