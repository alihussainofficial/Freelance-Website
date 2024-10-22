import React from 'react';
import { Link } from 'react-router-dom';
import { Cpu, Zap, Brain, Menu } from 'lucide-react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="flex items-center space-x-2">
          <Cpu className="w-8 h-8 text-blue-600" />
          <span className="text-xl font-bold text-gray-800">EngiTech Solutions</span>
        </Link>
        <nav className="hidden md:flex space-x-6">
          <Link to="/" className="text-gray-600 hover:text-blue-600 transition duration-300">Home</Link>
          <Link to="/services" className="text-gray-600 hover:text-blue-600 transition duration-300">Services</Link>
          <Link to="/contact" className="text-gray-600 hover:text-blue-600 transition duration-300">Contact</Link>
        </nav>
        <div className="md:hidden">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-gray-600 hover:text-blue-600 transition duration-300">
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden bg-white py-2">
          <Link to="/" className="block px-4 py-2 text-gray-600 hover:bg-gray-100">Home</Link>
          <Link to="/services" className="block px-4 py-2 text-gray-600 hover:bg-gray-100">Services</Link>
          <Link to="/contact" className="block px-4 py-2 text-gray-600 hover:bg-gray-100">Contact</Link>
        </div>
      )}
    </header>
  );
};

export default Header;