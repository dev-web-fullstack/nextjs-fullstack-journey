// ========================================
// AULA 2 — CRUD API COM NEXT.JS
// ========================================
//
// Nesta etapa aprendemos:
//
// - API Routes
// - Backend no Next.js
// - Métodos HTTP
// - GET
// - POST
// - JSON
// - Estrutura REST
// - Manipulação de arrays
// - Criação de dados
// - IDs dinâmicos
//
// Este arquivo representa uma API backend
// criada dentro do Next.js
//
// A rota:
//
// app/api/crud-users/route.ts
//
// vira automaticamente:
//
// /api/crud-users
//
// ========================================


// usado para retornar respostas da API
//
// NextResponse é uma ferramenta do Next.js
// utilizada para:
//
// - retornar JSON
// - retornar status HTTP
// - enviar respostas da API
import { NextResponse } from "next/server";

// Esse arquivo funciona como um 
// banco de dados fake temporário
//
// users é um array armazenado
// em memória no Node.js
import { users } from "@/lib/users";

// Método GET da API
// Responsável por LISTAR os usuários
export async function GET() {

  // Retorna todos os usuários em formato JSON
  return NextResponse.json(users);
}

// Método POST da API
// Responsável por CRIAR um novo usuário
export async function POST(request: Request) {

  // ========================================
  // request
  // ========================================
  //
  // request contém todos os dados
  // enviados pelo frontend
  //
  // Exemplos:
  //
  // - body
  // - headers
  // - cookies
  // - method
  //
  // ========================================

  // Converte o body da requisição para JSON
  // Aqui pegamos os dados enviados pelo frontend
  const body = await request.json();

  // Cria um novo usuário
  const newUser = {
    // verifica se existem usuários
    id:
      users.length > 0
        // Procura o MAIOR ID existente
        ? Math.max(
          //... (Spread Operator)
          //Ele "espalha" os valores do array.
          //exemplo: [1, 2, 5] vira 1, 2, 5
          ...users.map((user) => user.id)
        ) + 1
        // Se não existir usuário,
        // começa pelo ID 1
        : 1,

    // Nome recebido do frontend
    //
    // body.name vem do:
    //
    // fetch({
    //   body: JSON.stringify({
    //     name
    //   })
    // })
    name: body.name
  };

  // Adiciona o novo usuário ao array
  users.push(newUser);

  // Retorna o usuário criado em formato JSON
  //
  // O frontend poderá usar isso
  // imediatamente após o cadastro
  return NextResponse.json(newUser);
}