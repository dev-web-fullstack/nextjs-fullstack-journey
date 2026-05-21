// ========================================
// AULA 1 — ORGANIZAÇÃO DE DADOS
// ========================================
//
// Nesta aula aprendemos:
//
// - Organização de projeto
// - Separação de responsabilidades
// - Estrutura de dados
// - Arrays
// - Objetos JavaScript
// - Exportação de dados
// - Simulação de banco de dados
//
// Este arquivo funciona como uma
// pequena camada de dados fake.
//
// Em aplicações reais,
// essas informações normalmente viriam de:
//
// - PostgreSQL
// - MySQL
// - MongoDB
// - APIs externas
//
// Aqui estamos simulando isso
// usando arrays JavaScript.
//
// ========================================


// Exporta um array chamado users
//
// "export" permite utilizar esses dados
// em qualquer parte do projeto
//
// Exemplo:
//
// import { users } from "@/lib/data";
//
// Esse array representa uma lista
// de usuários fake
export const users = [

  // Primeiro usuário
  {
    // ID único do usuário
    id: 1,

    // Nome do usuário
    name: "Matheus Santos"
  },

  // Segundo usuário
  {
    id: 2,
    name: "Matheus Lopes"
  },

  // Terceiro usuário
  {
    id: 3,
    name: "Matheus Santos Lopes"
  }
];


// Exporta um array chamado lessons
//
// Esse array representa os conteúdos
// aprendidos durante a aula
export const lessons = [

  // Primeira lição
  {
    // ID único
    id: 1,

    // Título do conteúdo
    title: "App Router",

    // Descrição da lição
    description:
      "Criamos páginas utilizando a estrutura moderna da pasta app do Next.js. (texto vindo da Api)"
  },

  // Segunda lição
  {
    id: 2,

    title: "Componentes React",

    description:
      "Criamos o componente Title reutilizável com TypeScript e props. (texto vindo da Api)"
  },

  // Terceira lição
  {
    id: 3,

    title: "API Routes",

    description:
      "Criamos nossa primeira API backend dentro do próprio Next.js. (texto vindo da Api)"
  },

  // Quarta lição
  {
    id: 4,

    title: "Consumo de API",

    description:
      "Aprendemos a buscar dados da API e renderizar informações dinamicamente na tela. (texto vindo da Api)"
  }
];


// ========================================
// CONCEITOS IMPORTANTES
// ========================================
//
// ARRAY
//
// Arrays armazenam múltiplos valores
//
// Exemplo:
//
// [
//   {},
//   {},
//   {}
// ]
//
// ========================================
//
// OBJETOS
//
// Objetos armazenam propriedades
//
// Exemplo:
//
// {
//   id: 1,
//   name: "Matheus"
// }
//
// ========================================
//
// EXPORT
//
// Permite reutilizar os dados
// em outros arquivos
//
// ========================================
//
// SIMULAÇÃO DE BANCO
//
// Esse arquivo está simulando
// um pequeno banco de dados.
//
// Mais para frente substituiremos isso
// por PostgreSQL + Prisma ORM.
//
// ========================================