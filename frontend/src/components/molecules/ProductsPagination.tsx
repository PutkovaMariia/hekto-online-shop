interface PaginationProps {
  page: number;
  totalPages: number;
  onPageChange: (newPage: number) => void;
}

export function ProductsPagination({ page, totalPages, onPageChange }: PaginationProps) {
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <div className="flex justify-end items-center gap-2 mt-4 font-sans font-normal text-base">
      {pages.map((pageNumber) => (
        <button
          key={pageNumber}
          onClick={() => onPageChange(pageNumber)}
          className={`px-4 py-1 rounded ${
            page === pageNumber ? 'bg-primary-light text-white-bright' : 'bg-transparent text-black'
          }`}
        >
          {pageNumber}
        </button>
      ))}
    </div>
  );
}
