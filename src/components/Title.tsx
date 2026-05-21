// ========================================
// AULA 1 — COMPONENTES REUTILIZÁVEIS
// ========================================
//
// Este componente foi criado para aprender:
//
// - Componentes React
// - Props
// - TypeScript
// - Reutilização de código
// - JSX
// - Tipagem de propriedades
//
// O objetivo desse componente é criar
// um título reutilizável que pode ser usado
// em várias páginas da aplicação.
//
// Exemplo:
//
// <Title text="Dashboard" />
//
// ========================================


// Cria um tipo chamado TitleProps
//
// "Props" significa:
// propriedades do componente
//
// Esse tipo define quais dados
// o componente é obrigado a receber
//
// TypeScript usa isso para:
// - validar tipos
// - evitar erros
// - melhorar autocomplete
type TitleProps = {

  // O componente deve receber:
  //
  // text:
  // uma string obrigatória
  //
  // Exemplo:
  //
  // "Meu Dashboard"
  // "Aula 1"
  // "Usuários"
  text: string;
};


// Exporta o componente como padrão
//
// Isso permite importar sem usar {}
//
// Exemplo:
//
// import Title from "@/components/Title";
export default function Title(

  // Props recebidas pelo componente
  //
  // O React envia automaticamente
  // os dados passados no componente
  //
  // Exemplo:
  //
  // <Title text="Dashboard" />
  //
  // O componente receberá:
  //
  // {
  //   text: "Dashboard"
  // }
  //
  // Aqui usamos DESESTRUTURAÇÃO
  // para pegar diretamente:
  //
  // text
  //
  // em vez de:
  //
  // props.text
  { text }: TitleProps
) {

  // Todo componente React
  // retorna JSX
  //
  // JSX é uma sintaxe que mistura:
  // - JavaScript
  // - HTML
  //
  // O React transforma JSX em:
  // React.createElement(...)
  return (

    // Elemento HTML h1
    //
    // Esse componente sempre renderiza
    // um título principal reutilizável
    <h1 className="text-3xl md:text-5xl font-bold">

      {/* 
        Renderiza dinamicamente o valor
        recebido via props

        Exemplo:

        <Title text="Usuários" />

        Resultado:

        <h1>Usuários</h1>

        As chaves {} dentro do JSX
        permitem usar JavaScript
      */}
      {text}

    </h1>
  );
}