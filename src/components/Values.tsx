import { MapPin, Leaf, HandHeart, Sparkles, Recycle, ShieldCheck } from "lucide-react";

const values = [
  {
    icon: MapPin,
    title: "Km0",
    description: "Productos que viajan menos de 100km, reduciendo la huella de carbono y garantizando máxima frescura.",
  },
  {
    icon: Leaf,
    title: "Sostenibilidad",
    description: "Prácticas respetuosas con el medio ambiente, desde el cultivo hasta la venta sin plásticos innecesarios.",
  },
  {
    icon: HandHeart,
    title: "Apoyo Local",
    description: "Cada compra apoya directamente a familias agricultoras de nuestra comunidad.",
  },
  {
    icon: Sparkles,
    title: "Calidad Premium",
    description: "Seleccionamos personalmente cada producto para ofrecerte solo lo mejor de cada cosecha.",
  },
  {
    icon: Recycle,
    title: "Zero Waste",
    description: "Colaboramos con Too Good To Go para reducir el desperdicio alimentario y dar segunda vida a productos.",
  },
  {
    icon: ShieldCheck,
    title: "Responsabilidad",
    description: "Compromiso con la comunidad y el medio ambiente a través de prácticas comerciales éticas.",
  },
];

const Values = () => {
  return (
    <section
      id="valores"
      className="py-24 md:py-32 bg-foreground text-background"
      aria-labelledby="values-heading"
    >
      <div className="container px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="inline-block px-4 py-1.5 mb-6 text-xs font-semibold tracking-wider uppercase text-foreground bg-background rounded-full">
            Nuestros Valores
          </span>
          <h2
            id="values-heading"
            className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-6"
          >
            Lo que nos <span className="text-primary">define</span>
          </h2>
          <p className="text-lg text-background/70 leading-relaxed">
            Más que una frutería, somos un puente entre el campo y tu mesa. 
            Nuestro compromiso va más allá de vender productos.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {values.map((value, index) => {
            const Icon = value.icon;
            return (
              <article
                key={value.title}
                className="group p-6 md:p-8 bg-background/5 border border-background/10 rounded-2xl hover:bg-background/10 hover:border-primary/30 transition-all duration-300"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-14 h-14 mb-5 bg-primary/20 rounded-2xl flex items-center justify-center group-hover:bg-primary/30 transition-colors">
                  <Icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-xl font-display font-semibold mb-3">
                  {value.title}
                </h3>
                <p className="text-background/70 text-sm leading-relaxed">
                  {value.description}
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Values;
