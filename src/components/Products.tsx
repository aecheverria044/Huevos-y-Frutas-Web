import { Apple, Carrot, Package } from "lucide-react";

const categories = [
  {
    icon: Apple,
    title: "Frutas de Temporada",
    description: "Naranjas, fresas, cerezas, melocotones, uvas y mucho más según la época del año.",
    items: ["Naranjas", "Fresas", "Manzanas", "Peras", "Uvas", "Cerezas"],
    color: "primary",
  },
  {
    icon: Carrot,
    title: "Verduras de Temporada",
    description: "Tomates, pimientos, calabacines, lechugas y hortalizas recién cosechadas.",
    items: ["Tomates", "Lechugas", "Pimientos", "Calabacines", "Berenjenas", "Espinacas"],
    color: "leaf",
  },
  {
    icon: Package,
    title: "Productos Locales",
    description: "Aceite de oliva, miel, mermeladas y conservas artesanales de productores cercanos.",
    items: ["Aceite de oliva", "Miel", "Mermeladas", "Conservas", "Frutos secos", "Huevos"],
    color: "earth",
  },
];

const Products = () => {
  return (
    <section
      id="productos"
      className="py-20 md:py-28"
      aria-labelledby="products-heading"
    >
      <div className="container px-4">
        <div className="max-w-3xl mx-auto text-center mb-12 md:mb-16">
          <span className="inline-block px-4 py-2 mb-4 text-sm font-medium text-primary bg-primary/10 rounded-full">
            Nuestros Productos
          </span>
          <h2
            id="products-heading"
            className="text-3xl md:text-4xl font-display font-bold text-foreground mb-6"
          >
            Frescura en cada temporada
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Descubre nuestra selección de productos Km0, siempre frescos y de la mejor calidad.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 md:gap-8 max-w-5xl mx-auto">
          {categories.map((category) => {
            const Icon = category.icon;
            return (
              <article
                key={category.title}
                className="group bg-card rounded-3xl p-6 md:p-8 shadow-soft hover:shadow-card transition-shadow"
              >
                <div className={`w-16 h-16 mb-6 bg-${category.color}/10 rounded-2xl flex items-center justify-center group-hover:scale-105 transition-transform`}>
                  <Icon className={`w-8 h-8 text-${category.color}`} />
                </div>
                
                <h3 className="text-xl font-display font-semibold text-foreground mb-3">
                  {category.title}
                </h3>
                
                <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                  {category.description}
                </p>

                <ul className="flex flex-wrap gap-2">
                  {category.items.map((item) => (
                    <li
                      key={item}
                      className="px-3 py-1 text-xs font-medium bg-muted text-muted-foreground rounded-full"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Products;
