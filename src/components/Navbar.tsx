import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from "./ui/button";
import { Link } from 'react-router-dom';
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuItems = [{
    text: "Início",
    href: "/"
  }, {
    text: "Produtos",
    href: "/produtos"
  }, {
    text: "Depoimentos",
    href: "#depoimentos"
  }, {
    text: "Contato",
    href: "#contato"
  }];
  return <nav className="fixed w-full bg-likekar-black/90 backdrop-blur-md z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link to="/">
              <img src="/lovable-uploads/3430e556-b884-4c88-b598-a8520a25ca7f.png" alt="Like Kar Logo" className="h-12 w-auto" />
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {menuItems.map(item => <Link key={item.text} to={item.href} className="font-montserrat text-white hover:text-likekar-yellow transition-colors">
                {item.text}
              </Link>)}
            <Button className="bg-likekar-yellow hover:bg-yellow-400 text-black font-montserrat transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-yellow-400/25 px-[16px] text-base font-medium">
              Fale conosco!
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="p-2 rounded-md focus:outline-none text-white">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && <div className="md:hidden pb-4 animate-fadeIn">
            {menuItems.map(item => <Link key={item.text} to={item.href} className="block py-2 font-montserrat text-white hover:text-likekar-yellow transition-colors" onClick={() => setIsOpen(false)}>
                {item.text}
              </Link>)}
            <Button className="w-full mt-4 bg-likekar-yellow hover:bg-yellow-400 text-black font-montserrat transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-yellow-400/25">
              Fale conosco!
            </Button>
          </div>}
      </div>
    </nav>;
};
export default Navbar;