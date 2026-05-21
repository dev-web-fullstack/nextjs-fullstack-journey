// Objeto de configuração do PostCSS
const config = {

  // Lista de plugins utilizados pelo PostCSS
  plugins: {

    // Plugin oficial do Tailwind CSS para PostCSS
    //
    // Ele processa:
    //
    // - classes Tailwind
    // - utilitários
    // - estilos automáticos
    //
    // Exemplo:
    //
    // className="bg-black text-white"
    //
    // Esse plugin transforma essas classes
    // em CSS real durante o build
    "@tailwindcss/postcss": {},
  },
};

// Exporta a configuração
//
// Isso permite que o Next.js e o PostCSS
// consigam ler esse arquivo automaticamente
export default config;