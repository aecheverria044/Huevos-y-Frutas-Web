import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Stores from "@/components/Stores";
import Products from "@/components/Products";
import Values from "@/components/Values";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Huevos y Frutas – Productos frescos de proximidad | Madrid</title>
        <meta 
          name="description" 
          content="Frutas, verduras, huevos, pan y productos locales Km0 en Madrid. Dos tiendas con más de 25 años de experiencia. Visítanos en Centro y Norte." 
        />
        <meta name="keywords" content="frutas, verduras, huevos, productos locales, km0, Madrid, proximidad, sostenible" />
        <link rel="canonical" href="https://huevosyfrutas.com" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Huevos y Frutas – Productos frescos de proximidad" />
        <meta property="og:description" content="Frutas, verduras, huevos, pan y productos locales Km0 en Madrid. Más de 25 años llevando lo mejor del campo a tu mesa." />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="es_ES" />
        
        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "Huevos y Frutas",
            "description": "Frutas, verduras, huevos, pan y productos locales Km0 en Madrid",
            "address": [
              {
                "@type": "PostalAddress",
                "streetAddress": "Calle Mayor, 42",
                "addressLocality": "Madrid",
                "postalCode": "28001",
                "addressCountry": "ES"
              },
              {
                "@type": "PostalAddress",
                "streetAddress": "Avenida de la Paz, 15",
                "addressLocality": "Madrid",
                "postalCode": "28002",
                "addressCountry": "ES"
              }
            ],
            "telephone": ["+34912345678", "+34912345679"],
            "openingHours": ["Mo-Fr 09:00-14:00", "Mo-Fr 17:00-20:30", "Sa 09:00-14:00"]
          })}
        </script>
      </Helmet>
      
      <Header />
      <main>
        <Hero />
        <About />
        <Stores />
        <Products />
        <Values />
        <Contact />
      </main>
      <Footer />
    </>
  );
};

export default Index;
