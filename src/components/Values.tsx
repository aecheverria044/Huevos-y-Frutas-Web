import { MapPin, Leaf, HandHeart, Sparkles } from "lucide-react";

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
];

const Values = () => {
  return (
    <section
      id="valores"
      className="py-20 md:py-28 bg-primary text-primary-foreground"
      aria-labelledby="values-heading"
    >
      <div className="container px-4">
        <div className="max-w-3xl mx-auto text-center mb-12 md:mb-16">
          <span className="inline-block px-4 py-2 mb-4 text-sm font-medium bg-primary-foreground/20 rounded-full">
            Nuestros Valores
          </span>
          <h2
            id="values-heading"
            className="text-3xl md:text-4xl font-display font-bold mb-6"
          >
            Lo que nos define
          </h2>
          <p className="text-lg text-primary-foreground/80 leading-relaxed">
            Más que una frutería, somos un puente entre el campo y tu mesa.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 max-w-5xl mx-auto">
          {values.map((value) => {
            const Icon = value.icon;
            return (
              <article
                key={value.title}
                className="text-center p-6"
              >
                <div className="w-14 h-14 mx-auto mb-4 bg-primary-foreground/20 rounded-full flex items-center justify-center">
                  <Icon className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-display font-semibold mb-3">
                  {value.title}
                </h3>
                <p className="text-primary-foreground/80 text-sm leading-relaxed">
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
