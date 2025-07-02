"use client";

import React from "react";

const certificados = [
  {
    nome: "Programação Básico Front-End",
    instituicao: "SENAI/SC - Serviço Nacional de Aprendizagem Industrial",
    data: "Verificação emitida em dez de 2024",
    logo: "senai.svg",
    certificadoImg: "/CertificadoProgramacaoBasicaFrontEnd.jpeg",
  },
  {
    nome: "DESENVOLVEDOR BACK-END - PYTHON",
    instituicao: "SENAI/SC - Serviço Nacional de Aprendizagem Industrial",
    data: "Verificação emitida em mai de 2024",
    logo: "senai.svg",
    certificadoImg: "/CertificadoBackEndPYTHON.jpeg",
  },
  {
    nome: "Certificado de Participante da Olimpíada Brasileira de Geopolítica - 2023.2",
    instituicao: "Seleta Educação",
    data: "Verificação emitida em nov de 2023",
    logo: "seleta.jpeg",
    certificadoImg: "/CertificadoOBGP2023.jpeg",
  },
  {
    nome: "1º Feira de Ciências",
    instituicao: "Senac Santa Catarina",
    data: "Verificação emitida em jun de 2023",
    logo: "senac.svg",
    certificadoImg: "/Certificado1FeiraDeCiências.jpeg",
  },
  {
    nome: "Profissional Assistente de Desenvolvedor de Games",
    instituicao: "Senac Santa Catarina",
    data: "Verificação emitida em dez de 2022",
    logo: "senac.svg",
    certificadoImg: "/CertificadoAssistenteDeGameDev.jpeg",
  },
  {
    nome: "Certificado de Medalha de Prata na 24º Olimpíada Brasileira de Astronomia e Astronáutica",
    instituicao: "OBA - Olimpíada Brasileira de Astronomia e Astronáutica",
    data: "Verificação emitida em out de 2021",
    logo: "oba.jpeg",
    certificadoImg: "/CertificadoOBA.jpeg",
  },
  {
    nome: "CURSO DE INFORMÁTICA E TECNOLOGIA",
    instituicao: "MASTER Desenvolvimento Humano e Capacitação Profissional",
    data: "Verificação emitida em jul de 2021",
    logo: "master.jpeg",
    certificadoImg: "/CertificadoINFORMATICA.jpeg",
  },
];

export default function CertificatesSection() {
  return (
    <section id="certificates" className="py-16 px-4 bg-gray-900">
      <h2 className="text-3xl font-bold text-center text-white mb-8">
        Certificados
      </h2>

      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {certificados.map((cert, idx) => (
          <div
            key={idx}
            className="bg-gray-800 rounded-lg p-4 text-white shadow-md border border-gray-700 flex flex-col"
          >
            <img
              src={cert.certificadoImg}
              alt={`Imagem do certificado: ${cert.nome}`}
              className="w-full h-40 object-cover rounded-md mb-4 border border-gray-600"
            />
            <h3 className="text-lg font-semibold line-clamp-2">{cert.nome}</h3>
            <div className="flex items-center gap-2 mt-1">
              <img
                src={cert.logo}
                alt={`Logo da ${cert.instituicao}`}
                className="w-4 h-4 object-contain rounded-sm"
              />
              <p className="text-sm text-gray-300">{cert.instituicao}</p>
            </div>
            <p className="text-xs text-gray-400 italic mt-1">{cert.data}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
