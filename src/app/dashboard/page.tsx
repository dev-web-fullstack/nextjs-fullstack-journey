// ========================================
// AULA 1 — FUNDAMENTOS DO NEXT.JS FULLSTACK
// ========================================
//
// Nesta aula aprendemos:
//
// - Estrutura App Router
// - Componentes React
// - Props
// - TypeScript
// - Importações
// - Organização de projeto
// - Renderização dinâmica
// - Renderização de listas
// - Componentes reutilizáveis
// - Navegação com Link
// - Consumo de dados
//
// Esta página funciona como um dashboard
// mostrando:
// - conteúdos aprendidos
// - usuários vindos da API
//
// ========================================


// Importa o componente Link do Next.js
//
// O Link permite navegação SPA
// (Single Page Application)
//
// Diferente da tag <a>,
// ele evita recarregar toda a página
import Link from "next/link";


// Importa ícone da biblioteca lucide-react
//
// Essa biblioteca possui vários ícones SVG
// modernos para aplicações React
import { ArrowLeft } from "lucide-react";


// Importa componente reutilizável de título
//
// O alias @ aponta para a raiz do projeto
// graças à configuração do tsconfig.json
import Title from "@/components/Title";


// Importa dados fake da aplicação
//
// users:
// lista de usuários
//
// lessons:
// lista de conteúdos aprendidos
import {
  users,
  lessons
} from "../../lib/data";


// Página principal do dashboard
//
// No App Router do Next.js,
// todo arquivo page.tsx vira automaticamente
// uma rota.
//
// Exemplo:
//
// app/dashboard/page.tsx
//
// vira:
//
// /dashboard
export default async function DashboardPage() {

  // JSX retornado pela página
  return (

    // Container principal
    <div className="min-h-screen bg-zinc-100 p-6 md:p-10">

      <main className="mx-auto flex max-w-5xl flex-col gap-10">

        {/* Link para voltar à home */}
        <Link
          href="/"
          className="flex items-center gap-3 rounded-xl w-max bg-white p-6 shadow transition hover:scale-[1.02] hover:shadow-lg"
        >

          {/* Ícone SVG */}
          <ArrowLeft className="h-6 w-6" />

          <p className="text-xl font-bold">
            Voltar para home
          </p>

        </Link>

        {/* Seção principal da aula */}
        <section className="space-y-4">

          {/* Componente reutilizável */}
          <Title text="Aula 1 — Fundamentos do Next.js Fullstack com criação de App Router, Componentes React, API Routes e Consumo de API" />

          <p className="max-w-3xl text-base leading-7 text-zinc-600 md:text-lg">
            Nesta primeira aula aprendemos a criar um projeto
            moderno com Next.js, TypeScript e Tailwind CSS,
            além de entender como funcionam componentes,
            rotas, APIs e consumo de dados no frontend.
          </p>

        </section>

        {/* Card mostrando conteúdos aprendidos */}
        <section className="rounded-2xl bg-white p-6 shadow-sm">

          <h2 className="mb-5 text-2xl font-bold text-zinc-800">
            O que aprendemos
          </h2>

          <div className="grid gap-4 md:grid-cols-2">

            {/* 
              .map() percorre arrays

              Para cada item dentro de lessons,
              um novo card será renderizado
            */}
            {lessons.map((lesson) => (

              // key ajuda o React identificar
              // cada elemento da lista
              <div
                key={lesson.id}
                className="rounded-xl border border-zinc-200 p-5"
              >

                {/* Título do conteúdo */}
                <h3 className="mb-2 text-lg font-semibold">
                  {lesson.title}
                </h3>

                {/* Descrição do conteúdo */}
                <p className="text-zinc-600">
                  {lesson.description}
                </p>

              </div>
            ))}

          </div>

        </section>

        {/* Card mostrando usuários */}
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

                {/* ID do usuário */}
                <p className="text-sm text-zinc-500">
                  ID: {user.id}
                </p>

                {/* Nome do usuário */}
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