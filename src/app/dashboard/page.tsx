// AULA 1

import Link from "next/link";
import Title from "../../components/Title";

import { users, lessons } from "../../lib/data";

export default async function DashboardPage() {
  return (
    <div className="min-h-screen bg-zinc-100 p-6 md:p-10">

      <main className="mx-auto flex max-w-5xl flex-col gap-10">

        <Link
          href="/"
          className="flex items-center gap-3 rounded-xl w-max bg-white p-6 shadow transition hover:scale-[1.02] hover:shadow-lg"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            className="h-6 w-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15 19l-7-7 7-7"
            />
          </svg>

          <p className="text-xl font-bold">
            Voltar para home
          </p>
        </Link>

        <section className="space-y-4">

          <Title text="Aula 1 — Fundamentos do Next.js Fullstack" />

          <p className="max-w-3xl text-base leading-7 text-zinc-600 md:text-lg">
            Nesta primeira aula aprendemos a criar um projeto
            moderno com Next.js, TypeScript e Tailwind CSS,
            além de entender como funcionam componentes,
            rotas, APIs e consumo de dados no frontend.
          </p>

        </section>

        <section className="rounded-2xl bg-white p-6 shadow-sm">

          <h2 className="mb-5 text-2xl font-bold text-zinc-800">
            O que aprendemos
          </h2>

          <div className="grid gap-4 md:grid-cols-2">

            {lessons.map((lesson) => (
              <div
                key={lesson.id}
                className="rounded-xl border border-zinc-200 p-5"
              >
                <h3 className="mb-2 text-lg font-semibold">
                  {lesson.title}
                </h3>

                <p className="text-zinc-600">
                  {lesson.description}
                </p>
              </div>
            ))}

          </div>

        </section>

        <section className="rounded-2xl bg-white p-6 shadow-sm">

          <h2 className="mb-5 text-2xl font-bold text-zinc-800">
            Usuários vindos da API
          </h2>

          <div className="grid gap-4 md:grid-cols-2">

            {users.map((user) => (
              <div
                key={user.id}
                className="rounded-xl border border-zinc-200 bg-zinc-50 p-5"
              >
                <p className="text-sm text-zinc-500">
                  ID: {user.id}
                </p>

                <h3 className="mt-1 text-lg font-semibold">
                  {user.name}
                </h3>
              </div>
            ))}

          </div>

        </section>

      </main>

    </div>
  );
}