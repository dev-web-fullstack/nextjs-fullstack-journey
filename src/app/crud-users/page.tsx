// AULA 2 - ETAPA 1


"use client";

// Importa componente de navegação do Next.js
import Link from "next/link";

// Importa hooks do React
import { useEffect, useState } from "react";

// Importa componente reutilizável de título
import Title from "../../components/Title";

// Importa tipagem User
import { User } from "../../types/user";

export default function CrudUsersPage() {

  // Estado da lista de usuários
  const [users, setUsers] = useState<User[]>([]);

  // Estado do input de criação
  const [name, setName] = useState("");

  // Estado que controla qual usuário está sendo editado
  const [editingId, setEditingId] =
    useState<number | null>(null);

  // Estado do nome durante edição
  const [editingName, setEditingName] =
    useState("");

  // Estado de loading
  const [loading, setLoading] = useState(false);

  // Estado de mensagens de erro
  const [error, setError] = useState("");

  // Busca usuários na API
  async function fetchUsers() {

    const response = await fetch(
      "/api/crud-users"
    );

    const data = await response.json();

    // Atualiza estado users
    setUsers(data);
  }

  // Cria novo usuário
  async function createUser() {

    // Limpa erro anterior
    setError("");

    // Validação
    if (!name.trim()) {
      setError("Digite um nome válido.");
      return;
    }

    // Ativa loading
    setLoading(true);

    // Requisição POST
    await fetch("/api/crud-users", {
      method: "POST",

      headers: {
        "Content-Type": "application/json"
      },

      body: JSON.stringify({
        name
      })
    });

    // Limpa input
    setName("");

    // Atualiza usuários
    await fetchUsers();

    // Finaliza loading
    setLoading(false);
  }

  // Remove usuário
  async function deleteUser(id: number) {

    setLoading(true);

    // Requisição DELETE
    await fetch(`/api/crud-users/${id}`, {
      method: "DELETE"
    });

    // Atualiza lista
    await fetchUsers();

    setLoading(false);
  }

  // Atualiza usuário
  async function updateUser(id: number) {

    setError("");

    // Validação
    if (!editingName.trim()) {
      setError("Digite um nome válido.");
      return;
    }

    setLoading(true);

    // Requisição PUT
    await fetch(`/api/crud-users/${id}`, {
      method: "PUT",

      headers: {
        "Content-Type": "application/json"
      },

      body: JSON.stringify({
        name: editingName
      })
    });

    // Finaliza edição
    setEditingId(null);

    setEditingName("");

    // Atualiza lista
    await fetchUsers();

    setLoading(false);
  }

  // Executa quando página carrega
  useEffect(() => {
    fetchUsers();
  }, []);

  // Conteúdos aprendidos
  const learnedTopics = [
    {
      id: 1,
      title: "Client Components",
      description:
        "Aprendemos a utilizar o 'use client' para criar páginas interativas."
    },

    {
      id: 2,
      title: "CRUD Completo",
      description:
        "Implementamos GET, POST, PUT e DELETE."
    },

    {
      id: 3,
      title: "Estado React",
      description:
        "Utilizamos useState para controlar dados dinâmicos."
    },

    {
      id: 4,
      title: "Formulários",
      description:
        "Criamos inputs controlados e validações."
    },

    {
      id: 5,
      title: "Renderização Condicional",
      description:
        "Mostramos diferentes interfaces durante edição."
    },

    {
      id: 6,
      title: "Arquitetura Fullstack",
      description:
        "Frontend e backend trabalhando juntos."
    }
  ];

  // Próximos conteúdos
  const nextTopics = [
    {
      id: 1,
      title: "PostgreSQL",
      description:
        "Vamos integrar banco de dados real."
    },

    {
      id: 2,
      title: "Prisma ORM",
      description:
        "Aprenderemos ORM moderno para TypeScript."
    },

    {
      id: 3,
      title: "Autenticação",
      description:
        "Login e proteção de rotas."
    },

    {
      id: 4,
      title: "Deploy Fullstack",
      description:
        "Aplicação completa em produção."
    }
  ];

  return (

    // Container principal
    <div className="min-h-screen bg-zinc-100 p-6 md:p-10">

      <main className="mx-auto flex max-w-5xl flex-col gap-10">

        {/* Botão voltar */}
        <Link
          href="/"
          className="flex w-max items-center gap-3 rounded-xl bg-white p-6 shadow transition hover:scale-[1.02] hover:shadow-lg"
        >

          {/* Ícone */}
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

        {/* Cabeçalho */}
        <section className="space-y-4">

          <Title text="Aula 2 — CRUD Completo com React e Next.js" />

          <p className="max-w-3xl text-base leading-7 text-zinc-600 md:text-lg">
            Nesta aula criamos um CRUD completo utilizando
            React, estado, APIs REST e arquitetura fullstack.
          </p>

        </section>

        {/* Formulário */}
        <section className="rounded-2xl bg-white p-6 shadow-sm">

          <h2 className="mb-5 text-2xl font-bold">
            Criar Usuário
          </h2>

          <div className="flex flex-col gap-4 md:flex-row">

            {/* Input controlado */}
            <input
              type="text"
              placeholder="Digite um nome"

              value={name}

              onChange={(event) =>
                setName(event.target.value)
              }

              className="h-12 flex-1 rounded-xl border border-zinc-300 px-4 outline-none"
            />

            {/* Botão criar */}
            <button
              onClick={createUser}

              className="h-12 rounded-xl bg-black px-6 font-medium text-white transition hover:opacity-80"
            >
              {
                loading
                  ? "Carregando..."
                  : "Criar Usuário"
              }
            </button>

          </div>

          {/* Mensagem erro */}
          {
            error && (
              <p className="mt-4 text-sm text-red-500">
                {error}
              </p>
            )
          }

        </section>

        {/* Lista usuários */}
        <section className="rounded-2xl bg-white p-6 shadow-sm">

          <h2 className="mb-5 text-2xl font-bold">
            Usuários cadastrados
          </h2>

          <div className="grid gap-4 md:grid-cols-2">

            {/* Percorre usuários */}
            {users.map((user) => (

              <div
                key={user.id}
                className="rounded-xl border border-zinc-200 bg-zinc-50 p-5"
              >

                <p className="text-sm text-zinc-500">
                  ID: {user.id}
                </p>

                {
                  // Verifica se usuário está sendo editado
                  editingId === user.id ? (

                    <div className="mt-3 flex flex-col gap-3">

                      {/* Input edição */}
                      <input
                        type="text"

                        value={editingName}

                        onChange={(event) =>
                          setEditingName(
                            event.target.value
                          )
                        }

                        className="h-11 rounded-xl border border-zinc-300 px-4"
                      />

                      <div className="flex gap-3">

                        {/* Salvar */}
                        <button
                          onClick={() =>
                            updateUser(user.id)
                          }

                          className="rounded-xl bg-black px-4 py-2 text-white"
                        >
                          Salvar
                        </button>

                        {/* Cancelar */}
                        <button
                          onClick={() => {
                            setEditingId(null);
                            setEditingName("");
                          }}

                          className="rounded-xl border border-zinc-300 px-4 py-2"
                        >
                          Cancelar
                        </button>

                      </div>

                    </div>

                  ) : (

                    <>
                      {/* Nome usuário */}
                      <h3 className="mt-1 text-lg font-semibold">
                        {user.name}
                      </h3>

                      {/* Botões */}
                      <div className="mt-4 flex gap-3">

                        {/* Editar */}
                        <button
                          onClick={() => {
                            setEditingId(user.id);
                            setEditingName(user.name);
                          }}

                          className="rounded-xl bg-blue-500 px-4 py-2 text-white"
                        >
                          Editar
                        </button>

                        {/* Deletar */}
                        <button
                          onClick={() =>
                            deleteUser(user.id)
                          }

                          className="rounded-xl bg-red-500 px-4 py-2 text-white"
                        >
                          Deletar
                        </button>

                      </div>
                    </>

                  )
                }

              </div>
            ))}

          </div>

        </section>

        {/* Conteúdos aprendidos */}
        <section className="rounded-2xl bg-white p-6 shadow-sm">

          <h2 className="mb-5 text-2xl font-bold">
            O que aprendemos
          </h2>

          <div className="grid gap-4 md:grid-cols-2">

            {learnedTopics.map((topic) => (

              <div
                key={topic.id}
                className="rounded-xl border border-zinc-200 p-5"
              >

                <h3 className="mb-2 text-lg font-semibold">
                  {topic.title}
                </h3>

                <p className="text-zinc-600">
                  {topic.description}
                </p>

              </div>
            ))}

          </div>

        </section>

        {/* Próximos conteúdos */}
        <section className="rounded-2xl bg-white p-6 shadow-sm">

          <h2 className="mb-5 text-2xl font-bold">
            Próximas etapas
          </h2>

          <div className="grid gap-4 md:grid-cols-2">

            {nextTopics.map((topic) => (

              <div
                key={topic.id}
                className="rounded-xl border border-zinc-200 bg-zinc-50 p-5"
              >

                <h3 className="mb-2 text-lg font-semibold">
                  {topic.title}
                </h3>

                <p className="text-zinc-600">
                  {topic.description}
                </p>

              </div>
            ))}

          </div>

        </section>

      </main>

    </div>
  );
}