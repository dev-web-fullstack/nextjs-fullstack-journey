// AULA 2 - ETAPA 1

// usado para retornar respostas da API
import { NextResponse } from "next/server";

// Esse arquivo funciona como um banco de dados fake temporário
import { users } from "../../../lib/users";

// Método GET da API
// Responsável por LISTAR os usuários
export async function GET() {

  // Retorna todos os usuários em formato JSON
  return NextResponse.json(users);
}

// Método POST da API
// Responsável por CRIAR um novo usuário
export async function POST(request: Request) {

  // Converte o body da requisição para JSON
  // Aqui pegamos os dados enviados pelo frontend
  const body = await request.json();

  // Cria um novo usuário
  const newUser = {
    id:
      users.length > 0
        ? Math.max(
          ...users.map((user) => user.id)
        ) + 1
        : 1,

    name: body.name
  };

  // Adiciona o novo usuário ao array
  users.push(newUser);

  // Retorna o usuário criado em formato JSON
  return NextResponse.json(newUser);
}