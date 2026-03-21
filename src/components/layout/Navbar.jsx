import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Who I Am', href: '#paradox' },
    { name: 'Career', href: '#timeline' },
    { name: 'Impact', href: '#impact' },
    { name: 'Skills', href: '#expertise' },
    { name: 'Thinking', href: '#thought-leadership' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'glass-header py-4 border-b border-border' : 'py-6 bg-transparent'}`}>
      <div className="max-w-6xl mx-auto px-6 lg:px-12 flex justify-between items-center">
        <span className="font-headline font-bold text-lg md:text-xl tracking-tighter text-primary-text">
          GAURAV SRIVASTAVA
        </span>
        
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

        {/* Mobile Hamburger (Basic) */}
        <div className="md:hidden">
            <span className="font-mono uppercase text-[11px] text-cobalt tracking-[2px]">Menu</span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
