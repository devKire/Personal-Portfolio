import { FC } from "react";
import { Card, CardHeader, CardTitle, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";
// import { Chart } from "./Chart";

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
      { name: "CSS", icon: "/CSS3.svg" },
      { name: "JavaScript", icon: "/JavaScript.svg" },
      { name: "TypeScript", icon: "/TypeScript.svg" },
      { name: "C#", icon: "/Csharp.svg" },
      { name: "Python", icon: "/Python.svg" },
    ],
    frameworks: [
      { name: "React", icon: "/React.svg" },
      { name: "NextJS", icon: "/Next.js.svg" },
      { name: "ShadCN", icon: "/Shadcn.svg" },
    ],
    estilos: [
      { name: "Bootstrap", icon: "/Bootstrap.svg" },
      { name: "TailwindCSS", icon: "/TailwindCSS.svg" },
    ],
    ferramentasBuild: [{ name: "Vite", icon: "/Vite.js.svg" }],
    controleVersao: [
      { name: "Git", icon: "/Git.svg" },
      { name: "GitHub", icon: "/GitHub.svg" },
    ],
    apis: [
      { name: "Stripe", icon: "/Stripe.svg" },
      { name: "Discord ", icon: "/Discord.svg" },
      { name: "Prisma", icon: "/Prisma.svg" },
      { name: "Clerk", icon: "/Clerk.svg" },
      { name: "OpenAI API", icon: "/GPT.svg" },
    ],
    database: [
      { name: "Firebase", icon: "/Firebase.svg" },
      { name: "Neon", icon: "/Neon.svg" },
    ],
    ferramentas: [
      { name: "VScode", icon: "/VScode.svg" },
      { name: "Unity", icon: "/Unity.svg" },
    ],
    outros: [
      { name: "Photoshop", icon: "/Photoshop.svg" },
      { name: "Illustrator", icon: "/Illustrator.svg" },
      { name: "LucidChart", icon: "/lucidchart.svg" },
      { name: "Canva", icon: "/Canva.svg" },
      { name: "Discord", icon: "/Discord.svg" },
      { name: "Teams", icon: "/Teams.svg" },
      { name: "Hacknplan", icon: "/Hacknplan.png" },
    ],
  };

  return (
    <section className="py-16 px-4 bg-gray-900 text-white">
      <h2 className="text-3xl font-semibold text-center mb-8">
        Habilidades Técnicas
      </h2>
      {/* <Chart /> */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
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
