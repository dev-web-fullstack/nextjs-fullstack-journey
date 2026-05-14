import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-zinc-100 p-10">
      <main className="mx-auto flex max-w-4xl flex-col gap-10">

        <div className="space-y-4">
          <h1 className="text-5xl font-bold text-zinc-900">
            Jornada Fullstack
          </h1>

          <p className="max-w-2xl text-lg text-zinc-600">
            Projeto de estudos com Next.js, TypeScript, APIs,
            banco de dados, autenticação e arquitetura fullstack
            moderna.
          </p>
        </div>

        <div className="space-y-4">
          <h2 className="text-2xl font-semibold">
            Aulas e Projetos
          </h2>

          <div className="grid gap-4">

            <Link
              href="/dashboard"
              className="rounded-xl bg-white p-6 shadow transition hover:scale-[1.02] hover:shadow-lg"
            >
              <h3 className="text-xl font-bold">
                Aula 1 — Dashboard
              </h3>

              <p className="mt-2 text-zinc-600">
                Primeira página criada com App Router,
                componentes e consumo de API.
              </p>
            </Link>

          </div>
        </div>

      </main>
    </div>
  );
}