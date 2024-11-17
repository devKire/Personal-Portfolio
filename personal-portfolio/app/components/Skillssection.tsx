import { FC } from "react";
import { Card, CardHeader, CardTitle, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";
import { Chart } from "./Chart";

type Skills = {
  linguagens: { name: string; icon: string; percent: number }[];
  frameworks: { name: string; icon: string; percent: number }[];
  estilos: { name: string; icon: string; percent: number }[];
  ferramentasBuild: { name: string; icon: string; percent: number }[];
  controleVersao: { name: string; icon: string; percent: number }[];
  apis: { name: string; icon: string; percent: number }[];
  database: { name: string; icon: string; percent: number }[];
  ferramentas: { name: string; icon: string; percent: number }[];
  outros: { name: string; icon: string; percent: number }[];
};

// Componente de sessão de habilidades
const SkillsSection: FC = () => {
  const skills: Skills = {
    linguagens: [
      { name: "HTML", icon: "/html5.svg", percent: 20 },
      { name: "CSS", icon: "/css3.svg", percent: 20 },
      { name: "JavaScript", icon: "/javascript.svg", percent: 20 },
      { name: "TypeScript", icon: "/typescript.svg", percent: 20 },
      { name: "C#", icon: "/csharp.svg", percent: 20 },
      { name: "Python", icon: "/python.svg", percent: 20 },
    ],
    frameworks: [
      { name: "React", icon: "/react.svg", percent: 20 },
      { name: "NextJS", icon: "/next.js.svg", percent: 20 },
      { name: "ShadCN", icon: "/shadcn.svg", percent: 20 },
    ],
    estilos: [
      { name: "Bootstrap", icon: "/bootstrap.svg", percent: 20 },
      { name: "TailwindCSS", icon: "/tailwindcss.svg", percent: 20 },
    ],
    ferramentasBuild: [{ name: "Vite", icon: "/vite.js.svg", percent: 20 }],
    controleVersao: [
      { name: "Git", icon: "/git.svg", percent: 20 },
      { name: "GitHub", icon: "/github.svg", percent: 20 },
    ],
    apis: [
      { name: "Stripe", icon: "/stripe.svg", percent: 20 },
      { name: "Discord", icon: "/discord.svg", percent: 20 },
      { name: "Prisma", icon: "/prisma.svg", percent: 20 },
      { name: "Clerk", icon: "/clerk.svg", percent: 20 },
      { name: "OpenAI API", icon: "/gpt.svg", percent: 20 },
    ],
    database: [
      { name: "Firebase", icon: "/firebase.svg", percent: 20 },
      { name: "Neon", icon: "/neon.svg", percent: 20 },
    ],
    ferramentas: [
      { name: "VScode", icon: "/vscode.svg", percent: 20 },
      { name: "Unity", icon: "/unity.svg", percent: 20 },
    ],
    outros: [
      { name: "Photoshop", icon: "/photoshop.svg", percent: 20 },
      { name: "Illustrator", icon: "/illustrator.svg", percent: 20 },
      { name: "LucidChart", icon: "/lucidchart.svg", percent: 20 },
      { name: "Canva", icon: "/canva.svg", percent: 20 },
      { name: "Discord", icon: "/discord.svg", percent: 20 },
      { name: "Teams", icon: "/teams.svg", percent: 20 },
      { name: "Hacknplan", icon: "/hacknplan.png", percent: 20 },
    ],
  };

  return (
    <section className="py-16 px-4 text-white bg-black bg-opacity-50">
      <h2 className="text-3xl font-semibold text-center mb-8">
        Habilidades Técnicas
      </h2>
      <Chart />
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
        {Object.keys(skills).map((key) => (
          <Card
            key={key}
            className="bg-gray-800 border border-gray-700 shadow-lg hover:shadow-xl transition-shadow"
          >
            <CardHeader>
              <CardTitle className="text-xl font-semibold text-white">
                {key.replace(/([A-Z])/g, " $1")}
              </CardTitle>
            </CardHeader>
            <CardContent className="mt-4 space-y-2">
              {skills[key as keyof Skills].map((skill, index) => (
                <div key={index} className="flex items-center space-x-2">
                  <img src={skill.icon} alt={skill.name} className="w-6 h-6" />
                  <Badge className="text-sm bg-blue-600 text-white">
                    {skill.name}
                  </Badge>
                </div>
              ))}
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default SkillsSection;
