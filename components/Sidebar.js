"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";
import { supabase } from "@/lib/supabaseClient";
import {
  LayoutDashboard,
  User,
  FileText,
  Image,
  LogOut,
  Menu
} from "lucide-react";

export default function Sidebar() {
  const [open, setOpen] = useState(true);
  const pathname = usePathname();
  const router = useRouter();

  async function logout() {
    await supabase.auth.signOut();
    router.push("/");
  }

  function Item({ href, icon: Icon, label }) {
    const active = pathname === href;

    return (
      <Link
        href={href}
        className={`flex items-center gap-3 p-3 rounded-lg transition
          ${active
            ? "bg-zinc-800 text-white"
            : "text-zinc-300 hover:bg-zinc-800"}
        `}
      >
        <Icon size={18} />
        {open && <span>{label}</span>}
      </Link>
    );
  }

  return (
    <aside
      className={`bg-zinc-900 border-r border-zinc-800 transition-all duration-300 ${
        open ? "w-64" : "w-16"
      }`}
    >
      <div className="p-4 flex items-center justify-between">
        {open && <span className="font-bold">Briefing IA</span>}
        <button onClick={() => setOpen(!open)}>
          <Menu size={20} />
        </button>
      </div>

      <nav className="px-2 flex flex-col gap-1">
        <Item href="/dashboard" icon={LayoutDashboard} label="Dashboard" />
        <Item href="/dashboard/perfil" icon={User} label="Perfil do Cliente" />
        <Item href="/dashboard/briefing" icon={FileText} label="Briefing" />
        <Item href="/dashboard/midia-ia" icon={Image} label="Imagem / Vídeo IA" />

        <button
          onClick={logout}
          className="flex items-center gap-3 p-3 mt-4 rounded-lg text-zinc-300 hover:bg-zinc-800"
        >
          <LogOut size={18} />
          {open && <span>Sair</span>}
        </button>
      </nav>
    </aside>
  );
}
