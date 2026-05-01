import React from 'react';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

const Pagination = ({ totalItems, itemsPerPage, currentPage, onPageChange }) => {
    const totalPages = Math.ceil(totalItems / itemsPerPage);

    if (totalPages <= 1) return null;

    const pages = [];
    for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
    }

    return (
        <div className="flex justify-center items-center gap-4 mt-16">
            <button
                onClick={() => onPageChange(Math.max(1, currentPage - 1))}
                disabled={currentPage === 1}
                className="p-2 text-gray-400 hover:text-slate-900 disabled:opacity-30 transition-colors"
            >
                <FiChevronLeft className="w-6 h-6" />
            </button>

            <div className="flex items-center gap-6">
                {pages.map((page) => (
                    <button
                        key={page}
                        onClick={() => onPageChange(page)}
                        className={`font-bold transition-colors text-lg ${
                            currentPage === page
                                ? 'text-red-600'
                                : 'text-gray-400 hover:text-slate-900'
                        }`}
                    >
                        {page}
                    </button>
                ))}
            </div>

            <button
                onClick={() => onPageChange(Math.min(totalPages, currentPage + 1))}
                disabled={currentPage === totalPages}
                className="p-2 text-gray-400 hover:text-slate-900 disabled:opacity-30 transition-colors"
            >
                <FiChevronRight className="w-6 h-6" />
            </button>
        </div>
    );
};

export default Pagination;
