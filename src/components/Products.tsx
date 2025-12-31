import { Apple, Carrot, Egg, Bean, Croissant, Drumstick, Package, Wine } from "lucide-react";
import fruitsImg from "@/assets/products/fruits.jpg";
import vegetablesImg from "@/assets/products/vegetables.jpg";
import eggsImg from "@/assets/products/eggs.jpg";
import legumesImg from "@/assets/products/legumes.jpg";
import breadImg from "@/assets/products/Bread.jpg";
import embutidosImg from "@/assets/products/Cheese.jpg";
import conservasImg from "@/assets/products/preserves.jpg";
import vinoImg from "@/assets/products/vino.jpg";

const products = [
  {
    title: "Frutas",
    description: "Naranjas, manzanas, peras, fresas y frutas de temporada directas del campo.",
    image: fruitsImg,
    icon: Apple,
  },
  {
    title: "Verduras",
    description: "Tomates, lechugas, pimientos, zanahorias y hortalizas frescas cada día.",
    image: vegetablesImg,
    icon: Carrot,
  },
  {
    title: "Huevos",
    description: "Huevos frescos de gallinas camperas de productores locales.",
    image: eggsImg,
    icon: Egg,
  },
  {
    title: "Legumbres",
    description: "Lentejas, garbanzos, alubias y legumbres de la mejor calidad.",
    image: legumesImg,
    icon: Bean,
  },
  {
    title: "Pan de Cercanía",
    description: "Pan artesano recién horneado de panaderías locales.",
    image: breadImg,
    icon: Croissant,
  },
  {
    title: "Quesos y Embutidos",
    description: "Quesos, chorizo y salchichón.",
    image: embutidosImg,
    icon: Drumstick,
  },
  {
    title: "Conservas",
    description: "Conservas, encurtidos y productos en tarro.",
    image: conservasImg,
    icon: Package,
  },
  {
    title: "Vino de Rioja",
    description: "Selección de vinos D.O. Rioja de bodegas de la región.",
    image: vinoImg,
    icon: Wine,
  },
];

const Products = () => {
  return (
    <section
      id="productos"
      className="py-24 md:py-32 bg-background"
      aria-labelledby="products-heading"
    >
      <div className="container px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="inline-block px-4 py-1.5 mb-6 text-xs font-semibold tracking-wider uppercase text-primary bg-orange-light rounded-full">
            Nuestros Productos
          </span>
          <h2
            id="products-heading"
            className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground mb-6"
          >
            Todo lo que necesitas, <span className="text-primary">fresco y local</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Frutas, verduras, huevos, pan y mucho más. Productos de proximidad seleccionados con cariño.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 max-w-6xl mx-auto">
          {products.map((product) => {
            const Icon = product.icon;
            return (
              <article
                key={product.title}
                className="group bg-card rounded-2xl overflow-hidden border border-border hover:border-primary/20 shadow-soft hover:shadow-card transition-all duration-300 hover-lift"
              >
                <div className="relative aspect-square overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="flex items-center gap-2 mb-1">
                      <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                        <Icon className="w-4 h-4 text-primary-foreground" />
                      </div>
                      <h3 className="text-lg font-display font-semibold text-background">
                        {product.title}
                      </h3>
                    </div>
                  </div>
                </div>
                <div className="p-4">
                  <p className="text-sm text-muted-foreground leading-relaxed line-clamp-2">
                    {product.description}
                  </p>
                </div>
              </article>
            );
          })}
        </div>

        {/* Too Good To Go banner */}
        <div className="mt-16 max-w-4xl mx-auto">
          <div className="relative overflow-hidden bg-foreground rounded-3xl p-8 md:p-12">
            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="text-center md:text-left">
                <div className="flex items-center justify-center md:justify-start gap-3 mb-3">
                  <h3 className="text-2xl md:text-3xl font-display font-bold text-background">
                    Too Good To Go
                  </h3>
                </div>
                <p className="text-background/70 max-w-xl">
                  Nuestra tienda de Beato Tomás colabora con la app para reducir el desperdicio alimentario. 
                  ¡Consigue productos frescos a precio reducido!
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href="https://www.toogoodtogo.com/es"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-shrink-0 px-8 py-3 bg-[#024642] text-white font-semibold rounded-full hover:bg-[#013330] transition-colors text-center"
                >
                  Abrir App
                </a>
                <a
                  href="#tiendas"
                  className="flex-shrink-0 px-8 py-3 bg-primary text-primary-foreground font-semibold rounded-full hover:bg-orange-dark transition-colors text-center"
                >
                  Ver tienda
                </a>
              </div>
            </div>
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 rounded-full blur-3xl" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;
