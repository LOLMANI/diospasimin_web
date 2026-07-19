'use client';

import { useState } from 'react';
import { ChevronDown, ChevronUp, PlayCircle } from 'lucide-react';

export interface Lesson {
  titleQuechua: string;
  titleSpanish: string;
  youtubeId?: string;
  startTime?: number;
}

interface ModuleProps {
  number: string;
  titleQuechua: string;
  titleSpanish: string;
  lessons: Lesson[];
  isExpanded?: boolean;
  onSelectLesson: (lesson: Lesson) => void; // NUEVO: Señal para abrir el modal
}

export default function Module({ number, titleQuechua, titleSpanish, lessons, isExpanded = false, onSelectLesson }: ModuleProps) {
  const [isOpen, setIsOpen] = useState(isExpanded);
  const [prevIsExpanded, setPrevIsExpanded] = useState(isExpanded);

  // ELIMINAMOS el estado selectedLesson de aquí. Ya no lo necesitamos.

  if (isExpanded !== prevIsExpanded) {
    setIsOpen(isExpanded);
    setPrevIsExpanded(isExpanded);
  }

  return (
    <div className="w-full max-w-4xl mx-auto mb-4 bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
      <div
          onClick={() => setIsOpen(!isOpen)}
          className={`w-full flex items-center justify-between p-6 transition-colors cursor-pointer ${
            isOpen ? 'bg-[#FCF8F2]' : 'bg-white hover:bg-gray-50'
          }`}
          role="button"
          tabIndex={0}
        >
        <div className="flex items-center gap-6 md:gap-8">
          <span className="text-3xl font-black italic text-dios-gold opacity-80 mr-2">
            {number}
          </span>
          <div className="flex flex-col">
            <h2 className="text-xl md:text-2xl font-bold text-dios-text text-left">
              {titleQuechua}
            </h2>
            <p className="text-sm md:text-base font-medium text-dios-brown opacity-80 text-left mt-1">
              {titleSpanish}
            </p>
          </div>
        </div>
        {isOpen ? (
          <ChevronUp className="text-dios-orange" />
        ) : (
          <ChevronDown className="text-dios-orange" />
        )}
      </div>

      {isOpen && (
        <div className="p-6 bg-white border-t border-gray-50">
          <ul className="flex flex-col gap-4">
            {lessons.map((lesson, index) => {
              // Extraer el número si existe (ej. "1. ")
              const match = lesson.titleQuechua.match(/^(\d+\.)\s*(.*)$/);
              const hasNumber = !!match;
              const numText = hasNumber ? match[1] : '';
              const mainText = hasNumber ? match[2] : lesson.titleQuechua;

              return (
                <li 
                  key={index} 
                  onClick={() => onSelectLesson(lesson)} // NUEVO: Disparamos la señal
                  className="flex items-center justify-between group cursor-pointer hover:bg-gray-50 p-3 rounded-xl transition"
                >
                  <div className="flex flex-col">
                    <span className="text-dios-text text-sm md:text-base font-bold group-hover:text-dios-orange transition leading-tight flex items-start">
                      {hasNumber && <span className="text-dios-gold/80 font-black mr-3">{numText}</span>}
                      <span>{mainText}</span>
                    </span>
                    <span className="text-dios-text/60 text-xs md:text-sm font-medium mt-0.5">
                      {lesson.titleSpanish}
                    </span>
                  </div>
                  <PlayCircle className="text-dios-gold group-hover:text-dios-orange transition shrink-0" size={28} strokeWidth={1.5} />
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </div>
  );
}