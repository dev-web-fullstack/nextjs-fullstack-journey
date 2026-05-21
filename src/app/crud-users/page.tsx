// ========================================
// AULA 2 — CRUD COMPLETO COM REACT E NEXT.JS
// ========================================
//
// Nesta etapa aprendemos:
//
// - Client Components
// - use client
// - useState
// - useEffect
// - CRUD completo
// - GET
// - POST
// - PUT
// - DELETE
// - APIs REST
// - Formulários React
// - Inputs controlados
// - Loading
// - Validação
// - Renderização condicional
// - Arquitetura Fullstack
//
// Esta página representa um CRUD completo,
// permitindo:
//
// - criar usuários
// - listar usuários
// - editar usuários
// - remover usuários
//
// Os dados ainda estão sendo armazenados
// em memória no servidor Node.js.
//
// Na próxima aula criaremos um projeto
// utilizando PostgreSQL + Prisma ORM.
//
// ========================================


// ========================================
// CLIENT COMPONENT
// ========================================
//
// Por padrão, componentes no App Router
// são Server Components.
//
// O "use client" transforma essa página em:
//
// Client Component
//
// Isso permite utilizar:
//
// - useState
// - useEffect
// - eventos
// - interatividade
// - formulários
//
// Sem isso:
// hooks React não funcionariam.
//
// ========================================
"use client";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";


// ========================================
// HOOKS REACT
// ========================================
//
// useState:
// cria estados reativos
//
// useEffect:
// executa efeitos colaterais
//
// Exemplos:
// - buscar API
// - timers
// - listeners
//
// ========================================
import {
  useEffect,
  useState
} from "react";


// Importa componente reutilizável
import Title from "@/components/Title";


// Importa tipagem User
//
// Isso garante segurança
// na estrutura dos usuários
import { User } from "@/types/user";


