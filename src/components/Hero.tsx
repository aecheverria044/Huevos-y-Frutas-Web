import { ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center pt-16 md:pt-20"
      aria-labelledby="hero-heading"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-b from-muted/50 to-background -z-10" />
      <div className="absolute top-20 right-10 w-64 h-64 bg-primary/5 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-20 left-10 w-48 h-48 bg-accent/10 rounded-full blur-3xl -z-10" />

      <div className="container text-center px-4 py-16 md:py-24">
        <span className="inline-block px-4 py-2 mb-6 text-sm font-medium text-primary bg-primary/10 rounded-full">
          🌱 Productos Km0
        </span>
        
        <h1
          id="hero-heading"
          className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-foreground leading-tight max-w-4xl mx-auto mb-6"
        >
          Frutas y verduras frescas, directamente de agricultores cercanos
        </h1>
        
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed">
          Creemos en la filosofía Km0: productos locales que viajan menos para llegar más frescos a tu mesa, 
          apoyando a nuestros agricultores y cuidando el planeta.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button
            asChild
            size="lg"
            className="rounded-full px-8 text-base font-medium shadow-soft hover:shadow-card transition-shadow"
          >
            <a href="#contacto">Visítanos</a>
          </Button>
          <Button
            asChild
            variant="outline"
            size="lg"
            className="rounded-full px-8 text-base font-medium"
          >
            <a href="#nosotros">Conócenos</a>
          </Button>
        </div>

        <a
          href="#nosotros"
          className="inline-flex items-center justify-center mt-16 text-muted-foreground hover:text-primary transition-colors animate-bounce"
          aria-label="Ir a la sección Nosotros"
        >
          <ArrowDown className="w-6 h-6" />
        </a>
      </div>
    </section>
  );
};

export default Hero;
