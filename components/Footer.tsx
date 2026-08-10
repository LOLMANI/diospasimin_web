import { Mail, BookOpen, MessageCircle, ChevronRight, Phone } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  const whatsappNumber = "51972600104";
  const whatsappMessage = "Quisiera obtener el material del curso por favor";
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-dios-dark text-white pt-16 pb-8 px-6 mt-auto border-t-[6px] border-dios-orange">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
        
        {/* Column 1: Brand & Description */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <Link href="/" className="transition hover:opacity-90 inline-block mb-4">
            <Image 
              src="/logos/logo2.png" 
              alt="Diospa simin Logo" 
              width={180} 
              height={45} 
              className="h-12 w-auto object-contain"
            />
          </Link>
          <p className="text-dios-gold text-[10px] md:text-xs tracking-[0.2em] font-semibold uppercase mb-4">
            Iñiypa Yachay Wasin
          </p>
          <p className="text-sm font-light text-gray-400 leading-relaxed max-w-xs">
            Un ministerio dedicado a llevar la Palabra de Dios a cada corazón, compartiendo las verdades eternas a través de enseñanzas bilingües.
          </p>
        </div>

        {/* Column 2: Quick Links */}
        <div className="flex flex-col items-center md:items-start">
          <h3 className="text-white font-bold text-lg mb-6 tracking-wide relative after:content-[''] after:absolute after:-bottom-2 after:left-1/2 md:after:left-0 after:-translate-x-1/2 md:after:translate-x-0 after:w-10 after:h-1 after:bg-dios-orange after:rounded-full">
            Enlaces Rápidos
          </h3>
          <ul className="flex flex-col gap-4 text-sm font-medium text-gray-400">
            <li>
              <Link href="/" className="hover:text-dios-orange transition-all flex items-center gap-2 group">
                <ChevronRight size={14} className="text-dios-orange opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300" />
                <span>Inicio</span>
              </Link>
            </li>
            <li>
              <Link href="/sobre-nosotros" className="hover:text-dios-orange transition-all flex items-center gap-2 group">
                <ChevronRight size={14} className="text-dios-orange opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300" />
                <span>Sobre Nosotros</span>
              </Link>
            </li>
            <li>
              <Link href="/contacto" className="hover:text-dios-orange transition-all flex items-center gap-2 group">
                <ChevronRight size={14} className="text-dios-orange opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300" />
                <span>Contacto</span>
              </Link>
            </li>
          </ul>
        </div>

        {/* Column 3: Contact */}
        <div className="flex flex-col items-center md:items-start">
          <h3 className="text-white font-bold text-lg mb-6 tracking-wide relative after:content-[''] after:absolute after:-bottom-2 after:left-1/2 md:after:left-0 after:-translate-x-1/2 md:after:translate-x-0 after:w-10 after:h-1 after:bg-dios-orange after:rounded-full">
            Contáctanos
          </h3>
          <div className="flex flex-col gap-5 text-gray-300">
            <a href="mailto:inayacucho@hotmail.com" className="flex items-center gap-3 hover:text-white transition-colors group">
              <div className="bg-white/5 p-2.5 rounded-lg group-hover:bg-dios-orange/20 border border-white/5 group-hover:border-dios-orange/30 transition-all">
                <Mail size={18} className="text-dios-orange" />
              </div>
              <span className="text-sm font-light">inayacucho@hotmail.com</span>
            </a>
            
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 hover:text-white transition-colors group">
              <div className="bg-white/5 p-2.5 rounded-lg group-hover:bg-dios-orange/20 border border-white/5 group-hover:border-dios-orange/30 transition-all">
                <MessageCircle size={18} className="text-dios-orange" />
              </div>
              <div className="flex flex-col">
                <span className="text-sm font-light">+51 972 600 104</span>
                <span className="text-[11px] text-gray-500 font-medium">Hermana Ingrid</span>
              </div>
            </a>

            <div className="flex items-center gap-3">
              <div className="bg-white/5 p-2.5 rounded-lg border border-white/5">
                <Phone size={18} className="text-dios-orange" />
              </div>
              <span className="text-sm font-light text-gray-400">Atención Lunes a Sábado</span>
            </div>
          </div>
        </div>

      </div>

      {/* Bottom Bar */}
      <div className="max-w-6xl mx-auto border-t border-white/10 pt-6 flex flex-col md:flex-row justify-between items-center gap-4 text-xs tracking-wider text-gray-500 font-medium">
        <div className="flex items-center gap-2">
          <BookOpen size={14} className="text-dios-orange" />
          <span>DIOSPA SIMIN - AYACUCHO, PERÚ</span>
        </div>
        <p className="text-center md:text-right">
          &copy; {currentYear} Diospa simin. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
}