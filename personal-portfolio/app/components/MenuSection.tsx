"use client";

import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Menu } from "lucide-react";
import { Label } from "./ui/label";
import emailjs from "emailjs-com";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet";
import Link from "next/link";
import { Textarea } from "./ui/textarea";
import { SocialIcons } from "./SocialIcons";

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

export function MenuSection() {
  return (
    <section>
      <Sheet>
        <div className="fixed top-4 left-4 z-50">
          <SheetTrigger asChild>
            <button
              className="p-2 rounded-full bg-gray-800 text-white shadow-lg hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-600"
              aria-label="Open Navigation Menu"
            >
              <Menu className="w-6 h-6" />
            </button>
          </SheetTrigger>
        </div>

        <SheetContent className="overflow-y-auto flex flex-col h-full">
          <SheetHeader>
            <SheetTitle>Menu</SheetTitle>
            <SheetDescription>Navegue pelas opções abaixo.</SheetDescription>
          </SheetHeader>

          <div className="space-y-4 py-4">
            {/* Seções de navegação do menu */}
            <div className="flex flex-col gap-2">
              <Link href="#introduction">
                <SheetClose asChild>
                  <Button className="w-full">Inicío</Button>
                </SheetClose>
              </Link>
              <Link href="#about">
                <SheetClose asChild>
                  <Button className="w-full">Sobre Mim</Button>
                </SheetClose>
              </Link>
              <Link href="#projects">
                <SheetClose asChild>
                  <Button className="w-full">Projetos</Button>
                </SheetClose>
              </Link>
              <Link href="#skills">
                <SheetClose asChild>
                  <Button className="w-full">Técnologias e Ferramentas</Button>
                </SheetClose>
              </Link>
              <Link href="#localization">
                <SheetClose asChild>
                  <Button className="w-full">Onde Estou</Button>
                </SheetClose>
              </Link>
            </div>

            {/* Formulário de perfil */}
            <SheetTitle>Contato Direto</SheetTitle>
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
            <SocialIcons />
          </div>
          <SheetFooter className="flex bottom-0 inset-x-0 p-4">
            <SheetClose asChild>
              <Button type="submit" className="w-ful">
                Fechar
              </Button>
            </SheetClose>
          </SheetFooter>
        </SheetContent>
      </Sheet>
    </section>
  );
}
