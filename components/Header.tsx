import { Sun } from 'lucide-react';

export default function Header() {
  return (
    <header className="bg-dios-brown text-white py-16 px-6 relative flex flex-col items-center text-center">
      {/* Ícono superior izquierdo */}
      <div className="absolute top-8 left-8">
        <Sun size={48} className="text-dios-brown opacity-50" strokeWidth={1.5} style={{ color: '#8B4513' }} /> 
      </div>

      <p className="text-xs tracking-[0.3em] font-semibold text-dios-gold mb-4 uppercase">
        Iñiypa Yachay Wasin
      </p>
      
      <h1 className="text-5xl md:text-7xl font-bold tracking-widest mb-6">
        RIMAY RELEE
      </h1>
      
      <p className="text-lg md:text-xl italic font-light max-w-2xl mb-8 opacity-90">
        &quot;Jesuspa Dios kasqanmanta hinaspa rurayninkunamanta yachanapaq&quot;
      </p>

      <button className="bg-dios-orange text-white px-6 py-2 rounded-full font-medium hover:bg-orange-600 transition flex items-center gap-2 cursor-pointer">
        Explorar Materias
        <span className="text-sm">▼</span>
      </button>
    </header>
  );
}