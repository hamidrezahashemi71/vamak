import React from "react";
import * as HiIcons from "react-icons/hi";

const PaginationComp = () => {
  return (
    <div className='bg-white px-4 py-3 flex items-center justify-between border-t border-lightGray sm:px-6'>
      <div className='flex-1 flex justify-between sm:hidden'>
        <a
          href='#'
          className='relative inline-flex items-center px-4 py-2 border border-gray text-sm font-medium rounded-md text-gray bg-white hover:bg-gray'>
          Previous
        </a>
        <a
          href='#'
          className='ml-3 relative inline-flex items-center px-4 py-2 border border-gray text-sm font-medium rounded-md text-gray bg-white hover:bg-gray'>
          Next
        </a>
      </div>
      <div className='hidden sm:flex-1 sm:flex sm:items-center sm:justify-between'>
        <div>
          <nav
            className='relative z-0 inline-flex rounded-md shadow-sm -space-x-px'
            aria-label='Pagination'>
            <a
              href='#'
              className='relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray bg-white text-sm font-medium text-gray-500 hover:bg-gray'>
              <span className='sr-only'>Previous</span>
              <HiIcons.HiChevronLeft className='h-5 w-5' aria-hidden='true' />
            </a>
            {/* Current: "z-10 bg-lightBlue border-blue text-indigo-600", Default: "bg-white border-gray text-gray-500 hover:bg-gray" */}
            <a
              href='#'
              aria-current='page'
              className='z-10 bg-lightBlue border-blue text-indigo-600 relative inline-flex items-center px-4 py-2 border text-sm font-medium'>
              1
            </a>
            <a
              href='#'
              className='bg-white border-gray text-gray-500 hover:bg-gray relative inline-flex items-center px-4 py-2 border text-sm font-medium'>
              2
            </a>
            <a
              href='#'
              className='bg-white border-gray text-gray-500 hover:bg-gray hidden md:inline-flex relative items-center px-4 py-2 border text-sm font-medium'>
              3
            </a>
            <span className='relative inline-flex items-center px-4 py-2 border border-gray bg-white text-sm font-medium text-gray'>
              ...
            </span>
            <a
              href='#'
              className='bg-white border-gray text-gray-500 hover:bg-gray hidden md:inline-flex relative items-center px-4 py-2 border text-sm font-medium'>
              8
            </a>
            <a
              href='#'
              className='bg-white border-gray text-gray-500 hover:bg-gray relative inline-flex items-center px-4 py-2 border text-sm font-medium'>
              9
            </a>
            <a
              href='#'
              className='bg-white border-gray text-gray-500 hover:bg-gray relative inline-flex items-center px-4 py-2 border text-sm font-medium'>
              10
            </a>
            <a
              href='#'
              className='relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray bg-white text-sm font-medium text-gray-500 hover:bg-gray'>
              <span className='sr-only'>Next</span>
              <HiIcons.HiChevronRight className='h-5 w-5' aria-hidden='true' />
            </a>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default PaginationComp;
