"use client";

import React from "react";

export default function EducationSection() {
  const formacoes = [
    {
      logo: "/senai.svg",
      curso: "ADS: Análise e Desenvolvimento de Sistemas",
      instituicao: "SENAI/SC - Serviço Nacional de Aprendizagem Industrial",
      periodo: "Agosto de 2024 - Agosto de 2026",
    },
    {
      logo: "/senac.svg",
      curso:
        "Curso Técnico Integrado ao Ensino Médio - Programação de Jogos Digitais",
      instituicao: "Senac Santa Catarina",
      periodo: "Janeiro de 2022 - Abril de 2024",
    },
  ];

  return (
    <section id="education" className="py-16 px-4 bg-gray-900">
      <h2 className="text-3xl font-bold text-center text-white mb-8">
        Formações Acadêmicas
      </h2>

      <div className="max-w-3xl mx-auto space-y-6">
        {formacoes.map((formacao, index) => (
          <div
            key={index}
            className="bg-gray-800 rounded-lg p-6 text-white shadow-md border border-gray-700 flex items-center gap-4"
          >
            <img
              src={formacao.logo}
              alt={`Logo da ${formacao.instituicao}`}
              className="w-20 h-20 object-contain rounded"
            />
            <div>
              <h3 className="text-xl font-semibold">{formacao.curso}</h3>
              <p className="text-sm mt-1">{formacao.instituicao}</p>
              <p className="text-xs text-gray-400 italic">{formacao.periodo}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
