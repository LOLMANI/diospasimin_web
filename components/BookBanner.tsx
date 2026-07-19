import React from 'react';
import { BookOpen } from 'lucide-react';
import Link from 'next/link';

export default function BookBanner() {
  return (
    <div className="w-full max-w-5xl mx-auto mt-8 px-6">
      <div className="bg-gradient-to-r from-dios-brown to-[#732a24] rounded-2xl shadow-lg p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-6 transform transition hover:scale-[1.01]">
        <div className="flex items-center gap-6">
          <div className="bg-dios-gold/20 p-4 rounded-full">
            <BookOpen className="text-dios-gold w-10 h-10" />
          </div>
          <div>
            <h3 className="text-white text-xl md:text-2xl font-bold mb-2">
              ¿Quieres profundizar más?
            </h3>
            <p className="text-white/80 text-sm md:text-base">
              Si quieres obtener el libro completo de enseñanzas para seguir aprendiendo.
            </p>
          </div>
        </div>
        
        <Link 
          href="/contacto" 
          className="bg-dios-gold hover:bg-dios-orange text-white font-bold py-3 px-8 rounded-full transition shadow-md whitespace-nowrap"
        >
          Obtener Libro
        </Link>
      </div>
    </div>
  );
}
