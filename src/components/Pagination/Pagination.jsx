import React from "react";

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const renderPaginationItems = () => {
    const paginationItems = [];
    for (let i = 1; i <= totalPages; i++) {
      paginationItems.push(
        <button
          key={i}
          className={`inline-flex w-11 h-11 items-center justify-center rounded-full ${
            currentPage === i
              ? "bg-primary-6000 text-white"
              : "bg-white hover:bg-neutral-100 border border-neutral-200 text-neutral-6000 dark:text-neutral-400 dark:bg-neutral-900 dark:hover:bg-neutral-800 dark:border-neutral-700"
          }`}
          onClick={(e) => {
            e.preventDefault();
            onPageChange(i);
          }}
        >
          {i}
        </button>
      );
    }
    return paginationItems;
  };

  return (
    <nav className="nc-Pagination inline-flex space-x-1 text-base font-medium">
      {renderPaginationItems()}
    </nav>
  );
};

export default Pagination;
