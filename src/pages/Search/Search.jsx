"use client";

import Button from "@/components/Button/Button";
import Card from "@/components/Card/Card";
import { ARTICLES } from "@/data/index";
import { useState, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";

const Search = () => {
  const router = useRouter();
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
      <div className="max-w-[1440px] w-full mt-16 lg:mt-[6.25rem]">
        <div className="flex flex-col px-5 xl:px-20">
          <h2 className="text-4xl lg:text-5xl font-bold ">
            Resultados de búsqueda: “{searchTermFromUrl}”
          </h2>
          <p className="text-base lg:text-lg">
            {filteredArticles.length > 0
              ? `Displaying ${(currentPage - 1) * itemsPerPage + 1} – ${
                  currentPage * itemsPerPage > filteredArticles.length
                    ? filteredArticles.length
                    : currentPage * itemsPerPage
                } of ${filteredArticles.length} results`
              : "No results found"}
          </p>
        </div>
        <div className="flex justify-center py-4"></div>
        <div
          className={`flex flex-col items-center px-5 xl:px-20 gap-x-8 gap-y-8 xl:gap-y-[3.75rem]`}
        >
          {paginatedArticles.map((article, index) => (
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
          ))}
        </div>
        <div className="my-12 px-5 lg:px-20 w-full flex items-center justify-center">
          {totalPages > 1 && (
            <div className="flex flex-col md:flex-row gap-4 items-center">
              <div className="flex gap-2">
                <Button
                  label="Anterior"
                  variant="paginationLeft"
                  onClick={() => goToPage(currentPage - 1)}
                  className={
                    currentPage === 1 ? "border-gray-500 text-gray-500" : ""
                  }
                  disabled={currentPage === 1}
                />
                {Array.from({ length: totalPages }, (_, i) => (
                  <Button
                    label={`${i + 1}`}
                    variant={
                      i === currentPage - 1
                        ? "paginationSelected"
                        : "pagination"
                    }
                    key={i}
                    onClick={() => goToPage(i + 1)}
                    className="hidden md:block"
                  />
                ))}
                <Button
                  label="Siguiente"
                  variant="paginationRight"
                  onClick={() => goToPage(currentPage + 1)}
                  className={
                    currentPage === totalPages
                      ? "border-gray-500 text-gray-500"
                      : ""
                  }
                  disabled={currentPage === totalPages}
                />
              </div>

              <div className="flex gap-2">
                {Array.from({ length: totalPages }, (_, i) => (
                  <Button
                    label={`${i + 1}`}
                    variant={
                      i === currentPage - 1
                        ? "paginationSelected"
                        : "pagination"
                    }
                    key={i}
                    onClick={() => goToPage(i + 1)}
                    className="block md:hidden"
                  />
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Search;
