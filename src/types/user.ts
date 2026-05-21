// ========================================
// AULA 1 — TYPESCRIPT E TIPAGEM
// ========================================
//
// Nesta aula aprendemos:
//
// - TypeScript
// - Tipagem estática
// - Criação de tipos
// - Segurança de código
// - Reutilização de estruturas
// - Organização de tipos
//
// Este arquivo cria um tipo chamado User.
//
// O objetivo é definir exatamente
// como um objeto de usuário deve ser.
//
// Isso ajuda:
//
// - evitar erros
// - melhorar autocomplete
// - melhorar manutenção
// - aumentar segurança do código
//
// ========================================


// Exporta um tipo chamado User
//
// "export" permite utilizar esse tipo
// em qualquer arquivo do projeto
//
// Exemplo:
//
// import { User } from "@/types/user";
export type User = {

  // ID do usuário
  //
  // number significa:
  // somente números são permitidos
  //
  // Exemplo válido:
  //
  // id: 1
  //
  // Exemplo inválido:
  //
  // id: "1"
  id: number;

  // Nome do usuário
  //
  // string significa:
  // somente textos são permitidos
  //
  // Exemplo válido:
  //
  // name: "Matheus"
  //
  // Exemplo inválido:
  //
  // name: 123
  name: string;
};


// ========================================
// COMO O TYPESCRIPT USA ISSO
// ========================================
//
// Sempre que criarmos um usuário:
//
// const user: User = {
//   id: 1,
//   name: "Matheus"
// }
//
// o TypeScript irá validar:
//
// - se id é number
// - se name é string
// - se todas propriedades existem
//
// ========================================
//
// EXEMPLO DE ERRO
//
// const user: User = {
//   id: "1",
//   name: 123
// }
//
// TypeScript mostrará erro,
// porque os tipos estão incorretos.
//
// ========================================
//
// POR QUE ISSO É IMPORTANTE?
//
// Em projetos grandes,
// TypeScript ajuda MUITO:
//
// - evita bugs
// - facilita manutenção
// - melhora autocomplete
// - ajuda equipes
// - aumenta produtividade
//
// ========================================
//
// ORGANIZAÇÃO PROFISSIONAL
//
// Separar tipos em:
//
// /types
//
// é uma prática MUITO comum
// em aplicações profissionais.
//
// ========================================