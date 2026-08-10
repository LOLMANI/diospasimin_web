'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { name: 'INICIO', href: '/' },
    { name: 'SOBRE NOSOTROS', href: '/sobre-nosotros' },
    { name: 'CONTACTO', href: '/contacto' },
  ];

  const isActive = (path: string) => {
    if (path === '/') {
      return pathname === '/';
    }
    return pathname.startsWith(path);
  };

  return (
    <header className="sticky top-0 z-40 bg-dios-brown text-white shadow-md border-b border-dios-dark/20 backdrop-blur-md bg-opacity-95">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="flex items-center gap-2 group transition">
              <Image 
                src="/logos/logo2.png" 
                alt="Diospa simin Logo" 
                width={180} 
                height={45} 
                className="h-10 sm:h-12 w-auto object-contain transition-transform group-hover:scale-102"
                priority
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8 items-center">
            {navLinks.map((link) => {
              const active = isActive(link.href);
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`text-sm tracking-wider font-semibold py-2 px-1 relative transition-colors duration-200 border-b-2 ${
                    active 
                      ? 'text-dios-gold border-dios-gold' 
                      : 'text-white/80 hover:text-white border-transparent hover:border-white/30'
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-lg text-white/80 hover:text-white hover:bg-dios-dark/40 focus:outline-none transition cursor-pointer"
              aria-expanded="false"
            >
              <span className="sr-only">Abrir menú principal</span>
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Dropdown */}
      <div 
        className={`md:hidden absolute left-0 right-0 top-full transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-60 opacity-100 visible shadow-lg' : 'max-h-0 opacity-0 invisible overflow-hidden'
        }`}
      >
        <div className="px-2 pt-2 pb-4 space-y-1 bg-dios-dark border-t border-dios-brown/20 shadow-inner">
          {navLinks.map((link) => {
            const active = isActive(link.href);
            return (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={`block px-4 py-3 rounded-xl text-base font-semibold tracking-wide transition-colors ${
                  active 
                    ? 'text-dios-gold bg-dios-brown/40' 
                    : 'text-white/80 hover:text-white hover:bg-dios-brown/20'
                }`}
              >
                {link.name}
              </Link>
            );
          })}
        </div>
      </div>
    </header>
  );
}