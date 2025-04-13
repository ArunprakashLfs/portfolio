import Link from 'next/link';

const Header = () => {
  return (
    <header className="bg-gray-900 text-white py-4 fixed top-0 w-full z-50">
      <div className="container mx-auto flex justify-between items-center px-4">
        <h1 className="text-xl font-bold">My Portfolio</h1>
        <nav>
          <ul className="flex space-x-4">
            <li>
              <Link href="#about" className="hover:text-blue-400 transition duration-300">
                About
              </Link>
            </li>
            <li>
              <Link href="#projects" className="hover:text-blue-400 transition duration-300">
                Projects
              </Link>
            </li>
            <li>
              <Link href="#contact" className="hover:text-blue-400 transition duration-300">
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;