// Importa o tipo Metadata do Next.js
// Esse tipo ajuda o TypeScript a validar
// corretamente os metadados da aplicação
import type { Metadata } from "next";

// Importa fontes otimizadas do Google Fonts
// utilizando o sistema nativo do Next.js
import {
  Geist,
  Geist_Mono
} from "next/font/google";

// Importa o CSS global da aplicação
// Esse arquivo será aplicado em TODAS as páginas
import "./globals.css";

// Configura a fonte Geist padrão
const geistSans = Geist({

  // Cria uma variável CSS global
  // para utilizar a fonte no Tailwind/CSS
  variable: "--font-geist-sans",

  // Define quais caracteres/carregamentos
  // serão baixados
  //
  // "latin" reduz tamanho da fonte
  // carregando apenas caracteres latinos
  subsets: ["latin"],
});

// Configura a fonte mono (monoespaçada)
// muito usada para:
// - códigos
// - inputs técnicos
// - dashboards
const geistMono = Geist_Mono({

  // Variável CSS da fonte mono
  variable: "--font-geist-mono",

  // Subconjunto da fonte
  subsets: ["latin"],
});

// Define os metadados globais do site
//
// Essas informações ajudam:
// - SEO
// - Google
// - compartilhamento
// - aba do navegador
export const metadata: Metadata = {

  // Título exibido na aba do navegador
  title: "Jornada Fullstack Next.js",

  // Descrição do site
  description: "Projeto de estudos com Next.js, TypeScript, APIs, banco de dados, autenticação e arquitetura fullstack moderna.",
};

// Layout principal da aplicação
//
// Tudo dentro dele será compartilhado
// entre TODAS as páginas do projeto
export default function RootLayout({

  // children representa o conteúdo
  // dinâmico da página atual
  //
  // Exemplo:
  // /dashboard
  // /crud-users
  // /about
  children,

  // Readonly impede alteração acidental
  // das props recebidas
}: Readonly<{

  // React.ReactNode aceita:
  // - JSX
  // - componentes
  // - textos
  // - fragments
  // - arrays de componentes
  children: React.ReactNode;
}>) {

  // Estrutura HTML global da aplicação
  return (

    // Elemento HTML principal
    <html

      // Define idioma da aplicação
      //
      // Muito importante para:
      // - acessibilidade
      // - leitores de tela
      // - SEO
      lang="pt"

      // Tailwind
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >

      {/* Body principal da aplicação */}
      <body

        // Tailwind CSS
        className="min-h-full flex flex-col"
      >

        {/* Renderiza dinamicamente a página atual */}
        {children}

      </body>

    </html>
  );
}