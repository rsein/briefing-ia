"use client";

import { useState } from "react";
import { supabase } from "@/lib/supabaseClient";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [msg, setMsg] = useState("");

  async function handleLogin(e) {
    e.preventDefault();
    setLoading(true);
    setMsg("");

    const { error } = await supabase.auth.signInWithOtp({
      email,
      options: {
        emailRedirectTo: `${location.origin}/dashboard`,
      },
    });

    if (error) {
      setMsg("Erro ao enviar email");
    } else {
      setMsg("Confira seu email para entrar 🚀");
    }

    setLoading(false);
  }

  return (
    <div className="min-h-screen flex items-center justify-center px-6">
      <form
        onSubmit={handleLogin}
        className="bg-zinc-900 p-8 rounded-2xl w-full max-w-md"
      >
        <h1 className="text-2xl font-bold mb-6">Entrar</h1>

        <input
          type="email"
          placeholder="Seu email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-3 rounded-lg bg-zinc-800 border border-zinc-700 mb-4"
        />

        <button
          disabled={loading}
          className="w-full bg-white text-black py-3 rounded-lg font-semibold"
        >
          {loading ? "Enviando..." : "Entrar com email"}
        </button>

        {msg && <p className="text-sm text-zinc-400 mt-4">{msg}</p>}
      </form>
    </div>
  );
}
