import { MapPin, Clock, Phone } from "lucide-react";

const Contact = () => {
  return (
    <section
      id="contacto"
      className="py-20 md:py-28 bg-secondary/30"
      aria-labelledby="contact-heading"
    >
      <div className="container px-4">
        <div className="max-w-3xl mx-auto text-center mb-12 md:mb-16">
          <span className="inline-block px-4 py-2 mb-4 text-sm font-medium text-primary bg-primary/10 rounded-full">
            Encuéntranos
          </span>
          <h2
            id="contact-heading"
            className="text-3xl md:text-4xl font-display font-bold text-foreground mb-6"
          >
            Ven a visitarnos
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Te esperamos con los productos más frescos de la temporada.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Info Cards */}
          <div className="space-y-6">
            <article className="bg-card rounded-2xl p-6 shadow-soft flex items-start gap-4">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                <MapPin className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="text-lg font-display font-semibold text-foreground mb-1">
                  Dirección
                </h3>
                <address className="text-muted-foreground not-italic leading-relaxed">
                  Calle Mayor, 42<br />
                  28001 Madrid, España
                </address>
              </div>
            </article>

            <article className="bg-card rounded-2xl p-6 shadow-soft flex items-start gap-4">
              <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center flex-shrink-0">
                <Clock className="w-6 h-6 text-accent" />
              </div>
              <div>
                <h3 className="text-lg font-display font-semibold text-foreground mb-1">
                  Horario
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Lunes a Viernes: 9:00 - 14:00 y 17:00 - 20:30<br />
                  Sábados: 9:00 - 14:00<br />
                  Domingos: Cerrado
                </p>
              </div>
            </article>

            <article className="bg-card rounded-2xl p-6 shadow-soft flex items-start gap-4">
              <div className="w-12 h-12 bg-sun/10 rounded-full flex items-center justify-center flex-shrink-0">
                <Phone className="w-6 h-6 text-sun" />
              </div>
              <div>
                <h3 className="text-lg font-display font-semibold text-foreground mb-1">
                  Teléfono
                </h3>
                <a
                  href="tel:+34912345678"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  +34 912 345 678
                </a>
              </div>
            </article>
          </div>

          {/* Map Placeholder */}
          <div className="bg-card rounded-3xl overflow-hidden shadow-soft min-h-[300px] lg:min-h-full">
            <div className="w-full h-full min-h-[300px] bg-muted flex items-center justify-center">
              <div className="text-center p-8">
                <MapPin className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
                <p className="text-muted-foreground text-sm">
                  Mapa interactivo<br />
                  <span className="text-xs">(Integración de Google Maps)</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
