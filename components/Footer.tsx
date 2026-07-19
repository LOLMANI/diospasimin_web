import { Mail, BookOpen, MessageCircle } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  const whatsappNumber = "51972600104";
  const whatsappMessage = "Quisiera obtener el material del curso por favor";
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-dios-dark text-white pt-12 pb-6 px-6 mt-auto">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center md:items-start gap-8 mb-8">
        
        {/* Brand & Logo (Left) */}
        <div className="flex flex-col items-center md:items-start">
          <Link href="/" className="transition hover:opacity-90">
            <Image 
              src="/logos/logo2.png" 
              alt="Diospasimin Logo" 
              width={160} 
              height={40} 
              className="h-10 w-auto object-contain"
            />
          </Link>
          <p className="text-dios-gold text-xs tracking-[0.2em] font-semibold mt-3 uppercase text-center md:text-left">
            Iñiypa Yachay Wasin
          </p>
          <p className="text-sm italic font-light mt-4 text-gray-400">
            &quot;Astawan yachaykunaykipaq&quot;
          </p>
        </div>

        {/* Quick Links (Center) */}
        <div className="flex flex-col md:flex-row gap-6 md:gap-8 text-sm font-medium tracking-wide text-gray-400 items-center">
          <Link href="/" className="hover:text-white transition-colors">HOME</Link>
          <Link href="/sobre-nosotros" className="hover:text-white transition-colors">SOBRE NOSOTROS</Link>
          <Link href="/contacto" className="hover:text-white transition-colors">CONTACTO</Link>
        </div>

        {/* Contact Section (Right) */}
        <div className="flex flex-col sm:flex-row gap-6 items-center md:items-end">
          <div className="text-center md:text-right">
            <a href="mailto:inayacucho@hotmail.com" className="text-dios-orange font-bold text-sm md:text-base hover:text-orange-400 transition flex items-center gap-2 justify-center md:justify-end">
              <Mail size={16} />
              inayacucho@hotmail.com
            </a>
          </div>
          <div className="text-center md:text-right">
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="text-dios-orange font-bold text-sm md:text-base hover:text-orange-400 transition flex items-center gap-2 justify-center md:justify-end">
              <MessageCircle size={16} />
              +51 972 600 104
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="max-w-6xl mx-auto border-t border-gray-900 pt-6 flex flex-col md:flex-row justify-between items-center gap-4 text-xs tracking-wider text-gray-500 font-medium">
        <div className="flex items-center gap-2">
          <div className="bg-dios-orange/20 p-1.5 rounded-lg border border-dios-orange/30 text-dios-orange">
            <BookOpen size={14} />
          </div>
          <span>DIOSPASIMIN - AYACUCHO, PERÚ</span>
        </div>
        <p className="text-center md:text-right">
          &copy; {currentYear} Diospasimin.com. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
}