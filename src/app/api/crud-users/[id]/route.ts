// Importa o NextResponse do Next.js para retornar respostas da API
import { NextResponse } from "next/server";

// Importa o array de usuários fake - banco de dados temporário em memória
// O
import { users } from "../../../../lib/users";

// Cria um tipo para os parâmetros da rota dinâmica
type Params = {

  // params vem automaticamente do Next.js
  params: Promise<{

    // ID recebido pela URL
    id: string;
  }>;
};

// Método PUT responsável por EDITAR um usuário
export async function PUT(

  // Dados enviados pelo frontend
  request: Request,

  // Params da rota dinâmica
  { params }: Params
) {

  // Converte o body da requisição para JSON
  const body = await request.json();

  // Obtém o id da URL
  const { id } = await params;

  // Procura usuário pelo ID
  const user = users.find(

    // Converte id string para número
    (user) => user.id === Number(id)
  );

  // Verifica se usuário existe
  if (!user) {

    // Retorna erro 404
    return NextResponse.json(
      {
        error: "Usuário não encontrado"
      },
      {
        status: 404
      }
    );
  }

  // Atualiza o nome do usuário
  user.name = body.name;

  // Retorna usuário atualizado
  return NextResponse.json(user);
}

// Método DELETE responsável por REMOVER um usuário
export async function DELETE(

  // Request não será usado aqui, mas o Next.js envia automaticamente
  request: Request,

  // Params da rota
  { params }: Params
) {

  // Obtém id da URL
  const { id } = await params;

  // Procura posição do usuário no array
  const userIndex = users.findIndex(

    // Compara IDs
    (user) => user.id === Number(id)
  );

  // Verifica se encontrou usuário
  if (userIndex === -1) {

    // Retorna erro caso não exista
    return NextResponse.json(
      {
        error: "Usuário não encontrado"
      },
      {
        status: 404
      }
    );
  }

  // Remove usuário do array
  users.splice(userIndex, 1);

  // Retorna mensagem sucesso
  return NextResponse.json({
    message: "Usuário removido"
  });
}