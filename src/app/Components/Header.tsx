
import { LiaSchoolSolid } from "react-icons/lia";
import { IoMenuSharp } from "react-icons/io5";
import Link from "next/link";
import Image from "next/image";

export default function Header() {
  return(
    <div>
      <header className="flex shadow-md py-4 px-4 sm:px-10 bg-white min-h-[70px] tracking-wide relative z-50">
      <div className="flex flex-wrap items-center justify-between gap-5 w-full">
        {/* <a href="javascript:void(0)" className="max-sm:hidden">
            <Image
              src="/images/logo1.png"
              alt="logo" 
              height = {50}
              width = {50}
              className="w-40" /></a> */}
    <div className="flex ">
        <LiaSchoolSolid  className="mr-2 w-8 h-8" />
       <h1 className="text-2xl italic font-bold text-green-900 font-serif ">Shah latif English School</h1>
       </div>

        <div id="collapseMenu"
          className="max-lg:hidden lg:!block max-lg:before:fixed max-lg:before:bg-black max-lg:before:opacity-50 max-lg:before:inset-0 max-lg:before:z-50">
          <button id="toggleClose" className="lg:hidden fixed top-2 right-4 z-[100] rounded-full bg-white w-9 h-9 flex items-center justify-center border border-gray-200 cursor-pointer">
          <IoMenuSharp />
          </button>

          <ul
            className="lg:flex gap-x-4 max-lg:space-y-3 max-lg:fixed max-lg:bg-white max-lg:w-1/2 max-lg:min-w-[300px] max-lg:top-0 max-lg:left-0 max-lg:p-6 max-lg:h-full max-lg:shadow-md max-lg:overflow-auto z-50">
            <li className="mb-6 hidden max-lg:block">
              <a href="javascript:void(0)"><Image src="/images/logo1.png" alt="logo" width={144} height={40} className="w-36" />
              </a>
            </li>
            <li className="max-lg:border-b max-lg:border-gray-300 max-lg:py-3 px-3">
              <Link href='/' className="hover:text-blue-700 text-green-700 block font-semibold text-[15px]">Home</Link>
            </li>
            <li className="max-lg:border-b max-lg:border-gray-300 max-lg:py-3 px-3">
              <Link href='/Team' className="hover:text-blue-700 text-green-900 block font-semibold text-[15px]">Team</Link>
            </li>
            <li className="max-lg:border-b max-lg:border-gray-300 max-lg:py-3 px-3">
              <Link href='/Services' className="hover:text-blue-700 text-green-900 block font-semibold text-[15px]">Services</Link>
            </li>
            <li className="max-lg:border-b max-lg:border-gray-300 max-lg:py-3 px-3">
              <Link href='/Blog' className="hover:text-blue-700 text-green-900 block font-semibold text-[15px]">Blog</Link>
            </li>
            <li className="max-lg:border-b max-lg:border-gray-300 max-lg:py-3 px-3">
              <Link href='/About' className="hover:text-blue-700 text-green-900 block font-semibold text-[15px]">About</Link>
            </li>
            <li className="max-lg:border-b max-lg:border-gray-300 max-lg:py-3 px-3">
              <Link href='/contact' className="hover:text-blue-700 text-green-900 block font-semibold text-[15px]">Contact</Link>
            </li>
          </ul>
        </div>

        <div className="flex max-lg:ml-auto space-x-4">
          <button
            className="px-4 py-2 text-sm rounded-full font-medium cursor-pointer tracking-wide text-green-900 border border-gray-400 bg-transparent hover:bg-gray-50 transition-all">Login</button>
          <button
            className="px-4 py-2 text-sm rounded-full font-medium cursor-pointer tracking-wide text-white border border-green-900 bg-green-900 hover:bg-green-700 transition-all">Sign
            up</button>

          <button id="toggleOpen" className="lg:hidden cursor-pointer">
            <svg className="w-7 h-7" fill="#000" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clip-rule="evenodd"></path>
            </svg>
          </button>
        </div>
      </div>
    </header>
    </div>
  )
}