// ========================================
// COMPONENTE PRINCIPAL
// ========================================
//
// app/crud-users/page.tsx
//
// vira automaticamente:
//
// /crud-users
//
// ========================================
export default function CrudUsersPage() {


  // ========================================
  // ESTADOS REACT
  // ========================================

  // Estado da lista de usuários
  //
  // User[] significa:
  // array de usuários
  //
  // setUsers atualiza o estado
  const [users, setUsers] =
    useState<User[]>([]);


  // Estado do input de criação
  //
  // Controla o valor digitado
  // no formulário
  const [name, setName] =
    useState("");


  // Estado que controla qual usuário
  // está sendo editado
  //
  // number:
  // id do usuário
  //
  // null:
  // nenhum usuário em edição
  const [editingId, setEditingId] =
    useState<number | null>(null);


  // Estado do nome durante edição
  const [editingName, setEditingName] =
    useState("");


  // Estado de loading
  //
  // Muito usado em aplicações reais
  //
  // true:
  // carregando
  //
  // false:
  // finalizado
  const [loading, setLoading] =
    useState(false);


  // Estado de mensagens de erro
  //
  // Utilizado para validação
  const [error, setError] =
    useState("");


  // ========================================
  // BUSCAR USUÁRIOS
  // ========================================
  //
  // Busca usuários na API
  //
  // GET /api/crud-users
  //
  // ========================================
  async function fetchUsers() {

    // Faz requisição para API
    const response = await fetch(
      "/api/crud-users"
    );

    // Converte resposta para JSON
    const data = await response.json();

    // Atualiza estado users
    //
    // Isso faz o React renderizar
    // novamente a interface
    setUsers(data);
  }


  // ========================================
  // CRIAR USUÁRIO
  // ========================================
  //
  // POST /api/crud-users
  //
  // ========================================
  async function createUser() {

    // Limpa erro anterior
    setError("");


    // ========================================
    // VALIDAÇÃO
    // ========================================
    //
    // trim() remove espaços vazios
    //
    // Exemplo:
    //
    // "     "
    //
    // vira:
    //
    // ""
    //
    // ========================================
    if (!name.trim()) {

      setError("Digite um nome válido.");

      return;
    }


    // Ativa loading
    setLoading(true);


    // ========================================
    // REQUISIÇÃO POST
    // ========================================
    //
    // POST cria dados
    //
    // ========================================
    await fetch("/api/crud-users", {

      // Método HTTP
      method: "POST",

      // Headers da requisição
      headers: {

        // Informa que estamos enviando JSON
        "Content-Type": "application/json"
      },

      // Converte objeto para JSON string
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


  // ========================================
  // REMOVER USUÁRIO
  // ========================================
  //
  // DELETE /api/crud-users/:id
  //
  // ========================================
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


  // ========================================
  // ATUALIZAR USUÁRIO
  // ========================================
  //
  // PUT /api/crud-users/:id
  //
  // ========================================
  async function updateUser(id: number) {

    setError("");


    // Validação
    if (!editingName.trim()) {

      setError("Digite um nome válido.");

      return;
    }

    setLoading(true);


    // ========================================
    // REQUISIÇÃO PUT
    // ========================================
    //
    // Este trecho faz uma requisição HTTP
    // para atualizar um usuário na API.
    //
    // PUT é utilizado para:
    //
    // - editar dados
    // - atualizar registros
    // - alterar informações existentes
    //
    // ========================================


    // await faz o JavaScript esperar
    // a requisição terminar antes
    // de continuar o código
    await fetch(

      // URL da API
      //
      // ${id} insere dinamicamente
      // o ID do usuário
      //
      // Exemplo:
      //
      // /api/crud-users/5
      `/api/crud-users/${id}`,

      {

        // Método HTTP utilizado
        //
        // PUT = atualizar dados
        method: "PUT",


        // Headers da requisição
        //
        // Informam detalhes sobre
        // os dados enviados
        headers: {

          // Informa para API que
          // estamos enviando JSON
          "Content-Type": "application/json"
        },


        // body = conteúdo enviado
        // para o backend
        //
        // JSON.stringify converte
        // objeto JavaScript em JSON string
        //
        // O frontend trabalha com objetos,
        // mas HTTP envia texto
        body: JSON.stringify({

          // Novo nome do usuário
          //
          // editingName vem do input
          // controlado pelo React
          name: editingName
        })
      }
    );


    // ========================================
    // EXEMPLO REAL
    // ========================================
    //
    // Se:
    //
    // id = 3
    //
    // editingName = "João"
    //
    // A requisição enviada será:
    //
    // PUT /api/crud-users/3
    //
    // Body:
    //
    // {
    //   "name": "João"
    // }
    //
    // ========================================
    //
    // O QUE A API FAZ?
    //
    // 1. Recebe o ID
    // 2. Procura usuário
    // 3. Atualiza nome
    // 4. Retorna JSON atualizado
    //
    // ========================================
    //
    // FLUXO COMPLETO
    //
    // Frontend
    // ↓
    // fetch()
    // ↓
    // API PUT
    // ↓
    // Backend atualiza usuário
    // ↓
    // API retorna resposta
    // ↓
    // React atualiza tela
    //
    // ========================================


    // Finaliza modo edição
    setEditingId(null);

    setEditingName("");


    // Atualiza lista
    await fetchUsers();

    setLoading(false);
  }


  // ========================================
  // useEffect
  // ========================================
  //
  // Executa quando a página carrega
  //
  // [] significa:
  // executar apenas uma vez
  //
  // Muito utilizado para:
  //
  // - buscar APIs
  // - autenticação
  // - carregar dados
  //
  // ========================================
  useEffect(() => {

    fetchUsers();

  }, []);


  // ========================================
  // DADOS DA INTERFACE
  // ========================================
  //
  // Esses arrays estão simulando
  // conteúdos vindos de APIs
  //
  // ========================================

  // Textos dos conteúdos aprendidos nesta aula
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
          <ArrowLeft className="h-6 w-6" />

          <p className="text-xl font-bold">
            Voltar para home
          </p>

        </Link>

        {/* Cabeçalho */}
        <section className="space-y-4">

          <Title text="Aula 2 - CRUD Completo com React/Next.js" />

          <p className="max-w-3xl text-base leading-7 text-zinc-600 md:text-lg">
            Nesta aula criamos um CRUD completo utilizando
            React, estado, APIs REST e arquitetura fullstack. Os dados são armazenados na memória do servidor Node.js, utilizado como banco de dados fake.
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

              // onChange é um evento do React
              //
              // Ele executa uma função sempre que
              // o valor do input muda
              //
              // Exemplo:
              // usuário digitou uma letra
              // ↓
              // onChange dispara
              onChange={(event) =>

                // Atualiza o estado "name"
                //
                // setName altera o valor armazenado
                // no estado React
                //
                // event.target.value pega o texto
                // digitado dentro do input
                //
                // Exemplo:
                //
                // usuário digitou:
                // "Matheus"
                //
                // então:
                //
                // event.target.value = "Matheus"
                //
                // e o estado fica:
                //
                // name = "Matheus"
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

              // ========================================
              // LISTAGEM DINÂMICA DE USUÁRIOS
              // ========================================
              //
              // users é um array de usuários
              //
              // Exemplo:
              //
              // [
              //   { id: 1, name: "Matheus" },
              //   { id: 2, name: "João" }
              // ]
              //
              // map() percorre todos os itens do array
              // e renderiza um componente para cada usuário
              //
              // ========================================

              // Cada usuário renderiza um card
              <div

                // key ajuda o React a identificar
                // cada elemento da lista
                //
                // Muito importante em listas
                //
                // Evita bugs e melhora performance
                key={user.id}

                className="rounded-xl border border-zinc-200 bg-zinc-50 p-5"
              >

                {/* Mostra ID usuário */}
                <p className="text-sm text-zinc-500">
                  ID: {user.id}
                </p>

                {

                  // ========================================
                  // RENDERIZAÇÃO CONDICIONAL
                  // ========================================
                  //
                  // Aqui verificamos:
                  //
                  // O usuário atual está em edição?
                  //
                  // editingId:
                  // guarda o ID do usuário sendo editado
                  //
                  // user.id:
                  // ID do usuário atual do map()
                  //
                  // Se forem iguais:
                  //
                  // mostra formulário de edição
                  //
                  // Senão:
                  //
                  // mostra modo normal
                  //
                  // ========================================
                  editingId === user.id ? (

                    // ========================================
                    // MODO EDIÇÃO
                    // ========================================

                    <div className="mt-3 flex flex-col gap-3">

                      {/* Input edição */}
                      <input
                        type="text"

                        // Valor controlado pelo React
                        //
                        // editingName guarda o texto digitado
                        value={editingName}

                        // Atualiza estado conforme usuário digita
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

                          // Executa atualização do usuário
                          //
                          // Envia PUT para API
                          onClick={() =>
                            updateUser(user.id)
                          }

                          className="rounded-xl bg-black px-4 py-2 text-white"
                        >
                          Salvar
                        </button>

                        {/* Cancelar */}
                        <button

                          // Sai do modo edição
                          //
                          // null remove usuário em edição
                          //
                          // limpa input
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

                    // ========================================
                    // MODO NORMAL
                    // ========================================
                    //
                    // Se usuário NÃO estiver em edição,
                    // mostramos:
                    //
                    // - nome
                    // - botão editar
                    // - botão deletar
                    //
                    // ========================================

                    <>

                      {/* Nome usuário */}
                      <h3 className="mt-1 text-lg font-semibold">
                        {user.name}
                      </h3>

                      {/* Botões */}
                      <div className="mt-4 flex gap-3">

                        {/* Editar */}
                        <button

                          // Ativa modo edição
                          onClick={() => {

                            // Define qual usuário
                            // está sendo editado
                            setEditingId(user.id);

                            // Preenche input
                            // com nome atual
                            setEditingName(user.name);
                          }}

                          className="rounded-xl bg-blue-500 px-4 py-2 text-white"
                        >
                          Editar
                        </button>

                        {/* Deletar */}
                        <button

                          // Remove usuário
                          //
                          // Executa DELETE na API
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

              // ========================================
              // RESUMO DO FLUXO
              // ========================================
              //
              // users.map()
              // ↓
              // percorre usuários
              // ↓
              // renderiza cards
              // ↓
              // verifica se está editando
              // ↓
              //
              // SE SIM:
              // mostra input + salvar
              //
              // SE NÃO:
              // mostra nome + botões
              //
              // ========================================

            ))}

          </div>

        </section>

        {/* Conteúdos que aprendemos nesta aula */}
        <section className="rounded-2xl bg-white p-6 shadow-sm">

          <h2 className="mb-5 text-2xl font-bold">
            O que aprendemos
          </h2>

          <div className="grid gap-4 md:grid-cols-2">

            {learnedTopics.map((topic) => (

              // ========================================
              // RENDERIZAÇÃO DINÂMICA DOS CONTEÚDOS
              // ========================================
              //
              // learnedTopics é um array contendo
              // os conteúdos aprendidos na aula
              //
              // Exemplo:
              //
              // [
              //   {
              //     id: 1,
              //     title: "CRUD",
              //     description: "Aprendemos CRUD"
              //   }
              // ]
              //
              // ========================================
              // map()
              // ========================================
              //
              // Percorre todos os itens do array
              //
              // Para cada item:
              //
              // topic representa um objeto
              //
              // Exemplo:
              //
              // {
              //   id: 1,
              //   title: "CRUD",
              //   description: "Aprendemos CRUD"
              // }
              //
              // ========================================


              // Card individual de cada conteúdo
              <div

                // key ajuda o React a identificar
                // cada elemento renderizado
                //
                // Muito importante em listas
                //
                // React usa isso para:
                //
                // - otimizar renderização
                // - evitar bugs
                // - atualizar somente itens necessários
                key={topic.id}

                className="rounded-xl border border-zinc-200 p-5"
              >

                {/* Título do conteúdo */}
                <h3 className="mb-2 text-lg font-semibold">

                  {/* Renderiza o título */}
                  {topic.title}

                </h3>

                {/* Descrição do conteúdo */}
                <p className="text-zinc-600">

                  {/* Renderiza descrição */}
                  {topic.description}

                </p>

              </div>

              // ========================================
              // O QUE O REACT FAZ INTERNAMENTE
              // ========================================
              //
              // learnedTopics.map()
              // ↓
              // percorre array
              // ↓
              // cria um card para cada item
              // ↓
              // renderiza automaticamente na tela
              //
              // ========================================
              //
              // RESULTADO FINAL
              //
              // Card 1
              // - CRUD Completo
              //
              // Card 2
              // - useState
              //
              // Card 3
              // - APIs REST
              //
              // ========================================
              //
              // VANTAGEM DO map()
              //
              // Sem map():
              //
              // precisaríamos criar vários cards
              // manualmente
              //
              // Com map():
              //
              // tudo é automático e dinâmico
              //
              // ========================================
              //
              // MUITO UTILIZADO EM:
              //
              // - listas
              // - tabelas
              // - dashboards
              // - produtos
              // - usuários
              // - comentários
              // - posts
              //
              // ========================================

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