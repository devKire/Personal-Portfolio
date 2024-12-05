import Image from "next/image";
import Link from "next/link";
import { Button } from "./components/ui/button";

import ProjectsSection from "./components/ProjectsSection";

import SkillsSection from "./components/Skillssection";
import { SocialIcons } from "./components/SocialIcons";

export default function Page() {
  return (
    <div className=" text-white min-h-screen">
      <header
        id="introduction"
        className="flex flex-col items-center text-center py-20 px-6 bg-gradient-to-r from-blue-600 to-purple-700 w-full text-white"
      >
        <div className="max-w-3xl mx-auto">
          {/* Intro Section */}
          <div className="space-y-6">
            <h1 className="text-5xl font-extrabold">
              OLÁ, <span className="wave-emoji">👋</span> EU SOU O ERIK!
            </h1>
            <p className="text-xl font-semibold text-blue-300">
              DESENVOLVEDOR FULLSTACK
            </p>
            <p className="text-lg leading-relaxed">
              Sou apaixonado por{" "}
              <span className="font-bold text-purple-300">tecnologia</span>,
              acredito no poder da{" "}
              <span className="font-bold text-purple-300">educação</span> e me
              dedico a ajudar vidas por meio da{" "}
              <span className="font-bold text-purple-300">programação</span>. A
              cada linha de código, busco trazer inovação e criar experiências
              únicas.
            </p>
          </div>
          {/* Avatar Image */}
          <div className="my-10">
            <Image
              src="/EU.png"
              alt="Erik's Avatar"
              width={160}
              height={160}
              className="rounded-full mx-auto border-4 border-white shadow-lg"
            />
          </div>
          {/* Social Media Links */}
          <SocialIcons />
          {/* Call-to-Action */}
          <div className="mt-12">
            <Link href="#projects">
              <Button className="bg-purple-600 hover:bg-purple-700 px-8 py-3 text-lg font-semibold rounded-lg shadow-md transition-colors">
                Veja Meus Projetos
              </Button>
            </Link>
          </div>
        </div>
      </header>

      {/* About Section */}
      <section
        id="about"
        className="py-16 px-4 text-center bg-blur-sm bg-black bg-opacity-75"
      >
        <h2 className="text-3xl font-semibold mb-4">Sobre Mim</h2>
        <p className="max-w-xl mx-auto">
          Com experiência em infra e ao longo dos meus estudos e projetos
          pessoais, desenvolvi conhecimentos sólidos em React, JavaScript,
          TypeScript, HTML e CSS, aplicando essas tecnologias na criação de
          interfaces modernas e funcionais. Busco aplicar essas habilidades para
          contribuir com projetos reais e agregar valor às equipes das quais
          faço parte. Sou uma pessoa dedicada e vejo cada novo desafio como uma
          oportunidade de aprendizado. Valorizo o trabalho em equipe e a troca
          de conhecimento, e estou comprometido a evoluir continuamente,
          acompanhando as tendências e exigências da área.
        </p>
      </section>

      {/* Sessão de Projetos */}
      <ProjectsSection />

      {/* Sessão de Skills, Habilidades */}
      <SkillsSection />

      {/* <section className="py-16 px-4 text-center bg-gray-900">
        <h2 className="text-3xl font-semibold mb-4">Últimos Artigos</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <article className="bg-gray-800 p-4 rounded-lg shadow-lg">
            <h3 className="text-lg font-bold mb-2">Introdução ao TypeScript</h3>
            <p>
              Entenda por que o TypeScript é a escolha ideal para projetos
              escaláveis.
            </p>
            <Link href="/articles/typescript-introduction">
              <p className="text-purple-400 hover:underline">Leia mais</p>
            </Link>
          </article>
          <article className="bg-gray-800 p-4 rounded-lg shadow-lg">
            <h3 className="text-lg font-bold mb-2">
              Melhores práticas com React
            </h3>
            <p>
              Dicas essenciais para desenvolver componentes reutilizáveis e
              performáticos.
            </p>
            <Link href="/articles/react-best-practices">
              <p className="text-purple-400 hover:underline">Leia mais</p>
            </Link>
          </article>
        </div>
      </section> */}
      {/* <CarouselSection /> */}
      <section id="localization" className="py-16 px-4 text-center bg-gray-900">
        <h2 className="text-3xl font-semibold mb-4 text-white">Onde Estou</h2>
        <div className="flex justify-center items-center">
          <div className="w-full max-w-4xl h-96">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15013.138834207304!2d-48.838882586778755!3d-26.304979099999994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94deafdc40afbc4b%3A0x4b39d148cac10ae7!2sJoinville%20-%20Pirabeiraba%2C%20Joinville%20-%20SC!5e0!3m2!1spt-BR!2sbr!4v1710420075571!5m2!1spt-BR!2sbr"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </section>
      <footer className="w-full bg-gray-800 py-4 text-center mt-auto">
        <p className="text-sm text-gray-400">
          &copy; 2023 ERIK RAFAEL DOS SANTOS. Todos os direitos reservados.
        </p>
      </footer>
    </div>
  );
}
