'use client';

import { X, Play } from 'lucide-react';
import { useEffect, useState } from 'react';

interface VideoModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  youtubeId?: string;
  startTime?: number;
}

export default function VideoModal({ isOpen, onClose, title, youtubeId, startTime }: VideoModalProps) {
  const [showVideo, setShowVideo] = useState(false);
  
  // Recuperamos la memoria del estado anterior para evitar el error de ESLint
  const [prevIsOpen, setPrevIsOpen] = useState(isOpen);

  // Ajuste de estado seguro: Si se acaba de abrir, reiniciamos a la portada
  if (isOpen !== prevIsOpen) {
    setPrevIsOpen(isOpen);
    if (isOpen) {
      setShowVideo(false);
    }
  }

  // El useEffect vuelve a quedar solo para el DOM (el scroll)
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [isOpen]);

  if (!isOpen) return null;

  const activeId = youtubeId || "dQw4w9WgXcQ";
  const thumbnailUrl = `https://i.ytimg.com/vi/${activeId}/hqdefault.jpg`;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">

      <div className="fixed inset-0 bg-black/90 transition-opacity"  />
      
      <div className="relative w-full max-w-4xl flex flex-col items-center z-10">
        <div className="relative w-full bg-[#FCFBF7] rounded-3xl shadow-2xl overflow-hidden flex flex-col">
          
          <div className="flex items-center justify-between p-6 bg-dios-brown">
            <h3 className="font-extrabold text-xl md:text-2xl text-white leading-tight pr-4">
              {title}
            </h3>
            <button
              onClick={onClose}
              className="p-2 bg-white/10 hover:bg-white/20 text-white rounded-full transition cursor-pointer flex-shrink-0"
            >
              <X size={24} strokeWidth={2.5} />
            </button>
          </div>

          <div className="relative w-full pt-[56.25%] bg-black">
            {!showVideo ? (
              <div 
                className="absolute top-0 left-0 w-full h-full bg-cover bg-center flex items-center justify-center cursor-pointer group"
                style={{ backgroundImage: `url(${thumbnailUrl})` }}
                onClick={() => setShowVideo(true)}
              >
                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-colors" />
                <button 
                  className="relative z-10 size-24 flex items-center justify-center bg-dios-orange hover:bg-dios-orange/90 text-white rounded-full shadow-2xl transition-transform transform group-hover:scale-110 cursor-pointer pointer-events-none"
                >
                  <Play size={48} fill="currentColor" />
                </button>
              </div>
            ) : (
              <iframe
                className="absolute top-0 left-0 w-full h-full border-none"
                src={`https://www.youtube.com/embed/${activeId}?autoplay=1&rel=0${startTime ? `&start=${startTime}` : ''}`}
                title="Reproductor de enseñanzas"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            )}
          </div>

          <div className="p-8 bg-[#FBF9F2]">
            <p className="text-gray-700 leading-relaxed">
              Aquí irá la descripción detallada de la enseñanza.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}