// Importa o NextResponse do Next.js
// Ele é utilizado para retornar respostas da API
import { NextResponse } from "next/server";

// Importa os dados fake do projeto
// users = lista de usuários
// lessons = lista de conteúdos aprendidos
import { users, lessons } from "../../../lib/data";

// Método GET da API
// Responsável por retornar dados para o frontend
export async function GET() {

  // Retorna um objeto JSON contendo:
  // - usuários
  // - conteúdos da aula
  return NextResponse.json({

    // Lista de usuários
    users,

    // Lista de lições/conteúdos
    lessons
  });
}