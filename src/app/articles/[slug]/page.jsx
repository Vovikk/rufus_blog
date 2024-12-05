import { ARTICLES } from "@/data/index";
import Image from "next/image";
import Recommendations from "@/components/Recommendations/Recommendations";
import Newsletter from "@/components/Newsletter/Newsletter";

const ArticlePage = async ({ params }) => {
  const { slug } = await params;

  const article = ARTICLES.find(
    (article) =>
      article.title
        .toLowerCase()
        .replace(/[^a-z0-9\s-]/g, "")
        .trim()
        .replace(/\s+/g, "-") === slug
  );

  if (!article) {
    return <div>Artículo no encontrado</div>;
  }

  return (
    <section className="w-full flex justify-center">
      <div className="relative max-w-[1440px] w-full flex flex-col justify-center items-center">
        <div className="max-w-[1000px] w-full px-5 lg:p-0">
          <h2 className="text-center mt-16 text-[1.875rem] md:text-5xl font-bold relative after:content-[''] after:block after:w-16 after:h-1 after:bg-purple after:mx-auto after:my-6 after:rounded-[2px]">
            {article.title}
          </h2>
          <Image
            className="m-auto max-w-[1000px] w-full object-cover max-h-[500px] mb-[3.25rem] rounded-[3.75rem]"
            src={article.image}
            alt={`${article.title} image`}
          />
          <p className="text-base lg:px-14">{article.paragraph}</p>
        </div>
        <Recommendations />
        <Newsletter></Newsletter>
      </div>
    </section>
  );
};

export default ArticlePage;
