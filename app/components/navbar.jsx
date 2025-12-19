// @flow strict
import Link from "next/link";


function Navbar() {
  return (
    <nav className="bg-transparent" aria-label="Main navigation">
      <div className="flex items-center justify-between py-5">
        <div className="flex flex-shrink-0 items-center">
          <Link
            href="/"
            className=" text-[#16f2b3] text-3xl font-bold"
            aria-label="Shoeb Khan - Home">
            SHOEB KHAN
          </Link>
        </div>

        <ul className="mt-4 flex h-screen max-h-0 w-full flex-col items-start text-sm opacity-0 md:mt-0 md:h-auto md:max-h-screen md:w-auto md:flex-row md:space-x-1 md:border-0 md:opacity-100" id="navbar-default" role="list">
          <li role="listitem">
            <Link 
              className="block px-4 py-2 no-underline outline-none hover:no-underline focus:ring-2 focus:ring-[#16f2b3] focus:ring-offset-2 focus:ring-offset-[#0d1224] rounded" 
              href="/#about"
              aria-label="Navigate to About section">
              <div className="text-sm text-white transition-colors duration-300 hover:text-pink-600">ABOUT</div>
            </Link>
          </li>
          <li role="listitem">
            <Link 
              className="block px-4 py-2 no-underline outline-none hover:no-underline focus:ring-2 focus:ring-[#16f2b3] focus:ring-offset-2 focus:ring-offset-[#0d1224] rounded" 
              href="/#experience"
              aria-label="Navigate to Experience section">
              <div className="text-sm text-white transition-colors duration-300 hover:text-pink-600">EXPERIENCE</div>
            </Link>
          </li>
          <li role="listitem">
            <Link 
              className="block px-4 py-2 no-underline outline-none hover:no-underline focus:ring-2 focus:ring-[#16f2b3] focus:ring-offset-2 focus:ring-offset-[#0d1224] rounded" 
              href="/#skills"
              aria-label="Navigate to Skills section">
              <div className="text-sm text-white transition-colors duration-300 hover:text-pink-600">SKILLS</div>
            </Link>
          </li>
          <li role="listitem">
            <Link 
              className="block px-4 py-2 no-underline outline-none hover:no-underline focus:ring-2 focus:ring-[#16f2b3] focus:ring-offset-2 focus:ring-offset-[#0d1224] rounded" 
              href="/#education"
              aria-label="Navigate to Education section">
              <div className="text-sm text-white transition-colors duration-300 hover:text-pink-600">EDUCATION</div>
            </Link>
          </li>
          <li role="listitem">
            <Link 
              className="block px-4 py-2 no-underline outline-none hover:no-underline focus:ring-2 focus:ring-[#16f2b3] focus:ring-offset-2 focus:ring-offset-[#0d1224] rounded" 
              href="/blog"
              aria-label="Navigate to Blog page">
              <div className="text-sm text-white transition-colors duration-300 hover:text-pink-600">BLOGS</div>
            </Link>
          </li>
          <li role="listitem">
            <Link 
              className="block px-4 py-2 no-underline outline-none hover:no-underline focus:ring-2 focus:ring-[#16f2b3] focus:ring-offset-2 focus:ring-offset-[#0d1224] rounded" 
              href="/#projects"
              aria-label="Navigate to Projects section">
              <div className="text-sm text-white transition-colors duration-300 hover:text-pink-600">PROJECTS</div>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;