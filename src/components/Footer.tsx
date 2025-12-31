import { Egg, Mail, MapPin, Phone } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-background" role="contentinfo">
      <div className="container px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <a href="#inicio" className="inline-flex items-center gap-3 mb-4 group">
              <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center transition-transform group-hover:scale-110">
                <Egg className="w-5 h-5 text-primary-foreground" />
              </div>
              <span className="font-display text-xl font-semibold">Huevos y Frutas</span>
            </a>
            <p className="text-background/60 text-sm leading-relaxed mb-6">
              Productos frescos de proximidad para toda la familia. 
              Más de 25 años llevando lo mejor del campo a tu mesa.
            </p>
            <a
              href="mailto:info@huevosyfrutas.com"
              className="w-10 h-10 bg-background/10 rounded-full flex items-center justify-center hover:bg-primary transition-colors"
              aria-label="Email"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-display font-semibold text-lg mb-4">Enlaces</h3>
            <nav className="space-y-3">
              <a href="#inicio" className="block text-background/60 hover:text-primary transition-colors text-sm">
                Inicio
              </a>
              <a href="#nosotros" className="block text-background/60 hover:text-primary transition-colors text-sm">
                Nosotros
              </a>
              <a href="#tiendas" className="block text-background/60 hover:text-primary transition-colors text-sm">
                Tiendas
              </a>
              <a href="#productos" className="block text-background/60 hover:text-primary transition-colors text-sm">
                Productos
              </a>
              <a href="#valores" className="block text-background/60 hover:text-primary transition-colors text-sm">
                Valores
              </a>
              <a href="#contacto" className="block text-background/60 hover:text-primary transition-colors text-sm">
                Contacto
              </a>
            </nav>
          </div>

          {/* Store 1 */}
          <div>
            <h3 className="font-display font-semibold text-lg mb-4">Tienda Centro</h3>
            <address className="not-italic space-y-3 text-sm">
              <div className="flex items-start gap-2 text-background/60">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span>Calle Mayor, 42<br />28001 Madrid</span>
              </div>
              <a href="tel:+34912345678" className="flex items-center gap-2 text-background/60 hover:text-primary transition-colors">
                <Phone className="w-4 h-4" />
                +34 912 345 678
              </a>
            </address>
          </div>

          {/* Store 2 */}
          <div>
            <h3 className="font-display font-semibold text-lg mb-4">Tienda Norte</h3>
            <address className="not-italic space-y-3 text-sm">
              <div className="flex items-start gap-2 text-background/60">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span>Avenida de la Paz, 15<br />28002 Madrid</span>
              </div>
              <a href="tel:+34912345679" className="flex items-center gap-2 text-background/60 hover:text-primary transition-colors">
                <Phone className="w-4 h-4" />
                +34 912 345 679
              </a>
            </address>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-background/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-background/40 text-sm">
            © {currentYear} Huevos y Frutas. Todos los derechos reservados.
          </p>
          <p className="text-background/40 text-sm">
            Colaboramos con <span className="text-primary font-medium">Too Good To Go</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
