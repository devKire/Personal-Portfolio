"use client";

import emailjs from "emailjs-com";
import { Button } from "./ui/button";
import { Textarea } from "./ui/textarea";
import { Input } from "./ui/input";
import { Label } from "./ui/label";

const sendEmail = (e: React.FormEvent) => {
  e.preventDefault();

  const serviceId = process.env.REACT_APP_EMAIL_JS_SERVICE_ID;
  const templateId = process.env.REACT_APP_EMAIL_JS_TEMPLATE_ID;
  const userId = process.env.REACT_APP_EMAIL_JS_USER_ID;

  if (!serviceId || !templateId || !userId) {
    console.error("Erro: Variáveis de ambiente não configuradas corretamente.");
    alert("Erro interno: Não foi possível enviar o e-mail.");
    return;
  }

  // Garantir que o formulário seja tratado corretamente como um HTMLFormElement
  const form = e.target as HTMLFormElement;

  // Acessar os valores dos campos de forma correta
  const formData = {
    from_name: (form.elements.namedItem("name") as HTMLInputElement).value, // Nome da pessoa que enviou
    from_email: (form.elements.namedItem("email") as HTMLInputElement).value, // E-mail da pessoa que enviou
    message: (form.elements.namedItem("message") as HTMLTextAreaElement).value, // A mensagem enviada
    to_name: "Erik", // Seu nome (o destinatário do e-mail)
  };

  console.log(formData); // Para depuração

  // Enviando o e-mail diretamente
  emailjs
    .send(serviceId, templateId, formData, userId) // Enviando os dados para o template
    .then((result) => {
      console.log(result.text);
      alert("Mensagem enviada com sucesso!");
    })
    .catch((error) => {
      console.error("Erro ao enviar o e-mail:", error.text);
      alert("Ocorreu um erro ao enviar a mensagem.");
    });
};

export default function ContactSection() {
  return (
    <form onSubmit={sendEmail}>
      <div className="grid gap-4 py-4">
        <div className="grid grid-cols-4 items-center gap-4">
          <Label htmlFor="name" className="text-right">
            Nome
          </Label>
          <Input
            id="name"
            name="name"
            type="text"
            required
            placeholder="Digite seu nome"
            className="col-span-3"
          />
        </div>
        <div className="grid grid-cols-4 items-center gap-4">
          <Label htmlFor="email" className="text-right">
            Email
          </Label>
          <Input
            id="email"
            name="email"
            type="email"
            required
            placeholder="Digite seu e-mail"
            className="col-span-3"
          />
        </div>
        <div className="grid grid-cols-4 items-center gap-4">
          <Label htmlFor="message" className="text-right">
            Mensagem
          </Label>
          <Textarea
            id="message"
            name="message"
            required
            placeholder="Sua mensagem"
            rows={4}
            className="col-span-3"
          />
        </div>
      </div>
      {/* Botão de Enviar */}
      <Button
        type="submit"
        className="w-full bg-purple-600 hover:bg-purple-700 text-white py-3 rounded-lg transition-colors"
      >
        Enviar Mensagem
      </Button>
    </form>
  );
}
