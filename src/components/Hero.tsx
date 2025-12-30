import { ArrowDown, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      aria-labelledby="hero-heading"
    >
      {/* Background with subtle pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-orange-light via-background to-background -z-10" />
      
      {/* Decorative elements */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-primary/10 rounded-full blur-3xl -z-10" />
      
      {/* Grid pattern overlay */}
      <div 
        className="absolute inset-0 -z-10 opacity-[0.015]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      <div className="container text-center px-4 pt-24 pb-16">
        <div className="animate-fade-in">
          <span className="inline-flex items-center gap-2 px-4 py-2 mb-8 text-sm font-medium text-foreground bg-secondary border border-border rounded-full">
            <MapPin className="w-4 h-4 text-primary" />
            Productos Km0 · Dos tiendas en tu ciudad
          </span>
        </div>
        
        <h1
          id="hero-heading"
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-bold text-foreground leading-[1.1] max-w-4xl mx-auto mb-8 animate-fade-in"
          style={{ animationDelay: "0.1s" }}
        >
          Huevos y Frutas
          <span className="block text-primary mt-2">productos frescos de proximidad</span>
        </h1>
        
        <p 
          className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-12 leading-relaxed animate-fade-in"
          style={{ animationDelay: "0.2s" }}
        >
          Frutas, verduras, huevos, pan y productos locales. Traemos lo mejor del campo a tu mesa, 
          apoyando a productores de nuestra tierra.
        </p>

        <div 
          className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in"
          style={{ animationDelay: "0.3s" }}
        >
          <Button
            asChild
            size="lg"
            className="rounded-full px-8 py-6 text-base font-semibold bg-primary hover:bg-orange-dark shadow-glow hover:shadow-lg transition-all duration-300"
          >
            <a href="#tiendas">Visítanos</a>
          </Button>
          <Button
            asChild
            variant="outline"
            size="lg"
            className="rounded-full px-8 py-6 text-base font-semibold border-2 border-foreground/20 hover:border-foreground/40 hover:bg-secondary transition-all duration-300"
          >
            <a href="#nosotros">Conócenos</a>
          </Button>
        </div>

        <a
          href="#nosotros"
          className="inline-flex items-center justify-center mt-20 w-12 h-12 text-muted-foreground hover:text-primary bg-secondary hover:bg-primary/10 rounded-full transition-all duration-300 animate-bounce"
          aria-label="Ir a la sección Nosotros"
        >
          <ArrowDown className="w-5 h-5" />
        </a>
      </div>
    </section>
  );
};

export default Hero;
