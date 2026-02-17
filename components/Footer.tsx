"use client";

import { MapPin, Mail, Phone } from 'lucide-react';
import { getImagePath } from '@/lib/utils';

export default function Footer() {
  return (
    <footer id="contact" className="bg-secondary/40 border-t border-white/5 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">

          {/* Brand Column */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="relative w-12 h-12 overflow-hidden rounded-xl border border-white/10">
                <img
                  src={getImagePath('/images/logo.jpg')}
                  alt="Caliber Business Resource Logo"
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h3 className="font-bold text-lg text-white">Caliber</h3>
                <p className="text-primary text-xs uppercase tracking-wider">Business Resource</p>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Empowering businesses with world-class remote talent. Your growth is our mission.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-white mb-6">Company</h4>
            <ul className="space-y-4 text-sm text-gray-400">
              <li><a href="#about" className="hover:text-primary transition-colors">About Us</a></li>
              <li><a href="#services" className="hover:text-primary transition-colors">Our Services</a></li>
              <li><a href="#open-roles" className="hover:text-primary transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Privacy Policy</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-white mb-6">Contact</h4>
            <ul className="space-y-4 text-sm text-gray-400">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary shrink-0" />
                <span>Ruberen Complex, Tagbilaran City, Bohol</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-primary shrink-0" />
                <a href="mailto:info@caliberbusinessresource.com" className="hover:text-white transition-colors">info@caliberbusinessresource.com</a>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-primary shrink-0" />
                <a href="tel:+14059268324" className="hover:text-white transition-colors">+1 (405) 926-8324</a>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="font-bold text-white mb-4 sm:mb-6">Stay Updated</h4>
            <p className="text-gray-400 text-sm mb-4">Subscribe to our newsletter for the latest updates.</p>
            <form className="flex flex-col sm:flex-row gap-2" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                placeholder="Enter your email"
                className="bg-white/5 border border-white/10 rounded-lg px-4 py-2.5 text-sm text-white w-full focus:outline-none focus:border-primary transition-colors"
              />
              <button className="bg-primary text-background px-6 py-2.5 rounded-lg font-bold hover:bg-amber-400 transition-colors whitespace-nowrap">
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-white/5 text-center text-sm text-gray-500">
          <p>&copy; {new Date().getFullYear()} Caliber Business Resource. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}


