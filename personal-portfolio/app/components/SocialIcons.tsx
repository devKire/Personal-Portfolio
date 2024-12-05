import Image from "next/image";
import Link from "next/link";

export function SocialIcons() {
  return (
    <div className="flex space-x-6 justify-center mt-6">
      <Link
        href="https://www.linkedin.com/in/erik-rafael-dos-santos-416b64251/"
        target="_blank"
        title="LinkedIn"
      >
        <Image
          src="https://cdn.jsdelivr.net/npm/simple-icons@v5/icons/linkedin.svg"
          alt="LinkedIn"
          width={28}
          height={28}
          className="w-8 h-8 hover:scale-110 transition-transform"
        />
      </Link>
      <Link href="https://github.com/devKire" target="_blank" title="GitHub">
        <Image
          src="https://cdn.jsdelivr.net/npm/simple-icons@v5/icons/github.svg"
          alt="GitHub"
          width={28}
          height={28}
          className="w-8 h-8 hover:scale-110 transition-transform"
        />
      </Link>
      <Link href="https://wa.me/47999248948" target="_blank" title="Whatsapp">
        <Image
          src="https://cdn.jsdelivr.net/npm/simple-icons@v5/icons/whatsapp.svg"
          alt="Whatsapp"
          width={28}
          height={28}
          className="w-8 h-8 hover:scale-110 transition-transform"
        />
      </Link>
      <Link
        href="mailto:erikdossantos2006@outlook.com"
        target="_blank"
        title="Email"
      >
        <Image
          src="https://cdn.jsdelivr.net/npm/simple-icons@v5/icons/gmail.svg"
          alt="Email"
          width={28}
          height={28}
          className="w-8 h-8 hover:scale-110 transition-transform"
        />
      </Link>
      <Link
        href="/ERIK RAFAEL DOS SANTOS - TI.pdf"
        target="_blank"
        title="Currículo PDF"
      >
        <Image
          src="https://cdn.jsdelivr.net/npm/simple-icons@v5/icons/adobeacrobatreader.svg"
          alt="Currículo"
          width={28}
          height={28}
          className="w-8 h-8 hover:scale-110 transition-transform"
        />
      </Link>
    </div>
  );
}
