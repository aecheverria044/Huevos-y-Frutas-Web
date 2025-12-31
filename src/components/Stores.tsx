import { MapPin, Clock, Phone, Navigation, Check } from "lucide-react";
import { Button } from "@/components/ui/button";

const stores = [
  {
    name: "Calle Beato Tomás de Zumarraga",
    address: "Beato Tomás de Zumárraga, 32",
    city: "01008 Vitoria-Gasteiz",
    phone: "+34 699 496 431",
    hours: [
      { days: "Lunes a Viernes", time: "9:00 - 14:00 / 17:30 - 20:00" },
      { days: "Sábados", time: "9:00 - 14:00" },
      { days: "Domingos", time: "Cerrado" },
    ],
    mapUrl: "https://maps.app.goo.gl/VqQPLuNjeNcFsDbj8",
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2926.5!2d-2.6726!3d42.8467!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd4fc265e71c3b7b%3A0x0!2sBeato%20Tom%C3%A1s%20de%20Zum%C3%A1rraga%2C%2032%2C%2001008%20Vitoria-Gasteiz!5e0!3m2!1ses!2ses!4v1700000000000",
    features: ["Too Good To Go"],
    tooGoodToGo: true,
  },
  {
    name: "Calle Gorbea",
    address: "Calle Gorbea, 40",
    city: "01012 Vitoria-Gasteiz",
    phone: "+34 699 496 431",
    hours: [
      { days: "Lunes a Viernes", time: "9:00 - 14:00 / 17:30 - 20:00" },
      { days: "Sábados", time: "9:00 - 14:00" },
      { days: "Domingos", time: "Cerrado" },
    ],
    mapUrl: "https://maps.app.goo.gl/KnGNBc7EGyaxESzX8",
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2926.5!2d-2.6726!3d42.8467!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd4fc265e71c3b7b%3A0x0!2sCalle%20Gorbea%2C%2040%2C%2001008%20Vitoria-Gasteiz!5e0!3m2!1ses!2ses!4v1700000000000",
    tooGoodToGo: false,
    features: [],
  },
];

const Stores = () => {
  return (
    <section id="tiendas" className="py-24 md:py-32 bg-secondary/50" aria-labelledby="stores-heading">
      <div className="container px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="inline-block px-4 py-1.5 mb-6 text-xs font-semibold tracking-wider uppercase text-primary bg-orange-light rounded-full">
            Nuestras Tiendas
          </span>
          <h2 id="stores-heading" className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground mb-6">
            Encuéntranos en <span className="text-primary">dos ubicaciones</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Visítanos y descubre la frescura de nuestros productos. Te esperamos con los brazos abiertos.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {stores?.map((store) => (
            <article key={store.name} className="bg-card rounded-3xl overflow-hidden border border-border shadow-soft hover:shadow-card transition-all duration-300">
              {/* Google Maps Embed */}
              <div className="relative h-48 bg-muted overflow-hidden">
                <iframe
                  src={store.mapEmbed}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title={`Mapa de ${store.name}`}
                  className="absolute inset-0"
                />
                {store.tooGoodToGo && (
                  <div className="absolute top-4 right-4 px-3 py-1.5 bg-primary text-primary-foreground text-xs font-semibold rounded-full shadow-lg">
                    Too Good To Go
                  </div>
                )}
              </div>

              {/* Content */}
              <div className="p-6 md:p-8">
                <h3 className="text-2xl font-display font-bold text-foreground mb-4">{store.name}</h3>

                {/* Address & Phone */}
                <div className="space-y-4 mb-6">
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 bg-orange-light rounded-lg flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium text-foreground">{store.address}</p>
                      <p className="text-sm text-muted-foreground">{store.city}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 bg-orange-light rounded-lg flex items-center justify-center flex-shrink-0">
                      <Phone className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <a href={`tel:${store.phone.replace(/\s/g, "")}`} className="font-medium text-foreground hover:text-primary transition-colors">
                        {store.phone}
                      </a>
                    </div>
                  </div>

                  {/* Hours */}
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 bg-orange-light rounded-lg flex items-center justify-center flex-shrink-0">
                      <Clock className="w-5 h-5 text-primary" />
                    </div>
                    <div className="space-y-1">
                      {store.hours?.map((schedule) => (
                        <p key={schedule.days} className="text-sm">
                          <span className="font-medium text-foreground">{schedule.days}:</span>{" "}
                          <span className="text-muted-foreground">{schedule.time}</span>
                        </p>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Features */}
                {store.features?.length > 0 && (
                  <div className="flex flex-wrap gap-2 mb-6">
                    {store.features.map((feature) => (
                      <span key={feature} className="inline-flex items-center gap-1.5 px-3 py-1 text-xs font-medium text-foreground bg-secondary rounded-full">
                        <Check className="w-3 h-3 text-primary" />
                        {feature}
                      </span>
                    ))}
                  </div>
                )}

                {/* CTA */}
                <Button asChild className="w-full rounded-xl py-5 text-base font-semibold bg-primary hover:bg-orange-dark transition-colors">
                  <a href={store.mapUrl} target="_blank" rel="noopener noreferrer">
                    <Navigation className="w-4 h-4 mr-2" />
                    Cómo llegar
                  </a>
                </Button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stores;