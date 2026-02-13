import { MapPin, Mail, Phone, Facebook, Linkedin } from 'lucide-react';

export default function Footer() {
  return (
    <footer id="contact" className="bg-primary text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16 grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-accent rounded-xl flex items-center justify-center">
                <span className="text-white font-bold text-2xl">C</span>
              </div>
              <div>
                <h3 className="font-bold text-lg">Caliber Business</h3>
                <p className="text-white/60 text-sm">Resource</p>
              </div>
            </div>
            <p className="text-white/70 text-sm leading-relaxed mb-6">
              Let&apos;s build your back office and team NOW. We provide exceptional business solutions 
              and career opportunities.
            </p>
            <div className="flex items-center gap-4">
              <a
                href="https://www.facebook.com/profile.php?id=61561838143537"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-accent transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/caliber-business-resource-72905a31b/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-accent transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-lg mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {[
                { href: '#home', label: 'Home' },
                { href: '#services', label: 'Services' },
                { href: '#open-roles', label: 'Open Positions' },
                { href: '#pooling', label: 'Future Opportunities' },
                { href: '#about', label: 'About Us' },
              ].map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-white/70 hover:text-accent transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold text-lg mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                <span className="text-white/70 text-sm">
                  Ruberen Complex Commercial Building,<br />
                  Venancio P. Inting Avenue,<br />
                  Tagbilaran City, Bohol
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-accent flex-shrink-0" />
                <a
                  href="mailto:info@caliberbusinessresource.com"
                  className="text-white/70 hover:text-accent transition-colors text-sm"
                >
                  info@caliberbusinessresource.com
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-accent flex-shrink-0" />
                <a
                  href="tel:+14059268324"
                  className="text-white/70 hover:text-accent transition-colors text-sm"
                >
                  +1 (405) 926-8324
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="font-semibold text-lg mb-6">Stay Updated</h4>
            <p className="text-white/70 text-sm mb-4">
              Subscribe to our newsletter for the latest job openings and company news.
            </p>
            <p className="text-white/70 text-sm mb-4">
              Contact us at{' '}
              <a href="mailto:info@caliberbusinessresource.com" className="text-accent hover:underline">
                info@caliberbusinessresource.com
              </a>
              {' '}to subscribe to our newsletter.
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-6 border-t border-white/10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-white/50 text-sm">
              © 2024 Caliber Business Resource. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <a href="#" className="text-white/50 hover:text-white/70 text-sm transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-white/50 hover:text-white/70 text-sm transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
