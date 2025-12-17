import React from 'react';

export interface PaginationProps {
  totalRecords: number;
  pageSize: number;
  currentPage: number;
  onPageChange: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({
  totalRecords,
  pageSize,
  currentPage,
  onPageChange,
}) => {
  const totalPages = Math.max(1, Math.ceil(totalRecords / pageSize));

  if (totalPages <= 1) return null;

  const goToPage = (page: number) => {
    if (page < 1 || page > totalPages || page === currentPage) return;
    onPageChange(page);
  };

  const createPageList = (): (number | 'ellipsis')[] => {
    if (totalPages <= 7) {
      return Array.from({ length: totalPages }, (_, i) => i + 1);
    }

    const pages: (number | 'ellipsis')[] = [];
    const firstPage = 1;
    const lastPage = totalPages;

    const addPage = (page: number) => {
      if (!pages.includes(page)) {
        pages.push(page);
      }
    };

    addPage(firstPage);
    addPage(lastPage);

    const minRange = Math.max(2, currentPage - 1);
    const maxRange = Math.min(totalPages - 1, currentPage + 1);

    for (let p = minRange; p <= maxRange; p += 1) {
      addPage(p);
    }

    pages.sort((a, b) => {
      if (a === 'ellipsis' || b === 'ellipsis') return 0;
      return a - b;
    });

    const finalPages: (number | 'ellipsis')[] = [];
    for (let i = 0; i < pages.length; i += 1) {
      const value = pages[i];
      if (i === 0) {
        finalPages.push(value);
        continue;
      }

      const prev = pages[i - 1];
      if (typeof value === 'number' && typeof prev === 'number') {
        if (value - prev === 1) {
          finalPages.push(value);
        } else {
          finalPages.push('ellipsis');
          finalPages.push(value);
        }
      }
    }

    return finalPages;
  };

  const pagesToRender = createPageList();

  const baseBtnClasses =
    'inline-flex items-center justify-center h-9 min-w-[2.25rem] rounded-full border text-xs sm:text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-400 focus-visible:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50';

  return (
    <nav className="flex items-center gap-2" aria-label="Pagination navigation">
      {/* Previous */}
      <button
        type="button"
        aria-label="Previous page"
        disabled={currentPage === 1}
        onClick={() => goToPage(currentPage - 1)}
        className={`${baseBtnClasses} border-gray-200 bg-white text-gray-700 hover:bg-gray-50`}
      >
        Prev
      </button>

      {/* Page numbers */}
      <div className="flex items-center gap-1">
        {pagesToRender.map((item, index) =>
          item === 'ellipsis' ? (
            <span
              key={`ellipsis-${index}`}
              className="inline-flex h-9 min-w-[2.25rem] items-center justify-center text-xs text-gray-400"
              aria-hidden="true"
            >
              ...
            </span>
          ) : (
            <button
              key={item}
              type="button"
              onClick={() => goToPage(item)}
              aria-label={`Page ${item}`}
              aria-current={item === currentPage ? 'page' : undefined}
              className={
                item === currentPage
                  ? `${baseBtnClasses} border-orange-500 bg-orange-500 text-white hover:bg-orange-600`
                  : `${baseBtnClasses} border-gray-200 bg-white text-gray-700 hover:bg-gray-50`
              }
            >
              {item}
            </button>
          ),
        )}
      </div>

      {/* Next */}
      <button
        type="button"
        aria-label="Next page"
        disabled={currentPage === totalPages}
        onClick={() => goToPage(currentPage + 1)}
        className={`${baseBtnClasses} border-gray-200 bg-white text-gray-700 hover:bg-gray-50`}
      >
        Next
      </button>
    </nav>
  );
};

export default Pagination;