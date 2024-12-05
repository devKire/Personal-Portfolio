"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Button } from "./ui/button";

import React from "react";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "./ui/carousel";

export default function ProjectsSection() {
  const [selectedCategory, setSelectedCategory] = useState("Todos");

  const categories = ["Todos", "Projetos Recentes", "Projetos Antigos"];

  type Spec = {
    label: string;
    value: string;
    icon: string;
  };

  type Project = {
    title: string;
    imgSrc: string;
    description: string;
    temp: string;
    development: string;
    link: string;
    specs: Spec[];
  };

  const projects: Project[] = [
    {
      title: "LowAnx Project",
      imgSrc: "/lowanx.png",
      description:
        "O LowAnx é uma iniciativa dedicada a fornecer apoio e informações valiosas para aqueles que enfrentam desafios relacionados à ansiedade.",
      temp: "Projetos Recentes",
      development: "Em desenvolvimento",
      link: "https://lowanx.com.br",
      specs: [
        { label: "Language", value: "TypeScript", icon: "/typescript.svg" },
        { label: "Library", value: "React", icon: "/react.svg" },
        { label: "Build Tool", value: "Vite", icon: "/vite.js.svg" },
        { label: "UI Framework", value: "Bootstrap", icon: "/bootstrap.svg" },
        { label: "Database", value: "Firebase", icon: "/firebase.svg" },
      ],
    },
    {
      title: "Portifolio V2",
      imgSrc: "/portfoliov2.png",
      description: "Ultima versão do portifolio",
      temp: "Projetos Recentes",
      development: "Em desenvolvimento",
      link: "https://portifolio-erik-santos.vercel.app/pgPrincipal/pgPrincipal.html",
      specs: [
        { label: "Language", value: "TypeScript", icon: "/typescript.svg" },
        { label: "Library", value: "React", icon: "/react.svg" },
        { label: "Framework", value: "NextJS", icon: "/next.js.svg" },
        { label: "Framework", value: "ShadCN", icon: "/shadcn.svg" },
        { label: "Styling", value: "TailwindCSS", icon: "/tailwindcss.svg" },
        { label: "Form Handling", value: "emailjs-com", icon: "/emailjs.jpg" },
        { label: "Charting", value: "Recharts", icon: "/recharts.svg" },
        { label: "Icon Library", value: "Lucide React", icon: "/lucide.svg" },
      ],
    },
    {
      title: "L'Amour Games Project",
      imgSrc: "/lamour.png",
      description:
        "A LAMOUR Games nasceu com o objetivo de unir gamers de todas as plataformas em uma única comunidade. Nosso foco é promover diversão, interação e oportunidades para que jogadores possam se conectar, compartilhar experiências e evoluir juntos. Seja você um jogador casual ou um profissional, nosso espaço é para todos que amam jogos!",
      temp: "Projetos Recentes",
      development: "Em desenvolvimento",
      link: "https://lamour-games.vercel.app",
      specs: [
        { label: "Language", value: "JavaScript", icon: "/javascript.svg" },
        { label: "Library", value: "React", icon: "/react.svg" },
        {
          label: "Authentication",
          value: "Discord OAuth",
          icon: "/discord.svg",
        },
        { label: "Backend", value: "Firebase", icon: "/firebase.svg" },
        { label: "Styling", value: "Custom CSS", icon: "/css3.svg" },
      ],
    },
    {
      title: "Pagina de Vendas",
      imgSrc: "/dog.png",
      description:
        "Pagina de vendas de um e-book de receitas saudáveis para pets.",
      temp: "Projetos Recentes",
      development: "Finalizado",
      link: "https://amantesdedogs.vercel.app",
      specs: [
        { label: "Language", value: "JavaScript", icon: "/javascript.svg" },
        { label: "Library", value: "React", icon: "/react.svg" },
        { label: "Styling", value: "Custom CSS", icon: "/css3.svg" },
      ],
    },
    {
      title: "Kire Visual Designers",
      imgSrc: "/designers.png",
      description: "Projeto inicial de um site de designers",
      temp: "Projetos Antigos",
      development: "Finalizado",
      link: "https://kvd-kire-visual-designers.vercel.app",
      specs: [
        { label: "Language", value: "JavaScript", icon: "/javascript.svg" },
        { label: "Markup Language", value: "HTML5", icon: "/html5.svg" },
        { label: "Styling", value: "Custom CSS", icon: "/css3.svg" },
      ],
    },
    {
      title: "Portifolio V1",
      imgSrc: "/portfolio.png",
      description: "Primeira versão do portifolio",
      temp: "Projetos Antigos",
      development: "Finalizado",
      link: "https://portifolio-erik-santos.vercel.app/pgPrincipal/pgPrincipal.html",
      specs: [
        { label: "Language", value: "JavaScript", icon: "/javascript.svg" },
        { label: "Markup Language", value: "HTML5", icon: "/html5.svg" },
        { label: "Styling", value: "Custom CSS", icon: "/css3.svg" },
      ],
    },
  ];

  const filteredProjects =
    selectedCategory === "Todos"
      ? projects
      : projects.filter((project) => project.temp === selectedCategory);

  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);
  return (
    <section id="projects" className="py-16 px-4 bg-gray-900">
      <h2 className="text-3xl font-bold text-center text-white mb-8">
        Meus Projetos
      </h2>

      {/* Dropdown de categorias */}
      <div className="flex justify-center mb-8">
        <select
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
          className="p-3 bg-gray-700 text-white rounded-lg outline-none"
        >
          {categories.map((category, idx) => (
            <option key={idx} value={category}>
              {category}
            </option>
          ))}
        </select>
      </div>

      <div className="mx-auto max-w-3xl">
        <Carousel setApi={setApi} className="w-full max-w-3xl">
          <CarouselContent>
            {filteredProjects.map((project, index) => (
              <CarouselItem>
                <Card
                  key={index}
                  className="rounded-lg shadow-lg transform transition-transform duration-300"
                >
                  <CardHeader className="items-center justify-center">
                    <Image
                      src={project.imgSrc}
                      alt={`Imagem do projeto ${project.title}`}
                      width={400}
                      height={300}
                      className="rounded-t-lg"
                    />
                    <div className="p-4">
                      <CardTitle className="text-xl font-semibold text-gray-900">
                        {project.title}
                      </CardTitle>
                      <p className="text-sm text-gray-600 mt-2">
                        {project.development}
                      </p>
                      <p className="text-gray-700 mt-4">
                        {project.description}
                      </p>
                    </div>
                  </CardHeader>

                  <CardContent className="px-4 pb-4">
                    <h3 className="text-md font-semibold text-gray-800 mb-3">
                      Tecnologias Utilizadas
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {project.specs.map((spec, idx) => (
                        <div
                          key={idx}
                          className="flex items-center gap-2 p-2 border rounded-md border-gray-200"
                        >
                          <img
                            src={spec.icon}
                            alt={`Ícone da tecnologia ${spec.label}`}
                            className="w-8 h-8"
                          />
                          <div>
                            <p className="text-sm text-gray-600">
                              {spec.label}:
                            </p>
                            <p className="text-sm font-medium text-gray-800">
                              {spec.value}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                  <CardFooter className="px-4 pb-4 flex justify-between items-center">
                    <p className="text-sm text-gray-500 italic">
                      {project.development}
                    </p>
                    <Link href={project.link} passHref>
                      <Button
                        variant="outline"
                        className="bg-blue-600 text-white hover:bg-blue-700 rounded-lg px-4 py-2"
                        title="Ver Projeto"
                      >
                        Ver Projeto
                      </Button>
                    </Link>
                  </CardFooter>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-700 hover:bg-gray-600 text-white rounded-full p-3">
            &larr;
          </CarouselPrevious>
          <CarouselNext className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-700 hover:bg-gray-600 text-white rounded-full p-3">
            &rarr;
          </CarouselNext>
        </Carousel>
        <div className="py-4 text-center text-lg text-gray-300">
          Projeto {current} de {count}
        </div>
      </div>

      {/* Grid de projetos */}
      {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {filteredProjects.map((project, index) => (
          <Card
            key={index}
            className="bg-white border border-gray-200 rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105"
          >
            <CardHeader>
              <Image
                src={project.imgSrc}
                alt={`Imagem do projeto ${project.title}`}
                width={400}
                height={300}
                className="rounded-t-lg"
              />
              <div className="p-4">
                <CardTitle className="text-xl font-semibold text-gray-900">
                  {project.title}
                </CardTitle>
                <p className="text-sm text-gray-600 mt-2">
                  {project.development}
                </p>
                <p className="text-gray-700 mt-4">{project.description}</p>
              </div>
            </CardHeader>

            <CardContent className="px-4 pb-4">
              <h3 className="text-md font-semibold text-gray-800 mb-3">
                Tecnologias Utilizadas
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {project.specs.map((spec, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-2 p-2 border rounded-md border-gray-200"
                  >
                    <img
                      src={spec.icon}
                      alt={`Ícone da tecnologia ${spec.label}`}
                      className="w-8 h-8"
                    />
                    <div>
                      <p className="text-sm text-gray-600">{spec.label}:</p>
                      <p className="text-sm font-medium text-gray-800">
                        {spec.value}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>

            <CardFooter className="px-4 pb-4 flex justify-between items-center">
              <p className="text-sm text-gray-500 italic">
                {project.development}
              </p>
              <Link href={project.link} passHref>
                <Button
                  variant="outline"
                  className="bg-blue-600 text-white hover:bg-blue-700 rounded-lg px-4 py-2"
                  title="Ver Projeto"
                >
                  Ver Projeto
                </Button>
              </Link>
            </CardFooter>
          </Card>
        ))}
      </div> */}
    </section>
  );
}
