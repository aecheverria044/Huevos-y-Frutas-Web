import frutasImg from "@/assets/products/frutas.jpg";
import verdurasImg from "@/assets/products/verduras.jpg";
import huevosImg from "@/assets/products/huevos.jpg";
import legumbresImg from "@/assets/products/legumbres.jpg";
import panImg from "@/assets/products/pan.jpg";
import embutidosImg from "@/assets/products/embutidos.jpg";
import conservasImg from "@/assets/products/conservas.jpg";
import vinoImg from "@/assets/products/vino.jpg";

const products = [
  {
    title: "Frutas",
    description: "Naranjas, manzanas, peras, fresas y frutas de temporada directas del campo.",
    image: frutasImg,
  },
  {
    title: "Verduras",
    description: "Tomates, lechugas, pimientos, zanahorias y hortalizas frescas cada día.",
    image: verdurasImg,
  },
  {
    title: "Huevos",
    description: "Huevos frescos de gallinas camperas de productores locales.",
    image: huevosImg,
  },
  {
    title: "Legumbres",
    description: "Lentejas, garbanzos, alubias y legumbres de la mejor calidad.",
    image: legumbresImg,
  },
  {
    title: "Pan de Cercanía",
    description: "Pan artesano recién horneado de panaderías locales.",
    image: panImg,
  },
  {
    title: "Embutidos",
    description: "Chorizo, salchichón y embutidos tradicionales españoles.",
    image: embutidosImg,
  },
  {
    title: "Conservas",
    description: "Conservas artesanales, encurtidos y productos en tarro.",
    image: conservasImg,
  },
  {
    title: "Vino de Rioja",
    description: "Selección de vinos D.O. Rioja de bodegas de la región.",
    image: vinoImg,
  },
];

const Products = () => {
  return (
    <section
      id="productos"
      className="py-20 md:py-28 bg-muted/30"
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
            Todo lo que necesitas, fresco y local
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Frutas, verduras, huevos, pan y mucho más. Productos de proximidad seleccionados con cariño.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 max-w-6xl mx-auto">
          {products.map((product) => (
            <article
              key={product.title}
              className="group bg-card rounded-2xl overflow-hidden shadow-soft hover:shadow-card transition-all duration-300 hover:-translate-y-1"
            >
              <div className="aspect-square overflow-hidden">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                />
              </div>
              <div className="p-4">
                <h3 className="text-lg font-display font-semibold text-foreground mb-1">
                  {product.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {product.description}
                </p>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-3 px-6 py-3 bg-primary/10 rounded-full">
            <span className="text-sm font-medium text-foreground">
              🌿 Participamos en
            </span>
            <span className="text-sm font-bold text-primary">Too Good To Go</span>
            <span className="text-sm text-muted-foreground">
              — Reducimos el desperdicio alimentario
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;
