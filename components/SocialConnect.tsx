"use client";

import { Facebook, Linkedin, ArrowUpRight } from 'lucide-react';
import { useScrollAnimation } from '@/lib/useScrollAnimation';

const socialPlatforms = [
  {
    name: 'Facebook',
    handle: '@CaliberBusinessResource',
    description: 'Follow us for daily updates, job openings, and company news.',
    href: 'https://www.facebook.com/profile.php?id=61561838143537',
    icon: Facebook,
    color: 'from-blue-600 to-blue-700',
    bgColor: 'bg-blue-600/10',
    borderColor: 'border-blue-500/30',
    hoverBorder: 'group-hover:border-blue-500',
    followers: 'Join our community',
  },
  {
    name: 'LinkedIn',
    handle: 'Caliber Business Resource',
    description: 'Connect with us professionally and explore career opportunities.',
    href: 'https://www.linkedin.com/in/caliber-business-resource-72905a31b/',
    icon: Linkedin,
    color: 'from-blue-700 to-blue-800',
    bgColor: 'bg-blue-700/10',
    borderColor: 'border-blue-600/30',
    hoverBorder: 'group-hover:border-blue-600',
    followers: 'Connect with us',
  },
];

export default function SocialConnect() {
  const { elementRef, isVisible } = useScrollAnimation({ threshold: 0.1 });
  const cardsAnimation = useScrollAnimation({ threshold: 0.2 });

  return (
    <section id="connect" className="py-24 bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[150px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div 
          ref={elementRef}
          className={`text-center mb-10 sm:mb-16 scroll-slide-up ${isVisible ? 'visible' : ''}`}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-4 sm:mb-6">
            <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
            <span className="text-xs sm:text-sm text-gray-400">Stay Connected</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 sm:mb-6">
            Connect With <span className="text-primary">Us</span>
          </h2>
          <p className="text-gray-400 text-base sm:text-lg max-w-2xl mx-auto px-4 sm:px-0">
            Follow us on social media to stay updated with the latest job openings, 
            company news, and behind-the-scenes content.
          </p>
        </div>

        {/* Social Cards */}
        <div 
          ref={cardsAnimation.elementRef}
          className={`grid sm:grid-cols-2 gap-4 sm:gap-6 max-w-4xl mx-auto scroll-slide-up ${cardsAnimation.isVisible ? 'visible' : ''}`}
        >
          {socialPlatforms.map((platform) => (
            <a
              key={platform.name}
              href={platform.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`group relative p-5 sm:p-8 rounded-2xl ${platform.bgColor} border ${platform.borderColor} ${platform.hoverBorder} transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl`}
            >
              {/* Glow effect */}
              <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${platform.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
              
              <div className="relative">
                {/* Icon and Header */}
                <div className="flex items-start justify-between mb-4 sm:mb-6">
                  <div className={`w-12 h-12 sm:w-16 sm:h-16 rounded-xl sm:rounded-2xl bg-gradient-to-br ${platform.color} flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-500`}>
                    <platform.icon className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                  </div>
                  <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-white/5 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-2 group-hover:translate-x-0">
                    <ArrowUpRight className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-1 sm:mb-2 group-hover:text-primary transition-colors">
                  {platform.name}
                </h3>
                <p className="text-primary font-medium text-xs sm:text-sm mb-2 sm:mb-3">
                  {platform.handle}
                </p>
                <p className="text-gray-400 text-sm sm:text-base mb-4 sm:mb-6 leading-relaxed">
                  {platform.description}
                </p>

                {/* CTA */}
                <div className="flex items-center gap-2 text-xs sm:text-sm font-medium text-white/80 group-hover:text-white transition-colors">
                  <span>{platform.followers}</span>
                  <ArrowUpRight className="w-3 h-3 sm:w-4 sm:h-4 transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-10 sm:mt-16">
          <p className="text-gray-500 text-xs sm:text-sm">
            Prefer email? Reach us at{' '}
            <a href="mailto:info@caliberbusinessresource.com" className="text-primary hover:underline">
              info@caliberbusinessresource.com
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
