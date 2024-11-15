import { FC } from "react";
import { Card, CardHeader, CardTitle, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";

// Tipagem para as habilidades
type Skills = {
  linguagens: { name: string; icon: string }[];
  frameworks: { name: string; icon: string }[];
  estilos: { name: string; icon: string }[];
  ferramentasBuild: { name: string; icon: string }[];
  controleVersao: { name: string; icon: string }[];
  apis: { name: string; icon: string }[];
  database: { name: string; icon: string }[];
  ferramentas: { name: string; icon: string }[];
  outros: { name: string; icon: string }[];
};

// Componente de sessão de habilidades
const SkillsSection: FC = () => {
  const skills: Skills = {
    linguagens: [
      { name: "HTML", icon: "/HTML5.svg" },
      { name: "CSS", icon: "/css3.svg" },
      { name: "JavaScript", icon: "/JavaScript.svg" },
      { name: "TypeScript", icon: "/TypeScript.svg" },
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
      { name: "Firebase Authentication", icon: "/firebase.svg" },
      { name: "Stripe", icon: "/stripe.svg" },
      { name: "Discord ", icon: "/discord.svg" },
      { name: "Prisma", icon: "/prisma.svg" },
      { name: "Clerk", icon: "/clerk.svg" },
      { name: "OpenAI API", icon: "/gpt.svg" },
    ],
    database: [
      { name: "Firebase", icon: "/firebase.svg" },
      { name: "Neon", icon: "/neon.svg" },
    ],
    ferramentas: [
      { name: "VScode", icon: "/vscode.svg" },
      { name: "Unity", icon: "/unity.svg" },
    ],
    outros: [
      { name: "Photoshop", icon: "/photoshop.svg" },
      { name: "Illustrator", icon: "/illustrator.svg" },
      { name: "LucidChart", icon: "/lucidchart.svg" },
      { name: "Canva", icon: "/canva.svg" },
      { name: "Discord", icon: "/discord.svg" },
      { name: "Teams", icon: "/teams.svg" },
      { name: "Hacknplan", icon: "/hacknplan.png" },
    ],
  };

  return (
    <section className="py-16 px-4 bg-gray-900 text-white">
      <h2 className="text-3xl font-semibold text-center mb-8">
        Habilidades Técnicas
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {Object.keys(skills).map((key) => (
          <Card key={key} className="bg-white border border-gray-200 shadow-lg">
            <CardHeader>
              <CardTitle className="text-xl font-semibold">
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
