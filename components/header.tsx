import { BsMoon, BsSun } from "react-icons/bs";
import ThemeSwitch from "./theme-switch";
import Link from "next/link";

export default function Header() {
  return (
    <header className='relative bg-violet w-full h-[160px] rounded-bl-[100px] p-10 flex items-center'>
      <div className='flex w-full justify-between'>
        <Link
          className='text-3xl font-medium text-[#fff] hover:text-opacity-70'
          href='/'
        >
          devjobs
        </Link>
        <ThemeSwitch />
      </div>
    </header>
  );
}
