import Image from "next/image";

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Button } from "./ui/button";

export default function ProjectSpecs() {
  const projects = [
    {
      title: "LowAnx Project",
      imgSrc: "/lowanx.png",
      description: "A sample project.",
      specs: [
        { label: "Language", value: "TypeScript", icon: "/TypeScript.svg" },
        { label: "Library", value: "React", icon: "/React.svg " },
        { label: "Build Tool", value: "Vite", icon: "/Vite.js.svg" },
        { label: "UI Framework", value: "Bootstrap", icon: "/Bootstrap.svg" },
        { label: "Database", value: "Firebase", icon: "/Firebase.svg" },
      ],
    },
    {
      title: "L'Amour Games Project",
      imgSrc: "/lamour.png",
      description: "Another project.",
      specs: [
        { label: "Language", value: "JavaScript", icon: "/Javascript.svg" },
        { label: "Library", value: "React", icon: "/React.svg" },
        {
          label: "Authentication",
          value: "Discord OAuth",
          icon: "/Discord.svg",
        },
        { label: "Backend", value: "Firebase", icon: "/Firebase.svg" },
        { label: "Styling", value: "Custom CSS", icon: "/CSS3.svg" },
      ],
    },
  ];

  return (
    <section id="projects" className="py-16 px-4 bg-gray-800">
      <h2 className="text-3xl font-semibold text-center mb-8">Meus Projetos</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {projects.map((project, index) => (
          <Card
            className="bg-white border border-gray-200 shadow-lg"
            key={index}
          >
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-gray-900">
                {project.title}
              </CardTitle>
              <Image
                src={project.imgSrc}
                alt={project.title}
                width={400}
                height={300}
                className="rounded-lg mb-4"
              />
              <p className="text-gray-600 mt-2">{project.description}</p>
            </CardHeader>

            <CardContent className="mt-4 space-y-2">
              <h3 className="text-lg font-semibold text-gray-700">
                Specifications
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {project.specs.map((spec, index) => (
                  <div
                    key={index}
                    className="flex flex-col items-center p-4 border rounded-md border-gray-100"
                  >
                    <img
                      src={spec.icon}
                      alt={spec.label}
                      className="text-3xl mb-2 w-12 h-12"
                    />
                    <span className="text-sm font-medium text-gray-500">
                      {spec.label}:
                    </span>
                    <span className="text-gray-800 font-semibold mt-1">
                      {spec.value}
                    </span>
                  </div>
                ))}
              </div>
            </CardContent>

            <CardFooter className="flex justify-end mt-4">
              <Button
                variant="outline"
                className="bg-blue-600 text-white hover:bg-blue-700 px-4 py-2 rounded-lg"
                title="View Project"
              >
                View Project
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  );
}
