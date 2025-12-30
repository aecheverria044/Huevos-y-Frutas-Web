import { Heart, Users, Calendar } from "lucide-react";

const About = () => {
  return (
    <section
      id="nosotros"
      className="py-20 md:py-28 bg-secondary/30"
      aria-labelledby="about-heading"
    >
      <div className="container px-4">
        <div className="max-w-3xl mx-auto text-center mb-12 md:mb-16">
          <span className="inline-block px-4 py-2 mb-4 text-sm font-medium text-primary bg-primary/10 rounded-full">
            Nuestra Historia
          </span>
          <h2
            id="about-heading"
            className="text-3xl md:text-4xl font-display font-bold text-foreground mb-6"
          >
            Una familia dedicada a lo natural
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Desde hace más de 25 años, nuestra familia ha mantenido viva la tradición de ofrecer 
            los mejores productos de la tierra. Lo que empezó como un pequeño puesto en el mercado 
            local, hoy es un referente de calidad y confianza en nuestra comunidad.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 md:gap-8 max-w-4xl mx-auto">
          <article className="bg-card rounded-2xl p-6 md:p-8 shadow-soft text-center">
            <div className="w-14 h-14 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center">
              <Users className="w-7 h-7 text-primary" />
            </div>
            <h3 className="text-xl font-display font-semibold text-foreground mb-3">
              Agricultores Locales
            </h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Trabajamos mano a mano con más de 20 familias agricultoras de la zona, 
              garantizando un comercio justo y sostenible.
            </p>
          </article>

          <article className="bg-card rounded-2xl p-6 md:p-8 shadow-soft text-center">
            <div className="w-14 h-14 mx-auto mb-4 bg-accent/10 rounded-full flex items-center justify-center">
              <Calendar className="w-7 h-7 text-accent" />
            </div>
            <h3 className="text-xl font-display font-semibold text-foreground mb-3">
              Productos de Temporada
            </h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Respetamos el ciclo natural de los cultivos. Solo ofrecemos lo que la tierra 
              nos da en cada estación del año.
            </p>
          </article>

          <article className="bg-card rounded-2xl p-6 md:p-8 shadow-soft text-center">
            <div className="w-14 h-14 mx-auto mb-4 bg-sun/10 rounded-full flex items-center justify-center">
              <Heart className="w-7 h-7 text-sun" />
            </div>
            <h3 className="text-xl font-display font-semibold text-foreground mb-3">
              Pasión Familiar
            </h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Tres generaciones compartiendo el amor por la buena alimentación y 
              el compromiso con nuestra comunidad.
            </p>
          </article>
        </div>
      </div>
    </section>
  );
};

export default About;
