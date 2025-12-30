import { useState } from "react";
import { Mail, Instagram, Facebook, Send, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Mensaje enviado",
      description: "Te responderemos lo antes posible. ¡Gracias!",
    });
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section
      id="contacto"
      className="py-24 md:py-32 bg-secondary/50"
      aria-labelledby="contact-heading"
    >
      <div className="container px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="inline-block px-4 py-1.5 mb-6 text-xs font-semibold tracking-wider uppercase text-primary bg-orange-light rounded-full">
            Contacto
          </span>
          <h2
            id="contact-heading"
            className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground mb-6"
          >
            ¿Tienes alguna <span className="text-primary">pregunta?</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Escríbenos y te responderemos lo antes posible. También puedes visitarnos en nuestras tiendas.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <div className="lg:col-span-3">
            <form onSubmit={handleSubmit} className="bg-card rounded-3xl p-8 border border-border shadow-soft">
              <div className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                      Nombre
                    </label>
                    <Input
                      id="name"
                      type="text"
                      placeholder="Tu nombre"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                      className="rounded-xl border-border focus:border-primary focus:ring-primary/20"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                      Email
                    </label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="tu@email.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      required
                      className="rounded-xl border-border focus:border-primary focus:ring-primary/20"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                    Mensaje
                  </label>
                  <Textarea
                    id="message"
                    placeholder="¿En qué podemos ayudarte?"
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    required
                    className="rounded-xl border-border focus:border-primary focus:ring-primary/20 resize-none"
                  />
                </div>
                <Button
                  type="submit"
                  size="lg"
                  className="w-full rounded-xl py-6 text-base font-semibold bg-primary hover:bg-orange-dark transition-colors"
                >
                  <Send className="w-4 h-4 mr-2" />
                  Enviar mensaje
                </Button>
              </div>
            </form>
          </div>

          {/* Contact Info */}
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-card rounded-2xl p-6 border border-border">
              <h3 className="text-lg font-display font-semibold text-foreground mb-4">
                Información de contacto
              </h3>
              <div className="space-y-4">
                <a
                  href="tel:+34912345678"
                  className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors"
                >
                  <div className="w-10 h-10 bg-orange-light rounded-lg flex items-center justify-center">
                    <Phone className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Tienda Centro</p>
                    <p className="font-medium text-foreground">+34 912 345 678</p>
                  </div>
                </a>
                <a
                  href="tel:+34912345679"
                  className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors"
                >
                  <div className="w-10 h-10 bg-orange-light rounded-lg flex items-center justify-center">
                    <Phone className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Tienda Norte</p>
                    <p className="font-medium text-foreground">+34 912 345 679</p>
                  </div>
                </a>
                <a
                  href="mailto:info@huevosyfrutas.com"
                  className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors"
                >
                  <div className="w-10 h-10 bg-orange-light rounded-lg flex items-center justify-center">
                    <Mail className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Email</p>
                    <p className="font-medium text-foreground">info@huevosyfrutas.com</p>
                  </div>
                </a>
              </div>
            </div>

            <div className="bg-card rounded-2xl p-6 border border-border">
              <h3 className="text-lg font-display font-semibold text-foreground mb-4">
                Síguenos
              </h3>
              <div className="flex gap-3">
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-orange-light rounded-xl flex items-center justify-center text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
                  aria-label="Instagram"
                >
                  <Instagram className="w-5 h-5" />
                </a>
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-orange-light rounded-xl flex items-center justify-center text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
                  aria-label="Facebook"
                >
                  <Facebook className="w-5 h-5" />
                </a>
              </div>
            </div>

            <div className="bg-primary rounded-2xl p-6 text-primary-foreground">
              <h3 className="text-lg font-display font-semibold mb-2">
                ¿Prefieres visitarnos?
              </h3>
              <p className="text-primary-foreground/80 text-sm mb-4">
                Te esperamos en cualquiera de nuestras dos tiendas con los productos más frescos.
              </p>
              <a
                href="#tiendas"
                className="inline-block px-5 py-2.5 bg-background text-foreground font-medium rounded-xl hover:bg-background/90 transition-colors"
              >
                Ver ubicaciones
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
