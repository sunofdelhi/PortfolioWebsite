import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { name: 'Who I Am', href: '#paradox' },
  { name: 'Career', href: '#timeline' },
  { name: 'Impact', href: '#impact' },
  { name: 'Skills', href: '#expertise' },
  { name: 'Thinking', href: '#thought-leadership' },
  { name: 'Contact', href: '#contact' },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 100);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = isMobileOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isMobileOpen]);

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'glass-header py-4 border-b border-border' : 'py-6 bg-transparent'}`}>
      <div className="max-w-6xl mx-auto px-6 lg:px-12 flex justify-between items-center">
        <a href="#hero" className="font-headline font-bold text-lg md:text-xl tracking-tighter text-primary-text">
          GAURAV SRIVASTAVA
        </a>
        
        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              className="font-mono uppercase text-[11px] tracking-[2px] text-muted hover:text-amber transition-colors"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Mobile Hamburger Toggle */}
        <button 
          className="md:hidden text-primary-text" 
          onClick={() => setIsMobileOpen(!isMobileOpen)}
          aria-label={isMobileOpen ? 'Close menu' : 'Open menu'}
        >
          {isMobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {isMobileOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-background border-b border-border shadow-xl">
          <div className="flex flex-col px-6 py-6 gap-5">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsMobileOpen(false)}
                className="font-mono uppercase text-[12px] tracking-[2px] text-muted hover:text-amber transition-colors py-2 border-b border-border/30 last:border-0"
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
