"use client";

import Button from "@/components/Button/Button";
import styles from "@/components/Article/Article.module.scss";
import Card from "@/components/Card/Card";
import { ARTICLES } from "@/data/index";
import { useState, useRef } from "react";
import Pagination from "@/components/Pagination/Pagination";

const Articles = () => {
  const [filter, setFilter] = useState("none");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;
  const filterSectionRef = useRef(null);

  const applyFilter = (newFilter) => {
    setFilter((prevFilter) => (prevFilter === newFilter ? "none" : newFilter));
    setCurrentPage(1);
    scrollToFilter();
  };

  const filteredArticles = ARTICLES.filter(
    (article) => filter === "none" || article.genre.includes(filter)
  );

  const totalPages = Math.ceil(filteredArticles.length / itemsPerPage);

  const paginatedArticles = filteredArticles.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const goToPage = (page) => {
    if (page > 0 && page <= totalPages) {
      setCurrentPage(page);
      scrollToFilter();
    }
  };

  const scrollToFilter = () => {
    if (filterSectionRef.current) {
      filterSectionRef.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  const filters = [...new Set(ARTICLES.flatMap((article) => article.genre))];

  return (
    <section className="w-full flex justify-center">
      <div className="max-w-[1440px] w-full">
        <div className="flex flex-col items-center gap-6 px-5 lg:px-20 max-w-[650px] m-auto">
          <h2 className="text-4xl lg:text-5xl font-bold text-center">
            Latest news
          </h2>
          <p className="text-center text-base lg:text-lg">
            Stay updated and learn about digital advertising, success stories,
            creativity and the most interesting topics in the industry.
          </p>
        </div>
        <div
          ref={filterSectionRef}
          className="flex items-center justify-center py-12 lg:py-[3.75rem] pl-5"
        >
          <span className="text-base font-bold mr-4">Filter:</span>
          <div
            className={`flex gap-4 overflow-x-auto text-nowrap ${styles.scrollbar}`}
          >
            {filters.map((filterLabel, index) => (
              <Button
                variant={`${
                  filterLabel === filter ? "filterSelected" : "filter"
                }`}
                label={filterLabel}
                key={index}
                onClick={() => applyFilter(filterLabel)}
              />
            ))}
          </div>
        </div>
        <div
          className={`flex flex-col items-center md:grid ${
            paginatedArticles.length > 3
              ? "md:grid-cols-2 md:grid-rows-2 "
              : "sm:grid-cols-1 sm:grid-rows-1"
          }
           xl:grid-cols-3 px-5 xl:px-20 gap-x-8 gap-y-8 xl:gap-y-[3.75rem]`}
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
        <Pagination
          totalPages={totalPages}
          currentPage={currentPage}
          goToPage={goToPage}
        />
      </div>
    </section>
  );
};

export default Articles;
