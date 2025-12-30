import { Menu, X, Egg } from "lucide-react";
import { useState, useEffect } from "react";

const navLinks = [
  { href: "#inicio", label: "Inicio" },
  { href: "#nosotros", label: "Nosotros" },
  { href: "#tiendas", label: "Tiendas" },
  { href: "#productos", label: "Productos" },
  { href: "#valores", label: "Valores" },
  { href: "#contacto", label: "Contacto" },
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? "bg-background/95 backdrop-blur-md shadow-soft" 
          : "bg-transparent"
      }`}
    >
      <div className="container flex items-center justify-between h-20">
        <a href="#inicio" className="flex items-center gap-3 group">
          <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center transition-transform group-hover:scale-110">
            <Egg className="w-5 h-5 text-primary-foreground" />
          </div>
          <div className="flex flex-col">
            <span className="font-display text-xl font-semibold text-foreground leading-tight">
              Huevos y Frutas
            </span>
            <span className="text-xs text-muted-foreground tracking-wide">
              Productos frescos de proximidad
            </span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-1" aria-label="Navegación principal">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="px-4 py-2 text-sm font-medium text-foreground/70 hover:text-foreground hover:bg-secondary rounded-full transition-all duration-200"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contacto"
            className="ml-4 px-5 py-2.5 text-sm font-semibold text-primary-foreground bg-primary rounded-full hover:bg-orange-dark transition-colors shadow-soft hover:shadow-glow"
          >
            Visítanos
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden p-2 text-foreground hover:bg-secondary rounded-full transition-colors"
          aria-label={isOpen ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={isOpen}
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Navigation */}
      <div 
        className={`lg:hidden bg-background border-t border-border overflow-hidden transition-all duration-300 ${
          isOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav className="container py-6 flex flex-col gap-1" aria-label="Navegación móvil">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="px-4 py-3 text-base font-medium text-foreground/70 hover:text-foreground hover:bg-secondary rounded-xl transition-all"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contacto"
            onClick={() => setIsOpen(false)}
            className="mt-4 px-5 py-3 text-center text-base font-semibold text-primary-foreground bg-primary rounded-xl hover:bg-orange-dark transition-colors"
          >
            Visítanos
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
