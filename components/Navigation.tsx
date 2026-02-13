import { Menu } from 'lucide-react';

const navLinks = [
  { href: '#home', label: 'Home' },
  { href: '#services', label: 'Services' },
  { href: '#open-roles', label: 'Open Roles' },
  { href: '#pooling', label: 'Future Opportunities' },
  { href: '#about', label: 'About' },
  { href: '#contact', label: 'Contact' },
];

export default function Navigation() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md shadow-sm">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          <a 
            href="#home" 
            className="flex items-center gap-2"
          >
            <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">C</span>
            </div>
            <span className="font-bold text-lg hidden sm:block text-primary">
              Caliber Business
            </span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium transition-colors hover:text-accent text-foreground/80"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#open-roles"
              className="bg-accent text-white px-5 py-2.5 rounded-lg text-sm font-medium hover:bg-accent/90 transition-colors"
            >
              View Jobs
            </a>
          </div>

          {/* Mobile - Simple Menu Icon */}
          <div className="md:hidden">
            <a 
              href="#open-roles"
              className="flex items-center gap-2 text-foreground"
            >
              <Menu className="w-6 h-6" />
              <span className="text-sm font-medium">Menu</span>
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
}
