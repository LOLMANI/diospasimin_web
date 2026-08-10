'use client';

import { X } from 'lucide-react';
import { useEffect } from 'react';

interface VideoModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  titleSpanish?: string;
  youtubeId?: string;
  startTime?: number;
}

export default function VideoModal({ isOpen, onClose, title, titleSpanish, youtubeId, startTime }: VideoModalProps) {
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

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      <div className="fixed inset-0 bg-black/90 transition-opacity" />
      
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
            <iframe
              className="absolute top-0 left-0 w-full h-full border-none"
              src={`https://www.youtube.com/embed/${activeId}?rel=0${startTime ? `&start=${startTime}` : ''}`}
              title="Reproductor de enseñanzas"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>

          <div className="p-8 bg-[#FBF9F2]">
            <p className="text-gray-700 leading-relaxed text-lg text-center font-medium">
              {titleSpanish || "Descripción de la enseñanza"}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
