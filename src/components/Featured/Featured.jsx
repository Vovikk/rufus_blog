import Image from "next/image";
import Card from "@/components/Card/Card";
import { FEATURED } from "@/data/index";

const Articles = () => {
  return (
    <section className="flex w-full flex-col items-center">
      <div className="max-w-[1440px] w-full px-5 lg:p-20">
        <h2 className="font-bold text-center lg:text-left text-4xl mb-9">
          Artículos destacados
        </h2>
        <div className="flex flex-col items-center xl:grid grid-cols-2 grid-rows-2 gap-9 xl:gap-8 mb-12">
          {FEATURED.map((article, index) => {
            const className =
              index === 0
                ? "row-span-2 h-full"
                : index === 1
                ? "xl:flex xl:flex-row-reverse h-full"
                : "xl:flex xl:flex-row-reverse col-start-2 row-start-2 h-full";

            return (
              <Card
                key={index}
                variant={article.variant}
                className={className}
                image={article.image}
                genre={article.genre}
                author={article.author}
                date={article.date}
                title={article.title}
                paragraph={article.paragraph}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Articles;
