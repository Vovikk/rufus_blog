import Image from "next/image";
import Card from "@/components/Card/Card";
import articleImg1 from "@/assets/images/articles/1.png";
import articleImg2 from "@/assets/images/articles/2.png";
import articleImg3 from "@/assets/images/articles/3.png";

const Articles = () => {
  return (
    <section className="flex w-full flex-col items-center">
      <div className="max-w-[1440px] w-full px-5 lg:p-20">
        <h2 className="font-bold text-center lg:text-left text-4xl mb-9">
          Artículos destacados
        </h2>
        <div className="flex flex-col items-center xl:grid grid-cols-2 grid-rows-2 gap-9 xl:gap-8 mb-12">
          <Card
            variant="2x1"
            className="row-span-2 h-full"
            image={articleImg1}
            genre={["Creatividad"]}
            author="Miranda Marini"
            date={{ month: "Octubre", day: "14", year: "2024" }}
            title="El poder del Hook: Cómo conquistar a tu audiencia en 3 segundos"
            paragraph="Captar la atención en los primeros segundos es clave para el éxito de cualquier anuncio. Un buen hook..."
          />
          <Card
            variant="1x1"
            image={articleImg2}
            className="xl:flex xl:flex-row-reverse h-full"
            genre={["Growth"]}
            author="Miranda Marini"
            date={{ month: "Octubre", day: "23", year: "2024" }}
            title="El match perfecto: Cómo encontrar al Creador ideal para tu marca"
            paragraph="Elegir al Creador adecuado puede ser la diferencia entre una campaña exitosa y un esfuerzo que pase desapercibido."
          />
          <Card
            variant="1x1"
            image={articleImg3}
            className="xl:flex xl:flex-row-reverse col-start-2 row-start-2 h-full"
            genre={["Caso de Éxito"]}
            author="Rufus"
            date={{ month: "Septiembre", day: "10", year: "2024" }}
            title="Caso de Éxito: Stori by Rufus"
            paragraph="Descubre como Stori utilizó Data Driven Ads para reducir el CPA, mejor el CTR y optimizar sus campañas publicitarias."
          />
        </div>
      </div>
    </section>
  );
};

export default Articles;
