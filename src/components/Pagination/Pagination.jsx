import React from "react";
import Button from "@/components/Button/Button";

const Pagination = ({ totalPages, currentPage, goToPage }) => {
  if (totalPages <= 1) return <div className="mb-[3.75rem]"></div>;

  return (
    <div className="my-12 px-5 lg:px-20 w-full flex items-center justify-center">
      <div className="flex flex-col md:flex-row gap-4 items-center">
        <div className="flex gap-2">
          <Button
            label="Previous"
            variant="paginationLeft"
            onClick={() => goToPage(currentPage - 1)}
            className={
              currentPage === 1
                ? "border-gray-500 text-gray-500 cursor-default"
                : "hover:bg-white hover:text-black"
            }
            disabled={currentPage === 1}
          />
          {Array.from({ length: totalPages }, (_, i) => (
            <Button
              label={`${i + 1}`}
              variant={
                i === currentPage - 1 ? "paginationSelected" : "pagination"
              }
              key={i}
              onClick={() => goToPage(i + 1)}
              className="hidden md:block"
            />
          ))}
          <Button
            label="Next"
            variant="paginationRight"
            onClick={() => goToPage(currentPage + 1)}
            className={
              currentPage === totalPages
                ? "border-gray-500 text-gray-500 cursor-default"
                : "hover:bg-white hover:text-black"
            }
            disabled={currentPage === totalPages}
          />
        </div>
        <div className="flex gap-2">
          {Array.from({ length: totalPages }, (_, i) => (
            <Button
              label={`${i + 1}`}
              variant={
                i === currentPage - 1 ? "paginationSelected" : "pagination"
              }
              key={i}
              onClick={() => goToPage(i + 1)}
              className="block md:hidden"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Pagination;
