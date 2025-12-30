import { MapPin, Clock, Phone, Navigation, Check } from "lucide-react";
import { Button } from "@/components/ui/button";

const stores = [
  {
    name: "Tienda Centro",
    address: "Calle Mayor, 42",
    city: "28001 Madrid",
    phone: "+34 912 345 678",
    hours: [
      { days: "Lunes a Viernes", time: "9:00 - 14:00 / 17:00 - 20:30" },
      { days: "Sábados", time: "9:00 - 14:00" },
      { days: "Domingos", time: "Cerrado" },
    ],
    mapUrl: "https://maps.google.com/?q=Calle+Mayor+42+Madrid",
    features: ["Too Good To Go", "Parking cercano"],
    tooGoodToGo: true,
  },
  {
    name: "Tienda Norte",
    address: "Avenida de la Paz, 15",
    city: "28002 Madrid",
    phone: "+34 912 345 679",
    hours: [
      { days: "Lunes a Viernes", time: "9:00 - 14:30 / 17:30 - 21:00" },
      { days: "Sábados", time: "9:00 - 15:00" },
      { days: "Domingos", time: "Cerrado" },
    ],
    mapUrl: "https://maps.google.com/?q=Avenida+de+la+Paz+15+Madrid",
    features: ["Aparcamiento propio"],
    tooGoodToGo: false,
  },
];

const Stores = () => {
  return (
    <section
      id="tiendas"
      className="py-24 md:py-32 bg-secondary/50"
      aria-labelledby="stores-heading"
    >
      <div className="container px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="inline-block px-4 py-1.5 mb-6 text-xs font-semibold tracking-wider uppercase text-primary bg-orange-light rounded-full">
            Nuestras Tiendas
          </span>
          <h2
            id="stores-heading"
            className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground mb-6"
          >
            Encuéntranos en <span className="text-primary">dos ubicaciones</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Visítanos y descubre la frescura de nuestros productos. Te esperamos con los brazos abiertos.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {stores.map((store) => (
            <article
              key={store.name}
              className="bg-card rounded-3xl overflow-hidden border border-border shadow-soft hover:shadow-card transition-all duration-300"
            >
              {/* Map placeholder */}
              <div className="relative h-48 bg-muted">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-16 h-16 mx-auto mb-3 bg-primary/10 rounded-full flex items-center justify-center">
                      <MapPin className="w-8 h-8 text-primary" />
                    </div>
                    <p className="text-sm text-muted-foreground">Google Maps</p>
                  </div>
                </div>
                {store.tooGoodToGo && (
                  <div className="absolute top-4 right-4 px-3 py-1.5 bg-primary text-primary-foreground text-xs font-semibold rounded-full">
                    Too Good To Go
                  </div>
                )}
              </div>

              {/* Content */}
              <div className="p-6 md:p-8">
                <h3 className="text-2xl font-display font-bold text-foreground mb-6">
                  {store.name}
                </h3>

                <div className="space-y-4 mb-6">
                  {/* Address */}
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 bg-orange-light rounded-lg flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium text-foreground">{store.address}</p>
                      <p className="text-sm text-muted-foreground">{store.city}</p>
                    </div>
                  </div>

                  {/* Phone */}
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 bg-orange-light rounded-lg flex items-center justify-center flex-shrink-0">
                      <Phone className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <a
                        href={`tel:${store.phone.replace(/\s/g, "")}`}
                        className="font-medium text-foreground hover:text-primary transition-colors"
                      >
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
                      {store.hours.map((schedule) => (
                        <p key={schedule.days} className="text-sm">
                          <span className="font-medium text-foreground">{schedule.days}:</span>{" "}
                          <span className="text-muted-foreground">{schedule.time}</span>
                        </p>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Features */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {store.features.map((feature) => (
                    <span
                      key={feature}
                      className="inline-flex items-center gap-1.5 px-3 py-1 text-xs font-medium text-foreground bg-secondary rounded-full"
                    >
                      <Check className="w-3 h-3 text-primary" />
                      {feature}
                    </span>
                  ))}
                </div>

                {/* CTA */}
                <Button
                  asChild
                  className="w-full rounded-xl py-5 text-base font-semibold bg-primary hover:bg-orange-dark transition-colors"
                >
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
