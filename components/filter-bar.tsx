"use client";

import { BsSearch } from "react-icons/bs";

export default function FilterBar() {
  return (
    <div className='flex justify-center relative'>
      <form
        className='absolute -top-10 h-[80px] bg-[#fff] rounded-[6px] flex items-center justify-around gap-4 py-1 w-[80%]'
        onSubmit={(e) => e.preventDefault()}
      >
        <div className='text-violet text-2xl flex items-center gap-2'>
          <span className='text-violet text-xl hidden sm:block'>
            <BsSearch />
          </span>
          <input
            type='search'
            placeholder='Filter by title..'
            className='mx-2 outline-none'
          />
        </div>
        <div className='flex items-center gap-2'>
          <button
            type='submit'
            className='rounded-[6px] bg-violet h-[48px] m:w-[123px] md:w-[80px] w-[48px] text-[#fff] font-semibold flex items-center justify-center gap-2 transition hover:bg-light-violet'
          >
            <span className='sm:block hidden'>Search</span>
            <span className='sm:hidden '>
              <BsSearch className='text-xl' />
            </span>
          </button>
        </div>
      </form>
    </div>
  );
}
