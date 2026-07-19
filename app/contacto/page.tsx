import type { Metadata } from "next";
import { MessageCircle, Mail, BookOpen, Globe, CheckCircle2 } from "lucide-react";

export const metadata: Metadata = {
  title: "Contacto - Diospasimin",
  description: "Escríbenos por WhatsApp al +51 972 600 104 para solicitar libros de estudio y materiales de enseñanza en quechua o español.",
};

export default function Contacto() {
  const whatsappNumber = "51972600104";
  const whatsappMessage = "Quisiera obtener el material del curso por favor";
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <article className="w-full flex flex-col items-center min-h-[60vh]">
      {/* Hero Section for Contact Page */}
      <section className="w-full bg-gradient-to-b from-dios-brown to-dios-dark text-white py-12 md:py-16 px-6 text-center border-b border-dios-orange/20 shadow-md">
        <div className="max-w-4xl mx-auto">
          <p className="text-xs tracking-[0.3em] font-bold text-dios-gold mb-3 uppercase">
            Tupanakuypaq
          </p>
          <h1 className="text-3xl md:text-5xl font-extrabold tracking-wide drop-shadow-md">
            Contacto
          </h1>
        </div>
      </section>

      {/* Main Content Details */}
      <section className="w-full max-w-4xl px-6 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Info & Materials */}
          <div className="md:col-span-7 bg-white rounded-3xl p-6 md:p-8 shadow-sm border border-gray-100 space-y-6">
            <h2 className="text-2xl font-bold text-dios-brown">¿Cómo podemos ayudarte?</h2>
            
            <p className="text-dios-text/90 leading-relaxed text-justify text-base">
              Si deseas acceder al material complementario o tienes alguna consulta, puedes escribirnos directamente. Será una gran alegría poder guiarte y compartir contigo estos recursos.
            </p>

            <div className="border-t border-gray-100 pt-6">
              <h3 className="text-base font-bold text-dios-text mb-4 uppercase tracking-wider">
                Materiales disponibles:
              </h3>
              
              <ul className="space-y-4">
                <li className="flex gap-3 items-start">
                  <div className="bg-dios-cream p-2 rounded-lg text-dios-orange border border-dios-gold/20 flex-shrink-0">
                    <BookOpen size={18} />
                  </div>
                  <div>
                    <h4 className="font-bold text-dios-brown text-sm md:text-base">Libros de estudio</h4>
                    <p className="text-xs md:text-sm text-gray-500">Guías escritas desarrolladas para profundizar en los módulos.</p>
                  </div>
                </li>
                
                <li className="flex gap-3 items-start">
                  <div className="bg-dios-cream p-2 rounded-lg text-dios-orange border border-dios-gold/20 flex-shrink-0">
                    <Globe size={18} />
                  </div>
                  <div>
                    <h4 className="font-bold text-dios-brown text-sm md:text-base">Material en quechua o español</h4>
                    <p className="text-xs md:text-sm text-gray-500">Adaptaciones lingüísticas pensadas especialmente para las comunidades andinas.</p>
                  </div>
                </li>
              </ul>
            </div>

            <div className="bg-dios-cream/50 rounded-2xl p-4 border border-dios-gold/20 flex items-center gap-3">
              <CheckCircle2 size={20} className="text-dios-orange flex-shrink-0" />
              <p className="text-xs md:text-sm text-dios-text/80 italic font-medium">
                Todo el material se comparte de manera libre y gratuita.
              </p>
            </div>
          </div>

          {/* Right Column: Dynamic Action Cards */}
          <div className="md:col-span-5 space-y-6">
            
            {/* WhatsApp Contact Card */}
            <div className="bg-white rounded-3xl p-6 md:p-8 shadow-sm border border-gray-100 text-center flex flex-col items-center gap-4 hover:shadow-md transition-shadow">
              <div className="size-14 bg-green-50 text-green-600 rounded-2xl flex items-center justify-center border border-green-100">
                <MessageCircle size={32} />
              </div>
              <div>
                <h3 className="font-bold text-dios-brown text-lg">WhatsApp</h3>
                <p className="text-xs text-gray-400 mt-1">Respuesta rápida y directa</p>
              </div>
              
              <a 
                href={whatsappLink} 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-full bg-[#25D366] hover:bg-[#20ba5a] text-white py-3 px-4 rounded-2xl font-bold transition flex items-center justify-center gap-2 shadow-sm shadow-green-100 active:scale-98 cursor-pointer text-sm"
              >
                <MessageCircle size={18} />
                Chatear en WhatsApp
              </a>
              <span className="text-sm font-semibold text-dios-text/80 tracking-wider">
                +51 972 600 104
              </span>
            </div>

            {/* Email Contact Card */}
            <div className="bg-white rounded-3xl p-6 md:p-8 shadow-sm border border-gray-100 text-center flex flex-col items-center gap-4 hover:shadow-md transition-shadow">
              <div className="size-14 bg-dios-cream text-dios-orange rounded-2xl flex items-center justify-center border border-dios-gold/20">
                <Mail size={28} />
              </div>
              <div>
                <h3 className="font-bold text-dios-brown text-lg">Correo Electrónico</h3>
                <p className="text-xs text-gray-400 mt-1">Para consultas generales y archivos</p>
              </div>
              
              <a 
                href="mailto:inayacucho@hotmail.com"
                className="w-full bg-dios-brown hover:bg-dios-dark text-white py-3 px-4 rounded-2xl font-bold transition flex items-center justify-center gap-2 active:scale-98 cursor-pointer text-sm"
              >
                <Mail size={18} />
                Enviar Correo
              </a>
              <span className="text-xs text-gray-500 font-mono select-all">
                inayacucho@hotmail.com
              </span>
            </div>

          </div>
        </div>
      </section>
    </article>
  );
}
