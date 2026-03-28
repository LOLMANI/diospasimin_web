import { Mail, BookOpen, MessageCircle } from 'lucide-react';
import Link from 'next/link';

export default function Footer() {
  // Configurar número de WhatsApp aquí (reemplazar con número real)
  const whatsappNumber = "51972600104"; // Formato: código de país + número
  const whatsappMessage = "Quisiera obtener el material del curso porfavor";
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <footer className="bg-dios-dark text-white pt-16 pb-6 px-6 mt-auto flex flex-col items-center">
      {/* Ícono de correo */}
      <div className="bg-[#3A1808] p-3 rounded-xl mb-6">
        <Mail className="text-dios-orange" size={24} />
      </div>

      <p className="text-xl md:text-2xl italic font-light mb-8">
        Astawan yachaykunaykipaq
      </p>
      
      {/* Sección de Contacto */}
      <div className="mb-12 flex flex-col md:flex-row gap-8 md:gap-12 items-center">
        {/* Email */}
        <div className="text-center">
          <p className="text-sm text-gray-400 mb-2 uppercase tracking-widest">Contacto</p>
          <a href="mailto:inayacucho@hotmail.com" className="text-dios-orange font-bold text-lg hover:text-orange-400 transition flex items-center gap-2 justify-center">
            <Mail size={18} />
            inayacucho@hotmail.com
          </a>
        </div>

        {/* WhatsApp */}
        <div className="text-center">
          <p className="text-sm text-gray-400 mb-2 uppercase tracking-widest">WhatsApp</p>
          <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="text-dios-orange font-bold text-lg hover:text-orange-400 transition flex items-center gap-2 justify-center">
            <MessageCircle size={18} />
            Enviar Mensaje
          </a>
        </div>
      </div>

      {/* Barra inferior */}
      <div className="w-full max-w-5xl border-t border-gray-800 pt-6 flex flex-col md:flex-row justify-center items-center gap-4 text-xs tracking-wider text-gray-400 font-medium">
        <div className="flex items-center gap-2">
          <div className="bg-dios-orange p-1 rounded">
            <BookOpen size={14} className="text-white" />
          </div>
          <span>RIMAY RELEE - AYACUCHO, PERÚ</span>
        </div>
      </div>
    </footer>
  );
}