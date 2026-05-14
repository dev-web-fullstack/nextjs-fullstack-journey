import Title from "../../components/Title";

import { users, lessons } from "../../lib/data";

export default async function DashboardPage() {
  return (
    <div className="min-h-screen bg-zinc-100 p-6 md:p-10">

      <main className="mx-auto flex max-w-5xl flex-col gap-10">

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