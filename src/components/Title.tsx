// AULA 1

// Cria um tipo chamado TitleProps
// Esse tipo define quais propriedades (props) o componente Title pode receber
type TitleProps = {

  // A prop text deve ser uma string
  text: string;
};

// Exporta o componente como padrão, isso permite importar sem usar {}
export default function Title(

  // Faz desestruturação das props, recebe apenas a prop text
  { text }: TitleProps
) {

  // Retorna o JSX do componente
  return (

    <h1 className="text-3xl md:text-5xl font-bold">

      {/* Renderiza o texto recebido via props */}
      {text}

    </h1>
  );
}