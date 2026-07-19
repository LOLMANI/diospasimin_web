import type { Metadata } from "next";
import { Users, History, Flame } from "lucide-react";

export const metadata: Metadata = {
  title: "Sobre Nosotros - Diospasimin",
  description: "Conoce la historia detrás de Diospasimin.com, el esfuerzo de traducción al quechua iniciado en el año 2000 y nuestro deseo de seguir compartiendo las Escrituras.",
};

export default function SobreNosotros() {
  return (
    <article className="w-full flex flex-col items-center min-h-[60vh]">
      {/* Hero Section for About Page */}
      <section className="w-full bg-gradient-to-b from-dios-brown to-dios-dark text-white py-12 md:py-16 px-6 text-center border-b border-dios-orange/20 shadow-md">
        <div className="max-w-4xl mx-auto">
          <p className="text-xs tracking-[0.3em] font-bold text-dios-gold mb-3 uppercase">
            Ñuqanchikmanta
          </p>
          <h1 className="text-3xl md:text-5xl font-extrabold tracking-wide drop-shadow-md">
            Sobre Nosotros
          </h1>
        </div>
      </section>

      {/* Main Content Details */}
      <section className="w-full max-w-4xl px-6 py-12 md:py-16 space-y-12">
        {/* Intro Highlight Card */}
        <div className="bg-white rounded-3xl p-8 shadow-sm border border-dios-gold/20 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-2 h-full bg-dios-orange" />
          <p className="text-lg md:text-xl text-dios-text leading-relaxed font-medium italic text-center">
            &quot;Nuestro deseo es que estas enseñanzas sigan siendo de bendición para muchas vidas.&quot;
          </p>
        </div>

        {/* Story Grid layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Card 1: El Comienzo */}
          <div className="bg-white rounded-3xl p-6 md:p-8 shadow-sm border border-gray-100 flex flex-col gap-4 hover:shadow-md transition-shadow">
            <div className="size-12 bg-dios-cream rounded-xl border border-dios-gold/30 flex items-center justify-center text-dios-orange">
              <History size={24} />
            </div>
            <h2 className="text-xl md:text-2xl font-bold text-dios-brown">El Comienzo (Año 2000)</h2>
            <p className="text-dios-text/90 leading-relaxed text-sm md:text-base text-justify">
              Este material forma parte de un trabajo que comenzó en el año 2000, cuando Dios puso en el corazón de siervos suyos el deseo de servir al pueblo quechua en los Andes del Perú.
            </p>
            <p className="text-dios-text/90 leading-relaxed text-sm md:text-base text-justify">
              En ese tiempo, los esposos Woods respondieron a este llamado y, junto a otros hermanos, iniciaron una labor dedicada a fortalecer la iglesia a través de la enseñanza de la Palabra de Dios en su propio idioma.
            </p>
          </div>

          {/* Card 2: Gratitud y Colaboración */}
          <div className="bg-white rounded-3xl p-6 md:p-8 shadow-sm border border-gray-100 flex flex-col gap-4 hover:shadow-md transition-shadow">
            <div className="size-12 bg-dios-cream rounded-xl border border-dios-gold/30 flex items-center justify-center text-dios-orange">
              <Users size={24} />
            </div>
            <h2 className="text-xl md:text-2xl font-bold text-dios-brown">Gratitud y Esfuerzo</h2>
            <p className="text-dios-text/90 leading-relaxed text-sm md:text-base text-justify">
              A lo largo de los años, muchos hermanos entregaron su tiempo, esfuerzo y amor para hacer posible la traducción y adaptación de este material al quechua. Entre ellos, se puede mencionar a la familia Mendoza, la familia Garay, la familia Espinoza, Ingrid Burger, por señalar algunos que fueron parte de este ministerio.
            </p>
            <p className="text-dios-text/90 leading-relaxed text-sm md:text-base text-justify">
              Gracias a este trabajo, se lograron desarrollar enseñanzas organizadas en módulos, acompañadas de materiales de estudio y recursos audiovisuales, los cuales han sido de ayuda para muchos hermanos en distintas comunidades.
            </p>
          </div>
        </div>

        {/* Card 3: El Sueño Continúa (Full Width) */}
        <div className="bg-gradient-to-r from-dios-cream to-white rounded-3xl p-8 shadow-sm border border-dios-gold/30 flex flex-col md:flex-row gap-6 items-start hover:shadow-md transition-shadow">
          <div className="size-14 bg-white rounded-2xl border border-dios-gold/40 flex items-center justify-center text-dios-orange flex-shrink-0 self-center md:self-start">
            <Flame size={28} className="animate-pulse" />
          </div>
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-dios-brown">El Sueño Continúa</h2>
            <p className="text-dios-text/90 leading-relaxed text-sm md:text-base text-justify">
              Actualmente, la asociación <strong>&quot;Ministerios Andinos del Perú&quot;</strong> que impulsó este trabajo ya no se encuentra en funcionamiento; sin embargo, todo este material permanece disponible para todo aquel que desee aprender y crecer en la Palabra de Dios.
            </p>
            <p className="text-dios-text/90 leading-relaxed text-sm md:text-base text-justify">
              Hoy en día, <strong>Ingrid Burger</strong> y <strong>Eber Mendoza</strong> continúan impulsando este sueño a través de esta página web, con el anhelo de que este material llegue a muchos lugares, y que sea Dios quien guíe y lleve su Palabra a cada corazón.
            </p>
          </div>
        </div>
      </section>
    </article>
  );
}
