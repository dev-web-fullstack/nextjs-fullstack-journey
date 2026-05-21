// ========================================
// AULA 2 — BANCO DE DADOS FAKE
// ========================================
//
// Nesta etapa aprendemos:
//
// - Organização de arquivos
// - Simulação de banco de dados
// - Arrays em memória
// - Exportação de dados
// - Tipagem com TypeScript
// - Compartilhamento de estado
//
// Este arquivo funciona como um
// pequeno banco de dados fake.
//
// Os dados ficam armazenados
// temporariamente na memória do Node.js.
//
// Isso significa:
//
// - funciona enquanto servidor está ligado
// - reinicia ao parar projeto
// - não salva permanentemente
//
// Mais para frente substituiremos isso
// por PostgreSQL + Prisma ORM.
//
// ========================================


// ========================================
// IMPORTAÇÃO DE TIPAGEM
// ========================================
//
// Importa o tipo User
//
// Isso garante que todos os usuários
// sigam a mesma estrutura
//
// Exemplo obrigatório:
//
// {
//   id: number,
//   name: string
// }
//
// ========================================
import { User } from "../types/user";


// ========================================
// BANCO DE DADOS FAKE
// ========================================
//
// export:
// permite utilizar esse array
// em qualquer parte do projeto
//
// let:
// permite modificar o array
//
// Isso é importante porque:
//
// - POST adiciona usuários
// - PUT atualiza usuários
// - DELETE remove usuários
//
// Se fosse const:
//
// o array ainda poderia sofrer push/splice,
// mas usamos let para representar melhor
// uma estrutura mutável de dados.
//
// ========================================
export let users: User[] = [

  // ========================================
  // User[]
  // ========================================
  //
  // Isso significa:
  //
  // "array de usuários"
  //
  // O TypeScript agora garante:
  //
  // - id precisa ser number
  // - name precisa ser string
  //
  // ========================================


  // Primeiro usuário
  {
    id: 1,
    name: "Matheus"
  },

  // Segundo usuário
  {
    id: 2,
    name: "João"
  }
];


// ========================================
// COMO ESSE ARRAY É UTILIZADO
// ========================================
//
// GET:
// lista usuários
//
// POST:
// adiciona usuário
//
// PUT:
// atualiza usuário
//
// DELETE:
// remove usuário
//
// ========================================
//
// EXEMPLO
//
// users.push({
//   id: 3,
//   name: "Maria"
// })
//
// Resultado:
//
// [
//   { id: 1, name: "Matheus" },
//   { id: 2, name: "João" },
//   { id: 3, name: "Maria" }
// ]
//
// ========================================
//
// IMPORTANTE
//
// Esse NÃO é um banco real.
// Você não verá nenhum dado sendo
// adicionado neste arquivo users.ts
//
// Os dados:
//
// - ficam armazenados na memória do Node.js
// - desaparecem ao reiniciar servidor
// - não ficam salvos permanentemente

// ========================================