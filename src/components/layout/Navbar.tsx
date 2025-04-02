
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="py-6 px-6 md:px-12 border-b border-gray-100">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <Link to="/" className="text-xl md:text-2xl font-serif font-medium">
          Artist Name
        </Link>
        <div className="flex gap-8">
          <Link 
            to="/" 
            className="text-sm md:text-base text-gray-600 hover:text-black transition-colors"
          >
            Home
          </Link>
          <Link 
            to="/prices" 
            className="text-sm md:text-base text-gray-600 hover:text-black transition-colors"
          >
            Prices
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
