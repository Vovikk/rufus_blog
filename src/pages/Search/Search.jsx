"use client";

import Button from "@/components/Button/Button";
import Card from "@/components/Card/Card";
import { ARTICLES } from "@/data/index";
import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import Pagination from "@/components/Pagination/Pagination";

const Search = () => {
  const searchParams = useSearchParams();
  const searchTermFromUrl = searchParams.get("search") || "";
  const [searchTerm, setSearchTerm] = useState(searchTermFromUrl);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 7;

  useEffect(() => {
    setSearchTerm(searchTermFromUrl);
  }, [searchTermFromUrl]);

  const filteredArticles = ARTICLES.filter(
    (article) =>
      article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      article.paragraph.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const totalPages = Math.ceil(filteredArticles.length / itemsPerPage);

  const paginatedArticles = filteredArticles.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const goToPage = (page) => {
    if (page > 0 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  return (
    <section className="w-full flex justify-center">
      <div className="max-w-[1440px] w-full my-16 lg:mt-[6.25rem] px-5 xl:px-[12.5rem]">
        <div className="flex flex-col items-center">
          <div className="max-w-[600px] w-full xl:max-w-none sm:text-center xl:text-left">
            <h2 className="text-2xl lg:text-[2rem] font-bold mb-6">
              Search results: “{searchTermFromUrl}”
            </h2>
            <p className="text-base lg:text-lg mb-9">
              {filteredArticles.length > 0
                ? `Displaying ${(currentPage - 1) * itemsPerPage + 1} – ${
                    currentPage * itemsPerPage > filteredArticles.length
                      ? filteredArticles.length
                      : currentPage * itemsPerPage
                  } of ${filteredArticles.length} results`
                : "No results found"}
            </p>
          </div>
        </div>
        <div className={`flex flex-col items-center space-y-8`}>
          {paginatedArticles.map((article, index) => (
            <Card
              className={`${article.className} xl:flex xl:flex-row `}
              image={article.image}
              genre={article.genre}
              author={article.author}
              date={article.date}
              title={article.title}
              paragraph={article.paragraph}
              key={index}
              variant="search"
            />
          ))}
        </div>
        <Pagination
          totalPages={totalPages}
          currentPage={currentPage}
          goToPage={goToPage}
        />
      </div>
    </section>
  );
};

export default Search;
