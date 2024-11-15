import Image from "next/image";
import Link from "next/link";
import { Button } from "./components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./components/ui/card";
import { Input } from "./components/ui/input";
import { Textarea } from "./components/ui/textarea";
import ProjectSpecs from "./components/ProjectSpecs";

import { FaReact, FaDatabase, FaGithub, FaDiscord } from "react-icons/fa"; // React
import { SiFirebase, SiStripe } from "react-icons/si"; // Firebase, Stripe
import { IoLogoJavascript } from "react-icons/io"; // JavaScript
import { DiBootstrap, DiCss3 } from "react-icons/di";
import SkillsSection from "./components/Skillssection";

export default function Page() {
  return (
    <div className="bg-gray-900 text-white min-h-screen">
      <header className="flex flex-col items-center text-center py-16 px-4 bg-gradient-to-r from-blue-600 to-purple-600 w-full">
        <div className="max-w-2xl mx-auto">
          {/* Quote Section */}
          <div className="mb-6">
            <p className="text-xl italic">"Became your dream in reality."</p>
            <span className="block text-sm text-gray-300">- Kire</span>
          </div>

          {/* Intro Section */}
          <div className="space-y-4">
            <h1 className="text-4xl font-bold">OLÁ,👋 EU SOU O ERIK</h1>
            <p className="text-lg font-semibold text-blue-300">DEVELOPER</p>
            <p className="text-gray-200">
              APAIXONADO POR TECNOLOGIA, EDUCAÇÃO E POR MUDAR A VIDA DAS PESSOAS
              ATRAVÉS DA PROGRAMAÇÃO.
            </p>
          </div>

          {/* Avatar Image */}
          <div className="my-8">
            <Image
              src="/EU.png"
              alt="Erik's Avatar"
              width={128}
              height={128}
              className="rounded-full mx-auto"
            />
          </div>

          {/* Social Media Links */}
          <div className="flex space-x-4 justify-center mt-4">
            <Link
              href="https://www.linkedin.com/in/erik-rafael-dos-santos-416b64251/"
              target="_blank"
              title="LinkedIn"
            >
              <Image
                src="https://cdn.jsdelivr.net/npm/simple-icons@v5/icons/linkedin.svg"
                alt="LinkedIn"
                width={24}
                height={24}
                className="w-6 h-6"
              />
            </Link>
            <Link
              href="https://github.com/devKire"
              target="_blank"
              title="GitHub"
            >
              <Image
                src="https://cdn.jsdelivr.net/npm/simple-icons@v5/icons/github.svg"
                alt="GitHub"
                width={24}
                height={24}
                className="w-6 h-6"
              />
            </Link>
            <Link
              href="/assets/pdf/Currículo ERIK RAFAEL DOS SANTOS.pdf"
              target="_blank"
              title="Currículo PDF"
            >
              <Image
                src="https://cdn.jsdelivr.net/npm/simple-icons@v5/icons/adobeacrobatreader.svg"
                alt="Currículo"
                width={24}
                height={24}
                className="w-6 h-6"
              />
            </Link>
          </div>

          {/* "Sobre mim" Button */}
          <div className="mt-8">
            <Link href="#projects">
              <Button className="mt-6">Veja meus Projetos</Button>
            </Link>
          </div>
        </div>
      </header>

      {/* About Section */}
      <section className="py-16 px-4 text-center">
        <h2 className="text-3xl font-semibold mb-4">Sobre Mim</h2>
        <p className="max-w-xl mx-auto">
          Ao longo dos meus estudos e projetos pessoais, desenvolvi uma base em
          React, JavaScript, TypeScript, HTML e CSS, aplicando essas tecnologias
          na criação de interfaces modernas e funcionais. Busco aplicar essas
          habilidades para contribuir com projetos reais e agregar valor às
          equipes das quais faço parte. Sou uma pessoa dedicada e vejo cada novo
          desafio como uma oportunidade de aprendizado. Valorizo o trabalho em
          equipe e a troca de conhecimento, e estou comprometido a evoluir
          continuamente, acompanhando as tendências e exigências da área.
        </p>
      </section>

      <ProjectSpecs />
      <SkillsSection />

      <footer className="w-full bg-gray-800 py-4 text-center mt-auto">
        <p className="text-sm text-gray-400">
          &copy; 2023 ERIK RAFAEL DOS SANTOS. Todos os direitos reservados.
        </p>
      </footer>
    </div>
  );
}
