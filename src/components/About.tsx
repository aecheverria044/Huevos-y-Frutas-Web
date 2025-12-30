import { Heart, Users, Leaf, TrendingUp } from "lucide-react";

const stats = [
  { value: "25+", label: "Años de experiencia" },
  { value: "20+", label: "Productores locales" },
  { value: "2", label: "Tiendas" },
  { value: "100%", label: "Productos frescos" },
];

const About = () => {
  return (
    <section
      id="nosotros"
      className="py-24 md:py-32 bg-background"
      aria-labelledby="about-heading"
    >
      <div className="container px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div>
            <span className="inline-block px-4 py-1.5 mb-6 text-xs font-semibold tracking-wider uppercase text-primary bg-orange-light rounded-full">
              Nuestra Historia
            </span>
            <h2
              id="about-heading"
              className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground mb-6 leading-tight"
            >
              Una familia dedicada a
              <span className="text-primary"> lo natural</span>
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              Desde hace más de 25 años, nuestra familia ha mantenido viva la tradición de ofrecer 
              los mejores productos de la tierra. Lo que empezó como un pequeño puesto en el mercado 
              local, hoy son dos tiendas que son referente de calidad y confianza.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed mb-10">
              Creemos en la filosofía Km0: productos que viajan menos para llegar más frescos a tu mesa, 
              apoyando a los agricultores de nuestra comunidad y cuidando el medio ambiente.
            </p>

            {/* Stats grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
              {stats.map((stat) => (
                <div key={stat.label} className="text-center sm:text-left">
                  <div className="text-3xl md:text-4xl font-display font-bold text-primary mb-1">
                    {stat.value}
                  </div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Values Cards */}
          <div className="grid sm:grid-cols-2 gap-4">
            <article className="group bg-card rounded-2xl p-6 border border-border hover:border-primary/20 hover:shadow-card transition-all duration-300 hover-lift">
              <div className="w-12 h-12 mb-4 bg-orange-light rounded-xl flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                <Users className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-display font-semibold text-foreground mb-2">
                Agricultores Locales
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Trabajamos con más de 20 familias agricultoras de la zona, garantizando comercio justo.
              </p>
            </article>

            <article className="group bg-card rounded-2xl p-6 border border-border hover:border-primary/20 hover:shadow-card transition-all duration-300 hover-lift sm:mt-8">
              <div className="w-12 h-12 mb-4 bg-orange-light rounded-xl flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                <Leaf className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-display font-semibold text-foreground mb-2">
                Productos de Temporada
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Solo ofrecemos lo que la tierra nos da en cada estación del año.
              </p>
            </article>

            <article className="group bg-card rounded-2xl p-6 border border-border hover:border-primary/20 hover:shadow-card transition-all duration-300 hover-lift">
              <div className="w-12 h-12 mb-4 bg-orange-light rounded-xl flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                <Heart className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-display font-semibold text-foreground mb-2">
                Pasión Familiar
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Tres generaciones compartiendo el amor por la buena alimentación.
              </p>
            </article>

            <article className="group bg-card rounded-2xl p-6 border border-border hover:border-primary/20 hover:shadow-card transition-all duration-300 hover-lift sm:mt-8">
              <div className="w-12 h-12 mb-4 bg-orange-light rounded-xl flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                <TrendingUp className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-display font-semibold text-foreground mb-2">
                Crecimiento Sostenible
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                De un pequeño puesto a dos tiendas, manteniendo nuestros valores.
              </p>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
