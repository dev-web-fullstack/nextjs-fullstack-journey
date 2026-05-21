// ========================================
// AULA 1 — CRIAÇÃO DE APIs NO NEXT.JS
// ========================================
//
// Nesta aula aprendemos:
//
// - API Routes
// - Backend dentro do Next.js
// - Método GET
// - Retorno de JSON
// - Estrutura de APIs REST
// - Separação entre frontend e backend
// - Organização de dados
//
// Este arquivo representa uma API criada
// diretamente dentro do Next.js.
//
// No App Router,
// qualquer arquivo:
//
// route.ts
//
// vira automaticamente uma rota de API.
//
// Exemplo:
//
// app/api/dashboard/route.ts
//
// vira:
//
// /api/dashboard
//
// ========================================


// Importa o NextResponse do Next.js
//
// Ele é utilizado para retornar respostas da API
//
// Similar ao:
// res.json()
// em outros frameworks
import { NextResponse } from "next/server";


// Importa os dados fake do projeto
//
// users:
// lista de usuários
//
// lessons:
// conteúdos da aula
//
// Esses dados estão simulando
// um pequeno banco de dados
import {
  users,
  lessons
} from "@/lib/data";


// Método GET da API
//
// APIs REST utilizam métodos HTTP:
//
// GET:
// buscar dados
//
// POST:
// criar dados
//
// PUT:
// atualizar dados
//
// DELETE:
// remover dados
//
// Essa função será executada automaticamente
// quando alguém acessar:
//
// /api/dashboard
export async function GET() {

  // Retorna um JSON para o frontend
  //
  // O frontend poderá consumir esses dados
  // usando:
  //
  // fetch("/api/dashboard")
  //
  // O NextResponse.json():
  //
  // - converte automaticamente para JSON
  // - adiciona headers corretos
  // - retorna status 200 automaticamente
  return NextResponse.json({

    // Lista de usuários
    users,

    // Conteúdos da aula
    lessons
  });
}