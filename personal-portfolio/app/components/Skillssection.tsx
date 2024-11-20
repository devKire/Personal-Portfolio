import { FC } from "react";
import { Card, CardHeader, CardTitle, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";
import { Chart } from "./Chart";

type Skills = {
  linguagens: { name: string; icon: string }[];
  frameworks: { name: string; icon: string }[];
  estilos: { name: string; icon: string }[];
  ferramentasBuild: { name: string; icon: string }[];
  controleVersao: { name: string; icon: string }[];
  apis: { name: string; icon: string }[];
  database: { name: string; icon: string }[];
  ferramentas: { name: string; icon: string }[];
  ferramentasDesign: { name: string; icon: string }[]; // Nova categoria para ferramentas de design
  outros: { name: string; icon: string }[]; // Categoria para outros
};

const SkillsSection: FC = () => {
  const skills: Skills = {
    linguagens: [
      { name: "HTML", icon: "/html5.svg" },
      { name: "CSS", icon: "/css3.svg" },
      { name: "JavaScript", icon: "/javascript.svg" },
      { name: "TypeScript", icon: "/typescript.svg" },
      { name: "C#", icon: "/csharp.svg" },
      { name: "Python", icon: "/python.svg" },
    ],
    frameworks: [
      { name: "React", icon: "/react.svg" },
      { name: "NextJS", icon: "/next.js.svg" },
      { name: "ShadCN", icon: "/shadcn.svg" },
    ],
    estilos: [
      { name: "Bootstrap", icon: "/bootstrap.svg" },
      { name: "TailwindCSS", icon: "/tailwindcss.svg" },
    ],
    ferramentasBuild: [{ name: "Vite", icon: "/vite.js.svg" }],
    controleVersao: [
      { name: "Git", icon: "/git.svg" },
      { name: "GitHub", icon: "/github.svg" },
    ],
    apis: [
      { name: "Stripe", icon: "/stripe.svg" },
      { name: "Discord", icon: "/discord.svg" },
      { name: "Prisma", icon: "/prisma.svg" },
      { name: "Clerk", icon: "/clerk.svg" },
      { name: "OpenAI API", icon: "/gpt.svg" },
      { name: "Recharts", icon: "/recharts.svg" },
      { name: "Emailjs-com", icon: "/emailjs.jpg" },
    ],
    database: [
      { name: "Firebase", icon: "/firebase.svg" },
      { name: "Neon", icon: "/neon.svg" },
    ],
    ferramentas: [
      { name: "VScode", icon: "/vscode.svg" },
      { name: "Unity", icon: "/unity.svg" },
    ],
    ferramentasDesign: [
      // Ferramentas para design visual
      { name: "Photoshop", icon: "/photoshop.svg" },
      { name: "Illustrator", icon: "/illustrator.svg" },
      { name: "LucidChart", icon: "/lucidchart.svg" },
      { name: "Canva", icon: "/canva.svg" },
    ],
    outros: [
      { name: "Teams", icon: "/teams.svg" },
      { name: "Discord", icon: "/discord.svg" },
      { name: "Hacknplan", icon: "/hacknplan.png" },
      { name: "Lucide React", icon: "/lucide.svg" },
    ],
  };

  return (
    <section className="py-16 px-4 text-white bg-black bg-opacity-50">
      <h2 className="text-3xl font-semibold text-center mb-8">
        Técnologias e Ferramentas que utilizo ou já utilizei
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
