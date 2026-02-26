"use client";

import { Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';
import { getImagePath } from '@/lib/utils';

const navLinks = [
  { href: '#home', label: 'Home' },
  { href: '#services', label: 'Services' },
  { href: '#our-story', label: 'About Us' },
  { href: '#testimonials', label: 'Testimonials' },
  { href: '#connect', label: 'Contact' },
];

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = '';
    }
  }, [isMobileMenuOpen]);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (isMobileMenuOpen) {
        const target = e.target as HTMLElement;
        const header = document.querySelector('header');
        const mobileMenu = document.querySelector('[data-mobile-menu]');
        if (header && !header.contains(target) && mobileMenu && !mobileMenu.contains(target)) {
          setIsMobileMenuOpen(false);
        }
      }
    };
    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, [isMobileMenuOpen]);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'py-3 bg-background/95 backdrop-blur-md shadow-lg border-b border-white/5' : 'py-4 md:py-6 bg-transparent'
        }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <a
            href="#home"
            onClick={(e) => handleNavClick(e, '#home')}
            className="flex items-center gap-2 sm:gap-3 group"
          >
            <div className="relative w-10 h-10 sm:w-12 sm:h-12 overflow-hidden rounded-xl shadow-lg border border-white/10 group-hover:scale-105 transition-transform duration-300">
              <img
                src={getImagePath('/images/logo.jpg')}
                alt="Caliber Business Resource Logo"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-base sm:text-lg leading-none text-white tracking-tight">
                Caliber
              </span>
              <span className="text-[10px] sm:text-xs text-primary font-medium tracking-wider uppercase">
                Business Resource
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6 lg:gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="text-sm font-medium text-gray-300 hover:text-primary transition-colors relative group"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
            <a
              href="#open-roles"
              onClick={(e) => handleNavClick(e, '#open-roles')}
              className="bg-primary hover:bg-primary/90 text-background px-5 lg:px-6 py-2 lg:py-2.5 rounded-lg text-sm font-bold transition-all duration-300 hover:shadow-[0_0_20px_-5px_rgba(255,193,7,0.5)] transform hover:-translate-y-0.5"
            >
              View Jobs
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white p-2 -mr-2 hover:bg-white/5 rounded-lg transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 bg-black/60 backdrop-blur-sm md:hidden transition-opacity duration-300 pointer-events-none ${isMobileMenuOpen ? 'opacity-100 z-40' : 'opacity-0'
          }`}
      />

      {/* Mobile Menu */}
      <div
        data-mobile-menu
        className={`md:hidden fixed top-[72px] left-0 right-0 bg-background border-t border-white/10 shadow-2xl transition-all duration-300 ease-in-out z-50 ${isMobileMenuOpen ? 'max-h-[calc(100vh-72px)] opacity-100 translate-y-0' : 'max-h-0 opacity-0 -translate-y-4 overflow-hidden pointer-events-none'
          }`}
      >
        <div className="p-4 sm:p-6 space-y-1 overflow-y-auto max-h-[calc(100vh-72px)]">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="block text-gray-300 hover:text-primary hover:bg-white/5 transition-colors font-medium px-4 py-3.5 rounded-xl text-base"
            >
              {link.label}
            </a>
          ))}
          <div className="pt-3">
            <a
              href="#open-roles"
              onClick={(e) => handleNavClick(e, '#open-roles')}
              className="block bg-primary text-background px-6 py-3.5 rounded-xl text-center font-bold text-base"
            >
              View Jobs
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
