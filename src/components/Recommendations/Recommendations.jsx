import { ARTICLES } from "@/data/index";
import Card from "@/components/Card/Card";

const Recommendations = () => {
  return (
    <section className="w-full flex justify-center mt-12">
      <div className="max-w-[1440px] w-full">
        <div className="flex flex-col items-center m-auto  max-w-[650px] w-full px-5 md:px-0">
          <h2 className="font-bold text-center text-4xl md:text-5xl mb-6">
            You may also be interested in
          </h2>
          <p className="text-center text-base md:text-lg leading-normal">
            Stay updated and learn about digital advertising, success stories,
            creativity and the most interesting topics in the industry.
          </p>
        </div>
        <div
          className={`flex flex-col items-center xl:grid my-12 ${
            ARTICLES.length > 3
              ? "md:grid-cols-2 md:grid-rows-1 "
              : "sm:grid-cols-1 sm:grid-rows-1"
          }
           xl:grid-cols-3 px-5 xl:px-20 gap-x-8 gap-y-8 xl:gap-y-[3.75rem]`}
        >
          {ARTICLES.map((article, index) =>
            index < 3 ? (
              <Card
                className={article.className}
                image={article.image}
                genre={article.genre}
                author={article.author}
                date={article.date}
                title={article.title}
                paragraph={article.paragraph}
                key={index}
              />
            ) : (
              ""
            )
          )}
        </div>
      </div>
    </section>
  );
};

export default Recommendations;
