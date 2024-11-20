"use client";

import { TrendingUp } from "lucide-react";
import { LabelList, Pie, PieChart } from "recharts";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "./ui/chart";

const chartData = [
  { language: "htmlcss", porcentagem: 60, fill: "var(--color-htmlcss)" },
  { language: "typescript", porcentagem: 10, fill: "var(--color-typescript)" },
  { language: "javascript", porcentagem: 20, fill: "var(--color-javascript)" },
  { language: "csharp", porcentagem: 5, fill: "var(--color-csharp)" },
  { language: "python", porcentagem: 5, fill: "var(--color-python)" },
];

const chartConfig = {
  porcentagem: {
    label: "Porcentagem: ",
  },
  htmlcss: {
    label: "HTML+CSS",
    color: "hsl(var(--chart-1))",
  },
  typescript: {
    label: "TypeScript",
    color: "hsl(var(--chart-2))",
  },
  javascript: {
    label: "JavaScript",
    color: "hsl(var(--chart-3))",
  },
  csharp: {
    label: "C#",
    color: "hsl(var(--chart-4))",
  },
  python: {
    label: "Python",
    color: "hsl(var(--chart-5))",
  },
} satisfies ChartConfig;

export function Chart() {
  return (
    <section className="py-16 px-4 text-center flex justify-center items-center">
      <Card className="flex flex-col p-4 w-full max-w-4xl ">
        <CardHeader className="items-center pb-0">
          <CardTitle>Linguagens que mais tenho conhecimento</CardTitle>
          <CardDescription>
            Este gráfico mostra as linguagens de programação e marcação nas
            quais tenho mais conhecimento e experiência. Ele reflete minha
            jornada de aprendizado e prática em cada uma delas, destacando as
            que utilizo com mais frequência em meus projetos.
          </CardDescription>
        </CardHeader>
        <CardContent className="flex-1 pb-0">
          <ChartContainer
            config={chartConfig}
            className="mx-auto aspect-square max-h-[250px] [&_.recharts-text]:fill-background"
          >
            <PieChart>
              <ChartTooltip
                content={
                  <ChartTooltipContent nameKey="porcentagem" hideLabel />
                }
              />
              <Pie data={chartData} dataKey="porcentagem">
                <LabelList
                  dataKey="language"
                  className="fill-background"
                  stroke="none"
                  fontSize={12}
                  formatter={(value: keyof typeof chartConfig) =>
                    chartConfig[value]?.label
                  }
                />
              </Pie>
            </PieChart>
          </ChartContainer>
        </CardContent>
        <CardFooter className="flex-col gap-2 text-sm">
          <div className="flex items-center gap-2 font-medium leading-none">
            <TrendingUp className="h-4 w-4" />
            <span>Rumo ao próximo nível!</span>
          </div>
          <div className="leading-none text-muted-foreground">
            <span>
              O aprendizado nunca para. Estou sempre buscando novas linguagens e
              desafios para expandir minhas habilidades.
            </span>
          </div>
        </CardFooter>
      </Card>
    </section>
  );
}
